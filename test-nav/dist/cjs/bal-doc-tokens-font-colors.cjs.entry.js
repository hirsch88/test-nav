'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensFontColors = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const typography = tokens_docs.tokens.typography;
    const colorMap = typography.colors;
    const colors = Object.keys(colorMap);
    const values = Object.values(colorMap);
    const colorTokens = tokens_docs.tokens.color;
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '130px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '200px' } }, "Token"))), index.h("tbody", null, colors.map((c, i) => (index.h("tr", null, index.h("td", { style: {
        verticalAlign: 'top',
        background: c === 'white' ? 'var(--bal-color-primary)' : 'transparent',
      } }, index.h("span", { class: `title is-size-xxx-large has-text-${c}` }, "Aa")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c, " ", index.h("span", { class: "is-size-medium" }, "(", values[i], ")")), index.h("p", { class: "m-none is-size-small" }, colorTokens[values[i]].description)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-text-", c, ")"), index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", values[i], ")"))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_font_colors = DocTokensFontColors;
