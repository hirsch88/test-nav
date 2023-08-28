import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const DataItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.border = false;
  }
  render() {
    const element = BEM.block('data-item');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, element.class()), element.modifier('is-disabled').class(this.disabled)), element.modifier('has-border').class(this.border)) }, h("slot", null)));
  }
};

export { DataItem as bal_data_item };
