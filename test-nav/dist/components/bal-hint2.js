import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { L as ListenToConfig } from './config.decorator.js';
import { B as BEM } from './bem.js';
import { p as preventDefault } from './utils.js';
import { B as BalScrollHandler } from './scroll.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { d as defineCustomElement$6 } from './bal-button2.js';
import { d as defineCustomElement$5 } from './bal-button-group2.js';
import { d as defineCustomElement$4 } from './bal-icon2.js';
import { d as defineCustomElement$3 } from './bal-popover2.js';
import { d as defineCustomElement$2 } from './bal-popover-content2.js';
import { d as defineCustomElement$1 } from './bal-spinner2.js';

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
const Hint = proxyCustomElement(class Hint extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bodyScrollHandler = new BalScrollHandler();
    this.onPopoverChange = (ev) => {
      this.isActive = ev.detail;
      preventDefault(ev);
    };
    this.isActive = false;
    this.innerCloseLabel = 'Close';
    this.isMobile = balBreakpoints.isMobile;
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
    const block = BEM.block('hint');
    const elIcon = block.element('icon');
    const elContent = block.element('content');
    const elButtons = elContent.element('buttons');
    const padding = this.isMobile ? 0 : 8;
    const offsetY = this.isMobile ? 0 : 16;
    const TriggerIcon = () => {
      return (h("bal-icon", { class: Object.assign({}, elIcon.class()), "data-testid": "bal-hint-trigger", "bal-popover-trigger": true, "aria-haspopup": "true", role: "button", name: "info-circle", onClick: () => this.toggle() }));
    };
    const HintContent = () => {
      return (h("div", { class: Object.assign({}, elContent.class()), "data-testid": "bal-hint-content" }, h("div", { ref: el => (this.hintContentEl = el) }), h("bal-button-group", { class: Object.assign(Object.assign({}, elButtons.class()), elButtons.modifier('is-hidden-desktop').class(this.small)) }, h("bal-button", { "data-testid": "bal-hint-close", color: "info", onClick: () => this.dismiss() }, this.closeLabel ? this.closeLabel : this.innerCloseLabel))));
    };
    const MobileOverlay = () => {
      const elOverlay = block.element('overlay');
      return (h("div", { class: Object.assign({}, elOverlay.class()) }, h(TriggerIcon, null), h("div", { class: Object.assign(Object.assign({}, elOverlay.element('content').class()), elOverlay.element('content').modifier('active').class(this.isActive)) }, h(HintContent, null))));
    };
    const Popover = () => {
      return (h("div", { class: Object.assign({}, block.element('popover').class()) }, h("bal-popover", { hint: true, position: "right", offsetX: 0, offsetY: offsetY, padding: padding, ref: el => (this.popoverElement = el), onBalChange: this.onPopoverChange }, h(TriggerIcon, null), h("bal-popover-content", { color: "grey" }, h(HintContent, null)))));
    };
    const HintElement = this.isMobile ? MobileOverlay : Popover;
    return (h(Host, { class: Object.assign({}, block.class()) }, h(HintElement, null), h("div", { ref: el => (this.slotWrapperEl = el), style: { display: 'none' } }, h("slot", null))));
  }
  get element() { return this; }
  static get style() { return {
    css: balHintCss
  }; }
}, [36, "bal-hint", {
    "closeLabel": [1, "close-label"],
    "small": [4],
    "isActive": [32],
    "innerCloseLabel": [32],
    "isMobile": [32],
    "configChanged": [64],
    "toggle": [64],
    "present": [64],
    "dismiss": [64]
  }]);
__decorate([
  ListenToBreakpoints()
], Hint.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], Hint.prototype, "configChanged", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-hint", "bal-button", "bal-button-group", "bal-icon", "bal-popover", "bal-popover-content", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-hint":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Hint);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-button-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-popover-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Hint as H, defineCustomElement as d };
