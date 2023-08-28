import { h, r as registerInstance, c as createEvent, H as Host, g as getElement } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { L as ListenToMutation } from './mutation.decorator-96ae606b.js';
import './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { B as BalScrollHandler } from './scroll-e5864193.js';
import { d as defaultConfig } from './initialize-92ae5fef.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import { L as ListenToResize } from './resize.decorator-87610696.js';
import './helpers-08b28736.js';
import './icons.constant-35253412.js';
import './listener-ea90dc02.js';
import './device-c28cde6d.js';
import './tokens.esm-8af6b758.js';
import './index-8b8ed6bd.js';

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

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavMetaBar$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "buttons": ["buttonChanged"]
  }; }
};
__decorate$7([
  Logger('bal-nav')
], NavMetaBar$1.prototype, "createLogger", null);
__decorate$7([
  ListenToMutation({ tags: ['bal-popup'] })
], NavMetaBar$1.prototype, "mutationListener", null);
__decorate$7([
  ListenToBreakpoints()
], NavMetaBar$1.prototype, "breakpointListener", null);
__decorate$7([
  ListenToConfig()
], NavMetaBar$1.prototype, "configChanged", null);
let NavIds = 0;
NavMetaBar$1.style = {
  css: balNavCss
};

const balNavLinkCss = "@media (hover: hover)and (pointer: fine){button.bal-nav-link__native:focus-visible,a.bal-nav-link__native:focus-visible{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}:root{--bal-nav-link-text-color:var(--bal-link-color);--bal-nav-link-text-color-hover:var(--bal-link-color-hover);--bal-nav-link-text-color-active:var(--bal-link-color-active)}.bal-nav-link{display:block}.bal-nav-link:not(:last-child){margin-bottom:var(--bal-space-x-small)}.bal-nav-link--variant-title:not(:last-child){margin-bottom:var(--bal-space-normal) !important}.bal-nav-link--variant-overview:not(:last-child){margin-bottom:var(--bal-space-none) !important}@media screen and (min-width: 1024px){.bal-nav-link--variant-overview:not(:last-child){margin-bottom:var(--bal-space-normal) !important}}.bal-nav-link__native{display:inline;color:var(--bal-nav-link-text-color);font-size:var(--bal-size-normal);line-height:var(--bal-body-line-height);font-family:var(--bal-font-family-text);padding:0;border:none;background:none}.bal-nav-link__native--variant-title{font-family:var(--bal-font-family-title);font-size:var(--bal-size-normal);font-weight:var(--bal-weight-bold);text-decoration:none;margin-bottom:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link__native--variant-title{font-size:var(--bal-size-xx-large)}}.bal-nav-link__native--variant-overview{font-size:var(--bal-size-small);font-weight:var(--bal-weight-bold)}.bal-nav-link__native--selected{-webkit-text-decoration:var(--bal-link-text-decoration) !important;text-decoration:var(--bal-link-text-decoration) !important;text-decoration-thickness:1px !important;text-underline-offset:2px !important}button.bal-nav-link__native,a.bal-nav-link__native{cursor:pointer}@media (hover: hover)and (pointer: fine){button.bal-nav-link__native:hover,a.bal-nav-link__native:hover{-webkit-text-decoration:var(--bal-link-text-decoration);text-decoration:var(--bal-link-text-decoration);text-decoration-thickness:1px;color:var(--bal-nav-link-text-color-hover);text-underline-offset:2px}}button.bal-nav-link__native:focus-visible,a.bal-nav-link__native:focus-visible{border-radius:var(--bal-radius-normal)}button.bal-nav-link__native:active,a.bal-nav-link__native:active{-webkit-text-decoration:var(--bal-link-text-decoration);text-decoration:var(--bal-link-text-decoration);text-decoration-thickness:1px;color:var(--bal-nav-link-text-color-active);text-underline-offset:2px}";

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavigationLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = '';
    this.selected = false;
    this.clickable = false;
    this.href = undefined;
    this.target = '_self';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link');
    const { href, target } = this;
    const hasLink = href !== undefined && href !== '';
    const hasVariant = this.variant !== '';
    const Link = hasLink ? 'a' : this.clickable ? 'button' : 'span';
    let linkAttributes = {};
    if (hasLink) {
      linkAttributes = { href, target };
    }
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class(hasVariant)) }, h(Link, Object.assign({ "data-test": "bal-nav-link", class: Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier(`variant-${this.variant}`).class(hasVariant)), block
        .element('native')
        .modifier('selected')
        .class(this.selected && (hasLink || this.clickable))) }, linkAttributes), h("slot", null))));
  }
};
__decorate$6([
  Logger('bal-nav-link')
], NavigationLink.prototype, "createLogger", null);
NavigationLink.style = {
  css: balNavLinkCss
};

