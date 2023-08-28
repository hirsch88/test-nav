import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { r as readSubLevels } from './level.utils.js';
import { a as inheritTrackingAttributes } from './attributes.js';

const NavigationLevelMeta = proxyCustomElement(class NavigationLevelMeta extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balClick = createEvent(this, "balClick", 7);
    this.inheritAttributes = {};
    this.label = '';
    this.value = `meta-value-${navigationLevelMetaIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.isTabLink = undefined;
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    const subLevels = await readSubLevels(this.el, 'bal-navigation-level-main');
    return {
      type: 'meta',
      value: this.value,
      label: this.label,
      link: this.link,
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
}, [4, "bal-navigation-level-meta", {
    "label": [1],
    "value": [1],
    "link": [1],
    "linkLabel": [1, "link-label"],
    "isTabLink": [4, "is-tab-link"],
    "getLevelInfo": [64]
  }]);
let navigationLevelMetaIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-level-meta"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-level-meta":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLevelMeta);
      }
      break;
  } });
}

const BalNavigationLevelMeta = NavigationLevelMeta;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationLevelMeta, defineCustomElement };
