import { h, Host } from '@stencil/core';
export class FieldControl {
  constructor() {
    this.iconRight = '';
    this.iconLeft = '';
    this.expandedOnMobile = undefined;
    this.loading = false;
  }
  get buildIconLeftTemplate() {
    if (this.iconLeft) {
      return h("bal-icon", { name: this.iconLeft, color: "info", class: "is-left", size: "small" });
    }
    return '';
  }
  get buildIconRightTemplate() {
    if (this.iconRight) {
      return h("bal-icon", { name: this.iconRight, color: "info", class: "is-right", size: "small" });
    }
    return '';
  }
  render() {
    return (h(Host, { class: {
        'bal-field-control': true,
        'control': true,
        'has-icons-left': !!this.iconLeft,
        'has-icons-right': !!this.iconRight,
        'is-loading': this.loading,
        'bal-field-control--expanded-on-mobile': !!this.expandedOnMobile,
      } }, h("slot", null), this.buildIconLeftTemplate, this.buildIconRightTemplate));
  }
  static get is() { return "bal-field-control"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "iconRight": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Baloise icon for the right side of the input"
            }],
          "text": ""
        },
        "attribute": "icon-right",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconLeft": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Baloise icon for the left side of the input"
            }],
          "text": ""
        },
        "attribute": "icon-left",
        "reflect": false,
        "defaultValue": "''"
      },
      "expandedOnMobile": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` on mobile devices the form control children are aligned verticaly and expanded to the full width"
        },
        "attribute": "expanded-on-mobile",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "loading": {
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
          "text": "If `true` a loading spinner is visible at the end of the input"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
