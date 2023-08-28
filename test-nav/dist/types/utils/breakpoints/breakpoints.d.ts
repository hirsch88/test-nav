import { BalBreakpoints } from './breakpoints.interfaces';
import { BREAKPOINTS_MAP } from './breakpoints.map';
export type BalBreakpoint = keyof typeof BREAKPOINTS_MAP;
declare class BreakpointsClass {
  private win?;
  private breakpoints;
  constructor();
  get isMobile(): boolean;
  get isTablet(): boolean;
  get isTouch(): boolean;
  get isDesktop(): boolean;
  get isHighDefinition(): boolean;
  get isWidescreen(): boolean;
  get isFullHD(): boolean;
  includes(breakpoint: BalBreakpoint): boolean;
  detect(): BalBreakpoint[];
  toObject(): BalBreakpoints;
}
export declare const balBreakpoints: BreakpointsClass;
export {};
