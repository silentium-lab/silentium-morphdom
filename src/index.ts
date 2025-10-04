import morphdom from "morphdom";
import { all, DataType } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export const render =
  (
    rootSrc: DataType<HTMLElement>,
    htmlSrc: DataType<string>,
  ): DataType<HTMLElement> =>
  (user) => {
    all(
      rootSrc,
      htmlSrc,
    )(([root, html]) => {
      morphdom(root, html);
      user(root);
    });
  };
