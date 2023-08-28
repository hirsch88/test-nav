import { balBrowser } from '../browser';
import { Subject } from './signal';
export class ListenerAbstract extends Subject {
  constructor() {
    super(...arguments);
    this.el = undefined;
  }
  connect(el) {
    if (el) {
      this.el = el;
    }
    else {
      if (balBrowser.hasWindow) {
        this.el = window;
      }
    }
  }
  disconnect() {
    this.el = undefined;
  }
  add(listener) {
    super.attach(listener);
  }
  remove(listener) {
    super.detach(listener);
  }
}
