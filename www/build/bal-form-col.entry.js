import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const FormCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 'fullwidth';
  }
  render() {
    return (h(Host, { class: {
        'column': true,
        'py-none': true,
        'is-12-touch': true,
        'is-12': this.size === 'fullwidth' || this.size === undefined,
        'is-6': this.size === 'half',
        'is-4': this.size === 'one-third',
        'is-8': this.size === 'two-thirds',
        'is-3': this.size === 'one-quarter',
        'is-9': this.size === 'three-quarters',
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { FormCol as bal_form_col };
