import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { s as stopEventBubbling } from './form-input-2b8d78bf.js';
import { B as BEM } from './bem-1b28532d.js';
import { B as BalScrollHandler } from './scroll-e5864193.js';
import { b as balBrowser } from './browser-9199b5e2.js';

const NavigationPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = (ev) => {
      stopEventBubbling(ev);
      this.clearTimeouts();
      if (!this.isActive) {
        BalScrollHandler.disableSmoothScrolling();
        this.scrollToTopTimer = setTimeout(() => {
          if (balBrowser.hasWindow) {
            window.scrollTo(0, 0);
          }
        }, 0);
      }
      this.setActiveTimer = setTimeout(() => {
        BalScrollHandler.enableSmoothScrolling();
        this.isActive = !this.isActive;
      }, 100);
    };
    this.isActive = false;
    this.label = '';
    this.inverted = false;
    this.icon = undefined;
    this.backdrop = false;
    this.size = '';
    this.inactiveColor = 'light';
    this.activeColor = 'primary';
    this.heading = undefined;
    this.closable = true;
    this.contentRadius = 'normal';
    this.position = 'bottom-start';
    this.contentWidth = 0;
    this.contentMinWidth = 0;
    this.offsetY = 0;
    this.square = false;
    this.contentNoShadow = false;
    this.contentExpanded = false;
    this.arrow = false;
    this.mobileTop = false;
  }
  clearTimeouts() {
    if (this.scrollToTopTimer) {
      clearTimeout(this.scrollToTopTimer);
    }
    if (this.setActiveTimer) {
      clearTimeout(this.setActiveTimer);
    }
  }
  render() {
    const navPopoverEl = BEM.block('nav').element('popover');
    return (h(Host, { class: Object.assign(Object.assign({}, navPopoverEl.class()), { control: true }) }, h("bal-popover", { active: this.isActive, onBalChange: event => (this.isActive = event.detail), arrow: this.arrow, backdrop: this.backdrop, position: this.position, offsetY: this.offsetY, "mobile-top": this.mobileTop }, h("bal-button", { "bal-popover-trigger": true, icon: this.icon, size: this.size, inverted: this.inverted, color: this.isActive ? this.activeColor : this.inactiveColor, square: this.square, onClick: this.toggle, "aria-haspopup": "true", class: `bal-navigation-popover__button bal-navigation-popover__button-${this.isActive ? this.activeColor : this.inactiveColor}` }, this.label), h("bal-popover-content", { radius: this.contentRadius, "content-width": this.contentWidth, "content-min-width": this.contentMinWidth, "no-shadow": this.contentNoShadow, expanded: this.contentExpanded, "mobile-top": this.mobileTop }, (this.closable || this.heading) && (h("div", { class: Object.assign({}, navPopoverEl.element('head').class()) }, this.heading && (h("bal-heading", { space: "none", level: "h4" }, this.heading)), this.closable && h("bal-close", { onClick: () => (this.isActive = !this.isActive) }))), h("slot", null)))));
  }
};

export { NavigationPopover as bal_navigation_popover };
