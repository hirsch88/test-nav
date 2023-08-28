import { Host, h } from '@stencil/core';
export class CardSubtitle {
  constructor() {
    this.inverted = false;
    this.bold = false;
    this.color = '';
  }
  render() {
    return (h(Host, { class: "bal-card-subtitle" }, h("bal-text", { bold: this.bold, space: "none", color: this.inverted ? 'white' : this.color }, h("slot", null))));
  }
  static get is() { return "bal-card-subtitle"; }
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
      },
      "bold": {
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
          "text": "If `true` the card text color is bold."
        },
        "attribute": "bold",
        "reflect": false,
        "defaultValue": "false"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingColor",
          "resolved": "\"\" | \"blue\" | \"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\" | \"white\"",
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
          "text": "If `true` the card text color becomes white."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
