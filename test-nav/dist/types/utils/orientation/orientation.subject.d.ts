import { Subject } from '../types/signal';
import { BalOrientationObserver } from './orientation.interfaces';
export declare class BalOrientationSubject extends Subject<BalOrientationObserver> {
  private listener;
  private state;
  constructor();
  attach(observer: BalOrientationObserver): void;
  private isEqual;
}
export declare const balOrientationSubject: BalOrientationSubject;
