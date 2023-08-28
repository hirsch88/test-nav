import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const StageBackLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = undefined;
    this.shadow = false;
    this.inverted = false;
  }
  render() {
    const block = BEM.block('stage-back-link');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("a", { class: {
        'is-link': true,
        'is-inverted': this.inverted,
        'has-text-shadow': this.shadow,
      }, href: this.href }, h("bal-icon", { class: "mr-x-small", name: "caret-left", size: "x-small", inverted: this.inverted, shadow: this.shadow }), h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { StageBackLink as bal_stage_back_link };
