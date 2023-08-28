import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observeLevels } from './level.utils.js';
import { B as BEM } from './bem.js';
import { b as balDevice } from './device.js';
import { B as BalScrollHandler } from './scroll.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { b as balBrowser } from './browser.js';
import { d as defineCustomElement$C } from './bal-badge2.js';
import { d as defineCustomElement$B } from './bal-button2.js';
import { d as defineCustomElement$A } from './bal-card2.js';
import { d as defineCustomElement$z } from './bal-card-content2.js';
import { d as defineCustomElement$y } from './bal-carousel2.js';
import { d as defineCustomElement$x } from './bal-carousel-item2.js';
import { d as defineCustomElement$w } from './bal-checkbox2.js';
import { d as defineCustomElement$v } from './bal-close2.js';
import { d as defineCustomElement$u } from './bal-heading2.js';
import { d as defineCustomElement$t } from './bal-icon2.js';
import { d as defineCustomElement$s } from './bal-list2.js';
import { d as defineCustomElement$r } from './bal-list-item2.js';
import { d as defineCustomElement$q } from './bal-list-item-accordion-body2.js';
import { d as defineCustomElement$p } from './bal-list-item-accordion-head2.js';
import { d as defineCustomElement$o } from './bal-list-item-content2.js';
import { d as defineCustomElement$n } from './bal-list-item-icon2.js';
import { d as defineCustomElement$m } from './bal-list-item-title2.js';
import { d as defineCustomElement$l } from './bal-logo2.js';
import { d as defineCustomElement$k } from './bal-navigation-main2.js';
import { d as defineCustomElement$j } from './bal-navigation-main-body2.js';
import { d as defineCustomElement$i } from './bal-navigation-main-head2.js';
import { d as defineCustomElement$h } from './bal-navigation-menu2.js';
import { d as defineCustomElement$g } from './bal-navigation-menu-list2.js';
import { d as defineCustomElement$f } from './bal-navigation-menu-list-item2.js';
import { d as defineCustomElement$e } from './bal-navigation-meta2.js';
import { d as defineCustomElement$d } from './bal-navigation-meta-end2.js';
import { d as defineCustomElement$c } from './bal-navigation-meta-start2.js';
import { d as defineCustomElement$b } from './bal-pagination2.js';
import { d as defineCustomElement$a } from './bal-popover2.js';
import { d as defineCustomElement$9 } from './bal-popover-content2.js';
import { d as defineCustomElement$8 } from './bal-select2.js';
import { d as defineCustomElement$7 } from './bal-select-option2.js';
import { d as defineCustomElement$6 } from './bal-spinner2.js';
import { d as defineCustomElement$5 } from './bal-tab-item2.js';
import { d as defineCustomElement$4 } from './bal-tabs2.js';
import { d as defineCustomElement$3 } from './bal-tag2.js';
import { d as defineCustomElement$2 } from './bal-text2.js';

