import { BalWindowResizeListener } from '../resize/window-resize.listener';
import { balBreakpoints } from './breakpoints';
import { initialBreakpoints } from './breakpoints.const';
import { Subject } from '../types/signal';
import { debounce } from '../helpers';
export class BalBreakpointSubject extends Subject {
  constructor() {
    super(observer => observer.breakpointListener(this.state));
    this.state = initialBreakpoints;
    this.listener = new BalWindowResizeListener();
    this.debouncedNotify = debounce(() => this.notify(), 50);
    this.listener.connect();
    this.listener.add(() => {
      balBreakpoints.detect();
      const newState = balBreakpoints.toObject();
      if (!this.isEqual(newState)) {
        this.state = newState;
        this.debouncedNotify();
      }
    });
  }
  attach(observer) {
    super.attach(observer);
    balBreakpoints.detect();
    this.state = balBreakpoints.toObject();
    this.notify();
  }
  isEqual(newState) {
    return JSON.stringify(this.state) === JSON.stringify(newState);
  }
}
export const balBreakpointSubject = new BalBreakpointSubject();
