import { ComponentInterface } from '../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../utils/log';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
export declare class Logo implements ComponentInterface, Loggable, BalBreakpointObserver {
  private animationItem;
  private animatedLogoElement;
  private animationFunction?;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  el: HTMLElement;
  isTouch: boolean;
  color: BalProps.BalLogoColor;
  animated: boolean;
  animatedWatcher(): void;
  connectedCallback(): void;
  componentDidUpdate(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  breakpointListener(breakpoints: BalBreakpoints): void;
  private resetAnimation;
  private loadAnimation;
  private destroyAnimation;
  render(): any;
}
