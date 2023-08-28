import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const ListItemSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-list__item__subtitle" }, h("p", { class: "is-size-small" }, h("slot", null))));
  }
};

export { ListItemSubtitle as bal_list_item_subtitle };
