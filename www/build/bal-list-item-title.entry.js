import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const ListItemTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.level = 'h5';
    this.visualLevel = undefined;
  }
  render() {
    return (h(Host, { class: "bal-list__item__title" }, h("bal-heading", { level: this.level, visualLevel: this.visualLevel, space: "none" }, h("slot", null))));
  }
};

export { ListItemTitle as bal_list_item_title };
