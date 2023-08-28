import { SingleSubject } from '../types/signal';
import { BalKeyboardListener } from './keyboard.listener';
export class BalKeyboardSubject extends SingleSubject {
  constructor() {
    super((observer, data) => {
      if (data) {
        observer.keyboardListener(data);
      }
    });
    this.listener = new BalKeyboardListener();
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
