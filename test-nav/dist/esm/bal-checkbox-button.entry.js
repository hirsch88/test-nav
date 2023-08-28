import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { s as stopEventBubbling } from './form-input-fd2d14ca.js';
import { L as Logger } from './log-01623e2c.js';
import { FOCUS_KEYS } from './focus-visible-06bce1ff.js';
import { i as isDescendant } from './helpers-08b28736.js';
import { B as BalElementStateListener, L as ListenToElementStates } from './element-states.decorator-5ee75fc4.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './listener-ea90dc02.js';

const balCheckboxButtonCss = "@media (hover: hover)and (pointer: fine){.bal-checkbox-button__native.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}:root{--bal-radio-checkbox-select-button-background-hover:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-active:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-checked:var(--bal-color-primary);--bal-radio-checkbox-select-button-background-checked-hover:var(--bal-color-light-blue-5);--bal-radio-checkbox-select-button-background-checked-active:var(--bal-color-blue-6);--bal-radio-checkbox-select-button-background-invalid:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-hover:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-active:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-checked:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-background-invalid-checked-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-background-invalid-checked-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-background-disabled-hover-active:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-disabled-checked-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-before:var(--bal-color-blue-1);--bal-radio-checkbox-switch-label-background-after:var(--bal-color-primary);--bal-radio-checkbox-switch-label-background-hover-after:var(--bal-color-light-blue-5);--bal-radio-checkbox-switch-label-background-active-after:var(--bal-color-blue-6);--bal-radio-checkbox-switch-label-background-checked-before:var(--bal-color-success-4);--bal-radio-checkbox-switch-label-background-checked-after:var(--bal-color-white);--bal-radio-checkbox-switch-label-background-checked-hover-before:var(--bal-color-success-5);--bal-radio-checkbox-switch-label-background-checked-active-before:var(--bal-color-success-6);--bal-radio-checkbox-switch-label-background-invalid-before:var(--bal-color-danger-1);--bal-radio-checkbox-switch-label-background-invalid-after:var(--bal-color-border-danger);--bal-radio-checkbox-switch-label-background-invalid-hover-after:var(--bal-color-danger-6);--bal-radio-checkbox-switch-label-background-invalid-active-after:var(--bal-color-border-danger);--bal-radio-checkbox-switch-label-background-invalid-checked-before:var(--bal-color-danger-4);--bal-radio-checkbox-switch-label-background-invalid-checked-after:var(--bal-color-white);--bal-radio-checkbox-switch-label-background-invalid-checked-hover-before:var(--bal-color-danger-5);--bal-radio-checkbox-switch-label-background-invalid-checked-active-before:var(--bal-color-danger-6);--bal-radio-checkbox-switch-label-background-disabled-hover-active-before:var(--bal-color-grey-3);--bal-radio-checkbox-switch-label-background-disabled-hover-active-after:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-before:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-after:var(--bal-color-white);--bal-radio-checkbox-button-background:var(--bal-color-transparent);--bal-radio-checkbox-button-background-checked-green:var(--bal-color-green-1);--bal-radio-checkbox-button-background-checked-purple:var(--bal-color-purple-1);--bal-radio-checkbox-button-background-checked-red:var(--bal-color-red-1);--bal-radio-checkbox-button-background-checked-yellow:var(--bal-color-yellow-1);--bal-radio-checkbox-button-background-disabled:var(--bal-color-grey-1);--bal-radio-checkbox-button-background-hover:var(--bal-color-grey-1);--bal-radio-checkbox-select-button-border-color:var(--bal-color-primary);--bal-radio-checkbox-select-button-border-color-hover:var(--bal-color-light-blue-5);--bal-radio-checkbox-select-button-border-color-active:var(--bal-color-blue-6);--bal-radio-checkbox-select-button-border-color-invalid:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-border-color-invalid-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-border-color-invalid-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-border-color-invalid-checked:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-border-color-invalid-checked-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-border-color-invalid-checked-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-border-color-disabled-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-select-button-border-color-disabled-checked-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-button-border-color-hover:var(--bal-color-border-light-blue);--bal-radio-checkbox-button-border-color-active:var(--bal-color-border-primary-dark);--bal-radio-checkbox-button-border-color-invalid-hover:var(--bal-color-border-danger-dark);--bal-radio-checkbox-button-border-color-invalid-active:var(--bal-color-border-danger-darker);--bal-radio-checkbox-button-border-color:var(--bal-color-border-grey);--bal-radio-checkbox-button-border-color-checked:var(--bal-color-border-primary);--bal-radio-checkbox-button-border-color-disabled:var(--bal-color-border-grey-dark);--bal-radio-checkbox-button-border-color-invalid:var(--bal-color-border-danger)}.bal-checkbox-button{display:block;position:relative;-ms-flex:0 0 100%;flex:0 0 100%}@media screen and (min-width: 769px),print{.bal-checkbox-button--column-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-checkbox-button--column-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-checkbox-button--column-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (max-width: 768px){.bal-checkbox-button--column-mobile-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-checkbox-button--column-mobile-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-checkbox-button--column-mobile-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (min-width: 769px),print{.bal-checkbox-button--column-tablet-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-checkbox-button--column-tablet-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-checkbox-button--column-tablet-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (min-width: 1024px){.bal-checkbox-button--column-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-checkbox-button--column-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-checkbox-button--column-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}.bal-checkbox-button__native{display:block;width:100%;height:100%;background:var(--bal-radio-checkbox-button-background);border-style:var(--bal-form-field-control-border-style);border-radius:var(--bal-form-field-control-radius);border-width:var(--bal-form-field-control-border-width);border-color:var(--bal-radio-checkbox-button-border-color);padding:var(--bal-size-medium);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bal-checkbox-button__native--checked{border-color:var(--bal-radio-checkbox-button-border-color-checked)}.bal-checkbox-button__native--checked.bal-checkbox-button__native--color-green{background:var(--bal-radio-checkbox-button-background-checked-green)}.bal-checkbox-button__native--checked.bal-checkbox-button__native--color-purple{background:var(--bal-radio-checkbox-button-background-checked-purple)}.bal-checkbox-button__native--checked.bal-checkbox-button__native--color-red{background:var(--bal-radio-checkbox-button-background-checked-red)}.bal-checkbox-button__native--checked.bal-checkbox-button__native--color-yellow{background:var(--bal-radio-checkbox-button-background-checked-yellow)}.bal-checkbox-button__native:disabled,.bal-checkbox-button__native--disabled{background:var(--bal-radio-checkbox-button-background-disabled);border-color:var(--bal-radio-checkbox-button-border-color-disabled);cursor:default}.bal-checkbox-button__native--invalid{border-color:var(--bal-radio-checkbox-button-border-color-invalid)}@media (hover: hover)and (pointer: fine){.bal-checkbox-button__native:hover:not(:disabled):not(.bal-checkbox-button__native--colored){background:var(--bal-radio-checkbox-button-background-hover);border-color:var(--bal-radio-checkbox-button-border-color-hover)}}.bal-checkbox-button__native:active:not(:disabled){border-color:var(--bal-radio-checkbox-button-border-color-active)}@media (hover: hover)and (pointer: fine){.bal-checkbox-button__native--invalid:hover:not(:disabled){border-color:var(--bal-radio-checkbox-button-border-color-invalid-hover)}.bal-checkbox-button__native--invalid:active:not(:disabled){border-color:var(--bal-radio-checkbox-button-border-color-invalid-active)}}";

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
const BalCheckboxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFormControlDidLoad = createEvent(this, "balFormControlDidLoad", 7);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "invalid": ["invalidHandler"],
    "disabled": ["disabledHandler"],
    "readonly": ["readonlyHandler"]
  }; }
};
__decorate([
  Logger('bal-checkbox-button')
], BalCheckboxButton.prototype, "createLogger", null);
__decorate([
  ListenToElementStates()
], BalCheckboxButton.prototype, "elementStateListener", null);
BalCheckboxButton.style = {
  css: balCheckboxButtonCss
};

export { BalCheckboxButton as bal_checkbox_button };
