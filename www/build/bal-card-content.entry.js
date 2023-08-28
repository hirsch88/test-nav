import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-card-content" }, h("slot", null)));
  }
};

export { CardContent as bal_card_content };
