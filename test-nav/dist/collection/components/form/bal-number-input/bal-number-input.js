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
import isNil from 'lodash.isnil';
import { ListenToConfig, defaultConfig, } from '../../../utils/config';
import { ACTION_KEYS, isCtrlOrCommandKey, NUMBER_KEYS } from '../../../utils/constants/keys.constant';
import { getInputTarget, getNativeInputValue, getUpcomingValue, inputHandleBlur, inputHandleChange, inputHandleClick, inputHandleFocus, inputHandleHostClick, inputHandleReset, inputListenOnClick, inputSetBlur, inputSetFocus, stopEventBubbling, } from '../../../utils/form-input';
import { debounceEvent } from '../../../utils/helpers';
import { inheritAttributes } from '../../../utils/attributes';
import { getDecimalSeparator, getThousandSeparator, parseFloatString, formatFloatString, getNegativeSymbol, getDecimalSeparators, } from '../../../utils/number';
import { formatInputValue } from './bal-input.utils';
import { BEM } from '../../../utils/bem';
import { defaultBalAriaForm } from '../../../utils/form';
export class NumberInput {
  constructor() {
    this.inputId = `bal-number-input-${numberInputIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = 0;
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        const parsedValue = parseFloat(parseFloat(parseFloatString(input.value)).toFixed(this.decimal));
        if (!isNaN(parsedValue)) {
          this.inputValue = parsedValue;
        }
        else {
          if (!this.decimal && input.value !== getNegativeSymbol() && input.value !== getDecimalSeparator()) {
            this.inputValue = undefined;
            input.value = '';
          }
        }
      }
      this.balInput.emit(this.inputValue);
    };
    this.onBlur = (ev) => {
      inputHandleBlur(this, ev);
      const input = getInputTarget(ev);
      if (input && (getDecimalSeparators().indexOf(input.value) >= 0 || input.value === getNegativeSymbol())) {
        this.inputValue = undefined;
        input.value = '';
      }
      if (this.exactNumber && input && (input.value === undefined || input.value === '' || input.value === null)) {
        this.inputValue = 0;
        input.value = '0';
      }
      inputHandleChange(this);
    };
    this.onKeydown = (ev) => {
      if (!isNil(ev) && !isCtrlOrCommandKey(ev)) {
        if (!this.getAllowedKeys().includes(ev.key)) {
          return stopEventBubbling(ev);
        }
        const value = getNativeInputValue(this);
        if (getDecimalSeparators().indexOf(ev.key) >= 0) {
          if (!this.decimal || value.split('').some(el => getDecimalSeparators().includes(el))) {
            return stopEventBubbling(ev);
          }
        }
        if (ev.key === getNegativeSymbol()) {
          if (value.length !== 0) {
            return stopEventBubbling(ev);
          }
        }
        if ([...NUMBER_KEYS, ...getDecimalSeparators(), getNegativeSymbol()].indexOf(ev.key) >= 0) {
          const newValue = getUpcomingValue(this, ev);
          let separator = '';
          value.split('').some(el => {
            if (getDecimalSeparators().includes(el)) {
              separator = el;
            }
          });
          if (separator !== '') {
            const decimalValue = separator !== '' && newValue.includes(separator) ? newValue === null || newValue === void 0 ? void 0 : newValue.split(separator)[1] : '';
            if (decimalValue && decimalValue.length > this.decimal) {
              return stopEventBubbling(ev);
            }
          }
        }
      }
    };
    this.onFocus = (ev) => inputHandleFocus(this, ev);
    this.onClick = (ev) => inputHandleClick(this, ev);
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.focused = false;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.decimal = 0;
    this.suffix = undefined;
    this.placeholder = undefined;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.exactNumber = false;
    this.max = undefined;
    this.min = undefined;
    this.debounce = 0;
    this.value = undefined;
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  listenOnClick(ev) {
    inputListenOnClick(this, ev);
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      inputHandleReset(this, this.initialValue, this.resetHandlerTimer);
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value || 0;
  }
  componentDidLoad() {
    this.inputValue = this.value;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
    if (!this.focused && this.nativeInput) {
      this.nativeInput.value = this.getFormattedValue();
    }
  }
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  getAllowedKeys() {
    return [...NUMBER_KEYS, ...ACTION_KEYS, ...getDecimalSeparators(), getNegativeSymbol()];
  }
  getRawValue() {
    return typeof this.value === 'number' && !isNaN(this.value) ? this.value.toString() : (this.value || '').toString();
  }
  getFormattedValue() {
    const value = this.getRawValue();
    const suffix = this.suffix !== undefined && value !== undefined && value !== '' ? ' ' + this.suffix : '';
    return `${formatInputValue(value, this.decimal)}${suffix}`;
  }
  get pattern() {
    let suffix = this.suffix || '';
    if (suffix !== '') {
      suffix = ` ${suffix}`;
    }
    return `[${getNegativeSymbol()}0-9${getThousandSeparator()}${this.decimal > 0 ? getDecimalSeparator() : ''}${suffix}]*`;
  }
  render() {
    const value = this.focused ? formatFloatString(this.getRawValue()) : this.getFormattedValue();
    if (this.nativeInput && this.nativeInput.value) {
      this.nativeInput.value = value;
    }
    const block = BEM.block('number-input');
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, h("input", Object.assign({ class: {
        'input': true,
        'is-disabled': this.disabled || this.readonly,
        'is-danger': this.invalid,
      }, "data-testid": "bal-number-input", ref: input => (this.nativeInput = input), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, disabled: this.disabled, placeholder: this.placeholder || '', readonly: this.readonly, required: this.required, pattern: this.pattern, min: this.min, max: this.max, value: value, onInput: e => this.onInput(e), onFocus: e => this.onFocus(e), onBlur: e => this.onBlur(e), onClick: this.onClick, onKeyDown: e => this.onKeydown(e), onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes))));
  }
  static get is() { return "bal-number-input"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-number-input.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-number-input.css"]
    };
  }
  static get properties() {
    return {
      "name": {
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
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.inputId"
      },
      "invalid": {
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "decimal": {
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
          "text": "Defines the allowed decimal points for the `number-input`."
        },
        "attribute": "decimal",
        "reflect": false,
        "defaultValue": "0"
      },
      "suffix": {
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
          "text": "Adds a suffix the the input-value after blur."
        },
        "attribute": "suffix",
        "reflect": false
      },
      "placeholder": {
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
          "text": "Instructional text that shows before the input has a value."
        },
        "attribute": "placeholder",
        "reflect": false
      },
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
          "text": "If `true`, the user must fill in a value before submitting a form."
        },
        "attribute": "required",
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "exactNumber": {
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
          "text": "If `true` the input value has 0 as default value"
        },
        "attribute": "exact-number",
        "reflect": false,
        "defaultValue": "false"
      },
      "max": {
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
          "text": "The maximum value, which must not be less than its minimum (min attribute) value."
        },
        "attribute": "max",
        "reflect": false
      },
      "min": {
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
          "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
        },
        "attribute": "min",
        "reflect": false
      },
      "debounce": {
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
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the input."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "focused": {},
      "language": {},
      "region": {},
      "ariaForm": {}
    };
  }
  static get events() {
    return [{
        "method": "balInput",
        "name": "balInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard input occurred."
        },
        "complexType": {
          "original": "BalEvents.BalNumberInputInputDetail",
          "resolved": "number | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "BalEvents.BalNumberInputChangeDetail",
          "resolved": "number | undefined",
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
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalNumberInputBlurDetail",
          "resolved": "FocusEvent",
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
          "text": "Emitted when the input has focus."
        },
        "complexType": {
          "original": "BalEvents.BalNumberInputFocusDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balKeyPress",
        "name": "balKeyPress",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard key has pressed."
        },
        "complexType": {
          "original": "BalEvents.BalNumberInputKeyPressDetail",
          "resolved": "KeyboardEvent",
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
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../../utils/config"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      },
      "setFocus": {
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
          "text": "Sets focus on the native `input`. Use this method instead of the global\n`input.focus()`.",
          "tags": []
        }
      },
      "setBlur": {
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
          "text": "Sets blur on the native `input`. Use this method instead of the global\n`input.blur()`.",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement>"
        },
        "docs": {
          "text": "Returns the native `<input>` element used under the hood.",
          "tags": []
        }
      },
      "setAriaForm": {
        "complexType": {
          "signature": "(ariaForm: BalAriaForm) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalAriaForm": {
              "location": "import",
              "path": "../../../utils/form"
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
        "propName": "debounce",
        "methodName": "debounceChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "listenOnClick",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "reset",
        "method": "resetHandler",
        "target": "document",
        "capture": true,
        "passive": false
      }];
  }
}
__decorate([
  ListenToConfig()
], NumberInput.prototype, "configChanged", null);
let numberInputIds = 0;
