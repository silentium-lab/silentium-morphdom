'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

function Render($root, $html) {
  const $all = silentium.All($root, $html);
  const transport = silentium.TransportParent(function([
    root,
    html
  ]) {
    morphdom(root, html);
    this.use(root);
  });
  return silentium.Event((t) => {
    $all.event(transport.child(t));
  });
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
