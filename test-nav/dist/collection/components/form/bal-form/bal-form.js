import { h, Host } from '@stencil/core';
import { scrollToFirstInvalidField } from '../../../utils/form';
export class Form {
  constructor() {
    this.native = false;
    this.novalidate = false;
  }
  async scrollToFirstInvalidField() {
    scrollToFirstInvalidField({ formEl: this.el });
  }
  render() {
    const NativeEl = this.native ? 'form' : 'div';
    let attrs = {};
    if (this.native) {
      attrs = {
        novalidate: this.novalidate,
      };
    }
    return (h(Host, null, h(NativeEl, Object.assign({}, attrs), h("slot", null))));
  }
  static get is() { return "bal-form"; }
  static get properties() {
    return {
      "native": {
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
          "text": "If `true` a native form element is added as a wrapper of the slot."
        },
        "attribute": "native",
        "reflect": false,
        "defaultValue": "false"
      },
      "novalidate": {
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
          "text": "If `true` it adds the novalidate attribute to the native form element."
        },
        "attribute": "novalidate",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get methods() {
    return {
      "scrollToFirstInvalidField": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Scrolls to the first invalid field inside this form component.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
