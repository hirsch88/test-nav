import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const balDocColorCss = ".sc-bal-doc-color-h p.sc-bal-doc-color{font-family:monospace;text-align:center}";

const BalDocColor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
BalDocColor.style = balDocColorCss;

export { BalDocColor as bal_doc_color };
