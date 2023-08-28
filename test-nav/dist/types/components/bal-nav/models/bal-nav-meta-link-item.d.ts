import { NavLinkItem } from './bal-nav-link-item';
import { NavMenuLinkItem } from './bal-nav-menu-link-item';
import { NavLinkItemObserver } from '../bal-nav.types';
export declare class NavMetaLinkItem extends NavLinkItem implements BalProps.BalNavMetaLinkItem {
  mainLinkItems: NavMenuLinkItem[];
  overviewLink?: NavLinkItem;
  constructor(item: BalProps.BalNavMetaLinkItem, observer: NavLinkItemObserver);
  render(): any;
}
