import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as ListenToBreakpoints } from './index-8d940b60.js';
import './window-resize.listener-bb290fb3.js';
import './helpers-18cc89f4.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

const balProgressBarCss = ":root{--bal-progress-bar-background-white:var(--bal-color-white);--bal-progress-bar-background-grey:var(--bal-color-grey-3);--bal-progress-bar-line-background:var(--bal-color-primary);--bal-progress-bar-line-radius:var(--bal-radius-rounded)}.bal-progress-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;min-width:0;height:.25rem}.bal-progress-bar--background-white{background:var(--bal-progress-bar-background-white)}.bal-progress-bar--background-grey{background:var(--bal-progress-bar-background-grey)}.bal-progress-bar__line{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;height:.25rem;width:0;background:var(--bal-progress-bar-line-background);border-top-right-radius:var(--bal-progress-bar-line-radius);border-bottom-right-radius:var(--bal-progress-bar-line-radius)}.bal-progress-bar__line--animated{will-change:width;-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-progress-bar__line--full{border-top-right-radius:0;border-bottom-right-radius:0}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animated = true;
    this.value = 0;
    this.background = 'white';
  }
  componentDidRender() {
    this.updateProgress();
  }
  breakpointListener(_breakpoints) {
    this.updateProgress();
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  updateProgress() {
    if (this.lineEl) {
      const maxWidth = this.el.clientWidth;
      const value = Math.max(0, Math.min(100, this.value));
      const lineWidth = (maxWidth / 100) * value;
      this.lineEl.style.width = `${lineWidth}px`;
      if (value === 100) {
        this.lineEl.classList.add('bal-progress-bar__line--full');
      }
      else {
        this.lineEl.classList.remove('bal-progress-bar__line--full');
      }
    }
  }
  render() {
    const block = BEM.block('progress-bar');
    const bemLineEl = block.element('line');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`background-${this.background}`).class()) }, h("div", { class: Object.assign(Object.assign({}, bemLineEl.class()), bemLineEl.modifier(`animated`).class(this.animated)), ref: lineEl => (this.lineEl = lineEl) })));
  }
  get el() { return getElement(this); }
};
__decorate([
  ListenToBreakpoints()
], ProgressBar.prototype, "breakpointListener", null);
ProgressBar.style = {
  css: balProgressBarCss
};

export { ProgressBar as bal_progress_bar };
