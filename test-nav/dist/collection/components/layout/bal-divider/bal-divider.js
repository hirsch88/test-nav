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
export class BalDivider {
  constructor() {
    this.layout = 'horizontal';
    this.space = 'none';
    this.color = 'grey';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('divider');
    const layout = !!this.layout;
    const space = !!this.space;
    const color = !!this.color;
    return (h(Host, { role: "separator", class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`layout-${this.layout}`).class(layout)), block.modifier(`space-${this.space}`).class(space)), block.modifier(`color-${this.color}`).class(color)) }, h("slot", null)));
  }
  static get is() { return "bal-divider"; }
  static get originalStyleUrls() {
    return {
      "css": ["./bal-divider.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-divider.css"]
    };
  }
  static get properties() {
    return {
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalDividerLayout",
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
        "defaultValue": "'horizontal'"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalDividerSpace",
          "resolved": "\"\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\" | \"xxx-large\"",
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
        "defaultValue": "'none'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalDividerColor",
          "resolved": "\"danger\" | \"danger-dark\" | \"danger-darker\" | \"grey\" | \"grey-dark\" | \"grey-light\" | \"light-blue\" | \"primary\" | \"primary-dark\" | \"primary-light\" | \"success\" | \"warning\" | \"white\"",
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
          "text": "Defines the color of the separator line."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'grey'"
      }
    };
  }
}
__decorate([
  Logger('bal-divider')
], BalDivider.prototype, "createLogger", null);
