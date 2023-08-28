import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const StageFoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "hero-foot" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { StageFoot as bal_stage_foot };
