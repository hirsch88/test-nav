import { h, Host } from '@stencil/core';
export class FormCol {
  constructor() {
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
  static get is() { return "bal-form-col"; }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalFormColSize",
          "resolved": "\"fullwidth\" | \"half\" | \"one-quarter\" | \"one-third\" | \"three-quarters\" | \"two-thirds\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'fullwidth'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
