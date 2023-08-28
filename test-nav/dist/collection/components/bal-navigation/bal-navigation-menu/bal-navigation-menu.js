import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMenu {
  constructor() {
    this.linkHref = undefined;
    this.linkName = undefined;
    this.target = '_self';
    this.elements = [];
    this.tracking = {};
  }
  render() {
    const navMenuEl = BEM.block('nav').element('menu');
    return (h(Host, { class: Object.assign({}, navMenuEl.class()) }, this.linkHref && this.linkName && (h("div", { class: Object.assign({}, navMenuEl.element('link').class()) }, h("a", Object.assign({ href: this.linkHref, target: this.target }, this.tracking), this.linkName, " \u279E"))), this.elements && (h("div", { style: { overflow: 'hidden' } }, h("div", { class: Object.assign({ 'columns is-multiline': true }, navMenuEl.element('wrapper').class()) }, this.elements.some(subLevel => subLevel.color === 'white') && (h("div", { class: {
        'bal-nav__menu__white-list__wrapper column is-full is-6-desktop is-two-thirds-widescreen': true,
      } }, h("div", { class: Object.assign({}, navMenuEl.element('white-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'white')
      .map(block => {
      var _a;
      return (block && (h("bal-navigation-menu-list", { headline: block.label, href: block.link, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label)))))));
    })))), this.elements.some(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green') && (h("div", { class: Object.assign({ 'column is-full is-6-desktop is-one-third-widescreen': true }, navMenuEl.element('grey-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green')
      .map(block => {
      var _a;
      return (h("bal-navigation-menu-list", { headline: block.label, href: block.link, color: block.color, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label))))));
    }))))))));
  }
  static get is() { return "bal-navigation-menu"; }
  static get properties() {
    return {
      "linkHref": {
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
          "text": ""
        },
        "attribute": "link-href",
        "reflect": false
      },
      "linkName": {
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
          "text": ""
        },
        "attribute": "link-name",
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
          "text": ""
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "elements": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "LevelInfo[]",
          "resolved": "LevelInfo[]",
          "references": {
            "LevelInfo": {
              "location": "import",
              "path": "../utils/level.utils"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
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
}
