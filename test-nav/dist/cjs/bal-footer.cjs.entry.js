'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const index_esm = require('./index.esm-edff2e0c.js');
const index$1 = require('./index-843a2913.js');
const bem = require('./bem-5d122a5c.js');
const log = require('./log-911f84ec.js');
const helpers = require('./helpers-83a73189.js');
const initialize = require('./initialize-4d4da7e2.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
require('./index-e6a233be.js');
require('./_commonjsHelpers-bcc1208a.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');

const balFooterCss = ":root{--bal-footer-font-family:var(--bal-font-family-text);--bal-footer-background:var(--bal-color-primary);--bal-footer-color:var(--bal-color-text-white);--bal-footer-language-color-hover:var(--bal-color-light-blue-2);--bal-footer-language-background-hover:var(--bal-color-light-blue-2);--bal-footer-language-color-active:var(--bal-color-light-blue-3);--bal-footer-language-background-active:var(--bal-color-light-blue-3)}.bal-footer{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:static;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.bal-footer__inner{position:relative;font-family:var(--bal-footer-font-family);background-color:var(--bal-footer-background);color:var(--bal-footer-color);padding-top:var(--bal-space-x-small);padding-bottom:var(--bal-space-large)}@media screen and (min-width: 769px),print{.bal-footer__inner{padding-top:var(--bal-space-large);padding-bottom:var(--bal-space-large)}}@media screen and (min-width: 1024px){.bal-footer__inner{padding-top:var(--bal-space-large);padding-bottom:var(--bal-space-large)}}.bal-footer__inner,.bal-footer__inner p{color:var(--bal-footer-color)}.bal-footer__inner__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--bal-space-large)}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-footer__inner__wrapper{gap:var(--bal-space-tablet-medium)}}@media screen and (max-width: 768px){.bal-footer__inner__wrapper{gap:var(--bal-space-tablet-medium)}}.bal-footer__inner__wrapper__header-container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:row;flex-direction:row}.bal-footer__inner__wrapper__header-container__language{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center}.bal-footer__inner__wrapper__header-container__language:hover bal-icon svg,.bal-footer__inner__wrapper__header-container__language:hover bal-icon g,.bal-footer__inner__wrapper__header-container__language:hover bal-icon path,.bal-footer__inner__wrapper__header-container__language:hover bal-icon circle{fill:var(--bal-footer-language-background-hover)}.bal-footer__inner__wrapper__header-container__language:hover .input{color:var(--bal-footer-language-color-hover)}.bal-footer__inner__wrapper__header-container__language:active bal-icon svg,.bal-footer__inner__wrapper__header-container__language:active bal-icon g,.bal-footer__inner__wrapper__header-container__language:active bal-icon path,.bal-footer__inner__wrapper__header-container__language:active bal-icon circle{fill:var(--bal-footer-language-background-active)}.bal-footer__inner__wrapper__header-container__language:active .input{color:var(--bal-footer-language-color-active)}.bal-footer__inner__wrapper__header-container__language__wrapper{width:80px}.bal-footer__inner__wrapper__header-container__language__wrapper bal-input-group{background:var(--bal-color-transparent);border:none}.bal-footer__inner__wrapper__header-container__language__wrapper bal-input-group:hover{background:var(--bal-color-transparent) !important}.bal-footer__inner__wrapper__header-container__language__wrapper bal-input-group bal-icon{min-width:12px !important}.bal-footer__inner__wrapper__header-container__logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.bal-footer__inner__wrapper__links-container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width: 769px),print{.bal-footer__inner__wrapper__links-container{-ms-flex-direction:column;flex-direction:column}}@media screen and (min-width: 1024px){.bal-footer__inner__wrapper__links-container{-ms-flex-direction:row;flex-direction:row}}.bal-footer__inner__wrapper__links-container__legal-links{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--bal-space-desktop-large)}.bal-footer__inner__wrapper__links-container__legal-links a{font-size:var(--bal-size-small) !important}@media screen and (max-width: 768px){.bal-footer__inner__wrapper__links-container__legal-links{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;gap:var(--bal-space-normal)}}.bal-footer__inner__wrapper__links-container__social-media-links{-ms-flex-align:center;align-items:center;gap:var(--bal-space-desktop-large);padding:var(--bal-space-normal) var(--bal-space-normal) var(--bal-space-normal) var(--bal-space-none)}@media screen and (min-width: 769px)and (max-width: 1023px){.bal-footer__inner__wrapper__links-container__social-media-links{padding-bottom:var(--bal-space-large)}}@media screen and (max-width: 768px){.bal-footer__inner__wrapper__links-container__social-media-links{padding-bottom:var(--bal-space-large);-ms-flex-pack:center;justify-content:center;width:100%;padding:var(--bal-space-normal) var(--bal-space-none) var(--bal-space-normal) var(--bal-space-none)}}";

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
const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.links = [];
    this.socialMediaLinks = [];
    this.language = initialize.defaultConfig.language;
    this.region = initialize.defaultConfig.region;
    this.allowedLanguages = initialize.defaultConfig.allowedLanguages;
    this.hideLinks = false;
    this.showSocialMedia = false;
    this.hideLanguageSelection = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.updateFooterLinks();
    this.updateSocialMediaLinks();
  }
  async configChanged(state) {
    if (this.language !== state.language || this.region !== state.region) {
      this.language = state.language;
      this.region = state.region;
      this.allowedLanguages = state.allowedLanguages;
      this.updateFooterLinks();
      this.updateSocialMediaLinks();
    }
  }
  changeLanguage(language) {
    index$1.updateBalLanguage(language);
  }
  updateFooterLinks() {
    if (!this.hideLinks && (this.region === 'CH' || this.region === 'DE')) {
      const region = this.region;
      helpers.rIC(() => {
        index_esm.loadFooterLinks(new index_esm.Language(this.language), region).then(links => (this.links = links));
      });
    }
  }
  updateSocialMediaLinks() {
    if (this.showSocialMedia && (this.region === 'CH' || this.region === 'DE')) {
      const region = this.region;
      helpers.rIC(() => {
        index_esm.loadSocialMediaLinks(new index_esm.Language(this.language), region).then(links => (this.socialMediaLinks = links));
      });
    }
  }
  render() {
    const block = bem.BEM.block('footer');
    const elInner = block.element('inner');
    const elInnerWrapper = elInner.element('wrapper');
    const elContainer = elInnerWrapper.element('container');
    const elLinksContainer = elInnerWrapper.element('links-container');
    const elHeaderContainer = elInnerWrapper.element('header-container');
    const elLogo = elHeaderContainer.element('logo');
    const elLanguage = elHeaderContainer.element('language');
    const elWrapper = elLanguage.element('wrapper');
    const elIcon = elLanguage.element('icon');
    const elLegalLinks = elLinksContainer.element('legal-links');
    const elSocialMediaLinks = elLinksContainer.element('social-media-links');
    return (index.h(index.Host, { class: Object.assign({}, block.class()) }, index.h("footer", { class: Object.assign({}, elInner.class()) }, index.h("div", { class: Object.assign({}, elInnerWrapper.class()) }, index.h("div", { class: Object.assign(Object.assign({ container: true }, elContainer.class()), elHeaderContainer.class()) }, index.h("div", { class: Object.assign({}, elLogo.class()) }, index.h("bal-logo", { color: "white" })), index.h("div", { class: Object.assign({}, elLanguage.class()), style: {
        display: this.hideLanguageSelection || this.allowedLanguages.length <= 1 ? 'none' : 'flex',
      } }, index.h("div", { class: Object.assign({}, elWrapper.class()) }, index.h("bal-input-group", null, index.h("bal-icon", { class: Object.assign({}, elIcon.class()), name: "web", color: "white" }), index.h("bal-select", { value: this.language, onBalChange: event => this.changeLanguage(event.detail), "data-testid": "bal-footer-language" }, this.allowedLanguages.map(language => (index.h("bal-select-option", { label: language.toLocaleUpperCase(), value: language }, language.toLocaleUpperCase())))))))), index.h("slot", null), index.h("div", { class: Object.assign(Object.assign({ container: true }, elContainer.class()), elLinksContainer.class()) }, index.h("div", { class: Object.assign({}, elSocialMediaLinks.class()), style: {
        display: !this.showSocialMedia ? 'none' : 'flex',
      } }, this.socialMediaLinks.map(link => (index.h("a", { href: link.link, target: "_blank", class: {
        'is-link': true,
        'is-inverted': true,
      } }, index.h("bal-icon", { name: link.label.toLowerCase() }))))), index.h("div", { class: Object.assign({}, elLegalLinks.class()), style: { display: this.hideLinks ? 'none' : 'flex' } }, this.links.map(link => (index.h("a", { href: link.link, target: "_blank", class: {
        'is-link': true,
        'is-light': true,
      } }, link.label)))))))));
  }
};
__decorate([
  log.Logger('bal-footer')
], Footer.prototype, "createLogger", null);
__decorate([
  config_decorator.ListenToConfig()
], Footer.prototype, "configChanged", null);
Footer.style = {
  css: balFooterCss
};

exports.bal_footer = Footer;
