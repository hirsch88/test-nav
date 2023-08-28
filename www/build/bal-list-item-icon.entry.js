import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const ListItemIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.right = false;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__icon': true,
        'bal-list__item__icon--right': this.right,
      } }, h("slot", null)));
  }
};

export { ListItemIcon as bal_list_item_icon };
