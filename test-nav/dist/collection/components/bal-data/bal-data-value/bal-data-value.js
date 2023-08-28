import { Host, h } from '@stencil/core';
import isNil from 'lodash.isnil';
import { BEM } from '../../../utils/bem';
export class DataValue {
  constructor() {
    this.editable = false;
    this.disabled = false;
    this.multiline = false;
  }
  onClickHandler(ev) {
    this.balClick.emit(ev);
    const input = this.el.querySelector('bal-input');
    if (!isNil(input)) {
      input.setFocus();
    }
  }
  render() {
    const block = BEM.block('data-value');
    const buttonEl = block.element('button');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-editable').class(this.editable)), block.modifier('is-multiline').class(this.multiline)) }, h("div", null, h("slot", null)), h("bal-button", { class: Object.assign({}, buttonEl.class()), "data-testid": "bal-data-value-button", square: true, outlined: true, color: "text", size: "small", icon: "edit", disabled: this.disabled, onBalBlur: _ => this.balBlur.emit(), onBalFocus: _ => this.balFocus.emit(), onClick: ev => this.onClickHandler(ev) })));
  }
  static get is() { return "bal-data-value"; }
  static get properties() {
    return {
      "editable": {
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
          "text": "If `true` a small button with a edit icon will be shown on the right."
        },
        "attribute": "editable",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "If `true` the button will get disabled."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "multiline": {
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
          "text": "If `true` the text will break and the height of the item increases."
        },
        "attribute": "multiline",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "balClick",
        "name": "balClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the edit button has focus."
        },
        "complexType": {
          "original": "BalEvents.BalDataValueClickDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFocus",
        "name": "balFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the edit button has focus."
        },
        "complexType": {
          "original": "BalEvents.BalDataValueFocusDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balBlur",
        "name": "balBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the edit button loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalDataValueBlurDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
}
