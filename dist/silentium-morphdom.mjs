import morphdom from 'morphdom';
import { TheInformation, All, From } from 'silentium';

class Render extends TheInformation {
  constructor(rootSrc, htmlSrc) {
    super(rootSrc, htmlSrc);
    this.rootSrc = rootSrc;
    this.htmlSrc = htmlSrc;
  }
  value(o) {
    new All(this.rootSrc, this.htmlSrc).value(
      new From(([root, html]) => {
        morphdom(root, html);
        o.give(root);
      })
    );
    return this;
  }
}

export { Render };
//# sourceMappingURL=silentium-morphdom.mjs.map
