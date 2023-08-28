import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class ButtonGroup {
  constructor() {
    this.position = '';
    this.direction = 'auto';
    this.reverse = false;
  }
  render() {
    const block = BEM.block('button-group');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`position-${this.position}`).class()), block.modifier(`direction-${this.direction}`).class()) }, h("div", { class: {
        'field': true,
        'is-grouped': true,
        'is-reverse': this.reverse,
        [`has-direction-${this.direction}`]: true,
      } }, h("slot", null))));
  }
  static get is() { return "bal-button-group"; }
  static get properties() {
    return {
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonGroupPosition",
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
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonGroupDirection",
          "resolved": "\"auto\" | \"column\" | \"row\"",
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
          "text": "`auto` will position the button items vertical and full width.\n`row` will force that the buttons are also horizontal on mobile."
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "reverse": {
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
          "text": "If `true` the flex direction is used in reverse on mobile."
        },
        "attribute": "reverse",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
