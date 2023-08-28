import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { r as readSubLevels } from './level.utils-61da23f4.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';

const NavigationLevelMeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
let navigationLevelMetaIds = 0;

export { NavigationLevelMeta as bal_navigation_level_meta };
