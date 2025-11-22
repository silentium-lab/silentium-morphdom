'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

function Render($root, $html) {
  let div = null;
  const $rootChild = silentium.Applied($root, (root) => {
    div = document.createElement("div");
    root.appendChild(div);
    return div;
  });
  const $all = silentium.All($html, $rootChild);
  return silentium.Message(function RenderImpl(r) {
    $all.then(([html]) => {
      if (div !== null) {
        div = morphdom(div, html);
        r(div);
      }
    });
  });
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
