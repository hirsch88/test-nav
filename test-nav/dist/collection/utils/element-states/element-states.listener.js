import { balBrowser } from '../browser';
import { ListenerAbstract } from '../types/listener';
export class BalElementStateListener extends ListenerAbstract {
  constructor() {
    super(...arguments);
    this.state = BalElementStateListener.DefaultState;
    this.onMouseEnter = () => {
      this.updateState({ hovered: true });
    };
    this.onMouseLeave = () => {
      this.updateState({ hovered: false });
    };
    this.onPointerDown = () => {
      this.updateState({ pressed: true });
    };
    this.onPointerUp = () => {
      this.updateState({ pressed: false });
    };
  }
  connect(el) {
    super.connect(el);
    el.addEventListener('mouseenter', this.onMouseEnter, BalElementStateListener.EventListenerOptions);
    el.addEventListener('mouseleave', this.onMouseLeave, BalElementStateListener.EventListenerOptions);
    el.addEventListener('pointerdown', this.onPointerDown, BalElementStateListener.EventListenerOptions);
    if (balBrowser.hasDocument) {
      document.addEventListener('pointerup', this.onPointerUp, BalElementStateListener.EventListenerOptions);
    }
  }
  disconnect() {
    super.disconnect();
    if (this.el) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
      this.el.removeEventListener('mouseleave', this.onMouseLeave);
      this.el.removeEventListener('pointerdown', this.onPointerDown);
      if (balBrowser.hasDocument) {
        document.removeEventListener('pointerup', this.onPointerUp);
      }
    }
  }
  updateState(newState) {
    this.state = Object.assign(Object.assign({}, this.state), newState);
    this.notify(this.state);
  }
}
BalElementStateListener.EventListenerOptions = {
  passive: true,
};
BalElementStateListener.DefaultState = {
  hovered: false,
  pressed: false,
};
