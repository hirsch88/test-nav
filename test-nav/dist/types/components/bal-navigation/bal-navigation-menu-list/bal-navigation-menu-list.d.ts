import { ComponentInterface } from '../../../stencil-public-runtime';
import { Attributes } from '../../../utils/attributes';
import { BalBreakpointObserver, BalBreakpoints } from '../../../utils/breakpoints';
export declare class NavigationMenuList implements ComponentInterface, BalBreakpointObserver {
  color: BalProps.BalNavigationLevelBlockColor;
  headline?: string;
  href?: string;
  target: BalProps.BalButtonTarget;
  tracking: Attributes;
  headingLevel: 'h3' | 'h4' | 'h5';
  breakpointListener(_breakpoints: BalBreakpoints): void;
  connectedCallback(): void;
  setHeadingLevel: () => void;
  render(): any;
}
