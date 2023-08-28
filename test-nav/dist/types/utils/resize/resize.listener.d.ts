import { ListenerAbstract } from '../types/listener';
import { BalResizeInfo } from './resize.interfaces';
export declare class BalResizeListener<TObserver> extends ListenerAbstract<TObserver, BalResizeInfo> {
  private resizeObserver;
  private debouncedNotify;
  connect(el: HTMLElement): void;
  disconnect(): void;
}
