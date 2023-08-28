'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const formInput = require('./form-input-7611e5c9.js');
const bem = require('./bem-5d122a5c.js');
const scroll = require('./scroll-1d66154c.js');
const browser = require('./browser-791d6902.js');

const NavigationPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = (ev) => {
      formInput.stopEventBubbling(ev);
      this.clearTimeouts();
      if (!this.isActive) {
        scroll.BalScrollHandler.disableSmoothScrolling();
        this.scrollToTopTimer = setTimeout(() => {
          if (browser.balBrowser.hasWindow) {
            window.scrollTo(0, 0);
          }
        }, 0);
      }
      this.setActiveTimer = setTimeout(() => {
        scroll.BalScrollHandler.enableSmoothScrolling();
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
    const navPopoverEl = bem.BEM.block('nav').element('popover');
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, navPopoverEl.class()), { control: true }) }, index.h("bal-popover", { active: this.isActive, onBalChange: event => (this.isActive = event.detail), arrow: this.arrow, backdrop: this.backdrop, position: this.position, offsetY: this.offsetY, "mobile-top": this.mobileTop }, index.h("bal-button", { "bal-popover-trigger": true, icon: this.icon, size: this.size, inverted: this.inverted, color: this.isActive ? this.activeColor : this.inactiveColor, square: this.square, onClick: this.toggle, "aria-haspopup": "true", class: `bal-navigation-popover__button bal-navigation-popover__button-${this.isActive ? this.activeColor : this.inactiveColor}` }, this.label), index.h("bal-popover-content", { radius: this.contentRadius, "content-width": this.contentWidth, "content-min-width": this.contentMinWidth, "no-shadow": this.contentNoShadow, expanded: this.contentExpanded, "mobile-top": this.mobileTop }, (this.closable || this.heading) && (index.h("div", { class: Object.assign({}, navPopoverEl.element('head').class()) }, this.heading && (index.h("bal-heading", { space: "none", level: "h4" }, this.heading)), this.closable && index.h("bal-close", { onClick: () => (this.isActive = !this.isActive) }))), index.h("slot", null)))));
  }
};

exports.bal_navigation_popover = NavigationPopover;
