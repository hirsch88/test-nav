import { Host, h } from '@stencil/core';
export class CardActions {
  constructor() {
    this.position = '';
  }
  render() {
    return (h(Host, { class: "bal-card-actions" }, h("bal-button-group", { class: "m-none", position: this.position }, h("slot", null))));
  }
  static get is() { return "bal-card-actions"; }
  static get properties() {
    return {
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCardActionsPosition",
          "resolved": "\"\" | \"center\" | \"right\"",
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
          "text": "The value of the button, which is submitted with the form data."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
