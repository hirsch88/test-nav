'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');
const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');
const breakpoints_decorator = require('./breakpoints.decorator-7aae4c5f.js');
const initialize = require('./initialize-4d4da7e2.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
require('./helpers-83a73189.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./device-76e9eca9.js');
require('./listener-4161102f.js');
require('./tokens.esm-505d1e8f.js');
require('./log-911f84ec.js');
require('./index-843a2913.js');

const i18nControlLabel = {
  de: {
    left: 'Vorherige Seite',
    right: 'Nächste Seite',
  },
  en: {
    left: 'Previous Page',
    right: 'Next Page',
  },
  fr: {
    left: 'Page précédente',
    right: 'Page suivante',
  },
  it: {
    left: 'Pagina precedente',
    right: 'Pagina successiva',
  },
  nl: {
    left: 'Vorige pagina',
    right: 'Volgende pagina',
  },
  es: {
    left: 'Página anterior',
    right: 'Página siguiente',
  },
  pl: {
    left: 'Poprzednia strona',
    right: 'Następna strona',
  },
  pt: {
    left: 'Página anterior',
    right: 'Próxima página',
  },
  sv: {
    left: 'Föregående sida',
    right: 'Nästa sida',
  },
  fi: {
    left: 'Edellinen sivu',
    right: 'Seuraava sivu',
  },
};

const balPaginationCss = ":root{--bal-pagination-small-background:var(--bal-color-grey);--bal-pagination-small-radius:var(--bal-radius-normal);--bal-pagination-tabs-background:var(--bal-color-white);--bal-pagination-tabs-shadow:var(--bal-shadow-normal);--bal-pagination-tabs-radius:var(--bal-radius-large);--bal-pagination-dot-radius:var(--bal-radius-rounded);--bal-pagination-dot-background-active:var(--bal-color-primary);--bal-pagination-dot-background-inactive:var(--bal-color-white)}.bal-pagination{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}.bal-pagination--is-sticky{position:-webkit-sticky;position:sticky;z-index:var(--bal-z-index-sticky)}.bal-pagination__nav{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;text-align:center}.bal-pagination__nav--context-small{padding-top:1rem}.bal-pagination__nav__pagination-previous{-ms-flex-order:1;order:1}.bal-pagination__nav__pagination-previous--context-small[disabled] button,.bal-pagination__nav__pagination-previous--context-small[disabled] button:hover{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.bal-pagination__nav__pagination-next{-ms-flex-order:3;order:3}.bal-pagination__nav__pagination-next--context-small[disabled] button,.bal-pagination__nav__pagination-next--context-small[disabled] button:hover{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.bal-pagination__nav__pagination-list{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;gap:4px;padding-left:8px;padding-right:8px;-ms-flex-order:2;order:2;width:unset;text-align:center}@media screen and (min-width: 769px),print{.bal-pagination__nav__pagination-list{gap:8px}}@media screen and (min-width: 1024px){.bal-pagination__nav__pagination-list{gap:8px}}.bal-pagination__nav__pagination-list--context-small{gap:8px;max-width:88px;min-width:63px;min-height:1.25rem;margin:0 20px 0 !important;background:var(--bal-pagination-small-background);border-radius:var(--bal-pagination-small-radius)}.bal-pagination__nav__pagination-list--context-tabs{-ms-flex-positive:1;flex-grow:1;padding:8px;background:var(--bal-pagination-tabs-background);-webkit-box-shadow:var(--bal-pagination-tabs-shadow);box-shadow:var(--bal-pagination-tabs-shadow);border-radius:var(--bal-pagination-tabs-radius)}.bal-pagination__nav__pagination-list__dot{cursor:pointer;height:8px;width:8px;gap:30px;border-radius:var(--bal-pagination-dot-radius);display:block}.bal-pagination__nav__pagination-list__dot--active{background-color:var(--bal-pagination-dot-background-active)}.bal-pagination__nav__pagination-list__dot--inactive{background-color:var(--bal-pagination-dot-background-inactive)}.bal-pagination__nav__pagination-list__tab{-ms-flex:1;flex:1}.bal-pagination__nav__pagination-list.is-disabled li{pointer-events:none}";

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
const Pagination = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balChangeEventEmitter = index.createEvent(this, "balChange", 7);
    this._value = 1;
    this.isMobile = breakpoints_subject.balBreakpoints.isMobile;
    this.language = initialize.defaultConfig.language;
    this.interface = '';
    this.disabled = false;
    this.value = 1;
    this.totalPages = 1;
    this.pageRange = 2;
    this.sticky = false;
    this.top = 0;
  }
  valueChanged(newValue) {
    this._value = newValue;
  }
  topValueChanged(newValue) {
    if (this.sticky) {
      this.el.style.top = `${newValue}px`;
    }
  }
  componentWillLoad() {
    this._value = this.value;
    this.topValueChanged(this.top);
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  async next() {
    if (this._value < this.totalPages) {
      this._value = this._value + 1;
      this.balChangeEventEmitter.emit(this._value);
    }
  }
  async previous() {
    if (this._value !== 1) {
      this._value = this._value - 1;
      this.balChangeEventEmitter.emit(this._value);
    }
  }
  async configChanged(state) {
    this.language = state.language;
  }
  selectPage(pageNumber) {
    this._value = pageNumber;
    this.balChangeEventEmitter.emit(this._value);
  }
  getItems(pageRange = 1) {
    const items = [];
    let rangeStart = this._value - pageRange;
    let rangeEnd = this._value + pageRange;
    if (this.interface === 'small') {
      rangeStart = 1;
      rangeEnd = this.totalPages - 1;
    }
    else {
      if (rangeEnd > this.totalPages) {
        rangeEnd = this.totalPages;
        rangeStart = this.totalPages - pageRange * 2;
        rangeStart = rangeStart < 1 ? 1 : rangeStart;
      }
      if (rangeStart <= 1) {
        rangeStart = 1;
        rangeEnd = Math.min(pageRange * 2 + 1, this.totalPages);
      }
    }
    if (rangeStart > 1) {
      items.push(this.renderPageElement(1));
      if (this.interface !== 'small') {
        items.push(this.renderEllipsisElement());
      }
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      items.push(this.renderPageElement(i));
    }
    if (rangeEnd < this.totalPages) {
      if (this.interface !== 'small') {
        items.push(this.renderEllipsisElement());
      }
      items.push(this.renderPageElement(this.totalPages));
    }
    return items;
  }
  renderEllipsisElement() {
    return (index.h("li", null, index.h("div", { class: "pagination-more" }, index.h("bal-text", { bold: true, heading: true, inline: true, space: "none" }, "\u2026"))));
  }
  renderPageElement(pageNumber) {
    const isActive = this._value === pageNumber;
    const dot = bem.BEM.block('pagination').element('nav').element('pagination-list').element('dot');
    if (this.interface === 'small') {
      return (index.h("li", null, index.h("span", { class: Object.assign(Object.assign(Object.assign({}, dot.class()), dot.modifier('active').class(isActive)), dot.modifier('inactive').class(!isActive)), onClick: () => this.selectPage(pageNumber) })));
    }
    return (index.h("li", null, index.h("bal-button", { square: true, color: isActive ? 'primary' : 'text', onClick: () => this.selectPage(pageNumber), "data-testid": "bal-pagination-page-number" }, pageNumber)));
  }
  render() {
    const mobileItems = this.getItems();
    const tabletItems = this.getItems(this.pageRange);
    const block = bem.BEM.block('pagination');
    const elNav = block.element('nav');
    const elPrevious = elNav.element('pagination-previous');
    const elNext = elNav.element('pagination-next');
    const elList = elNav.element('pagination-list');
    const isSmall = this.interface === 'small';
    const buttonColor = isSmall ? 'tertiary' : 'text';
    const buttonSize = isSmall ? 'small' : '';
    const flat = isSmall;
    const leftControlTitle = i18nControlLabel[this.language].left;
    const rightControlTitle = i18nControlLabel[this.language].right;
    const hasBasicNavigationButtons = this.interface === '' || (isSmall && this.totalPages <= 5);
    const SmallWithText = () => (index.h("bal-text", { space: "none", class: Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), color: "blue" }, index.h("span", { class: "has-text-weight-bold" }, this._value), ' / ' + this.totalPages));
    const PaginationTablet = () => (index.h("ul", { class: Object.assign(Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), { 'is-disabled': this.disabled }), "data-testid": "bal-pagination-list" }, tabletItems));
    const PaginationMobile = () => (index.h("ul", { class: Object.assign(Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), { 'is-disabled': this.disabled }), "data-testid": "bal-pagination-list" }, mobileItems));
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier('is-sticky').class(this.sticky)) }, index.h("nav", { class: Object.assign(Object.assign({}, elNav.class()), elNav.modifier(`context-${this.interface}`).class()), role: "navigation", "aria-label": "pagination" }, index.h("bal-button", { square: true, color: buttonColor, size: buttonSize, flat: flat, class: Object.assign(Object.assign({}, elPrevious.class()), elPrevious.modifier(`context-${this.interface}`).class()), disabled: this._value < 2 || this.disabled, onClick: () => this.previous(), "data-testid": "bal-pagination-controls-left", title: leftControlTitle }, index.h("bal-icon", { name: "nav-go-left", size: "small" })), index.h("bal-button", { square: true, color: buttonColor, size: buttonSize, flat: flat, class: Object.assign(Object.assign({}, elNext.class()), elNext.modifier(`context-${this.interface}`).class()), disabled: this._value === this.totalPages || this.disabled, onClick: () => this.next(), "data-testid": "bal-pagination-controls-right", title: rightControlTitle }, index.h("bal-icon", { name: "nav-go-right", size: "small" })), hasBasicNavigationButtons && this.isMobile ? index.h(PaginationMobile, null) : '', hasBasicNavigationButtons && !this.isMobile ? index.h(PaginationTablet, null) : '', !hasBasicNavigationButtons ? index.h(SmallWithText, null) : '')));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "top": ["topValueChanged"]
  }; }
};
__decorate([
  breakpoints_decorator.ListenToBreakpoints()
], Pagination.prototype, "breakpointListener", null);
__decorate([
  config_decorator.ListenToConfig()
], Pagination.prototype, "configChanged", null);
Pagination.style = {
  css: balPaginationCss
};

exports.bal_pagination = Pagination;
