import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMeta {
  constructor() {
    this.ariaLabelMeta = '';
  }
  render() {
    const metaEl = BEM.block('nav').element('meta');
    return (h(Host, { class: Object.assign({}, metaEl.class()) }, h("nav", { class: "container", role: "navigation", "aria-label": this.ariaLabelMeta }, h("slot", null))));
  }
  static get is() { return "bal-navigation-meta"; }
  static get properties() {
    return {
      "ariaLabelMeta": {
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
          "text": "aria label for meta navigation bar"
        },
        "attribute": "aria-label-meta",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
