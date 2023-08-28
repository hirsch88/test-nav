'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const helpers = require('./helpers-83a73189.js');
const log = require('./log-911f84ec.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
const bem = require('./bem-5d122a5c.js');
const formInput = require('./form-input-7611e5c9.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./index-843a2913.js');

const balAccordionCss = ".bal-accordion{display:block;position:relative;width:100%}.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-desktop-medium)}}.bal-accordion--card-v2{padding-left:var(--bal-space-medium);padding-right:var(--bal-space-medium);padding-bottom:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion--card-v2{padding-left:var(--bal-space-tablet-medium);padding-right:var(--bal-space-tablet-medium);padding-bottom:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion--card-v2{padding-left:var(--bal-space-desktop-medium);padding-right:var(--bal-space-desktop-medium);padding-bottom:var(--bal-space-desktop-medium)}}.bal-accordion__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.bal-accordion__trigger--card{margin-left:var(--bal-space-medium);margin-right:var(--bal-space-medium);margin-bottom:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion__trigger--card{margin-left:var(--bal-space-tablet-medium);margin-right:var(--bal-space-tablet-medium);margin-bottom:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion__trigger--card{margin-left:var(--bal-space-desktop-medium);margin-right:var(--bal-space-desktop-medium);margin-bottom:var(--bal-space-desktop-medium)}}.bal-accordion__content--card{margin-left:var(--bal-space-medium);margin-right:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion__content--card{margin-left:var(--bal-space-tablet-medium);margin-right:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion__content--card{margin-left:var(--bal-space-desktop-medium);margin-right:var(--bal-space-desktop-medium)}}.bal-accordion--animated{-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion--animated .bal-accordion__content{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion__content{overflow:hidden;will-change:max-height}.bal-accordion--collapsing .bal-accordion__content{max-height:0 !important}.bal-accordion--collapsed .bal-accordion__content{display:none}.bal-accordion--expanding .bal-accordion__content{max-height:0}@media (prefers-reduced-motion: reduce){.bal-accordion,.bal-accordion__content{-webkit-transition:none !important;transition:none !important}}";

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Accordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.balWillAnimate = index.createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = index.createEvent(this, "balDidAnimate", 7);
    this.componentId = `bal-accordion-${accordionIds++}`;
    this.updateState = (initialUpdate = false) => {
      if (this.active) {
        this.expand(initialUpdate);
      }
      else {
        this.collapse(initialUpdate);
      }
    };
    this.setState = (state) => {
      this.state = state;
      if (this.version === 2) {
        this.updateTriggerElement();
        this.updateDetailsElement();
        this.updateSummaryElement();
      }
    };
    this.updateDetailsElement = () => {
      const detailsElement = this.detailsElement;
      if (detailsElement) {
        detailsElement.state = this.state;
        detailsElement.active = this.active;
        detailsElement.animated = this.animated;
      }
    };
    this.updateTriggerElement = () => {
      const triggerElement = this.triggerElement;
      if (triggerElement) {
        triggerElement.state = this.state;
        triggerElement.active = this.active;
      }
    };
    this.updateSummaryElement = () => {
      const summaryElement = this.summaryElement;
      if (summaryElement) {
        summaryElement.state = this.state;
        summaryElement.active = this.active;
      }
    };
    this.expand = (initialUpdate = false) => {
      this.active = true;
      const detailsElement = this.detailsElement;
      const detailsWrapperElement = this.detailsWrapperElement;
      if (initialUpdate || detailsElement === null || detailsWrapperElement === null) {
        this.setState(4);
        return this.active;
      }
      if (this.state === 4) {
        return this.active;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        helpers.raf(() => {
          this.setState(8);
          this.currentRaf = helpers.raf(async () => {
            const contentHeight = detailsWrapperElement.offsetHeight;
            const waitForTransition = helpers.transitionEndAsync(detailsElement, 300);
            detailsElement.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.active);
            await waitForTransition;
            this.setState(4);
            detailsElement.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.active);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.active);
        this.setState(4);
        this.balDidAnimate.emit(this.active);
      }
      return this.active;
    };
    this.collapse = (initialUpdate = false) => {
      this.active = false;
      const detailsElement = this.detailsElement;
      if (initialUpdate || detailsElement === null) {
        this.setState(1);
        return this.active;
      }
      if (this.state === 1) {
        return this.active;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = helpers.raf(async () => {
          const contentHeight = detailsElement.offsetHeight;
          detailsElement.style.setProperty('max-height', `${contentHeight}px`);
          helpers.raf(async () => {
            const waitForTransition = helpers.transitionEndAsync(detailsElement, 300);
            this.setState(2);
            this.balDidAnimate.emit(this.active);
            await waitForTransition;
            this.setState(1);
            detailsElement.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.active);
          });
        });
      }
      else {
        this.balDidAnimate.emit(this.active);
        this.setState(1);
        this.balDidAnimate.emit(this.active);
      }
      return this.active;
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onTriggerClickV1 = () => {
      this.humanToggle();
    };
    this.state = 1;
    this.animated = true;
    this.active = false;
    this.debounce = 0;
    this.openLabel = '';
    this.openIcon = 'plus';
    this.closeLabel = '';
    this.closeIcon = 'close';
    this.card = false;
    this.version = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async activeChanged(newActive, oldActive) {
    if (newActive !== oldActive) {
      this.active = newActive;
      this.updateState();
    }
  }
  debounceChanged() {
    this.balChange = helpers.debounceEvent(this.balChange, this.debounce);
  }
  async connectedCallback() {
    this.debounceChanged();
    await helpers.waitForComponent(this.el);
    if (this.active) {
      this.activeChanged(this.active, false);
    }
    this.updateState(true);
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async present() {
    return this.expand();
  }
  async dismiss() {
    return this.collapse();
  }
  async toggle() {
    if (this.active) {
      return this.collapse();
    }
    else {
      return this.expand();
    }
  }
  async humanToggle() {
    if (this.active) {
      await this.collapse();
    }
    else {
      await this.expand();
    }
    this.balChange.emit(this.active);
    return this.active;
  }
  get summaryElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-summary`)) || null;
  }
  get triggerElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-trigger`)) || null;
  }
  get detailsElement() {
    var _a;
    if (this.version === 1) {
      return this.contentEl || null;
    }
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-details`)) || null;
  }
  get detailsWrapperElement() {
    var _a;
    if (this.version === 1) {
      return this.contentElWrapper || null;
    }
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-details > div`)) || null;
  }
  render() {
    return this.version === 2 ? this.renderVersion2() : this.renderVersion1();
  }
  renderVersion2() {
    const block = bem.BEM.block('accordion');
    return (index.h(index.Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('card-v2').class(this.card)), block.modifier('animated').class(this.animated)) }));
  }
  renderVersion1() {
    const label = this.active ? this.closeLabel : this.openLabel;
    const icon = this.active ? this.closeIcon : this.openIcon;
    const block = bem.BEM.block('accordion');
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    const contentPart = expanded ? 'content expanded' : 'content';
    return (index.h(index.Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('card-v1').class(this.card)), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, index.h("div", { class: Object.assign({}, block.element('wrapper').class()) }, index.h("div", { class: Object.assign(Object.assign({}, block.element('trigger').class()), block.element('trigger').modifier('card').class(this.card)), "data-testid": "bal-accordion-summary" }, index.h("bal-button", { id: `${this.componentId}-button`, "aria-controls": `${this.componentId}-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, color: 'info', icon: icon, onClick: this.onTriggerClickV1 }, label)), index.h("div", { id: `${this.componentId}-content`, "aria-labelledby": `${this.componentId}-button`, role: "region", part: contentPart, class: Object.assign(Object.assign({}, block.element('content').class()), block.element('content').modifier('card').class(this.card)), ref: contentEl => (this.contentEl = contentEl) }, index.h("div", { id: `${this.componentId}-content-wrapper`, "data-testid": "bal-accordion-details", class: Object.assign({}, block.element('content').element('wrapper').class()), ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, index.h("slot", null))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeChanged"],
    "debounce": ["debounceChanged"]
  }; }
};
__decorate$3([
  log.Logger('bal-accordion')
], Accordion.prototype, "createLogger", null);
__decorate$3([
  config_decorator.ListenToConfig()
], Accordion.prototype, "configChanged", null);
let accordionIds = 0;
Accordion.style = {
  css: balAccordionCss
};

const balAccordionDetailsCss = ".bal-accordion__details{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;will-change:max-height;min-block-size:auto;min-height:auto;min-inline-size:auto;min-width:auto}.bal-accordion__details--animated{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion__details--collapsing{max-height:0 !important}.bal-accordion__details--collapsed{display:none}.bal-accordion__details--expanding{max-height:0}@media (prefers-reduced-motion: reduce){.bal-accordion__details{-webkit-transition:none !important;transition:none !important}}";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AccordionDetail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.componentId = `bal-accordion-details-${accordionDetailIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.parentAccordionId = undefined;
    this.state = 1;
    this.active = false;
    this.animated = true;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.updateAccordionId();
  }
  componentWillRender() {
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = bem.BEM.block('accordion').element('details');
    const containerEl = block.element('container');
    const wrapperEl = containerEl.element('wrapper');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-details` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const contentPart = expanded ? 'content expanded' : 'content';
    return (index.h(index.Host, { id: id, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, index.h("div", { id: `${id}-content`, "aria-labelledby": `${this.parentAccordionId}-trigger-button`, role: "region", part: contentPart, class: Object.assign({}, wrapperEl.class()), "data-testid": "bal-accordion-details" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
__decorate$2([
  log.Logger('bal-accordion-details')
], AccordionDetail.prototype, "createLogger", null);
let accordionDetailIds = 0;
AccordionDetail.style = {
  css: balAccordionDetailsCss
};

const balAccordionSummaryCss = ".bal-accordion__summary{position:static}.bal-accordion__summary--trigger{cursor:pointer}";

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
const AccordionSummary = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.componentId = `bal-accordion-summary-${accordionSummaryIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      formInput.stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.trigger = false;
    this.active = false;
    this.state = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 2;
    }
    this.updateAccordionId();
  }
  disconnectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 1;
    }
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = bem.BEM.block('accordion').element('summary');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-summary` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    let attributes = {};
    if (this.trigger) {
      attributes = {
        'aria-controls': `${this.parentAccordionId}-details-content`,
        'role': 'button',
        'part': buttonPart,
        'data-testid': 'bal-accordion-button',
        'onClick': this.onClick,
      };
    }
    return (index.h(index.Host, Object.assign({ id: id, class: Object.assign(Object.assign({}, block.class()), block.modifier('trigger').class(this.trigger)) }, attributes, { "data-testid": "bal-accordion-summary" })));
  }
  get el() { return index.getElement(this); }
};
__decorate$1([
  log.Logger('bal-accordion-summary')
], AccordionSummary.prototype, "createLogger", null);
let accordionSummaryIds = 0;
AccordionSummary.style = {
  css: balAccordionSummaryCss
};

const balAccordionTriggerCss = ".bal-accordion__trigger{position:static}.bal-accordion__trigger__button{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,0);border:none;height:3rem;width:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}";

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
const AccordionTrigger = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.componentId = `bal-accordion-trigger-${accordionTriggerIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      formInput.stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.button = false;
    this.openLabel = '';
    this.openIcon = 'caret-down';
    this.closeLabel = '';
    this.closeIcon = '';
    this.color = 'info';
    this.size = '';
    this.active = false;
    this.state = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.updateAccordionId();
  }
  componentWillRender() {
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = bem.BEM.block('accordion').element('trigger');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-trigger` : this.componentId;
    const label = this.active ? this.closeLabel : this.openLabel;
    let turn = false;
    let icon = this.active ? this.closeIcon : this.openIcon;
    if (this.closeIcon === '' || this.closeIcon === undefined || this.closeIcon === null) {
      turn = this.active;
      icon = this.openIcon || 'caret-down';
    }
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    return (index.h(index.Host, { id: id, class: Object.assign({}, block.class()) }, this.button ? (index.h("bal-button", { id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, icon: icon, iconTurn: turn, color: this.color, size: this.size, onClick: this.onClick }, label)) : (index.h("button", { class: Object.assign({}, block.element('button').class()), id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, "aria-label": "accordion trigger", part: buttonPart, "data-testid": "bal-accordion-trigger", onClick: this.onClick }, index.h("bal-icon", { turn: turn, name: icon })))));
  }
  get el() { return index.getElement(this); }
};
__decorate([
  log.Logger('bal-accordion-trigger')
], AccordionTrigger.prototype, "createLogger", null);
let accordionTriggerIds = 0;
AccordionTrigger.style = {
  css: balAccordionTriggerCss
};

exports.bal_accordion = Accordion;
exports.bal_accordion_details = AccordionDetail;
exports.bal_accordion_summary = AccordionSummary;
exports.bal_accordion_trigger = AccordionTrigger;
