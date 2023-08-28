'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocIcons = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icons = '';
  }
  render() {
    return (index.h(index.Host, { class: "bal-app" }, index.h("div", { class: "columns is-multiline" }, this.icons.split(',').map(icon => (index.h("div", { class: "column is-3 p-x-small has-background-blue-light" }, index.h("div", { class: "p-small has-text-center is-flex is-align-items-center is-flex-direction-column is-justify-content-center" }, index.h("bal-icon", { color: "primary", name: icon }), index.h("span", { class: "mt-xx-small" }, icon))))))));
  }
};

exports.bal_doc_icons = BalDocIcons;
