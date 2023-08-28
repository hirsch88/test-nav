import { ListenerAbstract } from '../types/listener';
export declare class BalWindowResizeListener extends ListenerAbstract {
  private resizeHandler;
  private debouncedNotify;
  connect(): void;
  disconnect(): void;
  notify: () => Promise<void>;
}
