import morphdom from "morphdom";
import { all, EventType } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export const render =
  (
    rootSrc: EventType<HTMLElement>,
    htmlSrc: EventType<string>,
  ): EventType<HTMLElement> =>
  (user) => {
    all(
      rootSrc,
      htmlSrc,
    )(([root, html]) => {
      morphdom(root, html);
      user(root);
    });
  };
