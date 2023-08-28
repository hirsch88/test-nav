'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensContainers = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const container = tokens_docs.tokens.container;
    const sizes = [];
    for (const k in container.size) {
      sizes.push({
        name: k,
        value: container.size[k],
      });
    }
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", null, "Description"), index.h("th", { style: { minWidth: '200px' } }, "Token / CSS class"), index.h("th", { style: { minWidth: '100px' } }, "Value"))), index.h("tbody", null, sizes.map(c => (index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-container-size-", c.name, ")"), index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "container", c.name !== 'normal' ? ` is-${c.name}` : '')), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: `has-text-weight-bold is-size-small py-xx-small` }, c.value))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_containers = DocTokensContainers;
