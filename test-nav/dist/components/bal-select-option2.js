import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { L as Logger } from './log.js';

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
const SelectOption = proxyCustomElement(class SelectOption extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.label = undefined;
    this.disabled = false;
    this.value = undefined;
    this.for = `bal-selopt-${selectOptionIds++}`;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    return (h(Host, { style: { display: 'none' } }, h("slot", null)));
  }
}, [4, "bal-select-option", {
    "label": [513],
    "disabled": [4],
    "value": [513],
    "for": [513]
  }]);
__decorate([
  Logger('bal-select-option')
], SelectOption.prototype, "createLogger", null);
let selectOptionIds = 0;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-select-option"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-select-option":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SelectOption);
      }
      break;
  } });
}

export { SelectOption as S, defineCustomElement as d };
