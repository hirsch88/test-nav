import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';
import { L as ListenToResize } from './resize.decorator.js';
import { B as BalScrollHandler } from './scroll.js';

const balNavMenuFlyoutCss = ":root{--bal-nav-menu-flyout-border-background:var(--bal-color-grey)}.bal-nav-menu-flyout{position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;padding-bottom:2.5rem;overflow-y:auto;max-height:calc(var(--bal-app-height, 100%) - 90px - 48px - 16px);width:calc(100% + 1rem + 1rem);margin-left:-1rem;margin-right:-1rem}.bal-nav-menu-flyout .bal-nav-menu-flyout__line{position:-webkit-sticky;position:sticky;width:100%;left:0;top:0;height:1px;background-color:var(--bal-color-grey);margin-bottom:2.5rem}@media screen and (min-width: 1440px)and (max-width: 1539px){.bal-nav-menu-flyout .bal-nav-menu-flyout__line{width:calc(100% - 2rem);left:1rem}}@media screen and (min-width: 769px),print{.bal-nav-menu-flyout{width:calc(100% + 2.5rem + 2.5rem);margin-left:-2.5rem;margin-right:-2.5rem}}@media screen and (min-width: 1024px){.bal-nav-menu-flyout{width:calc(100% + 3rem + 3rem);margin-left:-3rem;margin-right:-3rem}}@media screen and (min-width: 1440px){.bal-nav-menu-flyout{max-height:calc(var(--bal-app-height, 100%) - 96px - 48px - 16px)}}";

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
const NavMenuFlyout = proxyCustomElement(class NavMenuFlyout extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.navMenuFlyoutId = `bal-nav-menu-flyout-${NavMenuFlyOutIds++}`;
    this.bodyScrollHandler = new BalScrollHandler();
    this.isHidden = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  resizeListener() {
    if (this.isFlyoutScrollable()) {
      this.bodyScrollHandler.disable();
    }
    else {
      this.bodyScrollHandler.enable();
    }
  }
  isFlyoutScrollable() {
    var _a, _b;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.scrollHeight) > ((_b = this.el) === null || _b === void 0 ? void 0 : _b.clientHeight);
  }
  render() {
    const block = BEM.block('nav-menu-flyout');
    const line = block.element('line');
    return (h(Host, { id: this.navMenuFlyoutId, class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, line.class()) }), h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return {
    css: balNavMenuFlyoutCss
  }; }
}, [36, "bal-nav-menu-flyout", {
    "isHidden": [32]
  }]);
__decorate([
  Logger('bal-nav-menu-flyout')
], NavMenuFlyout.prototype, "createLogger", null);
__decorate([
  ListenToResize()
], NavMenuFlyout.prototype, "resizeListener", null);
let NavMenuFlyOutIds = 0;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-nav-menu-flyout"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-nav-menu-flyout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavMenuFlyout);
      }
      break;
  } });
}

export { NavMenuFlyout as N, defineCustomElement as d };