const balNavigationCss = ":root{--bal-nav-main-mobile-height:100vh}.bal-nav{position:absolute;display:block;width:100%;z-index:30;top:0;left:0;background-color:var(--bal-color-white)}@media screen and (min-width: 1024px){.bal-nav{background-color:rgba(0,0,0,0);position:fixed;top:0;left:0;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out}}@media screen and (min-width: 1024px){.bal-nav--transformed{-webkit-transform:translateY(-3rem);transform:translateY(-3rem)}}.bal-nav__meta{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:var(--bal-color-primary);height:48px;max-height:48px;display:block}.bal-nav__meta nav{display:-ms-flexbox;display:flex;height:100%;gap:.5rem;-ms-flex-align:center;align-items:center;margin:0 auto}.bal-nav__meta__start{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;gap:.5rem}.bal-nav__meta__end{position:relative;z-index:20}.bal-nav__meta__end .bal-button{position:relative;z-index:20}.bal-nav__main{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 !important;display:block;position:absolute !important;left:50%;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:auto;-webkit-box-shadow:0 5px 15px rgba(0,0,0,.1);box-shadow:0 5px 15px rgba(0,0,0,.1);background:var(--bal-color-white)}@media screen and (min-width: 1440px)and (max-width: 1527px){.bal-nav__main{max-width:calc(100vw - 3rem) !important}.bal-nav__main .bal-nav__main__head{padding-left:2rem;padding-right:2rem}}@media screen and (max-width: 1439px){.bal-nav__main{width:100%}.bal-nav__main--expanded{border-bottom-left-radius:var(--bal-radius-large);border-bottom-right-radius:var(--bal-radius-large)}}@media screen and (min-width: 1440px){.bal-nav__main{margin:1rem auto 0 !important;border-radius:var(--bal-radius-large)}}.bal-nav__main__head{display:block;position:relative;padding-left:1rem;padding-right:1rem}@media screen and (min-width: 769px),print{.bal-nav__main__head{padding-left:2.5rem;padding-right:2.5rem}}@media screen and (min-width: 1024px){.bal-nav__main__head>div{min-height:3rem}}@media screen and (min-width: 1280px){.bal-nav__main__head>div{min-height:4rem}}@media screen and (min-width: 1440px){.bal-nav__main__head>div{min-height:5rem}}@media screen and (min-width: 1024px){.bal-nav__main__head{padding-left:3rem;padding-right:3rem}}.bal-nav__main__head>div{display:-ms-flexbox;display:flex;gap:.5rem;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start;padding-top:1rem}@media screen and (min-width: 1280px){.bal-nav__main__head>div{gap:1rem;padding-top:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}}.bal-nav__main__head>div .bal-tabs--context-navigation{-ms-flex:1;flex:1;overflow:hidden;overflow-x:auto}@media screen and (max-width: 1439px){.bal-nav__main__head{width:100%}}@media screen and (min-width: 1024px){.bal-nav__main__head::after{position:absolute;content:\"\";width:100%;left:0;top:100%;height:1px;background-color:var(--bal-color-grey);opacity:0;z-index:1}.bal-nav__main__head--active::after{opacity:1}}@media screen and (min-width: 1440px){.bal-nav__main__head{border-radius:var(--bal-radius-large)}.bal-nav__main__head>div{-ms-flex-align:center;align-items:center}.bal-nav__main__head--active{border-bottom-left-radius:var(--bal-radius-none) !important;border-bottom-right-radius:var(--bal-radius-none) !important;-webkit-transition:border-radius .3s ease-in-out;transition:border-radius .3s ease-in-out}}@media screen and (min-width: 1440px){.bal-nav__main .bal-nav__main-head-logo{margin:0;padding:0}}.bal-nav__main__body{position:relative;display:block;max-height:calc(100vh - 160px);overflow-y:auto;padding-left:1rem;padding-right:1rem}@media screen and (min-width: 769px),print{.bal-nav__main__body{padding-left:2.5rem;padding-right:2.5rem}}@media screen and (min-width: 1024px){.bal-nav__main__body{padding-left:3rem;padding-right:3rem}}@media screen and (min-width: 1440px){.bal-nav__main__body{border-bottom-left-radius:var(--bal-radius-large);border-bottom-right-radius:var(--bal-radius-large)}}@media screen and (min-width: 1920px){.bal-nav__main__body{max-height:calc(100vh - 176px)}}.bal-nav__menu{display:block}@media screen and (min-width: 1024px){.bal-nav__menu{padding-top:2.5rem;padding-bottom:1.5rem}}.bal-nav__menu .bal-nav__menu__wrapper.columns{margin-bottom:0;margin-top:0 !important}.bal-nav__menu .bal-nav__menu__wrapper.columns .column{padding-top:0;padding-bottom:0}.bal-nav__menu__link{display:block;padding-bottom:1rem}.bal-nav__menu__link>a{color:var(--bal-color-text-primary);position:relative;padding-right:17px;font-size:var(--bal-size-x-small);line-height:1rem;font-weight:var(--bal-weight-bold)}@media (hover: hover)and (pointer: fine){.bal-nav__menu__link>a:hover{color:var(--bal-color-text-light-blue);text-decoration:underline}}@media screen and (min-width: 1440px){.bal-nav__menu__white-list{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}}.bal-nav__menu__list{display:block;position:relative}.bal-nav__menu__list>bal-card>:not(bal-badge):not(bal-tag):last-child{padding-bottom:1rem}.bal-nav__menu__list>bal-card>:not(bal-badge):not(bal-tag):first-child{padding-top:1rem}@media screen and (max-width: 1023px){.bal-nav__menu__list--context-grey,.bal-nav__menu__list--context-yellow,.bal-nav__menu__list--context-red,.bal-nav__menu__list--context-purple,.bal-nav__menu__list--context-green{padding-bottom:1rem;padding-top:1rem}}@media screen and (min-width: 1024px){.bal-nav__menu__list--context-grey,.bal-nav__menu__list--context-yellow,.bal-nav__menu__list--context-red,.bal-nav__menu__list--context-purple,.bal-nav__menu__list--context-green{margin:0 0 1rem}.bal-nav__menu__list--context-grey:last-child,.bal-nav__menu__list--context-yellow:last-child,.bal-nav__menu__list--context-red:last-child,.bal-nav__menu__list--context-purple:last-child,.bal-nav__menu__list--context-green:last-child{margin:0 0 .5rem}}@media screen and (min-width: 1024px){.bal-nav__menu__list--context-white>bal-card>bal-card-content{padding-left:0;padding-right:0}}@media screen and (min-width: 1440px){.bal-nav__menu__list--context-white{width:calc(50% - 30px)}.bal-nav__menu__list--context-white:nth-child(odd){margin-right:60px}}@media (hover: hover)and (pointer: fine){.bal-nav__menu__list>bal-card>bal-card-content>a:hover>bal-heading>h4{color:var(--bal-color-text-light-blue);text-decoration:underline}}.bal-nav__menu__list__item{display:block}.bal-nav__menu__list__item__link{display:block;margin-top:.5rem}@media (hover: hover)and (pointer: fine){.bal-nav__menu__list__item__link:hover{color:var(--bal-color-text-light-blue);text-decoration:underline}}.bal-nav__menu__list__card{margin:0}.bal-nav__menu__list__card__heading{margin-bottom:1rem !important}.bal-nav .bal-nav__metamobile{display:block;background:var(--bal-color-primary-inverted);height:4rem;max-height:4rem;-webkit-box-shadow:0 5px 15px rgba(0,0,0,.1);box-shadow:0 5px 15px rgba(0,0,0,.1)}@media screen and (min-width: 1024px){.bal-nav .bal-nav__metamobile{display:none}}.bal-nav .bal-nav__metamobile nav{display:-ms-flexbox;display:flex;height:100%;gap:.5rem;-ms-flex-align:center;align-items:center;margin:0 auto}.bal-nav .bal-nav__metamobile .bal-nav__metamobile__actions{margin-left:auto}.bal-nav .bal-nav__metamobile .bal-nav__metamobile__actions>div{display:-ms-flexbox;display:flex;gap:.5rem}.bal-nav .bal-nav__main-mobile{display:block;padding-top:1rem;padding-bottom:5rem;height:var(--bal-nav-main-mobile-height);overflow-y:auto}@media screen and (min-width: 769px),print{.bal-nav .bal-nav__main-mobile{padding-top:2rem;padding-bottom:6rem}}@media screen and (min-width: 1024px){.bal-nav .bal-nav__main-mobile{display:none}}.bal-nav .bal-nav__main-mobile__link{display:block;padding-bottom:1rem;position:relative}.bal-nav .bal-nav__main-mobile__link>a{color:var(--bal-color-text-primary);font-size:var(--bal-size-x-small);font-weight:var(--bal-weight-bold);line-height:1rem;padding-right:1rem;position:relative}.bal-nav .bal-nav__main-mobile__link>a::before{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:\"➞\"}@media (hover: hover)and (pointer: fine){.bal-nav .bal-nav__main-mobile__link>a:hover{color:var(--bal-color-text-light-blue)}}.bal-nav .bal-nav__main-mobile__logo{padding-top:1rem;padding-bottom:1rem}.bal-nav .bal-nav__foot-mobile{position:fixed;bottom:0;left:0;width:100%;background:var(--bal-color-grey-2);padding:.5rem}@media screen and (min-width: 1024px){.bal-nav .bal-nav__foot-mobile{display:none}}.bal-nav .bal-nav__foot-mobile>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:.5rem}.bal-nav .bal-navigation-popover__button-white .button{background-color:var(--bal-color-white);border-color:var(--bal-color-white)}.bal-nav [bal-popover-trigger]{z-index:0}.bal-nav__popover button{word-break:keep-all}@media screen and (min-width: 769px),print{.bal-nav__popover .bal-popover__content{width:100vw}}.bal-nav__popover .bal-popover__content__inner{padding:1rem}@media screen and (min-width: 769px),print{.bal-nav__popover .bal-popover__content__inner{padding:2rem 2.5rem}}@media screen and (min-width: 1024px){.bal-nav__popover .bal-popover__content__inner{padding:1.5rem}}.bal-nav__popover .bal-navigation-popover__button{position:relative;z-index:20}.bal-nav__popover .bal-navigation-popover__button .button-label{-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.bal-nav__popover .control{margin:0 !important}.bal-nav__popover__head{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.75rem}@media screen and (min-width: 1024px){.bal-app--safari.bal-app--touch .bal-nav__menu{padding-bottom:4.5rem}}.bal-nav__main__list.bal-list--border>.bal-list__item--expanded>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-nav__main__list.bal-list--border>.bal-list__item--expanding>.bal-list__item__trigger>.bal-list__item__accordion-head:after{bottom:-2rem}";

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
const Navigation = proxyCustomElement(class Navigation extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return {
    css: balNavigationCss
  }; }
}, [36, "bal-navigation", {
    "logoAnimated": [4, "logo-animated"],
    "logoPath": [1, "logo-path"],
    "ariaLabelMeta": [1, "aria-label-meta"],
    "ariaLabelMain": [1, "aria-label-main"],
    "metaValue": [1, "meta-value"],
    "mainMobileHeight": [32],
    "isMetaHidden": [32],
    "levels": [32],
    "selectedMetaIndex": [32],
    "selectedMainIndex": [32],
    "isMainBodyOpen": [32],
    "selectedMetaValue": [32],
    "selectedMainValue": [32],
    "isTouch": [32],
    "isDesktop": [32]
  }, [[4, "click", "clickOnOutside"], [8, "orientationchange", "orientationHandler"], [8, "scroll", "handleScroll"]]]);
