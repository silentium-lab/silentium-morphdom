import morphdom from 'morphdom';
import { Applied, All, TransportParent, Event } from 'silentium';

function Render($root, $html) {
  const $rootChild = Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($rootChild, $html);
  const transport = TransportParent(function([
    root,
    html
  ]) {
    morphdom(root, html);
    this.use(root);
  });
  return Event((t) => {
    $all.event(transport.child(t));
  });
}

export { Render };
//# sourceMappingURL=silentium-morphdom.mjs.map
