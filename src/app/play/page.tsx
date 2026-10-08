import PlayCanvas from "@/components/PlayCanvas";
import { playGalleryItemsOptimized } from "@/data/play-gallery-merged";

export default function PlayPage() {
  return (
    <main id="play-page">
      <PlayCanvas items={playGalleryItemsOptimized} />
    </main>
  );
}
