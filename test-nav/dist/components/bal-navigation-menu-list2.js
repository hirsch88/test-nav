import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { d as defineCustomElement$3 } from './bal-card2.js';
import { d as defineCustomElement$2 } from './bal-card-content2.js';
import { d as defineCustomElement$1 } from './bal-heading2.js';

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
const NavigationMenuList = proxyCustomElement(class NavigationMenuList extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.setHeadingLevel = () => {
      if (balBreakpoints.isTouch) {
        this.headingLevel = 'h5';
        return;
      }
      this.headingLevel = 'h3';
    };
    this.color = 'white';
    this.headline = undefined;
    this.href = undefined;
    this.target = '_self';
    this.tracking = {};
    this.headingLevel = undefined;
  }
  breakpointListener(_breakpoints) {
    this.setHeadingLevel();
  }
  connectedCallback() {
    this.setHeadingLevel();
  }
  render() {
    const navMenuListEl = BEM.block('nav').element('menu').element('list');
    return (h(Host, { class: Object.assign(Object.assign({}, navMenuListEl.class()), navMenuListEl.modifier(`context-${this.color}`).class()) }, h("bal-card", { class: Object.assign({}, navMenuListEl.element('card').class()), flat: true, color: this.color === 'grey' ||
        this.color === 'yellow' ||
        this.color === 'red' ||
        this.color === 'purple' ||
        this.color === 'green'
        ? this.color
        : '' }, h("bal-card-content", null, this.href ? (h("a", Object.assign({ href: this.href, target: this.target }, this.tracking), h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline))) : (h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline)), h("slot", { name: "links" })))));
  }
}, [4, "bal-navigation-menu-list", {
    "color": [1],
    "headline": [1],
    "href": [1],
    "target": [1],
    "tracking": [16],
    "headingLevel": [32]
  }]);
__decorate([
  ListenToBreakpoints()
], NavigationMenuList.prototype, "breakpointListener", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-menu-list", "bal-card", "bal-card-content", "bal-heading"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-menu-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMenuList);
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { NavigationMenuList as N, defineCustomElement as d };
