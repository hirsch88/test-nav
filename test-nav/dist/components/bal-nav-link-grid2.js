import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { L as Logger } from './log.js';
import { B as BEM } from './bem.js';

const balNavLinkGridCss = ".bal-nav-link-grid{--bal-column-gap:0;margin-top:0}@media screen and (min-width: 1024px){.bal-nav-link-grid{--bal-column-gap:1.5rem}}.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-none)}}";

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
const NavigationLinkGrid = proxyCustomElement(class NavigationLinkGrid extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), { 'columns is-multiline': true }) }, h("slot", null)));
  }
  static get style() { return {
    css: balNavLinkGridCss
  }; }
}, [36, "bal-nav-link-grid"]);
__decorate([
  Logger('bal-nav-link-grid')
], NavigationLinkGrid.prototype, "createLogger", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-nav-link-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-nav-link-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLinkGrid);
      }
      break;
  } });
}

export { NavigationLinkGrid as N, defineCustomElement as d };
