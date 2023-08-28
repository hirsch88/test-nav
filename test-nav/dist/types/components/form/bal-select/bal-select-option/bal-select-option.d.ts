import { ComponentInterface } from '../../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../../utils/log';
export declare class SelectOption implements ComponentInterface, Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
  label?: string;
  disabled: boolean;
  value?: string;
  for: string;
  render(): any;
}
