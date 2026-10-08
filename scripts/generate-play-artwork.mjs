/**
 * Generates WebP grid (~800px) and full (~1600px) for play artwork.
 * Writes src/data/play-gallery-web.json (merged at runtime — originals not loaded by the page).
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const artworkDir = path.join(root, "public/play-artwork");
const gridDir = path.join(artworkDir, "web/grid");
const fullDir = path.join(artworkDir, "web/full");
const galleryPath = path.join(root, "src/data/play-gallery.ts");
const manifestPath = path.join(root, "src/data/play-gallery-web.json");

const GRID_WIDTH = 800;
const FULL_WIDTH = 1600;
const WEBP_QUALITY = 70;

function stemFromPublicSrc(src) {
  return path.basename(src).replace(/\.[^.]+$/i, "");
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function aspectRatioString(width, height) {
  const d = gcd(width, height);
  return `${width / d} / ${height / d}`;
}

function parseGalleryItems(content) {
  const items = [];
  const blockRe = /\{\s*id:\s*"([^"]+)"[\s\S]*?src:\s*"([^"]+)"[\s\S]*?aspectRatio:\s*"([^"]+)"/g;
  let m;
  while ((m = blockRe.exec(content)) !== null) {
    items.push({ id: m[1], src: m[2], aspectRatio: m[3] });
  }
  return items;
}

async function ensureDirs() {
  await fs.mkdir(gridDir, { recursive: true });
  await fs.mkdir(fullDir, { recursive: true });
}

async function processImage(originalRelSrc) {
  const rel = originalRelSrc.replace(/^\//, "");
  const inputPath = path.join(root, "public", rel);
  const stem = stemFromPublicSrc(originalRelSrc);
  const gridOut = path.join(gridDir, `${stem}.webp`);
  const fullOut = path.join(fullDir, `${stem}.webp`);

  const sourcePath = originalRelSrc.includes("/web/")
    ? inputPath
    : inputPath;

  try {
    await fs.access(sourcePath);
  } catch {
    console.warn(`Skip missing: ${originalRelSrc}`);
    return null;
  }

  const meta = await sharp(sourcePath, { failOn: "none" }).rotate().metadata();

  await sharp(sourcePath, { failOn: "none" })
    .rotate()
    .resize({ width: GRID_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(gridOut);

  await sharp(sourcePath, { failOn: "none" })
    .rotate()
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(fullOut);

  const gridMeta = await sharp(gridOut).metadata();
  const width = gridMeta.width ?? GRID_WIDTH;
  const height = gridMeta.height ?? Math.round(GRID_WIDTH * 1.25);

  return {
    src: `/play-artwork/web/grid/${stem}.webp`,
    srcFull: `/play-artwork/web/full/${stem}.webp`,
    width,
    height,
    aspectRatio: aspectRatioString(meta.width ?? width, meta.height ?? height),
    placeholder: "#e6e6e6",
  };
}

async function main() {
  await ensureDirs();
  const galleryContent = await fs.readFile(galleryPath, "utf8");
  const items = parseGalleryItems(galleryContent);
  const manifest = {};

  for (const item of items) {
    const originalSrc = item.src.includes("/web/") ? item.src.replace("/web/grid/", "/").replace(/\.webp$/, "") : item.src;
    // Resolve original: if already web, try to find original extension
    let srcToProcess = item.src;
    if (item.src.includes("/web/grid/")) {
      const stem = stemFromPublicSrc(item.src);
      const candidates = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"].map(
        (ext) => `/play-artwork/${stem}${ext}`,
      );
      for (const c of candidates) {
        try {
          await fs.access(path.join(root, "public", c.replace(/^\//, "")));
          srcToProcess = c;
          break;
        } catch {
          /* try next */
        }
      }
    }

    const result = await processImage(srcToProcess);
    if (result) {
      manifest[item.id] = result;
      console.log(`OK ${item.id} ${srcToProcess}`);
    }
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Wrote ${manifestPath} (${Object.keys(manifest).length} items)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
