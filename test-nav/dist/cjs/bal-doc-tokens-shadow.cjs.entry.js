'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensBorderShadow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const boxShadows = tokens_docs.tokens.shadow.box;
    const shadowTokens = [];
    for (const k in boxShadows) {
      shadowTokens.push({
        name: k,
        value: boxShadows[k],
      });
    }
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '120px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '220px' } }, "Token"), index.h("th", { style: { minWidth: '230px' } }, "Value"))), index.h("tbody", null, shadowTokens.map(c => (index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("div", { style: { height: '48px', width: '80px' }, class: `has-shadow${`-${c.name}`} mt-x-small has-background-purple-2` })), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), index.h("p", { class: "m-none is-size-small" }, c.value.description)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-shadow", `-${c.name}`, ")")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value.value))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_shadow = DocTokensBorderShadow;
