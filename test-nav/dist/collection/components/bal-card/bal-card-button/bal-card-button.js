import { Host, h } from '@stencil/core';
export class CardButton {
  constructor() {
    this.icon = '';
    this.elementType = 'button';
    this.disabled = false;
    this.href = undefined;
    this.target = '_self';
    this.iconRight = '';
    this.loading = false;
  }
  render() {
    return (h(Host, { class: "bal-card-button" }, h("bal-button", { color: "info", expanded: true, "bottom-rounded": true, icon: this.icon, iconRight: this.iconRight, elementType: this.elementType, disabled: this.disabled, href: this.href, target: this.target, loading: this.loading }, h("slot", null))));
  }
  static get is() { return "bal-card-button"; }
  static get properties() {
    return {
      "icon": {
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
          "text": "Name of the icon like `edit`."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "''"
      },
      "elementType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCardButtonElementType",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
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
          "text": "The type of button."
        },
        "attribute": "element-type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "disabled": {
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
          "text": "If `true`, the user cannot interact with the button."
        },
        "attribute": "disabled",
        "reflect": true,
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
          "original": "BalProps.BalCardButtonTarget",
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
      },
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
          "tags": [],
          "text": "Name of the right button icon"
        },
        "attribute": "icon-right",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "If `true` the label is hidden and a loading spinner is shown instead."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
