import morphdom from "morphdom";
import { All, Applied, Message, MessageType, TransportParent } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export function Render(
  $root: MessageType<HTMLElement>,
  $html: MessageType<string>,
) {
  let div: any = null;
  const $rootChild = Applied($root, (root) => {
    div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  const transport = TransportParent<[string, HTMLElement]>(function ([html]) {
    if (div !== null) {
      div = morphdom(div, html);
      this.use(div);
    }
  });
  return Message<HTMLElement>((t) => {
    $all.to(transport.child(t));
  });
}
