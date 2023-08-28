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
import { balBreakpoints, ListenToBreakpoints } from '../../../utils/breakpoints';
export class NavigationMenuList {
  constructor() {
    this.setHeadingLevel = () => {
      if (balBreakpoints.isTouch) {
        this.headingLevel = 'h5';
        return;
      }
      this.headingLevel = 'h3';
    };
    this.color = 'white';
    this.headline = undefined;
    this.href = undefined;
    this.target = '_self';
    this.tracking = {};
    this.headingLevel = undefined;
  }
  breakpointListener(_breakpoints) {
    this.setHeadingLevel();
  }
  connectedCallback() {
    this.setHeadingLevel();
  }
  render() {
    const navMenuListEl = BEM.block('nav').element('menu').element('list');
    return (h(Host, { class: Object.assign(Object.assign({}, navMenuListEl.class()), navMenuListEl.modifier(`context-${this.color}`).class()) }, h("bal-card", { class: Object.assign({}, navMenuListEl.element('card').class()), flat: true, color: this.color === 'grey' ||
        this.color === 'yellow' ||
        this.color === 'red' ||
        this.color === 'purple' ||
        this.color === 'green'
        ? this.color
        : '' }, h("bal-card-content", null, this.href ? (h("a", Object.assign({ href: this.href, target: this.target }, this.tracking), h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline))) : (h("bal-heading", { class: Object.assign({}, navMenuListEl.element('card').element('heading').class()), level: this.headingLevel, space: "none" }, this.headline)), h("slot", { name: "links" })))));
  }
  static get is() { return "bal-navigation-menu-list"; }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavigationLevelBlockColor",
          "resolved": "\"green\" | \"grey\" | \"purple\" | \"red\" | \"white\" | \"yellow\"",
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
          "text": "Color of the menu list card background"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'white'"
      },
      "headline": {
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
          "text": "Optional headline of the menu list card"
        },
        "attribute": "headline",
        "reflect": false
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
          "text": "Optional href of the menu list card headline as link"
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
          "text": "Target of the menu list card headline target as link"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "tracking": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Attributes",
          "resolved": "{ [key: string]: any; }",
          "references": {
            "Attributes": {
              "location": "import",
              "path": "../../../utils/attributes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{}"
      }
    };
  }
  static get states() {
    return {
      "headingLevel": {}
    };
  }
}
__decorate([
  ListenToBreakpoints()
], NavigationMenuList.prototype, "breakpointListener", null);
