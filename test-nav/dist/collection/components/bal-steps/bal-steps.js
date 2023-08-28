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
import { Host, h } from '@stencil/core';
import { debounceEvent } from '../../utils/helpers';
import { BEM } from '../../utils/bem';
import { Logger } from '../../utils/log';
import { areArraysEqual } from '@baloise/web-app-utils';
import { stopEventBubbling } from '../../utils/form-input';
import { StepButton } from './components/step-button';
import { newBalStepOption } from './bal-step.util';
import { ListenToMutation } from '../../utils/mutation';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
export class Steps {
  constructor() {
    this.stepsId = `bal-steps-${StepsIds++}`;
    this.mutationObserverActive = true;
    this.getStepOptions = () => {
      if (this.options.length > 0) {
        return [...this.options.map(newBalStepOption)];
      }
      else {
        return Promise.all(this.items.map(value => value.getOptions()));
      }
    };
    this.updateStore = (newStore) => {
      if (!areArraysEqual(this.store, newStore)) {
        this.store = newStore;
      }
    };
    this.setActiveItem = () => {
      const activeTabs = this.store.filter(t => t.active);
      if (activeTabs.length > 0) {
        const firstActiveTab = activeTabs[0];
        this.value = firstActiveTab.value;
      }
      else {
        if (this.value === undefined && this.store.length > 0) {
          const firstStep = this.store[0];
          this.value = firstStep.value;
        }
      }
    };
    this.setActiveContent = () => {
      if (this.options.length === 0) {
        this.items.forEach(item => item.setActive(this.isActive(item)));
      }
    };
    this.onOptionChange = async () => {
      try {
        const options = await this.getStepOptions();
        this.updateStore(options);
        this.setActiveItem();
        this.setActiveContent();
      }
      catch (e) {
        console.warn('[WARN] - Could not read tab options');
      }
    };
    this.onSelectTab = async (ev, step) => {
      if (step.prevent || step.disabled || !this.clickable) {
        stopEventBubbling(ev);
      }
      if (!step.disabled) {
        if (step.navigate) {
          step.navigate.emit(ev);
        }
        if (this.clickable) {
          if (step.value !== this.value) {
            this.balChange.emit(step.value);
            await this.select(step);
          }
        }
      }
    };
    this.isMobile = balBreakpoints.isMobile;
    this.store = [];
    this.options = [];
    this.clickable = true;
    this.debounce = 0;
    this.value = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    if (this.options === undefined || this.options.length < 1) {
      this.mutationObserverActive = true;
    }
    else {
      this.mutationObserverActive = false;
    }
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  async valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.onOptionChange();
    }
  }
  connectedCallback() {
    this.debounceChanged();
    this.mutationObserverActive = this.options === undefined || this.options.length < 1;
  }
  componentDidLoad() {
    this.onOptionChange();
  }
  mutationListener() {
    this.onOptionChange();
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  async select(step) {
    this.value = step.value;
  }
  async getOptionByValue(value) {
    const options = this.store;
    return options.find(option => option.value === value);
  }
  get items() {
    return Array.from(this.el.querySelectorAll(`#${this.stepsId} > bal-step-item`));
  }
  isActive(step) {
    return step.value === this.value;
  }
  render() {
    const block = BEM.block('steps');
    const bemStepsNav = block.element('nav');
    let hasPassed = true;
    let index = -1;
    const steps = this.store
      .map(step => (Object.assign(Object.assign({}, step), { active: step.value === this.value })))
      .map(step => {
      if (step.active) {
        hasPassed = false;
      }
      if (!step.hidden) {
        index = index + 1;
      }
      return Object.assign(Object.assign({}, step), { passed: hasPassed, index });
    });
    return (h(Host, { class: Object.assign({}, block.class()), "data-value": this.store
        .filter(t => this.isActive(t))
        .map(t => t.value)
        .join(','), "data-label": this.store
        .filter(t => this.isActive(t))
        .map(t => t.label)
        .join(',') }, h("nav", { role: "tablist", class: Object.assign({}, bemStepsNav.class()) }, h("bal-carousel", { class: Object.assign({}, bemStepsNav.element('carousel').class()), onBalChange: stopEventBubbling, controls: "small", "items-per-view": "auto", steps: 3 }, steps
      .filter(step => !step.hidden)
      .map(step => (h("bal-carousel-item", { class: Object.assign(Object.assign({}, bemStepsNav.element('carousel').element('item').class()), bemStepsNav.element('carousel').element('item').modifier('passed').class(step.passed)) }, h(StepButton, { item: step, isMobile: this.isMobile, clickable: this.clickable && !step.disabled, onSelectTab: this.onSelectTab })))))), h("div", { id: this.stepsId, class: Object.assign({}, block.element('steps__content').class()) }, h("slot", null))));
  }
  static get is() { return "bal-steps"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-steps.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-steps.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalStepOption[]",
          "resolved": "BalStepOption[]",
          "references": {
            "BalStepOption": {
              "location": "import",
              "path": "./bal-step.type"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Steps can be passed as a property or through HTML markup."
        },
        "defaultValue": "[]"
      },
      "clickable": {
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
          "text": "If `true` the tabs or steps can be clicked."
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "true"
      },
      "debounce": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Value of the current active step"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "isMobile": {},
      "store": {}
    };
  }
  static get events() {
    return [{
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the changes has finished."
        },
        "complexType": {
          "original": "BalEvents.BalTabsChangeDetail",
          "resolved": "string | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "select": {
        "complexType": {
          "signature": "(step: BalStepOption) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalStepOption": {
              "location": "import",
              "path": "./bal-step.type"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Go to tab with the given value",
          "tags": []
        }
      },
      "getOptionByValue": {
        "complexType": {
          "signature": "(value: string) => Promise<BalStepOption | undefined>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalStepOption": {
              "location": "import",
              "path": "./bal-step.type"
            }
          },
          "return": "Promise<BalStepOption | undefined>"
        },
        "docs": {
          "text": "Find the options properties by its value",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "options",
        "methodName": "optionChanged"
      }, {
        "propName": "debounce",
        "methodName": "debounceChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
__decorate([
  Logger('bal-steps')
], Steps.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-steps', 'bal-step-item'] })
], Steps.prototype, "mutationListener", null);
__decorate([
  ListenToBreakpoints()
], Steps.prototype, "breakpointListener", null);
let StepsIds = 0;
