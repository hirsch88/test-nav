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
import { Logger } from '../../../utils/log';
import { BEM } from '../../../utils/bem';
export class NavigationLink {
  constructor() {
    this.variant = '';
    this.selected = false;
    this.clickable = false;
    this.href = undefined;
    this.target = '_self';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link');
    const { href, target } = this;
    const hasLink = href !== undefined && href !== '';
    const hasVariant = this.variant !== '';
    const Link = hasLink ? 'a' : this.clickable ? 'button' : 'span';
    let linkAttributes = {};
    if (hasLink) {
      linkAttributes = { href, target };
    }
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class(hasVariant)) }, h(Link, Object.assign({ "data-test": "bal-nav-link", class: Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier(`variant-${this.variant}`).class(hasVariant)), block
        .element('native')
        .modifier('selected')
        .class(this.selected && (hasLink || this.clickable))) }, linkAttributes), h("slot", null))));
  }
  static get is() { return "bal-nav-link"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-link.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-link.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavLinkVariant",
          "resolved": "\"\" | \"overview\" | \"title\"",
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
          "text": "Defines the variant of the link"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "If `true` the link gets selected with a underline"
        },
        "attribute": "selected",
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
          "text": "If `true` the link can be clickable"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "href": {
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
          "text": "Specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonTarget",
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
          "text": "Specifies where to display the linked URL.\nOnly applies when an `href` is provided."
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      }
    };
  }
}
__decorate([
  Logger('bal-nav-link')
], NavigationLink.prototype, "createLogger", null);
