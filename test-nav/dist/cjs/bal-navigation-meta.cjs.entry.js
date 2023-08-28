'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const NavigationMeta = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ariaLabelMeta = '';
  }
  render() {
    const metaEl = bem.BEM.block('nav').element('meta');
    return (index.h(index.Host, { class: Object.assign({}, metaEl.class()) }, index.h("nav", { class: "container", role: "navigation", "aria-label": this.ariaLabelMeta }, index.h("slot", null))));
  }
};

exports.bal_navigation_meta = NavigationMeta;
