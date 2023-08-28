import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { s as stopEventBubbling } from './form-input.js';
import { L as Logger } from './log.js';
import { FOCUS_KEYS } from './focus-visible.js';
import { i as isDescendant } from './helpers.js';
import { B as BalElementStateListener, L as ListenToElementStates } from './element-states.decorator.js';

const balRadioButtonCss = "@media (hover: hover)and (pointer: fine){.bal-radio-button__native.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}.bal-radio-button{display:block;position:relative;-ms-flex:0 0 100%;flex:0 0 100%}@media screen and (min-width: 769px),print{.bal-radio-button--column-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-radio-button--column-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-radio-button--column-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (max-width: 768px){.bal-radio-button--column-mobile-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-radio-button--column-mobile-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-radio-button--column-mobile-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (min-width: 769px),print{.bal-radio-button--column-tablet-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-radio-button--column-tablet-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-radio-button--column-tablet-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}@media screen and (min-width: 1024px){.bal-radio-button--column-2{-ms-flex:0 0 calc(50% - var(--bal-space-normal)*1/2);flex:0 0 calc(50% - var(--bal-space-normal)*1/2)}.bal-radio-button--column-3{-ms-flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3);flex:0 0 calc(33.3333333333% - var(--bal-space-normal)*2/3)}.bal-radio-button--column-4{-ms-flex:0 0 calc(25% - var(--bal-space-normal)*3/4);flex:0 0 calc(25% - var(--bal-space-normal)*3/4)}}.bal-radio-button__native{display:block;width:100%;height:100%;background:rgba(0,0,0,0);border-style:solid;border-radius:var(--bal-radius-normal);border-width:var(--bal-border-width-normal);border-color:var(--bal-color-border-grey);padding:var(--bal-size-medium);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bal-radio-button__native--checked{border-color:var(--bal-color-border-primary)}.bal-radio-button__native--checked.bal-radio-button__native--color-green{background:var(--bal-color-green-1)}.bal-radio-button__native--checked.bal-radio-button__native--color-purple{background:var(--bal-color-purple-1)}.bal-radio-button__native--checked.bal-radio-button__native--color-red{background:var(--bal-color-red-1)}.bal-radio-button__native--checked.bal-radio-button__native--color-yellow{background:var(--bal-color-yellow-1)}.bal-radio-button__native:disabled,.bal-radio-button__native--disabled{background:var(--bal-color-grey-1);border-color:var(--bal-color-border-grey-dark);cursor:default}.bal-radio-button__native--invalid{border-color:var(--bal-color-border-danger)}@media (hover: hover)and (pointer: fine){.bal-radio-button__native:hover:not(:disabled):not(.bal-radio-button__native--colored){background:var(--bal-color-grey-1);border-color:var(--bal-color-border-light-blue)}}.bal-radio-button__native:active:not(:disabled){border-color:var(--bal-color-border-primary-dark)}@media (hover: hover)and (pointer: fine){.bal-radio-button__native--invalid:hover:not(:disabled){border-color:var(--bal-color-border-danger-dark)}.bal-radio-button__native--invalid:active:not(:disabled){border-color:var(--bal-color-border-danger-darker)}}";

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
const BalRadioButton$1 = proxyCustomElement(class BalRadioButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      const radioEl = this.el.querySelector('bal-radio');
      const targetEl = ev.target;
      if (radioEl && targetEl) {
        const isCheckbox = targetEl === radioEl || isDescendant(radioEl, targetEl);
        if (!isCheckbox) {
          stopEventBubbling(ev);
          radioEl.click();
        }
      }
    };
    this.onFocus = (ev) => {
      var _a;
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      const radioEl = this.el.querySelector('bal-radio');
      const targetEl = ev.target;
      if (this.keyboardMode) {
        this.focused = true;
      }
      if (radioEl && targetEl) {
        const isCheckbox = targetEl === radioEl || isDescendant(radioEl, targetEl);
        if (isCheckbox) {
          stopEventBubbling(ev);
          (_a = radioEl.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
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
      const radioEl = this.el.querySelector('bal-radio');
      const targetEl = ev.target;
      this.focused = false;
      if (radioEl && targetEl) {
        const isRadio = targetEl === radioEl || isDescendant(radioEl, targetEl);
        if (isRadio) {
          stopEventBubbling(ev);
          (_a = radioEl.querySelector('input')) === null || _a === void 0 ? void 0 : _a.blur();
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
    this.updateProps('invalid', ['bal-radio', 'bal-icon', 'bal-label', 'bal-text']);
  }
  disabledHandler() {
    this.updateProps('disabled', ['bal-radio', 'bal-icon', 'bal-label', 'bal-text']);
  }
  readonlyHandler() {
    this.updateProps('readonly', ['bal-radio', 'bal-icon', 'bal-label', 'bal-text']);
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
    return Array.from(this.el.querySelectorAll('bal-label, bal-text, bal-icon, bal-radio'));
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
    const block = BEM.block('radio-button');
    const disabled = !!this.disabled || !!this.readonly;
    const invalid = !!this.invalid;
    const color = !!this.color;
    const colored = this.checked && color;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`column-${this.colSize}`).class(this.colSize > 1)), block.modifier(`column-tablet-${this.colSizeTablet}`).class(this.colSizeTablet > 1)), block.modifier(`column-mobile-${this.colSizeMobile}`).class(this.colSizeMobile > 1)), onClick: this.onClick }, h("button", { role: "radio", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier('disabled').class(disabled)), block.element('native').modifier('invalid').class(invalid)), block.element('native').modifier('checked').class(this.checked)), block.element('native').modifier(`colored`).class(colored)), block.element('native').modifier(`color-${this.color}`).class(color)), { 'bal-focusable': !this.disabled }), disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "invalid": ["invalidHandler"],
    "disabled": ["disabledHandler"],
    "readonly": ["readonlyHandler"]
  }; }
  static get style() { return {
    css: balRadioButtonCss
  }; }
}, [36, "bal-radio-button", {
    "invalid": [4],
    "disabled": [4],
    "readonly": [4],
    "color": [1],
    "colSize": [2, "col-size"],
    "colSizeTablet": [2, "col-size-tablet"],
    "colSizeMobile": [2, "col-size-mobile"],
    "interactionState": [32],
    "checked": [32],
    "focused": [32],
    "setChecked": [64]
  }]);
__decorate([
  Logger('bal-radio-button')
], BalRadioButton$1.prototype, "createLogger", null);
__decorate([
  ListenToElementStates()
], BalRadioButton$1.prototype, "elementStateListener", null);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-radio-button"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-radio-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalRadioButton$1);
      }
      break;
  } });
}

const BalRadioButton = BalRadioButton$1;
const defineCustomElement = defineCustomElement$1;

export { BalRadioButton, defineCustomElement };
