import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as inheritTrackingAttributes } from './attributes.js';

const TabItem = proxyCustomElement(class TabItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.inheritAttributes = {};
    this.tabPanelID = `bal-tab-panel-id-${panelID++}`;
    this.isActive = false;
    this.active = false;
    this.value = '';
    this.label = '';
    this.href = '';
    this.target = '_self';
    this.bubble = false;
    this.disabled = false;
    this.hidden = false;
    this.prevent = false;
    this.icon = undefined;
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getOptions() {
    return this.options;
  }
  async setActive(active) {
    this.isActive = active;
  }
  get options() {
    return {
      tabPanelID: this.tabPanelID,
      value: this.value,
      icon: this.icon,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      hidden: this.hidden,
      bubble: this.bubble,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    };
  }
  render() {
    return (h(Host, { id: this.tabPanelID, role: "tabpanel", "aria-label": this.label, "aria-hidden": !this.isActive ? 'true' : 'false', tabindex: this.isActive ? '0' : '-1', class: {
        'bal-tab-item': true,
        'bal-tab-item--active': this.isActive,
      } }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-tab-item", {
    "active": [516],
    "value": [513],
    "label": [513],
    "href": [513],
    "target": [1],
    "bubble": [520],
    "disabled": [516],
    "hidden": [516],
    "prevent": [4],
    "icon": [513],
    "isActive": [32],
    "getOptions": [64],
    "setActive": [64]
  }]);
let panelID = 0;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-tab-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-tab-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabItem);
      }
      break;
  } });
}

export { TabItem as T, defineCustomElement as d };
