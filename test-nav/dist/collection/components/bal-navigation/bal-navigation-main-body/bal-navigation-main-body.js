import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMainBody {
  render() {
    const mainBodyEl = BEM.block('nav').element('main').element('body');
    return (h(Host, { class: Object.assign({}, mainBodyEl.class()) }, h("slot", null)));
  }
  static get is() { return "bal-navigation-main-body"; }
}
