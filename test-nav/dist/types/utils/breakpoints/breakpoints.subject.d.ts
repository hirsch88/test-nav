import { BalBreakpointObserver, BalBreakpoints } from './breakpoints.interfaces';
import { Subject } from '../types/signal';
export declare class BalBreakpointSubject extends Subject<BalBreakpointObserver> {
  private state;
  private listener;
  private debouncedNotify;
  constructor();
  attach(observer: BalBreakpointObserver): void;
  isEqual(newState: BalBreakpoints): boolean;
}
export declare const balBreakpointSubject: BalBreakpointSubject;
