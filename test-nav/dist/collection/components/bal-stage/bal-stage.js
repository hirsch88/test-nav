import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class Stage {
  constructor() {
    this.getContainerWidth = () => {
      switch (this.containerSize) {
        case 'is-detail-page':
        case 'detail-page':
          return '680px';
        case 'is-compact':
        case 'compact':
          return '832px';
        case 'is-blog-page':
        case 'blog-page':
          return '920px';
        case 'is-fluid':
        case 'fluid':
          return '100vw';
        case 'is-wide':
        case 'wide':
        default:
          return '1400px';
      }
    };
    this.containerSize = '';
    this.size = '';
    this.color = 'purple';
    this.shape = false;
    this.shapeVariation = undefined;
    this.shapeRotation = undefined;
  }
  get containerClass() {
    if (this.containerSize.includes('wide')) {
      return '';
    }
    if (this.containerSize.startsWith('is-')) {
      return this.containerSize;
    }
    return `is-${this.containerSize}`;
  }
  render() {
    const block = BEM.block('stage');
    const element = BEM.block('stage-content');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`is-${this.size === '' ? 'medium' : this.size}`).class()), block.modifier(`is-${this.color}`).class(!!this.color)), block.modifier('has-shape').class(!!this.shape)), style: { '--bal-stage-container-width': this.getContainerWidth() } }, h("section", { class: Object.assign(Object.assign({}, element.class()), { container: true, [`${this.containerClass}`]: this.containerSize !== '' }) }, h("slot", null), this.shape && (h("div", { class: { container: true, [`${this.containerClass}`]: this.containerSize !== '' } }, h("bal-shape", { color: this.color, variation: this.shapeVariation, rotation: this.shapeRotation }))))));
  }
  static get is() { return "bal-stage"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-stage.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-stage.css"]
    };
  }
  static get properties() {
    return {
      "containerSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStageContainer",
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
          "text": "Defines content width of the stage"
        },
        "attribute": "container-size",
        "reflect": false,
        "defaultValue": "''"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStageSize",
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
          "text": "Defines size of the stage"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalStageColor",
          "resolved": "\"blue\" | \"green\" | \"purple\" | \"red\" | \"yellow\"",
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
          "text": "Defines the background color of the stage section"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'purple'"
      },
      "shape": {
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
          "text": "If true the Baloise Shape is set"
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "false"
      },
      "shapeVariation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalShapeVariation",
          "resolved": "\"1\" | \"2\" | \"3\" | undefined",
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
          "text": "Shape Variation"
        },
        "attribute": "shape-variation",
        "reflect": false
      },
      "shapeRotation": {
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
          "text": "Shape Rotation"
        },
        "attribute": "shape-rotation",
        "reflect": false
      }
    };
  }
}
