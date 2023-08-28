'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const helpers = require('./helpers-83a73189.js');
const bem = require('./bem-5d122a5c.js');
const focusVisible = require('./focus-visible-2cccbc04.js');
const log = require('./log-911f84ec.js');
const attributes = require('./attributes-fa738cf7.js');
const formInput = require('./form-input-7611e5c9.js');
const index_esm = require('./index.esm-edff2e0c.js');
const form = require('./form-9af6cd7d.js');
const index$1 = require('./index-c4d0b927.js');
const mutation_decorator = require('./mutation.decorator-2974f261.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');
require('./index-e6a233be.js');
require('./_commonjsHelpers-bcc1208a.js');
require('./listener-4161102f.js');

const radioCheckboxCss = "@media (hover: hover)and (pointer: fine){.bal-radio-checkbox.bal-focused .bal-radio-checkbox__input:not(.bal-radio-checkbox__input--select-button)+.bal-radio-checkbox__label::before,.bal-radio-checkbox.bal-focused.bal-radio-checkbox--select-button{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}:root{--bal-radio-checkbox-select-button-background-hover:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-active:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-checked:var(--bal-color-primary);--bal-radio-checkbox-select-button-background-checked-hover:var(--bal-color-light-blue-5);--bal-radio-checkbox-select-button-background-checked-active:var(--bal-color-blue-6);--bal-radio-checkbox-select-button-background-invalid:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-hover:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-active:var(--bal-color-danger-1);--bal-radio-checkbox-select-button-background-invalid-checked:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-background-invalid-checked-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-background-invalid-checked-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-background-disabled-hover-active:var(--bal-color-grey-2);--bal-radio-checkbox-select-button-background-disabled-checked-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-before:var(--bal-color-blue-1);--bal-radio-checkbox-switch-label-background-after:var(--bal-color-primary);--bal-radio-checkbox-switch-label-background-hover-after:var(--bal-color-light-blue-5);--bal-radio-checkbox-switch-label-background-active-after:var(--bal-color-blue-6);--bal-radio-checkbox-switch-label-background-checked-before:var(--bal-color-success-4);--bal-radio-checkbox-switch-label-background-checked-after:var(--bal-color-white);--bal-radio-checkbox-switch-label-background-checked-hover-before:var(--bal-color-success-5);--bal-radio-checkbox-switch-label-background-checked-active-before:var(--bal-color-success-6);--bal-radio-checkbox-switch-label-background-invalid-before:var(--bal-color-danger-1);--bal-radio-checkbox-switch-label-background-invalid-after:var(--bal-color-border-danger);--bal-radio-checkbox-switch-label-background-invalid-hover-after:var(--bal-color-danger-6);--bal-radio-checkbox-switch-label-background-invalid-active-after:var(--bal-color-border-danger);--bal-radio-checkbox-switch-label-background-invalid-checked-before:var(--bal-color-danger-4);--bal-radio-checkbox-switch-label-background-invalid-checked-after:var(--bal-color-white);--bal-radio-checkbox-switch-label-background-invalid-checked-hover-before:var(--bal-color-danger-5);--bal-radio-checkbox-switch-label-background-invalid-checked-active-before:var(--bal-color-danger-6);--bal-radio-checkbox-switch-label-background-disabled-hover-active-before:var(--bal-color-grey-3);--bal-radio-checkbox-switch-label-background-disabled-hover-active-after:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-before:var(--bal-color-border-grey-dark);--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-after:var(--bal-color-white);--bal-radio-checkbox-button-background:var(--bal-color-transparent);--bal-radio-checkbox-button-background-checked-green:var(--bal-color-green-1);--bal-radio-checkbox-button-background-checked-purple:var(--bal-color-purple-1);--bal-radio-checkbox-button-background-checked-red:var(--bal-color-red-1);--bal-radio-checkbox-button-background-checked-yellow:var(--bal-color-yellow-1);--bal-radio-checkbox-button-background-disabled:var(--bal-color-grey-1);--bal-radio-checkbox-button-background-hover:var(--bal-color-grey-1);--bal-radio-checkbox-select-button-border-color:var(--bal-color-primary);--bal-radio-checkbox-select-button-border-color-hover:var(--bal-color-light-blue-5);--bal-radio-checkbox-select-button-border-color-active:var(--bal-color-blue-6);--bal-radio-checkbox-select-button-border-color-invalid:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-border-color-invalid-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-border-color-invalid-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-border-color-invalid-checked:var(--bal-color-border-danger);--bal-radio-checkbox-select-button-border-color-invalid-checked-hover:var(--bal-color-danger-5);--bal-radio-checkbox-select-button-border-color-invalid-checked-active:var(--bal-color-danger-6);--bal-radio-checkbox-select-button-border-color-disabled-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-select-button-border-color-disabled-checked-hover-active:var(--bal-color-border-grey-dark);--bal-radio-checkbox-button-border-color-hover:var(--bal-color-border-light-blue);--bal-radio-checkbox-button-border-color-active:var(--bal-color-border-primary-dark);--bal-radio-checkbox-button-border-color-invalid-hover:var(--bal-color-border-danger-dark);--bal-radio-checkbox-button-border-color-invalid-active:var(--bal-color-border-danger-darker);--bal-radio-checkbox-button-border-color:var(--bal-color-border-grey);--bal-radio-checkbox-button-border-color-checked:var(--bal-color-border-primary);--bal-radio-checkbox-button-border-color-disabled:var(--bal-color-border-grey-dark);--bal-radio-checkbox-button-border-color-invalid:var(--bal-color-border-danger)}bal-radio .bal-radio-checkbox__label::before,bal-radio .bal-radio-checkbox__label::after{margin-top:0px !important}.bal-radio-checkbox-group{display:inline-block;position:relative;width:100%}.bal-radio-checkbox-group__inner{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:var(--bal-space-normal)}.bal-radio-checkbox-group__inner--select-button{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1;flex:1;gap:var(--bal-space-x-small)}@media screen and (min-width: 769px),print{.bal-radio-checkbox-group__inner--select-button{-ms-flex-direction:row;flex-direction:row}}.bal-radio-checkbox-group__inner--expanded{-ms-flex-align:stretch;align-items:stretch}.bal-radio-checkbox-group__inner--expanded .bal-radio-checkbox{-ms-flex:1;flex:1}@media screen and (max-width: 768px){.bal-radio-checkbox-group__inner--expanded .bal-radio-checkbox{width:100%}}.bal-radio-checkbox-group__inner--select-button.bal-radio-checkbox-group__inner--vertical{gap:var(--bal-space-x-small)}.bal-radio-checkbox-group__inner--vertical{-ms-flex-direction:column;flex-direction:column;border-radius:var(--bal-radius-normal);gap:var(--bal-space-none)}@media screen and (min-width: 769px),print{.bal-radio-checkbox-group__inner--vertical{-ms-flex-align:start;align-items:flex-start}}@media screen and (max-width: 768px){.bal-radio-checkbox-group__inner--vertical-mobile{-ms-flex-direction:column;flex-direction:column;border-radius:var(--bal-radius-normal);gap:var(--bal-space-none)}}.bal-radio-checkbox{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;outline:none;min-width:1.5rem;min-height:3rem}.bal-radio-checkbox--flat:not(.bal-radio-checkbox--select-button){min-height:1.5rem}.bal-radio-checkbox__input{position:absolute !important;left:0;top:0;margin:0;padding:0;opacity:0;outline:0;border:none;width:1px;height:1px;clip:rect(1px, 1px, 1px, 1px);overflow:hidden}.bal-radio-checkbox--invisible{position:absolute !important;left:0;top:0;margin:0;padding:0;opacity:0;outline:0;border:none;width:1px;height:1px;clip:rect(1px, 1px, 1px, 1px);overflow:hidden}.bal-radio-checkbox:not(.bal-radio-checkbox--disabled),.bal-radio-checkbox:not(.bal-radio-checkbox--disabled) input,.bal-radio-checkbox:not(.bal-radio-checkbox--disabled) input+label,.bal-radio-checkbox:not(.bal-radio-checkbox--disabled) input+label>span{cursor:pointer}.bal-radio-checkbox__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1.5rem;contain:layout style;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:left;min-height:1.5rem;font-family:var(--bal-font-family-text)}@media screen and (min-width: 769px),print{.bal-radio-checkbox__label{margin:0}}@media screen and (min-width: 1024px){.bal-radio-checkbox__label{margin:0}}.bal-radio-checkbox__label__text{padding-left:2rem;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding-top:4px;padding-bottom:4px}.bal-radio-checkbox__label__text--hidden{padding-left:0;display:none}.bal-radio-checkbox__label__text--flat{padding-top:0;padding-bottom:0}.bal-radio-checkbox__label--flat:not(.bal-radio-checkbox--select-button)::before,.bal-radio-checkbox__label--flat:not(.bal-radio-checkbox--select-button)::after{top:0px !important}.bal-radio-checkbox__label--hidden::before,.bal-radio-checkbox__label--hidden::after{top:0px !important}.bal-radio-checkbox__label::before,.bal-radio-checkbox__label::after{display:inline-block;position:absolute;left:0;top:4px;height:1.5rem;width:1.5rem;background-color:rgba(0,0,0,0);background-position:center;background-repeat:no-repeat;background-size:1.5rem 1.5rem}.bal-radio-checkbox__label::before{content:\"\";border-style:var(--bal-form-field-control-border-style);border-width:2px}.bal-radio-checkbox__label::after{content:none}.bal-radio-checkbox__label--checked::after{content:\"\"}.bal-radio-checkbox__label--radio::before,.bal-radio-checkbox__label--radio::after{border-radius:50%}.bal-radio-checkbox__label--radio::after{left:0;-webkit-transform:scale(0.25);transform:scale(0.25)}.bal-radio-checkbox__label--checkbox::before{border-radius:var(--bal-form-field-control-radius)}.bal-radio-checkbox__label--checkbox::after{border-top:0;border-right-style:var(--bal-form-field-control-border-style);border-right-width:2px;border-bottom-style:var(--bal-form-field-control-border-style);border-bottom-width:2px;border-left:0;border-radius:1px;width:7px;height:13px;left:9px;margin-top:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bal-radio-checkbox .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-primary);background:var(--bal-color-transparent)}.bal-radio-checkbox .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-primary)}.bal-radio-checkbox .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-primary)}.bal-radio-checkbox:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-light-blue-5);background:var(--bal-color-grey-2)}.bal-radio-checkbox:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-light-blue-5)}.bal-radio-checkbox:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-light-blue-5)}.bal-radio-checkbox:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-blue-6);background:var(--bal-color-grey-2)}.bal-radio-checkbox:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-blue-6)}.bal-radio-checkbox:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-blue-6)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-border-danger);background:var(--bal-color-danger-1)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-white)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-danger)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-white);border-bottom-color:var(--bal-color-white)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-danger)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-danger-5);background:var(--bal-color-danger-1)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-5)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-5)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-danger-6);background:var(--bal-color-danger-1)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-6)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-6)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-border-grey-dark);background:var(--bal-color-grey-2)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-grey-dark)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-grey-dark)}.bal-radio-checkbox .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-primary)}.bal-radio-checkbox:hover .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--hovered .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-light-blue-5)}.bal-radio-checkbox:active .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--pressed .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-blue-6)}.bal-radio-checkbox--invalid .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-border-danger)}.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--invalid.bal-radio-checkbox--hovered .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-danger-5)}.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--invalid.bal-radio-checkbox--pressed .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-danger-6)}.bal-radio-checkbox--disabled .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--disabled.bal-radio-checkbox--hovered .bal-radio-checkbox__label .bal-radio-checkbox__label__text,.bal-radio-checkbox--disabled.bal-radio-checkbox--pressed .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-text-grey)}.bal-radio-checkbox--select-button{padding-left:.75rem;padding-right:.75rem;min-width:3rem;border-width:2px;border-style:var(--bal-form-field-control-border-style);border-radius:var(--bal-form-field-control-radius);border-color:var(--bal-radio-checkbox-select-button-border-color)}.bal-radio-checkbox--select-button:hover{border-color:var(--bal-radio-checkbox-select-button-border-color-hover);background:var(--bal-radio-checkbox-select-button-background-hover)}.bal-radio-checkbox--select-button:active{border-color:var(--bal-radio-checkbox-select-button-border-color-active);background:var(--bal-radio-checkbox-select-button-background-active)}.bal-radio-checkbox--select-button label::before{top:unset}.bal-radio-checkbox--select-button label::after{top:unset;margin-top:-3px}.bal-radio-checkbox--select-button .bal-radio-checkbox__label--flat::before{top:unset !important}.bal-radio-checkbox--select-button .bal-radio-checkbox__label--flat::after{margin-top:-3px;top:unset !important}.bal-radio-checkbox--select-button .bal-radio-checkbox__label--flat .bal-radio-checkbox__label__text--flat{padding-top:4px;padding-bottom:4px}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked{background:var(--bal-radio-checkbox-select-button-background-checked)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label .bal-radio-checkbox__label__text .is-link{color:var(--bal-radio-checkbox-select-button-link-text-color-checked)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover{background:var(--bal-radio-checkbox-select-button-background-checked-hover)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active{background:var(--bal-radio-checkbox-select-button-background-checked-active)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-primary-inverted);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-primary-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-primary)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-primary-inverted);border-bottom-color:var(--bal-color-primary-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-primary)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-primary-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-light-blue-5-inverted);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-light-blue-5-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-light-blue-5)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-light-blue-5-inverted);border-bottom-color:var(--bal-color-light-blue-5-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-light-blue-5)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-light-blue-5-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-blue-6-inverted);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-blue-6-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-blue-6)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-blue-6-inverted);border-bottom-color:var(--bal-color-blue-6-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-blue-6)}.bal-radio-checkbox--select-button.bal-radio-checkbox--checked:active .bal-radio-checkbox__label .bal-radio-checkbox__label__text{color:var(--bal-color-blue-6-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid);background:var(--bal-radio-checkbox-select-button-background-invalid)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid .bal-radio-checkbox__label .bal-radio-checkbox__label__text .is-link{color:var(--bal-form-field-label-danger-color)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid:hover{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid-hover);background:var(--bal-radio-checkbox-select-button-background-invalid-hover)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid:active{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid-active);background:var(--bal-radio-checkbox-select-button-background-invalid-active)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid-checked);background:var(--bal-radio-checkbox-select-button-background-invalid-checked)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid-checked-hover);background:var(--bal-radio-checkbox-select-button-background-invalid-checked-hover)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active{border-color:var(--bal-radio-checkbox-select-button-border-color-invalid-checked-active);background:var(--bal-radio-checkbox-select-button-background-invalid-checked-active)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-white);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-white)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-danger)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-white);border-bottom-color:var(--bal-color-white)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-danger)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-danger-5-inverted);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-danger-5-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-5)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-danger-5-inverted);border-bottom-color:var(--bal-color-danger-5-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-5)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-danger-6-inverted);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-danger-6-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-6)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-danger-6-inverted);border-bottom-color:var(--bal-color-danger-6-inverted)}.bal-radio-checkbox--select-button.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-danger-6)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled:hover,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled:active{border-color:var(--bal-radio-checkbox-select-button-border-color-disabled-hover-active);background:var(--bal-radio-checkbox-select-button-background-disabled-hover-active)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled .bal-radio-checkbox__label .bal-radio-checkbox__label__text .is-link,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label .bal-radio-checkbox__label__text .is-link,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label .bal-radio-checkbox__label__text .is-link{color:var(--bal-form-field-label-disabled-color)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active{border-color:var(--bal-radio-checkbox-select-button-border-color-disabled-checked-hover-active);background:var(--bal-radio-checkbox-select-button-background-disabled-checked-hover-active)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch)::before{border-color:var(--bal-color-white);background:var(--bal-color-transparent)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::after{background:var(--bal-color-white)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--radio.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-grey-dark)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox::after{border-right-color:var(--bal-color-white);border-bottom-color:var(--bal-color-white)}.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before,.bal-radio-checkbox--select-button.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label:not(.bal-radio-checkbox__label--switch).bal-radio-checkbox__label--checkbox.bal-radio-checkbox__label--checked::before{background:var(--bal-color-border-grey-dark)}.bal-radio-checkbox--switch{min-width:2.5rem}.bal-radio-checkbox--switch .bal-radio-checkbox__label{padding-left:1rem}.bal-radio-checkbox--switch .bal-radio-checkbox__label::before{border-radius:1.5rem;position:absolute;display:block;top:0;left:0;width:2.5rem;height:1.5rem;border:1.6px solid rgba(0,0,0,0);content:\"\";-webkit-transition:left .25s ease-out,background .25s ease-out;transition:left .25s ease-out,background .25s ease-out;margin-top:4px}.bal-radio-checkbox--switch .bal-radio-checkbox__label::after{border:none;margin:0;border-radius:50%;display:block;position:absolute;top:.25rem !important;left:.25rem;width:1rem;height:1rem;margin-top:4px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:left .25s ease-out,background .25s ease-out;transition:left .25s ease-out,background .25s ease-out;content:\"\"}.bal-radio-checkbox--switch .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-before)}.bal-radio-checkbox--switch .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-after)}.bal-radio-checkbox--switch:hover .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-hover-after)}.bal-radio-checkbox--switch:active .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-active-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--checked .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-checked-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--checked .bal-radio-checkbox__label::after{left:1.25rem;background:var(--bal-radio-checkbox-switch-label-background-checked-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-checked-hover-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--checked:active .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-checked-active-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-invalid-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-invalid-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid:hover .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-invalid-hover-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid:active .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-invalid-active-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-invalid-checked-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid.bal-radio-checkbox--checked .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-invalid-checked-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-invalid-checked-hover-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--invalid.bal-radio-checkbox--checked:active .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-invalid-checked-active-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--disabled .bal-radio-checkbox__label::before,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label::before,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-disabled-hover-active-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--disabled .bal-radio-checkbox__label::after,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled:hover .bal-radio-checkbox__label::after,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled:active .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-disabled-hover-active-after)}.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label::before,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label::before,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label::before{background:var(--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-before)}.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked .bal-radio-checkbox__label::after,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:hover .bal-radio-checkbox__label::after,.bal-radio-checkbox--switch.bal-radio-checkbox--disabled.bal-radio-checkbox--checked:active .bal-radio-checkbox__label::after{background:var(--bal-radio-checkbox-switch-label-background-disabled-checked-hover-active-after)}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Radio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balFocus = index.createEvent(this, "balFocus", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.inputId = `bal-rb-${radioIds++}`;
    this.inheritedAttributes = {};
    this.keyboardMode = true;
    this.onKeypress = (ev) => {
      if (index_esm.isSpaceKey(ev)) {
        const element = ev.target;
        if (element.href) {
          return;
        }
        if (element.nodeName === 'INPUT' && !this.disabled && !this.readonly) {
          this.toggleChecked();
          ev.preventDefault();
        }
        else {
          formInput.stopEventBubbling(ev);
        }
      }
    };
    this.onClick = (ev) => {
      var _a;
      const element = ev.target;
      if (element.href) {
        return;
      }
      if (element.nodeName !== 'INPUT' && !this.disabled && !this.readonly) {
        this.toggleChecked();
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        ev.preventDefault();
      }
      else {
        formInput.stopEventBubbling(ev);
      }
    };
    this.onFocus = (ev) => {
      if (this.disabled || this.readonly) {
        this.focused = false;
        return formInput.stopEventBubbling(ev);
      }
      this.balFocus.emit(ev);
      if (this.keyboardMode) {
        this.focused = true;
      }
    };
    this.onBlur = (ev) => {
      if (this.disabled || this.readonly) {
        return formInput.stopEventBubbling(ev);
      }
      this.balBlur.emit(ev);
      this.focused = false;
    };
    this.onPointerDown = () => (this.keyboardMode = false);
    this.onKeydown = (ev) => (this.keyboardMode = focusVisible.FOCUS_KEYS.includes(ev.key));
    this.checked = false;
    this.focused = false;
    this.buttonTabindex = undefined;
    this.ariaForm = form.defaultBalAriaForm;
    this.name = this.inputId;
    this.value = undefined;
    this.label = '';
    this.invisible = false;
    this.labelHidden = false;
    this.flat = false;
    this.interface = 'radio';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.hidden = false;
    this.invalid = false;
    this.hovered = false;
    this.pressed = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioButton = this.radioButton;
    const radioGroup = this.radioGroup;
    if (radioButton || radioGroup) {
      this.updateState();
    }
    if (radioGroup) {
      radioGroup.addEventListener('balInput', this.updateState);
    }
    this.el.addEventListener('keydown', this.onKeydown);
    this.el.addEventListener('touchstart', this.onPointerDown);
    this.el.addEventListener('mousedown', this.onPointerDown);
  }
  componentWillLoad() {
    this.inheritedAttributes = attributes.inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      radioGroup.removeEventListener('balInput', this.updateState);
    }
    this.el.removeEventListener('keydown', this.onKeydown);
    this.el.removeEventListener('touchstart', this.onPointerDown);
    this.el.removeEventListener('mousedown', this.onPointerDown);
  }
  listenOnClick(ev) {
    if ((this.disabled || this.readonly) &&
      ev.target &&
      (ev.target === this.el || helpers.isDescendant(this.el, ev.target))) {
      formInput.stopEventBubbling(ev);
    }
  }
  async setFocus(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.nativeInput.focus();
    this.focused = true;
  }
  async setButtonTabindex(value) {
    if (this.radioButton) {
      this.buttonTabindex = -1;
    }
    else {
      this.buttonTabindex = value;
    }
  }
  async getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async getOption() {
    return this.option;
  }
  async updateState() {
    if (this.radioGroup) {
      const newChecked = this.radioGroup.value === this.value;
      if (newChecked !== this.checked) {
        this.checked = newChecked;
      }
    }
    if (this.radioButton) {
      this.buttonTabindex = -1;
      if (this.radioButton.setChecked) {
        this.radioButton.setChecked(this.checked);
      }
    }
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  get radioButton() {
    return this.el.closest('bal-radio-button');
  }
  get radioGroup() {
    return this.el.closest('bal-radio-group');
  }
  get option() {
    return {
      name: this.name,
      value: this.value,
      label: this.label,
      labelHidden: this.labelHidden,
      flat: this.flat,
      interface: this.interface,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      hidden: this.hidden,
      invisible: this.invisible,
      invalid: this.invalid,
    };
  }
  toggleChecked() {
    this.checked = !this.checked;
    this.balChange.emit(this.checked);
    this.updateState();
  }
  render() {
    const block = bem.BEM.block('radio-checkbox');
    const inputEl = block.element('input');
    const labelEl = block.element('label');
    const labelTextEl = labelEl.element('text');
    const focused = this.focused && this.buttonTabindex !== -1;
    const value = typeof this.value === 'boolean' ? JSON.stringify(this.value) : this.value;
    const inputAttributes = this.inheritedAttributes;
    if (this.buttonTabindex !== undefined) {
      inputAttributes.tabIndex = this.buttonTabindex;
    }
    const id = this.ariaForm.controlId || this.inputId;
    let labelId = this.ariaForm.labelId || null;
    const LabelTag = this.labelHidden ? 'span' : 'label';
    const labelAttributes = {};
    if (!this.labelHidden) {
      labelId = `${labelId || ''} ${id}-lbl`.trim();
      labelAttributes.id = `${id}-lbl`;
      labelAttributes.htmlFor = id;
    }
    return (index.h(index.Host, { role: "radio", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-hidden": this.disabled ? 'true' : null, "aria-focused": focused ? 'true' : null, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'bal-focused': focused }, block.class()), block.modifier('radio').class()), block.modifier('select-button').class(this.interface === 'select-button')), block.modifier('invalid').class(this.invalid)), block.modifier('checked').class(this.checked)), block.modifier('flat').class(this.flat)), block.modifier('disabled').class(this.disabled || this.readonly)), block.modifier('hovered').class(this.hovered)), block.modifier('pressed').class(this.pressed)), block.modifier('invisible').class(this.invisible)), onKeypress: this.onKeypress, onClick: this.onClick }, index.h("input", Object.assign({ class: Object.assign(Object.assign({}, inputEl.class()), inputEl.modifier('select-button').class(this.interface === 'select-button')), "data-testid": "bal-radio-input", type: "radio", id: id, "aria-labelledby": labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.checked}`, name: this.name, value: value, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onFocus: this.onFocus, onBlur: this.onBlur, ref: inputEl => (this.nativeInput = inputEl) }, inputAttributes)), !this.invisible ? (index.h(LabelTag, Object.assign({ class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, labelEl.class()), labelEl.modifier('radio').class()), labelEl.modifier('checked').class(this.checked)), labelEl.modifier('hidden').class(this.labelHidden)), labelEl.modifier('flat').class(this.flat)) }, labelAttributes, { "data-testid": "bal-radio-label" }), index.h("span", { class: Object.assign(Object.assign(Object.assign({}, labelTextEl.class()), labelTextEl.modifier('hidden').class(this.labelHidden)), labelTextEl.modifier('flat').class(this.flat)), "data-testid": "bal-radio-text" }, this.label, index.h("slot", null)))) : ('')));
  }
  get el() { return index.getElement(this); }
};
__decorate$1([
  log.Logger('bal-radio')
], Radio.prototype, "createLogger", null);
let radioIds = 0;
Radio.style = {
  css: radioCheckboxCss
};

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
const RadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.balFocus = index.createEvent(this, "balFocus", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.inputId = `bal-rg-${radioGroupIds++}`;
    this.inheritedAttributes = {};
    this.mutationObserverActive = true;
    this.onOptionChange = async () => {
      this.setRadioTabindex(this.value);
      this.setRadioChecked();
    };
    this.setRadioTabindex = (value) => {
      const radios = this.getRadios();
      const first = radios.find(radio => !radio.disabled);
      const checked = radios.find(radio => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = (ev) => {
      const element = ev.target;
      if (element.href) {
        return;
      }
      ev.preventDefault();
      const selectedRadio = ev.target && ev.target.closest('bal-radio');
      if (selectedRadio && !selectedRadio.disabled && !selectedRadio.readonly) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
        }
        else if (this.allowEmptySelection) {
          this.value = undefined;
        }
        this.balChange.emit(this.value);
      }
    };
    this.ariaForm = form.defaultBalAriaForm;
    this.options = undefined;
    this.allowEmptySelection = false;
    this.name = this.inputId;
    this.value = undefined;
    this.interface = undefined;
    this.vertical = false;
    this.verticalOnMobile = false;
    this.expanded = false;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.columns = 1;
    this.columnsTablet = 1;
    this.columnsMobile = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    this.mutationObserverActive = this.options === undefined;
  }
  valueChanged() {
    this.onOptionChange();
  }
  invalidChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.invalid = value;
      });
    }
  }
  disabledChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.disabled = value;
      });
    }
  }
  readonlyChanged(value) {
    if (value !== undefined) {
      this.getRadios().forEach(radio => {
        radio.readonly = value;
      });
    }
  }
  columnsChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSize = value));
  }
  columnsTabletChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSizeTablet = value));
  }
  columnsMobileChanged(value) {
    this.getRadioButtons().forEach(radioButton => (radioButton.colSizeMobile = value));
  }
  connectedCallback() {
    this.initialValue = this.value;
    this.mutationObserverActive = this.options === undefined;
  }
  componentWillLoad() {
    this.setRadioInterface();
    this.disabledChanged(this.disabled);
    this.readonlyChanged(this.readonly);
    this.invalidChanged(this.invalid);
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
    this.inheritedAttributes = attributes.inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  mutationListener() {
    this.setRadioInterface();
    this.disabledChanged(this.disabled);
    this.readonlyChanged(this.readonly);
    this.invalidChanged(this.invalid);
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  listenOnClick(ev) {
    if (helpers.isDescendant(this.el, ev.target)) {
      formInput.stopEventBubbling(ev);
    }
  }
  radioFocusListener(ev) {
    const { target } = ev;
    if (target && helpers.isDescendant(this.el, target) && helpers.hasTagName(target, 'bal-radio')) {
      formInput.stopEventBubbling(ev);
      this.balFocus.emit(ev.detail);
    }
  }
  radioBlurListener(ev) {
    const { target } = ev;
    if (target && helpers.isDescendant(this.el, target) && helpers.hasTagName(target, 'bal-radio')) {
      formInput.stopEventBubbling(ev);
      this.balBlur.emit(ev.detail);
    }
  }
  resetListener(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.value = this.initialValue;
    }
  }
  onKeydown(ev) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    const radios = this.getRadios().filter(radio => !radio.disabled);
    const targetRadio = ev.target.closest('bal-radio');
    if (targetRadio && radios.includes(targetRadio)) {
      const index = radios.findIndex(radio => radio === targetRadio);
      const current = radios[index];
      let next;
      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        this.value = next.value;
        this.balChange.emit(this.value);
      }
      if (['Space'].includes(ev.code)) {
        this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value;
        ev.preventDefault();
      }
    }
  }
  async setValue(value) {
    this.value = value;
  }
  async getOptionByValue(value) {
    const options = this.options;
    if (options) {
      return options.find(option => option.value === value);
    }
    return undefined;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  setRadioInterface() {
    this.getRadios().forEach((radio) => {
      if (this.interface) {
        radio.interface = this.interface;
      }
    });
  }
  setRadioChecked() {
    this.getRadios().forEach((radio) => {
      if (radio.updateState) {
        radio.updateState();
      }
    });
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll('bal-radio'));
  }
  getRadioButtons() {
    return Array.from(this.el.querySelectorAll('bal-radio-button'));
  }
  render() {
    const block = bem.BEM.block('radio-checkbox-group');
    const innerEl = block.element('inner');
    const rawOptions = this.options || [];
    const options = rawOptions.map(option => {
      if (index$1.lodash_isfunction(option.html)) {
        return Object.assign(Object.assign({}, option), { html: option.html() });
      }
      return option;
    });
    return (index.h(index.Host, Object.assign({ class: Object.assign({}, block.class()), role: "radiogroup", "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-disabled": this.disabled ? 'true' : null, onClick: this.onClick }, this.inheritedAttributes), index.h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, index.h("slot", null), options.map(option => (index.h("bal-radio", { name: option.name || this.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "value": ["valueChanged"],
    "invalid": ["invalidChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"],
    "columns": ["columnsChanged"],
    "columnsTablet": ["columnsTabletChanged"],
    "columnsMobile": ["columnsMobileChanged"]
  }; }
};
__decorate([
  log.Logger('bal-radio-group')
], RadioGroup.prototype, "createLogger", null);
__decorate([
  mutation_decorator.ListenToMutation({ tags: ['bal-radio-group', 'bal-radio'], attributes: false, characterData: false })
], RadioGroup.prototype, "mutationListener", null);
let radioGroupIds = 0;

exports.bal_radio = Radio;
exports.bal_radio_group = RadioGroup;
