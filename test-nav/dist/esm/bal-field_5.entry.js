import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { L as ListenToMutation } from './mutation.decorator-96ae606b.js';
import { f as deepReady, b as waitAfterFramePaint } from './helpers-08b28736.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import { B as BEM } from './bem-1b28532d.js';
import './listener-ea90dc02.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';

const balFieldCss = ".bal-field,.bal-field-label,.bal-field-control,.bal-field-message,.bal-field-hint{display:block;position:relative;font-family:var(--bal-font-family-text)}.bal-field-label{display:inline-block;margin-bottom:.25rem}.bal-field-hint{display:inline-block;margin-left:.25rem;height:1rem;width:1rem}.bal-field-hint__hint{position:absolute;top:2px;left:0}.bal-field-message{line-height:var(--bal-line-height-normal)}.bal-field-control{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;gap:.5rem}.bal-field-control .bal-input{-ms-flex:1;flex:1}@media screen and (max-width: 768px){.bal-field-control--expanded-on-mobile{-ms-flex-direction:column;flex-direction:column}.bal-field-control--expanded-on-mobile .bal-button,.bal-field-control--expanded-on-mobile .bal-button .button{width:100%}}.bal-field-control{padding-bottom:22px}.bal-field-control+.bal-field-message{margin-top:-24px !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Field = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balFormControlDidLoad = createEvent(this, "balFormControlDidLoad", 7);
    this.fieldId = `bal-field-${FieldIds++}`;
    this.formControlElement = ['bal-field-control'];
    this.inputElements = [
      'bal-input',
      'bal-number-input',
      'bal-textarea',
      'bal-select',
      'bal-datepicker',
      'bal-checkbox',
      'bal-radio',
      'bal-input-group',
      'bal-input-stepper',
      'bal-input-slider',
      'bal-file-upload',
    ];
    this.formElements = [...this.formControlElement, 'bal-field-label', 'bal-field-message'];
    this.mutationObserverActive = true;
    this.required = undefined;
    this.invalid = undefined;
    this.valid = false;
    this.disabled = undefined;
    this.readonly = undefined;
    this.loading = undefined;
  }
  requiredHandler() {
    this.updateProps([...this.inputElements, 'bal-field-label'], 'required');
  }
  invalidHandler() {
    this.updateProps([...this.inputElements, ...this.formElements], 'invalid');
  }
  validHandler() {
    this.updateProps([...this.inputElements, ...this.formElements], 'valid');
  }
  disabledHandler() {
    this.updateProps([...this.inputElements, ...this.formElements], 'disabled');
  }
  readonlyHandler() {
    this.updateProps([...this.inputElements, ...this.formElements], 'readonly');
  }
  loadingHandler() {
    this.updateProps([...this.inputElements, ...this.formControlElement], 'loading');
  }
  connectedCallback() {
    this.triggerAllHandlers();
  }
  componentWillLoad() {
    this.triggerAllHandlers();
  }
  async componentDidLoad() {
    await this.syncAriaAttributes();
  }
  async syncAriaAttributes() {
    await deepReady(this.el);
    await waitAfterFramePaint();
    const label = this.el.querySelector('bal-field-label bal-label');
    const message = this.el.querySelector('bal-field-message');
    const controls = [
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-input')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-select')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-datepicker')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-checkbox')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-radio')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-checkbox-group')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-radio-group')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-number-input')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-time-input')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-input-slider')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-input-stepper')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-textarea')),
      ...Array.from(this.el.querySelectorAll('bal-field-control bal-file-upload')),
    ];
    const ariaForm = defaultBalAriaForm;
    if (label) {
      ariaForm.labelId = `${this.fieldId}-lbl`;
    }
    if (message) {
      ariaForm.messageId = `${this.fieldId}-msg`;
    }
    for (let index = 0; index < controls.length; index++) {
      const control = controls[index];
      if (index === 0) {
        ariaForm.controlId = `${this.fieldId}-ctrl`;
        await (label === null || label === void 0 ? void 0 : label.setAriaForm(ariaForm));
        await (message === null || message === void 0 ? void 0 : message.setAriaForm(ariaForm));
        await (control === null || control === void 0 ? void 0 : control.setAriaForm(ariaForm));
      }
      else {
        ariaForm.controlId = `${this.fieldId}-ctrl-${index}`;
        await (control === null || control === void 0 ? void 0 : control.setAriaForm(ariaForm));
      }
    }
  }
  mutationListener() {
    this.triggerAllHandlers();
    this.syncAriaAttributes();
  }
  triggerAllHandlers() {
    this.requiredHandler();
    this.invalidHandler();
    this.validHandler();
    this.readonlyHandler();
    this.disabledHandler();
    this.loadingHandler();
  }
  updateProps(selectors, key) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.el.querySelectorAll(selectors.join(', '));
    components.forEach(c => callback(c));
  }
  render() {
    return (h(Host, { id: this.fieldId, class: {
        'bal-field': true,
        'field': true,
        'bal-field--invalid': this.invalid === true,
      } }, h("slot", null), h("span", { class: "hidden" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "required": ["requiredHandler"],
    "invalid": ["invalidHandler"],
    "valid": ["validHandler"],
    "disabled": ["disabledHandler"],
    "readonly": ["readonlyHandler"],
    "loading": ["loadingHandler"]
  }; }
};
__decorate([
  ListenToMutation({ subtree: false })
], Field.prototype, "mutationListener", null);
let FieldIds = 0;
Field.style = {
  css: balFieldCss
};

const FieldControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconRight = '';
    this.iconLeft = '';
    this.expandedOnMobile = undefined;
    this.loading = false;
  }
  get buildIconLeftTemplate() {
    if (this.iconLeft) {
      return h("bal-icon", { name: this.iconLeft, color: "info", class: "is-left", size: "small" });
    }
    return '';
  }
  get buildIconRightTemplate() {
    if (this.iconRight) {
      return h("bal-icon", { name: this.iconRight, color: "info", class: "is-right", size: "small" });
    }
    return '';
  }
  render() {
    return (h(Host, { class: {
        'bal-field-control': true,
        'control': true,
        'has-icons-left': !!this.iconLeft,
        'has-icons-right': !!this.iconRight,
        'is-loading': this.loading,
        'bal-field-control--expanded-on-mobile': !!this.expandedOnMobile,
      } }, h("slot", null), this.buildIconLeftTemplate, this.buildIconRightTemplate));
  }
};

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

const FieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.htmlFor = undefined;
    this.required = true;
    this.valid = undefined;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.weight = 'bold';
  }
  componentDidLoad() {
    if (this.element) {
      this.parentBalFieldElement = this.element.closest('bal-field');
      if (this.parentBalFieldElement) {
        this.parentBalFieldElement.classList.add('has-label');
      }
    }
  }
  disconnectedCallback() {
    if (this.parentBalFieldElement) {
      this.parentBalFieldElement.classList.remove('has-label');
    }
  }
  render() {
    return (h(Host, { class: "bal-field-label" }, h("bal-label", { multiline: true, size: "small", htmlFor: this.htmlFor, required: this.required, valid: this.valid, invalid: this.invalid, disabled: this.disabled, readonly: this.readonly, weight: this.weight }, h("slot", null))));
  }
  get element() { return getElement(this); }
};

const FieldMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ariaForm = defaultBalAriaForm;
    this.color = '';
    this.invalid = false;
    this.valid = false;
    this.disabled = false;
    this.readonly = false;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    return (h(Host, { id: this.ariaForm.messageId, class: {
        'bal-field-message': true,
        'help': true,
        'is-danger': this.invalid,
        'is-success': this.valid,
        'is-disabled': this.disabled || this.readonly,
        [`is-${this.color}`]: !!this.color,
      } }, h("slot", null)));
  }
};

export { Field as bal_field, FieldControl as bal_field_control, FieldHint as bal_field_hint, FieldLabel as bal_field_label, FieldMessage as bal_field_message };
