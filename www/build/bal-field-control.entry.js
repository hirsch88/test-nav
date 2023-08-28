import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const FieldControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconRight = '';
    this.iconLeft = '';
    this.expandedOnMobile = undefined;
    this.loading = false;
  }
  get buildIconLeftTemplate() {
    if (this.iconLeft) {
      return h("bal-icon", { name: this.iconLeft, color: "info", class: "is-left", size: "small" });
    }
    return '';
  }
  get buildIconRightTemplate() {
    if (this.iconRight) {
      return h("bal-icon", { name: this.iconRight, color: "info", class: "is-right", size: "small" });
    }
    return '';
  }
  render() {
    return (h(Host, { class: {
        'bal-field-control': true,
        'control': true,
        'has-icons-left': !!this.iconLeft,
        'has-icons-right': !!this.iconRight,
        'is-loading': this.loading,
        'bal-field-control--expanded-on-mobile': !!this.expandedOnMobile,
      } }, h("slot", null), this.buildIconLeftTemplate, this.buildIconRightTemplate));
  }
};

export { FieldControl as bal_field_control };
