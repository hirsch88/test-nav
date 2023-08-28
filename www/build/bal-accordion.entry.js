import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { l as raf, t as transitionEndAsync, m as debounceEvent, w as waitForComponent } from './helpers-18cc89f4.js';
import { L as ListenToConfig } from './index-6394c1a6.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';

const balAccordionCss = ".bal-accordion{display:block;position:relative;width:100%}.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion--card-v1,.bal-accordion--card-v2{margin-top:var(--bal-space-desktop-medium)}}.bal-accordion--card-v2{padding-left:var(--bal-space-medium);padding-right:var(--bal-space-medium);padding-bottom:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion--card-v2{padding-left:var(--bal-space-tablet-medium);padding-right:var(--bal-space-tablet-medium);padding-bottom:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion--card-v2{padding-left:var(--bal-space-desktop-medium);padding-right:var(--bal-space-desktop-medium);padding-bottom:var(--bal-space-desktop-medium)}}.bal-accordion__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.bal-accordion__trigger--card{margin-left:var(--bal-space-medium);margin-right:var(--bal-space-medium);margin-bottom:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion__trigger--card{margin-left:var(--bal-space-tablet-medium);margin-right:var(--bal-space-tablet-medium);margin-bottom:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion__trigger--card{margin-left:var(--bal-space-desktop-medium);margin-right:var(--bal-space-desktop-medium);margin-bottom:var(--bal-space-desktop-medium)}}.bal-accordion__content--card{margin-left:var(--bal-space-medium);margin-right:var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-accordion__content--card{margin-left:var(--bal-space-tablet-medium);margin-right:var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-accordion__content--card{margin-left:var(--bal-space-desktop-medium);margin-right:var(--bal-space-desktop-medium)}}.bal-accordion--animated{-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion--animated .bal-accordion__content{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion__content{overflow:hidden;will-change:max-height}.bal-accordion--collapsing .bal-accordion__content{max-height:0 !important}.bal-accordion--collapsed .bal-accordion__content{display:none}.bal-accordion--expanding .bal-accordion__content{max-height:0}@media (prefers-reduced-motion: reduce){.bal-accordion,.bal-accordion__content{-webkit-transition:none !important;transition:none !important}}";

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
const Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balWillAnimate = createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = createEvent(this, "balDidAnimate", 7);
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
        raf(() => {
          this.setState(8);
          this.currentRaf = raf(async () => {
            const contentHeight = detailsWrapperElement.offsetHeight;
            const waitForTransition = transitionEndAsync(detailsElement, 300);
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
        this.currentRaf = raf(async () => {
          const contentHeight = detailsElement.offsetHeight;
          detailsElement.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(detailsElement, 300);
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
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  async connectedCallback() {
    this.debounceChanged();
    await waitForComponent(this.el);
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
    const block = BEM.block('accordion');
    return (h(Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('card-v2').class(this.card)), block.modifier('animated').class(this.animated)) }));
  }
  renderVersion1() {
    const label = this.active ? this.closeLabel : this.openLabel;
    const icon = this.active ? this.closeIcon : this.openIcon;
    const block = BEM.block('accordion');
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('card-v1').class(this.card)), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, h("div", { class: Object.assign({}, block.element('wrapper').class()) }, h("div", { class: Object.assign(Object.assign({}, block.element('trigger').class()), block.element('trigger').modifier('card').class(this.card)), "data-testid": "bal-accordion-summary" }, h("bal-button", { id: `${this.componentId}-button`, "aria-controls": `${this.componentId}-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, color: 'info', icon: icon, onClick: this.onTriggerClickV1 }, label)), h("div", { id: `${this.componentId}-content`, "aria-labelledby": `${this.componentId}-button`, role: "region", part: contentPart, class: Object.assign(Object.assign({}, block.element('content').class()), block.element('content').modifier('card').class(this.card)), ref: contentEl => (this.contentEl = contentEl) }, h("div", { id: `${this.componentId}-content-wrapper`, "data-testid": "bal-accordion-details", class: Object.assign({}, block.element('content').element('wrapper').class()), ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "active": ["activeChanged"],
    "debounce": ["debounceChanged"]
  }; }
};
__decorate([
  Logger('bal-accordion')
], Accordion.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], Accordion.prototype, "configChanged", null);
let accordionIds = 0;
Accordion.style = {
  css: balAccordionCss
};

export { Accordion as bal_accordion };
