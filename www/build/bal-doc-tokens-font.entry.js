import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const DocTokensFont = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '220px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"))), h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("span", { class: "is-family-title has-text-weight-bold has-text-primary is-size-medium" }, "Bold Headline"), h("br", null), h("span", { class: "is-family-title has-text-primary is-size-medium" }, "Light Headline")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, "Title ", h("span", { class: "is-size-medium" }, "(BaloiseCreateHeadline)")), h("p", { class: "m-none is-size-small" }, "Should only be used for headings and buttons")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-font-family-title)"))), h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("span", { class: "is-family-text has-text-weight-bold has-text-primary is-size-medium" }, "Bold Text"), h("br", null), h("span", { class: "is-family-text has-text-primary is-size-medium" }, "Regular Text")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, "Text ", h("span", { class: "is-size-medium" }, "(BaloiseCreateText)")), h("p", { class: "m-none is-size-small" }, "Should only be used for body texts and form controls")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-font-family-text)"))))))));
  }
  get el() { return getElement(this); }
};

export { DocTokensFont as bal_doc_tokens_font };
