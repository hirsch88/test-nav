class BrowserWindow {
  get width() {
    if (balBrowser.hasWindow) {
      return window.innerWidth;
    }
    return 0;
  }
  get height() {
    if (balBrowser.hasWindow) {
      return window.innerHeight;
    }
    return 0;
  }
}
class Browser {
  constructor() {
    this.window = new BrowserWindow();
  }
  get isSafari() {
    return /^((?!chrome|android).)*safari/i.test(this.userAgent);
  }
  get hasWindow() {
    return typeof window !== 'undefined';
  }
  get hasNavigator() {
    return typeof navigator !== 'undefined';
  }
  get hasDocument() {
    return typeof document !== 'undefined';
  }
  get userAgent() {
    var _a;
    if (this.hasWindow && this.hasNavigator) {
      return (_a = navigator.userAgent) !== null && _a !== void 0 ? _a : '';
    }
    return '';
  }
}
export const balBrowser = new Browser();
