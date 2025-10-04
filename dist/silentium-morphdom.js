import morphdom from 'morphdom';
import { all } from 'silentium';

const render = (rootSrc, htmlSrc) => (user) => {
  all(
    rootSrc,
    htmlSrc
  )(([root, html]) => {
    morphdom(root, html);
    user(root);
  });
};

export { render };
//# sourceMappingURL=silentium-morphdom.js.map
