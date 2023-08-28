import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';
import { r as readSubLevels } from './level.utils-61da23f4.js';

const NavigationLevelBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
let navigationLevelBlockIds = 0;

export { NavigationLevelBlock as bal_navigation_level_block };
