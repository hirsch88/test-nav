'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocSupportColor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = '';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "columns is-multiline" }, index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-1` }), index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-2` }), index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-3` }), index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-4` }), index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-5` }), index.h("bal-doc-color", { class: "column is-2", color: `${this.color}-6` }))));
  }
};

exports.bal_doc_support_color = BalDocSupportColor;
