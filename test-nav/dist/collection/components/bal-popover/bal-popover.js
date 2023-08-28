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
import { h, Host, } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import { BEM } from '../../utils/bem';
import { balBrowser } from '../../utils/browser';
import { Logger } from '../../utils/log';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
export class Popover {
  constructor() {
    this.popoverId = `bal-po-${PopoverIds++}`;
    this.isTouch = balBreakpoints.isTouch;
    this.isInMainNav = false;
    this.backdropHeight = 0;
    this.autoTrigger = false;
    this.hint = false;
    this.hover = false;
    this.arrow = false;
    this.backdrop = false;
    this.tooltip = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.padding = 0;
    this.position = 'bottom-start';
    this.active = false;
    this.mobileTop = false;
  }
  createLogger(log) {
    this.log = log;
  }
  async activeChanged(newValue, oldValue) {
    if (newValue === true && newValue !== oldValue) {
      this.present({ force: true });
    }
    else {
      this.dismiss({ force: true });
    }
  }
  componentWillLoad() {
    this.backdropHeight = this.getBackdropHeight();
  }
  componentDidLoad() {
    this.isInMainNav = this.footMobileNav !== null;
    if (this.triggerElement && this.menuElement) {
      this.popperInstance = createPopper(this.triggerElement, this.menuElement, {
        placement: this.tooltip ? 'bottom' : this.position,
        modifiers: [this.modifierOffset, this.modifierPreventOverflow],
      });
      let showEvents = [];
      let hideEvents = [];
      if (this.autoTrigger) {
        showEvents = ['click'];
      }
      if (this.tooltip) {
        showEvents = ['mouseenter', 'focus'];
        hideEvents = ['mouseleave', 'blur'];
      }
      showEvents.forEach(event => {
        if (this.triggerElement) {
          if (event === 'click') {
            this.triggerElement.addEventListener(event, () => this.toggle());
          }
          else {
            this.triggerElement.addEventListener(event, () => this.present());
          }
        }
      });
      hideEvents.forEach(event => {
        if (this.triggerElement) {
          this.triggerElement.addEventListener(event, () => this.dismiss());
        }
      });
    }
  }
  componentDidRender() {
    if (this.popperInstance) {
      this.popperInstance.setOptions((options) => (Object.assign(Object.assign({}, options), { placement: this.tooltip ? 'bottom' : this.position, modifiers: [
          ...options.modifiers.filter((m) => m.name !== 'offset' && m.name !== 'preventOverflow'),
          this.modifierOffset,
          this.modifierPreventOverflow,
        ] })));
      this.updatePopper();
    }
    if (balBrowser.isSafari && !this.isTouch) {
      clearTimeout(this.componentDidRenderTimer);
      this.componentDidRenderTimer = setTimeout(() => {
        var _a;
        const triggerWidth = (_a = this.element) === null || _a === void 0 ? void 0 : _a.clientWidth;
        if (triggerWidth) {
          this.element.style.maxWidth = `${triggerWidth}px`;
        }
        else {
          this.element.style.maxWidth = `initial`;
        }
      });
    }
  }
  handlePopoverPrepare(ev) {
    const popoverId = ev.detail;
    if (this.popoverId !== popoverId) {
      this.dismiss();
    }
  }
  async clickOnOutside(ev) {
    var _a;
    if (this.active) {
      if (!this.element.contains(ev.target)) {
        this.active = false;
      }
      if ((_a = this.backdropElement) === null || _a === void 0 ? void 0 : _a.isEqualNode(ev.target)) {
        this.active = false;
      }
    }
  }
  handleKeyUp(ev) {
    if (this.active && (ev.key === 'Escape' || ev.key === 'Esc')) {
      ev.preventDefault();
      this.dismiss();
    }
  }
  async tabOutside(ev) {
    if (ev.key === 'Tab' && !this.element.contains(document.activeElement) && this.active) {
      await this.toggle();
    }
  }
  breakpointListener(breakpoints) {
    this.isTouch = breakpoints.touch;
    this.isInMainNav = this.footMobileNav !== null;
    this.backdropHeight = this.getBackdropHeight();
  }
  async present(options = { force: false }) {
    var _a, _b;
    if (!this.active || options.force) {
      (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.setAttribute('data-show', '');
      (_b = this.menuElement) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-hidden', 'false');
      if (this.menuInnerElement) {
        this.menuInnerElement.scrollTo(0, 0);
      }
      this.balPopoverPrepare.emit(this.popoverId);
      this.balWillAnimate.emit(this.active);
      this.active = true;
      this.popperInstance.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [...options.modifiers, { name: 'eventListeners', enabled: true }] })));
      this.updatePopper();
      this.balChange.emit(this.active);
      this.balDidAnimate.emit(this.active);
    }
  }
  async dismiss(options = { force: false }) {
    var _a, _b;
    if (this.active || options.force) {
      (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-show');
      (_b = this.menuElement) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-hidden', 'true');
      this.balWillAnimate.emit(this.active);
      this.active = false;
      this.popperInstance.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [...options.modifiers, { name: 'eventListeners', enabled: false }] })));
      this.updatePopper();
      this.balChange.emit(this.active);
      this.balDidAnimate.emit(this.active);
    }
  }
  async toggle(options = { force: false }) {
    if (this.active) {
      await this.dismiss(options);
    }
    else {
      await this.present(options);
    }
  }
  get footMobileNav() {
    return this.element.closest('[slot="meta-mobile-foot"]');
  }
  get modifierOffset() {
    return {
      name: 'offset',
      options: {
        offset: [this.offsetX, this.offsetY + (this.tooltip || this.arrow ? 8 : 0)],
      },
    };
  }
  get modifierPreventOverflow() {
    return {
      name: 'preventOverflow',
      options: {
        padding: this.arrow || this.tooltip ? 8 : this.padding,
        altAxis: true,
      },
    };
  }
  get triggerElement() {
    return this.element.querySelector('[bal-popover-trigger]');
  }
  get menuElement() {
    return this.element.querySelector('bal-popover-content');
  }
  get menuInnerElement() {
    return this.element.querySelector('.bal-popover__content__inner');
  }
  getBackdropHeight() {
    if (balBrowser.hasWindow) {
      return this.isInMainNav ? (window.innerHeight - (this.isTouch ? 64 : 48)) / 16 : window.innerHeight / 16;
    }
    return 0;
  }
  updatePopper() {
    this.popperInstance.update();
  }
  render() {
    const block = BEM.block('popover');
    return (h(Host, { "aria-presented": this.active ? 'true' : null, "data-id": this.popoverId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('tooltip').class(this.tooltip)), block.modifier('arrow').class(this.arrow)), block.modifier('hint').class(this.hint)), block.modifier('backdrop').class(this.backdrop)) }, !this.mobileTop && (h("div", { ref: el => {
        this.backdropElement = el;
      }, class: Object.assign({}, block.element('backdrop').class(this.backdrop && this.active)), style: {
        '--bal-popover-backdrop-height': `${this.backdropHeight}rem`,
      } })), h("slot", null)));
  }
  static get is() { return "bal-popover"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-popover.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-popover.css"]
    };
  }
  static get properties() {
    return {
      "autoTrigger": {
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
          "text": "If `true` the popover automatically opens on a click"
        },
        "attribute": "auto-trigger",
        "reflect": false,
        "defaultValue": "false"
      },
      "hint": {
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
          "text": "If `true` the popover has max-width on tablet and desktop. On mobile it uses the whole viewport."
        },
        "attribute": "hint",
        "reflect": false,
        "defaultValue": "false"
      },
      "hover": {
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
          "text": "If `true` the popover shows on hover"
        },
        "attribute": "hover",
        "reflect": false,
        "defaultValue": "false"
      },
      "arrow": {
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
          "text": "If `true` a little arrow is added, which points to the trigger element"
        },
        "attribute": "arrow",
        "reflect": false,
        "defaultValue": "false"
      },
      "backdrop": {
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
          "text": "If `true` a backdrop is added"
        },
        "attribute": "backdrop",
        "reflect": false,
        "defaultValue": "false"
      },
      "tooltip": {
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
          "text": "If `true` the popover is shown as a tooltip"
        },
        "attribute": "tooltip",
        "reflect": false,
        "defaultValue": "false"
      },
      "offsetX": {
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
          "text": "Define the offset of the popover content."
        },
        "attribute": "offset-x",
        "reflect": false,
        "defaultValue": "0"
      },
      "offsetY": {
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
          "text": "Define the offset of the popover content."
        },
        "attribute": "offset-y",
        "reflect": false,
        "defaultValue": "0"
      },
      "padding": {
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
          "text": "Define padding of the overflow"
        },
        "attribute": "padding",
        "reflect": false,
        "defaultValue": "0"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopoverPlacement",
          "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
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
          "text": "Define the position of the popover content."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'bottom-start'"
      },
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
          "text": "If `true` the popover content is open."
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      },
      "mobileTop": {
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
          "text": "If `true` there will be no backdrop"
        },
        "attribute": "mobile-top",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isTouch": {},
      "isInMainNav": {},
      "backdropHeight": {}
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
          "text": "Listen when the popover opens or closes. Returns the current value."
        },
        "complexType": {
          "original": "BalEvents.BalPopoverChangeDetail",
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
          "original": "BalEvents.BalPopoverWillAnimateDetail",
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
          "original": "BalEvents.BalPopoverDidAnimateDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balPopoverPrepare",
        "name": "balPopoverPrepare",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "- Use this to close unused popovers."
            }],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "present": {
        "complexType": {
          "signature": "(options?: PopoverPresentOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "PopoverPresentOptions": {
              "location": "local",
              "path": "/Users/hirsch/dev/baloise/design-system/refactor/issue-911/packages/components/src/components/bal-popover/bal-popover.tsx"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Open the popover",
          "tags": []
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(options?: PopoverPresentOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "PopoverPresentOptions": {
              "location": "local",
              "path": "/Users/hirsch/dev/baloise/design-system/refactor/issue-911/packages/components/src/components/bal-popover/bal-popover.tsx"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Closes the popover",
          "tags": []
        }
      },
      "toggle": {
        "complexType": {
          "signature": "(options?: PopoverPresentOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "PopoverPresentOptions": {
              "location": "local",
              "path": "/Users/hirsch/dev/baloise/design-system/refactor/issue-911/packages/components/src/components/bal-popover/bal-popover.tsx"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Open or closes the popover",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "active",
        "methodName": "activeChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "balPopoverPrepare",
        "method": "handlePopoverPrepare",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "clickOnOutside",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "handleKeyUp",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "keyup",
        "method": "tabOutside",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-popover')
], Popover.prototype, "createLogger", null);
__decorate([
  ListenToBreakpoints()
], Popover.prototype, "breakpointListener", null);
let PopoverIds = 0;
