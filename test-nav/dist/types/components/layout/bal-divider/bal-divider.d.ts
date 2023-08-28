import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
export declare class BalDivider implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  layout: BalProps.BalDividerLayout;
  space: BalProps.BalDividerSpace;
  color: BalProps.BalDividerColor;
  render(): any;
}
