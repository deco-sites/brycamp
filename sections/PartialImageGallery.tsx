import { ImageWidget } from "apps/admin/widgets.ts";
import ShowMorePartialImageGallery from "../islands/ShowMorePartialImageGallery.tsx";

export interface Props {
  /**
   * @minItems 3
   */
  images: ImageWidget[];
}

function PartialImageGallery({ images }: Props) {
  if (!images || !images.length) images = [];

  if (images.length < 3) {
    const calc = 3 - images.length;
    for (let i = 0; i < calc; i++) {
      images.push("https://placehold.co/500x300");
    }
  }

  return (
    <div className="container px-2">
      <ShowMorePartialImageGallery
        images={images}
      />
      {
        /* <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
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
      {images.length > maxForPage && (
        <ShowMorePartialImageGallery>
          <button
            id="show-more-partial-image-gallery"
            className="hidden"
            {...usePartialSection({
              props: {
                images: [
                  ...images
                ],
              },
              mode: "append",
            })}
          >
            Show More
          </button>
        </ShowMorePartialImageGallery>
      )} */
      }
    </div>
  );
}

export default PartialImageGallery;
