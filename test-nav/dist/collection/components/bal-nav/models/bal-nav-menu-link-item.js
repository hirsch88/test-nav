import { h } from '@stencil/core';
import { NavLinkItem } from './bal-nav-link-item';
import { NavSectionLinkItem } from './bal-nav-section-link-item';
import { NavServiceLinkItem } from './bal-nav-service-link-item';
export class NavMenuLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.sectionLinkItems = [];
    this.serviceLinkItems = [];
    this.value = item.value || `nav-menu-link-item-${NavMenuLinkItemIDs++}`;
    this.sectionLinkItems = (item.sectionLinkItems || []).map(item => new NavSectionLinkItem(item, observer));
    this.serviceLinkItems = (item.serviceLinkItems || []).map(item => new NavServiceLinkItem(item, observer));
    this.overviewLink = item.overviewLink ? new NavLinkItem(item.overviewLink, observer) : undefined;
  }
  render(context) {
    if (this.isLink) {
      return h("bal-tab-item", { label: this.label, value: this.value, href: this.href, target: this.target });
    }
    return (h("bal-tab-item", { label: this.label, value: this.value, onBalNavigate: ev => {
        context === null || context === void 0 ? void 0 : context.onClick();
        if (this.onClick) {
          this.onClick(ev.detail);
        }
      } }));
  }
}
let NavMenuLinkItemIDs = 0;
