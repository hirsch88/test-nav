import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';
import { s as stopEventBubbling } from './form-input.js';
import { d as defineCustomElement$4 } from './bal-button2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

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
const AccordionTrigger = proxyCustomElement(class AccordionTrigger extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return {
    css: balAccordionTriggerCss
  }; }
}, [32, "bal-accordion-trigger", {
    "button": [4],
    "openLabel": [1, "open-label"],
    "openIcon": [1, "open-icon"],
    "closeLabel": [1, "close-label"],
    "closeIcon": [1, "close-icon"],
    "color": [1],
    "size": [1],
    "active": [1540],
    "state": [2],
    "parentAccordionId": [32]
  }]);
__decorate([
  Logger('bal-accordion-trigger')
], AccordionTrigger.prototype, "createLogger", null);
let accordionTriggerIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-accordion-trigger", "bal-button", "bal-icon", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-accordion-trigger":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccordionTrigger);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalAccordionTrigger = AccordionTrigger;
const defineCustomElement = defineCustomElement$1;

export { BalAccordionTrigger, defineCustomElement };
