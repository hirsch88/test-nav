import { h, Host } from '@stencil/core';
import { inheritAttributes } from '../../utils/attributes';
export class Button {
  constructor() {
    this.inheritAttributes = {};
    this.onFocus = () => {
      this.balFocus.emit();
    };
    this.onBlur = () => {
      this.balBlur.emit();
    };
    this.onClick = (ev) => {
      if (this.href !== undefined) {
        this.balNavigate.emit(ev);
      }
    };
    this.color = 'primary';
    this.elementType = 'button';
    this.disabled = false;
    this.size = '';
    this.href = undefined;
    this.target = '_self';
    this.rel = undefined;
    this.download = undefined;
    this.shadow = false;
    this.square = false;
    this.isActive = false;
    this.expanded = false;
    this.flat = false;
    this.outlined = false;
    this.inverted = false;
    this.loading = false;
    this.rounded = false;
    this.topRounded = undefined;
    this.bottomRounded = undefined;
    this.icon = '';
    this.iconTurn = false;
    this.iconRight = '';
    this.noWrap = false;
    this.name = '';
    this.value = '';
    this.aria = undefined;
  }
  listenOnClick(ev) {
    if (this.disabled && ev.target && ev.target === this.el) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
  componentWillLoad() {
    this.inheritAttributes = inheritAttributes(this.el, ['title', 'aria-label', 'aria-controls']);
  }
  componentDidRender() {
    this.balDidRender.emit();
  }
  componentWillRender() {
    this.inheritAttributes = inheritAttributes(this.el, ['title', 'aria-label', 'aria-hidden', 'tabindex']);
  }
  get isIconInverted() {
    return this.inverted;
  }
  get buttonCssClass() {
    return {
      'button': true,
      [`is-${this.color}`]: true,
      'is-flat': this.flat,
      'is-square': this.square,
      'is-small': this.size === 'small',
      'is-inverted': this.inverted,
      'is-active': this.isActive,
      'is-outlined': this.outlined,
      'is-fullwidth': this.expanded,
      'is-disabled': this.disabled,
      'is-loading': this.loading,
      'has-blur-shadow': this.shadow === true,
      'has-radius-rounded': this.rounded === true,
      'has-round-top-corners': this.topRounded === true,
      'has-round-bottom-corners': this.bottomRounded === true,
      'has-no-round-top-corners': this.topRounded === false,
      'has-no-round-bottom-corners': this.bottomRounded === false,
    };
  }
  get leftIconAttrs() {
    if (!this.icon || this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {};
  }
  get leftRightAttrs() {
    if (!this.iconRight || this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {};
  }
  get loadingAttrs() {
    if (!this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {
      style: { position: 'absolute' },
    };
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
  render() {
    var _a, _b, _c;
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
    const spinnerColor = () => {
      if (this.disabled) {
        return 'blue';
      }
      switch (this.color) {
        case 'primary':
        case 'success':
        case 'warning':
        case 'danger':
          return this.inverted ? 'blue' : 'white';
        default:
          return this.inverted ? 'white' : 'blue';
      }
    };
    const ariaAttributes = {
      'title': ((_a = this.aria) === null || _a === void 0 ? void 0 : _a.title) || this.inheritAttributes['title'],
      'aria-label': ((_b = this.aria) === null || _b === void 0 ? void 0 : _b.label) || this.inheritAttributes['aria-label'],
      'aria-controls': ((_c = this.aria) === null || _c === void 0 ? void 0 : _c.controls) || this.inheritAttributes['aria-controls'],
    };
    return (h(Host, { onClick: this.handleClick, class: {
        'bal-button': true,
        'control': true,
        'is-fullwidth': this.expanded,
        'is-disabled': this.disabled,
      } }, h(TagType, Object.assign({}, attrs, this.inheritAttributes, { type: this.elementType, class: this.buttonCssClass, part: "native", disabled: this.disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, "aria-disabled": this.disabled ? 'true' : null, "data-testid": "bal-button" }, ariaAttributes), h("bal-spinner", Object.assign({ color: spinnerColor(), small: true }, this.loadingAttrs, { deactivated: !this.loading })), h("bal-icon", Object.assign({}, this.leftIconAttrs, { class: "icon-left", name: this.icon, size: this.square ? this.size : 'small', turn: this.iconTurn, inverted: this.isIconInverted })), h("span", { class: {
        'button-label': true,
        'has-no-wrap': this.noWrap,
        'is-small': this.size === 'small',
      }, style: { opacity: this.loading ? '0' : '1' }, "data-testid": "bal-button-label" }, h("slot", null)), h("bal-icon", Object.assign({}, this.leftRightAttrs, { class: "icon-right", name: this.iconRight, size: 'small', turn: this.iconTurn, inverted: this.isIconInverted })))));
  }
  static get is() { return "bal-button"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-button.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-button.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonColor",
          "resolved": "\"danger\" | \"info\" | \"info-light\" | \"light\" | \"link\" | \"primary\" | \"primary-light\" | \"secondary\" | \"success\" | \"tertiary\" | \"tertiary-green\" | \"tertiary-purple\" | \"tertiary-red\" | \"tertiary-yellow\" | \"text\" | \"warning\"",
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
          "text": "The color to use from your application's color palette."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'primary'"
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
          "text": "If `true`, the user cannot interact with the button."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonSize",
          "resolved": "\"\" | \"small\"",
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
          "text": "Size of the button"
        },
        "attribute": "size",
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
      "square": {
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
          "text": "If `true` the width of the buttons is limited"
        },
        "attribute": "square",
        "reflect": false,
        "defaultValue": "false"
      },
      "isActive": {
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
          "text": "If `true` the button has a active theme"
        },
        "attribute": "is-active",
        "reflect": false,
        "defaultValue": "false"
      },
      "expanded": {
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
          "text": "If `true` the button has a full width"
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      },
      "flat": {
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
          "text": "If `true` the button has no padding and a reduced height"
        },
        "attribute": "flat",
        "reflect": false,
        "defaultValue": "false"
      },
      "outlined": {
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
          "text": "If `true` the button is outlined"
        },
        "attribute": "outlined",
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
          "text": "If `true` the button is inverted"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "loading": {
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
          "text": "If `true` the label is hidden and a loading spinner is shown instead."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "rounded": {
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
          "text": "If `true` the button is rounded."
        },
        "attribute": "rounded",
        "reflect": false,
        "defaultValue": "false"
      },
      "topRounded": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "undefined | boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the top corners get rounded"
        },
        "attribute": "top-rounded",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "bottomRounded": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "undefined | boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the bottom corners get rounded"
        },
        "attribute": "bottom-rounded",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "icon": {
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
          "text": "Name of the left button icon"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconTurn": {
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
          "text": "If `true` the icon turns"
        },
        "attribute": "icon-turn",
        "reflect": false,
        "defaultValue": "false"
      },
      "iconRight": {
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
          "text": "Name of the right button icon"
        },
        "attribute": "icon-right",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The label of the button will not break"
        },
        "attribute": "no-wrap",
        "reflect": false,
        "defaultValue": "false"
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
        "reflect": false,
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
        "reflect": false,
        "defaultValue": "''"
      },
      "aria": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonAria",
          "resolved": "undefined | { controls?: string | undefined; title?: string | undefined; label?: string | undefined; }",
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
          "text": "A11y attributes for the native button element."
        },
        "defaultValue": "undefined"
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
          "original": "BalEvents.BalButtonNavigateDetail",
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
          "original": "BalEvents.BalButtonFocusDetail",
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
          "original": "BalEvents.BalButtonBlurDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balDidRender",
        "name": "balDidRender",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the button has been  rendered."
        },
        "complexType": {
          "original": "BalEvents.BalButtonDidRenderDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "listenOnClick",
        "target": "document",
        "capture": true,
        "passive": false
      }];
  }
}
