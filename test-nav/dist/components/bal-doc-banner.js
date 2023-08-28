import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './bal-app2.js';
import { d as defineCustomElement$6 } from './bal-close2.js';
import { d as defineCustomElement$5 } from './bal-doc-app2.js';
import { d as defineCustomElement$4 } from './bal-heading2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-tag2.js';

const balDocBannerCss = ".bal-doc-banner__inner{border-bottom-left-radius:var(--bal-radius-large);border-bottom-right-radius:var(--bal-radius-large)}.bal-doc-banner__inner--primary{background:var(--bal-color-primary)}.bal-doc-banner__inner--purple{background:var(--bal-color-purple-2)}.bal-doc-banner__inner--green{background:var(--bal-color-green-2)}.bal-doc-banner__inner--red{background:var(--bal-color-red-2)}.bal-doc-banner__inner--yellow{background:var(--bal-color-yellow-2)}.bal-doc-banner__inner--grey{background:var(--bal-color-grey-2)}";

const DocBanner = proxyCustomElement(class DocBanner extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.subtitle = 'Component';
    this.color = 'primary';
    this.shadowDom = false;
  }
  render() {
    return (h(Host, { style: { marginBottom: '3rem', display: 'block' } }, h("bal-doc-app", null, h("div", { class: {
        'bal-doc-banner__inner pt-x-large pb-large px-large': true,
        ['bal-doc-banner__inner--' + this.color]: true,
      }, style: {
        marginTop: '-32px',
        marginLeft: '-32px',
        marginRight: '-32px',
      } }, h("bal-heading", { space: "none", subtitle: true, level: "h3", inverted: this.color === 'primary' }, this.subtitle), h("bal-heading", { space: "none", level: "display-2", inverted: this.color === 'primary' }, h("slot", null), this.shadowDom ? (h("bal-tag", { class: "ml-normal is-vertical-align-middle", color: "red", light: true, size: "small" }, h("span", { class: "has-text-weight-bold" }, "Shadow DOM"))) : (''))))));
  }
  get el() { return this; }
  static get style() { return balDocBannerCss; }
}, [4, "bal-doc-banner", {
    "subtitle": [1],
    "color": [1],
    "shadowDom": [4, "shadow-dom"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-banner", "bal-app", "bal-close", "bal-doc-app", "bal-heading", "bal-icon", "bal-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-banner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocBanner);
      }
      break;
    case "bal-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-doc-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocBanner = DocBanner;
const defineCustomElement = defineCustomElement$1;

export { BalDocBanner, defineCustomElement };
