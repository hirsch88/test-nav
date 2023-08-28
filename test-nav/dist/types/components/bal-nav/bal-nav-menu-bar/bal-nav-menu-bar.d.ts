import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavMenuBar implements ComponentInterface, Loggable {
  private navMenuBarId;
  el: HTMLElement;
  isHidden: boolean;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  invisible: BalProps.BalNavMenuBarInvisible;
  position: BalProps.BalNavMenuBarPosition;
  private get flyoutElement();
  render(): any;
}
