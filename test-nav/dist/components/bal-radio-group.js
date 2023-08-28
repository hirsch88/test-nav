import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { s as stopEventBubbling } from './form-input.js';
import { i as isDescendant, n as hasTagName } from './helpers.js';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';
import { l as lodash_isfunction } from './index4.js';
import { i as inheritAttributes } from './attributes.js';
import { L as ListenToMutation } from './mutation.decorator.js';
import { d as defaultBalAriaForm } from './form.js';
import { d as defineCustomElement$2 } from './bal-radio2.js';

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
const RadioGroup = proxyCustomElement(class RadioGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balChange = createEvent(this, "balChange", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
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
      if (lodash_isfunction(option.html)) {
        return Object.assign(Object.assign({}, option), { html: option.html() });
      }
      return option;
    });
    return (h(Host, Object.assign({ class: Object.assign({}, block.class()), role: "radiogroup", "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-disabled": this.disabled ? 'true' : null, onClick: this.onClick }, this.inheritedAttributes), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, h("slot", null), options.map(option => (h("bal-radio", { name: option.name || this.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "options": ["optionChanged"],
    "value": ["valueChanged"],
    "invalid": ["invalidChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"],
    "columns": ["columnsChanged"],
    "columnsTablet": ["columnsTabletChanged"],
    "columnsMobile": ["columnsMobileChanged"]
  }; }
}, [4, "bal-radio-group", {
    "options": [16],
    "allowEmptySelection": [4, "allow-empty-selection"],
    "name": [1],
    "value": [1032],
    "interface": [1],
    "vertical": [4],
    "verticalOnMobile": [4, "vertical-on-mobile"],
    "expanded": [4],
    "invalid": [4],
    "disabled": [4],
    "readonly": [4],
    "columns": [2],
    "columnsTablet": [2, "columns-tablet"],
    "columnsMobile": [2, "columns-mobile"],
    "ariaForm": [32],
    "setValue": [64],
    "getOptionByValue": [64],
    "setAriaForm": [64]
  }, [[6, "balChange", "listenOnClick"], [6, "balFocus", "radioFocusListener"], [6, "balBlur", "radioBlurListener"], [6, "reset", "resetListener"], [4, "keydown", "onKeydown"]]]);
__decorate([
  Logger('bal-radio-group')
], RadioGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-radio-group', 'bal-radio'], attributes: false, characterData: false })
], RadioGroup.prototype, "mutationListener", null);
let radioGroupIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-radio-group", "bal-radio"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-radio-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RadioGroup);
      }
      break;
    case "bal-radio":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalRadioGroup = RadioGroup;
const defineCustomElement = defineCustomElement$1;

export { BalRadioGroup, defineCustomElement };
