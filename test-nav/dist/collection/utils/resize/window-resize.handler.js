import { balBrowser } from '../browser';
import { balDevice } from '../device';
export class BalWindowResizeHandler {
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
