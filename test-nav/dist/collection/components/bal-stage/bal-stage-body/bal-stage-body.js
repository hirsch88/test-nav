import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class StageBody {
  render() {
    const block = BEM.block('stage-body');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("slot", null)));
  }
  static get is() { return "bal-stage-body"; }
  static get elementRef() { return "el"; }
}
