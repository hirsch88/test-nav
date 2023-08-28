import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';

const BalDocDownload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.link = '';
    this.iconLeft = 'document';
    this.iconRight = 'download';
    this.subject = '';
    this.subtitle = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("a", { href: this.link, style: { textDecoration: 'none' } }, h("bal-card", null, h("bal-card-content", null, h("bal-list", { disabled: true }, h("bal-list-item", null, h("bal-list-item-icon", null, h("bal-icon", { name: this.iconLeft })), h("bal-list-item-content", null, h("bal-list-item-title", null, this.subject), h("bal-list-item-subtitle", null, this.subtitle)), h("bal-list-item-icon", { right: true }, h("bal-icon", { name: this.iconRight })))))))));
  }
};

export { BalDocDownload as bal_doc_download };
