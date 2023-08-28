import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const DocTokensBorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const border = tokens.border;
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '130px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"), h("th", { style: { minWidth: '100px' } }, "value"))), h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { class: `has-border-primary`, style: { width: '24px', height: '24px' } })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "m-none is-size-small" }, "The default border is 2px and the only width we provide so far.")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-border-width-normal)")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, border.width))))))));
  }
  get el() { return getElement(this); }
};

export { DocTokensBorder as bal_doc_tokens_border };
