import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { inheritAttributes } from '../../../utils/attributes';
export class StageImage {
  constructor() {
    this.imageInheritAttributes = {};
    this.srcSet = undefined;
    this.fallback = undefined;
  }
  componentWillLoad() {
    this.imageInheritAttributes = inheritAttributes(this.el, ['alt']);
  }
  render() {
    const block = BEM.block('stage-image');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("img", Object.assign({ loading: "lazy", src: this.fallback ? this.fallback : this.srcSet.split(',')[0], srcset: this.srcSet, sizes: "100vw" }, this.imageInheritAttributes))));
  }
  static get is() { return "bal-stage-image"; }
  static get properties() {
    return {
      "srcSet": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "set of images to be used as background image"
        },
        "attribute": "src-set",
        "reflect": false
      },
      "fallback": {
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
          "text": "optional fallback image in case the srcSet fails"
        },
        "attribute": "fallback",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "el"; }
}
