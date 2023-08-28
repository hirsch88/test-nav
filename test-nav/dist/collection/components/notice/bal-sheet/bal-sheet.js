import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class Sheet {
  constructor() {
    this.containerSize = '';
  }
  render() {
    const block = BEM.block('sheet');
    const container = block.element('container');
    const containerInner = container.element('inner');
    const containerModifier = this.containerSize !== '' ? `is-${this.containerSize}` : '';
    return (h(Host, { class: Object.assign({}, block.class()) }, h("div", { class: Object.assign(Object.assign({}, container.class()), { container: true, [containerModifier]: true }) }, h("div", { class: Object.assign({}, containerInner.class()) }, h("slot", null)))));
  }
  static get is() { return "bal-sheet"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-sheet.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-sheet.css"]
    };
  }
  static get properties() {
    return {
      "containerSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalSheetContainer",
          "resolved": "\"\" | \"blog-page\" | \"compact\" | \"detail-page\" | \"fluid\"",
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
          "text": "Defines content width of the stage"
        },
        "attribute": "container-size",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
