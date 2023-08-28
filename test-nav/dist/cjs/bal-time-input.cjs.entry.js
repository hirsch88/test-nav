'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const index$1 = require('./index-e6a233be.js');
const initialize = require('./initialize-4d4da7e2.js');
const log = require('./log-911f84ec.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
const formInput = require('./form-input-7611e5c9.js');
const helpers = require('./helpers-83a73189.js');
const attributes = require('./attributes-fa738cf7.js');
const keys_constant = require('./keys.constant-6ed40b9d.js');
const bem = require('./bem-5d122a5c.js');
const balTimeInput_i18n = require('./bal-time-input.i18n-352568b7.js');
const form = require('./form-9af6cd7d.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./index-843a2913.js');

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
    index.registerInstance(this, hostRef);
    this.balInput = index.createEvent(this, "balInput", 7);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.balFocus = index.createEvent(this, "balFocus", 7);
    this.balKeyPress = index.createEvent(this, "balKeyPress", 7);
    this.balClick = index.createEvent(this, "balClick", 7);
    this.inputId = `bal-time-input-${timeInputIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = '';
    this.onInput = (ev) => {
      const input = formInput.getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
      }
      this.balInput.emit(this.inputValue);
    };
    this.onFocus = (ev) => {
      formInput.inputHandleFocus(this, ev);
    };
    this.onBlur = (ev) => {
      formInput.inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        input.value = this.getFormattedValue();
        formInput.inputHandleChange(this);
      }
    };
    this.onKeydown = (ev) => {
      if (!index$1.lodash_isnil(ev) && !keys_constant.isCtrlOrCommandKey(ev)) {
        if (!this.getAllowedKeys().includes(ev.key)) {
          return formInput.stopEventBubbling(ev);
        }
      }
    };
    this.focused = false;
    this.language = initialize.defaultConfig.language;
    this.region = initialize.defaultConfig.region;
    this.ariaForm = form.defaultBalAriaForm;
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
    this.balChange = helpers.debounceEvent(this.balChange, this.debounce);
  }
  listenOnClick(ev) {
    formInput.inputListenOnClick(this, ev);
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      formInput.inputHandleReset(this, this.initialValue, this.resetHandlerTimer);
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
    this.inheritedAttributes = attributes.inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
    if (!this.focused && this.nativeInput) {
      this.nativeInput.value = this.getFormattedValue();
    }
  }
  async setFocus() {
    formInput.inputSetFocus(this);
  }
  async setBlur() {
    formInput.inputSetBlur(this);
  }
  async getInputElement() {
    return this.nativeInput;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  getAllowedKeys() {
    return [...keys_constant.NUMBER_KEYS, ...keys_constant.ACTION_KEYS, ':'];
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
    const block = bem.BEM.block('time-input');
    const native = block.element('native');
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, index.h("bal-input-group", { disabled: this.disabled || this.readonly, invalid: this.invalid }, index.h("input", Object.assign({ type: "time", class: Object.assign({ 'input': true, 'is-disabled': this.disabled || this.readonly, 'is-danger': this.invalid, 'has-focus': this.focused, 'show-placeholder': !this.focused && (this.value === '' || this.value === undefined), 'has-value': this.value !== '' && this.value !== undefined }, native.class()), ref: input => (this.nativeInput = input), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: `${balTimeInput_i18n.i18nBalTimeInput[this.language].hours}:${balTimeInput_i18n.i18nBalTimeInput[this.language].minutes}`, value: value, onInput: ev => this.onInput(ev), onFocus: e => this.onFocus(e), onBlur: e => this.onBlur(e), onKeyDown: e => this.onKeydown(e), onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes)), index.h("bal-icon", { "is-right": true, color: this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : 'primary', name: "clock" }))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
__decorate([
  log.Logger('bal-time-input')
], TimeInput.prototype, "createLogger", null);
__decorate([
  config_decorator.ListenToConfig()
], TimeInput.prototype, "configChanged", null);
let timeInputIds = 0;
TimeInput.style = {
  css: balTimeInputCss
};

exports.bal_time_input = TimeInput;
