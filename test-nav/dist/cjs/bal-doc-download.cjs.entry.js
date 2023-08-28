'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocDownload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.link = '';
    this.iconLeft = 'document';
    this.iconRight = 'download';
    this.subject = '';
    this.subtitle = '';
  }
  render() {
    return (index.h(index.Host, { class: "bal-app" }, index.h("a", { href: this.link, style: { textDecoration: 'none' } }, index.h("bal-card", null, index.h("bal-card-content", null, index.h("bal-list", { disabled: true }, index.h("bal-list-item", null, index.h("bal-list-item-icon", null, index.h("bal-icon", { name: this.iconLeft })), index.h("bal-list-item-content", null, index.h("bal-list-item-title", null, this.subject), index.h("bal-list-item-subtitle", null, this.subtitle)), index.h("bal-list-item-icon", { right: true }, index.h("bal-icon", { name: this.iconRight })))))))));
  }
};

exports.bal_doc_download = BalDocDownload;
