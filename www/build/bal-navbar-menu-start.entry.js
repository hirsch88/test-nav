import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const NavbarMenuStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interface = 'app';
  }
  render() {
    const menuStartEl = BEM.block('navbar').element('menu').element('start');
    return (h(Host, { class: Object.assign(Object.assign({}, menuStartEl.class()), menuStartEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
};

export { NavbarMenuStart as bal_navbar_menu_start };
