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
import { areArraysEqual } from '@baloise/web-app-utils';
import { h, Host, } from '@stencil/core';
import { stopEventBubbling } from '../../../../utils/form-input';
import { hasTagName, isDescendant } from '../../../../utils/helpers';
import { inheritAttributes } from '../../../../utils/attributes';
import { BEM } from '../../../../utils/bem';
import isFunction from 'lodash.isfunction';
import { Logger } from '../../../../utils/log';
import { ListenToMutation } from '../../../../utils/mutation';
import { defaultBalAriaForm } from '../../../../utils/form';
export class CheckboxGroup {
  constructor() {
    this.inputId = `bal-cg-${checkboxGroupIds++}`;
    this.inheritedAttributes = {};
    this.mutationObserverActive = true;
    this.onClick = (ev) => {
      if (!this.control) {
        return;
      }
      const element = ev.target;
      if (element.href) {
        return;
      }
      ev.preventDefault();
      const selectedCheckbox = ev.target && ev.target.closest('bal-checkbox');
      if (selectedCheckbox) {
        if (selectedCheckbox.disabled || selectedCheckbox.readonly) {
          return ev.stopPropagation();
        }
      }
      const newValue = [];
      this.getCheckboxes().forEach(cb => {
        if (cb.checked) {
          newValue.push(cb.value);
        }
      });
      if (!areArraysEqual(this.value, newValue)) {
        this.value = [...newValue];
        this.balChange.emit(this.value);
      }
    };
    this.onOptionChange = async () => {
      this.sync();
    };
    this.ariaForm = defaultBalAriaForm;
    this.options = undefined;
    this.interface = undefined;
    this.control = false;
    this.name = this.inputId;
    this.vertical = false;
    this.verticalOnMobile = false;
    this.expanded = false;
    this.disabled = undefined;
    this.readonly = undefined;
    this.value = [];
    this.columns = 1;
    this.columnsTablet = 1;
    this.columnsMobile = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    if (this.control) {
      this.onOptionChange();
      this.mutationObserverActive = this.options === undefined;
    }
  }
  disabledChanged(value) {
    if (this.control) {
      if (value !== undefined) {
        this.getCheckboxes().forEach(child => {
          child.disabled = value;
        });
      }
    }
  }
  readonlyChanged(value) {
    if (this.control) {
      if (value !== undefined) {
        this.getCheckboxes().forEach(child => {
          child.readonly = value;
        });
      }
    }
  }
  valueChanged(_value, oldValue) {
    if (this.control) {
      if (!areArraysEqual(this.value, oldValue)) {
        this.onOptionChange();
      }
    }
    else {
      this.onOptionChange();
    }
  }
  columnsChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSize = value));
  }
  columnsTabletChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSizeTablet = value));
  }
  columnsMobileChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSizeMobile = value));
  }
  connectedCallback() {
    if (this.control) {
      this.mutationObserverActive = this.options === undefined;
    }
  }
  componentWillLoad() {
    if (this.control) {
      this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
      this.disabledChanged(this.disabled);
      this.readonlyChanged(this.readonly);
    }
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  mutationListener() {
    if (this.control) {
      this.disabledChanged(this.disabled);
      this.readonlyChanged(this.readonly);
    }
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  listenOnClick(ev) {
    if (this.control) {
      if (isDescendant(this.el, ev.target)) {
        stopEventBubbling(ev);
      }
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      if (this.control) {
        this.value = [];
      }
      this.onOptionChange();
    }
  }
  checkboxFocusListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-checkbox')) {
      stopEventBubbling(ev);
      this.balFocus.emit(ev.detail);
    }
  }
  checkboxBlurListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-checkbox')) {
      stopEventBubbling(ev);
      this.balBlur.emit(ev.detail);
    }
  }
  async setValue(value) {
    if (this.control) {
      this.value = value;
    }
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
  sync() {
    if (this.control) {
      const isChecked = (checkbox) => {
        for (let index = 0; index < this.value.length; index++) {
          const valueItem = this.value[index];
          if (valueItem !== undefined && valueItem.toString() === checkbox.value.toString()) {
            return true;
          }
        }
        return false;
      };
      this.getCheckboxes().forEach((checkbox) => {
        checkbox.checked = isChecked(checkbox);
      });
    }
    this.getCheckboxes().forEach((checkbox) => {
      if (this.interface) {
        checkbox.interface = this.interface;
      }
    });
  }
  getCheckboxes() {
    return Array.from(this.el.querySelectorAll('bal-checkbox'));
  }
  getCheckboxButtons() {
    return Array.from(this.el.querySelectorAll('bal-checkbox-button'));
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
    return (h(Host, Object.assign({ class: Object.assign({}, block.class()), role: "group", "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, onClick: this.onClick }, this.inheritedAttributes), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, h("slot", null), options.map(option => (h("bal-checkbox", { name: option.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  static get is() { return "bal-checkbox-group"; }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalCheckboxOption[]",
          "resolved": "BalCheckboxOption[] | undefined",
          "references": {
            "BalCheckboxOption": {
              "location": "import",
              "path": "../bal-checkbox.type"
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
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCheckboxGroupInterface",
          "resolved": "\"checkbox\" | \"select-button\" | \"switch\" | undefined",
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
          "text": "Defines the layout of the checkbox button"
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "control": {
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
          "text": "If `true` it acts as the main form control"
        },
        "attribute": "control",
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
          "text": "If `true`, the user cannot interact with the checkboxes."
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
          "text": "If `true`, the user cannot interact with the checkboxes."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "value": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the control."
        },
        "defaultValue": "[]"
      },
      "columns": {
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
          "original": "BalEvents.BalCheckboxGroupChangeDetail",
          "resolved": "any[]",
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
          "original": "BalEvents.BalCheckboxGroupFocusDetail",
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
          "original": "BalEvents.BalCheckboxGroupBlurDetail",
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
          "signature": "(value: any[]) => Promise<void>",
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
          "signature": "(value: string) => Promise<BalCheckboxOption | undefined>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalCheckboxOption": {
              "location": "import",
              "path": "../bal-checkbox.type"
            }
          },
          "return": "Promise<BalCheckboxOption | undefined>"
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
        "propName": "disabled",
        "methodName": "disabledChanged"
      }, {
        "propName": "readonly",
        "methodName": "readonlyChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
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
        "name": "reset",
        "method": "resetHandler",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "balFocus",
        "method": "checkboxFocusListener",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "balBlur",
        "method": "checkboxBlurListener",
        "target": "document",
        "capture": true,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-checkbox-group')
], CheckboxGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-checkbox-group', 'bal-checkbox'], attributes: false, characterData: false })
], CheckboxGroup.prototype, "mutationListener", null);
let checkboxGroupIds = 0;
