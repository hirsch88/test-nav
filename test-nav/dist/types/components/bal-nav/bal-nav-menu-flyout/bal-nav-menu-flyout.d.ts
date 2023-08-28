import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
import { BalResizeObserver } from '../../../utils/resize';
export declare class NavMenuFlyout implements ComponentInterface, Loggable, BalResizeObserver {
  private navMenuFlyoutId;
  private bodyScrollHandler;
  el: HTMLElement;
  isHidden: boolean;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  resizeListener(): void;
  private isFlyoutScrollable;
  render(): any;
}
