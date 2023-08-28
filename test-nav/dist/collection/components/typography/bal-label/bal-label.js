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
import { BEM } from '../../../utils/bem';
import { defaultConfig, ListenToConfig, } from '../../../utils/config';
import { Logger } from '../../../utils/log';
import { i18nBalLabel } from './bal-label.i18n';
import { defaultBalAriaForm } from '../../../utils/form';
export class BalLabel {
  constructor() {
    this.inputId = `bal-lbl-${labelIds++}`;
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.ariaForm = defaultBalAriaForm;
    this.htmlFor = undefined;
    this.required = true;
    this.noWrap = false;
    this.multiline = false;
    this.valid = undefined;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.size = '';
    this.weight = 'bold';
    this.hovered = false;
    this.pressed = false;
  }
  createLogger(log) {
    this.log = log;
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    const block = BEM.block('label');
    const suffix = this.required === false ? i18nBalLabel[this.language].optional || '' : '';
    const disabled = !!this.disabled || !!this.readonly;
    const danger = !!this.invalid;
    const success = !!this.valid;
    const regular = this.weight === 'regular';
    const small = this.size === 'small';
    const large = this.size === 'large';
    const id = this.ariaForm.labelId || this.inputId;
    const htmlFor = this.htmlFor || this.ariaForm.controlId;
    return (h(Host, { class: Object.assign({}, block.class()) }, h("label", { id: id, htmlFor: htmlFor, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier('multiline').class(this.multiline)), block.element('native').modifier('no-wrap').class(this.noWrap)), block.element('native').modifier('disabled').class(disabled)), block.element('native').modifier('danger').class(danger)), block.element('native').modifier('success').class(success)), block.element('native').modifier('regular').class(regular)), block.element('native').modifier('small').class(small)), block.element('native').modifier('large').class(large)), block.element('native').modifier('hovered').class(this.hovered)), block.element('native').modifier('pressed').class(this.pressed)) }, h("slot", null), suffix)));
  }
  static get is() { return "bal-label"; }
  static get originalStyleUrls() {
    return {
      "css": ["./bal-label.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-label.css"]
    };
  }
  static get properties() {
    return {
      "htmlFor": {
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
          "text": "The value of the for attribute must be a single id for a labeled\nform-related element in the same document as the <label> element.\nSo, any given label element can be associated with only one form control."
        },
        "attribute": "html-for",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "required": {
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
          "text": "If `true` the form control needs to be filled. If it is set to\n`false` an optional label is added to the label.."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "true"
      },
      "noWrap": {
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
          "text": "When true, the text will be truncated with a text overflow ellipsis instead of wrapping.\nPlease note that text overflow can only occur in block or inline-block level elements,\nas these elements require a width to overflow."
        },
        "attribute": "no-wrap",
        "reflect": false,
        "defaultValue": "false"
      },
      "multiline": {
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
          "text": "When true, the text will is able to break on multiple lines."
        },
        "attribute": "multiline",
        "reflect": false,
        "defaultValue": "false"
      },
      "valid": {
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
          "text": "If `true` the component gets a valid green style."
        },
        "attribute": "valid",
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
      "readonly": {
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
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalLabelSize",
          "resolved": "\"\" | \"large\" | \"small\"",
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
          "text": "Defines the size of the font. Default is like a heading 5 and small is used\nwith the form fields."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalLabelWeight",
          "resolved": "\"bold\" | \"regular\"",
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
              "text": "Defines the font weight of the label."
            }],
          "text": ""
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'bold'"
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
      "language": {},
      "region": {},
      "ariaForm": {}
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
              "path": "../../../utils/config"
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
      },
      "setAriaForm": {
        "complexType": {
          "signature": "(ariaForm: BalAriaForm) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalAriaForm": {
              "location": "import",
              "path": "../../../utils/form"
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
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-label')
], BalLabel.prototype, "createLogger", null);
__decorate([
  ListenToConfig()
], BalLabel.prototype, "configChanged", null);
let labelIds = 0;
