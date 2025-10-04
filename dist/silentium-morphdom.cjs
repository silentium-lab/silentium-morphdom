'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

const render = (rootSrc, htmlSrc) => (user) => {
  silentium.all(
    rootSrc,
    htmlSrc
  )(([root, html]) => {
    morphdom(root, html);
    user(root);
  });
};

exports.render = render;
//# sourceMappingURL=silentium-morphdom.cjs.map
