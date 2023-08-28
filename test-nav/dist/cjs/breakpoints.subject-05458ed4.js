'use strict';

const helpers = require('./helpers-83a73189.js');
const browser = require('./browser-791d6902.js');
const device = require('./device-76e9eca9.js');
const listener = require('./listener-4161102f.js');
const tokens_esm = require('./tokens.esm-505d1e8f.js');

class BalWindowResizeHandler {
  constructor(options = {}) {
    this.previousWidth = browser.balBrowser.window.width;
    this.previousHeight = browser.balBrowser.window.height;
    this.previousIsLandscape = this.isLandscape;
    this.options = {
      onlyListenToWidthChanges: false,
    };
    this.options = Object.assign(Object.assign({}, this.options), options);
  }
  async hasResized() {
    if (device.balDevice.hasTouchScreen) {
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
    return browser.balBrowser.window.width > browser.balBrowser.window.height;
  }
  get sameWidth() {
    return this.previousWidth === browser.balBrowser.window.width;
  }
  get sameHeight() {
    return this.previousHeight === browser.balBrowser.window.height;
  }
  resetPreviousValues() {
    this.previousWidth = browser.balBrowser.window.width;
    this.previousHeight = browser.balBrowser.window.height;
    this.previousIsLandscape = this.isLandscape;
  }
}

class BalWindowResizeListener extends listener.ListenerAbstract {
  constructor() {
    super(...arguments);
    this.resizeHandler = new BalWindowResizeHandler({ onlyListenToWidthChanges: true });
    this.debouncedNotify = helpers.debounce(() => this.notify(), 10);
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

const toNumber = (pixel) => parseInt(pixel.slice(0, -2), 10);
const breakpointTablet = toNumber(tokens_esm.e.balBreakpointTablet);
const breakpointDesktop = toNumber(tokens_esm.e.balBreakpointDesktop);
const breakpointHighDefinition = toNumber(tokens_esm.e.balBreakpointHighDefinition);
const breakpointWidescreen = toNumber(tokens_esm.e.balBreakpointWidescreen);
const balBreakpointFullhd = toNumber(tokens_esm.e.balBreakpointFullhd);
const isMobile = (win) => {
  const width = win.innerWidth;
  return width < breakpointTablet;
};
const isTablet = (win) => {
  const width = win.innerWidth;
  return width >= breakpointTablet && width < breakpointDesktop;
};
const isTouch = (win) => isMobile(win) || isTablet(win);
const isDesktop = (win) => !isTouch(win);
const isHighDefinition = (win) => {
  const width = win.innerWidth;
  return width >= breakpointHighDefinition && width < breakpointWidescreen;
};
const isWideScreen = (win) => {
  const width = win.innerWidth;
  return width >= breakpointWidescreen && width < balBreakpointFullhd;
};
const isFullHD = (win) => {
  const width = win.innerWidth;
  return width >= balBreakpointFullhd;
};
const BREAKPOINTS_MAP = {
  mobile: isMobile,
  tablet: isTablet,
  touch: isTouch,
  desktop: isDesktop,
  highDefinition: isHighDefinition,
  widescreen: isWideScreen,
  fullhd: isFullHD,
};

class BreakpointsClass {
  constructor() {
    this.breakpoints = [];
    if (browser.balBrowser.hasWindow) {
      this.win = window;
      this.win.BaloiseDesignSystem = this.win.BaloiseDesignSystem || {};
      this.detect();
    }
  }
  get isMobile() {
    return this.includes('mobile');
  }
  get isTablet() {
    return this.includes('tablet');
  }
  get isTouch() {
    return this.includes('touch');
  }
  get isDesktop() {
    return this.includes('desktop');
  }
  get isHighDefinition() {
    return this.includes('highDefinition');
  }
  get isWidescreen() {
    return this.includes('widescreen');
  }
  get isFullHD() {
    return this.includes('fullhd');
  }
  includes(breakpoint) {
    var _a;
    this.detect();
    return !!((_a = this.breakpoints) === null || _a === void 0 ? void 0 : _a.includes(breakpoint));
  }
  detect() {
    if (this.win) {
      this.breakpoints = Object.keys(BREAKPOINTS_MAP).filter(p => BREAKPOINTS_MAP[p](this.win));
      this.win.BaloiseDesignSystem.breakpoints = this.breakpoints;
      this.win.BaloiseDesignSystem.platforms = this.breakpoints;
    }
    return this.breakpoints;
  }
  toObject() {
    return {
      mobile: this.breakpoints.includes('mobile'),
      tablet: this.breakpoints.includes('tablet'),
      touch: this.breakpoints.includes('touch'),
      desktop: this.breakpoints.includes('desktop'),
      highDefinition: this.breakpoints.includes('highDefinition'),
      widescreen: this.breakpoints.includes('widescreen'),
      fullhd: this.breakpoints.includes('fullhd'),
    };
  }
}
const balBreakpoints = new BreakpointsClass();

const initialBreakpoints = {
  mobile: false,
  tablet: false,
  touch: false,
  desktop: false,
  highDefinition: false,
  widescreen: false,
  fullhd: false,
};

class BalBreakpointSubject extends listener.Subject {
  constructor() {
    super(observer => observer.breakpointListener(this.state));
    this.state = initialBreakpoints;
    this.listener = new BalWindowResizeListener();
    this.debouncedNotify = helpers.debounce(() => this.notify(), 50);
    this.listener.connect();
    this.listener.add(() => {
      balBreakpoints.detect();
      const newState = balBreakpoints.toObject();
      if (!this.isEqual(newState)) {
        this.state = newState;
        this.debouncedNotify();
      }
    });
  }
  attach(observer) {
    super.attach(observer);
    balBreakpoints.detect();
    this.state = balBreakpoints.toObject();
    this.notify();
  }
  isEqual(newState) {
    return JSON.stringify(this.state) === JSON.stringify(newState);
  }
}
const balBreakpointSubject = new BalBreakpointSubject();

exports.BalWindowResizeListener = BalWindowResizeListener;
exports.balBreakpointSubject = balBreakpointSubject;
exports.balBreakpoints = balBreakpoints;
