import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class NavigationPopover implements ComponentInterface {
  isActive: boolean;
  label: string;
  inverted: boolean;
  icon?: string;
  backdrop: boolean;
  size: BalProps.BalButtonSize;
  inactiveColor: BalProps.BalButtonColor;
  activeColor: BalProps.BalButtonColor;
  heading?: string;
  closable: boolean;
  contentRadius: BalProps.BalPopoverContentRadius;
  position: BalProps.BalPopoverPlacement;
  contentWidth: number;
  contentMinWidth: number;
  offsetY: number;
  square: boolean;
  contentNoShadow: boolean;
  contentExpanded: boolean;
  arrow: boolean;
  mobileTop: boolean;
  private scrollToTopTimer?;
  private setActiveTimer?;
  private clearTimeouts;
  private toggle;
  render(): any;
}
