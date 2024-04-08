import { ImageWidget } from "apps/admin/widgets.ts";
import ShowMorePartialImageGallery from "../islands/ShowMorePartialImageGallery.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @hide */
  initial: number;
  /** @hide */
  end: number;
  /**
   * @minItems 3
   */
  images: ImageWidget[];
}

function PartialImageGallery({ initial = 0, end = 3, images }: Props) {
  if (!images || !images.length) images = [];

  if (images.length < 3) {
    const calc = 3 - images.length;
    for (let i = 0; i < calc; i++) {
      images.push("https://placehold.co/500x300");
    }
  }

  return (
    <div className="container px-2">
      {
        /* <ShowMorePartialImageGallery
        images={images}
      /> */
      }
      <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
        {images.length > 0 && images.slice(initial, end).map((value, i) => {
          return (
            <Image
              src={value}
              alt={value}
              width={500}
              height={300}
            />
          );
        })}
      </div>
      {images.length > 3 && (
        <button
          id="show-more-partial-image-gallery"
          {...usePartialSection({
            props: {
              images,
              initial: initial + 3,
              end: end + 3,
            },
            mode: "append",
          })}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default PartialImageGallery;
