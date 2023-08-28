import { SingleSubject } from '../types/signal';
import { BalKeyboardInfo, BalKeyboardObserver } from './keyboard.interfaces';
export declare class BalKeyboardSubject extends SingleSubject<BalKeyboardObserver, BalKeyboardInfo> {
  private listener;
  constructor();
  attach(observer: BalKeyboardObserver): void;
  detach(): void;
}
