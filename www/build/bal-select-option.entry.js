import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';

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
const SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = undefined;
    this.disabled = false;
    this.value = undefined;
    this.for = `bal-selopt-${selectOptionIds++}`;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    return (h(Host, { style: { display: 'none' } }, h("slot", null)));
  }
};
__decorate([
  Logger('bal-select-option')
], SelectOption.prototype, "createLogger", null);
let selectOptionIds = 0;

export { SelectOption as bal_select_option };
