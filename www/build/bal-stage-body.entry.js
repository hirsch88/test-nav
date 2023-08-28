import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const StageBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const block = BEM.block('stage-body');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { StageBody as bal_stage_body };
