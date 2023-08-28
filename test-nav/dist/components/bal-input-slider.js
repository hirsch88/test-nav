import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as lodash_isnil } from './index3.js';
import { m as debounceEvent } from './helpers.js';
import { s as stopEventBubbling } from './form-input.js';
import { B as BEM } from './bem.js';
import { d as defaultBalAriaForm } from './form.js';

const balInputSliderCss = ".bal-input-slider{display:block;position:relative;width:100%;-ms-flex:1;flex:1;font-family:var(--bal-font-family-text);-ms-flex-direction:column;flex-direction:column;min-height:3rem}.bal-input-slider__background{position:absolute;top:1rem;left:0px;right:0px;z-index:0;border-radius:var(--bal-radius-rounded);background:var(--bal-color-green);height:1rem;width:100%;overflow:hidden}.bal-input-slider__background__upper,.bal-input-slider__background__lower{position:absolute;top:0;width:50%;margin:0;cursor:pointer}.bal-input-slider__background__upper>div,.bal-input-slider__background__lower>div{height:1rem;border-radius:var(--bal-radius-none)}.bal-input-slider__background__upper{right:0px}.bal-input-slider__background__upper>div{background:var(--bal-color-green);border-top-right-radius:var(--bal-radius-rounded);border-bottom-right-radius:var(--bal-radius-rounded)}.bal-input-slider__background__lower{left:0px}.bal-input-slider__background__lower>div{background:var(--bal-color-green-5);border-top-left-radius:var(--bal-radius-rounded);border-bottom-left-radius:var(--bal-radius-rounded)}.bal-input-slider__background--disabled{cursor:default;pointer-events:none;background:var(--bal-color-grey-2)}.bal-input-slider__background--disabled .bal-input-slider__background__upper__inner{background:var(--bal-color-grey-2)}.bal-input-slider__background--disabled .bal-input-slider__background__lower__inner{background:var(--bal-color-grey-4)}.bal-input-slider__input{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;min-height:3rem}.bal-input-slider__input__native{-webkit-appearance:none;margin:0;background:rgba(0,0,0,0);z-index:1;outline:none;min-width:200px;width:100%}.bal-input-slider__input__native::-webkit-slider-runnable-track{width:100%;cursor:pointer;border:none}.bal-input-slider__input__native::-webkit-slider-thumb{-webkit-box-shadow:var(--bal-shadow-none);box-shadow:var(--bal-shadow-none);border:3px solid var(--bal-color-primary-inverted);height:1rem;width:1rem;border-radius:var(--bal-radius-rounded);background:var(--bal-color-primary);cursor:pointer;-webkit-appearance:none}.bal-input-slider__input__native:focus-visible{outline:none}.bal-input-slider__input__native:focus-visible::-webkit-slider-thumb{background:var(--bal-color-primary);border:2px solid var(--bal-color-primary)}.bal-input-slider__input__native::-moz-range-track{cursor:pointer;box-shadow:var(--bal-shadow-none);background:rgba(0,0,0,0);width:100%;border:none;z-index:2}.bal-input-slider__input__native::-moz-range-thumb{box-shadow:var(--bal-shadow-none);border:3px solid var(--bal-color-primary-inverted);height:10px;width:10px;border-radius:var(--bal-radius-rounded);background:var(--bal-color-primary);cursor:pointer}.bal-input-slider__input__native::-ms-track{cursor:pointer;box-shadow:var(--bal-shadow-none);background:rgba(0,0,0,0);width:100%;border:none;z-index:2}.bal-input-slider__input__native::-ms-fill-lower{background:rgba(0,0,0,0);border:none;box-shadow:var(--bal-shadow-none)}.bal-input-slider__input__native::-ms-fill-upper{background:rgba(0,0,0,0);border:none;box-shadow:var(--bal-shadow-none)}.bal-input-slider__input__native::-ms-thumb{box-shadow:var(--bal-shadow-none);border:3px solid var(--bal-color-primary-inverted);height:1rem;width:1rem;border-radius:var(--bal-radius-rounded);background:var(--bal-color-primary);cursor:pointer;-webkit-appearance:none;z-index:2}.bal-input-slider__input__native:focus::-ms-fill-lower{background:rgba(0,0,0,0)}.bal-input-slider__input__native:focus::-ms-fill-upper{background:rgba(0,0,0,0)}.bal-input-slider__input__native--disabled::-webkit-slider-thumb{background:var(--bal-color-grey-5)}.bal-input-slider__input__native--disabled::-ms-thumb{background:var(--bal-color-grey-5)}.bal-input-slider__input__native--disabled::-moz-range-thumb{background:var(--bal-color-grey-5)}.bal-input-slider__steps{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;min-height:.5rem;margin:-10px 8px;-ms-flex-pack:justify;justify-content:space-between}.bal-input-slider__steps__item{width:.125rem;border-radius:var(--bal-radius-rounded);background-color:var(--bal-color-primary)}.bal-input-slider__steps__item--disabled{background:var(--bal-color-grey-4)}@-moz-document url-prefix(){.bal-input-slider__steps{margin:0 8px !important}}";

