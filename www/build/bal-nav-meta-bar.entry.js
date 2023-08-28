import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { b as balBrowser } from './browser-9199b5e2.js';

const balNavMetaBarCss = ":root{--bal-nav-meta-bar-variant-primary-background:var(--bal-color-primary);--bal-nav-meta-bar-variant-primary-shadow:none;--bal-nav-meta-bar-variant-white-background:var(--bal-color-white);--bal-nav-meta-bar-variant-white-shadow:0 5px 15px rgba(0,0,0,.1);--bal-nav-meta-bar-variant-grey-background:var(--bal-color-grey-2);--bal-nav-meta-bar-variant-grey-shadow:none}.bal-nav-meta-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;z-index:var(--bal-z-index-navigation)}.bal-nav-meta-bar .container{height:100%}.bal-nav-meta-bar--size-normal{padding-top:.5rem;padding-bottom:.5rem;height:4rem;max-height:4rem}.bal-nav-meta-bar--size-small{min-height:3rem}.bal-nav-meta-bar--position-fixed-top{position:fixed;top:0;left:0;width:100%}.bal-nav-meta-bar--position-fixed-bottom{position:fixed;bottom:0;left:0;width:100%}.bal-nav-meta-bar--variant-primary{background:var(--bal-nav-meta-bar-variant-primary-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-primary-shadow);box-shadow:var(--bal-nav-meta-bar-variant-primary-shadow)}.bal-nav-meta-bar--variant-grey{background:var(--bal-nav-meta-bar-variant-grey-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-grey-shadow);box-shadow:var(--bal-nav-meta-bar-variant-grey-shadow)}.bal-nav-meta-bar--variant-white{background:var(--bal-nav-meta-bar-variant-white-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-white-shadow);box-shadow:var(--bal-nav-meta-bar-variant-white-shadow)}@media screen and (max-width: 768px){.bal-nav-meta-bar--hidden-mobile{display:hidden;visibility:hidden}}@media screen and (max-width: 768px){.bal-nav-meta-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-nav-meta-bar--hidden-tablet{display:hidden;visibility:hidden}}.bal-nav-meta-bar .button-label{word-break:keep-all !important}.bal-nav-meta-bar-transform{will-change:transition;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out;position:fixed;display:block;width:100%;top:0;z-index:var(--bal-z-index-navigation)}.bal-nav-meta-bar-transform-small{-webkit-transform:translateY(-3rem);transform:translateY(-3rem)}.bal-nav-meta-bar-transform-normal{-webkit-transform:translateY(-5rem);transform:translateY(-5rem)}";

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
const NavMetaBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navMetaBarId = `bal-nav-meta-bar-${NavMetaBarIds++}`;
    this.previousY = 0;
    this.isHidden = false;
    this.variant = 'primary';
    this.size = 'normal';
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  handleScroll() {
    if (balBrowser.hasWindow && balBrowser.hasDocument && this.position === 'sticky-top') {
      const maxScrollHeight = document.body.scrollHeight - document.body.clientHeight;
      const isOnTop = 0 >= window.scrollY;
      const isOverViewportTop = 0 > window.scrollY;
      const isOverViewportBottom = maxScrollHeight <= window.scrollY;
      const didMoveDownwards = window.scrollY > this.previousY;
      this.isHidden = !isOnTop && (didMoveDownwards || isOverViewportBottom || isOverViewportTop);
      this.previousY = window.scrollY;
      const transformElements = Array.from(document.querySelectorAll('.bal-nav-meta-bar-transform'));
      if (transformElements.length > 0) {
        for (let index = 0; index < transformElements.length; index++) {
          const transformElement = transformElements[index];
          if (this.isHidden) {
            if (this.size === 'small') {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-small`);
            }
            else {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-normal`);
            }
          }
          else {
            transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
            transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
          }
        }
      }
    }
  }
  render() {
    const block = BEM.block('nav-meta-bar');
    return (h(Host, { id: this.navMetaBarId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class()), block.modifier(`size-${this.size}`).class()), block.modifier(`position-${this.position}`).class(this.position !== 'none')), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')) }, h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-meta-bar')
], NavMetaBar.prototype, "createLogger", null);
let NavMetaBarIds = 0;
NavMetaBar.style = {
  css: balNavMetaBarCss
};

export { NavMetaBar as bal_nav_meta_bar };
