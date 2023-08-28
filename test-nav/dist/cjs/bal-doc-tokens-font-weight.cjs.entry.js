'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensFontWeight = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const typography = tokens_docs.tokens.typography;
    const weights = [];
    for (const k in typography.weights) {
      weights.push({
        name: k,
        value: typography.weights[k],
      });
    }
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '220px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '240px' } }, "Token"))), index.h("tbody", null, weights.map(c => (index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: `is-${c.name} has-font-title has-text-primary` }, "Headline"), index.h("br", null), index.h("span", { class: `is-${c.name} is-family-text has-text-primary` }, "Text")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name, " ", index.h("span", { class: "is-size-medium" }, "(", c.value, ")")), index.h("p", { class: "m-none is-size-small" }, c.value.description)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-weight-", c.name, ")"))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_font_weight = DocTokensFontWeight;