const InputSlider = proxyCustomElement(class InputSlider extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balInput = createEvent(this, "balInput", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balKeyPress = createEvent(this, "balKeyPress", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balChange = createEvent(this, "balChange", 7);
    this.inputId = `bal-input-slider-${inputSliderIds++}`;
    this.didInit = false;
    this.hasFocus = false;
    this.initialValue = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.balInput.emit(this.value);
    };
    this.handleClick = (ev) => {
      if (this.disabled || this.readonly) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.balFocus.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.balBlur.emit(ev);
      this.balChange.emit(this.value);
    };
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.step = 0;
    this.min = 0;
    this.max = 100;
    this.invalid = false;
    this.balTabindex = 0;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.hasTicks = false;
    this.debounce = 0;
    this.value = '';
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  listenOnClick(ev) {
    if ((this.disabled || this.readonly) && ev.target && ev.target === this.el) {
      stopEventBubbling(ev);
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.value = this.initialValue;
      clearTimeout(this.resetHandlerTimer);
      this.resetHandlerTimer = setTimeout(() => {
        if (this.nativeInput) {
          this.nativeInput.value = this.initialValue;
        }
      }, 0);
    }
  }
  valueChanged(newValue, oldValue) {
    if (this.didInit && !this.hasFocus && newValue !== oldValue) {
      this.balChange.emit(this.value);
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value;
  }
  componentDidLoad() {
    this.didInit = true;
    if (!lodash_isnil(this.value) && this.value !== '') {
      this.valueChanged(this.value, undefined);
    }
  }
  async setFocus() {
    clearTimeout(this.setFocusTimer);
    this.setFocusTimer = setTimeout(() => {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    });
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  get numberOfSteps() {
    const max = this.max - this.min;
    if (this.step <= 0 || this.step >= max) {
      return 0;
    }
    return ~~(max / this.step) + 1;
  }
  cssWidth(isUpper = false) {
    const a = this.value === '' ? 0 : Math.round(Number(this.value) / this.step) * this.step;
    const b = (100 / this.max) * a;
    if (!isUpper) {
      return `${100 - b}%`;
    }
    return `${b}%`;
  }
  getNumberOfSteps() {
    const steps = [];
    for (let step = 0; step < this.numberOfSteps; step++) {
      steps.push(step);
    }
    return steps;
  }
  render() {
    const block = BEM.block('input-slider');
    const backgroundEl = block.element('background');
    const backgroundUpperEl = backgroundEl.element('upper');
    const backgroundUpperInnerEl = backgroundUpperEl.element('inner');
    const backgroundLowerEl = backgroundEl.element('lower');
    const backgroundLowerInnerEl = backgroundLowerEl.element('inner');
    const inputEl = block.element('input');
    const inputNativeEl = inputEl.element('native');
    const inputValueEl = inputEl.element('value');
    const inputValueLeftEl = inputValueEl.modifier('left');
    const inputValueRightEl = inputValueEl.modifier('right');
    const stepsEl = block.element('steps');
    const stepsItemEl = stepsEl.element('item');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier('disabled').class(this.disabled || this.readonly)), onClick: this.handleClick, "aria-disabled": this.disabled || this.readonly ? 'true' : null }, h("div", { class: Object.assign(Object.assign({}, backgroundEl.class()), backgroundEl.modifier('disabled').class(this.disabled || this.readonly)) }, h("div", { class: Object.assign({}, backgroundUpperEl.class()), style: {
        width: this.cssWidth(),
      } }, h("div", { class: Object.assign({}, backgroundUpperInnerEl.class()) })), h("div", { class: Object.assign({}, backgroundLowerEl.class()), style: {
        width: this.cssWidth(true),
      } }, h("div", { class: Object.assign({}, backgroundLowerInnerEl.class()) }))), h("div", { class: Object.assign({}, inputEl.class()) }, h("div", { class: Object.assign(Object.assign({}, inputValueEl.class()), inputValueLeftEl.class()) }), h("input", { type: "range", class: Object.assign(Object.assign({}, inputNativeEl.class()), inputNativeEl.modifier('disabled').class(this.disabled || this.readonly)), ref: inputEl => (this.nativeInput = inputEl), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-disabled": this.disabled ? 'true' : null, "aria-invalid": this.invalid === true ? 'true' : 'false', disabled: this.disabled, readonly: this.readonly, name: this.name, required: this.required, tabIndex: this.balTabindex, step: this.step, min: this.min, max: this.max, value: this.value !== '' && this.value !== undefined ? this.value : 0, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyPress: e => this.balKeyPress.emit(e), "data-testid": "bal-input-slider" }), h("div", { class: Object.assign(Object.assign({}, inputValueEl.class()), inputValueRightEl.class()) })), h("div", { class: Object.assign({}, stepsEl.class()), style: { display: this.hasTicks ? 'flex' : 'none' } }, this.getNumberOfSteps().map(step => (h("div", { class: Object.assign(Object.assign({}, stepsItemEl.class()), stepsItemEl.modifier('disabled').class(this.disabled || this.readonly)), "data-step-id": step }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
  static get style() { return {
    css: balInputSliderCss
  }; }
}, [32, "bal-input-slider", {
    "name": [1],
    "step": [2],
    "min": [2],
    "max": [2],
    "invalid": [4],
    "balTabindex": [2, "bal-tabindex"],
    "disabled": [4],
    "readonly": [4],
    "required": [4],
    "hasTicks": [4, "has-ticks"],
    "debounce": [2],
    "value": [1032],
    "ariaForm": [32],
    "setFocus": [64],
    "getInputElement": [64],
    "setAriaForm": [64]
  }, [[6, "click", "listenOnClick"], [6, "reset", "resetHandler"]]]);
let inputSliderIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-input-slider"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-input-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputSlider);
      }
      break;
  } });
}

const BalInputSlider = InputSlider;
const defineCustomElement = defineCustomElement$1;

export { BalInputSlider, defineCustomElement };
