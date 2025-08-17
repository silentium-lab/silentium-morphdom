import morphdom from 'morphdom';
import { all } from 'silentium';

const render = (rootSrc, htmlSrc) => {
  return (o) => {
    all(
      rootSrc,
      htmlSrc
    )(([root, html]) => {
      morphdom(root, html);
      o(root);
    });
  };
};

export { render };
//# sourceMappingURL=silentium-morphdom.mjs.map
