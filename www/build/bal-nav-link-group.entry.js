import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { L as Logger } from './log-01623e2c.js';
import { B as BEM } from './bem-1b28532d.js';
import './browser-9199b5e2.js';

const balNavLinkGroupCss = ":root{--bal-nav-link-group-background:var(--bal-color-transparent);--bal-nav-link-group-background-grey:var(--bal-color-grey);--bal-nav-link-group-background-purple:var(--bal-color-purple);--bal-nav-link-group-background-red:var(--bal-color-red);--bal-nav-link-group-background-yellow:var(--bal-color-yellow);--bal-nav-link-group-background-green:var(--bal-color-green);--bal-nav-link-group-radius:var(--bal-radius-large)}.bal-nav-link-group{display:block;background:var(--bal-nav-link-group-background);border-radius:var(--bal-nav-link-group-radius);padding-top:var(--bal-space-normal);padding-bottom:var(--bal-space-normal);padding-left:var(--bal-space-normal);padding-right:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link-group{padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}}.bal-nav-link-group--is-grey{background:var(--bal-nav-link-group-background-grey)}.bal-nav-link-group--is-purple{background:var(--bal-nav-link-group-background-purple)}.bal-nav-link-group--is-red{background:var(--bal-nav-link-group-background-red)}.bal-nav-link-group--is-yellow{background:var(--bal-nav-link-group-background-yellow)}.bal-nav-link-group--is-green{background:var(--bal-nav-link-group-background-green)}";

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
const NavigationLinkGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = '';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-group');
    const hasColor = this.color !== '';
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`is-${this.color}`).class(hasColor)) }, h("slot", null)));
  }
};
__decorate([
  Logger('bal-nav-link-group')
], NavigationLinkGroup.prototype, "createLogger", null);
NavigationLinkGroup.style = {
  css: balNavLinkGroupCss
};

export { NavigationLinkGroup as bal_nav_link_group };
