import { ImageWidget } from "apps/admin/widgets.ts";
import ShowMorePartialImageGallery from "../islands/ShowMorePartialImageGallery.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @hide */
  initial: number;
  /** @hide */
  end: number;
  /** @hide */
  index: number;
  /**
   * @minItems 3
   */
  images: ImageWidget[];
}

function PartialImageGallery(
  { initial = 0, end = 3, index = 0, images }: Props,
) {
  if (!images || !images.length) images = [];

  if (images.length < 3) {
    const calc = 3 - images.length;
    for (let i = 0; i < calc; i++) {
      images.push("https://placehold.co/500x300");
    }
  }

  console.log({
    len: images.length,
    end,
  });

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
      {images.length > end && (
        <ShowMorePartialImageGallery
          images={images}
          index={index}
          initial={initial}
          end={end}
        >
          <button
            id={`show-more-partial-image-gallery-${index}`}
            className="hidden"
            {...usePartialSection({
              props: {
                images,
                initial: initial + 3,
                end: end + 3,
                index: index + 1,
              },
              mode: "append",
            })}
          >
            Show More
          </button>
        </ShowMorePartialImageGallery>
      )}
    </div>
  );
}

export default PartialImageGallery;
