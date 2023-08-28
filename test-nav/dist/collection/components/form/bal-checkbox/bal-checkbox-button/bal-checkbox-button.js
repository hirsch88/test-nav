var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, } from '@stencil/core';
import { BEM } from '../../../../utils/bem';
import { stopEventBubbling } from '../../../../utils/form-input';
import { Logger } from '../../../../utils/log';
import { FOCUS_KEYS } from '../../../../utils/focus-visible';
import { isDescendant } from '../../../../utils/helpers';
import { ListenToElementStates } from '../../../../utils/element-states';
import { BalElementStateListener } from '../../../../utils/element-states/element-states.listener';
export class BalCheckboxButton {
  constructor() {
    this.keyboardMode = true;
    this.onClick = (ev) => {
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      const element = ev.target;
      if (element && element.href) {
        return;
      }
      const checkboxEl = this.el.querySelector('bal-checkbox');
      const targetEl = ev.target;
      if (checkboxEl && targetEl) {
        const isCheckbox = targetEl === checkboxEl || isDescendant(checkboxEl, targetEl);
        if (!isCheckbox) {
          stopEventBubbling(ev);
          checkboxEl.click();
        }
      }
    };
    this.onFocus = (ev) => {
      var _a;
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      const checkboxEl = this.el.querySelector('bal-checkbox');
      const targetEl = ev.target;
      if (this.keyboardMode) {
        this.focused = true;
      }
      if (checkboxEl && targetEl) {
        const isCheckbox = targetEl === checkboxEl || isDescendant(checkboxEl, targetEl);
        if (isCheckbox) {
          stopEventBubbling(ev);
          (_a = checkboxEl.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }
      else {
        this.balFocus.emit();
      }
    };
    this.onBlur = (ev) => {
      var _a;
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      const checkboxEl = this.el.querySelector('bal-checkbox');
      const targetEl = ev.target;
      this.focused = false;
      if (checkboxEl && targetEl) {
        const isCheckbox = targetEl === checkboxEl || isDescendant(checkboxEl, targetEl);
        if (isCheckbox) {
          stopEventBubbling(ev);
          (_a = checkboxEl.querySelector('input')) === null || _a === void 0 ? void 0 : _a.blur();
        }
      }
      else {
        this.balBlur.emit();
      }
    };
    this.onPointerDown = () => (this.keyboardMode = false);
    this.onKeydown = (ev) => (this.keyboardMode = FOCUS_KEYS.includes(ev.key));
    this.interactionState = BalElementStateListener.DefaultState;
    this.checked = false;
    this.focused = false;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.color = undefined;
    this.colSize = 1;
    this.colSizeTablet = 1;
    this.colSizeMobile = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  invalidHandler() {
    this.updateProps('invalid', ['bal-checkbox', 'bal-icon', 'bal-label', 'bal-text']);
  }
  disabledHandler() {
    this.updateProps('disabled', ['bal-checkbox', 'bal-icon', 'bal-label', 'bal-text']);
  }
  readonlyHandler() {
    this.updateProps('readonly', ['bal-checkbox', 'bal-icon', 'bal-label', 'bal-text']);
  }
  connectedCallback() {
    this.triggerAllHandlers();
    this.el.addEventListener('keydown', this.onKeydown);
    this.el.addEventListener('touchstart', this.onPointerDown);
    this.el.addEventListener('mousedown', this.onPointerDown);
  }
  componentWillLoad() {
    this.triggerAllHandlers();
  }
  componentDidLoad() {
    this.balFormControlDidLoad.emit(this.el);
  }
  disconnectedCallback() {
    this.el.removeEventListener('keydown', this.onKeydown);
    this.el.removeEventListener('touchstart', this.onPointerDown);
    this.el.removeEventListener('mousedown', this.onPointerDown);
  }
  elementStateListener(info) {
    this.interactionChildElements.forEach(element => {
      element.hovered = info.hovered;
      element.pressed = info.pressed;
    });
  }
  async setChecked(checked = true) {
    this.checked = checked;
  }
  get interactionChildElements() {
    return Array.from(this.el.querySelectorAll('bal-label, bal-text, bal-icon, bal-checkbox'));
  }
  triggerAllHandlers() {
    this.disabledHandler();
    this.readonlyHandler();
    this.invalidHandler();
  }
  updateProps(key, selectors) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.el.querySelectorAll(selectors.join(', '));
    components.forEach(c => callback(c));
  }
  render() {
    const block = BEM.block('checkbox-button');
    const disabled = !!this.disabled || !!this.readonly;
    const invalid = !!this.invalid;
    const color = !!this.color;
    const colored = this.checked && color;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`column-${this.colSize}`).class(this.colSize > 1)), block.modifier(`column-tablet-${this.colSizeTablet}`).class(this.colSizeTablet > 1)), block.modifier(`column-mobile-${this.colSizeMobile}`).class(this.colSizeMobile > 1)), onClick: this.onClick }, h("button", { role: "checkbox", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier('disabled').class(disabled)), block.element('native').modifier('invalid').class(invalid)), block.element('native').modifier('checked').class(this.checked)), block.element('native').modifier(`colored`).class(colored)), block.element('native').modifier(`color-${this.color}`).class(color)), { 'bal-focusable': !this.disabled }), disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, h("slot", null))));
  }
  static get is() { return "bal-checkbox-button"; }
  static get originalStyleUrls() {
    return {
      "css": ["./bal-checkbox-button.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-checkbox-button.css"]
    };
  }
  static get properties() {
    return {
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a invalid red style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxButtonColor",
          "resolved": "\"\" | \"green\" | \"purple\" | \"red\" | \"yellow\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a invalid red style."
        },
        "attribute": "color",
        "reflect": false
      },
      "colSize": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxGroupColumns",
          "resolved": "1 | 2 | 3 | 4",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "col-size",
        "reflect": false,
        "defaultValue": "1"
      },
      "colSizeTablet": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxGroupColumns",
          "resolved": "1 | 2 | 3 | 4",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "col-size-tablet",
        "reflect": false,
        "defaultValue": "1"
      },
      "colSizeMobile": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxGroupColumns",
          "resolved": "1 | 2 | 3 | 4",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "col-size-mobile",
        "reflect": false,
        "defaultValue": "1"
      }
    };
  }
  static get states() {
    return {
      "interactionState": {},
      "checked": {},
      "focused": {}
    };
  }
  static get events() {
    return [{
        "method": "balFocus",
        "name": "balFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the toggle has focus."
        },
        "complexType": {
          "original": "BalEvents.BalCheckboxButtonFocusDetail",
          "resolved": "FocusEvent",
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
          "text": "Emitted when the toggle loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalCheckboxButtonBlurDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFormControlDidLoad",
        "name": "balFormControlDidLoad",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "complexType": {
          "original": "BalEvents.BalCheckboxButtonAriaLabelledByDetail",
          "resolved": "HTMLElement",
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
      "setChecked": {
        "complexType": {
          "signature": "(checked?: boolean) => Promise<void>",
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
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "invalid",
        "methodName": "invalidHandler"
      }, {
        "propName": "disabled",
        "methodName": "disabledHandler"
      }, {
        "propName": "readonly",
        "methodName": "readonlyHandler"
      }];
  }
}
__decorate([
  Logger('bal-checkbox-button')
], BalCheckboxButton.prototype, "createLogger", null);
__decorate([
  ListenToElementStates()
], BalCheckboxButton.prototype, "elementStateListener", null);
