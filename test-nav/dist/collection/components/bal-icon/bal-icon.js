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
import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';
import { BEM } from '../../utils/bem';
import { ListenToConfig, defaultConfig } from '../../utils/config';
export class Icon {
  constructor() {
    this.svgContent = (iconName) => {
      const hasIcons = Object.keys(this.icons).length > 0;
      if (hasIcons && iconName && iconName.length > 0) {
        if (iconName.startsWith('alert')) {
          iconName = 'alert-triangle';
        }
        if (iconName.startsWith('info')) {
          iconName = 'info-circle';
        }
        const icon = this.icons[`balIcon${upperFirst(camelCase(iconName))}`];
        if (icon) {
          return icon;
        }
      }
      return this.svg || '';
    };
    this.icons = defaultConfig.icons;
    this.name = '';
    this.svg = '';
    this.size = '';
    this.color = '';
    this.inline = false;
    this.inverted = false;
    this.turn = false;
    this.shadow = false;
    this.disabled = undefined;
    this.invalid = undefined;
    this.hovered = false;
    this.pressed = false;
  }
  async configChanged(state) {
    this.icons = state.icons;
  }
  parseColor() {
    if (!!this.disabled) {
      return 'grey';
    }
    if (!!this.invalid) {
      if (this.pressed) {
        return 'danger-darker';
      }
      else if (this.hovered) {
        return 'danger-dark';
      }
      else {
        return 'danger';
      }
    }
    if (this.color !== 'auto') {
      if (this.pressed) {
        return 'primary-dark';
      }
      else if (this.hovered) {
        return 'light-blue';
      }
    }
    return [
      'auto',
      'white',
      'blue',
      'grey',
      'danger',
      'warning',
      'success',
      'grey-light',
      'primary',
      'primary-light',
    ].includes(this.color)
      ? this.color
      : 'primary';
  }
  render() {
    const color = this.parseColor();
    const block = BEM.block('icon');
    const svgContent = this.svgContent(this.name);
    return (h(Host, { "aria-hidden": "true", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-inverted').class(this.inverted)), block.modifier('is-inline').class(this.inline)), block.modifier('shadow').class(this.shadow)), block.modifier(`is-${this.size}`).class(!!this.size)), block.modifier(`is-${color}`).class()) }, h("div", { class: Object.assign(Object.assign(Object.assign({}, block.element('inner').class()), block.element('inner').modifier(`turn-${this.name}`).class(this.turn)), block.modifier(`is-${this.size}`).class(!!this.size)), innerHTML: svgContent })));
  }
  static get is() { return "bal-icon"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-icon.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-icon.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Name of the baloise icon."
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "''"
      },
      "svg": {
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
          "text": "Svg content."
        },
        "attribute": "svg",
        "reflect": false,
        "defaultValue": "''"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalIconSize",
          "resolved": "\"\" | \"large\" | \"medium\" | \"small\" | \"x-small\" | \"xsmall\"",
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
          "text": "Defines the size of the icon."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalIconColor",
          "resolved": "string",
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
          "text": "The theme type of the button."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "inline": {
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
          "text": "If `true` the icon has display inline style"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      },
      "inverted": {
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
          "text": "If `true` the icon is inverted"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "turn": {
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
          "text": "If `true` the icon is rotated 180deg"
        },
        "attribute": "turn",
        "reflect": false,
        "defaultValue": "false"
      },
      "shadow": {
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
          "text": "If `true` adds a box shadow to improve readability on image background"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a invalid red style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "hovered": {
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
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "hovered",
        "reflect": false,
        "defaultValue": "false"
      },
      "pressed": {
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
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "pressed",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "icons": {}
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
  ListenToConfig()
], Icon.prototype, "configChanged", null);
