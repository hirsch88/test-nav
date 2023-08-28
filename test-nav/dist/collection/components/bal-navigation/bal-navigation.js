var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host } from '@stencil/core';
import { observeLevels } from './utils/level.utils';
import { BEM } from '../../utils/bem';
import { balDevice } from '../../utils/device';
import { BalScrollHandler } from '../../utils/scroll';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
import { balBrowser } from '../../utils/browser';
export class Navigation {
  constructor() {
    this.previousY = 0;
    this.bodyScrollBlocker = new BalScrollHandler();
    this.bodyOffset = 0;
    this.listenToPopoverChangeEvent = async (ev) => {
      const customEvent = ev;
      const isNavPopoverOpen = customEvent.detail;
      if (isNavPopoverOpen) {
        this.bodyScrollBlocker.disable();
      }
      else {
        this.bodyScrollBlocker.enable();
      }
      if (isNavPopoverOpen) {
        this.isMainBodyOpen = false;
      }
    };
    this.onBurgerButtonClick = async () => {
      this.dismissPopover();
      this.isMainBodyOpen = !this.isMainBodyOpen;
      if (this.isMainBodyOpen) {
        this.bodyScrollBlocker.disable();
      }
      else {
        this.bodyScrollBlocker.enable();
      }
    };
    this.onMainTabChange = async (ev) => {
      var _a;
      const isMainNavOpen = ev.detail !== '';
      const option = await ((_a = this.mainNavTabsEl) === null || _a === void 0 ? void 0 : _a.getOptionByValue(ev.detail));
      const isLink = (option === null || option === void 0 ? void 0 : option.href) !== '' && (option === null || option === void 0 ? void 0 : option.href) !== undefined;
      if (balDevice.hasTouchScreen) {
        if (isMainNavOpen) {
          this.isMetaHidden = false;
          if (!isLink) {
            this.bodyScrollBlocker.disable();
          }
          else {
            this.bodyScrollBlocker.enable();
          }
        }
        else {
          this.bodyScrollBlocker.enable();
        }
      }
    };
    this.mainMobileHeight = '';
    this.isMetaHidden = false;
    this.levels = [];
    this.selectedMetaIndex = 0;
    this.selectedMainIndex = 0;
    this.isMainBodyOpen = false;
    this.selectedMetaValue = '';
    this.selectedMainValue = '';
    this.isTouch = balBreakpoints.isTouch;
    this.isDesktop = balBreakpoints.isDesktop;
    this.logoAnimated = true;
    this.logoPath = '/';
    this.ariaLabelMeta = '';
    this.ariaLabelMain = '';
    this.metaValue = undefined;
  }
  async clickOnOutside(ev) {
    var _a, _b;
    if (this.isDesktop) {
      if (!((_a = this.mainNavElement) === null || _a === void 0 ? void 0 : _a.contains(ev.target)) && this.isMainBodyOpen) {
        this.isMainBodyOpen = false;
        this.selectedMainValue = '';
      }
    }
    if (this.isTouch) {
      if ((_b = this.metaMobileActionsElement) === null || _b === void 0 ? void 0 : _b.contains(ev.target)) {
        this.isMainBodyOpen = false;
      }
    }
  }
  get metaMobileActionsElement() {
    return this.el.querySelector('.bal-nav__metamobile__actions');
  }
  get metaDesktopEndElement() {
    return this.el.querySelector('bal-navigation-meta-end');
  }
  breakpointListener(breakpoints) {
    this.isMetaHidden = false;
    this.mainMobileHeight = this.getMaxHeight();
    if (this.isTouch !== breakpoints.touch) {
      this.isMainBodyOpen = false;
      this.selectedMainValue = '';
      this.isTouch = breakpoints.touch;
    }
    this.isDesktop = breakpoints.desktop;
  }
  async orientationHandler() {
    this.isMainBodyOpen = false;
    this.dismissPopover();
  }
  handleScroll(_event) {
    if (this.isDesktop && !this.bodyScrollBlocker.isDisabled() && balBrowser.hasWindow) {
      const maxScrollHeight = document.body.scrollHeight - document.body.clientHeight;
      const isOnTop = 0 >= window.scrollY;
      const isOverViewportTop = 0 > window.scrollY;
      const isOverViewportBottom = maxScrollHeight <= window.scrollY;
      const didMoveDownwards = window.scrollY > this.previousY;
      this.isMetaHidden = !isOnTop && (didMoveDownwards || isOverViewportBottom || isOverViewportTop);
      this.previousY = window.scrollY;
    }
  }
  async connectedCallback() {
    this.selectedMetaValue = this.metaValue;
    await this.readSubLevels();
    this.updateIndexes();
    this.mutationO = observeLevels(this.el, 'bal-navigation-levels', () => this.readSubLevels());
    this.bodyScrollBlocker.connect();
  }
  disconnectedCallback() {
    var _a, _b;
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
    this.bodyScrollBlocker.disconnect();
    (_a = this.metaMobileActionsElement) === null || _a === void 0 ? void 0 : _a.removeEventListener('balChange', this.listenToPopoverChangeEvent);
    (_b = this.metaDesktopEndElement) === null || _b === void 0 ? void 0 : _b.removeEventListener('balChange', this.listenToPopoverChangeEvent);
  }
  componentDidLoad() {
    var _a, _b;
    if (balBrowser.hasWindow) {
      this.previousY = window.scrollY;
    }
    this.mainMobileHeight = this.getMaxHeight();
    (_a = this.metaMobileActionsElement) === null || _a === void 0 ? void 0 : _a.addEventListener('balChange', this.listenToPopoverChangeEvent);
    (_b = this.metaDesktopEndElement) === null || _b === void 0 ? void 0 : _b.addEventListener('balChange', this.listenToPopoverChangeEvent);
  }
  componentDidUpdate() {
    this.updateIndexes();
  }
  updateIndexes() {
    var _a;
    if (((_a = this.levels) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const selectedMetaIndex = this.levels.findIndex(meta => meta.value === this.selectedMetaValue);
      this.selectedMetaIndex = selectedMetaIndex !== -1 ? selectedMetaIndex : 0;
    }
  }
  async readSubLevels() {
    const levelEl = this.el.querySelector('bal-navigation-levels');
    const levels = await (levelEl === null || levelEl === void 0 ? void 0 : levelEl.getLevelInfos());
    if (levels) {
      this.levels = levels;
    }
  }
  getMaxHeight() {
    if (balBrowser.hasWindow) {
      return `${(window.innerHeight - 64) / 16}rem`;
    }
    return '0';
  }
  dismissPopover() {
    const popoverElements = this.el.querySelectorAll('bal-popover');
    popoverElements === null || popoverElements === void 0 ? void 0 : popoverElements.forEach(popoverEl => {
      popoverEl.active = false;
    });
  }
  render() {
    var _a, _b;
    const navigationEl = BEM.block('nav');
    const hasLevels = ((_a = this.levels) === null || _a === void 0 ? void 0 : _a.length) > 0;
    return (h(Host, { class: Object.assign(Object.assign({}, navigationEl.class()), { 'bal-nav--transformed': this.isMetaHidden }) }, h("bal-navigation-meta", { class: "is-hidden-touch", "aria-label-meta": this.ariaLabelMeta }, h("bal-navigation-meta-start", null, hasLevels && (h("bal-tabs", { spaceless: true, inverted: true, context: "meta", value: this.selectedMetaValue }, this.levels.map((meta, index) => {
      return meta.isTabLink ? (h("bal-tab-item", Object.assign({ label: meta.label, value: meta.value, href: meta.link, target: meta.target }, meta.trackingData))) : (h("bal-tab-item", Object.assign({ label: meta.label, value: meta.value }, meta.trackingData, { onBalNavigate: ev => {
          meta.onClick(ev.detail);
          this.selectedMetaValue = meta.value;
          this.selectedMetaIndex = index;
          this.isMainBodyOpen = false;
          this.selectedMainValue = '';
        } })));
    })))), h("bal-navigation-meta-end", null, this.levels && h("slot", { name: "meta-actions" }))), h("bal-navigation-main", { class: {
        'is-hidden-touch': true,
        'container': true,
        'bal-nav__main--expanded': this.isMainBodyOpen,
      }, ref: el => {
        this.mainNavElement = el;
      }, "aria-label-main": this.ariaLabelMain }, h("bal-navigation-main-head", { slot: "main-head", class: {
        'is-hidden-mobile': true,
        'bal-nav__main__head--active': this.isMainBodyOpen,
      } }, h("div", null, h("a", { href: this.logoPath, class: "bal-nav__main-head-logo", tabindex: -1 }, h("bal-logo", { color: "blue", animated: this.logoAnimated && !this.isTouch })), h("bal-tabs", { accordion: true, spaceless: true, context: "navigation", value: this.selectedMainValue, onBalChange: event => this.onMainTabChange(event), ref: el => {
        this.mainNavTabsEl = el;
      } }, hasLevels &&
      ((_b = this.levels[this.selectedMetaIndex].subLevels) === null || _b === void 0 ? void 0 : _b.map((main, index) => {
        return main.isTabLink ? (h("bal-tab-item", { label: main.label, value: main.value, href: main.link, target: main.target, onBalNavigate: ev => {
            main.onClick(ev.detail);
            this.selectedMainIndex = index;
            this.isMainBodyOpen = false;
            this.selectedMainValue = main.value;
          } })) : (h("bal-tab-item", Object.assign({ label: main.label, value: main.value }, main.trackingData, { onBalNavigate: ev => {
            main.onClick(ev.detail);
            this.selectedMainIndex = index;
            this.isMainBodyOpen = !(ev.target.value === this.selectedMainValue);
            this.selectedMainValue = ev.target.value === this.selectedMainValue ? '' : main.value;
          } })));
      }))))), this.isMainBodyOpen && (h("bal-navigation-main-body", { slot: "main-body" }, this.levels
      .filter((_, index) => index === this.selectedMetaIndex)
      .map(meta => {
      var _a;
      return (_a = meta.subLevels) === null || _a === void 0 ? void 0 : _a.filter((_, mainIndex) => this.selectedMainIndex === mainIndex).map(main => (h("bal-navigation-menu", { "link-href": main.link, "link-name": main.linkLabel, target: main.target, elements: main.subLevels, tracking: main.trackingData })));
    })))), h("div", { class: "bal-nav__metamobile container" }, h("nav", { role: "navigation", "aria-label": this.ariaLabelMeta }, h("a", { href: this.logoPath, class: "bal-nav__main-mobile__logo", tabindex: -1 }, h("bal-logo", { color: "blue", animated: this.logoAnimated && this.isTouch })), h("div", { class: "bal-nav__metamobile__actions" }, h("slot", { name: "meta-actions-mobile" })), h("bal-button", { slot: "burger", "data-testid": "navigation-burger", color: this.isMainBodyOpen ? 'primary' : 'light', square: true, icon: this.isMainBodyOpen ? 'close' : 'menu-bars', onClick: () => this.onBurgerButtonClick() }))), h("div", { class: "bal-nav__main-mobile container", style: {
        '--bal-nav-main-mobile-height': this.mainMobileHeight,
        'display': this.isMainBodyOpen && this.isTouch ? 'block' : 'none',
      } }, h("bal-list", { border: true, "accordion-one-level": true, size: "small", class: "bal-nav__main__list" }, this.levels.map(meta => {
      var _a;
      return (h("bal-list-item", { accordion: true, class: "bal-nav__main-mobile__main-accordion" }, h("bal-list-item-accordion-head", { icon: "nav-go-down" }, h("bal-list-item-content", null, h("bal-list-item-title", { level: "large" }, meta.label))), h("bal-list-item-accordion-body", { class: "bal-list__item__accordion-body__parent" }, meta.link && (h("div", { class: "bal-nav__main-mobile__link" }, h("a", Object.assign({ href: meta.link }, meta.trackingData), meta.linkLabel))), h("bal-list", { "accordion-one-level": true, size: "small" }, (_a = meta.subLevels) === null || _a === void 0 ? void 0 : _a.map(main => {
        return main.isTabLink ? (h("bal-list-item", { "sub-accordion-item": true, href: main.link, target: main.target }, h("bal-list-item-content", null, h("bal-list-item-title", { level: "medium" }, main.label)))) : (h("bal-list-item", { accordion: true, "sub-accordion-item": true }, h("bal-list-item-accordion-head", { icon: "nav-go-down" }, h("bal-list-item-content", null, h("bal-list-item-title", { level: "medium" }, main.label))), h("bal-list-item-accordion-body", null, h("bal-navigation-menu", { "link-href": main.link, "link-name": main.linkLabel, target: main.target, elements: main.subLevels, tracking: main.trackingData }))));
      })))));
    }))), h("div", { class: "bal-nav__foot-mobile", style: {
        display: this.isMainBodyOpen && this.isTouch ? 'block' : 'none',
      } }, h("slot", { name: "meta-mobile-foot" })), h("slot", null)));
  }
  static get is() { return "bal-navigation"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-navigation.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-navigation.css"]
    };
  }
  static get properties() {
    return {
      "logoAnimated": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if the animation should be active"
        },
        "attribute": "logo-animated",
        "reflect": false,
        "defaultValue": "true"
      },
      "logoPath": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Path to the logo-image"
        },
        "attribute": "logo-path",
        "reflect": false,
        "defaultValue": "'/'"
      },
      "ariaLabelMeta": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Aria label for the meta-navigation-wrapper"
        },
        "attribute": "aria-label-meta",
        "reflect": false,
        "defaultValue": "''"
      },
      "ariaLabelMain": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Aria label for the main-navigation-wrapper"
        },
        "attribute": "aria-label-main",
        "reflect": false,
        "defaultValue": "''"
      },
      "metaValue": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the initially active meta-navigation-item"
        },
        "attribute": "meta-value",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "mainMobileHeight": {},
      "isMetaHidden": {},
      "levels": {},
      "selectedMetaIndex": {},
      "selectedMainIndex": {},
      "isMainBodyOpen": {},
      "selectedMetaValue": {},
      "selectedMainValue": {},
      "isTouch": {},
      "isDesktop": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "clickOnOutside",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "orientationchange",
        "method": "orientationHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "scroll",
        "method": "handleScroll",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  ListenToBreakpoints()
], Navigation.prototype, "breakpointListener", null);
