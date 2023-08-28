import { Host, h } from '@stencil/core';
export class Notification {
  constructor() {
    this.color = '';
  }
  render() {
    return (h(Host, { class: "bal-notification" }, h("div", { class: `bal-notification__inner bal-notification__inner--is-${this.color}`, "data-testid": "bal-notification-content" }, h("slot", null))));
  }
  static get is() { return "bal-notification"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-notification.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-notification.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNotificationColor",
          "resolved": "\"\" | \"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\"",
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
          "text": "Defines the color of the element\nColor type primary is deprecated, please use info instead."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
