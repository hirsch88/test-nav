import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { l as lodash_isnil } from './index-82aff103.js';
import { d as defaultConfig } from './initialize-92ae5fef.js';
import { L as Logger } from './log-01623e2c.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import { i as inputHandleFocus, e as inputHandleBlur, f as inputHandleChange, s as stopEventBubbling, b as inputListenOnClick, j as inputHandleReset, c as inputSetFocus, d as inputSetBlur, g as getInputTarget } from './form-input-fd2d14ca.js';
import { m as debounceEvent } from './helpers-08b28736.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { i as isCtrlOrCommandKey, N as NUMBER_KEYS, A as ACTION_KEYS } from './keys.constant-a195c4b1.js';
import { B as BEM } from './bem-1b28532d.js';
import { i as i18nBalTimeInput } from './bal-time-input.i18n-213d896f.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './index-8b8ed6bd.js';

const balTimeInputCss = ":root{--bal-time-input-native-placeholder-background-before:var(--bal-color-white);--bal-time-input-native-placeholder-background-disabled-before:var(--bal-color-grey-2);--bal-time-input-native-placeholder-background-danger-before:var(--bal-color-danger-1);--bal-time-input-native-placeholder-background-disabled-danger-before:var(--bal-color-grey-2);--bal-time-input-native-placeholder-background-hover-before:var(--bal-color-grey-1);--bal-time-input-native-text-color:var(--bal-color-blue-3);--bal-time-input-native-text-color-focus-value:var(--bal-color-primary);--bal-time-input-native-text-color-disabled:var(--bal-color-grey-5);--bal-time-input-native-text-color-disabled-value:var(--bal-color-grey-4);--bal-time-input-native-placeholder-text-color-disabled-before:var(--bal-color-grey-5);--bal-time-input-native-placeholder-text-color-before:var(--bal-color-blue-3)}.bal-time-input{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0;font-family:var(--bal-font-family-text)}.bal-time-input__native::-webkit-datetime-edit-fields-wrapper{display:flex}.bal-time-input__native::-webkit-datetime-edit-text{color:var(--bal-time-input-native-text-color)}.bal-time-input__native::-webkit-datetime-edit-hour-field{color:var(--bal-time-input-native-text-color)}.bal-time-input__native::-webkit-datetime-edit-minute-field{color:var(--bal-time-input-native-text-color)}.bal-time-input__native::-webkit-clear-button{display:none}.bal-time-input__native::-webkit-inner-spin-button{display:none}.bal-time-input__native::-webkit-calendar-picker-indicator{display:none;background:none}.bal-time-input__native::-webkit-datetime-edit-ampm-field{display:none}.bal-time-input__native.has-focus::-webkit-datetime-edit-text,.bal-time-input__native.has-value::-webkit-datetime-edit-text{color:var(--bal-time-input-native-text-color-focus-value)}.bal-time-input__native.has-focus::-webkit-datetime-edit-hour-field,.bal-time-input__native.has-value::-webkit-datetime-edit-hour-field{color:var(--bal-time-input-native-text-color-focus-value)}.bal-time-input__native.has-focus::-webkit-datetime-edit-minute-field,.bal-time-input__native.has-value::-webkit-datetime-edit-minute-field{color:var(--bal-time-input-native-text-color-focus-value)}.bal-time-input__native.is-disabled::-webkit-datetime-edit-text{color:var(--bal-time-input-native-text-color-disabled)}.bal-time-input__native.is-disabled::-webkit-datetime-edit-hour-field{color:var(--bal-time-input-native-text-color-disabled)}.bal-time-input__native.is-disabled::-webkit-datetime-edit-minute-field{color:var(--bal-time-input-native-text-color-disabled)}.bal-time-input__native.is-disabled.has-value::-webkit-datetime-edit-text{color:var(--bal-time-input-native-text-color-disabled-value)}.bal-time-input__native.is-disabled.has-value::-webkit-datetime-edit-hour-field{color:var(--bal-time-input-native-text-color-disabled-value)}.bal-time-input__native.is-disabled.has-value::-webkit-datetime-edit-minute-field{color:var(--bal-time-input-native-text-color-disabled-value)}.bal-time-input__native.show-placeholder.is-disabled::before{color:var(--bal-time-input-native-placeholder-text-color-disabled-before);background:var(--bal-time-input-native-placeholder-background-disabled-before)}.bal-time-input__native.show-placeholder.is-danger::before{background:var(--bal-time-input-native-placeholder-background-danger-before)}.bal-time-input__native.show-placeholder.is-disabled.is-danger::before{background:var(--bal-time-input-native-placeholder-background-disabled-danger-before)}.bal-time-input__native.show-placeholder:hover::before{background:var(--bal-time-input-native-placeholder-background-hover-before)}.bal-time-input__native.show-placeholder::before{color:var(--bal-time-input-native-placeholder-text-color-before);content:attr(placeholder);pointer-events:none;position:absolute;background:var(--bal-time-input-native-placeholder-background-before)}";

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
const TimeInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balInput = createEvent(this, "balInput", 7);
    this.balChange = createEvent(this, "balChange", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balKeyPress = createEvent(this, "balKeyPress", 7);
    this.balClick = createEvent(this, "balClick", 7);
    this.inputId = `bal-time-input-${timeInputIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = '';
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
      }
      this.balInput.emit(this.inputValue);
    };
    this.onFocus = (ev) => {
      inputHandleFocus(this, ev);
    };
    this.onBlur = (ev) => {
      inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        input.value = this.getFormattedValue();
        inputHandleChange(this);
      }
    };
    this.onKeydown = (ev) => {
      if (!lodash_isnil(ev) && !isCtrlOrCommandKey(ev)) {
        if (!this.getAllowedKeys().includes(ev.key)) {
          return stopEventBubbling(ev);
        }
      }
    };
    this.focused = false;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.debounce = 0;
    this.value = undefined;
  }
  createLogger(log) {
    this.log = log;
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
      inputHandleReset(this, this.initialValue, this.resetHandlerTimer);
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value || '';
  }
  componentDidLoad() {
    this.inputValue = this.value;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
    if (!this.focused && this.nativeInput) {
      this.nativeInput.value = this.getFormattedValue();
    }
  }
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
  }
  async getInputElement() {
    return this.nativeInput;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  getAllowedKeys() {
    return [...NUMBER_KEYS, ...ACTION_KEYS, ':'];
  }
  getRawValue() {
    const value = (this.value || '').toString();
    return value;
  }
  getFormattedValue() {
    return this.getRawValue();
  }
  render() {
    const value = this.focused ? this.getRawValue() : this.getFormattedValue();
    const block = BEM.block('time-input');
    const native = block.element('native');
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, h("bal-input-group", { disabled: this.disabled || this.readonly, invalid: this.invalid }, h("input", Object.assign({ type: "time", class: Object.assign({ 'input': true, 'is-disabled': this.disabled || this.readonly, 'is-danger': this.invalid, 'has-focus': this.focused, 'show-placeholder': !this.focused && (this.value === '' || this.value === undefined), 'has-value': this.value !== '' && this.value !== undefined }, native.class()), ref: input => (this.nativeInput = input), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: `${i18nBalTimeInput[this.language].hours}:${i18nBalTimeInput[this.language].minutes}`, value: value, onInput: ev => this.onInput(ev), onFocus: e => this.onFocus(e), onBlur: e => this.onBlur(e), onKeyDown: e => this.onKeydown(e), onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes)), h("bal-icon", { "is-right": true, color: this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : 'primary', name: "clock" }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
__decorate([
  Logger('bal-time-input')
], TimeInput.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], TimeInput.prototype, "configChanged", null);
let timeInputIds = 0;
TimeInput.style = {
  css: balTimeInputCss
};

export { TimeInput as bal_time_input };
