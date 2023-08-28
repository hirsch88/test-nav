import { ListenerAbstract } from '../types/listener';
import { BalKeyboardInfo } from './keyboard.interfaces';
export declare class BalKeyboardListener<TObserver> extends ListenerAbstract<TObserver, BalKeyboardInfo> {
  private info;
  connect(el: HTMLElement): void;
  disconnect(): void;
  private onKeydown;
  private onPointerDown;
}
