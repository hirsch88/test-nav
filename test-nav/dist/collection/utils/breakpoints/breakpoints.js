import { balBrowser } from '../browser';
import { BREAKPOINTS_MAP } from './breakpoints.map';
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
export const balBreakpoints = new BreakpointsClass();
