'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const helpers = require('./helpers-83a73189.js');
const attributes = require('./attributes-fa738cf7.js');
const formInput = require('./form-input-7611e5c9.js');
const index$1 = require('./index-e6a233be.js');
const keys_constant = require('./keys.constant-6ed40b9d.js');
const bem = require('./bem-5d122a5c.js');
const log = require('./log-911f84ec.js');
const form = require('./form-9af6cd7d.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');

function formatClaim(value) {
  if (!value) {
    return '';
  }
  const newValue = `${value}`.trim().toUpperCase();
  const parts = [
    newValue.substring(0, 2),
    newValue.substring(2, 8),
    newValue.substring(8, 10),
    newValue.substring(10, 11),
  ].filter(val => val.length > 0);
  switch (parts.length) {
    case 1:
      return `${value}`;
    case 2:
      return `${parts[0]}/${parts[1]}`;
    case 3:
      return `${parts[0]}/${parts[1]}/${parts[2]}`;
    default:
      return `${parts[0]}/${parts[1]}/${parts[2]}.${parts[3]}`;
  }
}
function formatPolicy(value) {
  if (!value) {
    return '';
  }
  let newValue = `${value}`.trim();
  const parts = [newValue.substring(0, 9), newValue.substring(9, 10)].filter(val => val.length > 0);
  newValue = formatOffer(parts[0]);
  return parts[1] ? `${newValue}-${parts[1]}` : newValue;
}
function formatOffer(value) {
  if (!value) {
    return '';
  }
  const newValue = `${value}`.trim();
  const parts = [
    newValue.substring(0, 2),
    newValue.substring(2, 3),
    newValue.substring(3, 6),
    newValue.substring(6, 9),
  ].filter(val => val.length > 0);
  switch (parts.length) {
    case 1:
      return `${newValue}`;
    case 2:
      return `${parts[0]}/${parts[1]}`;
    case 3:
      return `${parts[0]}/${parts[1]}.${parts[2]}`;
    default:
      return `${parts[0]}/${parts[1]}.${parts[2]}.${parts[3]}`;
  }
}
function formatBeEnterpriseNumber(value) {
  if (!value) {
    return '';
  }
  const newValue = `${value}`.trim();
  const parts = [newValue.substring(0, 4), newValue.substring(4, 7), newValue.substring(7, 10)].filter(val => val.length > 0);
  switch (parts.length) {
    case 1:
      return `${newValue}`;
    case 2:
      return `${parts[0]}.${parts[1]}`;
    default:
      return `${parts[0]}.${parts[1]}.${parts[2]}`;
  }
}
function formatBeIBAN(value) {
  if (!value) {
    return '';
  }
  const newValue = `${value}`.trim();
  const parts = [
    newValue.substring(0, 2),
    newValue.substring(2, 6),
    newValue.substring(6, 10),
    newValue.substring(10, 14),
  ].filter(val => val.length > 0);
  switch (parts.length) {
    case 1:
      return `BE${newValue}`;
    case 2:
      return `BE${parts[0]} ${parts[1]}`;
    case 3:
      return `BE${parts[0]} ${parts[1]} ${parts[2]}`;
    default:
      return `BE${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`;
  }
}
const MAX_LENGTH_CONTRACT_NUMBER = 10;
const MAX_LENGTH_OFFER_NUMBER = 9;
const MAX_LENGTH_CLAIM_NUMBER = 11;
const MAX_LENGTH_BE_ENTERPRISE_NUMBER = 10;
const MAX_LENGTH_BE_IBAN = 14;

