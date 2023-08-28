import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const CardButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = '';
    this.elementType = 'button';
    this.disabled = false;
    this.href = undefined;
    this.target = '_self';
    this.iconRight = '';
    this.loading = false;
  }
  render() {
    return (h(Host, { class: "bal-card-button" }, h("bal-button", { color: "info", expanded: true, "bottom-rounded": true, icon: this.icon, iconRight: this.iconRight, elementType: this.elementType, disabled: this.disabled, href: this.href, target: this.target, loading: this.loading }, h("slot", null))));
  }
};

export { CardButton as bal_card_button };
