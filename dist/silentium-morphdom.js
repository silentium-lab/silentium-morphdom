import morphdom from 'morphdom';
import { All } from 'silentium';

function Render(rootSrc, htmlSrc) {
  return (user) => {
    All(
      rootSrc,
      htmlSrc
    )(([root, html]) => {
      morphdom(root, html);
      user(root);
    });
  };
}

export { Render };
//# sourceMappingURL=silentium-morphdom.js.map
