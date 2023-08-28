import { SingleSubject } from '../types/signal';
import { BalElementStateListener } from './element-states.listener';
export class BalElementStateSubject extends SingleSubject {
  constructor() {
    super((observer, data) => {
      if (data) {
        observer.elementStateListener(data);
      }
    });
    this.listener = new BalElementStateListener();
  }
  attach(observer) {
    super.attach(observer);
    this.listener.connect(observer.el);
    this.listener.add(info => super.notify(info));
  }
  detach() {
    super.detach();
    this.listener.disconnect();
  }
}