const balNavLinkGridCss = ".bal-nav-link-grid{--bal-column-gap:0;margin-top:0}@media screen and (min-width: 1024px){.bal-nav-link-grid{--bal-column-gap:1.5rem}}.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link-grid .bal-nav-link-grid-col:not(:last-child){margin-bottom:var(--bal-space-none)}}";

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavigationLinkGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), { 'columns is-multiline': true }) }, h("slot", null)));
  }
};
__decorate$5([
  Logger('bal-nav-link-grid')
], NavigationLinkGrid.prototype, "createLogger", null);
NavigationLinkGrid.style = {
  css: balNavLinkGridCss
};

const balNavLinkGridColCss = ".bal-nav-link-grid-col{padding:0}@media screen and (min-width: 1024px){.bal-nav-link-grid-col{padding-top:0;padding-bottom:0;padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}}.bal-nav-link-grid-col .bal-nav-link-group{margin-bottom:var(--bal-space-normal);padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}@media screen and (min-width: 1440px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}}.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{margin:0;width:100%}@media screen and (min-width: 1024px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{padding-left:0;padding-right:0}}@media screen and (min-width: 1440px){.bal-nav-link-grid-col:not(.bal-nav-link-grid-col--is-static) .bal-nav-link-grid-col__inner .bal-nav-link-group{width:50%}}";

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavigationLinkGridCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.staticCol = false;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid-col');
    const innerEl = block.element('inner');
    const widescreenPositionClass = this.staticCol ? 'is-one-third-widescreen' : 'is-two-thirds-widescreen';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-static').class(this.staticCol)), { 'column is-full is-6-desktop is-half-desktop': true, [`${widescreenPositionClass}`]: true }) }, h("div", { class: Object.assign({}, innerEl.class()) }, h("slot", null))));
  }
};
__decorate$4([
  Logger('bal-nav-link-grid-col')
], NavigationLinkGridCol.prototype, "createLogger", null);
NavigationLinkGridCol.style = {
  css: balNavLinkGridColCss
};

const balNavLinkGroupCss = ":root{--bal-nav-link-group-background:var(--bal-color-transparent);--bal-nav-link-group-background-grey:var(--bal-color-grey);--bal-nav-link-group-background-purple:var(--bal-color-purple);--bal-nav-link-group-background-red:var(--bal-color-red);--bal-nav-link-group-background-yellow:var(--bal-color-yellow);--bal-nav-link-group-background-green:var(--bal-color-green);--bal-nav-link-group-radius:var(--bal-radius-large)}.bal-nav-link-group{display:block;background:var(--bal-nav-link-group-background);border-radius:var(--bal-nav-link-group-radius);padding-top:var(--bal-space-normal);padding-bottom:var(--bal-space-normal);padding-left:var(--bal-space-normal);padding-right:var(--bal-space-normal)}@media screen and (min-width: 1024px){.bal-nav-link-group{padding-left:var(--bal-space-large);padding-right:var(--bal-space-large)}}.bal-nav-link-group--is-grey{background:var(--bal-nav-link-group-background-grey)}.bal-nav-link-group--is-purple{background:var(--bal-nav-link-group-background-purple)}.bal-nav-link-group--is-red{background:var(--bal-nav-link-group-background-red)}.bal-nav-link-group--is-yellow{background:var(--bal-nav-link-group-background-yellow)}.bal-nav-link-group--is-green{background:var(--bal-nav-link-group-background-green)}";

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavigationLinkGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = '';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-group');
    const hasColor = this.color !== '';
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`is-${this.color}`).class(hasColor)) }, h("slot", null)));
  }
};
__decorate$3([
  Logger('bal-nav-link-group')
], NavigationLinkGroup.prototype, "createLogger", null);
NavigationLinkGroup.style = {
  css: balNavLinkGroupCss
};

