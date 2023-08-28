import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { B as BEM } from './bem-1b28532d.js';
import { c as defaultConfig, L as ListenToConfig } from './index-6394c1a6.js';
import { i as i18nBalClose } from './bal-close.i18n-26da072a.js';
import './browser-9199b5e2.js';
import './log-01623e2c.js';
import './icons.constant-35253412.js';

const balCloseCss = "@media (hover: hover)and (pointer: fine){.bal-close__button--inverted:focus-visible:not(:active),.bal-close__button:focus-visible:not(:active){-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}:root{--bal-close-background:var(--bal-color-transparent);--bal-close-background-focus-visible:var(--bal-form-field-control-background);--bal-close-background-focus-inverted-focus-visible:var(--bal-form-field-control-background);--bal-close-border-radius:var(--bal-radius-rounded)}.bal-close{position:static;display:inline-block}.bal-close__button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:var(--bal-close-background);border:none;border-radius:var(--bal-close-border-radius);cursor:pointer;pointer-events:auto;display:inline-block;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;outline:none;position:relative;vertical-align:top;padding:5px}@media (hover: hover)and (pointer: fine){.bal-close__button:hover{background:rgba(0,7,57,.1)}}@media (hover: hover)and (pointer: fine){.bal-close__button:focus-visible:not(:active){background:var(--bal-close-background-focus-visible)}}.bal-close__button:active{background:rgba(0,7,57,.3)}@media (hover: hover)and (pointer: fine){.bal-close__button--inverted:hover{background:rgba(255,255,255,.3)}}@media (hover: hover)and (pointer: fine){.bal-close__button--inverted:focus-visible:not(:active){background:var(--bal-close-background-focus-inverted-focus-visible)}}.bal-close__button--inverted:active{background:rgba(255,255,255,.5)}.bal-close__button--size-small{padding:4px}.bal-close__button--size-medium{padding:8.5px}";

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
const Close = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.size = '';
    this.inverted = false;
  }
  componentWillRender() {
    this.inheritedAttributes = inheritAttributes(this.el, ['tabindex']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  render() {
    const blockEl = BEM.block('close');
    const buttonEl = blockEl.element('button');
    const iconEl = buttonEl.element('icon');
    const label = i18nBalClose[this.language].close;
    return (h(Host, { class: Object.assign({}, blockEl.class()) }, h("button", Object.assign({ type: "button", "aria-label": label, title: label, class: Object.assign(Object.assign(Object.assign({}, buttonEl.class()), buttonEl.modifier('inverted').class(this.inverted)), buttonEl.modifier(`size-${this.size}`).class(this.size !== '')), "data-testid": "bal-close" }, this.inheritedAttributes), h("bal-icon", { name: "close", size: this.size === 'small' ? 'x-small' : this.size === 'medium' ? 'medium' : 'small', inverted: this.inverted, class: Object.assign({}, iconEl.class()) }))));
  }
  get el() { return getElement(this); }
};
__decorate([
  ListenToConfig()
], Close.prototype, "configChanged", null);
Close.style = {
  css: balCloseCss
};

export { Close as bal_close };
