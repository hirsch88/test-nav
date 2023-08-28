import { SingleSubject } from '../types/signal';
import { BalSwipeInfo, BalSwipeObserver } from './swipe.interfaces';
export declare class BalSwipeSubject extends SingleSubject<BalSwipeObserver, BalSwipeInfo> {
  private listener;
  constructor();
  attach(observer: BalSwipeObserver): void;
  detach(): void;
}
