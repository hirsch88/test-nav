import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const CardSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inverted = false;
    this.bold = false;
    this.color = '';
  }
  render() {
    return (h(Host, { class: "bal-card-subtitle" }, h("bal-text", { bold: this.bold, space: "none", color: this.inverted ? 'white' : this.color }, h("slot", null))));
  }
};

export { CardSubtitle as bal_card_subtitle };
