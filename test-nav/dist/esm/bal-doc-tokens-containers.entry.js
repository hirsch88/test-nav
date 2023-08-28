import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const DocTokensContainers = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const container = tokens.container;
    const sizes = [];
    for (const k in container.size) {
      sizes.push({
        name: k,
        value: container.size[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token / CSS class"), h("th", { style: { minWidth: '100px' } }, "Value"))), h("tbody", null, sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-container-size-", c.name, ")"), h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "container", c.name !== 'normal' ? ` is-${c.name}` : '')), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `has-text-weight-bold is-size-small py-xx-small` }, c.value))))))))));
  }
  get el() { return getElement(this); }
};

export { DocTokensContainers as bal_doc_tokens_containers };
