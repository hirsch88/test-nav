import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const DataLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.required = false;
  }
  render() {
    return (h(Host, { class: Object.assign({}, BEM.block('data-label').class()) }, h("slot", null), this.required ? '*' : ''));
  }
};

export { DataLabel as bal_data_label };
