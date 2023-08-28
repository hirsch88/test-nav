import { d as debounce } from './helpers-18cc89f4.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { b as balDevice } from './device-c28cde6d.js';
import { L as ListenerAbstract } from './listener-ea90dc02.js';

class BalWindowResizeHandler {
  constructor(options = {}) {
    this.previousWidth = balBrowser.window.width;
    this.previousHeight = balBrowser.window.height;
    this.previousIsLandscape = this.isLandscape;
    this.options = {
      onlyListenToWidthChanges: false,
    };
    this.options = Object.assign(Object.assign({}, this.options), options);
  }
  async hasResized() {
    if (balDevice.hasTouchScreen) {
      if (!this.sameWidth || this.previousIsLandscape !== this.isLandscape) {
        this.resetPreviousValues();
        return true;
      }
    }
    else {
      if (this.options.onlyListenToWidthChanges) {
        if (!this.sameWidth) {
          this.resetPreviousValues();
          return true;
        }
      }
      else {
        if (!this.sameWidth || !this.sameHeight) {
          this.resetPreviousValues();
          return true;
        }
      }
    }
    return false;
  }
  get isLandscape() {
    return balBrowser.window.width > balBrowser.window.height;
  }
  get sameWidth() {
    return this.previousWidth === balBrowser.window.width;
  }
  get sameHeight() {
    return this.previousHeight === balBrowser.window.height;
  }
  resetPreviousValues() {
    this.previousWidth = balBrowser.window.width;
    this.previousHeight = balBrowser.window.height;
    this.previousIsLandscape = this.isLandscape;
  }
}

class BalWindowResizeListener extends ListenerAbstract {
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

export { BalWindowResizeListener as B };
