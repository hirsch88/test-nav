import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as inheritTrackingAttributes } from './attributes.js';
import { r as readSubLevels } from './level.utils.js';

const NavigationLevelBlock = proxyCustomElement(class NavigationLevelBlock extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balClick = createEvent(this, "balClick", 7);
    this.inheritAttributes = {};
    this.label = '';
    this.value = `block-value-${navigationLevelBlockIds++}`;
    this.color = 'white';
    this.link = undefined;
    this.linkLabel = undefined;
    this.target = '_self';
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    const subLevels = await readSubLevels(this.el, 'bal-navigation-level-block-item');
    return {
      type: 'block',
      value: this.value,
      label: this.label,
      link: this.link,
      target: this.target,
      linkLabel: this.linkLabel,
      color: this.color,
      subLevels,
      trackingData: this.inheritAttributes,
      onClick: (ev) => this.balClick.emit(ev),
    };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-navigation-level-block", {
    "label": [1],
    "value": [1],
    "color": [1],
    "link": [1],
    "linkLabel": [1, "link-label"],
    "target": [1],
    "getLevelInfo": [64]
  }]);
let navigationLevelBlockIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-level-block"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-level-block":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLevelBlock);
      }
      break;
  } });
}

const BalNavigationLevelBlock = NavigationLevelBlock;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationLevelBlock, defineCustomElement };
