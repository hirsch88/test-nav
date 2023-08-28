'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
const bem = require('./bem-5d122a5c.js');
const utils = require('./utils-2c4fb246.js');
const scroll = require('./scroll-1d66154c.js');
const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');
const breakpoints_decorator = require('./breakpoints.decorator-7aae4c5f.js');
require('./index-843a2913.js');
require('./browser-791d6902.js');
require('./index-e6a233be.js');
require('./helpers-83a73189.js');
require('./icons.constant-800d686b.js');
require('./device-76e9eca9.js');
require('./listener-4161102f.js');
require('./tokens.esm-505d1e8f.js');

const balHintCss = ":root{--bal-hint-content-background:var(--bal-color-grey-2)}.bal-hint{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}.bal-hint__icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}@media (hover: hover)and (pointer: fine){.bal-hint__icon:hover svg,.bal-hint__icon:hover g,.bal-hint__icon:hover path,.bal-hint__icon:hover circle,.bal-hint__icon:focus svg,.bal-hint__icon:focus g,.bal-hint__icon:focus path,.bal-hint__icon:focus circle{fill:var(--bal-color-light-blue-5)}}.bal-hint__content{background:var(--bal-hint-content-background);display:-ms-flexbox;display:flex;gap:1.5rem;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width: 768px){.bal-hint__content{padding:1.25rem;min-height:100%}.bal-hint__content>div{-ms-flex:1;flex:1}}.bal-hint__content__title{display:block;margin-bottom:1rem}@media screen and (min-width: 769px),print{.bal-hint__content__buttons--is-hidden-desktop{display:none !important}}.bal-hint__overlay__content{position:fixed;display:none;overflow:auto;top:0;left:0;right:0;bottom:0;z-index:var(--bal-z-index-popup)}.bal-hint__overlay__content--active{display:block}";

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
const Hint = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bodyScrollHandler = new scroll.BalScrollHandler();
    this.onPopoverChange = (ev) => {
      this.isActive = ev.detail;
      utils.preventDefault(ev);
    };
    this.isActive = false;
    this.innerCloseLabel = 'Close';
    this.isMobile = breakpoints_subject.balBreakpoints.isMobile;
    this.closeLabel = undefined;
    this.small = false;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  componentDidRender() {
    this.updateContent();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  breakpointListener(breakpoints) {
    const isCurrentMobile = breakpoints.mobile;
    if (isCurrentMobile !== this.isMobile) {
      this.isActive = false;
    }
    this.isMobile = isCurrentMobile;
  }
  async configChanged(state) {
    if (!this.closeLabel) {
      switch (state.language) {
        case 'de':
          this.innerCloseLabel = 'Schliessen';
          break;
        case 'fr':
          this.innerCloseLabel = 'Fermer';
          break;
        case 'it':
          this.innerCloseLabel = 'Chiudere';
          break;
        case 'nl':
          this.innerCloseLabel = 'Sluiten';
          break;
        default:
          this.innerCloseLabel = 'Close';
          break;
      }
    }
  }
  async toggle() {
    if (this.isActive) {
      this.dismiss();
    }
    else {
      this.present();
    }
  }
  async present() {
    if (this.popoverElement) {
      this.popoverElement.present();
    }
    if (this.isMobile) {
      this.bodyScrollHandler.disable();
    }
    this.isActive = true;
  }
  async dismiss() {
    if (this.popoverElement) {
      this.popoverElement.dismiss();
    }
    if (this.isMobile) {
      this.bodyScrollHandler.enable();
    }
    this.isActive = false;
  }
  updateContent() {
    if (this.hintContentEl && this.slotWrapperEl) {
      this.hintContentEl.innerHTML = this.slotWrapperEl.innerHTML;
    }
  }
  render() {
    const block = bem.BEM.block('hint');
    const elIcon = block.element('icon');
    const elContent = block.element('content');
    const elButtons = elContent.element('buttons');
    const padding = this.isMobile ? 0 : 8;
    const offsetY = this.isMobile ? 0 : 16;
    const TriggerIcon = () => {
      return (index.h("bal-icon", { class: Object.assign({}, elIcon.class()), "data-testid": "bal-hint-trigger", "bal-popover-trigger": true, "aria-haspopup": "true", role: "button", name: "info-circle", onClick: () => this.toggle() }));
    };
    const HintContent = () => {
      return (index.h("div", { class: Object.assign({}, elContent.class()), "data-testid": "bal-hint-content" }, index.h("div", { ref: el => (this.hintContentEl = el) }), index.h("bal-button-group", { class: Object.assign(Object.assign({}, elButtons.class()), elButtons.modifier('is-hidden-desktop').class(this.small)) }, index.h("bal-button", { "data-testid": "bal-hint-close", color: "info", onClick: () => this.dismiss() }, this.closeLabel ? this.closeLabel : this.innerCloseLabel))));
    };
    const MobileOverlay = () => {
      const elOverlay = block.element('overlay');
      return (index.h("div", { class: Object.assign({}, elOverlay.class()) }, index.h(TriggerIcon, null), index.h("div", { class: Object.assign(Object.assign({}, elOverlay.element('content').class()), elOverlay.element('content').modifier('active').class(this.isActive)) }, index.h(HintContent, null))));
    };
    const Popover = () => {
      return (index.h("div", { class: Object.assign({}, block.element('popover').class()) }, index.h("bal-popover", { hint: true, position: "right", offsetX: 0, offsetY: offsetY, padding: padding, ref: el => (this.popoverElement = el), onBalChange: this.onPopoverChange }, index.h(TriggerIcon, null), index.h("bal-popover-content", { color: "grey" }, index.h(HintContent, null)))));
    };
    const HintElement = this.isMobile ? MobileOverlay : Popover;
    return (index.h(index.Host, { class: Object.assign({}, block.class()) }, index.h(HintElement, null), index.h("div", { ref: el => (this.slotWrapperEl = el), style: { display: 'none' } }, index.h("slot", null))));
  }
  get element() { return index.getElement(this); }
};
__decorate([
  breakpoints_decorator.ListenToBreakpoints()
], Hint.prototype, "breakpointListener", null);
__decorate([
  config_decorator.ListenToConfig()
], Hint.prototype, "configChanged", null);
Hint.style = {
  css: balHintCss
};

const HintText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const block = bem.BEM.block('hint');
    const elContent = block.element('content');
    const elText = elContent.element('text');
    const elTextField = elText.element('field');
    return (index.h(index.Host, { class: Object.assign({}, elText.class()) }, index.h("p", { class: Object.assign({}, elTextField.class()) }, index.h("slot", null))));
  }
};

const HintTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const block = bem.BEM.block('hint');
    const elContent = block.element('content');
    const elTitle = elContent.element('title');
    const elHeading = elTitle.element('heading');
    return (index.h(index.Host, { class: Object.assign({}, elTitle.class()) }, index.h("h3", { class: Object.assign(Object.assign({}, elHeading.class()), { 'title': true, 'is-size-x-large': true }) }, index.h("span", null, index.h("slot", null)))));
  }
};

exports.bal_hint = Hint;
exports.bal_hint_text = HintText;
exports.bal_hint_title = HintTitle;
