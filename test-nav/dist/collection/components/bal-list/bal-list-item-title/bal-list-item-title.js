import { Host, h } from '@stencil/core';
export class ListItemTitle {
  constructor() {
    this.level = 'h5';
    this.visualLevel = undefined;
  }
  render() {
    return (h(Host, { class: "bal-list__item__title" }, h("bal-heading", { level: this.level, visualLevel: this.visualLevel, space: "none" }, h("slot", null))));
  }
  static get is() { return "bal-list-item-title"; }
  static get properties() {
    return {
      "level": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingLevel",
          "resolved": "\"display\" | \"display-2\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"large\" | \"medium\" | \"normal\" | \"p\" | \"span\" | \"x-large\" | \"xx-large\" | \"xxx-large\" | \"xxxx-large\" | \"xxxxx-large\"",
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
          "text": "Heading level with value 'h4' on default"
        },
        "attribute": "level",
        "reflect": false,
        "defaultValue": "'h5'"
      },
      "visualLevel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingVisualLevel",
          "resolved": "\"display\" | \"display-2\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"large\" | \"medium\" | \"normal\" | \"x-large\" | \"xx-large\" | \"xxx-large\" | \"xxxx-large\" | \"xxxxx-large\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Make the visual style mimic a specific heading level.\nThis option allows you to make e.g. h1 visually look like h3,\nbut still keep it h1 in the markup."
        },
        "attribute": "visual-level",
        "reflect": false
      }
    };
  }
}
