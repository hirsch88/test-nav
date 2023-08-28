'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensSpacing = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const spacing = tokens_docs.tokens.spacing;
    const sizes = [];
    const validSizes = [
      'xxxxx-large',
      'xxxx-large',
      'xxx-large',
      'xx-large',
      'x-large',
      'large',
      'medium',
      'normal',
      'small',
      'x-small',
      'xx-small',
      'none',
      'auto',
    ].reverse();
    for (const k in spacing) {
      if (validSizes.includes(k)) {
        sizes.push({
          name: k,
          value: spacing[k],
        });
      }
    }
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '100px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '240px' } }, "Token"), index.h("th", { style: { minWidth: '90px' } }, "Mobile"), index.h("th", { style: { minWidth: '90px' } }, "Tablet"), index.h("th", { style: { minWidth: '90px' } }, "Desktop"))), index.h("tbody", null, sizes.map(c => (index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("div", { class: `pt-${c.name} mt-x-small has-background-green` })), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name, " ", index.h("span", { class: "is-size-medium" }, "(", c.value.legacy, ")")), index.h("p", { class: "m-none is-size-small" }, c.value.description)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-space-", c.name, ")")), index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: `has-text-weight-bold is-size-small` }, c.value.mobile)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: `has-text-weight-bold is-size-small` }, c.value.tablet)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("span", { class: `has-text-weight-bold is-size-small` }, c.value.desktop))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_spacing = DocTokensSpacing;
