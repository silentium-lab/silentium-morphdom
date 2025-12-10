import morphdom from 'morphdom';
import { Applied, All, Shared, Message } from 'silentium';

function Render($root, $html) {
  const $rootChild = Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  return Shared(Message(function RenderImpl(resolve, reject) {
    $all.then(([html, div]) => {
      try {
        resolve(morphdom(div, html));
      } catch (e) {
        reject("Error in Render function from morphdom " + e.message);
      }
    });
  }));
}

export { Render };
//# sourceMappingURL=silentium-morphdom.mjs.map
