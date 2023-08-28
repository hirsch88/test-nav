import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as inheritTrackingAttributes } from './attributes.js';

const StepItem = proxyCustomElement(class StepItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
}, [4, "bal-step-item", {
    "active": [516],
    "value": [513],
    "label": [513],
    "href": [513],
    "target": [1],
    "disabled": [516],
    "done": [516],
    "hidden": [516],
    "failed": [516],
    "prevent": [4],
    "isActive": [32],
    "getOptions": [64],
    "setActive": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-step-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-step-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StepItem);
      }
      break;
  } });
}

const BalStepItem = StepItem;
const defineCustomElement = defineCustomElement$1;

export { BalStepItem, defineCustomElement };
