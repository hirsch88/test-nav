import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { s as stopEventBubbling } from './form-input-2b8d78bf.js';
import './browser-9199b5e2.js';

const balAccordionTriggerCss = ".bal-accordion__trigger{position:static}.bal-accordion__trigger__button{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,0);border:none;height:3rem;width:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}";

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
const AccordionTrigger = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.componentId = `bal-accordion-trigger-${accordionTriggerIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.button = false;
    this.openLabel = '';
    this.openIcon = 'caret-down';
    this.closeLabel = '';
    this.closeIcon = '';
    this.color = 'info';
    this.size = '';
    this.active = false;
    this.state = 1;
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
    const block = BEM.block('accordion').element('trigger');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-trigger` : this.componentId;
    const label = this.active ? this.closeLabel : this.openLabel;
    let turn = false;
    let icon = this.active ? this.closeIcon : this.openIcon;
    if (this.closeIcon === '' || this.closeIcon === undefined || this.closeIcon === null) {
      turn = this.active;
      icon = this.openIcon || 'caret-down';
    }
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    return (h(Host, { id: id, class: Object.assign({}, block.class()) }, this.button ? (h("bal-button", { id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, icon: icon, iconTurn: turn, color: this.color, size: this.size, onClick: this.onClick }, label)) : (h("button", { class: Object.assign({}, block.element('button').class()), id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, "aria-label": "accordion trigger", part: buttonPart, "data-testid": "bal-accordion-trigger", onClick: this.onClick }, h("bal-icon", { turn: turn, name: icon })))));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-accordion-trigger')
], AccordionTrigger.prototype, "createLogger", null);
let accordionTriggerIds = 0;
AccordionTrigger.style = {
  css: balAccordionTriggerCss
};

export { AccordionTrigger as bal_accordion_trigger };
