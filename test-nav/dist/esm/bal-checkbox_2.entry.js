import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { s as stopEventBubbling, c as inputSetFocus, d as inputSetBlur } from './form-input-fd2d14ca.js';
import { i as isDescendant, p as hasTagName } from './helpers-08b28736.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { B as BEM } from './bem-1b28532d.js';
import { c as isSpaceKey, g as areArraysEqual } from './index.esm-df73647b.js';
import { L as Logger } from './log-01623e2c.js';
import { FOCUS_KEYS } from './focus-visible-06bce1ff.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import { l as lodash_isfunction } from './index-cc65892d.js';
import { L as ListenToMutation } from './mutation.decorator-96ae606b.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './index-82aff103.js';
import './_commonjsHelpers-ba3f0406.js';
import './listener-ea90dc02.js';

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
const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balChange = createEvent(this, "balChange", 7);
    this.inputId = `bal-cb-${checkboxIds++}`;
    this.inheritedAttributes = {};
    this.keyboardMode = true;
    this.initialValue = false;
    this.onKeypress = (ev) => {
      if (isSpaceKey(ev)) {
        const element = ev.target;
        if (element.href) {
          return;
        }
        if (element.nodeName === 'INPUT' && !this.disabled && !this.readonly) {
          this.toggleChecked();
          ev.preventDefault();
        }
        else {
          stopEventBubbling(ev);
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
        stopEventBubbling(ev);
      }
    };
    this.onFocus = (ev) => {
      if (this.disabled || this.readonly) {
        this.focused = false;
        return stopEventBubbling(ev);
      }
      this.balFocus.emit(ev);
      if (this.keyboardMode) {
        this.focused = true;
      }
    };
    this.onBlur = (ev) => {
      if (this.disabled || this.readonly) {
        return stopEventBubbling(ev);
      }
      this.balBlur.emit(ev);
      this.focused = false;
    };
    this.onPointerDown = () => (this.keyboardMode = false);
    this.onKeydown = (ev) => (this.keyboardMode = FOCUS_KEYS.includes(ev.key));
    this.hasLabel = true;
    this.focused = false;
    this.buttonTabindex = undefined;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.label = '';
    this.invisible = false;
    this.labelHidden = false;
    this.flat = false;
    this.interface = 'checkbox';
    this.value = 'on';
    this.checked = false;
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
    const groupEl = this.group;
    const checkboxButton = this.checkboxButton;
    if (checkboxButton || groupEl) {
      this.updateState();
    }
    if (groupEl) {
      groupEl.addEventListener('balChange', () => this.updateState());
    }
    this.initialValue = this.checked;
    this.el.addEventListener('keydown', this.onKeydown);
    this.el.addEventListener('touchstart', this.onPointerDown);
    this.el.addEventListener('mousedown', this.onPointerDown);
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  disconnectedCallback() {
    if (this.group) {
      this.group.removeEventListener('balChange', () => this.updateState());
    }
    this.el.removeEventListener('keydown', this.onKeydown);
    this.el.removeEventListener('touchstart', this.onPointerDown);
    this.el.removeEventListener('mousedown', this.onPointerDown);
  }
  listenOnClick(ev) {
    if ((this.disabled || this.readonly) &&
      ev.target &&
      (ev.target === this.el || isDescendant(this.el, ev.target))) {
      stopEventBubbling(ev);
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.checked = this.initialValue;
    }
  }
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async getOption() {
    return this.option;
  }
  async setButtonTabindex(value) {
    if (this.checkboxButton) {
      this.buttonTabindex = -1;
    }
    else {
      this.buttonTabindex = value;
    }
  }
  async updateState() {
    if (this.group && this.group.control && Array.isArray(this.group.value)) {
      const newChecked = this.group.value.includes(this.value);
      if (newChecked !== this.checked) {
        this.checked = newChecked;
      }
    }
    if (this.checkboxButton) {
      this.buttonTabindex = -1;
      if (this.checkboxButton.setChecked) {
        this.checkboxButton.setChecked(this.checked);
      }
    }
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  get option() {
    return {
      name: this.name,
      value: this.value,
      checked: this.checked,
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
  get group() {
    return this.el.closest('bal-checkbox-group');
  }
  get checkboxButton() {
    return this.el.closest('bal-checkbox-button');
  }
  toggleChecked() {
    this.checked = !this.checked;
    this.balChange.emit(this.checked);
  }
  render() {
    const block = BEM.block('radio-checkbox');
    const inputEl = block.element('input');
    const labelEl = block.element('label');
    const labelTextEl = labelEl.element('text');
    const focused = this.focused && this.buttonTabindex !== -1;
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
    return (h(Host, { role: "checkbox", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-hidden": this.disabled ? 'true' : null, "aria-focused": focused ? 'true' : null, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'bal-focused': focused }, block.class()), block.modifier('checkbox').class()), block.modifier('select-button').class(this.interface === 'select-button')), block.modifier('switch').class(this.interface === 'switch')), block.modifier('focused').class(this.focused)), block.modifier('invalid').class(this.invalid)), block.modifier('checked').class(this.checked)), block.modifier('invisible').class(this.invisible)), block.modifier('flat').class(this.flat)), block.modifier('disabled').class(this.disabled || this.readonly)), block.modifier('hovered').class(this.hovered)), block.modifier('pressed').class(this.pressed)), onKeypress: this.onKeypress, onClick: this.onClick }, h("input", Object.assign({ class: Object.assign(Object.assign({}, inputEl.class()), inputEl.modifier('select-button').class(this.interface === 'select-button')), "data-testid": "bal-checkbox-input", type: "checkbox", id: id, "aria-labelledby": labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.checked}`, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled || this.hidden, readonly: this.readonly, required: this.required, onFocus: this.onFocus, onBlur: this.onBlur, ref: inputEl => (this.nativeInput = inputEl) }, inputAttributes)), !this.invisible ? (h(LabelTag, Object.assign({ class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, labelEl.class()), labelEl.modifier('checkbox').class()), labelEl.modifier('checked').class(this.checked)), labelEl.modifier('hidden').class(this.labelHidden)), labelEl.modifier('flat').class(this.flat)), labelEl.modifier('switch').class(this.interface === 'switch')) }, labelAttributes, { "data-testid": "bal-checkbox-label" }), h("span", { class: Object.assign(Object.assign(Object.assign({}, labelTextEl.class()), labelTextEl.modifier('hidden').class(this.labelHidden)), labelTextEl.modifier('flat').class(this.flat)), "data-testid": "bal-checkbox-text" }, this.label, h("slot", null)))) : ('')));
  }
  get el() { return getElement(this); }
};
__decorate$1([
  Logger('bal-checkbox')
], Checkbox.prototype, "createLogger", null);
let checkboxIds = 0;
Checkbox.style = {
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
const CheckboxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.inputId = `bal-cg-${checkboxGroupIds++}`;
    this.inheritedAttributes = {};
    this.mutationObserverActive = true;
    this.onClick = (ev) => {
      if (!this.control) {
        return;
      }
      const element = ev.target;
      if (element.href) {
        return;
      }
      ev.preventDefault();
      const selectedCheckbox = ev.target && ev.target.closest('bal-checkbox');
      if (selectedCheckbox) {
        if (selectedCheckbox.disabled || selectedCheckbox.readonly) {
          return ev.stopPropagation();
        }
      }
      const newValue = [];
      this.getCheckboxes().forEach(cb => {
        if (cb.checked) {
          newValue.push(cb.value);
        }
      });
      if (!areArraysEqual(this.value, newValue)) {
        this.value = [...newValue];
        this.balChange.emit(this.value);
      }
    };
    this.onOptionChange = async () => {
      this.sync();
    };
    this.ariaForm = defaultBalAriaForm;
    this.options = undefined;
    this.interface = undefined;
    this.control = false;
    this.name = this.inputId;
    this.vertical = false;
    this.verticalOnMobile = false;
    this.expanded = false;
    this.disabled = undefined;
    this.readonly = undefined;
    this.value = [];
    this.columns = 1;
    this.columnsTablet = 1;
    this.columnsMobile = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    if (this.control) {
      this.onOptionChange();
      this.mutationObserverActive = this.options === undefined;
    }
  }
  disabledChanged(value) {
    if (this.control) {
      if (value !== undefined) {
        this.getCheckboxes().forEach(child => {
          child.disabled = value;
        });
      }
    }
  }
  readonlyChanged(value) {
    if (this.control) {
      if (value !== undefined) {
        this.getCheckboxes().forEach(child => {
          child.readonly = value;
        });
      }
    }
  }
  valueChanged(_value, oldValue) {
    if (this.control) {
      if (!areArraysEqual(this.value, oldValue)) {
        this.onOptionChange();
      }
    }
    else {
      this.onOptionChange();
    }
  }
  columnsChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSize = value));
  }
  columnsTabletChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSizeTablet = value));
  }
  columnsMobileChanged(value) {
    this.getCheckboxButtons().forEach(checkboxButton => (checkboxButton.colSizeMobile = value));
  }
  connectedCallback() {
    if (this.control) {
      this.mutationObserverActive = this.options === undefined;
    }
  }
  componentWillLoad() {
    if (this.control) {
      this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
      this.disabledChanged(this.disabled);
      this.readonlyChanged(this.readonly);
    }
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  mutationListener() {
    if (this.control) {
      this.disabledChanged(this.disabled);
      this.readonlyChanged(this.readonly);
    }
    this.columnsChanged(this.columns);
    this.columnsTabletChanged(this.columnsTablet);
    this.columnsMobileChanged(this.columnsMobile);
    this.onOptionChange();
  }
  listenOnClick(ev) {
    if (this.control) {
      if (isDescendant(this.el, ev.target)) {
        stopEventBubbling(ev);
      }
    }
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      if (this.control) {
        this.value = [];
      }
      this.onOptionChange();
    }
  }
  checkboxFocusListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-checkbox')) {
      stopEventBubbling(ev);
      this.balFocus.emit(ev.detail);
    }
  }
  checkboxBlurListener(ev) {
    const { target } = ev;
    if (target && isDescendant(this.el, target) && hasTagName(target, 'bal-checkbox')) {
      stopEventBubbling(ev);
      this.balBlur.emit(ev.detail);
    }
  }
  async setValue(value) {
    if (this.control) {
      this.value = value;
    }
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
  sync() {
    if (this.control) {
      const isChecked = (checkbox) => {
        for (let index = 0; index < this.value.length; index++) {
          const valueItem = this.value[index];
          if (valueItem !== undefined && valueItem.toString() === checkbox.value.toString()) {
            return true;
          }
        }
        return false;
      };
      this.getCheckboxes().forEach((checkbox) => {
        checkbox.checked = isChecked(checkbox);
      });
    }
    this.getCheckboxes().forEach((checkbox) => {
      if (this.interface) {
        checkbox.interface = this.interface;
      }
    });
  }
  getCheckboxes() {
    return Array.from(this.el.querySelectorAll('bal-checkbox'));
  }
  getCheckboxButtons() {
    return Array.from(this.el.querySelectorAll('bal-checkbox-button'));
  }
  render() {
    const block = BEM.block('radio-checkbox-group');
    const innerEl = block.element('inner');
    const rawOptions = this.options || [];
    const options = rawOptions.map(option => {
      if (lodash_isfunction(option.html)) {
        return Object.assign(Object.assign({}, option), { html: option.html() });
      }
      return option;
    });
    return (h(Host, Object.assign({ class: Object.assign({}, block.class()), role: "group", "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, onClick: this.onClick }, this.inheritedAttributes), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, innerEl.class()), innerEl.modifier('vertical-mobile').class(this.verticalOnMobile)), innerEl.modifier('vertical').class(this.vertical)), innerEl.modifier('expanded').class(this.expanded)), innerEl.modifier('select-button').class(this.interface === 'select-button')) }, h("slot", null), options.map(option => (h("bal-checkbox", { name: option.name, value: option.value, labelHidden: option.labelHidden, flat: option.flat, interface: option.interface, disabled: option.disabled, readonly: option.readonly, required: option.required, hidden: option.hidden, invalid: option.invalid, innerHTML: option.html }))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"],
    "value": ["valueChanged"],
    "columns": ["columnsChanged"],
    "columnsTablet": ["columnsTabletChanged"],
    "columnsMobile": ["columnsMobileChanged"]
  }; }
};
__decorate([
  Logger('bal-checkbox-group')
], CheckboxGroup.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-checkbox-group', 'bal-checkbox'], attributes: false, characterData: false })
], CheckboxGroup.prototype, "mutationListener", null);
let checkboxGroupIds = 0;

export { Checkbox as bal_checkbox, CheckboxGroup as bal_checkbox_group };
