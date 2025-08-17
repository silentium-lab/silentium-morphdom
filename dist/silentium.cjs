'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

const render = (rootSrc, htmlSrc) => {
  return (o) => {
    silentium.all(
      rootSrc,
      htmlSrc
    )(([root, html]) => {
      morphdom(root, html);
      o(root);
    });
  };
};

exports.render = render;
//# sourceMappingURL=silentium.cjs.map
