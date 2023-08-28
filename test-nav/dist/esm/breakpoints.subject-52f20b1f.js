import { d as debounce } from './helpers-08b28736.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { b as balDevice } from './device-c28cde6d.js';
import { L as ListenerAbstract, S as Subject } from './listener-ea90dc02.js';
import { e } from './tokens.esm-8af6b758.js';

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

const toNumber = (pixel) => parseInt(pixel.slice(0, -2), 10);
const breakpointTablet = toNumber(e.balBreakpointTablet);
const breakpointDesktop = toNumber(e.balBreakpointDesktop);
const breakpointHighDefinition = toNumber(e.balBreakpointHighDefinition);
const breakpointWidescreen = toNumber(e.balBreakpointWidescreen);
const balBreakpointFullhd = toNumber(e.balBreakpointFullhd);
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
    if (balBrowser.hasWindow) {
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

class BalBreakpointSubject extends Subject {
  constructor() {
    super(observer => observer.breakpointListener(this.state));
    this.state = initialBreakpoints;
    this.listener = new BalWindowResizeListener();
    this.debouncedNotify = debounce(() => this.notify(), 50);
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

export { BalWindowResizeListener as B, balBreakpointSubject as a, balBreakpoints as b };
