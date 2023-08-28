'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const balDocBannerCss = ".bal-doc-banner__inner{border-bottom-left-radius:var(--bal-radius-large);border-bottom-right-radius:var(--bal-radius-large)}.bal-doc-banner__inner--primary{background:var(--bal-color-primary)}.bal-doc-banner__inner--purple{background:var(--bal-color-purple-2)}.bal-doc-banner__inner--green{background:var(--bal-color-green-2)}.bal-doc-banner__inner--red{background:var(--bal-color-red-2)}.bal-doc-banner__inner--yellow{background:var(--bal-color-yellow-2)}.bal-doc-banner__inner--grey{background:var(--bal-color-grey-2)}";

const DocBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.subtitle = 'Component';
    this.color = 'primary';
    this.shadowDom = false;
  }
  render() {
    return (index.h(index.Host, { style: { marginBottom: '3rem', display: 'block' } }, index.h("bal-doc-app", null, index.h("div", { class: {
        'bal-doc-banner__inner pt-x-large pb-large px-large': true,
        ['bal-doc-banner__inner--' + this.color]: true,
      }, style: {
        marginTop: '-32px',
        marginLeft: '-32px',
        marginRight: '-32px',
      } }, index.h("bal-heading", { space: "none", subtitle: true, level: "h3", inverted: this.color === 'primary' }, this.subtitle), index.h("bal-heading", { space: "none", level: "display-2", inverted: this.color === 'primary' }, index.h("slot", null), this.shadowDom ? (index.h("bal-tag", { class: "ml-normal is-vertical-align-middle", color: "red", light: true, size: "small" }, index.h("span", { class: "has-text-weight-bold" }, "Shadow DOM"))) : (''))))));
  }
  get el() { return index.getElement(this); }
};
DocBanner.style = balDocBannerCss;

exports.bal_doc_banner = DocBanner;
