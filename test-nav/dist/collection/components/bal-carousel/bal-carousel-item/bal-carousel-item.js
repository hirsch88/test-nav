import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { inheritAttributes } from '../../../utils/attributes';
export class CarouselItem {
  constructor() {
    this.imageInheritAttributes = {};
    this.onClick = (ev) => {
      if (this.href !== undefined) {
        this.balNavigate.emit(ev);
      }
    };
    this.onFocus = () => {
      this.balFocus.emit();
    };
    this.onBlur = () => {
      this.balBlur.emit();
    };
    this.src = undefined;
    this.label = '';
    this.elementType = 'button';
    this.name = '';
    this.value = '';
    this.href = undefined;
    this.target = '_self';
    this.rel = undefined;
    this.download = undefined;
    this.color = undefined;
  }
  componentWillLoad() {
    this.imageInheritAttributes = inheritAttributes(this.el, ['alt']);
  }
  async getData() {
    return {
      clientWidth: this.el.clientWidth,
      label: this.label,
    };
  }
  render() {
    const block = BEM.block('carousel');
    const itemEl = block.element('item');
    const isProduct = !!this.color && !!this.label;
    if (!isProduct) {
      return (h(Host, { class: Object.assign({}, itemEl.class()) }, this.src !== undefined ? (h("img", Object.assign({ draggable: false, onDragStart: () => false, src: this.src }, this.imageInheritAttributes))) : (''), h("slot", null)));
    }
    const button = itemEl.element('button');
    const image = button.element('image');
    const label = button.element('label');
    const { elementType, download, href, rel, target, name, value } = this;
    const TagType = this.href === undefined ? 'button' : 'a';
    const attrs = TagType === 'button'
      ? { type: elementType, name, value }
      : {
        download,
        href,
        rel,
        target,
      };
    return (h(Host, { class: Object.assign({}, itemEl.class()) }, h(TagType, Object.assign({}, attrs, { class: Object.assign(Object.assign({}, button.class()), button.modifier(`color-${this.color}`).class()), part: "native", onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick }), this.src !== undefined ? (h("img", Object.assign({ class: Object.assign({}, image.class()), loading: "lazy", draggable: false, onDragStart: () => false, src: this.src }, this.imageInheritAttributes))) : (''), this.label !== undefined ? (h("span", { class: Object.assign(Object.assign({}, label.class()), { 'has-text-weight-bold': true }) }, this.label)) : (''), h("slot", null))));
  }
  static get is() { return "bal-carousel-item"; }
  static get properties() {
    return {
      "src": {
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
          "text": "Src path to the image"
        },
        "attribute": "src",
        "reflect": true
      },
      "label": {
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
          "text": "Label of the slide which will be used for pagination tabs"
        },
        "attribute": "label",
        "reflect": true,
        "defaultValue": "''"
      },
      "elementType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonElementType",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
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
          "text": "The type of button."
        },
        "attribute": "element-type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "name": {
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
          "text": "The name of the button, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "''"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the button, which is submitted with the form data."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
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
          "text": "Specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
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
      "rel": {
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
          "text": "Specifies the relationship of the target object to the link object.\nThe value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
        },
        "attribute": "rel",
        "reflect": false
      },
      "download": {
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
          "text": "This attribute instructs browsers to download a URL instead of navigating to\nit, so the user will be prompted to save it as a local file. If the attribute\nhas a value, it is used as the pre-filled file name in the Save prompt\n(the user can still change the file name if they want)."
        },
        "attribute": "download",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCarouselItemColor",
          "resolved": "\"green\" | \"purple\" | \"red\" | \"white\" | \"yellow\" | undefined",
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
          "text": "Color of the background"
        },
        "attribute": "color",
        "reflect": false
      }
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
          "text": "Emitted when the link element has clicked."
        },
        "complexType": {
          "original": "BalEvents.BalCarouselItemNavigateDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFocus",
        "name": "balFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the button has focus."
        },
        "complexType": {
          "original": "BalEvents.BalCarouselItemFocusDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balBlur",
        "name": "balBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the button loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalCarouselItemBlurDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "getData": {
        "complexType": {
          "signature": "() => Promise<BalCarouselItemData>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalCarouselItemData": {
              "location": "import",
              "path": "../bal-carousel.type"
            }
          },
          "return": "Promise<BalCarouselItemData>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
