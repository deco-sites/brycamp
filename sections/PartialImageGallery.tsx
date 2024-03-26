import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import ShowMorePartialImageGallery from "../islands/ShowMorePartialImageGallery.tsx";

export interface Props {
  /**
   * @minItems 3
   */
  images: ImageWidget[];
}

function PartialImageGallery({ images }: Props) {
  images = [
    "https://placehold.co/100",
    "https://placehold.co/100",
    "https://placehold.co/100",
    ...images,
  ];

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
