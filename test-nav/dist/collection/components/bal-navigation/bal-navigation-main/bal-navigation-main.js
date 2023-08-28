import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMain {
  constructor() {
    this.ariaLabelMain = '';
  }
  render() {
    const mainEl = BEM.block('nav').element('main');
    return (h(Host, { class: Object.assign({}, mainEl.class()) }, h("nav", { role: "navigation", "aria-label": this.ariaLabelMain }, h("slot", { name: "main-head" })), h("slot", { name: "main-body" })));
  }
  static get is() { return "bal-navigation-main"; }
  static get properties() {
    return {
      "ariaLabelMain": {
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
          "text": "aria label for main navigation bar"
        },
        "attribute": "aria-label-main",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
