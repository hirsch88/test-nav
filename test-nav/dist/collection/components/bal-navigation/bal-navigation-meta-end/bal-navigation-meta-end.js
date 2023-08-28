import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMetaEnd {
  render() {
    const metaEndEl = BEM.block('nav').element('meta').element('end');
    return (h(Host, { class: Object.assign({}, metaEndEl.class()) }, h("slot", null)));
  }
  static get is() { return "bal-navigation-meta-end"; }
}
