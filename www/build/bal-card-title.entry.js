import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inverted = false;
  }
  render() {
    return (h(Host, { class: "bal-card-title" }, h("bal-heading", { level: "h3", space: "none", inverted: this.inverted }, h("slot", null))));
  }
};

export { CardTitle as bal_card_title };
