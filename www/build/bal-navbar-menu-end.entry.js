import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const NavbarMenuEnd = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interface = 'app';
  }
  render() {
    const menuEndEl = BEM.block('navbar').element('menu').element('end');
    return (h(Host, { class: Object.assign(Object.assign({}, menuEndEl.class()), menuEndEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
};

export { NavbarMenuEnd as bal_navbar_menu_end };
