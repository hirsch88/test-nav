import { balBrowser } from '../browser';
import { debounce } from '../helpers';
import { ListenerAbstract } from '../types/listener';
export class BalResizeListener extends ListenerAbstract {
  constructor() {
    super(...arguments);
    this.debouncedNotify = debounce(() => this.notify(), 10);
  }
  connect(el) {
    var _a;
    super.connect(el);
    if (typeof ResizeObserver === 'undefined') {
      return;
    }
    if (this.resizeObserver !== undefined) {
      (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      this.resizeObserver = undefined;
    }
    this.resizeObserver = new ResizeObserver(entries => {
      if (balBrowser.hasWindow) {
        window.requestAnimationFrame(() => {
          if (!Array.isArray(entries) || !entries.length) {
            return;
          }
          this.debouncedNotify();
        });
      }
    });
    this.resizeObserver.observe(el);
  }
  disconnect() {
    var _a;
    super.disconnect();
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.resizeObserver = undefined;
  }
}
