import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const FieldHint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.subject = '';
    this.closeLabel = 'Close';
    this.small = false;
  }
  render() {
    const block = BEM.block('field-hint');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("bal-hint", { class: Object.assign({}, block.element('hint').class()), "data-testid": "bal-field-hint", closeLabel: this.closeLabel, small: this.small }, this.subject ? h("bal-hint-title", null, this.subject) : '', h("bal-hint-text", null, h("slot", null)))));
  }
};

export { FieldHint as bal_field_hint };
