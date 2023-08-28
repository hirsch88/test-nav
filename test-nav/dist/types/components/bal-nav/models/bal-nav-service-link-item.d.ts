import { NavLinkItem } from './bal-nav-link-item';
import { NavLinkItemObserver } from '../bal-nav.types';
export declare class NavServiceLinkItem extends NavLinkItem implements BalProps.BalNavServiceLinkItem {
  color: 'grey' | 'purple' | 'yellow' | 'red' | 'green';
  linkItems: NavLinkItem[];
  constructor(item: BalProps.BalNavServiceLinkItem, observer: NavLinkItemObserver);
  render(_context?: {
    onClick: () => void;
  }): any;
}
