import { Host, h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class DataLabel {
  constructor() {
    this.required = false;
  }
  render() {
    return (h(Host, { class: Object.assign({}, BEM.block('data-label').class()) }, h("slot", null), this.required ? '*' : ''));
  }
  static get is() { return "bal-data-label"; }
  static get properties() {
    return {
      "required": {
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
          "text": "If `true` an asterix is added after the label."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