__decorate([
  ListenToBreakpoints()
], Navigation.prototype, "breakpointListener", null);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation", "bal-badge", "bal-button", "bal-card", "bal-card-content", "bal-carousel", "bal-carousel-item", "bal-checkbox", "bal-close", "bal-heading", "bal-icon", "bal-list", "bal-list-item", "bal-list-item-accordion-body", "bal-list-item-accordion-head", "bal-list-item-content", "bal-list-item-icon", "bal-list-item-title", "bal-logo", "bal-navigation-main", "bal-navigation-main-body", "bal-navigation-main-head", "bal-navigation-menu", "bal-navigation-menu-list", "bal-navigation-menu-list-item", "bal-navigation-meta", "bal-navigation-meta-end", "bal-navigation-meta-start", "bal-pagination", "bal-popover", "bal-popover-content", "bal-select", "bal-select-option", "bal-spinner", "bal-tab-item", "bal-tabs", "bal-tag", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Navigation);
      }
      break;
    case "bal-badge":
      if (!customElements.get(tagName)) {
        defineCustomElement$C();
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$B();
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$A();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$z();
      }
      break;
    case "bal-carousel":
      if (!customElements.get(tagName)) {
        defineCustomElement$y();
      }
      break;
    case "bal-carousel-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$x();
      }
      break;
    case "bal-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$w();
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$v();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$u();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$t();
      }
      break;
    case "bal-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$s();
      }
      break;
    case "bal-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$r();
      }
      break;
    case "bal-list-item-accordion-body":
      if (!customElements.get(tagName)) {
        defineCustomElement$q();
      }
      break;
    case "bal-list-item-accordion-head":
      if (!customElements.get(tagName)) {
        defineCustomElement$p();
      }
      break;
    case "bal-list-item-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$o();
      }
      break;
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$n();
      }
      break;
    case "bal-list-item-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$m();
      }
      break;
    case "bal-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$l();
      }
      break;
    case "bal-navigation-main":
      if (!customElements.get(tagName)) {
        defineCustomElement$k();
      }
      break;
    case "bal-navigation-main-body":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "bal-navigation-main-head":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "bal-navigation-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "bal-navigation-menu-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "bal-navigation-menu-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "bal-navigation-meta":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "bal-navigation-meta-end":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "bal-navigation-meta-start":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "bal-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "bal-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "bal-popover-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "bal-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "bal-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-tab-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-tabs":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalNavigation = Navigation;
const defineCustomElement = defineCustomElement$1;

export { BalNavigation, defineCustomElement };
