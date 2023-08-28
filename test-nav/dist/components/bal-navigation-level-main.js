import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { r as readSubLevels } from './level.utils.js';
import { a as inheritTrackingAttributes } from './attributes.js';

const NavigationLevelMain = proxyCustomElement(class NavigationLevelMain extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balClick = createEvent(this, "balClick", 7);
    this.inheritAttributes = {};
    this.label = '';
    this.value = `main-value-${navigationLevelMainIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.isTabLink = false;
    this.target = '_self';
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    const subLevels = await readSubLevels(this.el, 'bal-navigation-level-block');
    return {
      type: 'main',
      value: this.value,
      label: this.label,
      link: this.link,
      target: this.target,
      linkLabel: this.linkLabel,
      isTabLink: this.isTabLink,
      subLevels,
      trackingData: this.inheritAttributes,
      onClick: (ev) => this.balClick.emit(ev),
    };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-navigation-level-main", {
    "label": [1],
    "value": [1],
    "link": [1],
    "linkLabel": [1, "link-label"],
    "isTabLink": [4, "is-tab-link"],
    "target": [1],
    "getLevelInfo": [64]
  }]);
let navigationLevelMainIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-level-main"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-level-main":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLevelMain);
      }
      break;
  } });
}

const BalNavigationLevelMain = NavigationLevelMain;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationLevelMain, defineCustomElement };
