import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { l as raf, d as debounce } from './helpers-18cc89f4.js';
import { L as Logger } from './log-01623e2c.js';
import { b as balBreakpoints, L as ListenToBreakpoints } from './index-8d940b60.js';
import { L as ListenToResize } from './index-3c2472c2.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './window-resize.listener-bb290fb3.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

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
const ListItemAccordionBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    this.debounceSetMinHeightForAnimation;
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
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-list-item-accordion-body')
], ListItemAccordionBody.prototype, "createLogger", null);
__decorate([
  ListenToResize()
], ListItemAccordionBody.prototype, "resizeListener", null);
__decorate([
  ListenToBreakpoints()
], ListItemAccordionBody.prototype, "breakpointListener", null);

export { ListItemAccordionBody as bal_list_item_accordion_body };
