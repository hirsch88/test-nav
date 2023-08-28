import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { L as Logger } from './log.js';
import { d as defineCustomElement$2 } from './bal-icon2.js';
import { d as defineCustomElement$1 } from './bal-list-item-icon2.js';

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
const ListItemAccordionHead = proxyCustomElement(class ListItemAccordionHead extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balAccordionChange = createEvent(this, "balAccordionChange", 7);
    this.onClick = () => {
      if (this.el.closest('bal-list-item')) {
        this.accordionOpen = !this.accordionOpen;
      }
    };
    this.accordionOpen = false;
    this.icon = 'plus';
  }
  createLogger(log) {
    this.log = log;
  }
  accordionOpenHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.balAccordionChange.emit(this.accordionOpen);
    }
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item': true,
        'bal-list__item__accordion-head': true,
        'bal-list__item__accordion-head--open': this.accordionOpen,
      }, onClick: this.onClick }, h("slot", null), h("bal-list-item-icon", { right: true }, h("bal-icon", { class: "bal-list__item__accordion-head__icon", name: this.icon, size: "small", turn: this.accordionOpen }))));
  }
  get el() { return this; }
  static get watchers() { return {
    "accordionOpen": ["accordionOpenHandler"]
  }; }
}, [4, "bal-list-item-accordion-head", {
    "accordionOpen": [1028, "accordion-open"],
    "icon": [1]
  }]);
__decorate([
  Logger('bal-list-item-accordion-head')
], ListItemAccordionHead.prototype, "createLogger", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-accordion-head", "bal-icon", "bal-list-item-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-accordion-head":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemAccordionHead);
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ListItemAccordionHead as L, defineCustomElement as d };
