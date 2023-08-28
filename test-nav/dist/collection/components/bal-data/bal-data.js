import { Host, h } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class Data {
  constructor() {
    this.inputElements = ['bal-data-item'];
    this.border = false;
    this.horizontal = false;
  }
  borderHandler() {
    this.updateProps([...this.inputElements], 'border');
  }
  updateProps(selectors, key) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.element.querySelectorAll(selectors.join(', '));
    components.forEach((c) => callback(c));
  }
  componentWillLoad() {
    this.borderHandler();
  }
  render() {
    const block = BEM.block('data');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('has-border').class(this.border)), block.modifier('is-horizontal').class(this.horizontal)) }, h("slot", null)));
  }
  static get is() { return "bal-data"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-data.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-data.css"]
    };
  }
  static get properties() {
    return {
      "border": {
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
          "text": "If `true` a bottom border is added to the data-item."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      },
      "horizontal": {
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
          "text": "If `true` the data list is horizontal instead of vertical."
        },
        "attribute": "horizontal",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "border",
        "methodName": "borderHandler"
      }];
  }
}
