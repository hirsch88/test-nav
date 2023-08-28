import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-icon2.js';

const FieldControl = proxyCustomElement(class FieldControl extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
}, [6, "bal-field-control", {
    "iconRight": [1, "icon-right"],
    "iconLeft": [1, "icon-left"],
    "expandedOnMobile": [4, "expanded-on-mobile"],
    "loading": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-field-control", "bal-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-field-control":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldControl);
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalFieldControl = FieldControl;
const defineCustomElement = defineCustomElement$1;

export { BalFieldControl, defineCustomElement };
