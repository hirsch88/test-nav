import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
export declare class BalContent implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  layout: BalProps.BalContentLayout;
  align: BalProps.BalContentAlignment;
  space: BalProps.BalContentSpace;
  direction: BalProps.BalStackDirection;
  alignment: BalProps.BalStackAlignment;
  render(): any;
}
