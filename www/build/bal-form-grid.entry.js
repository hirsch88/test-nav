import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const balFormGridCss = ".bal-form-grid{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media screen and (min-width: 1024px){.bal-form-grid{-ms-flex-direction:row;flex-direction:row}}.bal-form-grid.columns{margin-top:0 !important;margin-bottom:0 !important}";

const FormGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-form-grid columns is-multiline my-none py-none" }, h("slot", null)));
  }
};
FormGrid.style = {
  css: balFormGridCss
};

export { FormGrid as bal_form_grid };
