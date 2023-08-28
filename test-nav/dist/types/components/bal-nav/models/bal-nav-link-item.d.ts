import { NavLinkItemObserver } from '../bal-nav.types';
export declare class NavLinkItem implements BalProps.BalNavLinkItem {
  private observer;
  label: string;
  value: string;
  clickable: boolean;
  active: boolean;
  data: undefined;
  href?: string;
  target?: BalProps.BalButtonTarget;
  onClick: (ev: MouseEvent) => void;
  constructor(item: BalProps.BalNavLinkItem, observer: NavLinkItemObserver);
  get isLink(): boolean;
  get type(): string;
  toJson(): BalEvents.BalNavClickedItem;
  render(_context?: {
    onClick: () => void;
  }): any;
}
