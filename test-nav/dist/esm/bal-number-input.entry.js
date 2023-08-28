import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { l as lodash_isnil } from './index-82aff103.js';
import { a as defaultLocale, d as defaultConfig } from './initialize-92ae5fef.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import { i as isCtrlOrCommandKey, N as NUMBER_KEYS, A as ACTION_KEYS } from './keys.constant-a195c4b1.js';
import { e as inputHandleBlur, f as inputHandleChange, s as stopEventBubbling, k as getUpcomingValue, i as inputHandleFocus, h as inputHandleClick, a as inputHandleHostClick, b as inputListenOnClick, j as inputHandleReset, c as inputSetFocus, d as inputSetBlur, g as getInputTarget, l as getNativeInputValue } from './form-input-fd2d14ca.js';
import { m as debounceEvent } from './helpers-08b28736.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { g as useBalConfig } from './index-8b8ed6bd.js';
import { j as getDecimalSeparator$1, h as formatLocaleNumber$1, k as getThousandSeparator$1 } from './index.esm-df73647b.js';
import { B as BEM } from './bem-1b28532d.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import './browser-9199b5e2.js';
import './log-01623e2c.js';
import './icons.constant-35253412.js';
import './_commonjsHelpers-ba3f0406.js';

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
 * which returns `true` for `undefined` and other non-numeric values.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN$1(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

var lodash_isnan = isNaN$1;

const getLocale = () => {
  const config = useBalConfig();
  return (config && config.locale) || defaultLocale;
};
const getDecimalSeparator = () => {
  return getDecimalSeparator$1(getLocale());
};
const getDecimalSeparators = () => {
  if (getThousandSeparator() !== '.') {
    return [getDecimalSeparator(), '.'];
  }
  return [getDecimalSeparator()];
};
const getThousandSeparator = () => {
  return getThousandSeparator$1(getLocale());
};
const formatLocaleNumber = (number, minimumFractionDigits) => {
  return formatLocaleNumber$1(getLocale(), number, minimumFractionDigits);
};
const getNegativeSymbol = () => {
  return '-';
};
const parseFloatString = (value) => {
  return value.replace(getDecimalSeparator(), '.');
};
const formatFloatString = (value) => {
  return value.replace('.', getDecimalSeparator());
};

const formatInputValue = (value, decimalPoints = 0) => {
  if (value.charAt(0) === getDecimalSeparator()) {
    value = `0${value}`;
  }
  const num = decimalPoints === 0 ? parseInt(value, 10) : parseFloat(value);
  return lodash_isnan(num) ? '' : formatLocaleNumber(num, decimalPoints);
};

const balNumberInputCss = ".bal-number-input{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0;font-family:var(--bal-font-family-text)}";

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
const NumberInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balInput = createEvent(this, "balInput", 7);
    this.balChange = createEvent(this, "balChange", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balKeyPress = createEvent(this, "balKeyPress", 7);
    this.inputId = `bal-number-input-${numberInputIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.initialValue = 0;
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        const parsedValue = parseFloat(parseFloat(parseFloatString(input.value)).toFixed(this.decimal));
        if (!isNaN(parsedValue)) {
          this.inputValue = parsedValue;
        }
        else {
          if (!this.decimal && input.value !== getNegativeSymbol() && input.value !== getDecimalSeparator()) {
            this.inputValue = undefined;
            input.value = '';
          }
        }
      }
      this.balInput.emit(this.inputValue);
    };
    this.onBlur = (ev) => {
      inputHandleBlur(this, ev);
      const input = getInputTarget(ev);
      if (input && (getDecimalSeparators().indexOf(input.value) >= 0 || input.value === getNegativeSymbol())) {
        this.inputValue = undefined;
        input.value = '';
      }
      if (this.exactNumber && input && (input.value === undefined || input.value === '' || input.value === null)) {
        this.inputValue = 0;
        input.value = '0';
      }
      inputHandleChange(this);
    };
    this.onKeydown = (ev) => {
      if (!lodash_isnil(ev) && !isCtrlOrCommandKey(ev)) {
        if (!this.getAllowedKeys().includes(ev.key)) {
          return stopEventBubbling(ev);
        }
        const value = getNativeInputValue(this);
        if (getDecimalSeparators().indexOf(ev.key) >= 0) {
          if (!this.decimal || value.split('').some(el => getDecimalSeparators().includes(el))) {
            return stopEventBubbling(ev);
          }
        }
        if (ev.key === getNegativeSymbol()) {
          if (value.length !== 0) {
            return stopEventBubbling(ev);
          }
        }
        if ([...NUMBER_KEYS, ...getDecimalSeparators(), getNegativeSymbol()].indexOf(ev.key) >= 0) {
          const newValue = getUpcomingValue(this, ev);
          let separator = '';
          value.split('').some(el => {
            if (getDecimalSeparators().includes(el)) {
              separator = el;
            }
          });
          if (separator !== '') {
            const decimalValue = separator !== '' && newValue.includes(separator) ? newValue === null || newValue === void 0 ? void 0 : newValue.split(separator)[1] : '';
            if (decimalValue && decimalValue.length > this.decimal) {
              return stopEventBubbling(ev);
            }
          }
        }
      }
    };
    this.onFocus = (ev) => inputHandleFocus(this, ev);
    this.onClick = (ev) => inputHandleClick(this, ev);
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.focused = false;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.decimal = 0;
    this.suffix = undefined;
    this.placeholder = undefined;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.exactNumber = false;
    this.max = undefined;
    this.min = undefined;
    this.debounce = 0;
    this.value = undefined;
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
    this.initialValue = this.value || 0;
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
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  getAllowedKeys() {
    return [...NUMBER_KEYS, ...ACTION_KEYS, ...getDecimalSeparators(), getNegativeSymbol()];
  }
  getRawValue() {
    return typeof this.value === 'number' && !isNaN(this.value) ? this.value.toString() : (this.value || '').toString();
  }
  getFormattedValue() {
    const value = this.getRawValue();
    const suffix = this.suffix !== undefined && value !== undefined && value !== '' ? ' ' + this.suffix : '';
    return `${formatInputValue(value, this.decimal)}${suffix}`;
  }
  get pattern() {
    let suffix = this.suffix || '';
    if (suffix !== '') {
      suffix = ` ${suffix}`;
    }
    return `[${getNegativeSymbol()}0-9${getThousandSeparator()}${this.decimal > 0 ? getDecimalSeparator() : ''}${suffix}]*`;
  }
  render() {
    const value = this.focused ? formatFloatString(this.getRawValue()) : this.getFormattedValue();
    if (this.nativeInput && this.nativeInput.value) {
      this.nativeInput.value = value;
    }
    const block = BEM.block('number-input');
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign({}, block.class()) }, h("input", Object.assign({ class: {
        'input': true,
        'is-disabled': this.disabled || this.readonly,
        'is-danger': this.invalid,
      }, "data-testid": "bal-number-input", ref: input => (this.nativeInput = input), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, disabled: this.disabled, placeholder: this.placeholder || '', readonly: this.readonly, required: this.required, pattern: this.pattern, min: this.min, max: this.max, value: value, onInput: e => this.onInput(e), onFocus: e => this.onFocus(e), onBlur: e => this.onBlur(e), onClick: this.onClick, onKeyDown: e => this.onKeydown(e), onKeyPress: e => this.balKeyPress.emit(e) }, this.inheritedAttributes))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
__decorate([
  ListenToConfig()
], NumberInput.prototype, "configChanged", null);
let numberInputIds = 0;
NumberInput.style = {
  css: balNumberInputCss
};

export { NumberInput as bal_number_input };
