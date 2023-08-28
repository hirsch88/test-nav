'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const helpers = require('./helpers-83a73189.js');
const bem = require('./bem-5d122a5c.js');
const log = require('./log-911f84ec.js');
const index_esm = require('./index.esm-edff2e0c.js');
const formInput = require('./form-input-7611e5c9.js');
const balStep_util = require('./bal-step.util-a7f28bae.js');
const mutation_decorator = require('./mutation.decorator-2974f261.js');
const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');
const breakpoints_decorator = require('./breakpoints.decorator-7aae4c5f.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./index-e6a233be.js');
require('./_commonjsHelpers-bcc1208a.js');
require('./listener-4161102f.js');
require('./device-76e9eca9.js');
require('./tokens.esm-505d1e8f.js');

const StepIcon = ({ item, isMobile }) => {
  const bemEl = bem.BEM.block('steps').element('nav').element('item').element('icon');
  return (index.h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)) },
    index.h("bal-icon", { style: { display: item.done ? 'block' : 'none' }, size: isMobile ? 'small' : '', color: item.disabled ? 'grey' : 'white', name: "check" }),
    index.h("span", { style: { display: !item.done ? 'block' : 'none' } }, item.failed ? '!' : (item.index || 0) + 1)));
};

const StepLabel = ({ item }) => {
  const bemEl = bem.BEM.block('steps').element('nav').element('item').element('label');
  return (index.h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)), "data-testid": "bal-steps-option-label" }, item.label));
};

const StepButton = ({ item, isMobile, clickable, onSelectTab }) => {
  const bemEl = bem.BEM.block('steps').element('nav').element('item');
  if (item.hidden) {
    return;
  }
  return (index.h("a", { role: "tab", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('clickable').class(clickable)), bemEl.modifier('passed').class(item.passed)), { 'bal-focusable': !item.disabled && !item.hidden }), "data-label": item.label, "data-value": item.value, "data-index": item.index, "data-testid": "bal-steps-option", "aria-disabled": `${item.disabled}`, href: item.href === '' ? 'javascript:;' : item.href, target: item.target, onClick: (ev) => onSelectTab(ev, item) },
    index.h(StepIcon, { item: item, isMobile: isMobile }),
    index.h(StepLabel, { item: item })));
};

