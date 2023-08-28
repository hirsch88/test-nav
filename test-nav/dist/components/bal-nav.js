import { h, proxyCustomElement, HTMLElement, createEvent, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { L as Logger } from './log.js';
import { L as ListenToMutation } from './mutation.decorator.js';
import './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { b as balBrowser } from './browser.js';
import { B as BalScrollHandler } from './scroll.js';
import { d as defaultConfig } from './initialize2.js';
import { L as ListenToConfig } from './config.decorator.js';
import { d as defineCustomElement$z } from './bal-badge2.js';
import { d as defineCustomElement$y } from './bal-button2.js';
import { d as defineCustomElement$x } from './bal-card2.js';
import { d as defineCustomElement$w } from './bal-card-content2.js';
import { d as defineCustomElement$v } from './bal-carousel2.js';
import { d as defineCustomElement$u } from './bal-carousel-item2.js';
import { d as defineCustomElement$t } from './bal-checkbox2.js';
import { d as defineCustomElement$s } from './bal-close2.js';
import { d as defineCustomElement$r } from './bal-heading2.js';
import { d as defineCustomElement$q } from './bal-icon2.js';
import { d as defineCustomElement$p } from './bal-list2.js';
import { d as defineCustomElement$o } from './bal-list-item2.js';
import { d as defineCustomElement$n } from './bal-list-item-accordion-body2.js';
import { d as defineCustomElement$m } from './bal-list-item-accordion-head2.js';
import { d as defineCustomElement$l } from './bal-list-item-content2.js';
import { d as defineCustomElement$k } from './bal-list-item-icon2.js';
import { d as defineCustomElement$j } from './bal-list-item-title2.js';
import { d as defineCustomElement$i } from './bal-logo2.js';
import { d as defineCustomElement$h } from './bal-nav-link2.js';
import { d as defineCustomElement$g } from './bal-nav-link-grid2.js';
import { d as defineCustomElement$f } from './bal-nav-link-grid-col2.js';
import { d as defineCustomElement$e } from './bal-nav-menu-bar2.js';
import { d as defineCustomElement$d } from './bal-nav-menu-flyout2.js';
import { d as defineCustomElement$c } from './bal-nav-meta-bar2.js';
import { d as defineCustomElement$b } from './bal-pagination2.js';
import { d as defineCustomElement$a } from './bal-popover2.js';
import { d as defineCustomElement$9 } from './bal-popover-content2.js';
import { d as defineCustomElement$8 } from './bal-select2.js';
import { d as defineCustomElement$7 } from './bal-select-option2.js';
import { d as defineCustomElement$6 } from './bal-spinner2.js';
import { d as defineCustomElement$5 } from './bal-stack2.js';
import { d as defineCustomElement$4 } from './bal-tabs2.js';
import { d as defineCustomElement$3 } from './bal-tag2.js';
import { d as defineCustomElement$2 } from './bal-text2.js';

class NavLinkItem {
  constructor(item, observer) {
    this.observer = observer;
    this.clickable = false;
    this.active = false;
    this.data = undefined;
    this.label = item.label;
    this.value = item.value || `nav-link-item-${NavLinkItemIDs++}`;
    this.href = item.href;
    this.target = item.target;
    this.active = !!item.active;
    this.clickable = !!item.clickable;
    this.data = item.data;
    this.onClick = (ev) => {
      this.observer.linkItemClickListener(this);
      if (item.onClick) {
        item.onClick(ev);
      }
    };
  }
  get isLink() {
    return this.href !== undefined && this.href !== null && this.href !== '';
  }
  get type() {
    return this.constructor.name;
  }
  toJson() {
    return {
      label: this.label,
      value: this.value,
      href: this.href,
      target: this.target,
      data: this.data,
    };
  }
  render(_context) {
    return (h("bal-nav-link", { role: "listitem", href: this.href, target: this.target, clickable: this.clickable, selected: this.active, onClick: ev => this.onClick(ev) }, this.label));
  }
}
let NavLinkItemIDs = 0;

class NavSectionLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.linkItems = [];
    this.htmlTitle = item.htmlTitle;
    this.label = item.label;
    this.href = item.href;
    this.target = item.target;
    this.value = item.value || `nav-section-link-item-${NavSectionLinkItemIDs++}`;
    this.linkItems = (item.linkItems || []).map(item => new NavLinkItem(item, observer));
  }
  render(_context) {
    return (h("bal-nav-link-group", { role: "list" },
      h("bal-nav-link", { role: "listitem", variant: "title", href: this.href, target: this.target, selected: this.active, onClick: ev => this.onClick(ev) }, this.label),
      this.linkItems.map(item => item.render())));
  }
}
let NavSectionLinkItemIDs = 0;

class NavServiceLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.color = 'grey';
    this.linkItems = [];
    this.value = item.value || `nav-service-link-item-${NavServiceLinkItemIDs++}`;
    this.color = item.color || 'grey';
    this.linkItems = (item.linkItems || []).map(item => new NavLinkItem(item, observer));
  }
  render(_context) {
    return (h("bal-nav-link-group", { color: this.color, role: "list" },
      h("bal-nav-link", { role: "listitem", variant: "title", href: this.href, target: this.target, selected: this.active, onClick: ev => this.onClick(ev) }, this.label),
      this.linkItems.map(item => item.render())));
  }
}
let NavServiceLinkItemIDs = 0;

class NavMenuLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.sectionLinkItems = [];
    this.serviceLinkItems = [];
    this.value = item.value || `nav-menu-link-item-${NavMenuLinkItemIDs++}`;
    this.sectionLinkItems = (item.sectionLinkItems || []).map(item => new NavSectionLinkItem(item, observer));
    this.serviceLinkItems = (item.serviceLinkItems || []).map(item => new NavServiceLinkItem(item, observer));
    this.overviewLink = item.overviewLink ? new NavLinkItem(item.overviewLink, observer) : undefined;
  }
  render(context) {
    if (this.isLink) {
      return h("bal-tab-item", { label: this.label, value: this.value, href: this.href, target: this.target });
    }
    return (h("bal-tab-item", { label: this.label, value: this.value, onBalNavigate: ev => {
        context === null || context === void 0 ? void 0 : context.onClick();
        if (this.onClick) {
          this.onClick(ev.detail);
        }
      } }));
  }
}
let NavMenuLinkItemIDs = 0;

class NavMetaLinkItem extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.mainLinkItems = [];
    this.value = item.value || `nav-meta-link-item-${NavMetaLinkItemIDs++}`;
    this.mainLinkItems = (item.mainLinkItems || []).map(item => new NavMenuLinkItem(item, observer));
    this.overviewLink = item.overviewLink ? new NavLinkItem(item.overviewLink, observer) : undefined;
  }
  render() {
    if (this.isLink) {
      return h("bal-tab-item", { label: this.label, value: this.value, href: this.href, target: this.target });
    }
    return (h("bal-tab-item", { label: this.label, value: this.value, onBalNavigate: ev => {
        if (this.onClick) {
          this.onClick(ev.detail);
        }
      } }));
  }
}
let NavMetaLinkItemIDs = 0;

