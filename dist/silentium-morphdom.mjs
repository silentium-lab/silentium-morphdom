import morphdom from 'morphdom';
import { All, TransportParent, Event } from 'silentium';

function Render($root, $html) {
  const $all = All($root, $html);
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
