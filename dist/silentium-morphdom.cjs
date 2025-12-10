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
  return silentium.Message(function RenderImpl(r) {
    $all.then(([html, div]) => {
      if (div !== null) {
        r(morphdom(div, html));
      }
    });
  });
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
