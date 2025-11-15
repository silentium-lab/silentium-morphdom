import morphdom from 'morphdom';
import { Applied, All, TransportParent, Message } from 'silentium';

function Render($root, $html) {
  let div = null;
  const $rootChild = Applied($root, (root) => {
    div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  const transport = TransportParent(function([html]) {
    if (div !== null) {
      div = morphdom(div, html);
      this.use(div);
    }
  });
  return Message((t) => {
    $all.to(transport.child(t));
  });
}

export { Render };
//# sourceMappingURL=silentium-morphdom.js.map
