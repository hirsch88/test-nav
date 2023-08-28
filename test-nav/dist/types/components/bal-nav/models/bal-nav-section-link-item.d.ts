import { NavLinkItem } from './bal-nav-link-item';
import { NavLinkItemObserver } from '../bal-nav.types';
export declare class NavSectionLinkItem extends NavLinkItem implements BalProps.BalNavSectionLinkItem {
  linkItems: NavLinkItem[];
  htmlTitle: string | undefined;
  constructor(item: BalProps.BalNavSectionLinkItem, observer: NavLinkItemObserver);
  render(_context?: {
    onClick: () => void;
  }): any;
}