const balStepsCss = "@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused.bal-steps__nav__item--inverted .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow-inverted) !important;box-shadow:var(--bal-focus-shadow-inverted) !important}}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused.bal-steps__nav__item--inverted .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow-inverted) !important;box-shadow:var(--bal-focus-shadow-inverted) !important}}:root{--bal-steps-step-icon-background:var(--bal-color-white);--bal-steps-step-icon-background-active:var(--bal-color-primary);--bal-steps-step-icon-background-disabled:var(--bal-color-grey-2);--bal-steps-step-icon-background-done:var(--bal-color-primary);--bal-steps-step-icon-background-failed:var(--bal-color-danger);--bal-steps-step-button-progress-line-background:var(--bal-form-field-control-border-color);--bal-steps-step-button-passed-background:var(--bal-form-field-control-border-color-active);--bal-steps-step-button-carousel-item-background-after:var(--bal-form-field-control-border-color);--bal-steps-step-button-carousel-item-passed-background-after:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-width:var(--bal-form-field-control-border-width);--bal-steps-step-border-style:var(--bal-form-field-control-border-style);--bal-steps-step-border-color:var(--bal-form-field-control-border-color);--bal-steps-step-border-color-active:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-color-disabled:var(--bal-form-field-control-disabled-background);--bal-steps-step-border-color-done:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-color-failed:var(--bal-color-danger);--bal-steps-step-icon-radius:var(--bal-radius-rounded);--bal-steps-step-button-progress-line-radius:var(--bal-radius-rounded);--bal-steps-step-button-carousel-item-radius:var(--bal-radius-rounded);--bal-steps-step-label-text-color:var(--bal-color-text-primary-light);--bal-steps-step-label-text-color-done:var(--bal-color-text-primary);--bal-steps-step-label-text-color-active:var(--bal-color-text-primary);--bal-steps-step-label-text-color-failed:var(--bal-color-text-danger);--bal-steps-step-label-text-color-disabled:var(--bal-color-text-grey);--bal-steps-step-icon-text-color:var(--bal-color-text-white-inverted);--bal-steps-step-icon-text-color-active:var(--bal-color-text-primary-inverted);--bal-steps-step-icon-text-color-disabled:var(--bal-color-text-grey);--bal-steps-step-icon-text-color-done:var(--bal-color-text-primary-inverted);--bal-steps-step-icon-text-color-failed:var(--bal-color-text-white)}.bal-steps__nav__item{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;gap:.5rem;-ms-flex-direction:column;flex-direction:column;-ms-flex-preferred-size:1rem;flex-basis:1rem;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-decoration:none;cursor:default;position:relative;min-width:3rem;padding-top:6px}.bal-steps__nav__item--hidden{display:none !important;visibility:hidden !important}.bal-steps__nav__item--clickable{cursor:pointer;pointer-events:all}.bal-steps__nav__item:not(:last-child)::after{content:\" \";display:block;position:absolute;height:var(--bal-border-width-normal);left:50%;right:-50%;top:50%;background-color:var(--bal-steps-step-button-progress-line-background);border-radius:var(--bal-steps-step-button-progress-line-radius);margin-top:3px;margin-left:calc(1.5rem - var(--bal-border-width-normal));margin-right:1.25rem}@media screen and (min-width: 769px),print{.bal-steps__nav__item:not(:last-child)::after{top:1rem;margin-top:6px;margin-left:calc(1.5rem - var(--bal-border-width-normal));margin-right:1.5rem}}.bal-steps__nav__item--passed:not(:last-child)::after{background-color:var(--bal-steps-step-button-passed-background)}.bal-steps__nav__carousel__item{-ms-flex:1;flex:1;min-width:3rem}.bal-steps__nav__carousel__item:not(:last-child)::after{content:\" \";display:block;position:absolute;height:var(--bal-border-width-normal);left:50%;right:-50%;top:50%;background-color:var(--bal-steps-step-button-carousel-item-background-after);border-radius:var(--bal-steps-step-button-carousel-item-radius);margin-top:3px;margin-left:1.25rem;margin-right:1.25rem}@media screen and (min-width: 769px),print{.bal-steps__nav__carousel__item:not(:last-child)::after{top:1rem;margin-top:6px;margin-left:1.5rem;margin-right:1.5rem}}.bal-steps__nav__carousel__item--passed:not(:last-child)::after{background-color:var(--bal-steps-step-button-carousel-item-passed-background-after)}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused.bal-steps__nav__item--inverted .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow-inverted) !important;box-shadow:var(--bal-focus-shadow-inverted) !important}}:root{--bal-steps-step-icon-background:var(--bal-color-white);--bal-steps-step-icon-background-active:var(--bal-color-primary);--bal-steps-step-icon-background-disabled:var(--bal-color-grey-2);--bal-steps-step-icon-background-done:var(--bal-color-primary);--bal-steps-step-icon-background-failed:var(--bal-color-danger);--bal-steps-step-button-progress-line-background:var(--bal-form-field-control-border-color);--bal-steps-step-button-passed-background:var(--bal-form-field-control-border-color-active);--bal-steps-step-button-carousel-item-background-after:var(--bal-form-field-control-border-color);--bal-steps-step-button-carousel-item-passed-background-after:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-width:var(--bal-form-field-control-border-width);--bal-steps-step-border-style:var(--bal-form-field-control-border-style);--bal-steps-step-border-color:var(--bal-form-field-control-border-color);--bal-steps-step-border-color-active:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-color-disabled:var(--bal-form-field-control-disabled-background);--bal-steps-step-border-color-done:var(--bal-form-field-control-border-color-active);--bal-steps-step-border-color-failed:var(--bal-color-danger);--bal-steps-step-icon-radius:var(--bal-radius-rounded);--bal-steps-step-button-progress-line-radius:var(--bal-radius-rounded);--bal-steps-step-button-carousel-item-radius:var(--bal-radius-rounded);--bal-steps-step-label-text-color:var(--bal-color-text-primary-light);--bal-steps-step-label-text-color-done:var(--bal-color-text-primary);--bal-steps-step-label-text-color-active:var(--bal-color-text-primary);--bal-steps-step-label-text-color-failed:var(--bal-color-text-danger);--bal-steps-step-label-text-color-disabled:var(--bal-color-text-grey);--bal-steps-step-icon-text-color:var(--bal-color-text-white-inverted);--bal-steps-step-icon-text-color-active:var(--bal-color-text-primary-inverted);--bal-steps-step-icon-text-color-disabled:var(--bal-color-text-grey);--bal-steps-step-icon-text-color-done:var(--bal-color-text-primary-inverted);--bal-steps-step-icon-text-color-failed:var(--bal-color-text-white)}.bal-steps__nav__item__icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;font-weight:var(--bal-weight-bold);border-radius:var(--bal-steps-step-icon-radius);font-size:var(--bal-size-small);height:1.5rem;width:1.5rem;left:calc(50% - .75rem);border:var(--bal-steps-step-border-width) var(--bal-steps-step-border-style) var(--bal-steps-step-border-color);background:var(--bal-steps-step-icon-background);color:var(--bal-steps-step-icon-text-color)}@media screen and (min-width: 769px),print{.bal-steps__nav__item__icon{height:2rem;width:2rem;left:calc(50% - 1rem);font-size:var(--bal-size-normal)}}.bal-steps__nav__item__icon--active{border-color:var(--bal-steps-step-border-color-active);background:var(--bal-steps-step-icon-background-active);color:var(--bal-steps-step-icon-text-color-active)}.bal-steps__nav__item__icon--done{border-color:var(--bal-steps-step-border-color-done);background:var(--bal-steps-step-icon-background-done);color:var(--bal-steps-step-icon-text-color-done)}.bal-steps__nav__item__icon--failed{border-color:var(--bal-steps-step-border-color-failed);background:var(--bal-steps-step-icon-background-failed);color:var(--bal-steps-step-icon-text-color-failed);font-size:var(--bal-size-normal)}@media screen and (min-width: 769px),print{.bal-steps__nav__item__icon--failed{font-size:var(--bal-size-tablet-large)}}@media screen and (min-width: 1024px){.bal-steps__nav__item__icon--failed{font-size:var(--bal-size-desktop-large)}}.bal-steps__nav__item__icon--disabled{border-color:var(--bal-steps-step-border-color-disabled);background:var(--bal-steps-step-icon-background-disabled);color:var(--bal-steps-step-icon-text-color-disabled)}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}@media (hover: hover)and (pointer: fine){.bal-steps__nav__item.bal-focused.bal-steps__nav__item--inverted .bal-steps__nav__item__icon{-webkit-box-shadow:var(--bal-focus-shadow-inverted) !important;box-shadow:var(--bal-focus-shadow-inverted) !important}}.bal-steps__nav__item__label{display:none}@media screen and (min-width: 769px),print{.bal-steps__nav__item__label{display:block;font-family:var(--bal-font-family-title);font-weight:var(--bal-weight-bold);font-size:var(--bal-size-normal);text-align:center;width:100%;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--bal-steps-step-label-text-color)}.bal-steps__nav__item__label--done{color:var(--bal-steps-step-label-text-color-done)}.bal-steps__nav__item__label--active{color:var(--bal-steps-step-label-text-color-active)}.bal-steps__nav__item__label--failed{color:var(--bal-steps-step-label-text-color-failed)}.bal-steps__nav__item__label--disabled{color:var(--bal-steps-step-label-text-color-disabled)}}.bal-steps{display:block;position:static}.bal-steps__nav{-webkit-overflow-scrolling:touch;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bal-step-item{width:100%;display:none}.bal-step-item--active{display:block}";

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
const Steps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.stepsId = `bal-steps-${StepsIds++}`;
    this.mutationObserverActive = true;
    this.getStepOptions = () => {
      if (this.options.length > 0) {
        return [...this.options.map(balStep_util.newBalStepOption)];
      }
      else {
        return Promise.all(this.items.map(value => value.getOptions()));
      }
    };
    this.updateStore = (newStore) => {
      if (!index_esm.areArraysEqual(this.store, newStore)) {
        this.store = newStore;
      }
    };
    this.setActiveItem = () => {
      const activeTabs = this.store.filter(t => t.active);
      if (activeTabs.length > 0) {
        const firstActiveTab = activeTabs[0];
        this.value = firstActiveTab.value;
      }
      else {
        if (this.value === undefined && this.store.length > 0) {
          const firstStep = this.store[0];
          this.value = firstStep.value;
        }
      }
    };
    this.setActiveContent = () => {
      if (this.options.length === 0) {
        this.items.forEach(item => item.setActive(this.isActive(item)));
      }
    };
    this.onOptionChange = async () => {
      try {
        const options = await this.getStepOptions();
        this.updateStore(options);
        this.setActiveItem();
        this.setActiveContent();
      }
      catch (e) {
        console.warn('[WARN] - Could not read tab options');
      }
    };
    this.onSelectTab = async (ev, step) => {
      if (step.prevent || step.disabled || !this.clickable) {
        formInput.stopEventBubbling(ev);
      }
      if (!step.disabled) {
        if (step.navigate) {
          step.navigate.emit(ev);
        }
        if (this.clickable) {
          if (step.value !== this.value) {
            this.balChange.emit(step.value);
            await this.select(step);
          }
        }
      }
    };
    this.isMobile = breakpoints_subject.balBreakpoints.isMobile;
    this.store = [];
    this.options = [];
    this.clickable = true;
    this.debounce = 0;
    this.value = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    if (this.options === undefined || this.options.length < 1) {
      this.mutationObserverActive = true;
    }
    else {
      this.mutationObserverActive = false;
    }
  }
  debounceChanged() {
    this.balChange = helpers.debounceEvent(this.balChange, this.debounce);
  }
  async valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.onOptionChange();
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.mutationObserverActive = this.options === undefined || this.options.length < 1;
  }
  componentDidLoad() {
    this.onOptionChange();
  }
  mutationListener() {
    this.onOptionChange();
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  async select(step) {
    this.value = step.value;
  }
  async getOptionByValue(value) {
    const options = this.store;
    return options.find(option => option.value === value);
  }
  get items() {
    return Array.from(this.el.querySelectorAll(`#${this.stepsId} > bal-step-item`));
  }
  isActive(step) {
    return step.value === this.value;
  }
  render() {
    const block = bem.BEM.block('steps');
    const bemStepsNav = block.element('nav');
    let hasPassed = true;
    let index$1 = -1;
    const steps = this.store
      .map(step => (Object.assign(Object.assign({}, step), { active: step.value === this.value })))
      .map(step => {
      if (step.active) {
        hasPassed = false;
      }
      if (!step.hidden) {
        index$1 = index$1 + 1;
      }
      return Object.assign(Object.assign({}, step), { passed: hasPassed, index: index$1 });
    });
    return (index.h(index.Host, { class: Object.assign({}, block.class()), "data-value": this.store
        .filter(t => this.isActive(t))
        .map(t => t.value)
        .join(','), "data-label": this.store
        .filter(t => this.isActive(t))
        .map(t => t.label)
        .join(',') }, index.h("nav", { role: "tablist", class: Object.assign({}, bemStepsNav.class()) }, index.h("bal-carousel", { class: Object.assign({}, bemStepsNav.element('carousel').class()), onBalChange: formInput.stopEventBubbling, controls: "small", "items-per-view": "auto", steps: 3 }, steps
      .filter(step => !step.hidden)
      .map(step => (index.h("bal-carousel-item", { class: Object.assign(Object.assign({}, bemStepsNav.element('carousel').element('item').class()), bemStepsNav.element('carousel').element('item').modifier('passed').class(step.passed)) }, index.h(StepButton, { item: step, isMobile: this.isMobile, clickable: this.clickable && !step.disabled, onSelectTab: this.onSelectTab })))))), index.h("div", { id: this.stepsId, class: Object.assign({}, block.element('steps__content').class()) }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
__decorate([
  log.Logger('bal-steps')
], Steps.prototype, "createLogger", null);
__decorate([
  mutation_decorator.ListenToMutation({ tags: ['bal-steps', 'bal-step-item'] })
], Steps.prototype, "mutationListener", null);
__decorate([
  breakpoints_decorator.ListenToBreakpoints()
], Steps.prototype, "breakpointListener", null);
let StepsIds = 0;
Steps.style = {
  css: balStepsCss
};

exports.bal_steps = Steps;
