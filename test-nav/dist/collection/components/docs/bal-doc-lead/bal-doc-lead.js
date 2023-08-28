import { h, Host } from '@stencil/core';
export class DocLead {
  render() {
    return (h(Host, null, h("bal-doc-app", null, h("p", { class: "is-size-large has-text-blue my-x-large" }, h("slot", null)))));
  }
  static get is() { return "bal-doc-lead"; }
  static get elementRef() { return "el"; }
}
