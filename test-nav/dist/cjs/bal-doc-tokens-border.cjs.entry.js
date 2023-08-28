'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensBorder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const border = tokens_docs.tokens.border;
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '130px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '200px' } }, "Token"), index.h("th", { style: { minWidth: '100px' } }, "value"))), index.h("tbody", null, index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("div", { class: `has-border-primary`, style: { width: '24px', height: '24px' } })), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "m-none is-size-small" }, "The default border is 2px and the only width we provide so far.")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-border-width-normal)")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, border.width))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_border = DocTokensBorder;
