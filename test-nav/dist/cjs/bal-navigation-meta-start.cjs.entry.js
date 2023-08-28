'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const NavigationMetaStart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const metaStartEl = bem.BEM.block('nav').element('meta').element('start');
    return (index.h(index.Host, { class: Object.assign({}, metaStartEl.class()) }, index.h("slot", null)));
  }
};

exports.bal_navigation_meta_start = NavigationMetaStart;
