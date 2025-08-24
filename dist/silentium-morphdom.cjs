'use strict';

var morphdom = require('morphdom');
var silentium = require('silentium');

class Render extends silentium.TheInformation {
  constructor(rootSrc, htmlSrc) {
    super(rootSrc, htmlSrc);
    this.rootSrc = rootSrc;
    this.htmlSrc = htmlSrc;
  }
  value(o) {
    new silentium.All(this.rootSrc, this.htmlSrc).value(
      new silentium.From(([root, html]) => {
        morphdom(root, html);
        o.give(root);
      })
    );
    return this;
  }
}

exports.Render = Render;
//# sourceMappingURL=silentium-morphdom.cjs.map
