import { debounce } from '../helpers';
import { BalWindowResizeHandler } from './window-resize.handler';
import { ListenerAbstract } from '../types/listener';
export class BalWindowResizeListener extends ListenerAbstract {
  constructor() {
    super(...arguments);
    this.resizeHandler = new BalWindowResizeHandler({ onlyListenToWidthChanges: true });
    this.debouncedNotify = debounce(() => this.notify(), 10);
    this.notify = async () => {
      if (await this.resizeHandler.hasResized()) {
        super.notify(undefined);
      }
    };
  }
  connect() {
    super.connect();
    if (this.el) {
      this.el.addEventListener('resize', this.debouncedNotify, { passive: true });
    }
  }
  disconnect() {
    super.disconnect();
    if (this.el) {
      this.el.removeEventListener('resize', this.debouncedNotify);
    }
  }
}
