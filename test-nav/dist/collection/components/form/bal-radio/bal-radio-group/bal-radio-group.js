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
import { stopEventBubbling } from '../../../../utils/form-input';
import { hasTagName, isDescendant } from '../../../../utils/helpers';
import { BEM } from '../../../../utils/bem';
import { Logger } from '../../../../utils/log';
import isFunction from 'lodash.isfunction';
import { inheritAttributes } from '../../../../utils/attributes';
import { ListenToMutation } from '../../../../utils/mutation';
import { defaultBalAriaForm } from '../../../../utils/form';
export class RadioGroup {
  constructor() {
    this.inputId = `bal-rg-${radioGroupIds++}`;
    this.inheritedAttributes = {};
    this.mutationObserverActive = true;
    this.onOptionChange = async () => {
      this.setRadioTabindex(this.value);
      this.setRadioChecked();
    };
    this.setRadioTabindex = (value) => {
      const radios = this.getRadios();
      const first = radios.find(radio => !radio.disabled);
      const checked = radios.find(radio => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = (ev) => {
      const element = ev.target;
      if (element.href) {
        return;
      }
      ev.preventDefault();
      const selectedRadio = ev.target && ev.target.closest('bal-radio');
      if (selectedRadio && !selectedRadio.disabled && !selectedRadio.readonly) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
        }
        else if (this.allowEmptySelection) {
          this.value = undefined;
        }
        this.balChange.emit(this.value);
      }
    };
    this.ariaForm = defaultBalAriaForm;
    this.options = undefined;
    this.allowEmptySelection = false;
    this.name = this.inputId;
    this.value = undefined;
    this.interface = undefined;
    this.vertical = false;
    this.verticalOnMobile = false;
    this.expanded = false;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.columns = 1;
    this.columnsTablet = 1;
    this.columnsMobile = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    this.mutationObserverActive = this.options === undefined;
  }
  valueChanged() {
    this.onOptionChange();
  }
  invalidChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.invalid = value;
      });
    }
  }
  disabledChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.disabled = value;
      });
    }
  }
  readonlyChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.readonly = value;
      });
    }
  }
  columnsChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSize = value));
  }
  columnsTabletChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSizeTablet = value));
  }
  columnsMobileChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSizeMobile = value));
  }
  connectedCallback() {
    this.initialValue = this.value;
    this.mutationObserverActive = this.options === undefined;
  }
  componentWillLoad() {
    this.setRadioInterface();
    this.disabledChanged(this.disabled);
    this.readonlyChanged(this.readonly);
    this.invalidChanged(this.invalid);
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  mutationListener() {
    this.setRadioInterface();
    this.disabledChanged(this.disabled);
    this.readonlyChanged(this.readonly);
    this.invalidChanged(this.invalid);
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  listenOnClick(ev) {
    if (isDescendant(this.el, ev.target)) {
      stopEventBubbling(ev);
    }
  }
  radioFocusListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-radio')) {
      stopEventBubbling(ev);
      this.balFocus.emit(ev.detail);
    }
  }
  radioBlurListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-radio')) {
      stopEventBubbling(ev);
      this.balBlur.emit(ev.detail);
    }
  }
  resetListener(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.value = this.initialValue;
    }
  }
  onKeydown(ev) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    const radios = this.getRadios().filter(radio => !radio.disabled);
    const targetRadio = ev.target.closest('bal-radio');
    if (targetRadio && radios.includes(targetRadio)) {
      const index = radios.findIndex(radio => radio === targetRadio);
      const current = radios[index];
      let next;
      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        this.value = next.value;
        this.balChange.emit(this.value);
      }
      if (['Space'].includes(ev.code)) {
        this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value;
        ev.preventDefault();
      }
    }
  }
  async setValue(value) {
    this.value = value;
  }
  async getOptionByValue(value) {
    const options = this.options;
    if (options) {
      return options.find(option => option.value === value);
    }
    return undefined;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  setRadioInterface() {
    this.getRadios().forEach((radio) => {
      if (this.interface) {
        radio.interface = this.interface;
      }
    });
  }
  setRadioChecked() {
    this.getRadios().forEach((radio) => {
      if (radio.updateState) {
        radio.updateState();
      }
    });
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll('bal-radio'));
  }
  getRadioButtons() {
    return Array.from(this.el.querySelectorAll('bal-radio-button'));
  }
  render() {
    const block = BEM.block('radio-checkbox-group');
    const innerEl = block.element('inner');
    const rawOptions = this.options || [];
    const options = rawOptions.map(option => {
      if (isFunction(option.html)) {
        return Object.assign(Object.assign({}, option), { html: option.html() });
      }
      return option;
    });
    return (h(Host, Object.assign({ class: Object.assign({}, block.class()), role: "radiogroup", "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-disabled": this.disabled ? 'true' : null, onClick: this.onClick }, this.inheritedAttributes), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, h("slot", null), options.map(option => (h("bal-radio", { name: option.name || this.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  static get is() { return "bal-radio-group"; }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalRadioOption[]",
          "resolved": "BalRadioOption[] | undefined",
          "references": {
            "BalRadioOption": {
              "location": "import",
              "path": "../bal-radio.type"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Steps can be passed as a property or through HTML markup."
        }
      },
      "allowEmptySelection": {
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
          "text": "If `true`, the radios can be deselected."
        },
        "attribute": "allow-empty-selection",
        "reflect": false,
        "defaultValue": "false"
      },
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
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any | null",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the value of the radio group."
        },
        "attribute": "value",
        "reflect": false
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalRadioGroupInterface",
          "resolved": "\"radio\" | \"select-button\" | undefined",
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
          "text": "Defines the layout of the radio button"
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "vertical": {
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
          "text": "Displays the checkboxes vertically"
        },
        "attribute": "vertical",
        "reflect": false,
        "defaultValue": "false"
      },
      "verticalOnMobile": {
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
          "text": "If `true`, the controls will be vertically on mobile devices."
        },
        "attribute": "vertical-on-mobile",
        "reflect": false,
        "defaultValue": "false"
      },
      "expanded": {
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
          "text": "Uses the whole width"
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
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
      "columns": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalRadioGroupColumns",
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
          "tags": [],
          "text": "Defines the column size like the grid."
        },
        "attribute": "columns",
        "reflect": false,
        "defaultValue": "1"
      },
      "columnsTablet": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalRadioGroupColumns",
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
          "tags": [],
          "text": "Defines the column size for tablet and bigger like the grid."
        },
        "attribute": "columns-tablet",
        "reflect": false,
        "defaultValue": "1"
      },
      "columnsMobile": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalRadioGroupColumns",
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
          "tags": [],
          "text": "Defines the column size for mobile and bigger like the grid."
        },
        "attribute": "columns-mobile",
        "reflect": false,
        "defaultValue": "1"
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
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the checked property has changed."
        },
        "complexType": {
          "original": "BalEvents.BalRadioGroupChangeDetail",
          "resolved": "boolean | number | string",
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
          "text": "Emitted when the toggle has focus."
        },
        "complexType": {
          "original": "BalEvents.BalRadioGroupFocusDetail",
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
          "original": "BalEvents.BalRadioGroupBlurDetail",
          "resolved": "FocusEvent",
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
      "setValue": {
        "complexType": {
          "signature": "(value: number | string | boolean) => Promise<void>",
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
      "getOptionByValue": {
        "complexType": {
          "signature": "(value: string) => Promise<BalRadioOption | undefined>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalRadioOption": {
              "location": "import",
              "path": "../bal-radio.type"
            }
          },
          "return": "Promise<BalRadioOption | undefined>"
        },
        "docs": {
          "text": "Find the options properties by its value",
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
              "path": "../../../../utils/form"
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
        "propName": "options",
        "methodName": "optionChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "invalid",
        "methodName": "invalidChanged"
      }, {
        "propName": "disabled",
        "methodName": "disabledChanged"
      }, {
        "propName": "readonly",
        "methodName": "readonlyChanged"
      }, {
        "propName": "columns",
        "methodName": "columnsChanged"
      }, {
        "propName": "columnsTablet",
        "methodName": "columnsTabletChanged"
      }, {
        "propName": "columnsMobile",
        "methodName": "columnsMobileChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "balChange",
        "method": "listenOnClick",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "balFocus",
        "method": "radioFocusListener",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "balBlur",
        "method": "radioBlurListener",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "reset",
        "method": "resetListener",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "keydown",
        "method": "onKeydown",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-radio-group')
], RadioGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-radio-group', 'bal-radio'], attributes: false, characterData: false })
], RadioGroup.prototype, "mutationListener", null);
let radioGroupIds = 0;
