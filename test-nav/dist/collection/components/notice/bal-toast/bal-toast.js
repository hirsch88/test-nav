import { Host, h } from '@stencil/core';
export class Toast {
  constructor() {
    this.toastId = `bal-toast-${toastIds++}`;
    this.color = '';
    this.duration = 0;
    this.message = '';
    this.closeHandler = () => void 0;
  }
  async componentWillLoad() {
    if (this.duration > 0) {
      await this.closeIn(this.duration);
    }
  }
  async closeIn(duration) {
    this.timer = setTimeout(() => this.close(), duration);
  }
  async close() {
    this.element.remove();
    clearTimeout(this.timer);
    this.balClose.emit(this.toastId);
    this.closeHandler();
  }
  get colorType() {
    if (this.color === '') {
      return '';
    }
    return `bal-toast__inner--is-${this.color}`;
  }
  render() {
    return (h(Host, { id: this.toastId, class: "bal-toast" }, h("div", { role: "alert", onClick: () => this.close(), class: `bal-toast__inner ${this.colorType}` }, h("span", { class: "bal-toast__label", innerHTML: this.message, "data-testid": "bal-toast-label" }, h("slot", null)), h("bal-close", { class: "bal-toast__close", inverted: false, "data-testid": "bal-toast-close" }))));
  }
  static get is() { return "bal-toast"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-toast.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-toast.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalToastColor",
          "resolved": "\"\" | \"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\"",
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
          "text": "The theme type of the toast.\nColor type primary is deprecated, please use info instead."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "duration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The duration of the toast in milliseconds."
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "0"
      },
      "message": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Content message"
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "''"
      },
      "closeHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "() => void",
          "resolved": "() => void",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "Handler for on close event"
            }],
          "text": ""
        },
        "defaultValue": "() => void 0"
      }
    };
  }
  static get events() {
    return [{
        "method": "balClose",
        "name": "balClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when toast is closed"
        },
        "complexType": {
          "original": "BalEvents.BalToastCloseDetail",
          "resolved": "string",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "closeIn": {
        "complexType": {
          "signature": "(duration: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Closes the toast after the given duration in ms",
          "tags": []
        }
      },
      "close": {
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
          "text": "Closes this toast",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
}
let toastIds = 0;
