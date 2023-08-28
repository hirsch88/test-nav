import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMainHead {
  render() {
    const mainHeadEl = BEM.block('nav').element('main').element('head');
    return (h(Host, { class: Object.assign({}, mainHeadEl.class()) }, h("slot", null)));
  }
  static get is() { return "bal-navigation-main-head"; }
}
