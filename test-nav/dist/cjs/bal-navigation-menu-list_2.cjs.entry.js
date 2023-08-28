'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');
const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');
const breakpoints_decorator = require('./breakpoints.decorator-7aae4c5f.js');
require('./helpers-83a73189.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./device-76e9eca9.js');
require('./listener-4161102f.js');
require('./tokens.esm-505d1e8f.js');

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
    index.registerInstance(this, hostRef);
    this.setHeadingLevel = () => {
      if (breakpoints_subject.balBreakpoints.isTouch) {
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
    const navMenuListEl = bem.BEM.block('nav').element('menu').element('list');
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, navMenuListEl.class()), navMenuListEl.modifier(`context-${this.color}`).class()) }, index.h("bal-card", { class: Object.assign({}, navMenuListEl.element('card').class()), flat: true, color: this.color === 'grey' ||
        this.color === 'yellow' ||
        this.color === 'red' ||
        this.color === 'purple' ||
        this.color === 'green'
        ? this.color
        : '' }, index.h("bal-card-content", null, this.href ? (index.h("a", Object.assign({ href: this.href, target: this.target }, this.tracking), index.h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline))) : (index.h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline)), index.h("slot", { name: "links" })))));
  }
};
__decorate([
  breakpoints_decorator.ListenToBreakpoints()
], NavigationMenuList.prototype, "breakpointListener", null);

const NavigationMenuListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = undefined;
    this.tracking = {};
    this.target = '_self';
  }
  render() {
    const navMenuListItemEl = bem.BEM.block('nav').element('menu').element('list').element('item');
    return (index.h(index.Host, { class: Object.assign({}, navMenuListItemEl.class()) }, index.h("a", Object.assign({ class: Object.assign({}, navMenuListItemEl.element('link').class()), href: this.href, target: this.target }, this.tracking), index.h("slot", null))));
  }
};

exports.bal_navigation_menu_list = NavigationMenuList;
exports.bal_navigation_menu_list_item = NavigationMenuListItem;
