'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');
const initialize = require('./initialize-4d4da7e2.js');
const log = require('./log-911f84ec.js');
const config_decorator = require('./config.decorator-f5fee2ba.js');
const balLabel_i18n = require('./bal-label.i18n-73829628.js');
const form = require('./form-9af6cd7d.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./index-843a2913.js');

const balLabelCss = ".bal-label{display:inline;-webkit-box-sizing:content-box;box-sizing:content-box;position:static;word-break:break-word}.bal-label__native{display:inline;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:pre;min-width:0;font-family:var(--bal-form-field-label-font-family);font-weight:var(--bal-form-field-label-font-weight);font-size:var(--bal-size-normal);line-height:var(--bal-line-height-normal)}.bal-label__native--multiline{white-space:normal}.bal-label__native--no-wrap{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bal-label__native--small{font-family:var(--bal-font-family-text);font-size:var(--bal-size-small);line-height:var(--bal-line-height-small)}@media screen and (min-width: 769px),print{.bal-label__native--small{font-size:var(--bal-size-tablet-small);line-height:var(--bal-line-height-tablet-small)}}@media screen and (min-width: 1024px){.bal-label__native--small{font-size:var(--bal-size-desktop-small);line-height:var(--bal-line-height-desktop-small)}}.bal-label__native--large{font-family:var(--bal-font-family-title);font-size:var(--bal-size-large);line-height:var(--bal-line-height-large)}@media screen and (min-width: 769px),print{.bal-label__native--large{font-size:var(--bal-size-tablet-large);line-height:var(--bal-line-height-tablet-large)}}@media screen and (min-width: 1024px){.bal-label__native--large{font-size:var(--bal-size-desktop-large);line-height:var(--bal-line-height-desktop-large)}}.bal-label__native--success{color:var(--bal-form-field-label-success-color)}.bal-label__native--danger{color:var(--bal-form-field-label-danger-color)}.bal-label__native--disabled{color:var(--bal-form-field-label-disabled-color) !important}.bal-label__native--regular{font-weight:var(--bal-weight-regular)}.bal-label__native--hovered{color:var(--bal-form-field-label-color-hover)}.bal-label__native--pressed{color:var(--bal-form-field-label-color-active)}.bal-label__native--danger.bal-label__native--hovered{color:var(--bal-form-field-label-danger-color-hover)}.bal-label__native--danger.bal-label__native--pressed{color:var(--bal-form-field-label-danger-color-active)}";

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
const BalLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputId = `bal-lbl-${labelIds++}`;
    this.language = initialize.defaultConfig.language;
    this.region = initialize.defaultConfig.region;
    this.ariaForm = form.defaultBalAriaForm;
    this.htmlFor = undefined;
    this.required = true;
    this.noWrap = false;
    this.multiline = false;
    this.valid = undefined;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.size = '';
    this.weight = 'bold';
    this.hovered = false;
    this.pressed = false;
  }
  createLogger(log) {
    this.log = log;
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    const block = bem.BEM.block('label');
    const suffix = this.required === false ? balLabel_i18n.i18nBalLabel[this.language].optional || '' : '';
    const disabled = !!this.disabled || !!this.readonly;
    const danger = !!this.invalid;
    const success = !!this.valid;
    const regular = this.weight === 'regular';
    const small = this.size === 'small';
    const large = this.size === 'large';
    const id = this.ariaForm.labelId || this.inputId;
    const htmlFor = this.htmlFor || this.ariaForm.controlId;
    return (index.h(index.Host, { class: Object.assign({}, block.class()) }, index.h("label", { id: id, htmlFor: htmlFor, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('native').class()), block.element('native').modifier('multiline').class(this.multiline)), block.element('native').modifier('no-wrap').class(this.noWrap)), block.element('native').modifier('disabled').class(disabled)), block.element('native').modifier('danger').class(danger)), block.element('native').modifier('success').class(success)), block.element('native').modifier('regular').class(regular)), block.element('native').modifier('small').class(small)), block.element('native').modifier('large').class(large)), block.element('native').modifier('hovered').class(this.hovered)), block.element('native').modifier('pressed').class(this.pressed)) }, index.h("slot", null), suffix)));
  }
  get el() { return index.getElement(this); }
};
__decorate([
  log.Logger('bal-label')
], BalLabel.prototype, "createLogger", null);
__decorate([
  config_decorator.ListenToConfig()
], BalLabel.prototype, "configChanged", null);
let labelIds = 0;
BalLabel.style = {
  css: balLabelCss
};

exports.bal_label = BalLabel;