const balNavMenuBarCss = ":root{--bal-nav-menu-bar-background:var(--bal-color-white);--bal-nav-menu-bar-radius:var(--bal-radius-large);--bal-nav-menu-bar-shadow:0 5px 15px rgba(0,0,0,.1)}.bal-nav-menu-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;z-index:var(--bal-z-index-navigation)}@media screen and (max-width: 768px){.bal-nav-menu-bar--hidden-mobile{display:hidden;visibility:hidden}}@media screen and (max-width: 768px){.bal-nav-menu-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-nav-menu-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 1440px){.bal-nav-menu-bar{position:fixed;margin-top:1rem}}.bal-nav-menu-bar--position-fixed-top{position:fixed}.bal-nav-menu-bar__inner{background:var(--bal-nav-menu-bar-background);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow)}@media screen and (min-width: 1440px){.bal-nav-menu-bar__inner{background:rgba(0,0,0,0);-webkit-box-shadow:none;box-shadow:none}}.bal-nav-menu-bar__inner>.container{min-height:64px}@media screen and (min-width: 1440px){.bal-nav-menu-bar__inner>.container{background:var(--bal-nav-menu-bar-background);border-radius:var(--bal-nav-menu-bar-radius);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow);min-height:80px}}@media screen and (min-width: 1440px)and (max-width: 1539px){.bal-nav-menu-bar__inner>.container{background:rgba(0,0,0,0);-webkit-box-shadow:none;box-shadow:none;min-height:80px}.bal-nav-menu-bar__inner>.container::before{position:absolute;content:\"\";height:100%;top:0;left:1rem;right:1rem;background:var(--bal-nav-menu-bar-background);border-radius:var(--bal-nav-menu-bar-radius);-webkit-box-shadow:var(--bal-nav-menu-bar-shadow);box-shadow:var(--bal-nav-menu-bar-shadow)}}.bal-nav-menu-bar .bal-nav__logo{-ms-flex-item-align:start;align-self:flex-start;z-index:1;height:auto;padding-top:.8em}@media screen and (min-width: 1024px){.bal-nav-menu-bar .bal-nav__logo{padding-top:1rem}}@media screen and (min-width: 1440px){.bal-nav-menu-bar .bal-nav__logo{padding-top:1.5rem}}.bal-nav-menu-bar-body-padding{padding-top:1rem}@media screen and (min-width: 1440px){.bal-nav-menu-bar-body-padding{padding-top:7rem}}.bal-nav-menu-bar-body-margin{margin-top:1rem}@media screen and (min-width: 1440px){.bal-nav-menu-bar-body-margin{margin-top:7rem}}.bal-nav-menu-bar-fixed-body-padding{padding-top:8rem}.bal-nav-menu-bar-fixed-body-margin{margin-top:8rem}";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavMenuBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navMenuBarId = `bal-nav-menu-bar-${NavMenuBarIds++}`;
    this.isHidden = false;
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  get flyoutElement() {
    return this.el.querySelector('bal-nav-menu-flyout');
  }
  render() {
    const block = BEM.block('nav-menu-bar');
    const innerBlock = block.element('inner');
    return (h(Host, { id: this.navMenuBarId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')), block.modifier(`position-${this.position}`).class(this.position !== 'none')) }, h("div", { class: Object.assign({}, innerBlock.class()) }, h("div", { class: {
        container: true,
      } }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
__decorate$2([
  Logger('bal-nav-menu-bar')
], NavMenuBar.prototype, "createLogger", null);
let NavMenuBarIds = 0;
NavMenuBar.style = {
  css: balNavMenuBarCss
};

const balNavMenuFlyoutCss = ":root{--bal-nav-menu-flyout-border-background:var(--bal-color-grey)}.bal-nav-menu-flyout{position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;padding-bottom:2.5rem;overflow-y:auto;max-height:calc(var(--bal-app-height, 100%) - 90px - 48px - 16px);width:calc(100% + 1rem + 1rem);margin-left:-1rem;margin-right:-1rem}.bal-nav-menu-flyout .bal-nav-menu-flyout__line{position:-webkit-sticky;position:sticky;width:100%;left:0;top:0;height:1px;background-color:var(--bal-color-grey);margin-bottom:2.5rem}@media screen and (min-width: 1440px)and (max-width: 1539px){.bal-nav-menu-flyout .bal-nav-menu-flyout__line{width:calc(100% - 2rem);left:1rem}}@media screen and (min-width: 769px),print{.bal-nav-menu-flyout{width:calc(100% + 2.5rem + 2.5rem);margin-left:-2.5rem;margin-right:-2.5rem}}@media screen and (min-width: 1024px){.bal-nav-menu-flyout{width:calc(100% + 3rem + 3rem);margin-left:-3rem;margin-right:-3rem}}@media screen and (min-width: 1440px){.bal-nav-menu-flyout{max-height:calc(var(--bal-app-height, 100%) - 96px - 48px - 16px)}}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const NavMenuFlyout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navMenuFlyoutId = `bal-nav-menu-flyout-${NavMenuFlyOutIds++}`;
    this.bodyScrollHandler = new BalScrollHandler();
    this.isHidden = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  resizeListener() {
    if (this.isFlyoutScrollable()) {
      this.bodyScrollHandler.disable();
    }
    else {
      this.bodyScrollHandler.enable();
    }
  }
  isFlyoutScrollable() {
    var _a, _b;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.scrollHeight) > ((_b = this.el) === null || _b === void 0 ? void 0 : _b.clientHeight);
  }
  render() {
    const block = BEM.block('nav-menu-flyout');
    const line = block.element('line');
    return (h(Host, { id: this.navMenuFlyoutId, class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, line.class()) }), h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
__decorate$1([
  Logger('bal-nav-menu-flyout')
], NavMenuFlyout.prototype, "createLogger", null);
__decorate$1([
  ListenToResize()
], NavMenuFlyout.prototype, "resizeListener", null);
let NavMenuFlyOutIds = 0;
NavMenuFlyout.style = {
  css: balNavMenuFlyoutCss
};

const balNavMetaBarCss = ":root{--bal-nav-meta-bar-variant-primary-background:var(--bal-color-primary);--bal-nav-meta-bar-variant-primary-shadow:none;--bal-nav-meta-bar-variant-white-background:var(--bal-color-white);--bal-nav-meta-bar-variant-white-shadow:0 5px 15px rgba(0,0,0,.1);--bal-nav-meta-bar-variant-grey-background:var(--bal-color-grey-2);--bal-nav-meta-bar-variant-grey-shadow:none}.bal-nav-meta-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;z-index:var(--bal-z-index-navigation)}.bal-nav-meta-bar .container{height:100%}.bal-nav-meta-bar--size-normal{padding-top:.5rem;padding-bottom:.5rem;height:4rem;max-height:4rem}.bal-nav-meta-bar--size-small{min-height:3rem}.bal-nav-meta-bar--position-fixed-top{position:fixed;top:0;left:0;width:100%}.bal-nav-meta-bar--position-fixed-bottom{position:fixed;bottom:0;left:0;width:100%}.bal-nav-meta-bar--variant-primary{background:var(--bal-nav-meta-bar-variant-primary-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-primary-shadow);box-shadow:var(--bal-nav-meta-bar-variant-primary-shadow)}.bal-nav-meta-bar--variant-grey{background:var(--bal-nav-meta-bar-variant-grey-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-grey-shadow);box-shadow:var(--bal-nav-meta-bar-variant-grey-shadow)}.bal-nav-meta-bar--variant-white{background:var(--bal-nav-meta-bar-variant-white-background);-webkit-box-shadow:var(--bal-nav-meta-bar-variant-white-shadow);box-shadow:var(--bal-nav-meta-bar-variant-white-shadow)}@media screen and (max-width: 768px){.bal-nav-meta-bar--hidden-mobile{display:hidden;visibility:hidden}}@media screen and (max-width: 768px){.bal-nav-meta-bar--hidden-tablet{display:hidden;visibility:hidden}}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-nav-meta-bar--hidden-tablet{display:hidden;visibility:hidden}}.bal-nav-meta-bar .button-label{word-break:keep-all !important}.bal-nav-meta-bar-transform{will-change:transition;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out;position:fixed;display:block;width:100%;top:0;z-index:var(--bal-z-index-navigation)}.bal-nav-meta-bar-transform-small{-webkit-transform:translateY(-3rem);transform:translateY(-3rem)}.bal-nav-meta-bar-transform-normal{-webkit-transform:translateY(-5rem);transform:translateY(-5rem)}";

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
const NavMetaBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navMetaBarId = `bal-nav-meta-bar-${NavMetaBarIds++}`;
    this.previousY = 0;
    this.isHidden = false;
    this.variant = 'primary';
    this.size = 'normal';
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  handleScroll() {
    if (balBrowser.hasWindow && balBrowser.hasDocument && this.position === 'sticky-top') {
      const maxScrollHeight = document.body.scrollHeight - document.body.clientHeight;
      const isOnTop = 0 >= window.scrollY;
      const isOverViewportTop = 0 > window.scrollY;
      const isOverViewportBottom = maxScrollHeight <= window.scrollY;
      const didMoveDownwards = window.scrollY > this.previousY;
      this.isHidden = !isOnTop && (didMoveDownwards || isOverViewportBottom || isOverViewportTop);
      this.previousY = window.scrollY;
      const transformElements = Array.from(document.querySelectorAll('.bal-nav-meta-bar-transform'));
      if (transformElements.length > 0) {
        for (let index = 0; index < transformElements.length; index++) {
          const transformElement = transformElements[index];
          if (this.isHidden) {
            if (this.size === 'small') {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-small`);
            }
            else {
              transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
              transformElement.classList.add(`bal-nav-meta-bar-transform-normal`);
            }
          }
          else {
            transformElement.classList.remove(`bal-nav-meta-bar-transform-small`);
            transformElement.classList.remove(`bal-nav-meta-bar-transform-normal`);
          }
        }
      }
    }
  }
  render() {
    const block = BEM.block('nav-meta-bar');
    return (h(Host, { id: this.navMetaBarId, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`variant-${this.variant}`).class()), block.modifier(`size-${this.size}`).class()), block.modifier(`position-${this.position}`).class(this.position !== 'none')), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')) }, h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-meta-bar')
], NavMetaBar.prototype, "createLogger", null);
let NavMetaBarIds = 0;
NavMetaBar.style = {
  css: balNavMetaBarCss
};

export { NavMetaBar$1 as bal_nav, NavigationLink as bal_nav_link, NavigationLinkGrid as bal_nav_link_grid, NavigationLinkGridCol as bal_nav_link_grid_col, NavigationLinkGroup as bal_nav_link_group, NavMenuBar as bal_nav_menu_bar, NavMenuFlyout as bal_nav_menu_flyout, NavMetaBar as bal_nav_meta_bar };
