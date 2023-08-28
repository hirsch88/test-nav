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
import { isEscapeKey } from '@baloise/web-app-utils';
import { BEM } from '../../utils/bem';
import { balBrowser } from '../../utils/browser';
import { stopEventBubbling } from '../../utils/form-input';
import { PopoverVariantRenderer, FullscreenVariantRenderer, DrawerVariantRenderer, } from './variants';
import { debounce } from '../../utils/helpers';
import { Logger } from '../../utils/log';
import { VariantRenderer } from './variants/variant.renderer';
import { focusableQueryString } from '../../utils/focus-visible';
export class Popup {
  constructor() {
    this.popupId = `bal-pu-${popupIds++}`;
    this.isClickedOutsideOnMouseDown = false;
    this.isClickedOutsideOnMouseUp = false;
    this.popoverVariantRenderer = new VariantRenderer(new PopoverVariantRenderer());
    this.fullscreenVariantRenderer = new VariantRenderer(new FullscreenVariantRenderer());
    this.drawerVariantRenderer = new VariantRenderer(new DrawerVariantRenderer());
    this.lastVariant = 'popover';
    this.initialActive = this.active;
    this.debouncedGlobalClick = debounce((trigger) => this.notifyGlobalClick(trigger), 10);
    this.onBackdropClick = (ev) => {
      if (this.activeBackdropDismiss && this.presented && ev && ev.target) {
        const element = ev.target;
        return element.classList.contains('bal-popup__backdrop');
      }
      return false;
    };
    this.onCloseClick = () => {
      if (this.activeClosable) {
        this.dismiss();
      }
    };
    this.activeClosable = false;
    this.activeBackdropDismiss = false;
    this.activeVariant = 'popover';
    this.trigger = undefined;
    this.lastTrigger = undefined;
    this.label = '';
    this.reference = undefined;
    this.variant = 'popover';
    this.placement = 'bottom';
    this.arrow = false;
    this.backdrop = false;
    this.offset = 0;
    this.closable = false;
    this.backdropDismiss = false;
    this.active = false;
    this.presented = false;
    this.contentWidth = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async variantChanged(newVariant, oldVariant) {
    if (newVariant !== oldVariant) {
      await this.getVariantRenderer(oldVariant).dismiss(this);
      if (this.activeVariant !== newVariant) {
        this.lastVariant = this.activeVariant;
        this.activeVariant = newVariant;
        await this.getVariantRenderer(this.lastVariant).dismiss(this);
      }
      if (this.presented) {
        await this.getVariantRenderer(newVariant).present(this);
      }
    }
  }
  async activeChanged(newActive, oldActive) {
    if (newActive !== oldActive && newActive !== this.presented) {
      if (newActive) {
        this.present();
      }
      else {
        this.dismiss();
      }
    }
  }
  contentWidthChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      if (newValue === undefined) {
        this.el.style.removeProperty('--bal-popup-variant-popover-max-width');
      }
      else {
        this.el.style.setProperty('--bal-popup-variant-popover-max-width', `${this.contentWidth}px`);
      }
    }
  }
  componentDidLoad() {
    this.contentWidthChanged(this.contentWidth, 0);
    if (this.initialActive === true && this.presented !== true) {
      this.present();
    }
  }
  async listenOnGlobalClick(ev) {
    var _a;
    const target = ev.target;
    const trigger = target.closest('[bal-popup]');
    if (trigger && balBrowser.hasWindow) {
      const popupId = ((_a = trigger.attributes.getNamedItem('bal-popup')) === null || _a === void 0 ? void 0 : _a.nodeValue) || '';
      if (this.el.id === popupId) {
        this.debouncedGlobalClick(trigger);
      }
    }
  }
  async listenOnKeyDown(ev) {
    if (this.activeClosable && this.presented && isEscapeKey(ev)) {
      stopEventBubbling(ev);
      this.dismiss();
    }
  }
  async listenOnMouseDown(ev) {
    this.isClickedOutsideOnMouseDown = this.onBackdropClick(ev);
  }
  async listenOnMouseUp(ev) {
    this.isClickedOutsideOnMouseUp = this.onBackdropClick(ev);
  }
  async listenOnComponentClick() {
    if (this.presented &&
      this.activeBackdropDismiss &&
      this.isClickedOutsideOnMouseUp &&
      this.isClickedOutsideOnMouseDown) {
      await this.dismiss();
    }
  }
  async present() {
    await this.resetAllVariants();
    if (await this._present()) {
      this.lastTrigger = this.trigger;
      this.balChange.emit(this.presented);
    }
  }
  async dismiss() {
    await this.resetAllVariants();
    if (await this._dismiss()) {
      this.lastTrigger = this.trigger;
      this.balChange.emit(this.presented);
    }
  }
  async toggle() {
    if (this.presented) {
      return this.dismiss();
    }
    else {
      return this.present();
    }
  }
  async _emitChange() {
    this.balChange.emit(this.presented);
  }
  async _present() {
    if (balBrowser.hasDocument) {
      this.lastFocus = document.activeElement || undefined;
    }
    if (this.lastVariantRenderer) {
      await this.lastVariantRenderer.dismiss(this);
      this.presented = true;
    }
    this.lastVariantRenderer = this.getVariantRenderer();
    const result = await this.lastVariantRenderer.present(this);
    this.focusFirstDescendant();
    return result;
  }
  async _dismiss() {
    var _a;
    const result = await this.getVariantRenderer().dismiss(this);
    this.lastVariantRenderer = undefined;
    if (this.lastFocus && this.lastFocus.focus) {
      (_a = this.lastFocus) === null || _a === void 0 ? void 0 : _a.focus();
    }
    return result;
  }
  getVariantRenderer(variant = this.activeVariant) {
    switch (variant) {
      case 'fullscreen':
        return this.fullscreenVariantRenderer;
      case 'drawer':
        return this.drawerVariantRenderer;
      default:
        return this.popoverVariantRenderer;
    }
  }
  getValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    return attributeValue ? attributeValue.value : componentValue;
  }
  getNumberValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    if (attributeValue) {
      return parseInt(attributeValue.value, 10) || componentValue;
    }
    return componentValue;
  }
  getBooleanValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    if (attributeValue) {
      const booleanValue = attributeValue.value === '' || attributeValue.value === 'true' ? true : false;
      return attributeValue ? booleanValue : componentValue;
    }
    return componentValue;
  }
  notifyGlobalClick(trigger) {
    this.trigger = trigger;
    this.lastTrigger = this.lastTrigger === undefined ? this.trigger : this.lastTrigger;
    this.activeVariant = this.getValue(trigger, 'bal-popup-variant', this.variant);
    this.activeClosable = this.getBooleanValue(trigger, 'bal-popup-closable', this.closable);
    this.activeBackdropDismiss = this.getBooleanValue(trigger, 'bal-popup-backdrop-dismiss', this.backdropDismiss);
    if (this.presented && this.lastTrigger !== this.trigger) {
      this._present();
    }
    else {
      this.toggle();
    }
  }
  async resetAllVariants() {
    await this.dismissAllOtherPopups();
    if (this.lastVariant !== this.activeVariant) {
      const lastVariant = this.getVariantRenderer(this.lastVariant);
      await lastVariant.dismiss(this);
    }
    this.lastVariant = this.activeVariant;
  }
  async dismissAllOtherPopups() {
    if (balBrowser.hasDocument) {
      const popups = Array.from(document.getElementsByTagName('bal-popup')).filter(el => el.id !== this.el.id && el.ariaHidden !== 'true');
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        await popup._dismiss();
        await popup._emitChange();
      }
    }
  }
  focusFirstDescendant() {
    const { el } = this;
    const firstInput = el.querySelector(focusableQueryString);
    if (firstInput) {
      firstInput.focus();
    }
    else {
      el.focus();
    }
  }
  render() {
    const block = BEM.block('popup');
    const containerBlock = block.element('container');
    const arrowBlock = block.element('arrow');
    const backdropBlock = block.element('backdrop');
    const innerBlock = block.element('inner');
    const innerHeadBlock = innerBlock.element('head');
    const innerContentBlock = innerBlock.element('content');
    return (h(Host, { class: Object.assign({}, block.class()), role: "dialog", "aria-hidden": `${this.presented !== true}`, "aria-modal": `${this.presented === true}`, "aria-presented": `${this.presented === true}`, "aria-labelledby": `${this.popupId}-heading` }, h("div", { class: Object.assign({}, backdropBlock.class()), ref: backdropEl => (this.backdropEl = backdropEl) }), h("div", { class: Object.assign(Object.assign({}, containerBlock.class()), containerBlock.modifier(`variant-${this.activeVariant}`).class()), ref: containerEl => (this.containerEl = containerEl) }, h("div", { class: Object.assign({}, arrowBlock.class()), ref: arrowEl => (this.arrowEl = arrowEl) }), h("bal-stack", { layout: "vertical", px: this.activeVariant === 'popover' ? 'medium' : 'none', py: "medium", class: Object.assign({}, innerBlock.class()) }, this.label ? (h("bal-stack", { space: "auto", class: Object.assign({}, innerHeadBlock.class()) }, h("bal-heading", { "data-test": "bal-popup-label", level: "span", "visual-level": "large", id: `${this.popupId}-heading` }, this.label), this.activeClosable ? (h("bal-close", { "data-test": "bal-popup-close", tabindex: -1, onClick: () => this.onCloseClick() })) : (''))) : (''), h("div", { class: Object.assign({}, innerContentBlock.class()), ref: contentEl => (this.contentEl = contentEl), "data-test": "bal-popup-content" }, h("slot", null))))));
  }
  static get is() { return "bal-popup"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-popup.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-popup.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": "Label or title of the popup element"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "reference": {
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
          "text": "Id of the reference element default is the trigger element."
        },
        "attribute": "reference",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopupVariant",
          "resolved": "\"drawer\" | \"fullscreen\" | \"popover\"",
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
          "text": "Defines the variant / type of popup"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'popover'"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopupPlacement",
          "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
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
          "text": "If set it turns a popover into a fullscreen or a drawer on touch devices"
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'bottom'"
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
          "text": "If `true`, it shows a little indicator to the trigger element."
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
          "text": "If `true`, a backdrop will be displayed behind the modal."
        },
        "attribute": "backdrop",
        "reflect": false,
        "defaultValue": "false"
      },
      "offset": {
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
          "text": "Offset form trigger to popup."
        },
        "attribute": "offset",
        "reflect": false,
        "defaultValue": "0"
      },
      "closable": {
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
          "text": "If `true`, the modal can be closed with the escape key or the little close button."
        },
        "attribute": "closable",
        "reflect": false,
        "defaultValue": "false"
      },
      "backdropDismiss": {
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
          "text": "If `true`, the modal can be closed with the click outside of the modal"
        },
        "attribute": "backdrop-dismiss",
        "reflect": false,
        "defaultValue": "false"
      },
      "active": {
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
          "text": "If `true` the popup is open."
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "contentWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the width of the content"
        },
        "attribute": "content-width",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "activeClosable": {},
      "activeBackdropDismiss": {},
      "activeVariant": {},
      "trigger": {},
      "lastTrigger": {},
      "presented": {}
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
          "original": "BalEvents.BalPopupChangeDetail",
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
          "original": "BalEvents.BalPopupWillAnimateDetail",
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
          "original": "BalEvents.BalPopupDidAnimateDetail",
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
          "text": "Opens the popup",
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
          "text": "Closes the popup",
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
          "text": "Triggers the popup",
          "tags": []
        }
      },
      "_emitChange": {
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
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "_present": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
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
      },
      "_dismiss": {
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
        "propName": "variant",
        "methodName": "variantChanged"
      }, {
        "propName": "active",
        "methodName": "activeChanged"
      }, {
        "propName": "contentWidth",
        "methodName": "contentWidthChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "listenOnGlobalClick",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "listenOnKeyDown",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "mousedown",
        "method": "listenOnMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "mouseup",
        "method": "listenOnMouseUp",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "click",
        "method": "listenOnComponentClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-popup')
], Popup.prototype, "createLogger", null);
let popupIds = 0;
