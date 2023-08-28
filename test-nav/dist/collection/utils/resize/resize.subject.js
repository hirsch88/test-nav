import { SingleSubject } from '../types/signal';
import { BalResizeListener } from './resize.listener';
export class BalResizeSubject extends SingleSubject {
  constructor() {
    super((observer, _data) => {
      observer.resizeListener({});
    });
    this.listener = new BalResizeListener();
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