class NavMetaButton extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.touchPlacement = 'top';
    this.id = `nav-meta-button-${NavMetaButtonIDs++}`;
    this.touchPlacement = item.touchPlacement || 'top';
    this.value = item.value || this.id;
    this.icon = item.icon;
    this.popoverId = item.popupId;
    this.ariaLabel = item.ariaLabel;
    this.htmlTitle = item.htmlTitle;
  }
  renderAtMetaBar() {
    return (h("bal-button", { id: this.value, class: "bal-popup-permanent-trigger bal-nav__popup--desktop", color: "light", size: "small", icon: this.icon, square: !this.label || this.label.length < 3, "aria-label": this.ariaLabel, title: this.htmlTitle, inverted: true, "bal-popup": this.popoverId, "bal-popup-variant": "popover", "bal-popup-arrow": "true", "bal-popup-backdrop": "true", "bal-popup-backdrop-dismiss": "true", "bal-popup-closable": "true", "bal-popup-placement": "bottom-end", "bal-popup-reference": "bal-nav__meta-buttons" }, this.label));
  }
  renderAtTouchTopMetaBar() {
    if (this.touchPlacement === 'top') {
      return (h("bal-button", { id: this.value, class: "bal-nav__popup--touch-top", color: "light", icon: this.icon, square: !!this.icon || !this.label || this.label.length < 3, inverted: false, "aria-label": this.ariaLabel, title: this.htmlTitle, "bal-popup": this.popoverId, "bal-popup-variant": "fullscreen", "bal-popup-closable": "true", "bal-popup-offset": "64" }, this.icon ? '' : this.label));
    }
  }
  renderAtTouchBottomMetaBar() {
    if (this.touchPlacement === 'bottom') {
      return (h("bal-button", { id: this.value, class: "bal-nav__popup--touch-bottom", icon: this.icon, square: !this.label || this.label.length < 3, color: "info", inverted: false, "aria-label": this.ariaLabel, title: this.htmlTitle, "bal-popup": this.popoverId, "bal-popup-variant": "drawer", "bal-popup-closable": "true", "bal-popup-backdrop": "true", "bal-popup-backdrop-dismiss": "true", "bal-popup-offset": "64" }, this.label));
    }
  }
  resetTouchBottomMetaBar() {
    if (balBrowser.hasDocument && this.touchPlacement === 'bottom') {
      const button = document.getElementById(this.value);
      if (button && button.balPopupVariant === 'drawer') {
        button.color = 'info';
      }
    }
  }
  resetDesktopMetaBar() {
    if (balBrowser.hasDocument) {
      const button = document.getElementById(this.value);
      if (button && button.balPopupVariant === 'popover') {
        button.color = 'info';
      }
    }
  }
}
let NavMetaButtonIDs = 0;

