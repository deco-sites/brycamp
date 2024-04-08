import { useState } from "preact/hooks";
import { type ComponentChildren } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  children?: ComponentChildren;
  images: ImageWidget[];
}

export default function Island({ children, images }: Props) {
  const [showCount, setShowCount] = useState(3);

  return (
    <>
      {children}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {images.length > 0 && images.slice(0, showCount).map((value, i) => {
          return (
            <li key={i} className="group overflow-hidden">
              <Image
                src={value}
                alt={value}
                width={500}
                className="min-w-full group-hover:scale-110 transition-all"
              />
            </li>
          );
        })}
      </ul>
      {
        /* <button
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
      </button> */
      }
      {images.length > showCount && (
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
      )}
    </>
  );
}
