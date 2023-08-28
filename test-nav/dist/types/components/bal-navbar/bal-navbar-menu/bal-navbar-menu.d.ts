import { ComponentInterface } from '../../../stencil-public-runtime';
import { BalBreakpointObserver, BalBreakpoints } from '../../../utils/breakpoints';
export declare class NavbarMenu implements ComponentInterface, BalBreakpointObserver {
  element: HTMLElement;
  isMenuActive: boolean;
  isTouch: boolean;
  interface: BalProps.BalNavbarInterface;
  breakpointListener(breakpoints: BalBreakpoints): void;
  toggle(isMenuActive: boolean): Promise<void>;
  render(): any;
}
