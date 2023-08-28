import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { d as defineCustomElement$5 } from './bal-card2.js';
import { d as defineCustomElement$4 } from './bal-card-content2.js';
import { d as defineCustomElement$3 } from './bal-heading2.js';
import { d as defineCustomElement$2 } from './bal-navigation-menu-list2.js';
import { d as defineCustomElement$1 } from './bal-navigation-menu-list-item2.js';

const NavigationMenu = proxyCustomElement(class NavigationMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.linkHref = undefined;
    this.linkName = undefined;
    this.target = '_self';
    this.elements = [];
    this.tracking = {};
  }
  render() {
    const navMenuEl = BEM.block('nav').element('menu');
    return (h(Host, { class: Object.assign({}, navMenuEl.class()) }, this.linkHref && this.linkName && (h("div", { class: Object.assign({}, navMenuEl.element('link').class()) }, h("a", Object.assign({ href: this.linkHref, target: this.target }, this.tracking), this.linkName, " \u279E"))), this.elements && (h("div", { style: { overflow: 'hidden' } }, h("div", { class: Object.assign({ 'columns is-multiline': true }, navMenuEl.element('wrapper').class()) }, this.elements.some(subLevel => subLevel.color === 'white') && (h("div", { class: {
        'bal-nav__menu__white-list__wrapper column is-full is-6-desktop is-two-thirds-widescreen': true,
      } }, h("div", { class: Object.assign({}, navMenuEl.element('white-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'white')
      .map(block => {
      var _a;
      return (block && (h("bal-navigation-menu-list", { headline: block.label, href: block.link, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label)))))));
    })))), this.elements.some(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green') && (h("div", { class: Object.assign({ 'column is-full is-6-desktop is-one-third-widescreen': true }, navMenuEl.element('grey-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green')
      .map(block => {
      var _a;
      return (h("bal-navigation-menu-list", { headline: block.label, href: block.link, color: block.color, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label))))));
    }))))))));
  }
}, [0, "bal-navigation-menu", {
    "linkHref": [1, "link-href"],
    "linkName": [1, "link-name"],
    "target": [1],
    "elements": [16],
    "tracking": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-menu", "bal-card", "bal-card-content", "bal-heading", "bal-navigation-menu-list", "bal-navigation-menu-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMenu);
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-navigation-menu-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "bal-navigation-menu-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { NavigationMenu as N, defineCustomElement as d };
