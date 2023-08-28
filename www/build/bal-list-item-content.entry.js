import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const ListItemContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentAlignment = undefined;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__content': true,
        [`bal-list__item__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
      } }, h("slot", null)));
  }
};

export { ListItemContent as bal_list_item_content };
