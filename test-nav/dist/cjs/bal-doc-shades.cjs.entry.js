'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocShades = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = '';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "columns is-multiline" }, index.h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-0` }), index.h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-1` }), index.h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-2` }), index.h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-3` }), index.h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-4` })), index.h("div", { class: "columns is-multiline" }, index.h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-5` }), index.h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-6` }), index.h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-7` }), index.h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-8` }), index.h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-9` }))));
  }
};

exports.bal_doc_shades = BalDocShades;
