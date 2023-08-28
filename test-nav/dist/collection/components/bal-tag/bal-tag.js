import { h, Host } from '@stencil/core';
import { inheritAttributes } from '../../utils/attributes';
import { BEM } from '../../utils/bem';
export class Tag {
  constructor() {
    this.inheritedAttributes = {};
    this.inheritedAttributesClose = {};
    this.color = '';
    this.size = '';
    this.closable = false;
    this.invalid = false;
    this.disabled = false;
    this.position = 'left';
    this.light = false;
    this.transparent = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'title']);
    this.inheritedAttributesClose = inheritAttributes(this.el, ['tabindex']);
  }
  render() {
    const block = BEM.block('tag');
    const elLabel = block.element('label');
    const sizeClass = `is-${this.size}`;
    const hasSize = this.size !== undefined;
    const hasColor = this.color !== '';
    const colorClass = `is-${this.color}${this.light ? '-light' : ''}`;
    const disabledClass = 'is-disabled';
    const hasDisabled = this.disabled;
    const positionClass = `is-${this.position}`;
    const hasPosition = this.position !== undefined;
    return (h(Host, Object.assign({ "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(sizeClass).class(hasSize)), block.modifier(colorClass).class(hasColor)), block.modifier(disabledClass).class(hasDisabled)), block.modifier(positionClass).class(hasPosition)), block.modifier('is-invalid').class(this.invalid)) }, this.inheritedAttributes), h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, elLabel.class()), elLabel.modifier(sizeClass).class(hasSize)), elLabel.modifier(colorClass).class(hasColor)), elLabel.modifier(disabledClass).class(hasDisabled)), elLabel.modifier('is-invalid').class(this.invalid)), "data-testid": "bal-tag-label" }, h("slot", null)), h("bal-close", Object.assign({ class: Object.assign({}, block.element('close').class()), style: {
        display: this.closable && !this.disabled ? 'flex' : 'none',
      }, size: this.size === 'small' ? 'small' : '', inverted: (['blue', 'primary', 'info', 'success', 'warning', 'danger', 'red', 'purple', 'yellow', 'green'].includes(this.color) &&
        !this.light) ||
        this.invalid, "data-testid": "bal-tag-close", onClick: (ev) => this.balCloseClick.emit(ev) }, this.inheritedAttributesClose))));
  }
  static get is() { return "bal-tag"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-tag.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-tag.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTagColor",
          "resolved": "\"\" | \"blue\" | \"danger\" | \"green\" | \"grey\" | \"info\" | \"primary\" | \"purple\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
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
          "text": "The theme type of the tag."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTagSize",
          "resolved": "\"\" | \"large\" | \"medium\" | \"small\"",
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
          "text": "The size of the tag element"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "closable": {
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
          "text": "The theme type of the tag."
        },
        "attribute": "closable",
        "reflect": false,
        "defaultValue": "false"
      },
      "invalid": {
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
          "text": "Overwrites the default color to invalid style"
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTagPlacement",
          "resolved": "\"center\" | \"left\"",
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
          "text": "Choosing left or center the tag is aligned to that side in the bal-card."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "light": {
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
          "text": "If `true` a light version of the color is displayed"
        },
        "attribute": "light",
        "reflect": false,
        "defaultValue": "false"
      },
      "transparent": {
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
              "text": "Sets background color to transparent"
            }],
          "text": ""
        },
        "attribute": "transparent",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "balCloseClick",
        "name": "balCloseClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input got clicked."
        },
        "complexType": {
          "original": "BalEvents.BalTagCloseClickDetail",
          "resolved": "MouseEvent",
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
