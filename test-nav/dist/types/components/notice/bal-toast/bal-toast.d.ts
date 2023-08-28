/// <reference types="node" />
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Toast {
  element: HTMLBalToastElement;
  timer: NodeJS.Timer;
  toastId: string;
  color: BalProps.BalToastColor;
  duration: number;
  message: string;
  closeHandler: () => void;
  balClose: EventEmitter<BalEvents.BalToastCloseDetail>;
  componentWillLoad(): Promise<void>;
  closeIn(duration: number): Promise<void>;
  close(): Promise<void>;
  get colorType(): string;
  render(): any;
}
