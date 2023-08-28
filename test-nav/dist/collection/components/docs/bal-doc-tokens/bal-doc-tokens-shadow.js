import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensBorderShadow {
  render() {
    const boxShadows = tokens.shadow.box;
    const shadowTokens = [];
    for (const k in boxShadows) {
      shadowTokens.push({
        name: k,
        value: boxShadows[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '120px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"), h("th", { style: { minWidth: '230px' } }, "Value"))), h("tbody", null, shadowTokens.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { style: { height: '48px', width: '80px' }, class: `has-shadow${`-${c.name}`} mt-x-small has-background-purple-2` })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-shadow", `-${c.name}`, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value.value))))))))));
  }
  static get is() { return "bal-doc-tokens-shadow"; }
  static get elementRef() { return "el"; }
}
