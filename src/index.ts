import morphdom from "morphdom";
import { All, From, TheInformation, TheOwner } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export class Render extends TheInformation<HTMLElement> {
  public constructor(
    private rootSrc: TheInformation<HTMLElement>,
    private htmlSrc: TheInformation<string>,
  ) {
    super(rootSrc, htmlSrc);
  }

  public value(o: TheOwner<HTMLElement>): this {
    new All(this.rootSrc, this.htmlSrc).value(
      new From(([root, html]) => {
        morphdom(root, html);
        o.give(root);
      }),
    );
    return this;
  }
}
