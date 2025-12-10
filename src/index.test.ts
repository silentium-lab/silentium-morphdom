import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Render } from "./index";
import { Late, Message, Of } from "silentium";

vi.mock("morphdom", () => ({
  default: vi.fn((node, html) => {
    node.innerHTML = html;
    return node;
  }),
}));

describe("Render function", () => {
  let rootElement: HTMLElement;
  let testContainer: HTMLDivElement;

  beforeEach(() => {
    testContainer = document.createElement("div");
    document.body.appendChild(testContainer);
    rootElement = document.createElement("div");
    testContainer.appendChild(rootElement);
  });

  afterEach(() => {
    document.body.removeChild(testContainer);
    vi.clearAllMocks();
  });

  it("should create a child div and render HTML content", async () => {
    const htmlContent = '<div class="test">Hello World</div>';
    const htmlMessage = Of(htmlContent);
    const rootMessage = Of(rootElement);

    const resultMessage = Render(rootMessage, htmlMessage);

    const renderedElementPromise = new Promise<HTMLElement>((resolve) => {
      resultMessage.then((element) => {
        resolve(element);
      });
    });

    const renderedElement = await Promise.race([
      renderedElementPromise,
      new Promise<HTMLElement>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 100),
      ),
    ]);

    expect(renderedElement).toBeTruthy();
    expect(renderedElement.tagName).toBe("DIV");

    expect(renderedElement.innerHTML).toBe(htmlContent);
  });

  it("should handle null root element gracefully", async () => {
    const htmlContent = "<span>Test</span>";
    const htmlMessage = Of(htmlContent);
    const nullRootMessage = Of(null as any as HTMLElement);

    const resultMessage = Render(nullRootMessage, htmlMessage);

    const renderedElementPromise = new Promise<HTMLElement | null>(
      (resolve) => {
        resultMessage
          .then((element) => {
            resolve(element);
          })
          .catch(() => {
            resolve(null);
          });
      },
    );

    const renderedElement = await Promise.race([
      renderedElementPromise,
      new Promise<HTMLElement | null>((resolve) =>
        setTimeout(() => resolve(null), 100),
      ),
    ]);

    expect(renderedElement).toBeNull();
  });

  it("should update content when HTML message changes", async () => {
    let currentHtml = "Initial";
    const htmlMessage = Late(currentHtml);

    const rootMessage = Of(rootElement);
    const resultMessage = Render(rootMessage, htmlMessage);

    expect((await resultMessage).outerHTML).toBe('<div>Initial</div>');

    htmlMessage.use('Changed!');
    expect((await resultMessage).outerHTML).toBe('<div>Changed!</div>');
  });
});
