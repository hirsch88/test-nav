import { NavLinkItem } from './bal-nav-link-item';
import { NavLinkItemObserver } from '../bal-nav.types';
export declare class NavMetaButton extends NavLinkItem implements BalProps.BalNavMetaButton {
  touchPlacement: 'top' | 'bottom' | 'none';
  popoverId?: string;
  icon?: string;
  ariaLabel?: string;
  htmlTitle?: string;
  id: string;
  constructor(item: BalProps.BalNavMetaButton, observer: NavLinkItemObserver);
  renderAtMetaBar(): any;
  renderAtTouchTopMetaBar(): any;
  renderAtTouchBottomMetaBar(): any;
  resetTouchBottomMetaBar(): void;
  resetDesktopMetaBar(): void;
}
