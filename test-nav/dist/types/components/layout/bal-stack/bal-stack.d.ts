import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
export declare class BalStack implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  layout: BalProps.BalStackLayout;
  align: BalProps.BalStackAlignment;
  space: BalProps.BalStackSpace;
  spaceRow?: BalProps.BalStackSpace;
  spaceColumn?: BalProps.BalStackSpace;
  px: BalProps.BalStackPadding;
  py: BalProps.BalStackPadding;
  useWrap: boolean;
  fitContent: boolean;
  direction: BalProps.BalStackDirection;
  alignment: BalProps.BalStackAlignment;
  render(): any;
}
