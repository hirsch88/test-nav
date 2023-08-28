import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$1 } from './bal-text2.js';

const balDocColorCss = ".sc-bal-doc-color-h p.sc-bal-doc-color{font-family:monospace;text-align:center}";

const BalDocColor = proxyCustomElement(class BalDocColor extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.inverted = false;
    this.background = false;
    this.color = '';
    this.subject = '';
    this.description = '';
  }
  render() {
    const subject = this.subject !== '' ? this.subject : this.color;
    const hexValue = tokens.color[this.color].hex;
    return (h(Host, { class: "bal-app" }, h("div", { class: "has-radius-large has-shadow-normal" }, h("div", { class: `has-background-${this.color} has-radius-top-large is-flex is-justify-content-center is-align-items-center` }, h("strong", { class: `${this.inverted ? 'has-text-white' : 'has-text-blue'} has-font-title is-size-x-large py-normal`, style: { minHeight: '80px' } }, this.background ? 'A-a' : '')), h("div", { class: "is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small" }, h("h5", { class: "title is-size-normal m-none" }, subject), h("bal-text", { size: "small", style: { textAlign: 'center' } }, this.description), h("bal-text", { size: "small", color: "primary-light", style: { textAlign: 'center' } }, hexValue)))));
  }
  static get style() { return balDocColorCss; }
}, [2, "bal-doc-color", {
    "inverted": [4],
    "background": [4],
    "color": [1],
    "subject": [1],
    "description": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-color", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-color":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocColor);
      }
      break;
    case "bal-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { BalDocColor as B, defineCustomElement as d };
