import { h, Host } from '@stencil/core';
import { stopEventBubbling } from '../../../utils/form-input';
import { BEM } from '../../../utils/bem';
import { BalScrollHandler } from '../../../utils/scroll';
import { balBrowser } from '../../../utils/browser';
export class NavigationPopover {
  constructor() {
    this.toggle = (ev) => {
      stopEventBubbling(ev);
      this.clearTimeouts();
      if (!this.isActive) {
        BalScrollHandler.disableSmoothScrolling();
        this.scrollToTopTimer = setTimeout(() => {
          if (balBrowser.hasWindow) {
            window.scrollTo(0, 0);
          }
        }, 0);
      }
      this.setActiveTimer = setTimeout(() => {
        BalScrollHandler.enableSmoothScrolling();
        this.isActive = !this.isActive;
      }, 100);
    };
    this.isActive = false;
    this.label = '';
    this.inverted = false;
    this.icon = undefined;
    this.backdrop = false;
    this.size = '';
    this.inactiveColor = 'light';
    this.activeColor = 'primary';
    this.heading = undefined;
    this.closable = true;
    this.contentRadius = 'normal';
    this.position = 'bottom-start';
    this.contentWidth = 0;
    this.contentMinWidth = 0;
    this.offsetY = 0;
    this.square = false;
    this.contentNoShadow = false;
    this.contentExpanded = false;
    this.arrow = false;
    this.mobileTop = false;
  }
  clearTimeouts() {
    if (this.scrollToTopTimer) {
      clearTimeout(this.scrollToTopTimer);
    }
    if (this.setActiveTimer) {
      clearTimeout(this.setActiveTimer);
    }
  }
  render() {
    const navPopoverEl = BEM.block('nav').element('popover');
    return (h(Host, { class: Object.assign(Object.assign({}, navPopoverEl.class()), { control: true }) }, h("bal-popover", { active: this.isActive, onBalChange: event => (this.isActive = event.detail), arrow: this.arrow, backdrop: this.backdrop, position: this.position, offsetY: this.offsetY, "mobile-top": this.mobileTop }, h("bal-button", { "bal-popover-trigger": true, icon: this.icon, size: this.size, inverted: this.inverted, color: this.isActive ? this.activeColor : this.inactiveColor, square: this.square, onClick: this.toggle, "aria-haspopup": "true", class: `bal-navigation-popover__button bal-navigation-popover__button-${this.isActive ? this.activeColor : this.inactiveColor}` }, this.label), h("bal-popover-content", { radius: this.contentRadius, "content-width": this.contentWidth, "content-min-width": this.contentMinWidth, "no-shadow": this.contentNoShadow, expanded: this.contentExpanded, "mobile-top": this.mobileTop }, (this.closable || this.heading) && (h("div", { class: Object.assign({}, navPopoverEl.element('head').class()) }, this.heading && (h("bal-heading", { space: "none", level: "h4" }, this.heading)), this.closable && h("bal-close", { onClick: () => (this.isActive = !this.isActive) }))), h("slot", null)))));
  }
  static get is() { return "bal-navigation-popover"; }
  static get properties() {
    return {
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
          "text": "Defines the label of the button"
        },
        "attribute": "label",
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
          "text": "Turns the trigger button to inverted style."
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
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
          "text": "Defines the icon of the trigger button."
        },
        "attribute": "icon",
        "reflect": false
      },
      "backdrop": {
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
          "text": "If `true` a backdrop is added"
        },
        "attribute": "backdrop",
        "reflect": false,
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
          "text": "Defines the size of the button"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "inactiveColor": {
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
          "text": "Color style of the button when the popover is closed."
        },
        "attribute": "inactive-color",
        "reflect": false,
        "defaultValue": "'light'"
      },
      "activeColor": {
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
          "text": "Color style of the button when the popover is open."
        },
        "attribute": "active-color",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "heading": {
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
          "text": "Defines the heading of the popover"
        },
        "attribute": "heading",
        "reflect": false
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
          "text": "If 'false', the closing button is not displayed"
        },
        "attribute": "closable",
        "reflect": false,
        "defaultValue": "true"
      },
      "contentRadius": {
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
        "attribute": "content-radius",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPopoverPlacement",
          "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
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
          "text": "Define the position of the popover content."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'bottom-start'"
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
      "offsetY": {
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
          "text": "Define the offset of the popover content."
        },
        "attribute": "offset-y",
        "reflect": false,
        "defaultValue": "0"
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
      "contentNoShadow": {
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
        "attribute": "content-no-shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "contentExpanded": {
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
        "attribute": "content-expanded",
        "reflect": false,
        "defaultValue": "false"
      },
      "arrow": {
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
          "text": "If `true` a little arrow is added, which points to the trigger element"
        },
        "attribute": "arrow",
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
          "text": "If `true` its content will have a divider line on top"
        },
        "attribute": "mobile-top",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isActive": {}
    };
  }
}
