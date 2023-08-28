import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
import { BaloiseDesignToken } from '@baloise/design-system-tokens';
export class Shape {
  constructor() {
    this.getHex = () => {
      let color;
      switch (this.color) {
        case 'green':
          color = BaloiseDesignToken.balColorGreen6;
          break;
        case 'green-light':
          color = BaloiseDesignToken.balColorGreen3;
          break;
        case 'red':
          color = BaloiseDesignToken.balColorRed5;
          break;
        case 'red-light':
          color = BaloiseDesignToken.balColorRed3;
          break;
        case 'purple':
          color = BaloiseDesignToken.balColorPurple6;
          break;
        case 'purple-light':
          color = BaloiseDesignToken.balColorPurple3;
          break;
        case 'yellow':
          color = BaloiseDesignToken.balColorYellow5;
          break;
        case 'yellow-light':
          color = BaloiseDesignToken.balColorYellow3;
          break;
        default:
          color = BaloiseDesignToken.balColorGrey4;
      }
      return color;
    };
    this.variation = '1';
    this.color = 'green';
    this.rotation = '0';
  }
  render() {
    const block = BEM.block('shape');
    const shapes = [
      h("g", { id: "e8353d3b-35a2-4e20-9245-0eceed641ae5" }, h("g", { id: "af87362a-72b2-42cf-8efe-c9917dc1f7f6" }, h("path", { class: "st0", d: "M132,66v66H66V66H132z M132,0v66H66V0H132z M66,0v66H0V6.4C0,4.2,0,3,0.4,2.2c0.4-0.7,1-1.4,1.7-1.7\n            C3,0,4.2,0,6.4,0H66z M191.6,0c2.2,0,3.4,0,4.2,0.4c0.7,0.4,1.4,1,1.7,1.7c0.4,0.9,0.4,2,0.4,4.2V66h-66V0H191.6z M0,125.6V66h66\n            v66H6.4H0 M198,132v59.6c0,2.2,0,3.4-0.4,4.2c-0.4,0.7-1,1.4-1.7,1.7c-0.9,0.4-2,0.4-4.2,0.4H132v-66H198z" }))),
      h("g", { id: "b949d602-8478-437e-a171-ad3f26649cb4" }, h("g", { id: "ae3574e0-2065-4681-8937-4318b8656147" }, h("path", { class: "b9f37b2d-094d-4f18-b17c-7c5acf36f9a6", d: "M132,66v66H66V66ZM191.6,0c2.24,0,3.36,0,4.22.44a4,4,0,0,1,1.74,1.74c.44.86.44,2,.44,4.22V66H132V0ZM66,0V66H0V6.4C0,4.16,0,3,.44,2.18A4,4,0,0,1,2.18.44C3,0,4.16,0,6.4,0Zm0,132v66H6.4c-2.24,0-3.36,0-4.22-.44a4,4,0,0,1-1.74-1.74C0,195,0,193.84,0,191.6V132Zm66,0v66H66V132Zm66,0v59.6c0,2.24,0,3.36-.44,4.22a4,4,0,0,1-1.74,1.74c-.86.44-2,.44-4.22.44H132V132Zm0-66v66H132V66Z" }))),
      h("g", { id: "e827a936-cbcd-43b3-971a-aa8f8714fdff" }, h("g", { id: "e540dca8-23ca-45dc-b462-df9071c1317d" }, h("path", { class: "st0", d: "M132,66v66H66V66H132z M132,0v66H66V0H132z M66,0v66H0V6.4C0,4.2,0,3,0.4,2.2c0.4-0.7,1-1.4,1.7-1.7\n            C3,0,4.2,0,6.4,0H66z M66,132v66H6.4c-2.2,0-3.4,0-4.2-0.4c-0.7-0.4-1.4-1-1.7-1.7C0,195,0,193.8,0,191.6V132H66z M132,132v66H66\n            v-66H132z M198,132v59.6c0,2.2,0,3.4-0.4,4.2c-0.4,0.7-1,1.4-1.7,1.7c-0.9,0.4-2,0.4-4.2,0.4H132v-66H198z M198,66v66h-66V66" }))),
    ];
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`is-rotation-${this.rotation}`).class()) }, h("svg", { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 198 198", focusable: "false", "aria-hidden": "true", fill: this.getHex() }, shapes[parseInt(this.variation) - 1])));
  }
  static get is() { return "bal-shape"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-shape.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-shape.css"]
    };
  }
  static get properties() {
    return {
      "variation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalShapeVariation",
          "resolved": "\"1\" | \"2\" | \"3\"",
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
          "text": "The shape variation"
        },
        "attribute": "variation",
        "reflect": false,
        "defaultValue": "'1'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalShapeColor",
          "resolved": "\"green\" | \"green-light\" | \"purple\" | \"purple-light\" | \"red\" | \"red-light\" | \"yellow\" | \"yellow-light\"",
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
          "text": "The shape color"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'green'"
      },
      "rotation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalShapeRotation",
          "resolved": "\"0\" | \"180\" | \"270\" | \"90\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The shape rotation"
        },
        "attribute": "rotation",
        "reflect": false,
        "defaultValue": "'0'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
