import { ListenerAbstract } from '../types/listener';
import { BalSwipeInfo } from './swipe.interfaces';
export declare class BalSwipeListener<TObserver> extends ListenerAbstract<TObserver, BalSwipeInfo> {
  private PointerListenerLib;
  private pointerListener;
  connect(el: HTMLElement): Promise<void>;
  disconnect(): void;
  private loadLib;
}
