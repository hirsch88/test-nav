import { Host, h } from '@stencil/core';
export class ListItemSubtitle {
  render() {
    return (h(Host, { class: "bal-list__item__subtitle" }, h("p", { class: "is-size-small" }, h("slot", null))));
  }
  static get is() { return "bal-list-item-subtitle"; }
}
