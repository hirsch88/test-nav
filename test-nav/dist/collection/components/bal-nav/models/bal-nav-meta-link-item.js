import { h } from '@stencil/core';
import { NavLinkItem } from './bal-nav-link-item';
import { NavMenuLinkItem } from './bal-nav-menu-link-item';
export class NavMetaLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.mainLinkItems = [];
    this.value = item.value || `nav-meta-link-item-${NavMetaLinkItemIDs++}`;
    this.mainLinkItems = (item.mainLinkItems || []).map(item => new NavMenuLinkItem(item, observer));
    this.overviewLink = item.overviewLink ? new NavLinkItem(item.overviewLink, observer) : undefined;
  }
  render() {
    if (this.isLink) {
      return h("bal-tab-item", { label: this.label, value: this.value, href: this.href, target: this.target });
    }
    return (h("bal-tab-item", { label: this.label, value: this.value, onBalNavigate: ev => {
        if (this.onClick) {
          this.onClick(ev.detail);
        }
      } }));
  }
}
let NavMetaLinkItemIDs = 0;
