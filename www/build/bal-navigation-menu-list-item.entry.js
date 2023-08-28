import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMenuListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = undefined;
    this.tracking = {};
    this.target = '_self';
  }
  render() {
    const navMenuListItemEl = BEM.block('nav').element('menu').element('list').element('item');
    return (h(Host, { class: Object.assign({}, navMenuListItemEl.class()) }, h("a", Object.assign({ class: Object.assign({}, navMenuListItemEl.element('link').class()), href: this.href, target: this.target }, this.tracking), h("slot", null))));
  }
};

export { NavigationMenuListItem as bal_navigation_menu_list_item };