const i18nNavBars = {
  de: {
    open: 'Menü öffnen',
    close: 'Menü schliessen',
  },
  en: {
    open: 'Open Menu',
    close: 'Close Menu',
  },
  fr: {
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  it: {
    open: 'Apri Menù',
    close: 'Chiudi menù',
  },
  nl: {
    open: 'Menu openen',
    close: 'Menu sluiten',
  },
  es: {
    open: 'Menú abierto',
    close: 'Cerrar menú',
  },
  pl: {
    open: 'Otwórz menu',
    close: 'Zamknij menu',
  },
  pt: {
    open: 'Menu aberto',
    close: 'Fechar menu',
  },
  sv: {
    open: 'Öppna menyn',
    close: 'Stäng menyn',
  },
  fi: {
    open: 'Avaa valikko',
    close: 'Sulje valikko',
  },
};

const balNavCss = ":root{--bal-nav-background:var(--bal-color-primary)}.bal-nav{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%}.bal-nav__flyout{background:var(--bal-color-white);padding-top:1rem;padding-bottom:1rem;height:calc(var(--bal-app-height, 100%) - 4rem - 4rem);overflow-y:auto}@media screen and (min-width: 1024px){.bal-nav__flyout{display:none;visibility:hidden}}.bal-nav__flyout:not(.bal-nav__flyout--visible){position:absolute;left:-9999px;top:-9999px;clip:rect(0 0 0 0)}.bal-nav .bal-nav-meta-bar,.bal-nav .bal-nav-menu-bar{z-index:auto !important}.bal-list__item__accordion-head:after{background:rgba(0,0,0,0) !important}.bal-nav-meta-bar-transform-touch{z-index:var(--bal-z-index-popup);position:relative}";

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
const NavMetaBar = proxyCustomElement(class NavMetaBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balNavItemClick = createEvent(this, "balNavItemClick", 7);
    this.navId = `bal-nav-${NavIds++}`;
    this.bodyScrollHandler = new BalScrollHandler();
    this.mutationObserverActive = true;
    this.onOptionChange = async () => {
      this.linkItems = this.options.map(option => new NavMetaLinkItem(option, this));
      this.metaButtons = this.buttons.map(button => new NavMetaButton(button, this));
    };
    this.onTouchToggleFlyout = (_ev) => {
      this.closeAllPopups();
      this.isFlyoutActive = !this.isFlyoutActive;
      if (balBrowser.hasWindow && window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
      if (this.isFlyoutActive) {
        this.bodyScrollHandler.disable();
      }
      else {
        this.bodyScrollHandler.enable();
      }
    };
    this.onPopupOpen = (triggers) => {
      this.bodyScrollHandler.disable();
      triggers.forEach(trigger => {
        if (trigger.classList.contains('bal-nav__popup--desktop')) {
          trigger.inverted = false;
        }
        else if (trigger.classList.contains('bal-nav__popup--touch-bottom')) {
          trigger.color = 'primary';
        }
        else if (trigger.classList.contains('bal-nav__popup--touch-top')) {
          trigger.color = 'primary';
        }
      });
    };
    this.onPopupClose = (triggers) => {
      if (!this.isFlyoutActive) {
        this.bodyScrollHandler.enable();
      }
      triggers.forEach(trigger => {
        if (trigger.classList.contains('bal-nav__popup--desktop')) {
          trigger.inverted = true;
        }
        else if (trigger.classList.contains('bal-nav__popup--touch-bottom')) {
          trigger.color = 'info';
        }
        else if (trigger.classList.contains('bal-nav__popup--touch-top')) {
          trigger.color = 'light';
        }
      });
    };
    this.onMetaBarTabChange = (ev) => {
      if (ev.detail !== this.activeMetaLinkValue) {
        this.activeMetaLinkValue = ev.detail;
        const activeMetaItem = this.linkItems.find(item => item.value === this.activeMetaLinkValue);
        if (activeMetaItem && activeMetaItem.mainLinkItems.length > 0) {
          this.activeMenuLinkValue = activeMetaItem.mainLinkItems[0].value;
        }
      }
    };
    this.onMenuBarTabChange = (value) => {
      if (this.activeMenuLinkValue === value) {
        this.isFlyoutActive = !this.isFlyoutActive;
      }
      else {
        this.isFlyoutActive = true;
      }
      this.activeMenuLinkValue = value;
    };
    this.isTouch = false;
    this.isDesktop = true;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.isFlyoutActive = false;
    this.activeMetaLinkValue = undefined;
    this.activeMenuLinkValue = undefined;
    this.logo = undefined;
    this.options = [];
    this.linkItems = [];
    this.buttons = [];
    this.metaButtons = [];
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    this.updateTabs();
  }
  async buttonChanged() {
    this.onOptionChange();
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  componentWillLoad() {
    this.onOptionChange();
    this.updateTabs();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  listenToPopupChanges(event) {
    const target = event.target;
    if (target && target.nodeName === 'BAL-POPUP') {
      const id = target.id;
      const triggers = Array.from(this.el.querySelectorAll(`[bal-popup="${id}"]`));
      if (event.detail === true) {
        this.onPopupOpen(triggers);
        const isTouchMetaTopButtonClicked = triggers.some(triggerEl => triggerEl.classList.contains('bal-nav__popup--touch-top'));
        if (isTouchMetaTopButtonClicked) {
          this.isFlyoutActive = false;
        }
      }
      else {
        this.onPopupClose(triggers);
      }
    }
  }
  async clickOnOutside(ev) {
    var _a, _b, _c, _d, _e;
    if (this.isDesktop) {
      if (this.isFlyoutActive) {
        const targetIsInMetaBar = (_b = (_a = this.metaBarEl) === null || _a === void 0 ? void 0 : _a.querySelector('.container')) === null || _b === void 0 ? void 0 : _b.contains(ev.target);
        const targetIsInMenuBar = (_d = (_c = this.menuBarEl) === null || _c === void 0 ? void 0 : _c.querySelector('.container')) === null || _d === void 0 ? void 0 : _d.contains(ev.target);
        if (!targetIsInMetaBar && !targetIsInMenuBar) {
          this.isFlyoutActive = false;
          const tabs = (_e = this.menuBarEl) === null || _e === void 0 ? void 0 : _e.querySelector('.bal-tabs');
          tabs.closeAccordion();
        }
      }
    }
  }
  mutationListener() {
    this.onOptionChange();
  }
  breakpointListener(breakpoints) {
    if (this.isTouch !== breakpoints.touch) {
      this.isTouch = breakpoints.touch;
      this.isDesktop = breakpoints.desktop;
      this.closeAllPopups();
      this.isFlyoutActive = false;
    }
  }
  linkItemClickListener(item) {
    if (item && item.toJson) {
      this.balNavItemClick.emit(item.toJson());
    }
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  get activeMenuLinkItems() {
    const foundLinkItem = this.linkItems.find(item => item.value === this.activeMetaLinkValue);
    if (foundLinkItem) {
      return foundLinkItem.mainLinkItems;
    }
    return [];
  }
  get activeMenuLinkItem() {
    const foundLinkItem = this.activeMenuLinkItems.find(item => item.value === this.activeMenuLinkValue);
    return foundLinkItem ? foundLinkItem : undefined;
  }
  updateTabs() {
    var _a, _b;
    const previousActiveMetaLinkValue = this.activeMetaLinkValue;
    const newActiveMetaLinkValue = ((_a = this.linkItems.find(item => item.active)) === null || _a === void 0 ? void 0 : _a.value) || previousActiveMetaLinkValue;
    if (previousActiveMetaLinkValue !== newActiveMetaLinkValue) {
      this.activeMetaLinkValue = newActiveMetaLinkValue;
    }
    const previousActiveMenuLinkValue = this.activeMenuLinkValue;
    const newActiveMenuLinkValue = ((_b = this.activeMenuLinkItems.find(item => item.active)) === null || _b === void 0 ? void 0 : _b.value) || previousActiveMenuLinkValue;
    if (previousActiveMenuLinkValue !== newActiveMenuLinkValue) {
      this.activeMenuLinkValue = newActiveMenuLinkValue;
    }
  }
  closeAllPopups() {
    const popups = Array.from(this.el.querySelectorAll('bal-popup'));
    popups.forEach(popup => popup.dismiss());
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const block = BEM.block('nav');
    const flyoutBlock = block.element('flyout');
    return (h(Host, { id: this.navId, class: Object.assign({}, block.class()) }, h("div", { class: {
        'bal-nav-meta-bar-transform': true,
        'bal-nav-meta-bar-transform-touch': this.isTouch,
      } }, this.isDesktop ? (h("bal-nav-meta-bar", { variant: "primary", size: "small", position: "sticky-top", ref: metaBarEl => (this.metaBarEl = metaBarEl) }, h("bal-stack", { space: "auto" }, this.linkItems.length > 1 ? (h("bal-tabs", { spaceless: true, inverted: true, context: "meta", value: this.activeMetaLinkValue, onBalChange: ev => this.onMetaBarTabChange(ev) }, this.linkItems.map(item => item.render()))) : (h("span", null)), h("bal-stack", { id: "bal-nav__meta-buttons", space: "x-small", "fit-content": true }, this.metaButtons.map(button => button.renderAtMetaBar()))))) : (''), this.isDesktop ? (h("bal-nav-menu-bar", { position: "fixed-top", ref: menuBarEl => (this.menuBarEl = menuBarEl) }, h("bal-stack", { space: "auto", "space-row": "none", "use-wrap": true }, this.renderLogo(), h("bal-tabs", { context: "navigation", accordion: true, spaceless: true, value: this.activeMenuLinkValue }, (_a = this.linkItems
      .find(item => item.value === this.activeMetaLinkValue)) === null || _a === void 0 ? void 0 : _a.mainLinkItems.map(item => item.render({
      onClick: () => this.onMenuBarTabChange(item.value),
    })))), this.isFlyoutActive ? (h("bal-nav-menu-flyout", null, h("bal-nav-link", { role: "listitem", variant: "overview", href: (_c = (_b = this.activeMenuLinkItem) === null || _b === void 0 ? void 0 : _b.overviewLink) === null || _c === void 0 ? void 0 : _c.href, target: (_e = (_d = this.activeMenuLinkItem) === null || _d === void 0 ? void 0 : _d.overviewLink) === null || _e === void 0 ? void 0 : _e.target, onClick: () => { var _a; return this.linkItemClickListener((_a = this.activeMenuLinkItem) === null || _a === void 0 ? void 0 : _a.overviewLink); } }, (_g = (_f = this.activeMenuLinkItem) === null || _f === void 0 ? void 0 : _f.overviewLink) === null || _g === void 0 ? void 0 : _g.label), this.renderGridLinks(this.activeMenuLinkItem))) : (''))) : (''), h("div", null, h("slot", null))), this.isTouch ? (h("bal-nav-meta-bar", { variant: "white", size: "normal" }, h("bal-stack", { space: "auto" }, this.renderLogo(), h("bal-stack", { space: "x-small", "fit-content": true }, this.metaButtons.map(button => button.renderAtTouchTopMetaBar()), h("bal-button", { square: true, color: this.isFlyoutActive ? 'primary' : 'light', icon: this.isFlyoutActive ? 'close' : 'menu-bars', "aria-label": this.isFlyoutActive ? i18nNavBars[this.language].close : i18nNavBars[this.language].open, onClick: ev => this.onTouchToggleFlyout(ev) }))))) : (''), this.isTouch ? (h("div", { class: Object.assign(Object.assign({}, flyoutBlock.class()), flyoutBlock.modifier('visible').class(this.isFlyoutActive)) }, h("nav", { class: "container" }, h("ul", null, this.linkItems
      .filter(metaItem => metaItem.active)
      .map(metaItem => {
      return (h("li", null, h("a", { href: metaItem.href, target: metaItem.target }, metaItem.label), h("ul", { style: { margin: '1rem' } }, metaItem.mainLinkItems
        .filter(menuItem => menuItem.active)
        .map(menuItem => {
        var _a, _b;
        return (h("li", null, h("a", { href: menuItem.href, target: menuItem.target }, menuItem.label), h("ul", { style: { margin: '1rem' } }, (_a = menuItem.sectionLinkItems) === null || _a === void 0 ? void 0 : _a.map(itemGroup => {
          var _a;
          return (h("li", null, h("a", { href: itemGroup.href, target: itemGroup.target }, itemGroup.label), h("ul", { style: { margin: '1rem' } }, (_a = itemGroup.linkItems) === null || _a === void 0 ? void 0 : _a.map(item => {
            return (h("li", null, h("a", { href: item.href, target: item.target }, item.label)));
          }))));
        })), h("ul", { style: { margin: '1rem' } }, (_b = menuItem.serviceLinkItems) === null || _b === void 0 ? void 0 : _b.map(serviceGroup => {
          var _a;
          return (h("li", null, h("a", { href: serviceGroup.href, target: serviceGroup.target }, serviceGroup.label), h("ul", { style: { margin: '1rem' } }, (_a = serviceGroup.linkItems) === null || _a === void 0 ? void 0 : _a.map(item => {
            return (h("li", null, h("a", { href: item.href, target: item.target }, item.label)));
          }))));
        }))));
      }))));
    }))))) : (''), this.isTouch && this.isFlyoutActive ? (h("bal-nav-meta-bar", { variant: "grey", size: "normal" }, h("bal-stack", { space: "x-small", align: "center" }, this.metaButtons.map(button => button.renderAtTouchBottomMetaBar())))) : ('')));
  }
  renderGridLinks(linkItem) {
    var _a, _b;
    if (!linkItem) {
      return '';
    }
    return (h("bal-nav-link-grid", null, h("bal-nav-link-grid-col", null, (_a = linkItem.sectionLinkItems) === null || _a === void 0 ? void 0 : _a.map(itemGroup => itemGroup.render())), h("bal-nav-link-grid-col", { "static-col": true }, (_b = linkItem.serviceLinkItems) === null || _b === void 0 ? void 0 : _b.map(itemGroup => itemGroup.render()))));
  }
  renderTouchMenuAccordions(metaItem) {
    return (h("bal-list", { "accordion-one-level": true, class: "pt-xxx-small pb-normal" }, metaItem.mainLinkItems.map(menuItem => {
      var _a, _b, _c;
      return menuItem.isLink ? (h("bal-list-item", { "sub-accordion-item": true, href: menuItem.href, target: menuItem.target }, h("bal-list-item-content", null, h("bal-list-item-title", { "visual-level": "medium", level: "span" }, menuItem.label)))) : (h("bal-list-item", { accordion: true, "sub-accordion-item": true }, h("bal-list-item-accordion-head", { icon: "nav-go-down", "accordion-open": menuItem.active }, h("bal-list-item-content", null, h("bal-list-item-title", { "visual-level": "medium", level: "span" }, menuItem.label))), h("bal-list-item-accordion-body", null, h("div", { style: { width: '100%' } }, h("bal-nav-link", { role: "listitem", variant: "overview", href: (_a = menuItem.overviewLink) === null || _a === void 0 ? void 0 : _a.href, target: (_b = menuItem.overviewLink) === null || _b === void 0 ? void 0 : _b.target, onClick: () => this.linkItemClickListener(menuItem.overviewLink) }, (_c = menuItem.overviewLink) === null || _c === void 0 ? void 0 : _c.label), h("div", { class: "pt-normal" }, this.renderGridLinks(menuItem))))));
    })));
  }
  renderLogo() {
    var _a, _b, _c, _d, _e, _f;
    const Link = ((_a = this.logo) === null || _a === void 0 ? void 0 : _a.href) ? 'a' : ((_b = this.logo) === null || _b === void 0 ? void 0 : _b.clickable) ? 'button' : 'div';
    return (h(Link, { class: "bal-nav__logo", "aria-label": (_c = this.logo) === null || _c === void 0 ? void 0 : _c.ariaLabel, title: (_d = this.logo) === null || _d === void 0 ? void 0 : _d.htmlTitle, href: (_e = this.logo) === null || _e === void 0 ? void 0 : _e.href, target: (_f = this.logo) === null || _f === void 0 ? void 0 : _f.target, onClick: () => {
        var _a, _b;
        return this.balNavItemClick.emit({
          value: 'logo',
          label: 'Logo',
          href: (_a = this.logo) === null || _a === void 0 ? void 0 : _a.href,
          target: (_b = this.logo) === null || _b === void 0 ? void 0 : _b.target,
        });
      } }, h("bal-logo", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "options": ["optionChanged"],
    "buttons": ["buttonChanged"]
  }; }
  static get style() { return {
    css: balNavCss
  }; }
}, [36, "bal-nav", {
    "logo": [16],
    "options": [16],
    "buttons": [16],
    "isTouch": [32],
    "isDesktop": [32],
    "language": [32],
    "region": [32],
    "isFlyoutActive": [32],
    "activeMetaLinkValue": [32],
    "activeMenuLinkValue": [32],
    "linkItems": [32],
    "metaButtons": [32],
    "configChanged": [64]
  }, [[0, "balChange", "listenToPopupChanges"], [5, "click", "clickOnOutside"]]]);
__decorate([
  Logger('bal-nav')
], NavMetaBar.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-popup'] })
], NavMetaBar.prototype, "mutationListener", null);
__decorate([
  ListenToBreakpoints()
], NavMetaBar.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], NavMetaBar.prototype, "configChanged", null);
let NavIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-nav", "bal-badge", "bal-button", "bal-card", "bal-card-content", "bal-carousel", "bal-carousel-item", "bal-checkbox", "bal-close", "bal-heading", "bal-icon", "bal-list", "bal-list-item", "bal-list-item-accordion-body", "bal-list-item-accordion-head", "bal-list-item-content", "bal-list-item-icon", "bal-list-item-title", "bal-logo", "bal-nav-link", "bal-nav-link-grid", "bal-nav-link-grid-col", "bal-nav-menu-bar", "bal-nav-menu-flyout", "bal-nav-meta-bar", "bal-pagination", "bal-popover", "bal-popover-content", "bal-select", "bal-select-option", "bal-spinner", "bal-stack", "bal-tabs", "bal-tag", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-nav":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavMetaBar);
      }
      break;
    case "bal-badge":
      if (!customElements.get(tagName)) {
        defineCustomElement$z();
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$y();
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$x();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$w();
      }
      break;
    case "bal-carousel":
      if (!customElements.get(tagName)) {
        defineCustomElement$v();
      }
      break;
    case "bal-carousel-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$u();
      }
      break;
    case "bal-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$t();
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$s();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$r();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$q();
      }
      break;
    case "bal-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$p();
      }
      break;
    case "bal-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$o();
      }
      break;
    case "bal-list-item-accordion-body":
      if (!customElements.get(tagName)) {
        defineCustomElement$n();
      }
      break;
    case "bal-list-item-accordion-head":
      if (!customElements.get(tagName)) {
        defineCustomElement$m();
      }
      break;
    case "bal-list-item-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$l();
      }
      break;
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$k();
      }
      break;
    case "bal-list-item-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "bal-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "bal-nav-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "bal-nav-link-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "bal-nav-link-grid-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "bal-nav-menu-bar":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "bal-nav-menu-flyout":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "bal-nav-meta-bar":
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
    case "bal-stack":
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

const BalNav = NavMetaBar;
const defineCustomElement = defineCustomElement$1;

export { BalNav, defineCustomElement };
