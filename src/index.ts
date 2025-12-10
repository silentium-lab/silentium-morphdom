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
  return Shared(
    Message<HTMLElement>(function RenderImpl(resolve, reject) {
      let updatedDiv: HTMLElement | null = null;
      $all.then(([html, div]) => {
        try {
          updatedDiv = morphdom(updatedDiv ?? div, html, {
            childrenOnly: false,
            onBeforeElUpdated: function (fromEl, toEl) {
              if (fromEl.isEqualNode(toEl)) {
                return false;
              }

              return true;
            },
          }) as HTMLElement;
          resolve(updatedDiv);
        } catch (e: any) {
          reject("Error in Render function from morphdom " + e.message);
        }
      });
    }),
  );
}
