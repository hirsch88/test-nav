import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const StageHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "hero-head" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { StageHead as bal_stage_head };
