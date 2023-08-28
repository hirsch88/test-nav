import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class Navbar {
  constructor() {
    this.light = false;
    this.interface = 'app';
    this.container = '';
  }
  interfaceHandler() {
    this.updateProps(['bal-navbar-brand', 'bal-navbar-menu', 'bal-navbar-menu-start', 'bal-navbar-menu-end'], 'interface');
  }
  componentWillLoad() {
    this.interfaceHandler();
  }
  updateProps(selectors, key) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.element.querySelectorAll(selectors.join(', '));
    components.forEach(c => callback(c));
  }
  render() {
    const navbarEl = BEM.block('navbar');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, navbarEl.class()), navbarEl.modifier(`context-${this.interface}`).class()), navbarEl.modifier(`is-light`).class(this.light)) }, h("nav", { role: "navigation", "aria-label": "main navigation", class: Object.assign(Object.assign({}, navbarEl.element('nav').class()), { container: true, [`is-${this.container}`]: this.container !== '' }) }, h("slot", null))));
  }
  static get is() { return "bal-navbar"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-navbar.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-navbar.css"]
    };
  }
  static get properties() {
    return {
      "light": {
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
          "text": "It `true` the navbar has a white background. Always use the blue header."
        },
        "attribute": "light",
        "reflect": false,
        "defaultValue": "false"
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavbarInterface",
          "resolved": "\"app\" | \"simple\"",
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
          "text": "Defines the type of navbar. App is used for almost every web applications\nlike the portal app. For our sales funnel we recommend to use the simple navbar.\nMeta and main are used for the website."
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'app'"
      },
      "container": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fluid' | 'detail-page' | 'compact' | 'blog-page' | 'wide' | ''",
          "resolved": "\"\" | \"blog-page\" | \"compact\" | \"detail-page\" | \"fluid\" | \"wide\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the content content width with the regular container classes"
        },
        "attribute": "container",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "interface",
        "methodName": "interfaceHandler"
      }];
  }
}
