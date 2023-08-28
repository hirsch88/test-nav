import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensZIndex {
  render() {
    const zIndex = tokens.zIndex;
    const zIndexTokens = [];
    for (const k in zIndex) {
      zIndexTokens.push({
        name: k,
        description: zIndex[k].description,
        value: zIndex[k].value,
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"), h("th", { style: { minWidth: '230px' } }, "Value"))), h("tbody", null, zIndexTokens.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-z-index", `-${c.name}`, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value))))))))));
  }
  static get is() { return "bal-doc-tokens-z-index"; }
  static get elementRef() { return "el"; }
}
