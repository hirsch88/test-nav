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
import { ListenToConfig } from '../../utils/config';
import { BEM } from '../../utils/bem';
import { preventDefault } from '../form/bal-select/utils/utils';
import { BalScrollHandler } from '../../utils/scroll';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
export class Hint {
  constructor() {
    this.bodyScrollHandler = new BalScrollHandler();
    this.onPopoverChange = (ev) => {
      this.isActive = ev.detail;
      preventDefault(ev);
    };
    this.isActive = false;
    this.innerCloseLabel = 'Close';
    this.isMobile = balBreakpoints.isMobile;
    this.closeLabel = undefined;
    this.small = false;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  componentDidRender() {
    this.updateContent();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  breakpointListener(breakpoints) {
    const isCurrentMobile = breakpoints.mobile;
    if (isCurrentMobile !== this.isMobile) {
      this.isActive = false;
    }
    this.isMobile = isCurrentMobile;
  }
  async configChanged(state) {
    if (!this.closeLabel) {
      switch (state.language) {
        case 'de':
          this.innerCloseLabel = 'Schliessen';
          break;
        case 'fr':
          this.innerCloseLabel = 'Fermer';
          break;
        case 'it':
          this.innerCloseLabel = 'Chiudere';
          break;
        case 'nl':
          this.innerCloseLabel = 'Sluiten';
          break;
        default:
          this.innerCloseLabel = 'Close';
          break;
      }
    }
  }
  async toggle() {
    if (this.isActive) {
      this.dismiss();
    }
    else {
      this.present();
    }
  }
  async present() {
    if (this.popoverElement) {
      this.popoverElement.present();
    }
    if (this.isMobile) {
      this.bodyScrollHandler.disable();
    }
    this.isActive = true;
  }
  async dismiss() {
    if (this.popoverElement) {
      this.popoverElement.dismiss();
    }
    if (this.isMobile) {
      this.bodyScrollHandler.enable();
    }
    this.isActive = false;
  }
  updateContent() {
    if (this.hintContentEl && this.slotWrapperEl) {
      this.hintContentEl.innerHTML = this.slotWrapperEl.innerHTML;
    }
  }
  render() {
    const block = BEM.block('hint');
    const elIcon = block.element('icon');
    const elContent = block.element('content');
    const elButtons = elContent.element('buttons');
    const padding = this.isMobile ? 0 : 8;
    const offsetY = this.isMobile ? 0 : 16;
    const TriggerIcon = () => {
      return (h("bal-icon", { class: Object.assign({}, elIcon.class()), "data-testid": "bal-hint-trigger", "bal-popover-trigger": true, "aria-haspopup": "true", role: "button", name: "info-circle", onClick: () => this.toggle() }));
    };
    const HintContent = () => {
      return (h("div", { class: Object.assign({}, elContent.class()), "data-testid": "bal-hint-content" }, h("div", { ref: el => (this.hintContentEl = el) }), h("bal-button-group", { class: Object.assign(Object.assign({}, elButtons.class()), elButtons.modifier('is-hidden-desktop').class(this.small)) }, h("bal-button", { "data-testid": "bal-hint-close", color: "info", onClick: () => this.dismiss() }, this.closeLabel ? this.closeLabel : this.innerCloseLabel))));
    };
    const MobileOverlay = () => {
      const elOverlay = block.element('overlay');
      return (h("div", { class: Object.assign({}, elOverlay.class()) }, h(TriggerIcon, null), h("div", { class: Object.assign(Object.assign({}, elOverlay.element('content').class()), elOverlay.element('content').modifier('active').class(this.isActive)) }, h(HintContent, null))));
    };
    const Popover = () => {
      return (h("div", { class: Object.assign({}, block.element('popover').class()) }, h("bal-popover", { hint: true, position: "right", offsetX: 0, offsetY: offsetY, padding: padding, ref: el => (this.popoverElement = el), onBalChange: this.onPopoverChange }, h(TriggerIcon, null), h("bal-popover-content", { color: "grey" }, h(HintContent, null)))));
    };
    const HintElement = this.isMobile ? MobileOverlay : Popover;
    return (h(Host, { class: Object.assign({}, block.class()) }, h(HintElement, null), h("div", { ref: el => (this.slotWrapperEl = el), style: { display: 'none' } }, h("slot", null))));
  }
  static get is() { return "bal-hint"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-hint.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-hint.css"]
    };
  }
  static get properties() {
    return {
      "closeLabel": {
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
          "text": "Text for the close button."
        },
        "attribute": "close-label",
        "reflect": false
      },
      "small": {
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
          "text": "Disables the close button for tablet and desktop"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isActive": {},
      "innerCloseLabel": {},
      "isMobile": {}
    };
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
          "text": "Toggles the hint box.",
          "tags": []
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
          "text": "Opens the hint box.",
          "tags": []
        }
      },
      "dismiss": {
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
          "text": "Closes the hint box.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
}
__decorate([
  ListenToBreakpoints()
], Hint.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], Hint.prototype, "configChanged", null);
