import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as raf, h as debounce } from './helpers.js';
import { L as Logger } from './log.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { L as ListenToResize } from './resize.decorator.js';

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
const ListItemAccordionBody = proxyCustomElement(class ListItemAccordionBody extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.isMobile = balBreakpoints.isMobile;
    this.setMinHeightForAnimation = () => {
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.isMobile && this.contentElWrapper) {
        this.contentElWrapper.style.removeProperty('min-height');
        return;
      }
      raf(() => {
        if (this.accordionGroup !== undefined && this.accordionGroup !== '') {
          const allAccordionBodies = Array.from(document.body.querySelectorAll('bal-list-item-accordion-body'));
          const groupContents = allAccordionBodies
            .filter(el => el.accordionGroup === this.accordionGroup)
            .map(el => el.querySelector('.bal-list__item__accordion-body__content'))
            .filter(el => el);
          const groupContentHeight = groupContents.reduce((acc, el) => (acc < el.offsetHeight ? el.offsetHeight : acc), 0);
          if (this.contentElWrapper && groupContentHeight > 0 && this.el.offsetHeight !== groupContentHeight) {
            this.contentElWrapper.style.setProperty('min-height', `${groupContentHeight}px`);
          }
        }
      });
    };
    this.debounceSetMinHeightForAnimation = debounce(this.setMinHeightForAnimation.bind(this), 100);
    this.accordionGroup = undefined;
    this.contentSpace = 'none';
    this.contentAlignment = 'start';
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.setMinHeightForAnimation();
  }
  componentDidRender() {
    this.setMinHeightForAnimation();
  }
  resizeListener() {
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
    this.debounceSetMinHeightForAnimation();
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item': true,
        'bal-list__item__accordion-body': true,
        'bal-list__item__accordion-body--grouped': this.accordionGroup !== undefined && this.accordionGroup !== '',
      } }, h("div", { class: {
        'bal-list__item__accordion-body__content': true,
        [`bal-list__item__accordion-body__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
        [`bal-list__item__accordion-body__content--space-${this.contentSpace}`]: this.contentSpace !== undefined,
      }, ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null))));
  }
  get el() { return this; }
}, [4, "bal-list-item-accordion-body", {
    "accordionGroup": [1, "accordion-group"],
    "contentSpace": [1, "content-space"],
    "contentAlignment": [1, "content-alignment"]
  }]);
__decorate([
  Logger('bal-list-item-accordion-body')
], ListItemAccordionBody.prototype, "createLogger", null);
__decorate([
  ListenToResize()
], ListItemAccordionBody.prototype, "resizeListener", null);
__decorate([
  ListenToBreakpoints()
], ListItemAccordionBody.prototype, "breakpointListener", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-accordion-body"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-accordion-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemAccordionBody);
      }
      break;
  } });
}

export { ListItemAccordionBody as L, defineCustomElement as d };
