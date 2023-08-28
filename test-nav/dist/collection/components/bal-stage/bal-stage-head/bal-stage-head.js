import { h, Host } from '@stencil/core';
export class StageHead {
  render() {
    return (h(Host, { class: "hero-head" }, h("slot", null)));
  }
  static get is() { return "bal-stage-head"; }
  static get elementRef() { return "el"; }
}
