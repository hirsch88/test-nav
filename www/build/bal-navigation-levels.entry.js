import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { r as readSubLevels } from './level.utils-61da23f4.js';

const NavigationLevels = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async getLevelInfos() {
    return await readSubLevels(this.el, 'bal-navigation-level-meta');
  }
  render() {
    return (h(Host, { class: "is-hidden" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { NavigationLevels as bal_navigation_levels };
