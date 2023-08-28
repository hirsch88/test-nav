import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { HEADING_COLORS, HEADING_ORDER, HEADING_SIZES, HEADING_TAGS, } from './bal-heading.const';
import { balBrowser } from '../../../utils/browser';
export class Heading {
  constructor() {
    this.autoFontSize = undefined;
    this.level = 'h1';
    this.visualLevel = undefined;
    this.autoLevel = undefined;
    this.noWrap = false;
    this.subtitle = false;
    this.space = undefined;
    this.color = '';
    this.inverted = false;
    this.shadow = false;
  }
  levelWatcher() {
    this.updateAutoFontSize();
  }
  visualLevelWatcher() {
    this.updateAutoFontSize();
  }
  autoLevelWatcher() {
    this.updateAutoFontSize();
  }
  connectedCallback() {
    this.updateAutoFontSize();
  }
  componentDidRender() {
    if (this.autoLevel && this.autoFontSize) {
      const rows = this.rows;
      if (rows > 1) {
        const minSize = HEADING_SIZES[this.autoLevel];
        if (minSize !== this.autoFontSize) {
          const nextIndex = HEADING_ORDER.indexOf(this.autoFontSize) + 1;
          this.autoFontSize = HEADING_ORDER[nextIndex];
        }
      }
    }
  }
  updateAutoFontSize() {
    this.autoFontSize = this.fontSize;
  }
  get rows() {
    if (this.headingEl && balBrowser.hasWindow) {
      const computedStyle = window.getComputedStyle(this.headingEl);
      const lineHeight = parseInt(computedStyle.lineHeight.slice(0, -2), 10);
      const height = this.headingEl.offsetHeight;
      return height / lineHeight;
    }
    return 1;
  }
  get fontColor() {
    if (this.inverted) {
      return 'white';
    }
    return HEADING_COLORS[this.color];
  }
  get fontSize() {
    return HEADING_SIZES[this.visualLevel ? this.visualLevel : this.level];
  }
  get tag() {
    return HEADING_TAGS[this.level];
  }
  render() {
    const block = BEM.block('heading');
    const bemTextEl = block.element('text');
    const Heading = this.tag;
    const fontColor = this.fontColor;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`space-${this.space}`).class(this.space !== undefined)), block.modifier(`level-${this.level}`).class()) }, h(Heading, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemTextEl.class()), bemTextEl.modifier('no-wrap').class(this.noWrap)), bemTextEl.modifier('subtitle').class(this.subtitle)), bemTextEl.modifier('shadow').class(this.shadow)), bemTextEl.modifier(`color-${fontColor}`).class()), { [`is-size-${this.autoFontSize}`]: true }), ref: (headingEl) => (this.headingEl = headingEl), "data-testid": "bal-heading" }, h("slot", null))));
  }
  static get is() { return "bal-heading"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-heading.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-heading.css"]
    };
  }
  static get properties() {
    return {
      "level": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingLevel",
          "resolved": "\"display\" | \"display-2\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"large\" | \"medium\" | \"normal\" | \"p\" | \"span\" | \"x-large\" | \"xx-large\" | \"xxx-large\" | \"xxxx-large\" | \"xxxxx-large\"",
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
          "text": "The actual heading level used in the HTML markup."
        },
        "attribute": "level",
        "reflect": false,
        "defaultValue": "'h1'"
      },
      "visualLevel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingVisualLevel",
          "resolved": "\"display\" | \"display-2\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"large\" | \"medium\" | \"normal\" | \"x-large\" | \"xx-large\" | \"xxx-large\" | \"xxxx-large\" | \"xxxxx-large\" | undefined",
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
          "text": "Make the visual style mimic a specific heading level.\nThis option allows you to make e.g. h1 visually look like h3,\nbut still keep it h1 in the markup."
        },
        "attribute": "visual-level",
        "reflect": false
      },
      "autoLevel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingVisualLevel",
          "resolved": "\"display\" | \"display-2\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"large\" | \"medium\" | \"normal\" | \"x-large\" | \"xx-large\" | \"xxx-large\" | \"xxxx-large\" | \"xxxxx-large\" | undefined",
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
          "text": "The actual heading level used in the HTML markup."
        },
        "attribute": "auto-level",
        "reflect": false
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
      "subtitle": {
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
          "text": "If `true` the heading gets displayed slimmer."
        },
        "attribute": "subtitle",
        "reflect": false,
        "defaultValue": "false"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'bottom' | 'top' | 'all'",
          "resolved": "\"all\" | \"bottom\" | \"none\" | \"top\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines at which position the heading has spacing."
        },
        "attribute": "space",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalHeadingColor",
          "resolved": "\"\" | \"blue\" | \"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\" | \"white\"",
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
          "text": "The theme type of the toast."
        },
        "attribute": "color",
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
      }
    };
  }
  static get states() {
    return {
      "autoFontSize": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "level",
        "methodName": "levelWatcher"
      }, {
        "propName": "visualLevel",
        "methodName": "visualLevelWatcher"
      }, {
        "propName": "autoLevel",
        "methodName": "autoLevelWatcher"
      }];
  }
}
