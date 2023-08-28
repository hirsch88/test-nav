import { NavLinkItemObserver } from '../bal-nav.types';
import { NavLinkItem } from './bal-nav-link-item';
import { NavSectionLinkItem } from './bal-nav-section-link-item';
import { NavServiceLinkItem } from './bal-nav-service-link-item';
export declare class NavMenuLinkItem extends NavLinkItem implements BalProps.BalNavMenuLinkItem {
  sectionLinkItems: NavSectionLinkItem[];
  serviceLinkItems: NavServiceLinkItem[];
  overviewLink?: NavLinkItem;
  constructor(item: BalProps.BalNavMenuLinkItem, observer: NavLinkItemObserver);
  render(context?: {
    onClick: () => void;
  }): any;
}
