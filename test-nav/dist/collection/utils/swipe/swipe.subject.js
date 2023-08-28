import { SingleSubject } from '../types/signal';
import { BalSwipeListener } from './swipe.listener';
export class BalSwipeSubject extends SingleSubject {
  constructor() {
    super((observer, data) => {
      if (data) {
        observer.swipeListener(data);
      }
    });
    this.listener = new BalSwipeListener();
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
