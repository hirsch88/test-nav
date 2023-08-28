var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from '@stencil/core';
import { debounce, raf } from '../../../utils/helpers';
import { Logger } from '../../../utils/log';
import { ListenToBreakpoints, balBreakpoints } from '../../../utils/breakpoints';
import { ListenToResize } from '../../../utils/resize';
export class ListItemAccordionBody {
  constructor() {
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
  static get is() { return "bal-list-item-accordion-body"; }
  static get properties() {
    return {
      "accordionGroup": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Synchronizes the height of the accordion to max of all\nthe other grouped accordion bodies"
        },
        "attribute": "accordion-group",
        "reflect": false
      },
      "contentSpace": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListContentSpacing",
          "resolved": "\"none\" | \"normal\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets space to content of the accordion body"
        },
        "attribute": "content-space",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "contentAlignment": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListContentAlignment",
          "resolved": "\"center\" | \"end\" | \"space-between\" | \"start\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets justify-content of the items to start, center, end, or space-between. Default is start"
        },
        "attribute": "content-alignment",
        "reflect": false,
        "defaultValue": "'start'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-list-item-accordion-body')
], ListItemAccordionBody.prototype, "createLogger", null);
__decorate([
  ListenToResize()
], ListItemAccordionBody.prototype, "resizeListener", null);
__decorate([
  ListenToBreakpoints()
], ListItemAccordionBody.prototype, "breakpointListener", null);
