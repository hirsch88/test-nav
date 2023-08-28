import { ListenerAbstract } from '../types/listener';
import { BalElementStateInfo } from './element-states.interfaces';
export declare class BalElementStateListener<TObserver> extends ListenerAbstract<TObserver, BalElementStateInfo> {
  static EventListenerOptions: AddEventListenerOptions;
  static DefaultState: BalElementStateInfo;
  private state;
  connect(el: HTMLElement): void;
  disconnect(): void;
  private updateState;
  private onMouseEnter;
  private onMouseLeave;
  private onPointerDown;
  private onPointerUp;
}
