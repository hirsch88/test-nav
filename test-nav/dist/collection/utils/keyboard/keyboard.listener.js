import { FOCUS_KEYS } from '../focus-visible';
import { ListenerAbstract } from '../types/listener';
export class BalKeyboardListener extends ListenerAbstract {
  constructor() {
    super(...arguments);
    this.info = { keyboardFocus: false };
    this.onKeydown = (ev) => {
      this.info.keyboardFocus = FOCUS_KEYS.includes(ev.key);
      this.notify(this.info);
    };
    this.onPointerDown = () => {
      this.info.keyboardFocus = false;
      this.notify(this.info);
    };
  }
  connect(el) {
    super.connect(el);
    el.addEventListener('keydown', this.onKeydown);
    el.addEventListener('touchstart', this.onPointerDown);
    el.addEventListener('mousedown', this.onPointerDown);
  }
  disconnect() {
    super.disconnect();
    if (this.el) {
      this.el.removeEventListener('keydown', this.onKeydown);
      this.el.removeEventListener('touchstart', this.onPointerDown);
      this.el.removeEventListener('mousedown', this.onPointerDown);
    }
  }
}
