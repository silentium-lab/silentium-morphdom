import morphdom from 'morphdom';
import { Applied, All, Message } from 'silentium';

function Render($root, $html) {
  const $rootChild = Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  return Message(function RenderImpl(r) {
    $all.then(([html, div]) => {
      if (div !== null) {
        r(morphdom(div, html));
      }
    });
  });
}

export { Render };
//# sourceMappingURL=silentium-morphdom.js.map
