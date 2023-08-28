import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { L as ListenToMutation } from './index-0a672def.js';
import { f as deepReady, b as waitAfterFramePaint } from './helpers-18cc89f4.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
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

export { Field as bal_field };
