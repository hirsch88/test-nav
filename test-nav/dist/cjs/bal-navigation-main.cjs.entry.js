'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const NavigationMain = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ariaLabelMain = '';
  }
  render() {
    const mainEl = bem.BEM.block('nav').element('main');
    return (index.h(index.Host, { class: Object.assign({}, mainEl.class()) }, index.h("nav", { role: "navigation", "aria-label": this.ariaLabelMain }, index.h("slot", { name: "main-head" })), index.h("slot", { name: "main-body" })));
  }
};

exports.bal_navigation_main = NavigationMain;
