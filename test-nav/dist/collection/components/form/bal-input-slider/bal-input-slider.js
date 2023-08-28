import { h, Host } from '@stencil/core';
import isNil from 'lodash.isnil';
import { debounceEvent } from '../../../utils/helpers';
import { stopEventBubbling } from '../../../utils/form-input';
import { BEM } from '../../../utils/bem';
import { defaultBalAriaForm } from '../../../utils/form';
export class InputSlider {
  constructor() {
    this.inputId = `bal-input-slider-${inputSliderIds++}`;
    this.didInit = false;
    this.hasFocus = false;
    this.initialValue = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.balInput.emit(this.value);
    };
    this.handleClick = (ev) => {
      if (this.disabled || this.readonly) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.balFocus.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.balBlur.emit(ev);
      this.balChange.emit(this.value);
    };
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.step = 0;
    this.min = 0;
    this.max = 100;
    this.invalid = false;
    this.balTabindex = 0;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.hasTicks = false;
    this.debounce = 0;
    this.value = '';
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  listenOnClick(ev) {
    if ((this.disabled || this.readonly) && ev.target && ev.target === this.el) {
      stopEventBubbling(ev);
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.value = this.initialValue;
      clearTimeout(this.resetHandlerTimer);
      this.resetHandlerTimer = setTimeout(() => {
        if (this.nativeInput) {
          this.nativeInput.value = this.initialValue;
        }
      }, 0);
    }
  }
  valueChanged(newValue, oldValue) {
    if (this.didInit && !this.hasFocus && newValue !== oldValue) {
      this.balChange.emit(this.value);
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value;
  }
  componentDidLoad() {
    this.didInit = true;
    if (!isNil(this.value) && this.value !== '') {
      this.valueChanged(this.value, undefined);
    }
  }
  async setFocus() {
    clearTimeout(this.setFocusTimer);
    this.setFocusTimer = setTimeout(() => {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    });
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  get numberOfSteps() {
    const max = this.max - this.min;
    if (this.step <= 0 || this.step >= max) {
      return 0;
    }
    return ~~(max / this.step) + 1;
  }
  cssWidth(isUpper = false) {
    const a = this.value === '' ? 0 : Math.round(Number(this.value) / this.step) * this.step;
    const b = (100 / this.max) * a;
    if (!isUpper) {
      return `${100 - b}%`;
    }
    return `${b}%`;
  }
  getNumberOfSteps() {
    const steps = [];
    for (let step = 0; step < this.numberOfSteps; step++) {
      steps.push(step);
    }
    return steps;
  }
  render() {
    const block = BEM.block('input-slider');
    const backgroundEl = block.element('background');
    const backgroundUpperEl = backgroundEl.element('upper');
    const backgroundUpperInnerEl = backgroundUpperEl.element('inner');
    const backgroundLowerEl = backgroundEl.element('lower');
    const backgroundLowerInnerEl = backgroundLowerEl.element('inner');
    const inputEl = block.element('input');
    const inputNativeEl = inputEl.element('native');
    const inputValueEl = inputEl.element('value');
    const inputValueLeftEl = inputValueEl.modifier('left');
    const inputValueRightEl = inputValueEl.modifier('right');
    const stepsEl = block.element('steps');
    const stepsItemEl = stepsEl.element('item');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier('disabled').class(this.disabled || this.readonly)), onClick: this.handleClick, "aria-disabled": this.disabled || this.readonly ? 'true' : null }, h("div", { class: Object.assign(Object.assign({}, backgroundEl.class()), backgroundEl.modifier('disabled').class(this.disabled || this.readonly)) }, h("div", { class: Object.assign({}, backgroundUpperEl.class()), style: {
        width: this.cssWidth(),
      } }, h("div", { class: Object.assign({}, backgroundUpperInnerEl.class()) })), h("div", { class: Object.assign({}, backgroundLowerEl.class()), style: {
        width: this.cssWidth(true),
      } }, h("div", { class: Object.assign({}, backgroundLowerInnerEl.class()) }))), h("div", { class: Object.assign({}, inputEl.class()) }, h("div", { class: Object.assign(Object.assign({}, inputValueEl.class()), inputValueLeftEl.class()) }), h("input", { type: "range", class: Object.assign(Object.assign({}, inputNativeEl.class()), inputNativeEl.modifier('disabled').class(this.disabled || this.readonly)), ref: inputEl => (this.nativeInput = inputEl), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-disabled": this.disabled ? 'true' : null, "aria-invalid": this.invalid === true ? 'true' : 'false', disabled: this.disabled, readonly: this.readonly, name: this.name, required: this.required, tabIndex: this.balTabindex, step: this.step, min: this.min, max: this.max, value: this.value !== '' && this.value !== undefined ? this.value : 0, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyPress: e => this.balKeyPress.emit(e), "data-testid": "bal-input-slider" }), h("div", { class: Object.assign(Object.assign({}, inputValueEl.class()), inputValueRightEl.class()) })), h("div", { class: Object.assign({}, stepsEl.class()), style: { display: this.hasTicks ? 'flex' : 'none' } }, this.getNumberOfSteps().map(step => (h("div", { class: Object.assign(Object.assign({}, stepsItemEl.class()), stepsItemEl.modifier('disabled').class(this.disabled || this.readonly)), "data-step-id": step }))))));
  }
  static get is() { return "bal-input-slider"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-input-slider.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-input-slider.css"]
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
      "step": {
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
          "text": "The step size. 0 means no steps."
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "0"
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
          "text": "Min value of the model."
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
          "text": "Max value of the model."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
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
      "balTabindex": {
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
          "text": "The tabindex of the control."
        },
        "attribute": "bal-tabindex",
        "reflect": false,
        "defaultValue": "0"
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
      "hasTicks": {
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
          "text": "If `true`, small ticks for the steps are shown."
        },
        "attribute": "has-ticks",
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
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
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
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
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
          "original": "BalEvents.BalInputSliderInputDetail",
          "resolved": "null | number | string",
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
          "text": "Emitted when a keyboard input occurred."
        },
        "complexType": {
          "original": "BalEvents.BalInputSliderBlurDetail",
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
          "original": "BalEvents.BalInputSliderKeyPressDetail",
          "resolved": "KeyboardEvent",
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
          "original": "BalEvents.BalInputSliderFocusDetail",
          "resolved": "FocusEvent",
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
          "text": "Emitted when the input value has changed."
        },
        "complexType": {
          "original": "BalEvents.BalInputSliderChangeDetail",
          "resolved": "null | number | string",
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
          "text": "Sets focus on the native `input` in `bal-input`. Use this method instead of the global\n`input.focus()`.",
          "tags": []
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
      }, {
        "propName": "value",
        "methodName": "valueChanged"
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
let inputSliderIds = 0;
