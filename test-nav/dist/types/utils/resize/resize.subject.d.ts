import { SingleSubject } from '../types/signal';
import { BalResizeInfo, BalResizeObserver } from './resize.interfaces';
export declare class BalResizeSubject extends SingleSubject<BalResizeObserver, BalResizeInfo> {
  private listener;
  constructor();
  attach(observer: BalResizeObserver): void;
  detach(): void;
}
