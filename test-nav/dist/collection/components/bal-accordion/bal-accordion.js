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
import { debounceEvent, transitionEndAsync, waitForComponent } from '../../utils/helpers';
import { ListenToConfig } from '../../utils/config';
import { BEM } from '../../utils/bem';
import { raf } from '../../utils/helpers';
import { Logger } from '../../utils/log';
export class Accordion {
  constructor() {
    this.componentId = `bal-accordion-${accordionIds++}`;
    this.updateState = (initialUpdate = false) => {
      if (this.active) {
        this.expand(initialUpdate);
      }
      else {
        this.collapse(initialUpdate);
      }
    };
    this.setState = (state) => {
      this.state = state;
      if (this.version === 2) {
        this.updateTriggerElement();
        this.updateDetailsElement();
        this.updateSummaryElement();
      }
    };
    this.updateDetailsElement = () => {
      const detailsElement = this.detailsElement;
      if (detailsElement) {
        detailsElement.state = this.state;
        detailsElement.active = this.active;
        detailsElement.animated = this.animated;
      }
    };
    this.updateTriggerElement = () => {
      const triggerElement = this.triggerElement;
      if (triggerElement) {
        triggerElement.state = this.state;
        triggerElement.active = this.active;
      }
    };
    this.updateSummaryElement = () => {
      const summaryElement = this.summaryElement;
      if (summaryElement) {
        summaryElement.state = this.state;
        summaryElement.active = this.active;
      }
    };
    this.expand = (initialUpdate = false) => {
      this.active = true;
      const detailsElement = this.detailsElement;
      const detailsWrapperElement = this.detailsWrapperElement;
      if (initialUpdate || detailsElement === null || detailsWrapperElement === null) {
        this.setState(4);
        return this.active;
      }
      if (this.state === 4) {
        return this.active;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.setState(8);
          this.currentRaf = raf(async () => {
            const contentHeight = detailsWrapperElement.offsetHeight;
            const waitForTransition = transitionEndAsync(detailsElement, 300);
            detailsElement.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.active);
            await waitForTransition;
            this.setState(4);
            detailsElement.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.active);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.active);
        this.setState(4);
        this.balDidAnimate.emit(this.active);
      }
      return this.active;
    };
    this.collapse = (initialUpdate = false) => {
      this.active = false;
      const detailsElement = this.detailsElement;
      if (initialUpdate || detailsElement === null) {
        this.setState(1);
        return this.active;
      }
      if (this.state === 1) {
        return this.active;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = detailsElement.offsetHeight;
          detailsElement.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(detailsElement, 300);
            this.setState(2);
            this.balDidAnimate.emit(this.active);
            await waitForTransition;
            this.setState(1);
            detailsElement.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.active);
          });
        });
      }
      else {
        this.balDidAnimate.emit(this.active);
        this.setState(1);
        this.balDidAnimate.emit(this.active);
      }
      return this.active;
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onTriggerClickV1 = () => {
      this.humanToggle();
    };
    this.state = 1;
    this.animated = true;
    this.active = false;
    this.debounce = 0;
    this.openLabel = '';
    this.openIcon = 'plus';
    this.closeLabel = '';
    this.closeIcon = 'close';
    this.card = false;
    this.version = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async activeChanged(newActive, oldActive) {
    if (newActive !== oldActive) {
      this.active = newActive;
      this.updateState();
    }
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  async connectedCallback() {
    this.debounceChanged();
    await waitForComponent(this.el);
    if (this.active) {
      this.activeChanged(this.active, false);
    }
    this.updateState(true);
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async present() {
    return this.expand();
  }
  async dismiss() {
    return this.collapse();
  }
  async toggle() {
    if (this.active) {
      return this.collapse();
    }
    else {
      return this.expand();
    }
  }
  async humanToggle() {
    if (this.active) {
      await this.collapse();
    }
    else {
      await this.expand();
    }
    this.balChange.emit(this.active);
    return this.active;
  }
  get summaryElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-summary`)) || null;
  }
  get triggerElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-trigger`)) || null;
  }
  get detailsElement() {
    var _a;
    if (this.version === 1) {
      return this.contentEl || null;
    }
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-details`)) || null;
  }
  get detailsWrapperElement() {
    var _a;
    if (this.version === 1) {
      return this.contentElWrapper || null;
    }
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.componentId}-details > div`)) || null;
  }
  render() {
    return this.version === 2 ? this.renderVersion2() : this.renderVersion1();
  }
  renderVersion2() {
    const block = BEM.block('accordion');
    return (h(Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('card-v2').class(this.card)), block.modifier('animated').class(this.animated)) }));
  }
  renderVersion1() {
    const label = this.active ? this.closeLabel : this.openLabel;
    const icon = this.active ? this.closeIcon : this.openIcon;
    const block = BEM.block('accordion');
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { id: this.componentId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('card-v1').class(this.card)), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, h("div", { class: Object.assign({}, block.element('wrapper').class()) }, h("div", { class: Object.assign(Object.assign({}, block.element('trigger').class()), block.element('trigger').modifier('card').class(this.card)), "data-testid": "bal-accordion-summary" }, h("bal-button", { id: `${this.componentId}-button`, "aria-controls": `${this.componentId}-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, color: 'info', icon: icon, onClick: this.onTriggerClickV1 }, label)), h("div", { id: `${this.componentId}-content`, "aria-labelledby": `${this.componentId}-button`, role: "region", part: contentPart, class: Object.assign(Object.assign({}, block.element('content').class()), block.element('content').modifier('card').class(this.card)), ref: contentEl => (this.contentEl = contentEl) }, h("div", { id: `${this.componentId}-content-wrapper`, "data-testid": "bal-accordion-details", class: Object.assign({}, block.element('content').element('wrapper').class()), ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null))))));
  }
  static get is() { return "bal-accordion"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-accordion.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-accordion.css"]
    };
  }
  static get properties() {
    return {
      "active": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the accordion is open."
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      },
      "debounce": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "openLabel": {
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
          "text": "Label of the open trigger button"
        },
        "attribute": "open-label",
        "reflect": false,
        "defaultValue": "''"
      },
      "openIcon": {
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
          "text": "BalIcon of the open trigger button"
        },
        "attribute": "open-icon",
        "reflect": false,
        "defaultValue": "'plus'"
      },
      "closeLabel": {
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
          "text": "Label of the close trigger button"
        },
        "attribute": "close-label",
        "reflect": false,
        "defaultValue": "''"
      },
      "closeIcon": {
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
          "text": "BalIcon of the close trigger button"
        },
        "attribute": "close-icon",
        "reflect": false,
        "defaultValue": "'close'"
      },
      "card": {
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
          "text": "If `true` the accordion is used on the bottom of a card"
        },
        "attribute": "card",
        "reflect": false,
        "defaultValue": "false"
      },
      "version": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "defines the version of the component"
            }],
          "text": ""
        },
        "attribute": "version",
        "reflect": false,
        "defaultValue": "1"
      }
    };
  }
  static get states() {
    return {
      "state": {},
      "animated": {}
    };
  }
  static get events() {
    return [{
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the accordion has opened or closed"
        },
        "complexType": {
          "original": "BalEvents.BalAccordionChangeDetail",
          "resolved": "boolean",
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
          "original": "BalEvents.BalAccordionWillAnimateDetail",
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
          "original": "BalEvents.BalAccordionDidAnimateDetail",
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
              "path": "../../utils/config"
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
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Opens the accordion",
          "tags": []
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Closes the accordion",
          "tags": []
        }
      },
      "toggle": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Triggers the accordion",
          "tags": []
        }
      },
      "humanToggle": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "active",
        "methodName": "activeChanged"
      }, {
        "propName": "debounce",
        "methodName": "debounceChanged"
      }];
  }
}
__decorate([
  Logger('bal-accordion')
], Accordion.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], Accordion.prototype, "configChanged", null);
let accordionIds = 0;
