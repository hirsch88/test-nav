import { h } from '@stencil/core';
import { NavLinkItem } from './bal-nav-link-item';
export class NavServiceLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.color = 'grey';
    this.linkItems = [];
    this.value = item.value || `nav-service-link-item-${NavServiceLinkItemIDs++}`;
    this.color = item.color || 'grey';
    this.linkItems = (item.linkItems || []).map(item => new NavLinkItem(item, observer));
  }
  render(_context) {
    return (h("bal-nav-link-group", { color: this.color, role: "list" }, h("bal-nav-link", { role: "listitem", variant: "title", href: this.href, target: this.target, selected: this.active, onClick: ev => this.onClick(ev) }, this.label), this.linkItems.map(item => item.render())));
  }
}
let NavServiceLinkItemIDs = 0;
