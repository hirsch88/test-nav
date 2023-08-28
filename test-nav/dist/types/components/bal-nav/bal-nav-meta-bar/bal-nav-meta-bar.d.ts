import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavMetaBar implements ComponentInterface, Loggable {
  private navMetaBarId;
  private previousY;
  el: HTMLElement;
  isHidden: boolean;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  variant: BalProps.BalNavMetaBarVariant;
  size: BalProps.BalNavMetaBarSize;
  invisible: BalProps.BalNavMetaBarInvisible;
  position: BalProps.BalNavMetaBarPosition;
  handleScroll(): void;
  render(): any;
}
