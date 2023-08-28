import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
import { BalBreakpointObserver, BalBreakpoints } from '../../../interfaces';
import { BalResizeObserver } from '../../../utils/resize';
export declare class ListItemAccordionBody implements ComponentInterface, Loggable, BalBreakpointObserver, BalResizeObserver {
  private contentElWrapper;
  private currentRaf;
  private isMobile;
  el: HTMLElement;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  accordionGroup?: string;
  contentSpace: BalProps.BalListContentSpacing;
  contentAlignment: BalProps.BalListContentAlignment;
  connectedCallback(): void;
  componentDidRender(): void;
  resizeListener(): void;
  breakpointListener(breakpoints: BalBreakpoints): void;
  private setMinHeightForAnimation;
  private debounceSetMinHeightForAnimation;
  render(): any;
}
