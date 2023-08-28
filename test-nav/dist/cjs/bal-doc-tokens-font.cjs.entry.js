'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const DocTokensFont = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '220px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '220px' } }, "Token"))), index.h("tbody", null, index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: "is-family-title has-text-weight-bold has-text-primary is-size-medium" }, "Bold Headline"), index.h("br", null), index.h("span", { class: "is-family-title has-text-primary is-size-medium" }, "Light Headline")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, "Title ", index.h("span", { class: "is-size-medium" }, "(BaloiseCreateHeadline)")), index.h("p", { class: "m-none is-size-small" }, "Should only be used for headings and buttons")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-font-family-title)"))), index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: "is-family-text has-text-weight-bold has-text-primary is-size-medium" }, "Bold Text"), index.h("br", null), index.h("span", { class: "is-family-text has-text-primary is-size-medium" }, "Regular Text")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, "Text ", index.h("span", { class: "is-size-medium" }, "(BaloiseCreateText)")), index.h("p", { class: "m-none is-size-small" }, "Should only be used for body texts and form controls")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-font-family-text)"))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_font = DocTokensFont;
