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
import { Host, h, } from '@stencil/core';
import { addDays, subDays, isBefore, isAfter, getDate, getYear, getMonth, addYears, subYears, startOfWeek, isSameDay, isWithinInterval, isSameWeek, isSameMonth, lastDayOfMonth, } from 'date-fns';
import { debounceEvent } from '../../../utils/helpers';
import { inheritAttributes } from '../../../utils/attributes';
import { isSpaceKey, parse, format, isValidIsoString, now, formatDateString, isEnterKey, dateSeparator, } from '@baloise/web-app-utils';
import isNil from 'lodash.isnil';
import { ACTION_KEYS, isCtrlOrCommandKey, NUMBER_KEYS } from '../../../utils/constants/keys.constant';
import { i18nBalDatepicker } from './bal-datepicker.i18n';
import { defaultConfig, ListenToConfig, useBalConfig, defaultLocale, } from '../../../utils/config';
import { getInputTarget, inputHandleFocus, inputHandleHostClick, inputListenOnClick, inputSetBlur, inputSetFocus, stopEventBubbling, } from '../../../utils/form-input';
import { preventDefault } from '../bal-select/utils/utils';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { ListenToBreakpoints, balBreakpoints } from '../../../utils/breakpoints';
import { defaultBalAriaForm } from '../../../utils/form';
export class Datepicker {
  constructor() {
    this.inputId = `bal-dp-${datepickerIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.onIconClick = (ev) => {
      if (!this.disabled && !this.readonly) {
        this.popoverElement.toggle();
      }
      stopEventBubbling(ev);
      this.balIconClick.emit(ev);
    };
    this.onInputClick = (ev) => {
      if (!this.triggerIcon && !this.disabled && !this.readonly) {
        this.popoverElement.toggle();
      }
      stopEventBubbling(ev);
      if (!this.triggerIcon) {
        this.balInputClick.emit(ev);
      }
    };
    this.onPopoverChange = (ev) => {
      stopEventBubbling(ev);
      if (this.isPopoverOpen !== ev.detail) {
        this.isPopoverOpen = ev.detail;
        if (!this.isPopoverOpen) {
          this.balBlur.emit();
        }
      }
    };
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
        if (input.value) {
          this.nativeInput.value = this.formatDate(this.inputValue);
        }
        if (this.inputValue && this.inputValue.length >= 6) {
          const date = parse(this.inputValue, this.getLocale());
          const dateString = formatDateString(date);
          if (isValidIsoString(dateString)) {
            this.selectedDate = dateString;
            this.updatePointerDates();
          }
        }
      }
      this.balInput.emit(this.inputValue);
    };
    this.onInputChange = (ev) => {
      const inputValue = ev.target.value;
      const date = parse(inputValue, this.getLocale());
      const dateString = formatDateString(date);
      const formattedValue = format(this.getLocale(), date);
      this.nativeInput.value = formattedValue;
      this.updateValue(dateString);
      this.updatePointerDates();
    };
    this.onClickDateCell = (cell) => {
      if (!cell.isDisabled) {
        this.select(cell.dateString);
      }
    };
    this.onInputKeyUp = (ev) => {
      if (isSpaceKey(ev) && !this.triggerIcon) {
        if (this.isPopoverOpen) {
          this.close();
        }
        else {
          this.open();
        }
      }
      if (isEnterKey(ev) && !this.triggerIcon) {
        const date = parse(this.nativeInput.value, this.getLocale());
        const dateString = formatDateString(date);
        if (this.isPopoverOpen) {
          if (this.value === dateString) {
            this.close();
          }
        }
      }
    };
    this.onInputKeyDown = (ev) => {
      const separator = dateSeparator(this.getLocale());
      const allowedKeys = [...NUMBER_KEYS, separator, ...ACTION_KEYS];
      if (!isCtrlOrCommandKey(ev) && allowedKeys.indexOf(ev.key) < 0) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      if (ev.key === 'Tab') {
        this.close();
      }
    };
    this.onMonthSelect = (ev) => {
      const inputValue = ev.target.value;
      this.pointerDate = Object.assign(Object.assign({}, this.pointerDate), { day: 1, month: parseInt(inputValue, 10) });
    };
    this.onYearSelect = (ev) => {
      const inputValue = ev.target.value;
      const yearValue = parseInt(inputValue, 10);
      let month = undefined;
      if (this.defaultDate) {
        const defaultDate = parse(this.defaultDate);
        if (this.max) {
          const maxDate = parse(this.max);
          if (defaultDate.getMonth() > maxDate.getMonth()) {
            month = maxDate.getMonth();
          }
        }
        if (this.min) {
          const minDate = parse(this.min);
          if (defaultDate.getMonth() < minDate.getMonth()) {
            month = minDate.getMonth();
          }
        }
      }
      this.pointerDate = {
        day: 1,
        year: yearValue,
        month: month !== undefined ? month : this.pointerDate.month,
      };
    };
    this.onInputFocus = (ev) => inputHandleFocus(this, ev);
    this.onInputBlur = (ev) => {
      preventDefault(ev);
      this.focused = false;
    };
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.isMobile = balBreakpoints.isMobile;
    this.focused = false;
    this.isPopoverOpen = false;
    this.selectedDate = '';
    this.pointerDate = {
      year: getYear(now()),
      month: getMonth(now()),
      day: getDate(now()),
    };
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.loading = false;
    this.placeholder = undefined;
    this.min = undefined;
    this.max = undefined;
    this.closeOnSelect = true;
    this.triggerIcon = false;
    this.minYearProp = undefined;
    this.maxYearProp = undefined;
    this.debounce = 0;
    this.defaultDate = undefined;
    this.value = undefined;
    this.allowedDates = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  valueChanged() {
    this.selectedDate = this.value;
    this.updatePointerDates();
  }
  listenOnClick(ev) {
    inputListenOnClick(this, ev);
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      if (this.resetHandlerTimer) {
        clearTimeout(this.resetHandlerTimer);
      }
      this.resetHandlerTimer = setTimeout(() => {
        if (this.initialValue) {
          this.nativeInput.value = format(this.getLocale(), parse(this.initialValue));
        }
        else {
          this.nativeInput.value = '';
        }
        this.selectedDate = this.initialValue;
        this.updateValue(this.initialValue, false);
        this.updatePointerDates();
      }, 0);
    }
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value;
  }
  componentDidLoad() {
    this.inputValue = this.value;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
    this.selectedDate = this.value;
    this.updatePointerDates();
    this.updateValue(this.value, false);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  async open() {
    if (!this.disabled && this.popoverElement) {
      this.popoverElement.present();
    }
  }
  async close() {
    if (!this.disabled && this.popoverElement) {
      this.popoverElement.dismiss();
    }
  }
  async select(dateString) {
    var _a;
    this.nativeInput.value = format(this.getLocale(), parse(dateString));
    this.updateValue(dateString);
    this.updatePointerDates();
    if (this.closeOnSelect) {
      await ((_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.toggle());
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
  updatePointerDates() {
    let date = now();
    date.setDate(1);
    if (this.selectedDate) {
      date = parse(this.selectedDate);
    }
    else {
      if (this.defaultDate) {
        date = parse(this.defaultDate);
      }
    }
    if (this.min) {
      const minDate = parse(this.min);
      if (minDate && date < minDate) {
        date = minDate;
      }
    }
    if (this.max) {
      const maxDate = parse(this.max);
      if (maxDate && date > maxDate) {
        date = maxDate;
      }
    }
    this.pointerDate = {
      year: getYear(date),
      month: getMonth(date),
      day: getDate(date),
    };
  }
  updateValue(dateString, isHuman = true) {
    if (!isValidIsoString(dateString)) {
      this.selectedDate = undefined;
      this.value = undefined;
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    }
    if (this.value !== dateString) {
      this.value = dateString;
      if (isHuman && (this.isDateInRange(parse(this.value)) || this.value === '')) {
        this.balChange.emit(this.value);
      }
    }
  }
  get minYear() {
    if (this.min) {
      return parseInt(this.min.substring(0, 4), 10);
    }
    return this.minYearProp ? this.minYearProp : getYear(subYears(now(), 100));
  }
  get maxYear() {
    if (this.max) {
      return parseInt(this.max.substring(0, 4), 10);
    }
    return this.maxYearProp ? this.maxYearProp : getYear(addYears(now(), 100));
  }
  get years() {
    let years = Array.from({ length: this.maxYear - this.minYear + 1 }, (_, index) => this.minYear + index);
    if (this.min && this.pointerDate.month === getMonth(parse(this.min))) {
      const minYear = getYear(parse(this.min));
      years = years.filter(y => y >= minYear);
    }
    if (this.max && this.pointerDate.month === getMonth(parse(this.max))) {
      const maxYear = getYear(parse(this.max));
      years = years.filter(y => y <= maxYear);
    }
    return years;
  }
  get months() {
    const monthNames = i18nBalDatepicker[this.language].monthsShort;
    let months = monthNames.map((name, index) => ({ name, index }));
    if (this.min && this.pointerDate.year === getYear(parse(this.min))) {
      const minMonth = parseInt(this.min.substring(5, 7), 10) - 1;
      months = months.filter(month => month.index >= minMonth);
    }
    if (this.max && this.pointerDate.year === getYear(parse(this.max))) {
      const maxMonth = parseInt(this.max.substring(5, 7), 10) - 1;
      months = months.filter(month => month.index <= maxMonth);
    }
    return months;
  }
  get weekDays() {
    const translations = [...i18nBalDatepicker[this.language].weekdaysMin];
    translations.push(translations.shift() || '');
    return translations;
  }
  get firstDateOfBox() {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1);
    return startOfWeek(date, { weekStartsOn: 1 });
  }
  getLocale() {
    const config = useBalConfig();
    return (config && config.locale) || defaultLocale;
  }
  get calendarGrid() {
    const weekDatePointer = this.firstDateOfBox;
    const dayDatePointer = this.firstDateOfBox;
    let calendar = [];
    do {
      let row = [];
      do {
        row = [
          ...row,
          {
            date: new Date(dayDatePointer),
            display: format(this.getLocale(), dayDatePointer),
            dateString: formatDateString(dayDatePointer),
            label: getDate(dayDatePointer).toString(),
            isToday: isSameDay(dayDatePointer, now()),
            isSelected: parse(this.selectedDate) !== undefined &&
              isSameDay(dayDatePointer, parse(this.selectedDate)),
            isDisabled: !this.getAllowedDates(dayDatePointer) || !this.isDateInRange(dayDatePointer),
            isOutdated: this.pointerDate.month !== dayDatePointer.getMonth() || !this.isDateInRange(dayDatePointer),
          },
        ];
        dayDatePointer.setDate(dayDatePointer.getDate() + 1);
      } while (isSameWeek(dayDatePointer, weekDatePointer, { weekStartsOn: 1 }));
      calendar = [...calendar, row];
      weekDatePointer.setDate(weekDatePointer.getDate() + 7);
    } while (isSameMonth(new Date(this.pointerDate.year, this.pointerDate.month, this.pointerDate.day), dayDatePointer));
    return calendar;
  }
  getAllowedDates(dayDatePointer) {
    if (isNil(this.allowedDates)) {
      return true;
    }
    return this.allowedDates(formatDateString(dayDatePointer));
  }
  formatDate(value) {
    const separator = dateSeparator(this.getLocale());
    const length = value.length;
    const currentChar = value.charAt(length - 1);
    const lastChar = value.charAt(length - 2);
    if (currentChar === separator) {
      if (length === 1 || lastChar === separator || value.split(separator).filter(val => val.length > 0).length >= 3) {
        return value.substring(0, length - 1);
      }
    }
    if (length === 5) {
      if (value.split(separator)[0].split('').length === 1 && lastChar !== separator && currentChar !== separator) {
        return value.substring(0, length - 1) + separator + value.substring(length - 1, length);
      }
    }
    if (length === 3 || length === 6) {
      if (currentChar !== separator && lastChar !== separator && value.split(separator).length <= 2) {
        return value.substring(0, length - 1) + separator + value.substring(length - 1, length);
      }
    }
    return value;
  }
  render() {
    const block = BEM.block('datepicker');
    const native = block.element('native');
    const popup = block.element('popup');
    const popupBody = popup.element('body');
    const popupFooter = popup.element('footer');
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, block.class()), block.modifier('disabled').class(this.disabled || this.readonly)) }, h("input", { type: "date", class: Object.assign({}, native.class()), name: this.name, min: this.min, max: this.max, value: this.value, tabindex: -1, "aria-hidden": "true" }), h("bal-popover", { onBalChange: this.onPopoverChange, ref: el => (this.popoverElement = el) }, this.renderInput(), h("bal-popover-content", { spaceless: true, contentMinWidth: 392 }, h("div", { class: Object.assign({}, popup.class()) }, this.renderHeader(), h("div", { class: Object.assign({}, popupBody.class()) }, this.renderGrid()), h("div", { class: Object.assign({}, popupFooter.class()) }, h("slot", null)))))));
  }
  renderInput() {
    return (h("div", { "bal-popover-trigger": true, class: "control" }, h("bal-input-group", { disabled: this.disabled || this.readonly, invalid: this.invalid }, h("input", Object.assign({ class: {
        'input': true,
        'data-test-input': true,
        'is-clickable': !this.disabled && !this.triggerIcon && !this.readonly,
        'is-disabled': this.disabled || this.readonly,
        'is-danger': this.invalid,
      }, "data-testid": "bal-datepicker-input", ref: el => (this.nativeInput = el), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, type: "text", maxlength: "10", autoComplete: "off", value: format(this.getLocale(), parse(this.value || '')), required: this.required, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, onKeyDown: e => this.onInputKeyDown(e), onKeyUp: e => this.onInputKeyUp(e), onInput: this.onInput, onClick: this.onInputClick, onChange: this.onInputChange, onBlur: this.onInputBlur, onFocus: this.onInputFocus }, this.inheritedAttributes)), !this.loading ? (h("bal-icon", { class: {
        'datepicker-trigger-icon': true,
        'is-clickable': !this.disabled && !this.readonly,
      }, "is-right": true, color: this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : 'primary', name: "date", onClick: this.onIconClick })) : (''))));
  }
  renderGrid() {
    const block = BEM.block('datepicker-grid');
    const rowEl = block.element('row');
    const cellEl = block.element('cell');
    return (h("div", null, this.renderWeekDayHeader(), h("div", { class: Object.assign({}, block.class()) }, this.calendarGrid.map(row => (h("div", { class: Object.assign({}, rowEl.class()) }, row.map(cell => (h("button", { type: "button", "data-date": cell.dateString, onClick: () => this.onClickDateCell(cell), disabled: cell.isDisabled, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, cellEl.class()), { 'button': true, 'is-text': !cell.isDisabled && !cell.isSelected, 'is-primary': cell.isSelected && cell.isSelected, 'is-disabled': cell.isDisabled || cell.isOutdated }), cellEl.modifier('today').class(cell.isToday)), cellEl.modifier('selectable').class(!cell.isDisabled && !cell.isOutdated)), cellEl.modifier('disabled').class(cell.isDisabled || cell.isOutdated)), cellEl.modifier('outdated').class(cell.isOutdated)), cellEl.modifier('selected').class(cell.isSelected)) }, h("span", null, cell.label))))))))));
  }
  renderWeekDayHeader() {
    const block = BEM.block('datepicker-grid');
    const headerEl = block.element('header');
    const cellEl = block.element('cell');
    return (h("header", { class: Object.assign({}, headerEl.class()) }, this.weekDays.map(weekday => (h("div", { class: Object.assign(Object.assign({}, cellEl.class()), cellEl.modifier('header').class()) }, h("span", null, weekday))))));
  }
  renderHeader() {
    const block = BEM.block('datepicker-pagination');
    const innerEl = block.element('inner');
    const monthAndYearEl = block.element('month-and-year');
    const selectEl = monthAndYearEl.element('select');
    return (h("header", { class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, innerEl.class()) }, h("bal-button", { square: true, size: this.isMobile ? 'small' : '', color: "info", icon: "nav-go-left", disabled: this.isPreviousMonthDisabled, onClick: () => this.previousMonth() }), h("div", { class: Object.assign({}, monthAndYearEl.class()) }, h("div", { class: Object.assign(Object.assign({}, selectEl.class()), selectEl.modifier('month').class()) }, h("div", { class: "select" }, h("select", { onInput: this.onMonthSelect }, this.months.map(month => (h("option", { value: month.index, selected: this.pointerDate.month === month.index }, month.name)))))), h("div", { class: Object.assign(Object.assign({}, selectEl.class()), selectEl.modifier('year').class()) }, h("div", { class: "select" }, h("select", { onInput: this.onYearSelect }, this.years.map(year => (h("option", { value: year, selected: this.pointerDate.year === year }, year))))))), h("bal-button", { square: true, size: this.isMobile ? 'small' : '', color: "info", icon: "nav-go-right", disabled: this.isNextMonthDisabled, onClick: () => this.nextMonth() }))));
  }
  previousMonth() {
    if (!this.isPreviousMonthDisabled) {
      if (this.pointerDate.year === this.minYear && this.pointerDate.month === 0) {
        return;
      }
      this.pointerDate = this.calcPreviousMonth();
    }
  }
  nextMonth() {
    if (!this.isNextMonthDisabled) {
      if (this.pointerDate.year === this.maxYear && this.pointerDate.month === 11) {
        return;
      }
      this.pointerDate = this.calcNextMonth();
    }
  }
  calcPreviousMonth() {
    if (this.pointerDate.month === 0) {
      return Object.assign(Object.assign({}, this.pointerDate), { year: this.pointerDate.year - 1, month: 11, day: 1 });
    }
    else {
      return Object.assign(Object.assign({}, this.pointerDate), { month: this.pointerDate.month - 1, day: 1 });
    }
  }
  calcNextMonth() {
    if (this.pointerDate.month === 11) {
      return Object.assign(Object.assign({}, this.pointerDate), { year: this.pointerDate.year + 1, month: 0, day: 1 });
    }
    else {
      return Object.assign(Object.assign({}, this.pointerDate), { month: this.pointerDate.month + 1, day: 1 });
    }
  }
  lastDayOfMonth(year, month) {
    const d = new Date(year, month + 1, 0);
    return getDate(d);
  }
  get isPreviousMonthDisabled() {
    if (this.min) {
      const minDate = parse(this.min);
      const lastDayOfMonth = this.lastDayOfMonth(this.calcPreviousMonth().year, this.calcPreviousMonth().month);
      const beforeDate = new Date(this.calcPreviousMonth().year, this.calcPreviousMonth().month, lastDayOfMonth);
      return isBefore(beforeDate, subDays(minDate, 1));
    }
    return false;
  }
  get isNextMonthDisabled() {
    if (this.max) {
      const maxDate = parse(this.max);
      const beforeDate = new Date(this.calcNextMonth().year, this.calcNextMonth().month, 1);
      return isAfter(beforeDate, lastDayOfMonth(maxDate) ? maxDate : addDays(maxDate, 1));
    }
    return false;
  }
  isDateInRange(cellDate) {
    const parsedCellDate = parse(formatDateString(cellDate));
    if (this.min && this.max && this.max > this.min) {
      return isWithinInterval(parsedCellDate, {
        start: parse(this.min),
        end: parse(this.max),
      });
    }
    if (this.min) {
      return isAfter(parsedCellDate, parse(this.min)) || isSameDay(parsedCellDate, parse(this.min));
    }
    if (this.max) {
      return (isBefore(parsedCellDate, addDays(parse(this.max), 1)) ||
        isSameDay(parsedCellDate, parse(this.max)));
    }
    return true;
  }
  static get is() { return "bal-datepicker"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-datepicker.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-datepicker.css"]
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
          "text": "If `true` the attribute required is added to the native input."
        },
        "attribute": "required",
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
      "min": {
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
          "text": "The minimum datetime allowed. Value must be a date string\nfollowing the\n[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),\nsuch as `1996-12-19`. The format does not have to be specific to an exact\ndatetime. For example, the minimum could just be the year, such as `1994`.\nDefaults to the beginning of the year, 100 years ago from today."
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
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
          "text": "The maximum datetime allowed. Value must be a date string\nfollowing the\n[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),\n`1996-12-19`. The format does not have to be specific to an exact\ndatetime. For example, the maximum could just be the year, such as `1994`.\nDefaults to the end of this year."
        },
        "attribute": "max",
        "reflect": false
      },
      "closeOnSelect": {
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
          "text": "Closes the datepicker popover after selection"
        },
        "attribute": "close-on-select",
        "reflect": false,
        "defaultValue": "true"
      },
      "triggerIcon": {
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
          "text": "If `true` the datepicker only open on click of the icon"
        },
        "attribute": "trigger-icon",
        "reflect": false,
        "defaultValue": "false"
      },
      "minYearProp": {
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
          "text": "Earliest year available for selection"
        },
        "attribute": "min-year",
        "reflect": false
      },
      "maxYearProp": {
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
          "text": "Latest year available for selection"
        },
        "attribute": "max-year",
        "reflect": false
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
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "defaultDate": {
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
          "text": "The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD)."
        },
        "attribute": "default-date",
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
          "text": "The value of the form field, which accepts ISO 8601 date strings (YYYY-MM-DD)."
        },
        "attribute": "value",
        "reflect": false
      },
      "allowedDates": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalDatepickerCallback | undefined",
          "resolved": "((dateString: string) => boolean) | undefined",
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
          "text": "Callback to determine which date in the datepicker should be selectable."
        },
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "language": {},
      "region": {},
      "isMobile": {},
      "focused": {},
      "isPopoverOpen": {},
      "selectedDate": {},
      "pointerDate": {},
      "ariaForm": {}
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
          "original": "BalEvents.BalDatepickerChangeDetail",
          "resolved": "string | undefined",
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
          "original": "BalEvents.BalDatepickerInputDetail",
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
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalDatepickerBlurDetail",
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
          "original": "BalEvents.BalDatepickerFocusDetail",
          "resolved": "FocusEvent",
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
          "text": "Emitted when the input has clicked."
        },
        "complexType": {
          "original": "BalEvents.BalDatepickerInputClickDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balIconClick",
        "name": "balIconClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the icon has clicked."
        },
        "complexType": {
          "original": "BalEvents.BalDatepickerIconClickDetail",
          "resolved": "MouseEvent",
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
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../../utils/config"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
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
      "select": {
        "complexType": {
          "signature": "(dateString: string) => Promise<void>",
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
          "text": "Selects an option",
          "tags": []
        }
      },
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
          "text": "Sets focus on the native `input`. Use this method instead of the global\n`input.focus()`.",
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
          "text": "Sets blur on the native `input`. Use this method instead of the global\n`input.blur()`.",
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
      }, {
        "propName": "value",
        "methodName": "valueChanged"
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
  Logger('bal-datepicker')
], Datepicker.prototype, "createLogger", null);
__decorate([
  ListenToBreakpoints()
], Datepicker.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], Datepicker.prototype, "configChanged", null);
let datepickerIds = 0;
