import morphdom from 'morphdom';
import { Applied, All, Message } from 'silentium';

function Render($root, $html) {
  let div = null;
  const $rootChild = Applied($root, (root) => {
    div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  return Message(function RenderImpl(r) {
    $all.then(([html]) => {
      if (div !== null) {
        div = morphdom(div, html);
        r(div);
      }
    });
  });
}

export { Render };
//# sourceMappingURL=silentium-morphdom.mjs.map
