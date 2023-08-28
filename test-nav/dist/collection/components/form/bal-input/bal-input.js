var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, } from '@stencil/core';
import { debounceEvent } from '../../../utils/helpers';
import { inheritAttributes } from '../../../utils/attributes';
import { getInputTarget, inputHandleBlur, inputHandleChange, inputHandleClick, inputHandleFocus, inputHandleHostClick, inputHandleReset, inputListenOnClick, inputSetBlur, inputSetFocus, stopEventBubbling, } from '../../../utils/form-input';
import { formatBeEnterpriseNumber, formatBeIBAN, formatClaim, formatOffer, formatPolicy, MAX_LENGTH_BE_ENTERPRISE_NUMBER, MAX_LENGTH_BE_IBAN, MAX_LENGTH_CLAIM_NUMBER, MAX_LENGTH_CONTRACT_NUMBER, MAX_LENGTH_OFFER_NUMBER, } from './bal-input-util';
import isNil from 'lodash.isnil';
import { ACTION_KEYS, isCtrlOrCommandKey, NUMBER_KEYS } from '../../../utils/constants/keys.constant';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { defaultBalAriaForm } from '../../../utils/form';
export class Input {
  constructor() {
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
      const input = getInputTarget(ev);
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
    this.onFocus = (ev) => inputHandleFocus(this, ev);
    this.onBlur = (ev) => {
      inputHandleBlur(this, ev);
      const input = ev.target;
      if (input) {
        if (this.mask === undefined) {
          input.value = this.getFormattedValue();
        }
        inputHandleChange(this);
      }
    };
    this.onKeydown = (ev) => {
      if (this.mask !== undefined && !isNil(ev) && !isCtrlOrCommandKey(ev)) {
        let inputLength = 0;
        if (this.inputValue) {
          inputLength = this.inputValue.length;
        }
        if (!(this.getMaskAllowedKeys().includes(ev.key) ||
          (this.mask === 'claim-number' &&
            (ev.key === 'X' || ev.key === 'x') &&
            inputLength >= MAX_LENGTH_CLAIM_NUMBER - 1))) {
          return stopEventBubbling(ev);
        }
      }
      if (this.allowedKeyPress && !this.mask && !isNil(ev) && !isCtrlOrCommandKey(ev)) {
        const regex = new RegExp('^' + this.allowedKeyPress + '$');
        if (!regex.test(ev.key) && ![...ACTION_KEYS].includes(ev.key)) {
          return stopEventBubbling(ev);
        }
      }
    };
    this.onClick = (ev) => inputHandleClick(this, ev);
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.focused = false;
    this.ariaForm = defaultBalAriaForm;
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
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  componentDidLoad() {
    this.inputValue = this.value;
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
    return [...NUMBER_KEYS, ...ACTION_KEYS];
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
    const block = BEM.block('input');
    const id = this.ariaForm.controlId || this.inputId;
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, h("input", Object.assign({ class: {
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
  static get is() { return "bal-input"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-input.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-input.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.inputId"
      },
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "textAlign": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'center' | 'left' | 'right'",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the text align of the input value."
        },
        "attribute": "text-align",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalInputInputType",
          "resolved": "\"button\" | \"checkbox\" | \"color\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"image\" | \"month\" | \"number\" | \"password\" | \"radio\" | \"range\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"week\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the type of the input (text, number, email ...)."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "accept": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If the value of the type attribute is `\"file\"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers."
        },
        "attribute": "accept",
        "reflect": false
      },
      "autocapitalize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.\nAvailable options: `\"off\"`, `\"none\"`, `\"on\"`, `\"sentences\"`, `\"words\"`, `\"characters\"`."
        },
        "attribute": "autocapitalize",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalInputAutocomplete",
          "resolved": "\"on\" | \"off\" | \"tel\" | \"url\" | \"email\" | \"name\" | \"honorific-prefix\" | \"given-name\" | \"additional-name\" | \"family-name\" | \"honorific-suffix\" | \"nickname\" | \"username\" | \"new-password\" | \"current-password\" | \"one-time-code\" | \"organization-title\" | \"organization\" | \"street-address\" | \"address-line1\" | \"address-line2\" | \"address-line3\" | \"address-level4\" | \"address-level3\" | \"address-level2\" | \"address-level1\" | \"country\" | \"country-name\" | \"postal-code\" | \"cc-name\" | \"cc-given-name\" | \"cc-additional-name\" | \"cc-family-name\" | \"cc-number\" | \"cc-exp\" | \"cc-exp-month\" | \"cc-exp-year\" | \"cc-csc\" | \"cc-type\" | \"transaction-currency\" | \"transaction-amount\" | \"language\" | \"bday\" | \"bday-day\" | \"bday-month\" | \"bday-year\" | \"sex\" | \"tel-country-code\" | \"tel-national\" | \"tel-area-code\" | \"tel-local\" | \"tel-extension\" | \"impp\" | \"photo\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicates whether the value of the control can be automatically completed by the browser."
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autocorrect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalInputAutocorrect",
          "resolved": "\"off\" | \"on\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether auto correction should be enabled when the user is entering/editing the text value."
        },
        "attribute": "autocorrect",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autofocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This Boolean attribute lets you specify that a form control should have input focus when the page loads."
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "debounce": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Instructional text that shows before the input has a value."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "max": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The maximum value, which must not be less than its minimum (min attribute) value."
        },
        "attribute": "max",
        "reflect": false
      },
      "maxLength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the max length of the value."
        },
        "attribute": "max-length",
        "reflect": false
      },
      "min": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
        },
        "attribute": "min",
        "reflect": false
      },
      "minLength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the min length of the value."
        },
        "attribute": "min-length",
        "reflect": false
      },
      "multiple": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `\"email\"` or `\"file\"`, otherwise it is ignored."
        },
        "attribute": "multiple",
        "reflect": false
      },
      "pattern": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `\"text\"`, `\"search\"`, `\"tel\"`, `\"url\"`, `\"email\"`, `\"date\"`, or `\"password\"`, otherwise it is ignored. When the type attribute is `\"date\"`, `pattern` will only be used in browsers that do not support the `\"date\"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information."
        },
        "attribute": "pattern",
        "reflect": false
      },
      "allowedKeyPress": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A regular expression that the key of the key press event is checked against and if not matching the expression the event will be prevented."
        },
        "attribute": "allowed-key-press",
        "reflect": false
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the user must fill in a value before submitting a form."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "spellcheck": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the element will have its spelling and grammar checked."
        },
        "attribute": "spellcheck",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "clickable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the input gets a clickable cursor style"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "suffix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Adds a suffix the the input-value after blur."
        },
        "attribute": "suffix",
        "reflect": false
      },
      "hasIconRight": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "If `true` the input will get some right padding."
            }],
          "text": ""
        },
        "attribute": "has-icon-right",
        "reflect": false,
        "defaultValue": "false"
      },
      "inputmode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalInputInputMode",
          "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A hint to the browser for which keyboard to display.\nPossible values: `\"none\"`, `\"text\"`, `\"tel\"`, `\"url\"`,\n`\"email\"`, `\"numeric\"`, `\"decimal\"`, and `\"search\"`."
        },
        "attribute": "inputmode",
        "reflect": false
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the input."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "undefined"
      },
      "mask": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalInputMask",
          "resolved": "\"be-enterprise-number\" | \"be-iban\" | \"claim-number\" | \"contract-number\" | \"offer-number\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Mask of the input field. It defines what the user can enter and how the format looks like. Currently, only for Switzerland formatted with addition of Belgian enterprisenumber and IBAN.\nFormatting for 'contract-number': '99/1.234.567-1'\nFormatting for 'claim-number': ('73/001217/16.9')\nFormatting for 'offer-number': ('98/7.654.321')\nFormatting for 'be-enterprise-number': ('1234.567.890')\nFormatting for 'be-iban': ('BE68 5390 0754 7034')"
        },
        "attribute": "mask",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "focused": {},
      "ariaForm": {}
    };
  }
  static get events() {
    return [{
        "method": "balInput",
        "name": "balInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard input occurred."
        },
        "complexType": {
          "original": "BalEvents.BalInputInputDetail",
          "resolved": "string | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balBlur",
        "name": "balBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard input occurred."
        },
        "complexType": {
          "original": "BalEvents.BalInputBlurDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balKeyPress",
        "name": "balKeyPress",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard key has pressed."
        },
        "complexType": {
          "original": "BalEvents.BalInputKeyPressDetail",
          "resolved": "KeyboardEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFocus",
        "name": "balFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has focus."
        },
        "complexType": {
          "original": "BalEvents.BalInputFocusDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has changed."
        },
        "complexType": {
          "original": "BalEvents.BalInputChangeDetail",
          "resolved": "string | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus on the native `input` in `bal-input`. Use this method instead of the global\n`input.focus()`.",
          "tags": []
        }
      },
      "setBlur": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets blur on the native `input` in `bal-input`. Use this method instead of the global\n`input.blur()`.",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement>"
        },
        "docs": {
          "text": "Returns the native `<input>` element used under the hood.",
          "tags": []
        }
      },
      "setAriaForm": {
        "complexType": {
          "signature": "(ariaForm: BalAriaForm) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalAriaForm": {
              "location": "import",
              "path": "../../../utils/form"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "debounce",
        "methodName": "debounceChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "listenOnClick",
        "target": "document",
        "capture": true,
        "passive": false
      }, {
        "name": "reset",
        "method": "resetHandler",
        "target": "document",
        "capture": true,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-input')
], Input.prototype, "createLogger", null);
let InputIds = 0;
