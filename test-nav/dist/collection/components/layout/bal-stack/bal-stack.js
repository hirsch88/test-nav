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
export class BalStack {
  constructor() {
    this.layout = 'horizontal';
    this.align = '';
    this.space = 'normal';
    this.spaceRow = undefined;
    this.spaceColumn = undefined;
    this.px = '';
    this.py = '';
    this.useWrap = false;
    this.fitContent = false;
    this.direction = '';
    this.alignment = '';
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('stack');
    const direction = !!this.direction;
    const layout = !!this.layout;
    const align = !!this.align;
    const alignment = !!this.alignment;
    const space = !!this.space;
    const spaceRow = !!this.spaceRow;
    const spaceColumn = !!this.spaceColumn;
    const useWrap = !!this.useWrap;
    const fitContent = !!this.fitContent;
    const px = !!this.px;
    const py = !!this.py;
    let layoutValue = this.layout;
    if (direction) {
      layoutValue = this.direction === 'row' ? 'horizontal' : 'vertical';
    }
    let alignValue = this.align.split(' ').join('-');
    if (alignment) {
      alignValue = this.alignment.split(' ').join('-');
    }
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`use-wrap`).class(useWrap)), block.modifier(`layout-${layoutValue}`).class(layout || direction)), block.modifier(`align-${alignValue}`).class(align || alignment)), block.modifier(`space-${this.space}`).class(space)), block.modifier(`space-row-${this.spaceRow}`).class(spaceRow)), block.modifier(`space-row-${this.spaceColumn}`).class(spaceColumn)), block.modifier(`px-${this.px}`).class(px)), block.modifier(`py-${this.py}`).class(py)), block.modifier(`fit-content`).class(fitContent)) }, h("slot", null)));
  }
  static get is() { return "bal-stack"; }
  static get originalStyleUrls() {
    return {
      "css": ["./bal-stack.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-stack.css"]
    };
  }
  static get properties() {
    return {
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackLayout",
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
          "text": "Defines the position of the child elements if they\nare showed verticaly or horizontally. Default is horizontally."
        },
        "attribute": "layout",
        "reflect": false,
        "defaultValue": "'horizontal'"
      },
      "align": {
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
          "tags": [],
          "text": "Defines the text positioning like center, right or\ndefault to start."
        },
        "attribute": "align",
        "reflect": false,
        "defaultValue": "''"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackSpace",
          "resolved": "\"\" | \"auto\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\"",
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
          "text": "Defines the space between the child elements. Default is normal."
        },
        "attribute": "space",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "spaceRow": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackSpace",
          "resolved": "\"\" | \"auto\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\" | undefined",
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
          "text": "Defines the space between the child elements. Default is normal."
        },
        "attribute": "space-row",
        "reflect": false
      },
      "spaceColumn": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackSpace",
          "resolved": "\"\" | \"auto\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\" | undefined",
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
          "text": "Defines the space between the child elements. Default is normal."
        },
        "attribute": "space-column",
        "reflect": false
      },
      "px": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackPadding",
          "resolved": "\"\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\"",
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
          "text": "Defines the horizontal padding left and right of the stack element."
        },
        "attribute": "px",
        "reflect": false,
        "defaultValue": "''"
      },
      "py": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStackPadding",
          "resolved": "\"\" | \"large\" | \"medium\" | \"none\" | \"normal\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\"",
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
          "text": "Defines the vertical padding top and bottom of the stack element."
        },
        "attribute": "py",
        "reflect": false,
        "defaultValue": "''"
      },
      "useWrap": {
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
          "text": "Defines if the child elements will wrap to the next line if there\nis not enough space left"
        },
        "attribute": "use-wrap",
        "reflect": false,
        "defaultValue": "false"
      },
      "fitContent": {
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
          "text": "Defines the width of the stack to be exactly the with of the content."
        },
        "attribute": "fit-content",
        "reflect": false,
        "defaultValue": "false"
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
  Logger('bal-stack')
], BalStack.prototype, "createLogger", null);
