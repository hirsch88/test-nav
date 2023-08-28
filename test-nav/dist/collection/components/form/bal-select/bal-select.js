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
import isNil from 'lodash.isnil';
import { debounce, deepReady, isDescendant } from '../../../utils/helpers';
import { areArraysEqual, isArrowDownKey, isArrowUpKey, isEnterKey, isEscapeKey, isSpaceKey, isBackspaceKey, } from '@baloise/web-app-utils';
import { addValue, findLabelByValue, findOptionByLabel, getValues, includes, length, preventDefault, removeValue, startsWith, validateAfterBlur, } from './utils/utils';
import { watchForOptions } from './utils/watch-options';
import { stopEventBubbling } from '../../../utils/form-input';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { defaultBalAriaForm } from '../../../utils/form';
const isHuman = true;
const isNotHuman = false;
export class Select {
  constructor() {
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
          if (isNil(this.rawValue)) {
            this.emitChangeEvent([]);
          }
          else {
            this.emitChangeEvent([...this.rawValue]);
          }
        }
        else {
          if (isNil(this.rawValue) || length(this.rawValue) === 0) {
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
    if (!isNil(this.rawValue) && this.options.size > 0 && length(this.rawValue) === 1) {
      const firstOption = this.options.get(this.rawValue[0]);
      if (!isNil(firstOption)) {
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
    if (!this.disabled && !this.readonly && !isNil(this.popoverElement)) {
      await this.popoverElement.present();
    }
  }
  async close() {
    if (!this.disabled && !this.readonly && !isNil(this.popoverElement)) {
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
    if (!isNil(option)) {
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
      if (!isNil(this.rawValue) && length(this.rawValue) > 0) {
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
      if (!isNil(option) && option.id) {
        const optionElement = this.el.querySelector(`button#${option.id}`);
        if (!isNil(optionElement)) {
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
      if (!isNil(option) && option.id) {
        const optionElement = this.el.querySelector(`button#${option.id}`);
        if (!isNil(optionElement)) {
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
    if (!isNil(this.value) && this.value !== '') {
      if (Array.isArray(this.value)) {
        newValue = [...this.value.filter(v => !isNil(v))];
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
        if (!isNil(this.inputElement)) {
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
  static get is() { return "bal-select"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-select.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-select.css"]
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
      "filter": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalSelectFilter",
          "resolved": "\"includes\" | \"starts-with\"",
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "filter",
        "reflect": false,
        "defaultValue": "'includes'"
      },
      "balTabindex": {
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
          "text": "The tabindex of the control."
        },
        "attribute": "bal-tabindex",
        "reflect": false,
        "defaultValue": "0"
      },
      "freeSolo": {
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
          "text": "If `true` there will be on trigger icon visible"
        },
        "attribute": "free-solo",
        "reflect": false,
        "defaultValue": "false"
      },
      "multiple": {
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
          "text": "If `true` multiple option can be selected"
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
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
      "noDataLabel": {
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
          "text": "This label is shown if typeahead is active and all the options are filtered out."
        },
        "attribute": "no-data-label",
        "reflect": false
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
      "typeahead": {
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
          "text": "If `true` the user can search by typing into the input field."
        },
        "attribute": "typeahead",
        "reflect": false,
        "defaultValue": "false"
      },
      "selectionOptional": {
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
          "text": "If `true` the options are a proposal and the user can also create his\nown value. Can only be used with the typeahead property."
        },
        "attribute": "selection-optional",
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
      "inverted": {
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
              "text": "Set this to `true` when the component is placed on a dark background.\nSet this to `true` when the component is placed on a dark background."
            }],
          "text": ""
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "The text to display when the select is empty."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "scrollable": {
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
          "text": "Defines the height of the popover list."
        },
        "attribute": "scrollable",
        "reflect": false,
        "defaultValue": "250"
      },
      "loading": {
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
          "text": "Defines if the select is in a loading state."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "remote": {
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
          "text": "If `true` the filtering is done outside the component."
        },
        "attribute": "remote",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[] | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Selected option values. Could also be passed as a string, which gets transformed."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "[]"
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {},
      "inputValue": {},
      "focusIndex": {},
      "isPopoverOpen": {},
      "options": {},
      "labelToScrollTo": {},
      "labelToSelectTo": {},
      "ariaForm": {},
      "rawValue": {}
    };
  }
  static get events() {
    return [{
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a option got selected."
        },
        "complexType": {
          "original": "BalEvents.BalSelectChangeDetail",
          "resolved": "string | string[] | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balInputClick",
        "name": "balInputClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input got clicked."
        },
        "complexType": {
          "original": "BalEvents.BalSelectInputClickDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
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
          "original": "BalEvents.BalSelectInputDetail",
          "resolved": "string",
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
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalSelectBlurDetail",
          "resolved": "FocusEvent",
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
          "original": "BalEvents.BalSelectFocusDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balCancel",
        "name": "balCancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the user cancels the input."
        },
        "complexType": {
          "original": "BalEvents.BalSelectCancelDetail",
          "resolved": "KeyboardEvent",
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
          "text": "Emitted when the input has focus and key from the keyboard go hit."
        },
        "complexType": {
          "original": "BalEvents.BalSelectKeyPressDetail",
          "resolved": "KeyboardEvent",
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
          "text": "Sets the focus on the input element",
          "tags": []
        }
      },
      "getValue": {
        "complexType": {
          "signature": "() => Promise<string[] | undefined>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string[] | undefined>"
        },
        "docs": {
          "text": "Sets the focus on the input element",
          "tags": []
        }
      },
      "clear": {
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
          "text": "Sets the value to `[]`, the input value to \u00B4''\u00B4 and the focus index to \u00B40\u00B4.",
          "tags": []
        }
      },
      "open": {
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
          "text": "Opens the popover",
          "tags": []
        }
      },
      "close": {
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
          "text": "Closes the popover",
          "tags": []
        }
      },
      "cancel": {
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
          "text": "Cancel the popover",
          "tags": []
        }
      },
      "select": {
        "complexType": {
          "signature": "(value: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Select option by passed value",
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
        "propName": "value",
        "methodName": "valueWatcher"
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
      }, {
        "name": "keydown",
        "method": "handleKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-select')
], Select.prototype, "createLogger", null);
let selectIds = 0;
