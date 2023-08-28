import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavigationLinkGrid implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  render(): any;
}
