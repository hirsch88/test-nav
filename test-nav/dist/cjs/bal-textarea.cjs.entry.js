'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const formInput = require('./form-input-7611e5c9.js');
const helpers = require('./helpers-83a73189.js');
const attributes = require('./attributes-fa738cf7.js');
const bem = require('./bem-5d122a5c.js');
const form = require('./form-9af6cd7d.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');

const balTextareaCss = ".bal-textarea{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex:1;flex:1;width:100%;font-family:var(--bal-font-family-text);white-space:pre-wrap;-webkit-box-sizing:border-box;box-sizing:border-box}.bal-textarea__native{margin:0;display:block;width:100%;max-width:100%;max-height:100%;outline:none;background:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:calc(.75em - 2px)}@media screen and (min-width: 769px),print{.bal-textarea__native{margin:0}}@media screen and (min-width: 1024px){.bal-textarea__native{margin:0}}.bal-textarea__native::-webkit-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::-moz-placeholder{padding:0;font-family:inherit}.bal-textarea__native:-ms-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::-ms-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::placeholder{padding:0;font-family:inherit}@media screen and (min-width: 769px),print{.bal-textarea__native::-webkit-input-placeholder{padding:0}.bal-textarea__native::-moz-placeholder{padding:0}.bal-textarea__native:-ms-input-placeholder{padding:0}.bal-textarea__native::-ms-input-placeholder{padding:0}.bal-textarea__native::placeholder{padding:0}}@media screen and (min-width: 1024px){.bal-textarea__native::-webkit-input-placeholder{padding:0}.bal-textarea__native::-moz-placeholder{padding:0}.bal-textarea__native:-ms-input-placeholder{padding:0}.bal-textarea__native::-ms-input-placeholder{padding:0}.bal-textarea__native::placeholder{padding:0}}";

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.balInput = index.createEvent(this, "balInput", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.balKeyPress = index.createEvent(this, "balKeyPress", 7);
    this.balFocus = index.createEvent(this, "balFocus", 7);
    this.inputId = `bal-textarea-${TextareaIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = this.value || '';
    this.onInput = (ev) => {
      const input = formInput.getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
      }
      this.balInput.emit(this.inputValue);
    };
    this.onFocus = (ev) => formInput.inputHandleFocus(this, ev);
    this.onBlur = (ev) => {
      formInput.inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        input.value = this.getValue();
      }
      formInput.inputHandleChange(this);
    };
    this.onClick = (ev) => formInput.inputHandleClick(this, ev);
    this.handleClick = (ev) => formInput.inputHandleHostClick(this, ev);
    this.focused = false;
    this.ariaForm = form.defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.autocapitalize = 'none';
    this.autofocus = false;
    this.debounce = 0;
    this.placeholder = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.disabled = false;
    this.readonly = false;
    this.cols = undefined;
    this.rows = undefined;
    this.wrap = undefined;
    this.required = false;
    this.clickable = false;
    this.inputmode = undefined;
    this.value = '';
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
  async setFocus() {
    formInput.inputSetFocus(this);
  }
  async setBlur() {
    formInput.inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  getValue() {
    return this.value || '';
  }
  render() {
    const value = this.getValue();
    const block = bem.BEM.block('textarea');
    const elNative = block.element('native');
    return (index.h(index.Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, index.h("textarea", Object.assign({ class: Object.assign(Object.assign({}, elNative.class()), { 'textarea': true, 'is-disabled': this.disabled || this.readonly, 'is-danger': this.invalid, 'clickable': this.clickable }), "data-testid": "bal-textarea-input", ref: inputEl => (this.nativeInput = inputEl), name: this.name, id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, disabled: this.disabled, readonly: this.readonly, required: this.required, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, minLength: this.minLength, maxLength: this.maxLength, placeholder: this.placeholder, inputMode: this.inputmode, value: this.value, cols: this.cols, rows: this.rows, wrap: this.wrap, onFocus: this.onFocus, onInput: ev => this.onInput(ev), onBlur: this.onBlur, onClick: this.onClick, onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes), value, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
let TextareaIds = 0;
Textarea.style = {
  css: balTextareaCss
};

exports.bal_textarea = Textarea;
