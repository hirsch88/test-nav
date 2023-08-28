import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { L as Logger } from './log-01623e2c.js';
import { B as BEM } from './bem-1b28532d.js';
import './browser-9199b5e2.js';

const balNavLinkGridCss = ".bal-nav-link-grid{--bal-column-gap:0;margin-top:0}@media screen and (min-width: 1024px){.bal-nav-link-grid{--bal-column-gap:1.5rem}}.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-none)}}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavigationLinkGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), { 'columns is-multiline': true }) }, h("slot", null)));
  }
};
__decorate([
  Logger('bal-nav-link-grid')
], NavigationLinkGrid.prototype, "createLogger", null);
NavigationLinkGrid.style = {
  css: balNavLinkGridCss
};

export { NavigationLinkGrid as bal_nav_link_grid };
