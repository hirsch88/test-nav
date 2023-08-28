import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { s as stopEventBubbling } from './form-input-2b8d78bf.js';
import './browser-9199b5e2.js';

const balAccordionSummaryCss = ".bal-accordion__summary{position:static}.bal-accordion__summary--trigger{cursor:pointer}";

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
const AccordionSummary = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.componentId = `bal-accordion-summary-${accordionSummaryIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.trigger = false;
    this.active = false;
    this.state = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 2;
    }
    this.updateAccordionId();
  }
  disconnectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 1;
    }
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = BEM.block('accordion').element('summary');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-summary` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    let attributes = {};
    if (this.trigger) {
      attributes = {
        'aria-controls': `${this.parentAccordionId}-details-content`,
        'role': 'button',
        'part': buttonPart,
        'data-testid': 'bal-accordion-button',
        'onClick': this.onClick,
      };
    }
    return (h(Host, Object.assign({ id: id, class: Object.assign(Object.assign({}, block.class()), block.modifier('trigger').class(this.trigger)) }, attributes, { "data-testid": "bal-accordion-summary" })));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-accordion-summary')
], AccordionSummary.prototype, "createLogger", null);
let accordionSummaryIds = 0;
AccordionSummary.style = {
  css: balAccordionSummaryCss
};

export { AccordionSummary as bal_accordion_summary };
