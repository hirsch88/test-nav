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
import { Logger } from '../../../utils/log';
import { BEM } from '../../../utils/bem';
export class NavigationLinkGrid {
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), { 'columns is-multiline': true }) }, h("slot", null)));
  }
  static get is() { return "bal-nav-link-grid"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-link-grid.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-link-grid.css"]
    };
  }
}
__decorate([
  Logger('bal-nav-link-grid')
], NavigationLinkGrid.prototype, "createLogger", null);
