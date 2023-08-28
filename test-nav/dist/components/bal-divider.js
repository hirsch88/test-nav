import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';

const balDividerCss = ":root{--bal-divider-border-width:var(--bal-border-width-normal);--bal-divider-background-primary:var(--bal-color-border-primary);--bal-divider-background-primary-light:var(--bal-color-border-primary-light);--bal-divider-background-primary-dark:var(--bal-color-border-primary-dark);--bal-divider-background-grey-light:var(--bal-color-border-grey-light);--bal-divider-background-grey:var(--bal-color-border-grey);--bal-divider-background-grey-dark:var(--bal-color-border-grey-dark);--bal-divider-background-warning:var(--bal-color-border-warning);--bal-divider-background-success:var(--bal-color-border-success);--bal-divider-background-danger:var(--bal-color-border-danger);--bal-divider-background-danger-dark:var(--bal-color-border-danger-dark);--bal-divider-background-danger-darker:var(--bal-color-border-danger-darker);--bal-divider-background-white:var(--bal-color-border-white);--bal-divider-background-light-blue:var(--bal-color-border-light-blue);--bal-divider-radius:var(--bal-radius-rounded)}.bal-divider{margin:0;display:block;border-radius:var(--bal-divider-radius)}.bal-divider--color-primary{background:var(--bal-divider-background-primary)}.bal-divider--color-primary-light{background:var(--bal-divider-background-primary-light)}.bal-divider--color-primary-dark{background:var(--bal-divider-background-primary-dark)}.bal-divider--color-grey-light{background:var(--bal-divider-background-grey-light)}.bal-divider--color-grey{background:var(--bal-divider-background-grey)}.bal-divider--color-grey-dark{background:var(--bal-divider-background-grey-dark)}.bal-divider--color-warning{background:var(--bal-divider-background-warning)}.bal-divider--color-success{background:var(--bal-divider-background-success)}.bal-divider--color-danger{background:var(--bal-divider-background-danger)}.bal-divider--color-danger-dark{background:var(--bal-divider-background-danger-dark)}.bal-divider--color-danger-darker{background:var(--bal-divider-background-danger-darker)}.bal-divider--color-white{background:var(--bal-divider-background-white)}.bal-divider--color-light-blue{background:var(--bal-divider-background-light-blue)}.bal-divider--layout-horizontal{-ms-flex:1 0 100%;flex:1 0 100%;width:100%;min-height:var(--bal-divider-border-width);height:var(--bal-divider-border-width)}.bal-divider--layout-vertical{height:auto;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:stretch;align-self:stretch;width:var(--bal-divider-border-width)}.bal-divider--space-none{margin:0}.bal-divider--space-xx-small{margin:var(--bal-space-xx-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xx-small{margin:var(--bal-space-tablet-xx-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xx-small{margin:var(--bal-space-desktop-xx-small) 0}}.bal-divider--space-x-small{margin:var(--bal-space-x-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-x-small{margin:var(--bal-space-tablet-x-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-x-small{margin:var(--bal-space-desktop-x-small) 0}}.bal-divider--space-small{margin:var(--bal-space-small) 0}@media screen and (min-width: 769px),print{.bal-divider--space-small{margin:var(--bal-space-tablet-small) 0}}@media screen and (min-width: 1024px){.bal-divider--space-small{margin:var(--bal-space-desktop-small) 0}}.bal-divider--space-normal{margin:var(--bal-space-normal) 0}@media screen and (min-width: 769px),print{.bal-divider--space-normal{margin:var(--bal-space-tablet-normal) 0}}@media screen and (min-width: 1024px){.bal-divider--space-normal{margin:var(--bal-space-desktop-normal) 0}}.bal-divider--space-medium{margin:var(--bal-space-medium) 0}@media screen and (min-width: 769px),print{.bal-divider--space-medium{margin:var(--bal-space-tablet-medium) 0}}@media screen and (min-width: 1024px){.bal-divider--space-medium{margin:var(--bal-space-desktop-medium) 0}}.bal-divider--space-large{margin:var(--bal-space-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-large{margin:var(--bal-space-tablet-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-large{margin:var(--bal-space-desktop-large) 0}}.bal-divider--space-x-large{margin:var(--bal-space-x-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-x-large{margin:var(--bal-space-tablet-x-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-x-large{margin:var(--bal-space-desktop-x-large) 0}}.bal-divider--space-xx-large{margin:var(--bal-space-xx-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xx-large{margin:var(--bal-space-tablet-xx-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xx-large{margin:var(--bal-space-desktop-xx-large) 0}}.bal-divider--space-xxx-large{margin:var(--bal-space-xxx-large) 0}@media screen and (min-width: 769px),print{.bal-divider--space-xxx-large{margin:var(--bal-space-tablet-xxx-large) 0}}@media screen and (min-width: 1024px){.bal-divider--space-xxx-large{margin:var(--bal-space-desktop-xxx-large) 0}}.bal-divider--layout-vertical.bal-divider--space-none{margin:0}.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-xx-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-tablet-xx-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xx-small{margin:0 var(--bal-space-desktop-xx-small)}}.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-tablet-x-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-x-small{margin:0 var(--bal-space-desktop-x-small)}}.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-small)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-tablet-small)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-small{margin:0 var(--bal-space-desktop-small)}}.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-normal)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-tablet-normal)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-normal{margin:0 var(--bal-space-desktop-normal)}}.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-medium)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-tablet-medium)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-medium{margin:0 var(--bal-space-desktop-medium)}}.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-tablet-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-large{margin:0 var(--bal-space-desktop-large)}}.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-x-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-tablet-x-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-x-large{margin:0 var(--bal-space-desktop-x-large)}}.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-xx-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xx-large{margin:0 var(--bal-space-desktop-xx-large)}}.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-xxx-large)}@media screen and (min-width: 769px),print{.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-tablet-xxx-large)}}@media screen and (min-width: 1024px){.bal-divider--layout-vertical.bal-divider--space-xxx-large{margin:0 var(--bal-space-desktop-xxx-large)}}";

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
const BalDivider$1 = proxyCustomElement(class BalDivider extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.layout = 'horizontal';
    this.space = 'none';
    this.color = 'grey';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('divider');
    const layout = !!this.layout;
    const space = !!this.space;
    const color = !!this.color;
    return (h(Host, { role: "separator", class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`layout-${this.layout}`).class(layout)), block.modifier(`space-${this.space}`).class(space)), block.modifier(`color-${this.color}`).class(color)) }, h("slot", null)));
  }
  static get style() { return {
    css: balDividerCss
  }; }
}, [36, "bal-divider", {
    "layout": [1],
    "space": [1],
    "color": [1]
  }]);
__decorate([
  Logger('bal-divider')
], BalDivider$1.prototype, "createLogger", null);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-divider"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-divider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDivider$1);
      }
      break;
  } });
}

const BalDivider = BalDivider$1;
const defineCustomElement = defineCustomElement$1;

export { BalDivider, defineCustomElement };
