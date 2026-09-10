import PlayCanvas from "@/components/PlayCanvas";
import { playGalleryItems } from "@/data/play-gallery";

export default function PlayPage() {
  return (
    <main id="play-page">
      <PlayCanvas items={playGalleryItems} />
    </main>
  );
}
