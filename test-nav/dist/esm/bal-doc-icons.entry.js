import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';

const BalDocIcons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icons = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("div", { class: "columns is-multiline" }, this.icons.split(',').map(icon => (h("div", { class: "column is-3 p-x-small has-background-blue-light" }, h("div", { class: "p-small has-text-center is-flex is-align-items-center is-flex-direction-column is-justify-content-center" }, h("bal-icon", { color: "primary", name: icon }), h("span", { class: "mt-xx-small" }, icon))))))));
  }
};

export { BalDocIcons as bal_doc_icons };
