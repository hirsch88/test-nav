import { h, Host } from '@stencil/core';
import { BEM } from '../../../../utils/bem';
export class FieldHint {
  constructor() {
    this.subject = '';
    this.closeLabel = 'Close';
    this.small = false;
  }
  render() {
    const block = BEM.block('field-hint');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("bal-hint", { class: Object.assign({}, block.element('hint').class()), "data-testid": "bal-field-hint", closeLabel: this.closeLabel, small: this.small }, this.subject ? h("bal-hint-title", null, this.subject) : '', h("bal-hint-text", null, h("slot", null)))));
  }
  static get is() { return "bal-field-hint"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "subject": {
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
          "text": "Text of the inputs label"
        },
        "attribute": "subject",
        "reflect": false,
        "defaultValue": "''"
      },
      "closeLabel": {
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
          "text": "Text for the close button."
        },
        "attribute": "close-label",
        "reflect": false,
        "defaultValue": "'Close'"
      },
      "small": {
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
          "text": "Disables the close button for tablet and desktop"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
