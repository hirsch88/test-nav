import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';

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
const ListItemAccordionHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "accordionOpen": ["accordionOpenHandler"]
  }; }
};
__decorate([
  Logger('bal-list-item-accordion-head')
], ListItemAccordionHead.prototype, "createLogger", null);

export { ListItemAccordionHead as bal_list_item_accordion_head };
