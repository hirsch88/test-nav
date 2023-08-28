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
import { Logger } from '../../../utils/log';
import { ListenToResize } from '../../../utils/resize';
import { BalScrollHandler } from '../../../utils/scroll';
export class NavMenuFlyout {
  constructor() {
    this.navMenuFlyoutId = `bal-nav-menu-flyout-${NavMenuFlyOutIds++}`;
    this.bodyScrollHandler = new BalScrollHandler();
    this.isHidden = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  resizeListener() {
    if (this.isFlyoutScrollable()) {
      this.bodyScrollHandler.disable();
    }
    else {
      this.bodyScrollHandler.enable();
    }
  }
  isFlyoutScrollable() {
    var _a, _b;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.scrollHeight) > ((_b = this.el) === null || _b === void 0 ? void 0 : _b.clientHeight);
  }
  render() {
    const block = BEM.block('nav-menu-flyout');
    const line = block.element('line');
    return (h(Host, { id: this.navMenuFlyoutId, class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, line.class()) }), h("div", { class: {
        container: true,
      } }, h("slot", null))));
  }
  static get is() { return "bal-nav-menu-flyout"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-menu-flyout.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-menu-flyout.css"]
    };
  }
  static get states() {
    return {
      "isHidden": {}
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-nav-menu-flyout')
], NavMenuFlyout.prototype, "createLogger", null);
__decorate([
  ListenToResize()
], NavMenuFlyout.prototype, "resizeListener", null);
let NavMenuFlyOutIds = 0;
