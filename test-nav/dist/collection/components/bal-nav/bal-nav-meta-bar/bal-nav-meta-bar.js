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
import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { balBrowser } from '../../../utils/browser';
export class NavMetaBar {
  constructor() {
    this.navMetaBarId = `bal-nav-meta-bar-${NavMetaBarIds++}`;
    this.previousY = 0;
    this.isHidden = false;
    this.variant = 'primary';
    this.size = 'normal';
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  handleScroll() {
    if (balBrowser.hasWindow && balBrowser.hasDocument && this.position === 'sticky-top') {
      const maxScrollHeight = document.body.scrollHeight - document.body.clientHeight;
      const isOnTop = 0 >= window.scrollY;
      const isOverViewportTop = 0 > window.scrollY;
      const isOverViewportBottom = maxScrollHeight <= window.scrollY;
      const didMoveDownwards = window.scrollY > this.previousY;
      this.isHidden = !isOnTop && (didMoveDownwards || isOverViewportBottom || isOverViewportTop);
      this.previousY = window.scrollY;
      const transformElements = Array.from(document.querySelectorAll('.bal-nav-meta-bar-transform'));
      if (transformElements.length > 0) {
        for (let index = 0; index < transformElements.length; index++) {
          const transformElement = transformElements[index];
          if (this.isHidden) {
            if (this.size === 'small') {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-small`);
            }
            else {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-normal`);
            }
          }
          else {
            transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
            transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
          }
        }
      }
    }
  }
  render() {
    const block = BEM.block('nav-meta-bar');
    return (h(Host, { id: this.navMetaBarId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class()), block.modifier(`size-${this.size}`).class()), block.modifier(`position-${this.position}`).class(this.position !== 'none')), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')) }, h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  static get is() { return "bal-nav-meta-bar"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-meta-bar.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-meta-bar.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMetaBarVariant",
          "resolved": "\"grey\" | \"primary\" | \"white\"",
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
          "text": "Defines the color variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMetaBarSize",
          "resolved": "\"normal\" | \"small\"",
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
          "text": "Defines the height of the bar"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "invisible": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMetaBarInvisible",
          "resolved": "\"mobile\" | \"none\" | \"tablet\"",
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
          "text": "Tells when to hide the bar"
        },
        "attribute": "invisible",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMetaBarPosition",
          "resolved": "\"fixed-bottom\" | \"fixed-top\" | \"none\" | \"sticky-top\"",
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
          "text": "Defines the position of the bar"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'none'"
      }
    };
  }
  static get states() {
    return {
      "isHidden": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "scroll",
        "method": "handleScroll",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Logger('bal-meta-bar')
], NavMetaBar.prototype, "createLogger", null);
let NavMetaBarIds = 0;
