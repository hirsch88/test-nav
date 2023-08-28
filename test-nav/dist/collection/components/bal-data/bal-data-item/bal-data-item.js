import { Host, h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class DataItem {
  constructor() {
    this.disabled = false;
    this.border = false;
  }
  render() {
    const element = BEM.block('data-item');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, element.class()), element.modifier('is-disabled').class(this.disabled)), element.modifier('has-border').class(this.border)) }, h("slot", null)));
  }
  static get is() { return "bal-data-item"; }
  static get properties() {
    return {
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the item gets a lighter font color."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "border": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` a bottom border is added to the data-item."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
