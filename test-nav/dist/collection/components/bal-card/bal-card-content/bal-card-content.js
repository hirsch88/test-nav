import { Host, h } from '@stencil/core';
export class CardContent {
  render() {
    return (h(Host, { class: "bal-card-content" }, h("slot", null)));
  }
  static get is() { return "bal-card-content"; }
}
