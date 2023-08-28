import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { s as scrollToFirstInvalidField } from './form-479fd066.js';

const Form = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.native = false;
    this.novalidate = false;
  }
  async scrollToFirstInvalidField() {
    scrollToFirstInvalidField({ formEl: this.el });
  }
  render() {
    const NativeEl = this.native ? 'form' : 'div';
    let attrs = {};
    if (this.native) {
      attrs = {
        novalidate: this.novalidate,
      };
    }
    return (h(Host, null, h(NativeEl, Object.assign({}, attrs), h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { Form as bal_form };
