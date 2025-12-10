import morphdom from "morphdom";
import { All, Applied, Message, MessageType } from "silentium";

/**
 * Represents a function that renders HTML string into an element
 */
export function Render(
  $root: MessageType<HTMLElement>,
  $html: MessageType<string>,
) {
  const $rootChild = Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = All($html, $rootChild);
  return Message<HTMLElement>(function RenderImpl(r) {
    $all.then(([html, div]) => {
      if (div !== null) {
        r(morphdom(div, html) as HTMLElement);
      }
    });
  });
}
