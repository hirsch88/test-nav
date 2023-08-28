import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';

const FormCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 'fullwidth';
  }
  render() {
    return (h(Host, { class: {
        'column': true,
        'py-none': true,
        'is-12-touch': true,
        'is-12': this.size === 'fullwidth' || this.size === undefined,
        'is-6': this.size === 'half',
        'is-4': this.size === 'one-third',
        'is-8': this.size === 'two-thirds',
        'is-3': this.size === 'one-quarter',
        'is-9': this.size === 'three-quarters',
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

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

export { FormCol as bal_form_col, FormGrid as bal_form_grid };
