import { ComponentInterface } from '../../stencil-public-runtime';
import { BalConfigObserver, BalConfigState } from '../../utils/config';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
export declare class Hint implements ComponentInterface, BalConfigObserver, BalBreakpointObserver {
  element: HTMLElement;
  private popoverElement;
  private slotWrapperEl?;
  private hintContentEl?;
  private bodyScrollHandler;
  isActive: boolean;
  innerCloseLabel: string;
  isMobile: boolean;
  closeLabel?: string;
  small: boolean;
  connectedCallback(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  breakpointListener(breakpoints: BalBreakpoints): void;
  configChanged(state: BalConfigState): Promise<void>;
  toggle(): Promise<void>;
  present(): Promise<void>;
  dismiss(): Promise<void>;
  private onPopoverChange;
  private updateContent;
  render(): any;
}
