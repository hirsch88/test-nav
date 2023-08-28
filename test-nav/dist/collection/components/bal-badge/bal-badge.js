import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class Badge {
  constructor() {
    this.icon = undefined;
    this.size = '';
    this.color = '';
    this.position = '';
  }
  render() {
    const block = BEM.block('badge');
    const labelEl = block.element('label');
    const iconEl = block.element('icon');
    const color = this.color !== '';
    const size = this.size !== '';
    const position = this.position !== '';
    const labelHidden = !!this.icon || this.size === 'small';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`background-${this.color}`).class(color)), block.modifier(`position-${this.position}`).class(position)), block.modifier(`size-${this.size}`).class(size)) }, h("span", { class: Object.assign(Object.assign(Object.assign({}, labelEl.class()), labelEl.modifier(`color-${this.color}`).class(color)), labelEl.modifier(`hidden`).class(labelHidden)), "data-testid": "bal-badge-label" }, h("slot", null)), h("bal-icon", { class: Object.assign(Object.assign({}, iconEl.class()), iconEl.modifier(`hidden`).class(!labelHidden)), size: this.size === '' ? 'small' : '', name: this.icon, color: this.color === 'grey' ? 'grey' : 'primary' })));
  }
  static get is() { return "bal-badge"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-badge.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-badge.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Name of the icon to show. If a icon is present text should be hidden."
        },
        "attribute": "icon",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalBadgeSize",
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
          "text": "Define the size of badge. Small is recommended for tabs."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalBadgeColor",
          "resolved": "\"\" | \"danger\" | \"green\" | \"grey\" | \"purple\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
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
          "text": "Define the color for the badge."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalBadgePosition",
          "resolved": "\"\" | \"button\" | \"card\" | \"tabs\"",
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
          "text": "If `true` the badge is added to the top right corner of the card."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "el"; }
}
