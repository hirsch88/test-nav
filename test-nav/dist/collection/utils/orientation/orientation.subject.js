import { balDevice } from '../device';
import { BalWindowResizeListener } from '../resize';
import { Subject } from '../types/signal';
export class BalOrientationSubject extends Subject {
  constructor() {
    super(observer => observer.orientationListener(this.state));
    this.listener = new BalWindowResizeListener();
    this.state = balDevice.orientation.toObject();
    this.listener.connect();
    this.listener.add(() => {
      const newState = balDevice.orientation.toObject();
      if (!this.isEqual(newState)) {
        this.state = newState;
        this.notify(undefined);
      }
    });
  }
  attach(observer) {
    super.attach(observer);
    observer.orientationListener(this.state);
  }
  isEqual(newState) {
    return newState.landscape === this.state.landscape && newState.portrait === this.state.portrait;
  }
}
export const balOrientationSubject = new BalOrientationSubject();
