'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const balDocColorCss = ".sc-bal-doc-color-h p.sc-bal-doc-color{font-family:monospace;text-align:center}";

const BalDocColor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inverted = false;
    this.background = false;
    this.color = '';
    this.subject = '';
    this.description = '';
  }
  render() {
    const subject = this.subject !== '' ? this.subject : this.color;
    const hexValue = tokens_docs.tokens.color[this.color].hex;
    return (index.h(index.Host, { class: "bal-app" }, index.h("div", { class: "has-radius-large has-shadow-normal" }, index.h("div", { class: `has-background-${this.color} has-radius-top-large is-flex is-justify-content-center is-align-items-center` }, index.h("strong", { class: `${this.inverted ? 'has-text-white' : 'has-text-blue'} has-font-title is-size-x-large py-normal`, style: { minHeight: '80px' } }, this.background ? 'A-a' : '')), index.h("div", { class: "is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small" }, index.h("h5", { class: "title is-size-normal m-none" }, subject), index.h("bal-text", { size: "small", style: { textAlign: 'center' } }, this.description), index.h("bal-text", { size: "small", color: "primary-light", style: { textAlign: 'center' } }, hexValue)))));
  }
};
BalDocColor.style = balDocColorCss;

exports.bal_doc_color = BalDocColor;
