import morphdom from "morphdom";
import {
  All,
  From,
  InformationType,
  OwnerType,
  TheInformation,
} from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export class Render extends TheInformation<HTMLElement> {
  public constructor(
    private rootSrc: InformationType<HTMLElement>,
    private htmlSrc: InformationType<string>,
  ) {
    super(rootSrc, htmlSrc);
  }

  public value(o: OwnerType<HTMLElement>): this {
    new All(this.rootSrc, this.htmlSrc).value(
      new From(([root, html]) => {
        morphdom(root, html);
        o.give(root);
      }),
    );
    return this;
  }
}
