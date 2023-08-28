'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const attributes = require('./attributes-fa738cf7.js');

const StepItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balNavigate = index.createEvent(this, "balNavigate", 7);
    this.inheritAttributes = {};
    this.isActive = false;
    this.active = false;
    this.value = '';
    this.label = '';
    this.href = '';
    this.target = '_self';
    this.disabled = false;
    this.done = false;
    this.hidden = false;
    this.failed = false;
    this.prevent = false;
  }
  componentWillLoad() {
    this.inheritAttributes = attributes.inheritTrackingAttributes(this.el);
  }
  async getOptions() {
    return this.options;
  }
  async setActive(active) {
    this.isActive = active;
  }
  get options() {
    return {
      value: this.value,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      done: this.done,
      hidden: this.hidden,
      failed: this.failed,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    };
  }
  render() {
    return (index.h(index.Host, { role: "tabpanel", class: {
        'bal-step-item': true,
        'bal-step-item--active': this.isActive,
      } }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};

exports.bal_step_item = StepItem;
