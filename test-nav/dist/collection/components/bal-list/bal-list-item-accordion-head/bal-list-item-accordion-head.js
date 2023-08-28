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
import { Host, h } from '@stencil/core';
import { Logger } from '../../../utils/log';
export class ListItemAccordionHead {
  constructor() {
    this.onClick = () => {
      if (this.el.closest('bal-list-item')) {
        this.accordionOpen = !this.accordionOpen;
      }
    };
    this.accordionOpen = false;
    this.icon = 'plus';
  }
  createLogger(log) {
    this.log = log;
  }
  accordionOpenHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.balAccordionChange.emit(this.accordionOpen);
    }
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item': true,
        'bal-list__item__accordion-head': true,
        'bal-list__item__accordion-head--open': this.accordionOpen,
      }, onClick: this.onClick }, h("slot", null), h("bal-list-item-icon", { right: true }, h("bal-icon", { class: "bal-list__item__accordion-head__icon", name: this.icon, size: "small", turn: this.accordionOpen }))));
  }
  static get is() { return "bal-list-item-accordion-head"; }
  static get properties() {
    return {
      "accordionOpen": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the list accordion is open"
        },
        "attribute": "accordion-open",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListItemAccordionHeadIcon",
          "resolved": "\"nav-go-down\" | \"plus\"",
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
          "text": "Icon name string with value 'plus' on default"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "'plus'"
      }
    };
  }
  static get events() {
    return [{
        "method": "balAccordionChange",
        "name": "balAccordionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the accordion state is changed"
        },
        "complexType": {
          "original": "BalEvents.BalListAccordionChangeDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "accordionOpen",
        "methodName": "accordionOpenHandler"
      }];
  }
}
__decorate([
  Logger('bal-list-item-accordion-head')
], ListItemAccordionHead.prototype, "createLogger", null);
