import { SingleSubject } from '../types/signal';
import { BalElementStateInfo, BalElementStateObserver } from './element-states.interfaces';
export declare class BalElementStateSubject extends SingleSubject<BalElementStateObserver, BalElementStateInfo> {
  private listener;
  constructor();
  attach(observer: BalElementStateObserver): void;
  detach(): void;
}
