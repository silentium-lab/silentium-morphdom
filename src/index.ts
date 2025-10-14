import morphdom from "morphdom";
import { All, EventType } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export function Render(
  rootSrc: EventType<HTMLElement>,
  htmlSrc: EventType<string>,
): EventType<HTMLElement> {
  return (user) => {
    All(
      rootSrc,
      htmlSrc,
    )(([root, html]) => {
      morphdom(root, html);
      user(root);
    });
  };
}
