import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavigationLinkGridCol implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  staticCol: BalProps.BalNavLinkGridCol;
  render(): any;
}
