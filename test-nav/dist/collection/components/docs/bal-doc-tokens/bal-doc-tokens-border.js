import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensBorder {
  render() {
    const border = tokens.border;
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '130px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"), h("th", { style: { minWidth: '100px' } }, "value"))), h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { class: `has-border-primary`, style: { width: '24px', height: '24px' } })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "m-none is-size-small" }, "The default border is 2px and the only width we provide so far.")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-border-width-normal)")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, border.width))))))));
  }
  static get is() { return "bal-doc-tokens-border"; }
  static get elementRef() { return "el"; }
}
