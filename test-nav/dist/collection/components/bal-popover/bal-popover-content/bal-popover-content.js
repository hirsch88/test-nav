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
import { ListenToBreakpoints } from '../../../utils/breakpoints';
import { balBrowser } from '../../../utils/browser';
export class PopoverContent {
  constructor() {
    this.spaceless = false;
    this.scrollable = 0;
    this.contentWidth = 0;
    this.contentMinWidth = 0;
    this.color = 'white';
    this.expanded = false;
    this.radius = 'normal';
    this.noShadow = false;
    this.mobileTop = false;
    this.contentHeightOnTop = 0;
  }
  breakpointListener(_breakpoints) {
    if (balBrowser.hasWindow) {
      this.contentHeightOnTop = window.innerHeight - 64;
    }
  }
  get innerStyle() {
    let scrollable = {};
    if (this.scrollable > 0) {
      scrollable = {
        'max-height': `${this.scrollable}px`,
        'overflow': 'auto',
      };
    }
    return Object.assign({}, scrollable);
  }
  get contentStyle() {
    let contentWidth = {};
    let contentMinWidth = {};
    const contentHeightOnTopNav = {
      '--bal-popover-content-height-top-nav': `${this.contentHeightOnTop / 16}rem`,
    };
    if (this.contentWidth > 0) {
      contentWidth = { 'max-width': `${this.contentWidth}px` };
    }
    if (this.contentMinWidth > 0) {
      contentMinWidth = { 'min-width': `${this.contentMinWidth}px` };
    }
    return Object.assign(Object.assign(Object.assign({}, contentWidth), contentMinWidth), contentHeightOnTopNav);
  }
  componentWillLoad() {
    if (balBrowser.hasWindow) {
      this.contentHeightOnTop = window.innerHeight - 64;
    }
  }
  render() {
    const block = BEM.block('popover').element('content');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('expanded').class(this.expanded)), block.modifier('spaceless').class(this.spaceless)), block.modifier('no-shadow').class(this.noShadow)), block.modifier(`radius-${this.radius}`).class()), block.modifier(`color-${this.color}`).class()), block.modifier('on-top').class(this.mobileTop)), "data-testid": "bal-popover-content", role: "tooltip", style: this.contentStyle }, h("div", { class: Object.assign({}, block.element('inner').class()), style: this.innerStyle }, h("slot", null)), h("div", { class: Object.assign({}, block.element('arrow').class()), "data-popper-arrow": true })));
  }
  static get is() { return "bal-popover-content"; }
  static get properties() {
    return {
      "spaceless": {
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
          "text": "If `true` the popover has no padding space."
        },
        "attribute": "spaceless",
        "reflect": false,
        "defaultValue": "false"
      },
      "scrollable": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Limit the height of the popover content. Pass the amount of pixel."
        },
        "attribute": "scrollable",
        "reflect": false,
        "defaultValue": "0"
      },
      "contentWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define the max width of the popover content."
        },
        "attribute": "content-width",
        "reflect": false,
        "defaultValue": "0"
      },
      "contentMinWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define the min width of the popover content."
        },
        "attribute": "content-min-width",
        "reflect": false,
        "defaultValue": "0"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopoverContentColor",
          "resolved": "\"grey\" | \"white\"",
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
          "text": "Defines background color of the content."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'white'"
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
          "text": "If `true` the content has a min width of 100%."
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      },
      "radius": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopoverContentRadius",
          "resolved": "\"large\" | \"large-bottom-none\" | \"large-top-none\" | \"none\" | \"normal\" | \"normal-bottom-none\" | \"normal-top-none\"",
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
          "text": "Defines border-radius of popover content."
        },
        "attribute": "radius",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "noShadow": {
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
          "text": "If `true` the popover does not have the shadow"
        },
        "attribute": "no-shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "mobileTop": {
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
          "text": "If `true` the content will have a divider line on top"
        },
        "attribute": "mobile-top",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "contentHeightOnTop": {}
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  ListenToBreakpoints()
], PopoverContent.prototype, "breakpointListener", null);
