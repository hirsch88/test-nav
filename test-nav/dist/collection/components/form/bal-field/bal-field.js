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
import { ListenToMutation } from '../../../utils/mutation';
import { deepReady, waitAfterFramePaint } from '../../../utils/helpers';
import { defaultBalAriaForm } from '../../../utils/form';
export class Field {
  constructor() {
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
  static get is() { return "bal-field"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-field.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-field.css"]
    };
  }
  static get properties() {
    return {
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the form control needs to be filled. If it is set to\n`false` an optional label is added to the label.."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a invalid red style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "valid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the component gets a valid green style."
        },
        "attribute": "valid",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "loading": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If `true` a loading spinner is visible at the end of the input"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get events() {
    return [{
        "method": "balFormControlDidLoad",
        "name": "balFormControlDidLoad",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after render when element is labelled"
        },
        "complexType": {
          "original": "BalEvents.BalFieldAriaLabelledByDetail",
          "resolved": "HTMLElement",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "required",
        "methodName": "requiredHandler"
      }, {
        "propName": "invalid",
        "methodName": "invalidHandler"
      }, {
        "propName": "valid",
        "methodName": "validHandler"
      }, {
        "propName": "disabled",
        "methodName": "disabledHandler"
      }, {
        "propName": "readonly",
        "methodName": "readonlyHandler"
      }, {
        "propName": "loading",
        "methodName": "loadingHandler"
      }];
  }
}
__decorate([
  ListenToMutation({ subtree: false })
], Field.prototype, "mutationListener", null);
let FieldIds = 0;
