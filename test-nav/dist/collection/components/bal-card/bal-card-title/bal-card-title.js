import { Host, h } from '@stencil/core';
export class CardTitle {
  constructor() {
    this.inverted = false;
  }
  render() {
    return (h(Host, { class: "bal-card-title" }, h("bal-heading", { level: "h3", space: "none", inverted: this.inverted }, h("slot", null))));
  }
  static get is() { return "bal-card-title"; }
  static get properties() {
    return {
      "inverted": {
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
          "text": "If `true` the card text color becomes white."
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
