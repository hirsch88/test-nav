import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as ListenToBreakpoints } from './index-8d940b60.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import './window-resize.listener-bb290fb3.js';
import './helpers-18cc89f4.js';
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
const PopoverContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spaceless = false;
    this.scrollable = 0;
    this.contentWidth = 0;
    this.contentMinWidth = 0;
    this.color = 'white';
    this.expanded = false;
    this.radius = 'normal';
    this.noShadow = false;
    this.mobileTop = false;
    this.contentHeightOnTop = 0;
  }
  breakpointListener(_breakpoints) {
    if (balBrowser.hasWindow) {
      this.contentHeightOnTop = window.innerHeight - 64;
    }
  }
  get innerStyle() {
    let scrollable = {};
    if (this.scrollable > 0) {
      scrollable = {
        'max-height': `${this.scrollable}px`,
        'overflow': 'auto',
      };
    }
    return Object.assign({}, scrollable);
  }
  get contentStyle() {
    let contentWidth = {};
    let contentMinWidth = {};
    const contentHeightOnTopNav = {
      '--bal-popover-content-height-top-nav': `${this.contentHeightOnTop / 16}rem`,
    };
    if (this.contentWidth > 0) {
      contentWidth = { 'max-width': `${this.contentWidth}px` };
    }
    if (this.contentMinWidth > 0) {
      contentMinWidth = { 'min-width': `${this.contentMinWidth}px` };
    }
    return Object.assign(Object.assign(Object.assign({}, contentWidth), contentMinWidth), contentHeightOnTopNav);
  }
  componentWillLoad() {
    if (balBrowser.hasWindow) {
      this.contentHeightOnTop = window.innerHeight - 64;
    }
  }
  render() {
    const block = BEM.block('popover').element('content');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('expanded').class(this.expanded)), block.modifier('spaceless').class(this.spaceless)), block.modifier('no-shadow').class(this.noShadow)), block.modifier(`radius-${this.radius}`).class()), block.modifier(`color-${this.color}`).class()), block.modifier('on-top').class(this.mobileTop)), "data-testid": "bal-popover-content", role: "tooltip", style: this.contentStyle }, h("div", { class: Object.assign({}, block.element('inner').class()), style: this.innerStyle }, h("slot", null)), h("div", { class: Object.assign({}, block.element('arrow').class()), "data-popper-arrow": true })));
  }
  get el() { return getElement(this); }
};
__decorate([
  ListenToBreakpoints()
], PopoverContent.prototype, "breakpointListener", null);

export { PopoverContent as bal_popover_content };
