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
import { Logger } from '../../../utils/log';
export class BalContent {
  constructor() {
    this.layout = 'vertical';
    this.align = 'start';
    this.space = 'xx-small';
    this.direction = '';
    this.alignment = '';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('content');
    const direction = !!this.direction;
    const layout = !!this.layout;
    const alignment = !!this.alignment;
    const align = !!this.align;
    const space = !!this.space;
    let layoutValue = this.layout;
    if (direction) {
      layoutValue = this.direction === 'row' ? 'horizontal' : 'vertical';
    }
    let alignValue = this.align.split(' ').join('-');
    if (alignment) {
      alignValue = this.alignment.split(' ').join('-');
    }
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`layout-${layoutValue}`).class(layout || direction)), block.modifier(`align-${alignValue}`).class(align || alignment)), block.modifier(`space-${this.space}`).class(space)) }, h("slot", null)));
  }
  static get is() { return "bal-content"; }
  static get originalStyleUrls() {
    return {
      "css": ["./bal-content.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-content.css"]
    };
  }
  static get properties() {
    return {
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalContentLayout",
          "resolved": "\"\" | \"horizontal\" | \"vertical\"",
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
          "text": "Defines the position of the child elements if they\nare showed verticaly or horizontally. Default is verticaly."
        },
        "attribute": "layout",
        "reflect": false,
        "defaultValue": "'vertical'"
      },
      "align": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalContentAlignment",
          "resolved": "\"\" | \"center\" | \"end\" | \"start\"",
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
          "text": "Defines the text positioning like center, end or\ndefault to start."
        },
        "attribute": "align",
        "reflect": false,
        "defaultValue": "'start'"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalContentSpace",
          "resolved": "\"\" | \"normal\" | \"small\" | \"x-small\" | \"xx-small\"",
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
          "text": "Defines the space between the child elements. Default is xx-small."
        },
        "attribute": "space",
        "reflect": false,
        "defaultValue": "'xx-small'"
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackDirection",
          "resolved": "\"\" | \"column\" | \"row\"",
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
              "text": "Please use layout instead."
            }],
          "text": ""
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "''"
      },
      "alignment": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackAlignment",
          "resolved": "\"\" | \"bottom center\" | \"bottom end\" | \"bottom start\" | \"center\" | \"end\" | \"start\" | \"top center\" | \"top end\" | \"top start\"",
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
              "text": "Please use align instead."
            }],
          "text": ""
        },
        "attribute": "alignment",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
__decorate([
  Logger('bal-content')
], BalContent.prototype, "createLogger", null);
