import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';

const NavigationLevelBlockItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
let navigationLevelBlockItemIds = 0;

export { NavigationLevelBlockItem as bal_navigation_level_block_item };
