import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const balDocBannerCss = ".bal-doc-banner__inner{border-bottom-left-radius:var(--bal-radius-large);border-bottom-right-radius:var(--bal-radius-large)}.bal-doc-banner__inner--primary{background:var(--bal-color-primary)}.bal-doc-banner__inner--purple{background:var(--bal-color-purple-2)}.bal-doc-banner__inner--green{background:var(--bal-color-green-2)}.bal-doc-banner__inner--red{background:var(--bal-color-red-2)}.bal-doc-banner__inner--yellow{background:var(--bal-color-yellow-2)}.bal-doc-banner__inner--grey{background:var(--bal-color-grey-2)}";

const DocBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
DocBanner.style = balDocBannerCss;

export { DocBanner as bal_doc_banner };
