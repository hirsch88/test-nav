import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as areArraysEqual } from './index.esm.js';
import { s as stopEventBubbling } from './form-input.js';
import { i as isDescendant, n as hasTagName } from './helpers.js';
import { i as inheritAttributes } from './attributes.js';
import { B as BEM } from './bem.js';
import { l as lodash_isfunction } from './index4.js';
import { L as Logger } from './log.js';
import { L as ListenToMutation } from './mutation.decorator.js';
import { d as defaultBalAriaForm } from './form.js';
import { d as defineCustomElement$2 } from './bal-checkbox2.js';

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
const CheckboxGroup = proxyCustomElement(class CheckboxGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get watchers() { return {
    "options": ["optionChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"],
    "value": ["valueChanged"],
    "columns": ["columnsChanged"],
    "columnsTablet": ["columnsTabletChanged"],
    "columnsMobile": ["columnsMobileChanged"]
  }; }
}, [4, "bal-checkbox-group", {
    "options": [16],
    "interface": [1],
    "control": [4],
    "name": [1],
    "vertical": [4],
    "verticalOnMobile": [4, "vertical-on-mobile"],
    "expanded": [4],
    "disabled": [4],
    "readonly": [4],
    "value": [1040],
    "columns": [2],
    "columnsTablet": [2, "columns-tablet"],
    "columnsMobile": [2, "columns-mobile"],
    "ariaForm": [32],
    "setValue": [64],
    "getOptionByValue": [64],
    "setAriaForm": [64]
  }, [[6, "balChange", "listenOnClick"], [6, "reset", "resetHandler"], [6, "balFocus", "checkboxFocusListener"], [6, "balBlur", "checkboxBlurListener"]]]);
__decorate([
  Logger('bal-checkbox-group')
], CheckboxGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-checkbox-group', 'bal-checkbox'], attributes: false, characterData: false })
], CheckboxGroup.prototype, "mutationListener", null);
let checkboxGroupIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-checkbox-group", "bal-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-checkbox-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CheckboxGroup);
      }
      break;
    case "bal-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalCheckboxGroup = CheckboxGroup;
const defineCustomElement = defineCustomElement$1;

export { BalCheckboxGroup, defineCustomElement };
