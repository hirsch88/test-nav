import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';

const balNavMenuBarCss = ":root{--bal-nav-menu-bar-background:var(--bal-color-white);--bal-nav-menu-bar-radius:var(--bal-radius-large);--bal-nav-menu-bar-shadow:0 5px 15px rgba(0,0,0,.1)}.bal-nav-menu-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;z-index:var(--bal-z-index-navigation)}@media screen and (max-width: 768px){.bal-nav-menu-bar--hidden-mobile{display:hidden;visibility:hidden}}@media screen and (max-width: 768px){.bal-nav-menu-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-nav-menu-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 1440px){.bal-nav-menu-bar{position:fixed;margin-top:1rem}}.bal-nav-menu-bar--position-fixed-top{position:fixed}.bal-nav-menu-bar__inner{background:var(--bal-nav-menu-bar-background);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow)}@media screen and (min-width: 1440px){.bal-nav-menu-bar__inner{background:rgba(0,0,0,0);-webkit-box-shadow:none;box-shadow:none}}.bal-nav-menu-bar__inner>.container{min-height:64px}@media screen and (min-width: 1440px){.bal-nav-menu-bar__inner>.container{background:var(--bal-nav-menu-bar-background);border-radius:var(--bal-nav-menu-bar-radius);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow);min-height:80px}}@media screen and (min-width: 1440px)and (max-width: 1539px){.bal-nav-menu-bar__inner>.container{background:rgba(0,0,0,0);-webkit-box-shadow:none;box-shadow:none;min-height:80px}.bal-nav-menu-bar__inner>.container::before{position:absolute;content:\"\";height:100%;top:0;left:1rem;right:1rem;background:var(--bal-nav-menu-bar-background);border-radius:var(--bal-nav-menu-bar-radius);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow)}}.bal-nav-menu-bar .bal-nav__logo{-ms-flex-item-align:start;align-self:flex-start;z-index:1;height:auto;padding-top:.8em}@media screen and (min-width: 1024px){.bal-nav-menu-bar .bal-nav__logo{padding-top:1rem}}@media screen and (min-width: 1440px){.bal-nav-menu-bar .bal-nav__logo{padding-top:1.5rem}}.bal-nav-menu-bar-body-padding{padding-top:1rem}@media screen and (min-width: 1440px){.bal-nav-menu-bar-body-padding{padding-top:7rem}}.bal-nav-menu-bar-body-margin{margin-top:1rem}@media screen and (min-width: 1440px){.bal-nav-menu-bar-body-margin{margin-top:7rem}}.bal-nav-menu-bar-fixed-body-padding{padding-top:8rem}.bal-nav-menu-bar-fixed-body-margin{margin-top:8rem}";

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
const NavMenuBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navMenuBarId = `bal-nav-menu-bar-${NavMenuBarIds++}`;
    this.isHidden = false;
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  get flyoutElement() {
    return this.el.querySelector('bal-nav-menu-flyout');
  }
  render() {
    const block = BEM.block('nav-menu-bar');
    const innerBlock = block.element('inner');
    return (h(Host, { id: this.navMenuBarId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')), block.modifier(`position-${this.position}`).class(this.position !== 'none')) }, h("div", { class: Object.assign({}, innerBlock.class()) }, h("div", { class: {
        container: true,
      } }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-nav-menu-bar')
], NavMenuBar.prototype, "createLogger", null);
let NavMenuBarIds = 0;
NavMenuBar.style = {
  css: balNavMenuBarCss
};

export { NavMenuBar as bal_nav_menu_bar };
