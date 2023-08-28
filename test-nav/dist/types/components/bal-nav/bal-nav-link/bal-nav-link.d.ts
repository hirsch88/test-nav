import { ComponentInterface } from '../../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../../utils/log';
export declare class NavigationLink implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  variant: BalProps.BalNavLinkVariant;
  selected: boolean;
  clickable: boolean;
  href?: string;
  target: BalProps.BalButtonTarget;
  render(): any;
}
