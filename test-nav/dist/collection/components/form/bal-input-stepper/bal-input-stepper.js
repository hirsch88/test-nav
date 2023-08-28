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
import Big from 'big.js';
import { formatLocaleNumber } from '@baloise/web-app-utils';
import { debounceEvent } from '../../../utils/helpers';
import { inheritAttributes } from '../../../utils/attributes';
import { inputListenOnClick } from '../../../utils/form-input';
import { ListenToConfig, defaultConfig, } from '../../../utils/config';
import { BEM } from '../../../utils/bem';
import { defaultBalAriaForm } from '../../../utils/form';
import { i18nBalInputStepper } from './bal-input-stepper.i18n';
export class InputStepper {
  constructor() {
    this.inputId = `bal-input-stepper-${InputStepperIds++}`;
    this.inheritedAttributes = {};
    this.initialValue = 0;
    this.focused = false;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.min = 0;
    this.max = 10;
    this.steps = 1;
    this.disabled = false;
    this.readonly = false;
    this.invalid = false;
    this.debounce = 0;
    this.value = 0;
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
      this.value = this.initialValue;
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  increase() {
    if (!this.disabled && !this.readonly) {
      const newValue = new Big(this.value).plus(this.steps).toNumber();
      if (newValue <= this.max) {
        this.value = newValue;
        this.balInput.emit(newValue);
        this.balChange.emit(newValue);
        this.balIncrease.emit(newValue);
      }
    }
  }
  decrease() {
    if (!this.disabled && !this.readonly) {
      const newValue = new Big(this.value).minus(this.steps).toNumber();
      if (newValue >= this.min) {
        this.value = newValue;
        this.balInput.emit(newValue);
        this.balChange.emit(newValue);
        this.balDecrease.emit(newValue);
      }
    }
  }
  render() {
    const block = BEM.block('input-stepper');
    const elInput = block.element('input');
    const elInner = block.element('inner');
    const elText = elInner.element('text');
    const increaseLabel = i18nBalInputStepper[this.language].increase;
    const decreaseLabel = i18nBalInputStepper[this.language].decrease;
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, "aria-focused": this.focused ? 'true' : null, class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, elInner.class()) }, h("bal-button", { aria: {
        title: decreaseLabel,
        label: decreaseLabel,
        controls: this.ariaForm.controlId || this.inputId,
      }, size: "small", square: true, "data-testid": "bal-input-stepper-decrease", outlined: !this.invalid, icon: "minus", color: this.invalid ? 'danger' : 'info', disabled: this.disabled || this.readonly || this.value <= this.min, onClick: _ => this.decrease() }), h("bal-text", { space: "none", color: this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : '', bold: true, class: Object.assign({}, elText.class()), "data-testid": "bal-input-stepper-text" }, formatLocaleNumber(`${this.language}-${this.region}`, this.value)), h("bal-button", { aria: {
        title: increaseLabel,
        label: increaseLabel,
        controls: this.ariaForm.controlId || this.inputId,
      }, size: "small", "data-testid": "bal-input-stepper-increase", square: true, outlined: !this.invalid, icon: "plus", color: this.invalid ? 'danger' : 'info', disabled: this.disabled || this.readonly || this.value >= this.max, onClick: _ => this.increase() })), h("input", Object.assign({ class: Object.assign({}, elInput.class()), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, "data-testid": "bal-input-stepper", type: "text", value: this.value, name: this.name, tabindex: "-1", ref: inputEl => (this.nativeInput = inputEl), readonly: this.readonly, disabled: this.disabled }, this.inheritedAttributes))));
  }
  static get is() { return "bal-input-stepper"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-input-stepper.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-input-stepper.css"]
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
      "min": {
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
          "text": "The min value the input can have"
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "0"
      },
      "max": {
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
          "text": "The max value the input can have"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "10"
      },
      "steps": {
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
          "text": "The steps in which the input increases or decreases"
        },
        "attribute": "steps",
        "reflect": false,
        "defaultValue": "1"
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
          "text": "If `true` the input is shown as invalid"
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
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
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the input. Only allows values in the range of the min max attribute."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
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
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has changed."
        },
        "complexType": {
          "original": "BalEvents.BalInputStepperChangeDetail",
          "resolved": "number | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balInput",
        "name": "balInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has changed."
        },
        "complexType": {
          "original": "BalEvents.BalInputStepperInputDetail",
          "resolved": "number | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balIncrease",
        "name": "balIncrease",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has increased."
        },
        "complexType": {
          "original": "BalEvents.BalInputStepperIncreaseDetail",
          "resolved": "number | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balDecrease",
        "name": "balDecrease",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has decreased."
        },
        "complexType": {
          "original": "BalEvents.BalInputStepperDecreaseDetail",
          "resolved": "number | undefined",
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
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement | undefined>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement | undefined>"
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
], InputStepper.prototype, "configChanged", null);
let InputStepperIds = 0;
