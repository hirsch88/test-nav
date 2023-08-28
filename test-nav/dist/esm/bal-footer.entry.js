import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { l as loadFooterLinks, a as loadSocialMediaLinks, L as Language } from './index.esm-df73647b.js';
import { e as updateBalLanguage } from './index-8b8ed6bd.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { r as rIC } from './helpers-08b28736.js';
import { d as defaultConfig } from './initialize-92ae5fef.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import './index-82aff103.js';
import './_commonjsHelpers-ba3f0406.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';

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
    registerInstance(this, hostRef);
    this.links = [];
    this.socialMediaLinks = [];
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.allowedLanguages = defaultConfig.allowedLanguages;
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
    updateBalLanguage(language);
  }
  updateFooterLinks() {
    if (!this.hideLinks && (this.region === 'CH' || this.region === 'DE')) {
      const region = this.region;
      rIC(() => {
        loadFooterLinks(new Language(this.language), region).then(links => (this.links = links));
      });
    }
  }
  updateSocialMediaLinks() {
    if (this.showSocialMedia && (this.region === 'CH' || this.region === 'DE')) {
      const region = this.region;
      rIC(() => {
        loadSocialMediaLinks(new Language(this.language), region).then(links => (this.socialMediaLinks = links));
      });
    }
  }
  render() {
    const block = BEM.block('footer');
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
    return (h(Host, { class: Object.assign({}, block.class()) }, h("footer", { class: Object.assign({}, elInner.class()) }, h("div", { class: Object.assign({}, elInnerWrapper.class()) }, h("div", { class: Object.assign(Object.assign({ container: true }, elContainer.class()), elHeaderContainer.class()) }, h("div", { class: Object.assign({}, elLogo.class()) }, h("bal-logo", { color: "white" })), h("div", { class: Object.assign({}, elLanguage.class()), style: {
        display: this.hideLanguageSelection || this.allowedLanguages.length <= 1 ? 'none' : 'flex',
      } }, h("div", { class: Object.assign({}, elWrapper.class()) }, h("bal-input-group", null, h("bal-icon", { class: Object.assign({}, elIcon.class()), name: "web", color: "white" }), h("bal-select", { value: this.language, onBalChange: event => this.changeLanguage(event.detail), "data-testid": "bal-footer-language" }, this.allowedLanguages.map(language => (h("bal-select-option", { label: language.toLocaleUpperCase(), value: language }, language.toLocaleUpperCase())))))))), h("slot", null), h("div", { class: Object.assign(Object.assign({ container: true }, elContainer.class()), elLinksContainer.class()) }, h("div", { class: Object.assign({}, elSocialMediaLinks.class()), style: {
        display: !this.showSocialMedia ? 'none' : 'flex',
      } }, this.socialMediaLinks.map(link => (h("a", { href: link.link, target: "_blank", class: {
        'is-link': true,
        'is-inverted': true,
      } }, h("bal-icon", { name: link.label.toLowerCase() }))))), h("div", { class: Object.assign({}, elLegalLinks.class()), style: { display: this.hideLinks ? 'none' : 'flex' } }, this.links.map(link => (h("a", { href: link.link, target: "_blank", class: {
        'is-link': true,
        'is-light': true,
      } }, link.label)))))))));
  }
};
__decorate([
  Logger('bal-footer')
], Footer.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], Footer.prototype, "configChanged", null);
Footer.style = {
  css: balFooterCss
};

export { Footer as bal_footer };
