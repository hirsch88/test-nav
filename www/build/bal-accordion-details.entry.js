import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';

const balAccordionDetailsCss = ".bal-accordion__details{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;will-change:max-height;min-block-size:auto;min-height:auto;min-inline-size:auto;min-width:auto}.bal-accordion__details--animated{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-accordion__details--collapsing{max-height:0 !important}.bal-accordion__details--collapsed{display:none}.bal-accordion__details--expanding{max-height:0}@media (prefers-reduced-motion: reduce){.bal-accordion__details{-webkit-transition:none !important;transition:none !important}}";

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
const AccordionDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.componentId = `bal-accordion-details-${accordionDetailIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.parentAccordionId = undefined;
    this.state = 1;
    this.active = false;
    this.animated = true;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.updateAccordionId();
  }
  componentWillRender() {
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = BEM.block('accordion').element('details');
    const containerEl = block.element('container');
    const wrapperEl = containerEl.element('wrapper');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-details` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { id: id, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, h("div", { id: `${id}-content`, "aria-labelledby": `${this.parentAccordionId}-trigger-button`, role: "region", part: contentPart, class: Object.assign({}, wrapperEl.class()), "data-testid": "bal-accordion-details" }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-accordion-details')
], AccordionDetail.prototype, "createLogger", null);
let accordionDetailIds = 0;
AccordionDetail.style = {
  css: balAccordionDetailsCss
};

export { AccordionDetail as bal_accordion_details };
