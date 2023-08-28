import { ComponentInterface } from '../../stencil-public-runtime';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
import { BalConfigObserver, BalConfigState } from '../../utils/config';
export declare class ProgressBar implements ComponentInterface, BalConfigObserver, BalBreakpointObserver {
  el: HTMLElement;
  private animated;
  private lineEl?;
  value: number;
  background: BalProps.BalProgressBarBackground;
  componentDidRender(): void;
  breakpointListener(_breakpoints: BalBreakpoints): void;
  configChanged(state: BalConfigState): Promise<void>;
  private updateProgress;
  render(): any;
}
