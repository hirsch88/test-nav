import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';

const StepItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
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
    this.inheritAttributes = inheritTrackingAttributes(this.el);
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
    return (h(Host, { role: "tabpanel", class: {
        'bal-step-item': true,
        'bal-step-item--active': this.isActive,
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { StepItem as bal_step_item };
