import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class Text {
  constructor() {
    this.size = '';
    this.heading = false;
    this.noWrap = false;
    this.bold = false;
    this.inline = false;
    this.color = '';
    this.space = '';
    this.inverted = false;
    this.shadow = false;
    this.disabled = undefined;
    this.invalid = undefined;
    this.hovered = false;
    this.pressed = false;
  }
  parseColor() {
    if (this.disabled) {
      return 'grey';
    }
    if (this.invalid) {
      if (this.pressed) {
        return 'danger-darker';
      }
      if (this.hovered) {
        return 'danger-dark';
      }
      return 'danger';
    }
    const color = this.inverted ? 'white' : this.color === 'info' ? 'primary' : this.color;
    if (this.pressed) {
      return 'primary-dark';
    }
    if (this.hovered) {
      return 'light-blue';
    }
    return color;
  }
  render() {
    const Text = this.inline ? 'span' : 'p';
    const color = this.parseColor();
    const block = BEM.block('text');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`space-${this.space}`).class(this.space !== '')), block.modifier(`inline`).class(this.inline)) }, h(Text, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('text').class()), block.element('text').modifier(`has-text-${color}`).class()), block.element('text').modifier(`no-wrap`).class(this.noWrap)), { 'is-size-small': this.size === 'small', 'is-size-large': this.size === 'lead', 'is-size-medium': this.size === 'block', 'has-text-weight-bold': this.bold, 'is-family-title': this.heading, 'has-text-shadow': this.shadow }), "data-testid": "bal-text" }, h("slot", null))));
  }
  static get is() { return "bal-text"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-text.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-text.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTextSize",
          "resolved": "\"\" | \"block\" | \"lead\" | \"small\"",
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
          "text": "Defines the size of the paragraph"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "heading": {
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
          "text": "If `true` the text has heading font family"
        },
        "attribute": "heading",
        "reflect": false,
        "defaultValue": "false"
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
      "bold": {
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
          "text": "If `true` the text is bold"
        },
        "attribute": "bold",
        "reflect": false,
        "defaultValue": "false"
      },
      "inline": {
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
          "text": "If `true` the text is shown as a display inline"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTextColor",
          "resolved": "\"\" | \"black\" | \"blue\" | \"blue-dark\" | \"blue-light\" | \"danger\" | \"grey\" | \"info\" | \"light-blue\" | \"primary\" | \"primary-light\" | \"success\" | \"warning\" | \"white\"",
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
          "text": "Defines the color of the text."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTextSpace",
          "resolved": "\"\" | \"all\" | \"bottom\" | \"none\" | \"top\"",
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
          "text": "Defines at which position the heading has spacing."
        },
        "attribute": "space",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "If `true` the color gets inverted for dark backgrounds"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "If `true` adds a text shadow to improve readability on image background"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "undefined"
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
}
