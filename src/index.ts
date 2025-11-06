import morphdom from "morphdom";
import { All, Applied, Event, EventType, TransportParent } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export function Render(
  $root: EventType<HTMLElement>,
  $html: EventType<string>,
): EventType<HTMLElement> {
  const $rootChild = Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($rootChild, $html);
  const transport = TransportParent<[HTMLElement, string]>(function ([
    root,
    html,
  ]) {
    morphdom(root, html);
    this.use(root);
  });
  return Event((t) => {
    $all.event(transport.child(t));
  });
}
