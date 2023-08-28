'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const form = require('./form-9af6cd7d.js');

const Form = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.native = false;
    this.novalidate = false;
  }
  async scrollToFirstInvalidField() {
    form.scrollToFirstInvalidField({ formEl: this.el });
  }
  render() {
    const NativeEl = this.native ? 'form' : 'div';
    let attrs = {};
    if (this.native) {
      attrs = {
        novalidate: this.novalidate,
      };
    }
    return (index.h(index.Host, null, index.h(NativeEl, Object.assign({}, attrs), index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_form = Form;
