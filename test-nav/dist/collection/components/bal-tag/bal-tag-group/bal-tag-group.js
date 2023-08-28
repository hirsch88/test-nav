import { h, Host } from '@stencil/core';
export class TagGroup {
  render() {
    return (h(Host, { class: "bal-tag-group" }, h("slot", null)));
  }
  static get is() { return "bal-tag-group"; }
}
