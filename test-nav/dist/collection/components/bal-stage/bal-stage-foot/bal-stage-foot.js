import { h, Host } from '@stencil/core';
export class StageFoot {
  render() {
    return (h(Host, { class: "hero-foot" }, h("slot", null)));
  }
  static get is() { return "bal-stage-foot"; }
  static get elementRef() { return "el"; }
}
