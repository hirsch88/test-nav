import { h } from '@stencil/core';
import { NavLinkItem } from './bal-nav-link-item';
export class NavSectionLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.linkItems = [];
    this.htmlTitle = item.htmlTitle;
    this.label = item.label;
    this.href = item.href;
    this.target = item.target;
    this.value = item.value || `nav-section-link-item-${NavSectionLinkItemIDs++}`;
    this.linkItems = (item.linkItems || []).map(item => new NavLinkItem(item, observer));
  }
  render(_context) {
    return (h("bal-nav-link-group", { role: "list" }, h("bal-nav-link", { role: "listitem", variant: "title", href: this.href, target: this.target, selected: this.active, onClick: ev => this.onClick(ev) }, this.label), this.linkItems.map(item => item.render())));
  }
}
let NavSectionLinkItemIDs = 0;
