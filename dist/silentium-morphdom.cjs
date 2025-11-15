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
  const transport = silentium.TransportParent(function([html]) {
    if (div !== null) {
      div = morphdom(div, html);
      this.use(div);
    }
  });
  return silentium.Message((t) => {
    $all.to(transport.child(t));
  });
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
