import { ComponentInterface } from '../../../stencil-public-runtime';
import { BalBreakpointObserver, BalBreakpoints } from '../../../utils/breakpoints';
export declare class PopoverContent implements ComponentInterface, BalBreakpointObserver {
  el: HTMLElement;
  spaceless: boolean;
  scrollable: number;
  contentWidth: number;
  contentMinWidth: number;
  color: BalProps.BalPopoverContentColor;
  expanded: boolean;
  radius: BalProps.BalPopoverContentRadius;
  noShadow: boolean;
  mobileTop: boolean;
  contentHeightOnTop: number;
  breakpointListener(_breakpoints: BalBreakpoints): void;
  get innerStyle(): {};
  get contentStyle(): {
    '--bal-popover-content-height-top-nav': string;
  };
  componentWillLoad(): void;
  render(): any;
}
