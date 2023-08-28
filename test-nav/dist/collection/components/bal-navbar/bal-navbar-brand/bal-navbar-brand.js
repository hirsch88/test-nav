import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { BalScrollHandler } from '../../../utils/scroll';
import { balBrowser } from '../../../utils/browser';
export class NavbarBrand {
  constructor() {
    this.bodyScrollHandler = new BalScrollHandler();
    this.isMenuActive = false;
    this.href = '';
    this.target = '_self';
    this.simple = false;
    this.logo = undefined;
    this.animated = true;
    this.interface = 'app';
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  componentWillLoad() {
    if (balBrowser.hasWindow && window.matchMedia) {
      window.matchMedia('(min-width: 960px)').addEventListener('change', this.resetIsMenuActive.bind(this));
    }
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  async resetIsMenuActive(ev) {
    if (ev.matches && !this.simple) {
      this.toggle(false);
    }
  }
  async toggle(isMenuActive) {
    this.isMenuActive = isMenuActive;
    this.balWillAnimate.emit(this.isMenuActive);
    if (this.isMenuActive) {
      this.bodyScrollHandler.disable();
    }
    else {
      this.bodyScrollHandler.enable();
    }
    const navbar = this.el.closest('bal-navbar');
    if (navbar) {
      const navbarMenuElement = navbar.querySelector('bal-navbar-menu');
      if (navbarMenuElement && !this.simple) {
        await navbarMenuElement.toggle(this.isMenuActive);
      }
    }
    this.balDidAnimate.emit(this.isMenuActive);
  }
  async onClick() {
    this.toggle(!this.isMenuActive);
  }
  render() {
    const navbarBrandEl = BEM.block('navbar').element('brand');
    const logoTemplate = this.logo ? (h("img", { loading: "lazy", class: Object.assign({}, navbarBrandEl.element('logo').class()), src: this.logo, alt: "" })) : (h("bal-logo", { animated: this.animated, color: 'white' }));
    return (h(Host, { class: Object.assign(Object.assign({}, navbarBrandEl.class()), navbarBrandEl.modifier(`context-${this.interface}`).class()) }, this.href ? (h("a", { href: this.href, target: this.target, onClick: (ev) => this.balNavigate.emit(ev) }, logoTemplate)) : (logoTemplate), h("span", { class: Object.assign({}, navbarBrandEl.element('title').class()) }, h("slot", null)), h("bal-button", { class: Object.assign(Object.assign({}, navbarBrandEl.element('burger').class()), navbarBrandEl
        .element('burger')
        .modifier('hidden')
        .class(this.interface === 'simple')), color: "light", inverted: true, square: true, icon: this.isMenuActive ? 'close' : 'menu-bars', onClick: () => this.onClick() })));
  }
  static get is() { return "bal-navbar-brand"; }
  static get properties() {
    return {
      "href": {
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
          "text": "Link of the logo / title."
        },
        "attribute": "href",
        "reflect": false,
        "defaultValue": "''"
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonTarget",
          "resolved": "\" _parent\" | \"_blank\" | \"_self\" | \"_top\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies where to display the linked URL.\nOnly applies when an `href` is provided."
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "simple": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Use interface on bal-navbar instead.\nIf `true` the navbar does not have a mobil version. Only shows logo and an app title."
            }],
          "text": ""
        },
        "attribute": "simple",
        "reflect": false,
        "defaultValue": "false"
      },
      "logo": {
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
          "text": "Src to display a logo -> replaces the default Baloise Logo"
        },
        "attribute": "logo",
        "reflect": false
      },
      "animated": {
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
          "text": "Defines if the logo animation should be active"
        },
        "attribute": "animated",
        "reflect": false,
        "defaultValue": "true"
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavbarInterface",
          "resolved": "\"app\" | \"simple\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "Defines the type of navbar. App is used for almost every web applications\nlike the portal app. For our sales funnel we recommend to use the simple navbar.\nMeta and main are used for the website."
            }],
          "text": ""
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'app'"
      }
    };
  }
  static get states() {
    return {
      "isMenuActive": {}
    };
  }
  static get events() {
    return [{
        "method": "balNavigate",
        "name": "balNavigate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the link element has clicked"
        },
        "complexType": {
          "original": "BalEvents.BalNavbarBrandNavigationChangeDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balWillAnimate",
        "name": "balWillAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the animation starts"
        },
        "complexType": {
          "original": "BalEvents.BalNavbarMenuWillAnimateDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balDidAnimate",
        "name": "balDidAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the animation has finished"
        },
        "complexType": {
          "original": "BalEvents.BalNavbarMenuDidAnimateDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
}
