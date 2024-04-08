import { useState } from "preact/hooks";
import { type ComponentChildren } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  children?: ComponentChildren;
  initial: number;
  end: number;
  index: number;
  images: ImageWidget[];
}

export default function Island(
  { children, images, initial, end, index }: Props,
) {
  const [showCount, setShowCount] = useState(3);

  return (
    <>
      {children}
      <div className="flex justify-center mt-3">
        <button
          className="btn"
          onClick={(e) => {
            const el = document.getElementById(
              `show-more-partial-image-gallery-${index}`,
            );

            if (el) {
              el.click();
            }

            if (images.length > end) {
              e.currentTarget.classList.add("hidden");
            }
          }}
        >
          Show More
        </button>
      </div>
      {
        /* <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {images.length > 0 && images.slice(0, showCount).map((value, i) => {
          return (
            <li
              key={i}
              className="group overflow-hidden flex items-center justify-center max-h-[300px]"
            >
              <Image
                src={value}
                alt={value}
                width={500}
                className="min-w-full group-hover:scale-110 transition-all"
              />
            </li>
          );
        })}
      </ul> */
      }
      {
        /* {images.length > showCount && (
        <div class="flex justify-center mt-3">
          <button
            className="btn"
            onClick={() => {
              setShowCount((v) => v + 3);
            }}
          >
            Show More
          </button>
        </div>
      )} */
      }
    </>
  );
}
