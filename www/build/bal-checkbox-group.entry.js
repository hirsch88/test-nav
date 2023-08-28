import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { a as areArraysEqual } from './index.esm-d25206f6.js';
import { s as stopEventBubbling } from './form-input-2b8d78bf.js';
import { i as isDescendant, n as hasTagName } from './helpers-18cc89f4.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { B as BEM } from './bem-1b28532d.js';
import { l as lodash_isfunction } from './index-3914f527.js';
import { L as Logger } from './log-01623e2c.js';
import { L as ListenToMutation } from './index-0a672def.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import './index-82aff103.js';
import './_commonjsHelpers-8fe71198.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './listener-ea90dc02.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const CheckboxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
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
      if (lodash_isfunction(option.html)) {
        return Object.assign(Object.assign({}, option), { html: option.html() });
      }
      return option;
    });
    return (h(Host, Object.assign({ class: Object.assign({}, block.class()), role: "group", "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, onClick: this.onClick }, this.inheritedAttributes), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, h("slot", null), options.map(option => (h("bal-checkbox", { name: option.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"],
    "value": ["valueChanged"],
    "columns": ["columnsChanged"],
    "columnsTablet": ["columnsTabletChanged"],
    "columnsMobile": ["columnsMobileChanged"]
  }; }
};
__decorate([
  Logger('bal-checkbox-group')
], CheckboxGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-checkbox-group', 'bal-checkbox'], attributes: false, characterData: false })
], CheckboxGroup.prototype, "mutationListener", null);
let checkboxGroupIds = 0;

export { CheckboxGroup as bal_checkbox_group };
