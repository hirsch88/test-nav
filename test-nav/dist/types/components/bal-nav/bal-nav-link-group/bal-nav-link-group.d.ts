import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavigationLinkGroup implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  color: BalProps.BalNavLinkGroupColor;
  render(): any;
}
