'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const NavigationMainHead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mainHeadEl = bem.BEM.block('nav').element('main').element('head');
    return (index.h(index.Host, { class: Object.assign({}, mainHeadEl.class()) }, index.h("slot", null)));
  }
};

exports.bal_navigation_main_head = NavigationMainHead;
