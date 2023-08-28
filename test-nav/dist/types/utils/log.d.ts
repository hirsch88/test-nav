import { ComponentInterface } from '../stencil-public-runtime';
export interface BalLogger {
  components: string[];
  custom: boolean;
  lifecycle: boolean;
  render: boolean;
  event: boolean;
}
export interface Loggable {
  log: LogInstance;
  createLogger(log: LogInstance): void;
}
export type LogInstance = (message?: any, ...optionalParams: any[]) => void;
export declare const defaultLoggerConfig: BalLogger;
export declare function Logger(tag?: string): (target: ComponentInterface, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
