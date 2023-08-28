import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as inheritTrackingAttributes } from './attributes.js';

const NavigationLevelBlockItem = proxyCustomElement(class NavigationLevelBlockItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balClick = createEvent(this, "balClick", 7);
    this.inheritAttributes = {};
    this.label = '';
    this.value = `block-value-${navigationLevelBlockItemIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.target = '_self';
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    return {
      type: 'block-item',
      value: this.value,
      label: this.label,
      link: this.link,
      target: this.target,
      trackingData: this.inheritAttributes,
      onClick: (ev) => this.balClick.emit(ev),
    };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-navigation-level-block-item", {
    "label": [1],
    "value": [1],
    "link": [1],
    "linkLabel": [1, "link-label"],
    "target": [1],
    "getLevelInfo": [64]
  }]);
let navigationLevelBlockItemIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-level-block-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-level-block-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLevelBlockItem);
      }
      break;
  } });
}

const BalNavigationLevelBlockItem = NavigationLevelBlockItem;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationLevelBlockItem, defineCustomElement };
