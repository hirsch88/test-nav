import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { b as inputHandleFocus, e as inputHandleBlur, f as inputHandleChange, h as inputHandleClick, c as inputHandleHostClick, d as inputListenOnClick, j as inputHandleReset, i as inputSetFocus, a as inputSetBlur, g as getInputTarget } from './form-input.js';
import { m as debounceEvent } from './helpers.js';
import { i as inheritAttributes } from './attributes.js';
import { B as BEM } from './bem.js';
import { d as defaultBalAriaForm } from './form.js';

const balTextareaCss = ".bal-textarea{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex:1;flex:1;width:100%;font-family:var(--bal-font-family-text);white-space:pre-wrap;-webkit-box-sizing:border-box;box-sizing:border-box}.bal-textarea__native{margin:0;display:block;width:100%;max-width:100%;max-height:100%;outline:none;background:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:calc(.75em - 2px)}@media screen and (min-width: 769px),print{.bal-textarea__native{margin:0}}@media screen and (min-width: 1024px){.bal-textarea__native{margin:0}}.bal-textarea__native::-webkit-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::-moz-placeholder{padding:0;font-family:inherit}.bal-textarea__native:-ms-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::-ms-input-placeholder{padding:0;font-family:inherit}.bal-textarea__native::placeholder{padding:0;font-family:inherit}@media screen and (min-width: 769px),print{.bal-textarea__native::-webkit-input-placeholder{padding:0}.bal-textarea__native::-moz-placeholder{padding:0}.bal-textarea__native:-ms-input-placeholder{padding:0}.bal-textarea__native::-ms-input-placeholder{padding:0}.bal-textarea__native::placeholder{padding:0}}@media screen and (min-width: 1024px){.bal-textarea__native::-webkit-input-placeholder{padding:0}.bal-textarea__native::-moz-placeholder{padding:0}.bal-textarea__native:-ms-input-placeholder{padding:0}.bal-textarea__native::-ms-input-placeholder{padding:0}.bal-textarea__native::placeholder{padding:0}}";

const Textarea = proxyCustomElement(class Textarea extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balChange = createEvent(this, "balChange", 7);
    this.balInput = createEvent(this, "balInput", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balKeyPress = createEvent(this, "balKeyPress", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.inputId = `bal-textarea-${TextareaIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = this.value || '';
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
      }
      this.balInput.emit(this.inputValue);
    };
    this.onFocus = (ev) => inputHandleFocus(this, ev);
    this.onBlur = (ev) => {
      inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        input.value = this.getValue();
      }
      inputHandleChange(this);
    };
    this.onClick = (ev) => inputHandleClick(this, ev);
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.focused = false;
    this.ariaForm = defaultBalAriaForm;
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
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
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
    const block = BEM.block('textarea');
    const elNative = block.element('native');
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, h("textarea", Object.assign({ class: Object.assign(Object.assign({}, elNative.class()), { 'textarea': true, 'is-disabled': this.disabled || this.readonly, 'is-danger': this.invalid, 'clickable': this.clickable }), "data-testid": "bal-textarea-input", ref: inputEl => (this.nativeInput = inputEl), name: this.name, id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, disabled: this.disabled, readonly: this.readonly, required: this.required, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, minLength: this.minLength, maxLength: this.maxLength, placeholder: this.placeholder, inputMode: this.inputmode, value: this.value, cols: this.cols, rows: this.rows, wrap: this.wrap, onFocus: this.onFocus, onInput: ev => this.onInput(ev), onBlur: this.onBlur, onClick: this.onClick, onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes), value, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
  static get style() { return {
    css: balTextareaCss
  }; }
}, [36, "bal-textarea", {
    "name": [1],
    "invalid": [4],
    "autocapitalize": [1],
    "autofocus": [4],
    "debounce": [2],
    "placeholder": [1],
    "maxLength": [2, "max-length"],
    "minLength": [2, "min-length"],
    "disabled": [4],
    "readonly": [4],
    "cols": [2],
    "rows": [2],
    "wrap": [1],
    "required": [4],
    "clickable": [4],
    "inputmode": [1],
    "value": [1025],
    "focused": [32],
    "ariaForm": [32],
    "setFocus": [64],
    "setBlur": [64],
    "getInputElement": [64],
    "setAriaForm": [64]
  }, [[6, "click", "listenOnClick"], [6, "reset", "resetHandler"]]]);
let TextareaIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-textarea":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Textarea);
      }
      break;
  } });
}

const BalTextarea = Textarea;
const defineCustomElement = defineCustomElement$1;

export { BalTextarea, defineCustomElement };
