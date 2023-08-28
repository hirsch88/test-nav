'use strict';

const browser = require('./browser-791d6902.js');

class Orientation {
  get isPortrait() {
    if (browser.balBrowser.hasWindow && window.matchMedia) {
      return window.matchMedia('(orientation: portrait)').matches;
    }
    return false;
  }
  get isLandscape() {
    if (browser.balBrowser.hasWindow && window.matchMedia) {
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
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(browser.balBrowser.userAgent);
  }
  get hasTouchScreen() {
    if (browser.balBrowser.hasWindow && browser.balBrowser.hasNavigator) {
      return !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }
    return false;
  }
}
const balDevice = new Device();

exports.balDevice = balDevice;
