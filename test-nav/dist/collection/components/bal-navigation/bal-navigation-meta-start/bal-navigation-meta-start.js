import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMetaStart {
  render() {
    const metaStartEl = BEM.block('nav').element('meta').element('start');
    return (h(Host, { class: Object.assign({}, metaStartEl.class()) }, h("slot", null)));
  }
  static get is() { return "bal-navigation-meta-start"; }
}
