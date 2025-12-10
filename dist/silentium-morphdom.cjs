'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

function Render($root, $html) {
  const $rootChild = silentium.Applied($root, (root) => {
    const div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = silentium.All($html, $rootChild);
  return silentium.Shared(
    silentium.Message(function RenderImpl(resolve, reject) {
      let updatedDiv = null;
      $all.then(([html, div]) => {
        try {
          updatedDiv = morphdom(updatedDiv ?? div, html, {
            childrenOnly: false,
            onBeforeElUpdated: function(fromEl, toEl) {
              if (fromEl.isEqualNode(toEl)) {
                return false;
              }
              return true;
            }
          });
          resolve(updatedDiv);
        } catch (e) {
          reject("Error in Render function from morphdom " + e.message);
        }
      });
    })
  );
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
