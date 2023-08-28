import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const CardActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = '';
  }
  render() {
    return (h(Host, { class: "bal-card-actions" }, h("bal-button-group", { class: "m-none", position: this.position }, h("slot", null))));
  }
};

export { CardActions as bal_card_actions };
