import { Host, h } from '@stencil/core';
export class Snackbar {
  constructor() {
    this.snackbarId = `bal-snackbar-${snackbarIds++}`;
    this.onActionHandler = () => {
      this.balAction.emit(this.snackbarId);
      this.actionHandler();
    };
    this.animationClass = 'fadeInDown';
    this.color = '';
    this.duration = 0;
    this.subject = '';
    this.message = '';
    this.icon = '';
    this.action = '';
    this.closeHandler = () => void 0;
    this.actionHandler = () => void 0;
    this.href = undefined;
    this.target = '_self';
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
    clearTimeout(this.timer);
    this.balClose.emit(this.snackbarId);
    this.element.remove();
    this.closeHandler();
  }
  get colorType() {
    if (this.color === '') {
      return '';
    }
    return `bal-snackbar__inner--is-${this.color}`;
  }
  get buttonType() {
    if (this.color === '') {
      return 'info';
    }
    return this.color;
  }
  render() {
    const labelAttributes = {};
    if (this.message !== undefined && this.message !== '') {
      labelAttributes.innerHTML = this.message;
    }
    return (h(Host, { id: this.snackbarId, class: "bal-snackbar" }, h("div", { role: "alert", class: `bal-snackbar__inner ${this.animationClass} ${this.colorType}` }, h("div", { class: "bal-snackbar__header" }, h("span", { class: "icon-text is-size-small" }, h("span", { class: "icon", style: { display: this.icon ? '' : 'none' } }, h("bal-icon", { name: this.icon, color: 'primary' })), h("bal-heading", { level: "h5", space: "none", "data-testid": "bal-snackbar-heading" }, this.subject))), h("span", Object.assign({ class: "bal-snackbar__label", "data-testid": "bal-snackbar-label" }, labelAttributes), h("slot", null), h("span", { class: "hidden" })), h("bal-close", { class: "bal-snackbar__close", "data-testid": "bal-snackbar-close", onClick: () => this.close() }), h("div", { class: "bal-snackbar__footer", style: { display: this.action === '' ? 'none' : 'inline-flex' } }, h("bal-button", { color: "info", href: this.href, target: this.target, onClick: () => this.onActionHandler(), "data-testid": "bal-snackbar-action" }, this.action)))));
  }
  static get is() { return "bal-snackbar"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-snackbar.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-snackbar.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalSnackbarColor",
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
          "text": "The theme type of the snackbar."
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
          "text": "The duration of the snackbar"
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "0"
      },
      "subject": {
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
          "text": "The subject of the snackbar header"
        },
        "attribute": "subject",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The message of the snackbar as html content"
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "''"
      },
      "icon": {
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
          "text": "The icon of the snackbar header"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "''"
      },
      "action": {
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
          "text": "Label text for the action button"
        },
        "attribute": "action",
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
      },
      "actionHandler": {
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
              "text": "Handler for on action button click event"
            }],
          "text": ""
        },
        "defaultValue": "() => void 0"
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonTarget",
          "resolved": "\" _parent\" | \"_blank\" | \"_self\" | \"_top\"",
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
          "text": "Specifies where to display the linked URL.\nOnly applies when an `href` is provided."
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      }
    };
  }
  static get states() {
    return {
      "animationClass": {}
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
          "text": "Emitted when snackbar is closed"
        },
        "complexType": {
          "original": "BalEvents.BalSnackbarCloseDetail",
          "resolved": "string",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balAction",
        "name": "balAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the action button is clicked"
        },
        "complexType": {
          "original": "BalEvents.BalSnackbarActionDetail",
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
          "text": "Closes the snackbar after the given duration in ms",
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
          "text": "Closes this snackbar",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
}
let snackbarIds = 0;
