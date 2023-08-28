import { h, Host } from '@stencil/core';
export class FormGrid {
  render() {
    return (h(Host, { class: "bal-form-grid columns is-multiline my-none py-none" }, h("slot", null)));
  }
  static get is() { return "bal-form-grid"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-form-grid.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-form-grid.css"]
    };
  }
}
