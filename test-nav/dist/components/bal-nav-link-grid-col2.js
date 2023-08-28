import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { L as Logger } from './log.js';
import { B as BEM } from './bem.js';

const balNavLinkGridColCss = ".bal-nav-link-grid-col{padding:0}@media screen and (min-width: 1024px){.bal-nav-link-grid-col{padding-top:0;padding-bottom:0;padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}}.bal-nav-link-grid-col .bal-nav-link-group{margin-bottom:var(--bal-space-normal);padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}@media screen and (min-width: 1440px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}}.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{margin:0;width:100%}@media screen and (min-width: 1024px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{padding-left:0;padding-right:0}}@media screen and (min-width: 1440px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{width:50%}}";

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
const NavigationLinkGridCol = proxyCustomElement(class NavigationLinkGridCol extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.staticCol = false;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid-col');
    const innerEl = block.element('inner');
    const widescreenPositionClass = this.staticCol ? 'is-one-third-widescreen' : 'is-two-thirds-widescreen';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-static').class(this.staticCol)), { 'column is-full is-6-desktop is-half-desktop': true, [`${widescreenPositionClass}`]: true }) }, h("div", { class: Object.assign({}, innerEl.class()) }, h("slot", null))));
  }
  static get style() { return {
    css: balNavLinkGridColCss
  }; }
}, [36, "bal-nav-link-grid-col", {
    "staticCol": [4, "static-col"]
  }]);
__decorate([
  Logger('bal-nav-link-grid-col')
], NavigationLinkGridCol.prototype, "createLogger", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-nav-link-grid-col"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-nav-link-grid-col":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLinkGridCol);
      }
      break;
  } });
}

export { NavigationLinkGridCol as N, defineCustomElement as d };
