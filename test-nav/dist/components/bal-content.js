import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';

const balContentCss = ".bal-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;text-align:left;gap:.25rem}.bal-content--align-center{-ms-flex-align:center;align-items:center;text-align:center}.bal-content--align-end{-ms-flex-align:end;align-items:flex-end;text-align:right}.bal-content--layout-horizontal{-ms-flex-direction:row;flex-direction:row}.bal-content--layout-vertical{-ms-flex-direction:column;flex-direction:column}.bal-content--space-xx-small{gap:.25rem}.bal-content--space-x-small{gap:.5rem}.bal-content--space-small{gap:.75rem}.bal-content--space-normal{gap:1rem}.bal-content>.bal-text{margin:0}";

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
const BalContent$1 = proxyCustomElement(class BalContent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.layout = 'vertical';
    this.align = 'start';
    this.space = 'xx-small';
    this.direction = '';
    this.alignment = '';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('content');
    const direction = !!this.direction;
    const layout = !!this.layout;
    const alignment = !!this.alignment;
    const align = !!this.align;
    const space = !!this.space;
    let layoutValue = this.layout;
    if (direction) {
      layoutValue = this.direction === 'row' ? 'horizontal' : 'vertical';
    }
    let alignValue = this.align.split(' ').join('-');
    if (alignment) {
      alignValue = this.alignment.split(' ').join('-');
    }
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`layout-${layoutValue}`).class(layout || direction)), block.modifier(`align-${alignValue}`).class(align || alignment)), block.modifier(`space-${this.space}`).class(space)) }, h("slot", null)));
  }
  static get style() { return {
    css: balContentCss
  }; }
}, [36, "bal-content", {
    "layout": [1],
    "align": [1],
    "space": [1],
    "direction": [1],
    "alignment": [1]
  }]);
__decorate([
  Logger('bal-content')
], BalContent$1.prototype, "createLogger", null);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-content"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalContent$1);
      }
      break;
  } });
}

const BalContent = BalContent$1;
const defineCustomElement = defineCustomElement$1;

export { BalContent, defineCustomElement };
