import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as stopEventBubbling } from './form-input.js';
import { B as BEM } from './bem.js';
import { B as BalScrollHandler } from './scroll.js';
import { b as balBrowser } from './browser.js';
import { d as defineCustomElement$8 } from './bal-button2.js';
import { d as defineCustomElement$7 } from './bal-close2.js';
import { d as defineCustomElement$6 } from './bal-heading2.js';
import { d as defineCustomElement$5 } from './bal-icon2.js';
import { d as defineCustomElement$4 } from './bal-popover2.js';
import { d as defineCustomElement$3 } from './bal-popover-content2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const NavigationPopover = proxyCustomElement(class NavigationPopover extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.toggle = (ev) => {
      stopEventBubbling(ev);
      this.clearTimeouts();
      if (!this.isActive) {
        BalScrollHandler.disableSmoothScrolling();
        this.scrollToTopTimer = setTimeout(() => {
          if (balBrowser.hasWindow) {
            window.scrollTo(0, 0);
          }
        }, 0);
      }
      this.setActiveTimer = setTimeout(() => {
        BalScrollHandler.enableSmoothScrolling();
        this.isActive = !this.isActive;
      }, 100);
    };
    this.isActive = false;
    this.label = '';
    this.inverted = false;
    this.icon = undefined;
    this.backdrop = false;
    this.size = '';
    this.inactiveColor = 'light';
    this.activeColor = 'primary';
    this.heading = undefined;
    this.closable = true;
    this.contentRadius = 'normal';
    this.position = 'bottom-start';
    this.contentWidth = 0;
    this.contentMinWidth = 0;
    this.offsetY = 0;
    this.square = false;
    this.contentNoShadow = false;
    this.contentExpanded = false;
    this.arrow = false;
    this.mobileTop = false;
  }
  clearTimeouts() {
    if (this.scrollToTopTimer) {
      clearTimeout(this.scrollToTopTimer);
    }
    if (this.setActiveTimer) {
      clearTimeout(this.setActiveTimer);
    }
  }
  render() {
    const navPopoverEl = BEM.block('nav').element('popover');
    return (h(Host, { class: Object.assign(Object.assign({}, navPopoverEl.class()), { control: true }) }, h("bal-popover", { active: this.isActive, onBalChange: event => (this.isActive = event.detail), arrow: this.arrow, backdrop: this.backdrop, position: this.position, offsetY: this.offsetY, "mobile-top": this.mobileTop }, h("bal-button", { "bal-popover-trigger": true, icon: this.icon, size: this.size, inverted: this.inverted, color: this.isActive ? this.activeColor : this.inactiveColor, square: this.square, onClick: this.toggle, "aria-haspopup": "true", class: `bal-navigation-popover__button bal-navigation-popover__button-${this.isActive ? this.activeColor : this.inactiveColor}` }, this.label), h("bal-popover-content", { radius: this.contentRadius, "content-width": this.contentWidth, "content-min-width": this.contentMinWidth, "no-shadow": this.contentNoShadow, expanded: this.contentExpanded, "mobile-top": this.mobileTop }, (this.closable || this.heading) && (h("div", { class: Object.assign({}, navPopoverEl.element('head').class()) }, this.heading && (h("bal-heading", { space: "none", level: "h4" }, this.heading)), this.closable && h("bal-close", { onClick: () => (this.isActive = !this.isActive) }))), h("slot", null)))));
  }
}, [4, "bal-navigation-popover", {
    "label": [1],
    "inverted": [4],
    "icon": [1],
    "backdrop": [4],
    "size": [1],
    "inactiveColor": [1, "inactive-color"],
    "activeColor": [1, "active-color"],
    "heading": [1],
    "closable": [4],
    "contentRadius": [1, "content-radius"],
    "position": [1],
    "contentWidth": [2, "content-width"],
    "contentMinWidth": [2, "content-min-width"],
    "offsetY": [2, "offset-y"],
    "square": [4],
    "contentNoShadow": [4, "content-no-shadow"],
    "contentExpanded": [4, "content-expanded"],
    "arrow": [4],
    "mobileTop": [4, "mobile-top"],
    "isActive": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-popover", "bal-button", "bal-close", "bal-heading", "bal-icon", "bal-popover", "bal-popover-content", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-popover":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationPopover);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-popover-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalNavigationPopover = NavigationPopover;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationPopover, defineCustomElement };
