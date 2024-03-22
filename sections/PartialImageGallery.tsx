import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  images: ImageWidget[];
}

function PartialImageGallery(props: Props) {
  return (
    <div>
      <div className="grid grid-cols-3">
        {props.images.length > 0 && props.images.map((value, i) => {
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
      <button
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
    </div>
  );
}

export default PartialImageGallery;
