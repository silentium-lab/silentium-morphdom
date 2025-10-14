'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

function Render(rootSrc, htmlSrc) {
  return (user) => {
    silentium.All(
      rootSrc,
      htmlSrc
    )(([root, html]) => {
      morphdom(root, html);
      user(root);
    });
  };
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
