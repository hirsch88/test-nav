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
import { inputSetBlur, inputSetFocus, stopEventBubbling } from '../../../utils/form-input';
import { isDescendant } from '../../../utils/helpers';
import { inheritAttributes } from '../../../utils/attributes';
import { BEM } from '../../../utils/bem';
import { isSpaceKey } from '@baloise/web-app-utils';
import { Logger } from '../../../utils/log';
import { FOCUS_KEYS } from '../../../utils/focus-visible';
import { defaultBalAriaForm } from '../../../utils/form';
export class Checkbox {
  constructor() {
    this.inputId = `bal-cb-${checkboxIds++}`;
    this.inheritedAttributes = {};
    this.keyboardMode = true;
    this.initialValue = false;
    this.onKeypress = (ev) => {
      if (isSpaceKey(ev)) {
        const element = ev.target;
        if (element.href) {
          return;
        }
        if (element.nodeName === 'INPUT' && !this.disabled && !this.readonly) {
          this.toggleChecked();
          ev.preventDefault();
        }
        else {
          stopEventBubbling(ev);
        }
      }
    };
    this.onClick = (ev) => {
      var _a;
      const element = ev.target;
      if (element.href) {
        return;
      }
      if (element.nodeName !== 'INPUT' && !this.disabled && !this.readonly) {
        this.toggleChecked();
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        ev.preventDefault();
      }
      else {
        stopEventBubbling(ev);
      }
    };
    this.onFocus = (ev) => {
      if (this.disabled || this.readonly) {
        this.focused = false;
        return stopEventBubbling(ev);
      }
      this.balFocus.emit(ev);
      if (this.keyboardMode) {
        this.focused = true;
      }
    };
    this.onBlur = (ev) => {
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      this.balBlur.emit(ev);
      this.focused = false;
    };
    this.onPointerDown = () => (this.keyboardMode = false);
    this.onKeydown = (ev) => (this.keyboardMode = FOCUS_KEYS.includes(ev.key));
    this.hasLabel = true;
    this.focused = false;
    this.buttonTabindex = undefined;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.label = '';
    this.invisible = false;
    this.labelHidden = false;
    this.flat = false;
    this.interface = 'checkbox';
    this.value = 'on';
    this.checked = false;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.hidden = false;
    this.invalid = false;
    this.hovered = false;
    this.pressed = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    const groupEl = this.group;
    const checkboxButton = this.checkboxButton;
    if (checkboxButton || groupEl) {
      this.updateState();
    }
    if (groupEl) {
      groupEl.addEventListener('balChange', () => this.updateState());
    }
    this.initialValue = this.checked;
    this.el.addEventListener('keydown', this.onKeydown);
    this.el.addEventListener('touchstart', this.onPointerDown);
    this.el.addEventListener('mousedown', this.onPointerDown);
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  disconnectedCallback() {
    if (this.group) {
      this.group.removeEventListener('balChange', () => this.updateState());
    }
    this.el.removeEventListener('keydown', this.onKeydown);
    this.el.removeEventListener('touchstart', this.onPointerDown);
    this.el.removeEventListener('mousedown', this.onPointerDown);
  }
  listenOnClick(ev) {
    if ((this.disabled || this.readonly) &&
      ev.target &&
      (ev.target === this.el || isDescendant(this.el, ev.target))) {
      stopEventBubbling(ev);
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.checked = this.initialValue;
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
  async getOption() {
    return this.option;
  }
  async setButtonTabindex(value) {
    if (this.checkboxButton) {
      this.buttonTabindex = -1;
    }
    else {
      this.buttonTabindex = value;
    }
  }
  async updateState() {
    if (this.group && this.group.control && Array.isArray(this.group.value)) {
      const newChecked = this.group.value.includes(this.value);
      if (newChecked !== this.checked) {
        this.checked = newChecked;
      }
    }
    if (this.checkboxButton) {
      this.buttonTabindex = -1;
      if (this.checkboxButton.setChecked) {
        this.checkboxButton.setChecked(this.checked);
      }
    }
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  get option() {
    return {
      name: this.name,
      value: this.value,
      checked: this.checked,
      label: this.label,
      labelHidden: this.labelHidden,
      flat: this.flat,
      interface: this.interface,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      hidden: this.hidden,
      invisible: this.invisible,
      invalid: this.invalid,
    };
  }
  get group() {
    return this.el.closest('bal-checkbox-group');
  }
  get checkboxButton() {
    return this.el.closest('bal-checkbox-button');
  }
  toggleChecked() {
    this.checked = !this.checked;
    this.balChange.emit(this.checked);
  }
  render() {
    const block = BEM.block('radio-checkbox');
    const inputEl = block.element('input');
    const labelEl = block.element('label');
    const labelTextEl = labelEl.element('text');
    const focused = this.focused && this.buttonTabindex !== -1;
    const inputAttributes = this.inheritedAttributes;
    if (this.buttonTabindex !== undefined) {
      inputAttributes.tabIndex = this.buttonTabindex;
    }
    const id = this.ariaForm.controlId || this.inputId;
    let labelId = this.ariaForm.labelId || null;
    const LabelTag = this.labelHidden ? 'span' : 'label';
    const labelAttributes = {};
    if (!this.labelHidden) {
      labelId = `${labelId || ''} ${id}-lbl`.trim();
      labelAttributes.id = `${id}-lbl`;
      labelAttributes.htmlFor = id;
    }
    return (h(Host, { role: "checkbox", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-hidden": this.disabled ? 'true' : null, "aria-focused": focused ? 'true' : null, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'bal-focused': focused }, block.class()), block.modifier('checkbox').class()), block.modifier('select-button').class(this.interface === 'select-button')), block.modifier('switch').class(this.interface === 'switch')), block.modifier('focused').class(this.focused)), block.modifier('invalid').class(this.invalid)), block.modifier('checked').class(this.checked)), block.modifier('invisible').class(this.invisible)), block.modifier('flat').class(this.flat)), block.modifier('disabled').class(this.disabled || this.readonly)), block.modifier('hovered').class(this.hovered)), block.modifier('pressed').class(this.pressed)), onKeypress: this.onKeypress, onClick: this.onClick }, h("input", Object.assign({ class: Object.assign(Object.assign({}, inputEl.class()), inputEl.modifier('select-button').class(this.interface === 'select-button')), "data-testid": "bal-checkbox-input", type: "checkbox", id: id, "aria-labelledby": labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.checked}`, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled || this.hidden, readonly: this.readonly, required: this.required, onFocus: this.onFocus, onBlur: this.onBlur, ref: inputEl => (this.nativeInput = inputEl) }, inputAttributes)), !this.invisible ? (h(LabelTag, Object.assign({ class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, labelEl.class()), labelEl.modifier('checkbox').class()), labelEl.modifier('checked').class(this.checked)), labelEl.modifier('hidden').class(this.labelHidden)), labelEl.modifier('flat').class(this.flat)), labelEl.modifier('switch').class(this.interface === 'switch')) }, labelAttributes, { "data-testid": "bal-checkbox-label" }), h("span", { class: Object.assign(Object.assign(Object.assign({}, labelTextEl.class()), labelTextEl.modifier('hidden').class(this.labelHidden)), labelTextEl.modifier('flat').class(this.flat)), "data-testid": "bal-checkbox-text" }, this.label, h("slot", null)))) : ('')));
  }
  static get is() { return "bal-checkbox"; }
  static get originalStyleUrls() {
    return {
      "css": ["radio-checkbox.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["radio-checkbox.css"]
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
      "label": {
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
          "text": "Label of the radio item."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "invisible": {
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
          "text": "If `true` the radio is invisible, but sill active"
        },
        "attribute": "invisible",
        "reflect": false,
        "defaultValue": "false"
      },
      "labelHidden": {
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
          "text": "If `true` the checkbox has no label"
        },
        "attribute": "label-hidden",
        "reflect": false,
        "defaultValue": "false"
      },
      "flat": {
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
          "text": "If `true` the control is no padding"
        },
        "attribute": "flat",
        "reflect": false,
        "defaultValue": "false"
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxInterface",
          "resolved": "\"checkbox\" | \"select-button\" | \"switch\"",
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
          "text": "Defines the layout of the checkbox button"
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'checkbox'"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A DOMString representing the value of the checkbox. This is not displayed on the\nclient-side, but on the server this is the value given to the data\nsubmitted with the checkbox's name."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "'on'"
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the checkbox is selected."
        },
        "attribute": "checked",
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
      "hidden": {
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
          "text": "If `true`, the value will not be send with a form submit"
        },
        "attribute": "hidden",
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "hovered": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "hovered",
        "reflect": false,
        "defaultValue": "false"
      },
      "pressed": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "pressed",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasLabel": {},
      "focused": {},
      "buttonTabindex": {},
      "ariaForm": {}
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
          "original": "BalEvents.BalCheckboxFocusDetail",
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
          "original": "BalEvents.BalCheckboxBlurDetail",
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
          "text": "Emitted when the value property has changed."
        },
        "complexType": {
          "original": "BalEvents.BalCheckboxChangeDetail",
          "resolved": "boolean",
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
          "text": "Sets the focus on the checkbox input element.",
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
      "getOption": {
        "complexType": {
          "signature": "() => Promise<BalCheckboxOption>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalCheckboxOption": {
              "location": "import",
              "path": "./bal-checkbox.type"
            }
          },
          "return": "Promise<BalCheckboxOption>"
        },
        "docs": {
          "text": "Options of the tab like label, value etc.",
          "tags": []
        }
      },
      "setButtonTabindex": {
        "complexType": {
          "signature": "(value: number) => Promise<void>",
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
      },
      "updateState": {
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
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "Options of the tab like label, value etc."
            }]
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
  Logger('bal-checkbox')
], Checkbox.prototype, "createLogger", null);
let checkboxIds = 0;
