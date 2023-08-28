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
import { Host, h, } from '@stencil/core';
import { BEM } from '../../utils/bem';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
import { ListenToConfig, defaultConfig } from '../../utils/config';
import { i18nControlLabel } from './bal-pagination.i18n';
export class Pagination {
  constructor() {
    this._value = 1;
    this.isMobile = balBreakpoints.isMobile;
    this.language = defaultConfig.language;
    this.interface = '';
    this.disabled = false;
    this.value = 1;
    this.totalPages = 1;
    this.pageRange = 2;
    this.sticky = false;
    this.top = 0;
  }
  valueChanged(newValue) {
    this._value = newValue;
  }
  topValueChanged(newValue) {
    if (this.sticky) {
      this.el.style.top = `${newValue}px`;
    }
  }
  componentWillLoad() {
    this._value = this.value;
    this.topValueChanged(this.top);
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  async next() {
    if (this._value < this.totalPages) {
      this._value = this._value + 1;
      this.balChangeEventEmitter.emit(this._value);
    }
  }
  async previous() {
    if (this._value !== 1) {
      this._value = this._value - 1;
      this.balChangeEventEmitter.emit(this._value);
    }
  }
  async configChanged(state) {
    this.language = state.language;
  }
  selectPage(pageNumber) {
    this._value = pageNumber;
    this.balChangeEventEmitter.emit(this._value);
  }
  getItems(pageRange = 1) {
    const items = [];
    let rangeStart = this._value - pageRange;
    let rangeEnd = this._value + pageRange;
    if (this.interface === 'small') {
      rangeStart = 1;
      rangeEnd = this.totalPages - 1;
    }
    else {
      if (rangeEnd > this.totalPages) {
        rangeEnd = this.totalPages;
        rangeStart = this.totalPages - pageRange * 2;
        rangeStart = rangeStart < 1 ? 1 : rangeStart;
      }
      if (rangeStart <= 1) {
        rangeStart = 1;
        rangeEnd = Math.min(pageRange * 2 + 1, this.totalPages);
      }
    }
    if (rangeStart > 1) {
      items.push(this.renderPageElement(1));
      if (this.interface !== 'small') {
        items.push(this.renderEllipsisElement());
      }
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      items.push(this.renderPageElement(i));
    }
    if (rangeEnd < this.totalPages) {
      if (this.interface !== 'small') {
        items.push(this.renderEllipsisElement());
      }
      items.push(this.renderPageElement(this.totalPages));
    }
    return items;
  }
  renderEllipsisElement() {
    return (h("li", null, h("div", { class: "pagination-more" }, h("bal-text", { bold: true, heading: true, inline: true, space: "none" }, "\u2026"))));
  }
  renderPageElement(pageNumber) {
    const isActive = this._value === pageNumber;
    const dot = BEM.block('pagination').element('nav').element('pagination-list').element('dot');
    if (this.interface === 'small') {
      return (h("li", null, h("span", { class: Object.assign(Object.assign(Object.assign({}, dot.class()), dot.modifier('active').class(isActive)), dot.modifier('inactive').class(!isActive)), onClick: () => this.selectPage(pageNumber) })));
    }
    return (h("li", null, h("bal-button", { square: true, color: isActive ? 'primary' : 'text', onClick: () => this.selectPage(pageNumber), "data-testid": "bal-pagination-page-number" }, pageNumber)));
  }
  render() {
    const mobileItems = this.getItems();
    const tabletItems = this.getItems(this.pageRange);
    const block = BEM.block('pagination');
    const elNav = block.element('nav');
    const elPrevious = elNav.element('pagination-previous');
    const elNext = elNav.element('pagination-next');
    const elList = elNav.element('pagination-list');
    const isSmall = this.interface === 'small';
    const buttonColor = isSmall ? 'tertiary' : 'text';
    const buttonSize = isSmall ? 'small' : '';
    const flat = isSmall;
    const leftControlTitle = i18nControlLabel[this.language].left;
    const rightControlTitle = i18nControlLabel[this.language].right;
    const hasBasicNavigationButtons = this.interface === '' || (isSmall && this.totalPages <= 5);
    const SmallWithText = () => (h("bal-text", { space: "none", class: Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), color: "blue" }, h("span", { class: "has-text-weight-bold" }, this._value), ' / ' + this.totalPages));
    const PaginationTablet = () => (h("ul", { class: Object.assign(Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), { 'is-disabled': this.disabled }), "data-testid": "bal-pagination-list" }, tabletItems));
    const PaginationMobile = () => (h("ul", { class: Object.assign(Object.assign(Object.assign({}, elList.class()), elList.modifier(`context-${this.interface}`).class()), { 'is-disabled': this.disabled }), "data-testid": "bal-pagination-list" }, mobileItems));
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier('is-sticky').class(this.sticky)) }, h("nav", { class: Object.assign(Object.assign({}, elNav.class()), elNav.modifier(`context-${this.interface}`).class()), role: "navigation", "aria-label": "pagination" }, h("bal-button", { square: true, color: buttonColor, size: buttonSize, flat: flat, class: Object.assign(Object.assign({}, elPrevious.class()), elPrevious.modifier(`context-${this.interface}`).class()), disabled: this._value < 2 || this.disabled, onClick: () => this.previous(), "data-testid": "bal-pagination-controls-left", title: leftControlTitle }, h("bal-icon", { name: "nav-go-left", size: "small" })), h("bal-button", { square: true, color: buttonColor, size: buttonSize, flat: flat, class: Object.assign(Object.assign({}, elNext.class()), elNext.modifier(`context-${this.interface}`).class()), disabled: this._value === this.totalPages || this.disabled, onClick: () => this.next(), "data-testid": "bal-pagination-controls-right", title: rightControlTitle }, h("bal-icon", { name: "nav-go-right", size: "small" })), hasBasicNavigationButtons && this.isMobile ? h(PaginationMobile, null) : '', hasBasicNavigationButtons && !this.isMobile ? h(PaginationTablet, null) : '', !hasBasicNavigationButtons ? h(SmallWithText, null) : '')));
  }
  static get is() { return "bal-pagination"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-pagination.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-pagination.css"]
    };
  }
  static get properties() {
    return {
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalPaginationInterface",
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
          "text": "Defines the layout of the pagination"
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "Disables component"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
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
          "text": "Current selected page"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "1"
      },
      "totalPages": {
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
          "text": "The total amount of pages"
        },
        "attribute": "total-pages",
        "reflect": false,
        "defaultValue": "1"
      },
      "pageRange": {
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
          "text": "Specify the max visible pages before and after the selected page"
        },
        "attribute": "page-range",
        "reflect": false,
        "defaultValue": "2"
      },
      "sticky": {
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
          "text": "If 'true, the pagination will be sticky to the top"
        },
        "attribute": "sticky",
        "reflect": false,
        "defaultValue": "false"
      },
      "top": {
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
          "text": "If sticky, the top position will be determined by this value"
        },
        "attribute": "top",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
  static get states() {
    return {
      "_value": {},
      "isMobile": {},
      "language": {}
    };
  }
  static get events() {
    return [{
        "method": "balChangeEventEmitter",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggers when a page change happens"
        },
        "complexType": {
          "original": "BalEvents.BalPaginationChangeDetail",
          "resolved": "number",
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
      "next": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Go to the next page",
          "tags": []
        }
      },
      "previous": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Go to the previous page",
          "tags": []
        }
      },
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../interfaces"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "top",
        "methodName": "topValueChanged"
      }];
  }
}
__decorate([
  ListenToBreakpoints()
], Pagination.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], Pagination.prototype, "configChanged", null);
