import { balBrowser } from './browser';
export class Orientation {
  get isPortrait() {
    if (balBrowser.hasWindow && window.matchMedia) {
      return window.matchMedia('(orientation: portrait)').matches;
    }
    return false;
  }
  get isLandscape() {
    if (balBrowser.hasWindow && window.matchMedia) {
      return window.matchMedia('(orientation: landscape)').matches;
    }
    return true;
  }
  toObject() {
    return {
      landscape: this.isLandscape,
      portrait: this.isPortrait,
    };
  }
}
class Device {
  constructor() {
    this.orientation = new Orientation();
  }
  get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(balBrowser.userAgent);
  }
  get hasTouchScreen() {
    if (balBrowser.hasWindow && balBrowser.hasNavigator) {
      return !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }
    return false;
  }
}
export const balDevice = new Device();
