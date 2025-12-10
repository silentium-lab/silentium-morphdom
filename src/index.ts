import morphdom from "morphdom";
import { All, Applied, Message, MessageType, Shared } from "silentium";

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
  return Shared(Message<HTMLElement>(function RenderImpl(resolve, reject) {
    $all.then(([html, div]) => {
      try {
        resolve(morphdom(div, html) as HTMLElement);
      } catch (e: any) {
        reject('Error in Render function from morphdom ' + e.message)
      }
    });
  }));
}
