import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMenuListItem = proxyCustomElement(class NavigationMenuListItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.href = undefined;
    this.tracking = {};
    this.target = '_self';
  }
  render() {
    const navMenuListItemEl = BEM.block('nav').element('menu').element('list').element('item');
    return (h(Host, { class: Object.assign({}, navMenuListItemEl.class()) }, h("a", Object.assign({ class: Object.assign({}, navMenuListItemEl.element('link').class()), href: this.href, target: this.target }, this.tracking), h("slot", null))));
  }
}, [4, "bal-navigation-menu-list-item", {
    "href": [1],
    "tracking": [16],
    "target": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-menu-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-menu-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMenuListItem);
      }
      break;
  } });
}

export { NavigationMenuListItem as N, defineCustomElement as d };
