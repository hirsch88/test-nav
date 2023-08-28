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
import { Host, h, } from '@stencil/core';
import { ListenToConfig } from '../../../utils/config';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { raf, transitionEndAsync } from '../../../utils/helpers';
export class ListItem {
  constructor() {
    this.accordionOpen = false;
    this.animated = true;
    this.accordionChanged = (ev) => {
      const { detail } = ev;
      if (detail !== this.accordionOpen) {
        this.accordionOpen = detail;
        this.updateState();
      }
    };
    this.addEventListenerAccordionChange = () => {
      const accordionHeadEl = this.el.querySelector(ListItem.selectors.accordionHead);
      if (accordionHeadEl) {
        accordionHeadEl.addEventListener('balAccordionChange', this.accordionChanged);
        this.accordionOpen = accordionHeadEl.accordionOpen;
        this.updateState(true);
      }
    };
    this.removeEventListenerAccordionChange = () => {
      const accordionHeadEl = this.el.querySelector(ListItem.selectors.accordionHead);
      if (accordionHeadEl) {
        accordionHeadEl.removeEventListener('balAccordionChange', this.accordionChanged);
      }
    };
    this.updateHead = () => {
      const headEl = this.el.querySelector('bal-list-item-accordion-head');
      if (headEl) {
        headEl.accordionOpen = this.accordionOpen;
      }
    };
    this.updateState = (initialUpdate = false) => {
      if (this.accordionOpen) {
        this.expandAccordion(initialUpdate);
      }
      else {
        this.collapseAccordion(initialUpdate);
      }
    };
    this.expandAccordion = (initialUpdate = false) => {
      const contentEl = this.el.querySelector(ListItem.selectors.accordionBody);
      const contentElWrapper = this.el.querySelector(ListItem.selectors.accordionBodyWrapper);
      if (initialUpdate || contentEl === null || contentElWrapper === null) {
        this.state = 4;
        return;
      }
      if (this.state === 4) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      const parentListEl = this.el.closest('bal-list');
      if (parentListEl && parentListEl.accordionOneLevel) {
        const items = Array.from(parentListEl.querySelectorAll('bal-list-item')).filter(el => el !== this.el);
        items.forEach(item => item.dismiss(true));
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.state = 8;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 300);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.accordionOpen);
            await waitForTransition;
            this.state = 4;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.accordionOpen);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.accordionOpen);
        this.state = 4;
        this.balDidAnimate.emit(this.accordionOpen);
      }
    };
    this.collapseAccordion = (initialUpdate = false, ignoreNested = false) => {
      const contentEl = this.el.querySelector(ListItem.selectors.accordionBody);
      if (initialUpdate || contentEl === null) {
        this.state = 1;
        return;
      }
      if (this.state === 1) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (!ignoreNested) {
        const parentListEl = this.el.closest('bal-list');
        if (parentListEl && parentListEl.accordionOneLevel) {
          const items = Array.from(this.el.querySelectorAll('bal-list-item')).filter(el => el !== this.el);
          items.forEach(item => item.dismiss(true));
        }
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 300);
            this.state = 2;
            this.balWillAnimate.emit(this.accordionOpen);
            await waitForTransition;
            this.state = 1;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.accordionOpen);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.accordionOpen);
        this.state = 1;
        this.balDidAnimate.emit(this.accordionOpen);
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onClickTrigger = (ev) => {
      const accordionBodyEl = this.el.querySelector(ListItem.selectors.accordionBody);
      if (accordionBodyEl) {
        if (!accordionBodyEl.contains(ev.target)) {
          this.balNavigate.emit(ev);
        }
      }
      else {
        this.balNavigate.emit(ev);
      }
    };
    this.state = 1;
    this.disabled = false;
    this.clickable = false;
    this.selected = false;
    this.accordion = false;
    this.subAccordionItem = false;
    this.href = '';
    this.target = '_self';
    this.download = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    if (this.accordion) {
      this.addEventListenerAccordionChange();
    }
  }
  componentDidLoad() {
    if (this.accordion) {
      this.addEventListenerAccordionChange();
    }
  }
  disconnectedCallback() {
    this.removeEventListenerAccordionChange();
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async present() {
    if (this.accordion && this.accordionOpen === false) {
      this.accordionOpen = true;
      this.updateHead();
      this.expandAccordion();
    }
  }
  async dismiss(ignoreNested = false) {
    if (this.accordion && this.accordionOpen === true) {
      this.accordionOpen = false;
      this.updateHead();
      this.collapseAccordion(false, ignoreNested);
    }
  }
  async toggle() {
    if (this.accordion) {
      if (this.accordionOpen) {
        this.dismiss();
      }
      else {
        this.present();
      }
    }
  }
  render() {
    const item = BEM.block('list').element('item');
    const trigger = item.element('trigger');
    const basicClasses = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, item.class()), item.modifier('disabled').class(this.disabled)), item.modifier('selected').class(this.selected)), item.modifier('animated').class(this.animated)), item.modifier('accordion').class(this.accordion)), item.modifier('sub-accordion').class(this.subAccordionItem)), item.modifier('active').class(this.accordionOpen)), item.modifier('expanding').class(this.state === 8)), item.modifier('expanded').class(this.state === 4)), item.modifier('collapsing').class(this.state === 2)), item.modifier('collapsed').class(this.state === 1)), item.modifier('clickable').class(!this.disabled && (this.clickable || this.href.length > 0 || this.accordion)));
    if (this.href.length > 0 && !this.disabled) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("a", { class: Object.assign({}, trigger.class()), href: this.href, target: this.target, download: this.download, onClick: (ev) => this.onClickTrigger(ev) }, h("slot", null))));
    }
    if (this.clickable) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("button", { class: Object.assign({}, trigger.class()), disabled: this.disabled, onClick: (ev) => this.onClickTrigger(ev) }, h("slot", null))));
    }
    if (this.accordion) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses), onClick: (ev) => this.onClickTrigger(ev) }, h("div", { class: Object.assign({}, trigger.class()) }, h("slot", null))));
    }
    return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("div", { class: Object.assign({}, trigger.class()) }, h("slot", null))));
  }
  static get is() { return "bal-list-item"; }
  static get properties() {
    return {
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list item can be hovered"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "clickable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list item shows that it is clickable"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "selected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list item has a selected theme"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
      "accordion": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list item can be used as a accordion"
        },
        "attribute": "accordion",
        "reflect": false,
        "defaultValue": "false"
      },
      "subAccordionItem": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list item can be used as an accordion inside another accordion"
        },
        "attribute": "sub-accordion-item",
        "reflect": false,
        "defaultValue": "false"
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false,
        "defaultValue": "''"
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListItemTarget",
          "resolved": "\" _parent\" | \"_blank\" | \"_self\" | \"_top\"",
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
          "text": "Specifies where to open the linked document"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "download": {
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
          "text": "This attribute instructs browsers to download a URL instead of navigating to\nit, so the user will be prompted to save it as a local file. If the attribute\nhas a value, it is used as the pre-filled file name in the Save prompt\n(the user can still change the file name if they want)."
        },
        "attribute": "download",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "state": {}
    };
  }
  static get events() {
    return [{
        "method": "balNavigate",
        "name": "balNavigate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the link element has clicked"
        },
        "complexType": {
          "original": "BalEvents.BalListItemNavigateDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balGroupStateChanged",
        "name": "balGroupStateChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the state of the group is changing"
        },
        "complexType": {
          "original": "BalEvents.BalListItemGroupStateChangedDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balWillAnimate",
        "name": "balWillAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the animation starts"
        },
        "complexType": {
          "original": "BalEvents.BalListItemWillAnimateDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balDidAnimate",
        "name": "balDidAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the animation has finished"
        },
        "complexType": {
          "original": "BalEvents.BalListItemDidAnimateDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../../utils/config"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      },
      "present": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Opens the accordion",
          "tags": []
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(ignoreNested?: boolean) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Closes the accordion",
          "tags": []
        }
      },
      "toggle": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Triggers the accordion",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
ListItem.selectors = {
  accordionHead: '.bal-list__item__trigger > bal-list-item-accordion-head',
  accordionBody: '.bal-list__item__trigger > bal-list-item-accordion-body',
  accordionBodyWrapper: '.bal-list__item__trigger > .bal-list__item__accordion-body > .bal-list__item__accordion-body__content',
};
__decorate([
  Logger('bal-list-item')
], ListItem.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], ListItem.prototype, "configChanged", null);
