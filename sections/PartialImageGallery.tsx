import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import ShowMore from "../islands/PartialImageGallery/ShowMore.tsx";

export interface Props {
  images: ImageWidget[];
}

function PartialImageGallery({ images }: Props) {
  return (
    <div>
      <div className="grid grid-cols-3">
        {images.length > 0 && images.map((value, i) => {
          return (
            <Image
              src={value}
              alt={value}
              width={100}
              height={100}
            />
          );
        })}
      </div>
      <ShowMore>
        <button
          id="show-more-partial-image-gallery"
          className="hidden"
          {...usePartialSection({
            props: {
              images: [
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
                "https://placehold.co/600x400?text=Hello+World",
              ],
            },
            mode: "append",
          })}
        >
          Show More
        </button>
      </ShowMore>
    </div>
  );
}

export default PartialImageGallery;
