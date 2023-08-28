import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const balFormGridCss = ".bal-form-grid{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media screen and (min-width: 1024px){.bal-form-grid{-ms-flex-direction:row;flex-direction:row}}.bal-form-grid.columns{margin-top:0 !important;margin-bottom:0 !important}";

const FormGrid = proxyCustomElement(class FormGrid extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "bal-form-grid columns is-multiline my-none py-none" }, h("slot", null)));
  }
  static get style() { return {
    css: balFormGridCss
  }; }
}, [36, "bal-form-grid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-form-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-form-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FormGrid);
      }
      break;
  } });
}

const BalFormGrid = FormGrid;
const defineCustomElement = defineCustomElement$1;

export { BalFormGrid, defineCustomElement };
