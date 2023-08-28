import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { r as readSubLevels } from './level.utils-61da23f4.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';

const NavigationLevelMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
let navigationLevelMainIds = 0;

export { NavigationLevelMain as bal_navigation_level_main };
