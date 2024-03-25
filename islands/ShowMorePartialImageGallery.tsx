import { type ComponentChildren } from "preact";

export interface Props {
  children?: ComponentChildren;
}

export default function Island({ children }: Props) {
  return (
    <div>
      {children}
      <button
        onClick={() => {
          const el = document.getElementById("show-more-partial-image-gallery");

          if (el) {
            el.click();
          }
        }}
      >
        Show More
      </button>
    </div>
  );
}
