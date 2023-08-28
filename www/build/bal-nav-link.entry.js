import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { L as Logger } from './log-01623e2c.js';
import { B as BEM } from './bem-1b28532d.js';
import './browser-9199b5e2.js';

const balNavLinkCss = "@media (hover: hover)and (pointer: fine){button.bal-nav-link__native:focus-visible,a.bal-nav-link__native:focus-visible{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}:root{--bal-nav-link-text-color:var(--bal-link-color);--bal-nav-link-text-color-hover:var(--bal-link-color-hover);--bal-nav-link-text-color-active:var(--bal-link-color-active)}.bal-nav-link{display:block}.bal-nav-link:not(:last-child){margin-bottom:var(--bal-space-x-small)}.bal-nav-link--variant-title:not(:last-child){margin-bottom:var(--bal-space-normal) !important}.bal-nav-link--variant-overview:not(:last-child){margin-bottom:var(--bal-space-none) !important}@media screen and (min-width: 1024px){.bal-nav-link--variant-overview:not(:last-child){margin-bottom:var(--bal-space-normal) !important}}.bal-nav-link__native{display:inline;color:var(--bal-nav-link-text-color);font-size:var(--bal-size-normal);line-height:var(--bal-body-line-height);font-family:var(--bal-font-family-text);padding:0;border:none;background:none}.bal-nav-link__native--variant-title{font-family:var(--bal-font-family-title);font-size:var(--bal-size-normal);font-weight:var(--bal-weight-bold);text-decoration:none;margin-bottom:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link__native--variant-title{font-size:var(--bal-size-xx-large)}}.bal-nav-link__native--variant-overview{font-size:var(--bal-size-small);font-weight:var(--bal-weight-bold)}.bal-nav-link__native--selected{-webkit-text-decoration:var(--bal-link-text-decoration) !important;text-decoration:var(--bal-link-text-decoration) !important;text-decoration-thickness:1px !important;text-underline-offset:2px !important}button.bal-nav-link__native,a.bal-nav-link__native{cursor:pointer}@media (hover: hover)and (pointer: fine){button.bal-nav-link__native:hover,a.bal-nav-link__native:hover{-webkit-text-decoration:var(--bal-link-text-decoration);text-decoration:var(--bal-link-text-decoration);text-decoration-thickness:1px;color:var(--bal-nav-link-text-color-hover);text-underline-offset:2px}}button.bal-nav-link__native:focus-visible,a.bal-nav-link__native:focus-visible{border-radius:var(--bal-radius-normal)}button.bal-nav-link__native:active,a.bal-nav-link__native:active{-webkit-text-decoration:var(--bal-link-text-decoration);text-decoration:var(--bal-link-text-decoration);text-decoration-thickness:1px;color:var(--bal-nav-link-text-color-active);text-underline-offset:2px}";

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
const NavigationLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = '';
    this.selected = false;
    this.clickable = false;
    this.href = undefined;
    this.target = '_self';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link');
    const { href, target } = this;
    const hasLink = href !== undefined && href !== '';
    const hasVariant = this.variant !== '';
    const Link = hasLink ? 'a' : this.clickable ? 'button' : 'span';
    let linkAttributes = {};
    if (hasLink) {
      linkAttributes = { href, target };
    }
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class(hasVariant)) }, h(Link, Object.assign({ "data-test": "bal-nav-link", class: Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier(`variant-${this.variant}`).class(hasVariant)), block
        .element('native')
        .modifier('selected')
        .class(this.selected && (hasLink || this.clickable))) }, linkAttributes), h("slot", null))));
  }
};
__decorate([
  Logger('bal-nav-link')
], NavigationLink.prototype, "createLogger", null);
NavigationLink.style = {
  css: balNavLinkCss
};

export { NavigationLink as bal_nav_link };
