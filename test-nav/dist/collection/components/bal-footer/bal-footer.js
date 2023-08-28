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
import { Language, loadFooterLinks, loadSocialMediaLinks } from '@baloise/web-app-utils';
import { Host, h } from '@stencil/core';
import { defaultConfig, ListenToConfig, updateBalLanguage, } from '../../utils/config';
import { BEM } from '../../utils/bem';
import { Logger } from '../../utils/log';
import { rIC } from '../../utils/helpers';
export class Footer {
  constructor() {
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
  static get is() { return "bal-footer"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-footer.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-footer.css"]
    };
  }
  static get properties() {
    return {
      "hideLinks": {
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
          "text": "If `true` the legal Baloise links will be hidden."
        },
        "attribute": "hide-links",
        "reflect": false,
        "defaultValue": "false"
      },
      "showSocialMedia": {
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
          "text": "If `true` the social media links will be shown."
        },
        "attribute": "show-social-media",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideLanguageSelection": {
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
          "text": "If `true` the language selection will be hidden."
        },
        "attribute": "hide-language-selection",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "links": {},
      "socialMediaLinks": {},
      "language": {},
      "region": {},
      "allowedLanguages": {}
    };
  }
  static get methods() {
    return {
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../utils/config"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      }
    };
  }
}
__decorate([
  Logger('bal-footer')
], Footer.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], Footer.prototype, "configChanged", null);
