import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import './helpers-08b28736.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

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
const NavigationMenuList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setHeadingLevel = () => {
      if (balBreakpoints.isTouch) {
        this.headingLevel = 'h5';
        return;
      }
      this.headingLevel = 'h3';
    };
    this.color = 'white';
    this.headline = undefined;
    this.href = undefined;
    this.target = '_self';
    this.tracking = {};
    this.headingLevel = undefined;
  }
  breakpointListener(_breakpoints) {
    this.setHeadingLevel();
  }
  connectedCallback() {
    this.setHeadingLevel();
  }
  render() {
    const navMenuListEl = BEM.block('nav').element('menu').element('list');
    return (h(Host, { class: Object.assign(Object.assign({}, navMenuListEl.class()), navMenuListEl.modifier(`context-${this.color}`).class()) }, h("bal-card", { class: Object.assign({}, navMenuListEl.element('card').class()), flat: true, color: this.color === 'grey' ||
        this.color === 'yellow' ||
        this.color === 'red' ||
        this.color === 'purple' ||
        this.color === 'green'
        ? this.color
        : '' }, h("bal-card-content", null, this.href ? (h("a", Object.assign({ href: this.href, target: this.target }, this.tracking), h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline))) : (h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline)), h("slot", { name: "links" })))));
  }
};
__decorate([
  ListenToBreakpoints()
], NavigationMenuList.prototype, "breakpointListener", null);

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

export { NavigationMenuList as bal_navigation_menu_list, NavigationMenuListItem as bal_navigation_menu_list_item };