const balInputCss = ".bal-input{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;width:100%;-ms-flex:1;flex:1;font-family:var(--bal-font-family-text);padding:0}";

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
const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balInput = index.createEvent(this, "balInput", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.balKeyPress = index.createEvent(this, "balKeyPress", 7);
    this.balFocus = index.createEvent(this, "balFocus", 7);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.inputId = `bal-input-${InputIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = this.value || '';
    this.getInputValue = () => {
      var _a;
      const input = this.nativeInput;
      let inputValue = '';
      if (input) {
        if (this.allowedKeyPress && input && !this.mask) {
          const regex = new RegExp('^' + this.allowedKeyPress + '$');
          const value = input.value
            .split('')
            .filter(val => regex.test(val))
            .join('');
          input.value = value;
          return value;
        }
        if (input.value) {
          if (this.mask) {
            switch (this.mask) {
              case 'contract-number': {
                inputValue = input.value.replace(/\D/g, '');
                if (inputValue.length > MAX_LENGTH_CONTRACT_NUMBER) {
                  inputValue = inputValue.substring(0, MAX_LENGTH_CONTRACT_NUMBER);
                }
                return inputValue;
              }
              case 'offer-number': {
                inputValue = input.value.replace(/\D/g, '');
                if (inputValue.length > MAX_LENGTH_OFFER_NUMBER) {
                  inputValue = inputValue.substring(0, MAX_LENGTH_OFFER_NUMBER);
                }
                return inputValue;
              }
              case 'claim-number': {
                inputValue = input.value.replace(/[^\dXx]/g, '');
                const inputParts = [
                  inputValue.substring(0, MAX_LENGTH_CLAIM_NUMBER - 1),
                  inputValue.substring(MAX_LENGTH_CLAIM_NUMBER - 1, MAX_LENGTH_CLAIM_NUMBER),
                  inputValue.substring(MAX_LENGTH_CLAIM_NUMBER),
                ].filter(val => val.length > 0);
                switch (inputParts.length) {
                  case 1:
                    inputValue = `${inputParts[0].replace(/\D/g, '')}`;
                    break;
                  case 2:
                    inputValue = `${inputParts[0].replace(/\D/g, '')}${inputParts[1]}`;
                    break;
                  default:
                    inputValue = `${inputParts[0].replace(/\D/g, '')}${inputParts[1]}${(_a = inputParts[2]) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, '')}`;
                }
                if (inputValue.length > MAX_LENGTH_CLAIM_NUMBER) {
                  inputValue = inputValue.substring(0, MAX_LENGTH_CLAIM_NUMBER);
                }
                return inputValue;
              }
              case 'be-enterprise-number': {
                inputValue = input.value.replace(/\D/g, '');
                if (inputValue.length > MAX_LENGTH_BE_ENTERPRISE_NUMBER) {
                  inputValue = inputValue.substring(0, MAX_LENGTH_BE_ENTERPRISE_NUMBER);
                }
                return inputValue;
              }
              case 'be-iban': {
                inputValue = input.value.replace(/\D/g, '');
                if (inputValue.length > MAX_LENGTH_BE_IBAN) {
                  inputValue = inputValue.substring(0, MAX_LENGTH_BE_IBAN);
                }
                return inputValue;
              }
              default:
                return input.value;
            }
          }
        }
        else {
          this.inputValue = input.value;
        }
      }
      return '';
    };
    this.onInput = (ev) => {
      var _a, _b;
      const input = formInput.getInputTarget(ev);
      const cursorPositionStart = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.selectionStart;
      const cursorPositionEnd = (_b = ev.target) === null || _b === void 0 ? void 0 : _b.selectionEnd;
      this.inputValue = this.getInputValue();
      if (input) {
        if (input.value) {
          switch (this.mask) {
            case 'contract-number': {
              input.value = formatPolicy(this.inputValue);
              if (cursorPositionStart < this.inputValue.length) {
                input.setSelectionRange(cursorPositionStart, cursorPositionEnd);
              }
              break;
            }
            case 'offer-number': {
              input.value = formatOffer(this.inputValue);
              if (cursorPositionStart < this.inputValue.length) {
                input.setSelectionRange(cursorPositionStart, cursorPositionEnd);
              }
              break;
            }
            case 'claim-number': {
              input.value = formatClaim(this.inputValue);
              if (cursorPositionStart < this.inputValue.length) {
                input.setSelectionRange(cursorPositionStart, cursorPositionEnd);
              }
              break;
            }
            case 'be-enterprise-number': {
              input.value = formatBeEnterpriseNumber(this.inputValue);
              if (cursorPositionStart < this.inputValue.length) {
                input.setSelectionRange(cursorPositionStart, cursorPositionEnd);
              }
              break;
            }
            case 'be-iban': {
              input.value = formatBeIBAN(this.inputValue);
              if (cursorPositionStart < this.inputValue.length) {
                input.setSelectionRange(cursorPositionStart, cursorPositionEnd);
              }
              break;
            }
            default:
              this.inputValue = input.value;
          }
        }
        else {
          this.inputValue = input.value;
        }
      }
      this.balInput.emit(this.inputValue);
    };
    this.onFocus = (ev) => formInput.inputHandleFocus(this, ev);
    this.onBlur = (ev) => {
      formInput.inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        if (this.mask === undefined) {
          input.value = this.getFormattedValue();
        }
        formInput.inputHandleChange(this);
      }
    };
    this.onKeydown = (ev) => {
      if (this.mask !== undefined && !index$1.lodash_isnil(ev) && !keys_constant.isCtrlOrCommandKey(ev)) {
        let inputLength = 0;
        if (this.inputValue) {
          inputLength = this.inputValue.length;
        }
        if (!(this.getMaskAllowedKeys().includes(ev.key) ||
          (this.mask === 'claim-number' &&
            (ev.key === 'X' || ev.key === 'x') &&
            inputLength >= MAX_LENGTH_CLAIM_NUMBER - 1))) {
          return formInput.stopEventBubbling(ev);
        }
      }
      if (this.allowedKeyPress && !this.mask && !index$1.lodash_isnil(ev) && !keys_constant.isCtrlOrCommandKey(ev)) {
        const regex = new RegExp('^' + this.allowedKeyPress + '$');
        if (!regex.test(ev.key) && ![...keys_constant.ACTION_KEYS].includes(ev.key)) {
          return formInput.stopEventBubbling(ev);
        }
      }
    };
    this.onClick = (ev) => formInput.inputHandleClick(this, ev);
    this.handleClick = (ev) => formInput.inputHandleHostClick(this, ev);
    this.focused = false;
    this.ariaForm = form.defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.textAlign = 'left';
    this.type = 'text';
    this.accept = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.debounce = 0;
    this.placeholder = undefined;
    this.max = undefined;
    this.maxLength = undefined;
    this.min = undefined;
    this.minLength = undefined;
    this.multiple = undefined;
    this.pattern = undefined;
    this.allowedKeyPress = undefined;
    this.required = false;
    this.spellcheck = false;
    this.disabled = false;
    this.readonly = false;
    this.clickable = false;
    this.suffix = undefined;
    this.hasIconRight = false;
    this.inputmode = undefined;
    this.value = undefined;
    this.mask = undefined;
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
  componentWillLoad() {
    this.inheritedAttributes = attributes.inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  componentDidLoad() {
    this.inputValue = this.value;
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
  getRawValue() {
    const value = (this.value || '').toString();
    return value;
  }
  getFormattedValue() {
    const value = this.getRawValue();
    const suffix = this.suffix !== undefined && value !== undefined && value !== '' ? ' ' + this.suffix : '';
    return `${value}${suffix}`;
  }
  getMaskAllowedKeys() {
    return [...keys_constant.NUMBER_KEYS, ...keys_constant.ACTION_KEYS];
  }
  render() {
    let value = this.focused ? this.getRawValue() : this.getFormattedValue();
    if (this.mask !== undefined) {
      switch (this.mask) {
        case 'contract-number':
          value = formatPolicy(value);
          break;
        case 'claim-number':
          value = formatClaim(value);
          break;
        case 'offer-number':
          value = formatOffer(value);
          break;
        case 'be-enterprise-number':
          value = formatBeEnterpriseNumber(value);
          break;
        case 'be-iban':
          value = formatBeIBAN(value);
          break;
      }
    }
    let inputProps = {};
    if (this.pattern) {
      inputProps = { pattern: this.pattern };
    }
    const block = bem.BEM.block('input');
    const id = this.ariaForm.controlId || this.inputId;
    return (index.h(index.Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, index.h("input", Object.assign({ class: {
        'input': true,
        'is-disabled': this.disabled || this.readonly,
        'is-danger': this.invalid,
        'clickable': this.clickable,
        'bal-focusable': !this.disabled,
        'has-icon-right': this.hasIconRight,
        'has-text-centered': this.textAlign === 'center',
        'has-text-right': this.textAlign === 'right',
      }, "data-testid": "bal-input", ref: inputEl => (this.nativeInput = inputEl), id: id, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, disabled: this.disabled, accept: this.accept, inputMode: this.inputmode, autoCapitalize: this.autocapitalize, autocomplete: this.autocomplete, autocorrect: this.autocorrect, autofocus: this.autofocus, min: this.min, max: this.max, minLength: this.minLength, maxLength: this.maxLength, multiple: this.multiple, name: this.name, placeholder: this.placeholder || '', readonly: this.readonly, required: this.required, spellcheck: this.spellcheck, type: this.type, value: value, onFocus: this.onFocus, onInput: ev => this.onInput(ev), onKeyDown: e => this.onKeydown(e), onBlur: this.onBlur, onClick: this.onClick, onKeyPress: e => this.balKeyPress.emit(e) }, inputProps, this.inheritedAttributes))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
__decorate([
  log.Logger('bal-input')
], Input.prototype, "createLogger", null);
let InputIds = 0;
Input.style = {
  css: balInputCss
};

exports.bal_input = Input;
