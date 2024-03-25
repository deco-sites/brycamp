import { type ComponentChildren } from "preact";

export interface Props {
  children: ComponentChildren;
}

/**
 *
 * const element = document.getElementById(
            "show-more-partial-image-gallery",
          );

          console.log(element);

          if (element) {
            element.click();
          }
 */

function ShowMore({ children }: Props) {
  const handleClick = () => {
    console.log("lorem");
  };

  console.log("handleClick", handleClick);

  return (
    <div>
      {children}
      <button
        onClick={handleClick}
      >
        Show More
      </button>
    </div>
  );
}

export default ShowMore;
