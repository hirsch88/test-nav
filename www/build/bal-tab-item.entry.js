import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';

const TabItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
let panelID = 0;

export { TabItem as bal_tab_item };
