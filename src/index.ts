import morphdom from "morphdom";
import { All, Event, EventType, TransportParent } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export function Render(
  $root: EventType<HTMLElement>,
  $html: EventType<string>,
): EventType<HTMLElement> {
  const $all = All($root, $html);
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
