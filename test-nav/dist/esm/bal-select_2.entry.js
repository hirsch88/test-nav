import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { l as lodash_isnil } from './index-82aff103.js';
import { f as deepReady, i as isDescendant, d as debounce } from './helpers-08b28736.js';
import { c as isSpaceKey, g as areArraysEqual, m as isArrowDownKey, o as isArrowUpKey, d as isEnterKey, q as isEscapeKey, r as isBackspaceKey } from './index.esm-df73647b.js';
import { r as removeValue, p as preventDefault, l as length, g as getValues, i as includes, s as startsWith, a as addValue, f as findLabelByValue, b as findOptionByLabel, v as validateAfterBlur } from './utils-9cb64c37.js';
import { s as stopEventBubbling } from './form-input-fd2d14ca.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './_commonjsHelpers-ba3f0406.js';

const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    mutationList = mutationList.filter(record => record.target.nodeName === tagName.toUpperCase() || record.target.nodeName === 'bal-select'.toUpperCase());
    if (mutationList.length > 0) {
      onChange(undefined);
    }
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
  return mutation;
};

const balSelectCss = ":root{--bal-select-control-background:var(--bal-color-primary-inverted);--bal-select-control-background-hover:var(--bal-form-field-control-background-hover);--bal-select-control-background-invalid:var(--bal-form-field-control-danger-background);--bal-select-control-background-disabled:var(--bal-form-field-control-disabled-background);--bal-select-control-input-background:var(--bal-color-grey-1);--bal-select-control-native-input-background:var(--bal-color-transparent);--bal-select-control-native-input-background-hover:var(--bal-color-transparent);--bal-select-control-input-inverted-footer-background:var(--bal-color-transparent);--bal-select-control-input-inverted-footer-background-hover:var(--bal-color-transparent);--bal-select-control-input-multiple-background:var(--bal-color-transparent);--bal-select-control-input-multiple-background-read-only-selection:var(--bal-color-transparent);--bal-select-control-input-option-background:var(--bal-color-transparent);--bal-select-control-input-option-background-selected:var(--bal-color-primary-1);--bal-select-control-input-option-background-focused:var(--bal-color-grey-2);--bal-select-control-input-option-background-hover:var(--bal-color-grey-2);--bal-select-control-border-radius:var(--bal-form-field-control-radius);--bal-select-popover-border-color:var(--bal-color-grey-2);--bal-select-control-border-color:var(--bal-form-field-control-border-color);--bal-select-control-border-color-focused:var(--bal-color-primary);--bal-select-control-border-color-hover:var(--bal-form-field-control-border-color-hover);--bal-select-control-border-color-invalid:var(--bal-form-field-control-danger-border-color);--bal-select-control-border-color-disabled:var(--bal-form-field-control-disabled-border-color);--bal-select-control-border-color-focus-within:var(--bal-color-primary);--bal-select-option-border-top-color:var(--bal-color-grey-2);--bal-select-popover-empty-text-color:var(--bal-form-field-control-color);--bal-select-control-text-color:var(--bal-form-field-control-color);--bal-select-control-text-color-focused:var(--bal-color-primary);--bal-select-input-text-color-disabled:var(--bal-form-field-label-disabled-color);--bal-select-control-inverted-footer-native-input-text-color:var(--bal-color-text-white);--bal-select-option-content-label-text-color:var(--bal-form-field-control-color)}bal-select-option{display:none !important}.bal-select{display:block;position:relative;width:100%;-ms-flex:1;flex:1;font-family:var(--bal-font-family-text)}.bal-select__popover{border:.125rem solid var(--bal-select-popover-border-color)}.bal-select__popover__empty{padding:.5rem 1rem;font-family:var(--bal-font-family-text);color:var(--bal-select-popover-empty-text-color)}.bal-select__popover__empty--hidden{display:none}.bal-select__native{position:absolute !important;left:0;top:0;margin:0;padding:0;opacity:0;outline:0;border:none;width:1px;height:1px;clip:rect(1px, 1px, 1px, 1px);overflow:hidden}.bal-select__control{display:-ms-flexbox;display:flex;border-width:.125rem;border-style:solid;border-color:var(--bal-select-control-border-color);border-radius:var(--bal-select-control-border-radius);background:var(--bal-select-control-background);font-size:var(--bal-weight-regular);font-family:var(--bal-font-family-text);color:var(--bal-select-control-text-color);outline:none;-webkit-box-shadow:var(--bal-shadow-none);box-shadow:var(--bal-shadow-none);padding-right:1rem;min-height:3rem}.bal-select__control--focused{border-color:var(--bal-select-control-border-color-focused)}.bal-select__control:not(.bal-select__control--disabled):not(.bal-select__control--invalid):not(.bal-select__control--inverted-footer):hover{border-color:var(--bal-select-control-border-color-hover);background-color:var(--bal-select-control-background-hover)}.bal-select__control:not(.bal-select__control--disabled):not(.bal-select__control--invalid):not(.bal-select__control--inverted-footer):hover .bal-select__control__input{background-color:var(--bal-select-control-input-background)}.bal-select__control--invalid:not(.bal-select__control--disabled){border-color:var(--bal-select-control-border-color-invalid) !important;background:var(--bal-select-control-background-invalid) !important}.bal-select__control:focus-within{border-color:var(--bal-select-control-border-color-focus-within) !important}.bal-select__control--disabled{background-color:var(--bal-select-control-background-disabled) !important;border-color:var(--bal-select-control-border-color-disabled) !important}.bal-select__control--disabled,.bal-select__control--disabled input{cursor:default !important;-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;pointer-events:none !important;color:var(--bal-select-input-text-color-disabled)}.bal-select__control--inverted-footer{border:none;background-color:var(--bal-select-control-input-inverted-footer-background) !important;padding-right:var(--bal-space-none)}.bal-select__control--inverted-footer:hover{background-color:var(--bal-select-control-input-inverted-footer-background-hover) !important}.bal-select__control--inverted-footer .input{color:var(--bal-select-control-inverted-footer-native-input-text-color);background-color:var(--bal-select-control-native-input-background) !important}.bal-select__control--inverted-footer .input:hover{background-color:var(--bal-select-control-native-input-background-hover) !important}.bal-select__control__icon{min-height:100% !important;max-height:100% !important}.bal-select__control__icon--loading{display:none}.bal-select__control__icon--clickable{cursor:pointer}.bal-select__control__selections{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.125rem;max-width:100%;min-width:0;gap:0;padding-left:.375rem}.bal-select__control__selections .bal-tag{margin-left:.25rem;margin-top:.375rem;margin-bottom:.375rem}.bal-select__control__selections .bal-tag+.input{padding-left:.625rem}.bal-select__control__input{border:none !important;outline:none !important;outline-width:0 !important;height:2.75rem !important;-webkit-box-shadow:var(--bal-shadow-none) !important;box-shadow:var(--bal-shadow-none) !important;background:var(--bal-select-control-input-multiple-background);-ms-flex:1;flex:1;min-height:2.75rem !important;padding-left:.25rem !important;padding-right:.625rem !important;text-overflow:ellipsis}.bal-select__control__input:-moz-read-only{-moz-user-select:none !important;user-select:none !important;-webkit-tap-highlight-color:rgba(0,0,0,0)}.bal-select__control__input:read-only{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;-webkit-tap-highlight-color:rgba(0,0,0,0)}.bal-select__control__input:read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:-moz-read-only::selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:read-only::selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:-moz-read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__option{visibility:visible;font-family:var(--bal-font-family-text);background:var(--bal-select-control-input-option-background);border:none;cursor:pointer;outline:none;min-height:3rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0;margin:0;border-top:.125rem solid var(--bal-select-option-border-top-color);text-align:inherit;white-space:nowrap;width:100%}.bal-select__option:first-child{border-top:none}.bal-select__option::-moz-focus-inner{border:none}.bal-select__option--selected{background:var(--bal-select-control-input-option-background-selected)}.bal-select__option--selected .bal-select__option__content__label{font-weight:var(--bal-weight-bold)}.bal-select__option--focused{background:var(--bal-select-control-input-option-background-focused)}.bal-select__option:hover{background:var(--bal-select-control-input-option-background-hover)}.bal-select__option__content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;min-height:3rem;padding:.75rem 1rem;gap:.75rem}.bal-select__option__content__checkbox{margin:0;padding:0}.bal-select__option__content__label{margin:0;padding:0;font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-regular);color:var(--bal-select-option-content-label-text-color);line-height:1.125rem;word-break:break-word;white-space:normal;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const isHuman = true;
const isNotHuman = false;
const Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balInputClick = createEvent(this, "balInputClick", 7);
    this.balInput = createEvent(this, "balInput", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balCancel = createEvent(this, "balCancel", 7);
    this.balKeyPress = createEvent(this, "balKeyPress", 7);
    this.didInit = false;
    this.inputId = `bal-select-${selectIds++}`;
    this.initialValue = [];
    this.removeValue = (value) => {
      if (!this.disabled) {
        this.updateRawValue(removeValue(this.rawValue, value), isHuman);
        if (this.multiple && this.typeahead) {
          this.setFocus();
        }
      }
    };
    this.handleClick = (ev) => {
      if (this.disabled || this.readonly) {
        preventDefault(ev);
      }
    };
    this.handlePopoverChange = (ev) => {
      ev.stopPropagation();
      if (this.isPopoverOpen !== ev.detail) {
        this.isPopoverOpen = ev.detail;
        if (this.isPopoverOpen) {
          this.updateFocus();
        }
        else {
          this.focusIndex = -1;
          if (this.multiple && this.typeahead) {
            this.updateInputValue('');
          }
          this.balBlur.emit();
        }
      }
    };
    this.handleInputBlur = (ev) => {
      preventDefault(ev);
      const target = ev.relatedTarget;
      if (target === null ||
        (target &&
          target.nodeName &&
          (target.nodeName === 'BAL-MODAL' || target.nodeName === 'INPUT' || target.nodeName === 'BUTTON'))) {
        this.validateAfterBlur(isHuman);
      }
      this.hasFocus = false;
    };
    this.handleInputFocus = (ev) => {
      this.balFocus.emit(ev);
      this.hasFocus = true;
    };
    this.handleInputClick = async (ev, isIconClick = false) => {
      var _a, _b, _c, _d;
      stopEventBubbling(ev);
      if (this.isChipClicked(ev)) {
        return;
      }
      if (this.disabled || this.readonly) {
        preventDefault(ev);
      }
      else {
        this.focusIndex = -1;
        this.balInputClick.emit(ev);
        if (this.typeahead) {
          if (this.isPopoverOpen && isIconClick) {
            await ((_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.dismiss());
          }
          else {
            await ((_b = this.popoverElement) === null || _b === void 0 ? void 0 : _b.present());
          }
        }
        else {
          if (this.isPopoverOpen) {
            await ((_c = this.popoverElement) === null || _c === void 0 ? void 0 : _c.dismiss());
          }
          else {
            await ((_d = this.popoverElement) === null || _d === void 0 ? void 0 : _d.present());
          }
        }
      }
    };
    this.handleKeyPress = async (ev) => {
      if (!this.isPopoverOpen && isSpaceKey(ev)) {
        preventDefault(ev);
        await this.open();
      }
      this.balKeyPress.emit(ev);
    };
    this.handleInputChange = (ev) => {
      if (!this.disabled && !this.readonly) {
        this.inputValue = ev.target.value;
      }
    };
    this.handleInput = async (ev) => {
      if (!this.disabled && !this.readonly) {
        this.inputValue = ev.target.value;
        if (!this.isPopoverOpen) {
          this.popoverElement.present();
        }
        this.focusIndex = -1;
        this.updateFocus();
        preventDefault(ev);
        this.balInput.emit(this.inputValue);
      }
    };
    this.handleOptionMouseEnter = (index) => {
      this.focusIndex = index;
    };
    this.hasFocus = false;
    this.inputValue = '';
    this.focusIndex = -1;
    this.isPopoverOpen = false;
    this.options = new Map();
    this.labelToScrollTo = '';
    this.labelToSelectTo = '';
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.filter = 'includes';
    this.balTabindex = 0;
    this.freeSolo = false;
    this.multiple = false;
    this.maxLength = undefined;
    this.noDataLabel = undefined;
    this.autocomplete = 'off';
    this.typeahead = false;
    this.selectionOptional = false;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.inverted = false;
    this.placeholder = undefined;
    this.scrollable = 250;
    this.loading = false;
    this.remote = false;
    this.value = [];
    this.rawValue = [];
  }
  createLogger(log) {
    this.log = log;
  }
  valueWatcher() {
    this.syncRawValue(false);
  }
  updateRawValue(newValue, isHuman = true) {
    if (!areArraysEqual(newValue, this.rawValue || [])) {
      this.rawValue = [...newValue];
      this.syncNativeInput();
      if (this.didInit && isHuman === true) {
        if (this.multiple) {
          if (lodash_isnil(this.rawValue)) {
            this.emitChangeEvent([]);
          }
          else {
            this.emitChangeEvent([...this.rawValue]);
          }
        }
        else {
          if (lodash_isnil(this.rawValue) || length(this.rawValue) === 0) {
            this.emitChangeEvent(undefined);
          }
          else {
            this.emitChangeEvent(this.rawValue[0]);
          }
        }
      }
    }
  }
  emitChangeEvent(detail) {
    this.balChange.emit(detail);
  }
  connectedCallback() {
    const debounceUpdateOptions = debounce(() => this.updateOptions(), 0);
    this.initialValue = this.value;
    debounceUpdateOptions();
    this.mutationO = watchForOptions(this.el, 'bal-select-option', () => {
      debounceUpdateOptions();
    });
  }
  componentWillLoad() {
    this.waitForOptionsAndThenUpdateRawValues();
    this.isInsideOfFooter();
    if (!lodash_isnil(this.rawValue) && this.options.size > 0 && length(this.rawValue) === 1) {
      const firstOption = this.options.get(this.rawValue[0]);
      if (!lodash_isnil(firstOption)) {
        this.inputValue = firstOption.label;
      }
    }
  }
  componentDidLoad() {
    this.syncRawValue(false);
    if (!this.multiple) {
      this.inputElement.value = this.inputValue;
    }
    this.didInit = true;
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  listenOnClick(ev) {
    if (this.disabled && ev.target && ev.target === this.el) {
      preventDefault(ev);
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      if (this.resetHandlerTimer) {
        clearTimeout(this.resetHandlerTimer);
      }
      this.resetHandlerTimer = setTimeout(() => {
        this.value = this.initialValue;
        this.syncRawValue(false);
        this.syncNativeInput();
        if (this.nativeSelectEl) {
          const options = Array.from(this.nativeSelectEl.options);
          options.forEach(o => (o.selected = true));
        }
      }, 0);
    }
  }
  async handleKeyDown(ev) {
    if (this.isPopoverOpen) {
      if (isArrowDownKey(ev) || isArrowUpKey(ev)) {
        preventDefault(ev);
        this.navigateWithArrowKey(ev);
        this.updateFocus();
      }
      if (isEnterKey(ev)) {
        preventDefault(ev);
        this.selectedFocusedOption();
      }
      if (isEscapeKey(ev)) {
        this.cancel();
      }
      if (isBackspaceKey(ev) && this.typeahead && this.multiple) {
        if (this.inputElement.value === '' && length(this.rawValue) > 0) {
          const valuesArray = getValues(this.rawValue);
          this.removeValue(valuesArray[length(this.rawValue) - 1]);
        }
      }
      if (!this.typeahead && ev.key.length === 1) {
        this.focusOptionByLabel(ev.key);
      }
      if (isSpaceKey(ev) && !this.typeahead) {
        preventDefault(ev);
      }
    }
    else {
      if (this.hasFocus) {
        if (isArrowDownKey(ev) || isArrowUpKey(ev)) {
          preventDefault(ev);
          await this.open();
        }
        if (!this.typeahead && ev.key.length === 1) {
          this.selectOptionByLabel(ev.key);
        }
      }
    }
  }
  async setFocus() {
    clearTimeout(this.setFocusTimer);
    this.setFocusTimer = setTimeout(() => {
      if (this.inputElement && !this.disabled) {
        this.inputElement.focus();
      }
    });
  }
  async getValue() {
    return this.rawValue;
  }
  async clear() {
    this.focusIndex = -1;
    if (this.inputElement) {
      this.updateInputValue('');
      this.updateRawValue([], isHuman);
      this.value = this.multiple ? [] : '';
    }
  }
  async open() {
    if (!this.disabled && !this.readonly && !lodash_isnil(this.popoverElement)) {
      await this.popoverElement.present();
    }
  }
  async close() {
    if (!this.disabled && !this.readonly && !lodash_isnil(this.popoverElement)) {
      this.blurSelect();
    }
  }
  async cancel() {
    this.labelToScrollTo = '';
    this.close();
    this.scrollTo(0);
    this.balCancel.emit();
  }
  async select(value) {
    const option = this.options.get(value);
    if (!lodash_isnil(option)) {
      this.optionSelected(option);
    }
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  async waitForOptionsAndThenUpdateRawValues() {
    clearTimeout(this.waitForOptionsAndThenUpdateRawValuesTimer);
    await deepReady(this.el);
    const hasOptions = this.options.size > 0;
    if (hasOptions) {
      if (!this.remote) {
        this.syncRawValue(isNotHuman);
      }
    }
    else {
      this.waitForOptionsAndThenUpdateRawValuesTimer = setTimeout(() => this.waitForOptionsAndThenUpdateRawValues(), 10);
    }
  }
  async updateOptions() {
    const optionElements = this.getChildOpts();
    const options = new Map();
    for (let index = 0; index < optionElements.length; index++) {
      const element = optionElements[index];
      options.set(element.value, {
        value: element.value,
        label: element.label,
        disabled: element.disabled,
        id: element.for,
        textContent: element.textContent,
        innerHTML: element.innerHTML,
      });
    }
    if (!this.selectionOptional && Array.isArray(this.rawValue)) {
      for (let index = 0; index < this.rawValue.length; index++) {
        const val = this.rawValue[index];
        if (!options.has(val)) {
          const newRawValue = removeValue(this.rawValue, val);
          this.updateRawValue(newRawValue, isNotHuman);
        }
      }
    }
    this.options = new Map(options);
    if (!this.typeahead) {
      await this.syncNativeInput();
    }
    if (this.didInit && !this.remote) {
      this.validateAfterBlur();
    }
  }
  get optionArray() {
    const options = Array.from(this.options, ([_, value]) => value);
    if (!this.typeahead || this.remote) {
      return options;
    }
    return options.filter(option => this.filter === 'includes'
      ? includes(option.textContent, this.inputValue)
      : startsWith(option.textContent, this.inputValue));
  }
  hasOptions() {
    return this.optionArray.length > 0;
  }
  get inputPlaceholder() {
    if (this.multiple) {
      if (length(this.rawValue) < 1) {
        return this.placeholder;
      }
      return undefined;
    }
    else {
      if (!lodash_isnil(this.rawValue) && length(this.rawValue) > 0) {
        return undefined;
      }
    }
    return this.placeholder;
  }
  getChildOpts() {
    return Array.from(this.el.querySelectorAll('bal-select-option'));
  }
  getPopoverContent() {
    return this.popoverElement.querySelector('.bal-popover__content__inner');
  }
  updateFocus() {
    if (this.focusIndex < -1) {
      this.focusIndex = -1;
    }
    const visibleOptions = this.optionArray;
    if (visibleOptions.length > 0) {
      if (visibleOptions.length <= this.focusIndex) {
        this.focusIndex = visibleOptions.length - 1;
      }
      const option = visibleOptions[this.focusIndex];
      if (option && option.id) {
        const focusedElement = this.el.querySelector(`button#${option.id}`);
        if (focusedElement) {
          clearTimeout(this.updateFocusTimer);
          this.updateFocusTimer = setTimeout(() => {
            this.scrollToFocusedOption(focusedElement);
          }, 0);
        }
      }
    }
    else {
      this.focusIndex = -1;
    }
  }
  scrollToFocusedOption(focusedElement) {
    if (focusedElement && this.popoverElement) {
      const popoverContentElement = this.getPopoverContent();
      if (popoverContentElement) {
        const topOfOption = focusedElement.offsetTop;
        const topOfPopoverContent = popoverContentElement.scrollTop;
        if (topOfOption < topOfPopoverContent) {
          popoverContentElement.scrollTop = topOfOption;
        }
        const bottomOfOption = focusedElement.offsetTop + focusedElement.clientHeight;
        const bottomOfPopoverContent = popoverContentElement.scrollTop + popoverContentElement.clientHeight;
        if (bottomOfOption > bottomOfPopoverContent) {
          popoverContentElement.scrollTop = popoverContentElement.scrollTop + focusedElement.clientHeight;
        }
      }
    }
  }
  scrollTo(scrollTop) {
    const popoverContentElement = this.getPopoverContent();
    if (popoverContentElement) {
      popoverContentElement.scrollTop = scrollTop;
    }
  }
  selectedFocusedOption() {
    const visibleOptions = this.optionArray;
    if (visibleOptions.length > this.focusIndex) {
      const focusedOption = visibleOptions[this.focusIndex];
      if (focusedOption) {
        this.optionSelected(focusedOption);
      }
    }
  }
  navigateWithArrowKey(ev) {
    if (isArrowDownKey(ev)) {
      this.focusIndex = this.focusIndex + 1;
    }
    else {
      if (isArrowUpKey(ev)) {
        this.focusIndex = this.focusIndex - 1;
      }
    }
  }
  focusOptionByLabel(key) {
    this.labelToScrollTo = this.labelToScrollTo + key;
    clearTimeout(this.clearScrollToValue);
    this.clearScrollToValue = setTimeout(() => {
      this.scrollToLabel(this.labelToScrollTo);
    }, 600);
  }
  selectOptionByLabel(key) {
    this.labelToSelectTo = this.labelToSelectTo + key;
    clearTimeout(this.clearSelectValue);
    this.clearSelectValue = setTimeout(() => {
      this.selectLabel(this.labelToSelectTo);
      this.labelToSelectTo = '';
    }, 600);
  }
  async selectLabel(label) {
    if (label !== ' ') {
      const option = this.optionArray.find(o => startsWith(o.label || '', label));
      if (!lodash_isnil(option) && option.id) {
        const optionElement = this.el.querySelector(`button#${option.id}`);
        if (!lodash_isnil(optionElement)) {
          const index = this.optionArray.indexOf(option);
          this.focusIndex = index;
          this.select(option.value);
        }
      }
      this.labelToScrollTo = '';
    }
  }
  async scrollToLabel(label) {
    if (label !== ' ') {
      const option = this.optionArray.find(o => startsWith(o.label || '', label));
      if (!lodash_isnil(option) && option.id) {
        const optionElement = this.el.querySelector(`button#${option.id}`);
        if (!lodash_isnil(optionElement)) {
          const index = this.optionArray.indexOf(option);
          this.focusIndex = index;
          this.scrollTo(optionElement.offsetTop);
        }
      }
      this.labelToScrollTo = '';
    }
  }
  syncRawValue(isHuman = true) {
    let newValue = [];
    if (!lodash_isnil(this.value) && this.value !== '') {
      if (Array.isArray(this.value)) {
        newValue = [...this.value.filter(v => !lodash_isnil(v))];
      }
      else {
        if (this.value.split('').includes(',')) {
          newValue = [
            ...this.value
              .split(',')
              .filter(v => v)
              .map(v => v.trim()),
          ];
        }
        else {
          newValue = [this.value];
        }
      }
    }
    this.updateRawValue(newValue, isHuman);
  }
  blurSelect() {
    this.popoverElement.dismiss();
  }
  optionSelected(selectedOption) {
    const valuesArray = getValues(this.rawValue);
    const isAlreadySelected = valuesArray.some(v => v === selectedOption.value);
    this.updateValue(selectedOption.value, !isAlreadySelected);
    if (!this.multiple) {
      this.blurSelect();
    }
    else {
      if (this.typeahead) {
        this.setFocus();
      }
    }
  }
  updateValue(newValue, isSelected = true) {
    if (this.multiple) {
      if (isSelected) {
        this.updateRawValue(addValue(this.rawValue, newValue, this.multiple), isHuman);
      }
      else {
        this.updateRawValue(removeValue(this.rawValue, newValue), isHuman);
      }
    }
    else {
      this.updateRawValue(addValue(this.rawValue, newValue, this.multiple), isHuman);
      if (this.rawValue && this.rawValue.length > 0) {
        this.updateInputValue(findLabelByValue(this.options, this.rawValue[0]));
      }
    }
  }
  validateAfterBlur(isHuman = isNotHuman) {
    let newRawValue = this.rawValue;
    if (this.didInit && !this.multiple) {
      if (this.typeahead && (this.selectionOptional || this.remote)) {
        const typedOption = findOptionByLabel(this.options, this.inputElement.value);
        if (typedOption) {
          newRawValue = [typedOption.value];
        }
        else {
          newRawValue = [this.inputElement.value];
        }
      }
      else {
        newRawValue = validateAfterBlur(this.rawValue, this.options, this.inputElement.value);
      }
      this.updateRawValue(newRawValue, isHuman);
    }
  }
  syncNativeInput() {
    if (!this.multiple) {
      if (length(this.rawValue) > 0) {
        const valuesArray = getValues(this.rawValue);
        let label = findLabelByValue(this.options, valuesArray[0]);
        if (!this.multiple && this.typeahead && this.selectionOptional && label === '') {
          label = valuesArray.join(', ');
        }
        return this.updateInputValue(label);
      }
    }
    return Promise.resolve();
  }
  updateInputValue(value) {
    return new Promise(resolve => {
      if (this.updateInputValueTimer) {
        clearTimeout(this.updateInputValueTimer);
      }
      this.updateInputValueTimer = setTimeout(() => {
        if (!lodash_isnil(this.inputElement)) {
          this.inputElement.value = value;
          this.inputValue = value;
          resolve();
        }
      }, 0);
    });
  }
  isChipClicked(ev) {
    let isChipClicked = false;
    if (this.multiple) {
      const chips = this.selectionEl.querySelectorAll('bal-tag');
      const target = ev.target;
      chips.forEach(chip => {
        const isChip = isDescendant(chip, target) || chip === target;
        if (isChip) {
          isChipClicked = isChip;
        }
      });
    }
    return isChipClicked;
  }
  isInsideOfFooter() {
    this.inverted = this.el.closest('bal-footer') !== null;
  }
  render() {
    var _a;
    const Chip = (props) => (h("bal-tag", { size: "", closable: !this.disabled, disabled: this.disabled, invalid: this.invalid, tabindex: -1, onBalCloseClick: _ => this.removeValue(props.value), "data-testid": "bal-select-chip" }, findLabelByValue(this.options, props.value) || props.value));
    const valuesArray = getValues(this.rawValue);
    const block = BEM.block('select');
    const nativeEl = block.element('native');
    const controlEl = block.element('control');
    const controlIconEl = controlEl.element('icon');
    const controlSelectionsEl = controlEl.element('selections');
    const controlInputEl = controlEl.element('input');
    const popoverContentEl = block.element('popover');
    const popoverContentEmptyEl = popoverContentEl.element('empty');
    const optionEl = block.element('option');
    const optionContentEl = optionEl.element('content');
    const optionContentCheckboxEl = optionContentEl.element('checkbox');
    const optionContentLabelEl = optionContentEl.element('label');
    return (h(Host, { role: "listbox", onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, "data-value": (_a = this.rawValue) === null || _a === void 0 ? void 0 : _a.map(v => findLabelByValue(this.options, v)).join(','), class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('disabled').class(this.disabled || this.readonly)), block.modifier('inverted').class(this.inverted)), block.modifier('inverted-footer').class(this.inverted)) }, h("select", { class: Object.assign({}, nativeEl.class()), name: this.name, multiple: this.multiple, required: this.required, tabindex: -1, ref: el => (this.nativeSelectEl = el) }, valuesArray.map((value) => (h("option", { value: value, selected: true }, value)))), h("bal-popover", { onBalChange: this.handlePopoverChange, ref: el => (this.popoverElement = el) }, h("div", { "bal-popover-trigger": true, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, controlEl.class()), controlEl.modifier('invalid').class(this.invalid)), controlEl.modifier('disabled').class(this.disabled || this.readonly)), controlEl.modifier('focused').class(this.isPopoverOpen)), controlEl.modifier('inverted-footer').class(this.inverted)) }, h("div", { class: Object.assign(Object.assign({}, controlSelectionsEl.class()), controlSelectionsEl
        .modifier('clickable')
        .class(!this.isPopoverOpen && !this.disabled && !this.readonly)), onClick: this.handleInputClick, ref: el => (this.selectionEl = el) }, valuesArray
      .filter(_ => this.multiple)
      .map((value) => (h(Chip, { value: value }))), h("input", { type: "text", class: Object.assign(Object.assign({}, controlInputEl.class()), { 'input': true, 'is-inverted': this.inverted, 'is-danger': this.invalid, 'is-disabled': this.disabled || this.readonly, 'is-clickable': !this.isPopoverOpen && !this.disabled && !this.readonly, 'data-test-select-input': true }), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, "data-testid": "bal-select-input", autocomplete: this.autocomplete, placeholder: this.inputPlaceholder, readonly: !this.typeahead || this.disabled || this.readonly, contentEditable: this.typeahead, disabled: this.disabled, maxLength: this.maxLength, tabindex: this.balTabindex, onInput: this.handleInput, onClick: this.handleInputClick, onChange: this.handleInputChange, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onKeyPress: this.handleKeyPress, ref: el => (this.inputElement = el) })), !this.freeSolo && !this.loading ? (h("bal-icon", { class: Object.assign(Object.assign(Object.assign({}, controlIconEl.class()), controlIconEl.modifier('loading').class(this.loading)), controlIconEl.modifier('clickable').class(!this.disabled && !this.readonly)), name: !this.inverted ? 'caret-down' : 'caret-up', color: this.disabled || this.readonly
        ? 'grey-light'
        : this.inverted
          ? 'white'
          : this.invalid
            ? 'danger'
            : 'primary', turn: this.isPopoverOpen, onClick: ev => this.handleInputClick(ev, true), size: !this.inverted ? '' : 'x-small' })) : ('')), h("bal-popover-content", { class: Object.assign({}, popoverContentEl.class()), scrollable: this.scrollable, spaceless: true, expanded: true }, this.optionArray.map((option, index) => (h("button", { type: "button", role: "option", id: option.id, "data-value": option.value, "data-label": option.label, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, optionEl.class()), optionEl
        .modifier('selected')
        .class(valuesArray.includes(option.value) && !(this.typeahead && !this.multiple))), optionEl.modifier('focused').class(this.focusIndex === index)), optionEl.modifier('checkbox').class(this.multiple)), optionEl.modifier('disabled').class(option.disabled === true)), "data-testid": "bal-select-option", disabled: option.disabled, tabIndex: -1, onMouseEnter: () => this.handleOptionMouseEnter(index), onClick: () => this.optionSelected(option) }, h("div", { class: Object.assign({}, optionContentEl.class()) }, h("span", { class: Object.assign({}, optionContentCheckboxEl.class()), style: { display: this.multiple ? 'flex' : 'none' } }, h("bal-checkbox", { checked: valuesArray.includes(option.value), tabindex: -1, hidden: true, flat: true, onBalChange: preventDefault })), h("span", { class: Object.assign({}, optionContentLabelEl.class()), innerHTML: option.innerHTML }))))), h("div", { class: Object.assign(Object.assign({}, popoverContentEmptyEl.class()), popoverContentEmptyEl
        .modifier('hidden')
        .class(this.noDataLabel === undefined || this.hasOptions() || !this.typeahead || this.selectionOptional)) }, this.noDataLabel)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueWatcher"]
  }; }
};
__decorate$1([
  Logger('bal-select')
], Select.prototype, "createLogger", null);
let selectIds = 0;
Select.style = {
  css: balSelectCss
};

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
const SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = undefined;
    this.disabled = false;
    this.value = undefined;
    this.for = `bal-selopt-${selectOptionIds++}`;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    return (h(Host, { style: { display: 'none' } }, h("slot", null)));
  }
};
__decorate([
  Logger('bal-select-option')
], SelectOption.prototype, "createLogger", null);
let selectOptionIds = 0;

export { Select as bal_select, SelectOption as bal_select_option };
