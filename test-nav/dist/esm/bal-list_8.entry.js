import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import { l as raf, t as transitionEndAsync, d as debounce } from './helpers-08b28736.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import { L as ListenToResize } from './resize.decorator-87610696.js';
import './browser-9199b5e2.js';
import './index-8b8ed6bd.js';
import './icons.constant-35253412.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

const balListCss = ":root{--bal-list-item-radius:var(--bal-radius-normal);--bal-list-item-subtile-color:var(--bal-color-text-primary);--bal-list-item-background-hover:var(--bal-color-light-blue-5);--bal-list-item-background-active:var(--bal-color-primary-6);--bal-list-item-on-dark-color:var(--bal-color-text-white);--bal-list-item-on-dark-background-hover:var(--bal-color-light-blue-2);--bal-list-item-on-dark-background-active:var(--bal-color-light-blue-4);--bal-list-item-disabled-color:var(--bal-color-text-grey);--bal-list-item-disabled-fill:var(--bal-color-grey-5);--bal-list-item-disabled-background:var(--bal-color-grey-2);--bal-list-item-disabled-on-dark-background:var(--bal-color-primary-4);--bal-list-item-disabled-on-dark-color:var(--bal-color-text-grey);--bal-list-item-disabled-on-dark-fill:var(--bal-color-grey-5);--bal-list-item-disabled-on-color-background:var(--bal-color-primary-4);--bal-list-item-disabled-on-color-color:var(--bal-color-primary-4);--bal-list-item-disabled-on-color-fill:var(--bal-color-primary-4);--bal-list-item-border-background:var(--bal-color-grey-2);--bal-list-item-border-on-color-background:var(--bal-color-primary);--bal-list-item-border-on-dark-background:var(--bal-color-primary-4);--bal-list-accordion-head-color-hover:var(--bal-color-text-light-blue);--bal-list-accordion-head-background-hover:var(--bal-color-light-blue-5);--bal-list-accordion-head-color-active:var(--bal-color-text-primary-dark);--bal-list-accordion-head-background-active:var(--bal-color-primary-6);--bal-list-accordion-body-color:var(--bal-color-text-white);--bal-list-accordion-head-on-dark-color-hover:var(--bal-color-light-blue-2);--bal-list-accordion-head-on-dark-background-hover:var(--bal-color-light-blue-2);--bal-list-accordion-head-on-dark-color-active:var(--bal-color-light-blue-3);--bal-list-accordion-head-on-dark-background-active:var(--bal-color-light-blue-3)}.bal-list,.bal-list__item,.bal-list__item>a,.bal-list__item>button,.bal-list__item>div,.bal-list__item__icon,.bal-list__item__title,.bal-list__item__link,.bal-list__item__subtitle,.bal-list__item__content{position:static;display:-ms-flexbox;display:flex}.bal-list,.bal-list__item__content{-ms-flex-direction:column;flex-direction:column}.bal-list__item__title,.bal-list__item__subtitle{text-align:left}.bal-list,.bal-list__item,.bal-list__item>div,.bal-list__item>a,.bal-list__item>button{width:100%}.bal-list__item,.bal-list__item>a,.bal-list__item>div,.bal-list__item>button{-ms-flex-align:center;align-items:center;-webkit-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem}.bal-list__item:not(.bal-list__item__accordion-body),.bal-list__item:not(.bal-list__item__accordion-body)>a,.bal-list__item:not(.bal-list__item__accordion-body)>div,.bal-list__item:not(.bal-list__item__accordion-body)>button{min-height:56px}.bal-list__item>a,.bal-list__item>div,.bal-list__item>button{padding:.5rem 0;margin:0;outline:none;border-radius:var(--bal-list-item-radius)}.bal-list__item{position:relative}.bal-list__item a{text-decoration:none}.bal-list__item button{background:rgba(0,0,0,0);border:none}.bal-list__item__subtitle{color:var(--bal-list-item-subtile-color)}.bal-list__item:not(.bal-list__item__accordion-head),.bal-list__item:not(.bal-list__item__accordion-head)>a,.bal-list__item:not(.bal-list__item__accordion-head)>div,.bal-list__item:not(.bal-list__item__accordion-head)>button,.bal-list__item__content{-ms-flex:1;flex:1}.bal-list__item__content{-ms-flex-pack:center;justify-content:center}.bal-list__item__content--start{-ms-flex-pack:start;justify-content:start}.bal-list__item__content--center{-ms-flex-pack:center;justify-content:center}.bal-list__item__content--end{-ms-flex-pack:end;justify-content:end}.bal-list__item__content--space-between{-ms-flex-pack:justify;justify-content:space-between}.bal-list__item__icon{min-width:24px;min-height:56px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bal-list--size-normal>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head>.bal-list__item__icon,.bal-list--size-normal>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head{min-height:32px}.bal-list--size-small>.bal-list__item:not(.bal-list__item__accordion-body),.bal-list--size-small>.bal-list__item:not(.bal-list__item__accordion-body)>a,.bal-list--size-small>.bal-list__item:not(.bal-list__item__accordion-body)>div,.bal-list--size-small>.bal-list__item:not(.bal-list__item__accordion-body)>button,.bal-list--size-small>.bal-list__item>.bal-list__item__icon{min-height:48px}.bal-list--size-small>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head>.bal-list__item__icon,.bal-list--size-small>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head{min-height:32px}.bal-list--size-large>.bal-list__item:not(.bal-list__item__accordion-body),.bal-list--size-large>.bal-list__item:not(.bal-list__item__accordion-body)>a,.bal-list--size-large>.bal-list__item:not(.bal-list__item__accordion-body)>div,.bal-list--size-large>.bal-list__item:not(.bal-list__item__accordion-body)>button,.bal-list--size-large>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head>.bal-list__item__icon,.bal-list--size-large>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head,.bal-list--size-large>.bal-list__item>.bal-list__item__icon{min-height:72px}.bal-list--size-large>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head>.bal-list__item__icon,.bal-list--size-large>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-head{min-height:56px}.bal-list__item--clickable .bal-list__item__accordion-head,.bal-list__item--clickable a:not(.is-link),.bal-list__item--clickable button:not(.button){cursor:pointer;pointer-events:inherit}@media (hover: hover)and (pointer: fine){.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__subtitle p,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__subtitle p,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__subtitle p{color:var(--bal-list-accordion-head-color-hover) !important}.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg circle,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg circle,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg circle{fill:var(--bal-list-accordion-head-background-hover) !important}}@media screen and (min-width: 1024px){.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__subtitle p,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__subtitle p,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__title .title,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__title .bal-heading__text,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__subtitle p{color:var(--bal-list-accordion-head-color-active) !important}}@media screen and (min-width: 1024px){.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg circle,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg circle,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg g,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg path,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg circle{fill:var(--bal-list-accordion-head-background-active) !important}}.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:focus-visible,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):focus-visible,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):focus-visible{-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable .bal-list__item__accordion-head:focus-visible:after,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable a:not(.is-link):focus-visible:after,.bal-list:not(.is-disabled):not(.bal-list--background-dark) .bal-list__item--clickable button:not(.button):focus-visible:after{content:none !important}.bal-list--background-dark .bal-list__item .bal-list__item__title .title,.bal-list--background-dark .bal-list__item .bal-list__item__title .bal-heading__text,.bal-list--background-dark .bal-list__item .bal-list__item__subtitle p{color:var(--bal-list-item-on-dark-color)}.bal-list--background-dark .bal-list__item__icon svg,.bal-list--background-dark .bal-list__item__icon svg g,.bal-list--background-dark .bal-list__item__icon svg path,.bal-list--background-dark .bal-list__item__icon svg circle{fill:var(--bal-list-item-on-dark-color)}@media (hover: hover)and (pointer: fine){.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__subtitle p{color:var(--bal-list-accordion-head-on-dark-color-hover) !important}.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):hover .bal-list__item__icon svg circle{fill:var(--bal-list-accordion-head-on-dark-background-hover) !important}}@media screen and (min-width: 1024px){.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__subtitle p{color:var(--bal-list-accordion-head-on-dark-color-active) !important}}@media screen and (min-width: 1024px){.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):active .bal-list__item__icon svg circle{fill:var(--bal-list-accordion-head-on-dark-background-active) !important}}.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:focus-visible,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):focus-visible,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):focus-visible{-webkit-box-shadow:var(--bal-focus-shadow-inverted) !important;box-shadow:var(--bal-focus-shadow-inverted) !important}.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable .bal-list__item__accordion-head:focus-visible:after,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable a:not(.is-link):focus-visible:after,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--clickable button:not(.button):focus-visible:after{content:none !important}.bal-list--disabled,.bal-list--disabled .bal-list__item,.bal-list--disabled .bal-list__item a:not(.is-link),.bal-list--disabled .bal-list__item button:not(.button){cursor:default !important;pointer-events:none !important;-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important}.bal-list--border:not(.bal-list--nested)>.bal-list__item>div:after,.bal-list--border:not(.bal-list--nested)>.bal-list__item>a.bal-list__item__trigger:not(.is-link):after,.bal-list--border:not(.bal-list--nested)>.bal-list__item>button.bal-list__item__trigger:not(.button):not([type=button]):after,.bal-list--border.bal-list--nested>.bal-list__item:not(:last-child)>div:after,.bal-list--border.bal-list--nested>.bal-list__item:not(:last-child)>a.bal-list__item__trigger:not(.is-link):after,.bal-list--border.bal-list--nested>.bal-list__item:not(:last-child)>button.bal-list__item__trigger:not(.button):not([type=button]):after{content:\"\";height:2px;border-radius:var(--bal-list-item-radius);width:100%;position:absolute;bottom:0;left:0;right:0}.bal-list--border .bal-list__item>div:after,.bal-list--border .bal-list__item a:not(.is-link):after,.bal-list--border .bal-list__item button:not(.button):not([type=button]):after,.bal-list--border .bal-list__item--disabled>div:after,.bal-list--border .bal-list__item--disabled a:not(.is-link):after,.bal-list--border .bal-list__item--disabled button:not(.button):not([type=button]):after{background:var(--bal-list-item-disabled-background)}@media (hover: hover)and (pointer: fine){.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled)>div:hover:after,.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) a:not(.is-link):hover:after,.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) button:not(.button):hover:after{background:var(--bal-list-item-background-hover)}}@media screen and (min-width: 1024px){.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled)>div:active:after,.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) a:not(.is-link):active:after,.bal-list--border .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) button:not(.button):active:after{background:var(--bal-list-item-background-active)}}.bal-list--border.bal-list--background-color .bal-list__item>div:after,.bal-list--border.bal-list--background-color .bal-list__item a:not(.is-link):after,.bal-list--border.bal-list--background-color .bal-list__item button:not(.button):after{background:var(--bal-color-primary)}.bal-list--border.bal-list--background-color .bal-list__item--disabled>div:after,.bal-list--border.bal-list--background-color .bal-list__item--disabled a:not(.is-link):after,.bal-list--border.bal-list--background-color .bal-list__item--disabled button:not(.button):after{background:var(--bal-list-item-disabled-on-color-background)}.bal-list--border.bal-list--background-dark .bal-list__item>div:after,.bal-list--border.bal-list--background-dark .bal-list__item a:not(.is-link):after,.bal-list--border.bal-list--background-dark .bal-list__item button:not(.button):after{background:var(--bal-list-item-disabled-on-dark-background)}.bal-list--border.bal-list--background-dark .bal-list__item--disabled>div:after,.bal-list--border.bal-list--background-dark .bal-list__item--disabled a:not(.is-link):after,.bal-list--border.bal-list--background-dark .bal-list__item--disabled button:not(.button):after{background:var(--bal-list-item-disabled-on-dark-background)}.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled)>div:hover:after,.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) a:not(.is-link):hover:after,.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) button:not(.button):hover:after{background:var(--bal-list-item-on-dark-background-hover)}.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled)>div:active:after,.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) a:not(.is-link):active:after,.bal-list--border.bal-list--background-dark .bal-list__item.bal-list__item--clickable:not(.bal-list__item--accordion):not(.bal-list__item--disabled) button:not(.button):active:after{background:var(--bal-list-item-on-dark-background-active)}.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__title .title,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__subtitle p,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .title,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__subtitle p,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__title .title,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__subtitle p{color:var(--bal-list-item-disabled-on-dark-color) !important}.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg g,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg path,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg circle,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg g,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg path,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg g,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg path,.bal-list:not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg circle{fill:var(--bal-list-item-disabled-on-dark-fill) !important}.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__subtitle p{color:var(--bal-list-item-disabled-color) !important}.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled:active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled):not(.bal-list--background-dark) .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg circle{fill:var(--bal-list-item-disabled-fill) !important}.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__subtitle p,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__title .title,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__title .bal-heading__text,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__subtitle p{color:var(--bal-list-item-disabled-on-color-color) !important}.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled:active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-color .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled:active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled a:not(.is-link):active .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button) .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):hover .bal-list__item__icon svg circle,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg g,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg path,.bal-list:not(.bal-list--disabled).bal-list--background-dark .bal-list__item--disabled button:not(.button):active .bal-list__item__icon svg circle{fill:var(--bal-list-item-disabled-on-color-fill) !important}.bal-card>.bal-list.p-none .bal-list__item:last-child:after{content:none !important}.bal-list__item--accordion>div{-ms-flex-direction:column;flex-direction:column}.bal-list__item--animated{-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-list__item--animated .bal-list__item__accordion-body{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-list__item--animated .bal-list__item__accordion-head__icon{-webkit-transition:-webkit-transform var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:-webkit-transform var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:transform var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:transform var(--bal-animation-transition-duration) var(--bal-animation-transition-easing), -webkit-transform var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-list__item__accordion-head{padding:0 !important}.bal-list__item__accordion-body{overflow:hidden;will-change:max-height;min-height:0;margin:0 !important}.bal-list__item__accordion-body,.bal-list__item__accordion-body__content{padding:0 !important}.bal-list__item--collapsing>.bal-list__item__trigger>.bal-list__item__accordion-body{max-height:0 !important}.bal-list__item--collapsed>.bal-list__item__trigger>.bal-list__item__accordion-body:not(.bal-list__item__accordion-body--grouped){display:none}.bal-list__item--collapsed>.bal-list__item__trigger>.bal-list__item__accordion-body--grouped{max-height:0 !important}.bal-list__item--expanding>.bal-list__item__trigger>.bal-list__item__accordion-body{max-height:0}@media (prefers-reduced-motion: reduce){.bal-list__item,.bal-list__item__accordion-body{-webkit-transition:none !important;transition:none !important}}.bal-list__item__accordion-body{-ms-flex-align:start !important;align-items:flex-start !important}.bal-list__item__accordion-body__content{position:static;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start !important;align-items:flex-start !important}.bal-list__item__accordion-body__content--start{-ms-flex-pack:start;justify-content:start}.bal-list__item__accordion-body__content--center{-ms-flex-pack:center;justify-content:center}.bal-list__item__accordion-body__content--end{-ms-flex-pack:end;justify-content:end}.bal-list__item__accordion-body__content--space-between{-ms-flex-pack:justify;justify-content:space-between}.bal-list--border>.bal-list__item--expanded>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border>.bal-list__item--expanding>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border>.bal-list__item--collapsing>.bal-list__item__trigger>.bal-list__item__accordion-head:after{position:absolute;bottom:-0.5rem;left:0;content:\"\";height:2px;width:100%;border-radius:var(--bal-list-item-radius);background:var(--bal-list-item-border-background)}.bal-list--border.bal-list--background-color>.bal-list__item--expanded>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border.bal-list--background-color>.bal-list__item--collapsing>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border.bal-list--background-color>.bal-list__item--expanding>.bal-list__item__trigger>.bal-list__item__accordion-head:after{background:var(--bal-list-item-border-on-color-background)}.bal-list--border.bal-list--background-dark>.bal-list__item--expanded>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border.bal-list--background-dark>.bal-list__item--collapsing>.bal-list__item__trigger>.bal-list__item__accordion-head:after,.bal-list--border.bal-list--background-dark>.bal-list__item--expanding>.bal-list__item__trigger>.bal-list__item__accordion-head:after{background:var(--bal-list-item-border-on-dark-background)}.bal-list__item__accordion-body__content>.bal-list{padding-left:1rem}.bal-list--background-dark .bal-list__item__accordion-body .bal-list__item__content>p{color:var(--bal-list-accordion-body-color)}.bal-list__item--animated>.bal-list__item__trigger{-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-list__item--expanded>.bal-list__item__trigger,.bal-list__item--expanding>.bal-list__item__trigger{padding-bottom:0}.bal-list--border>.bal-list__item>.bal-list__item__trigger>.bal-list__item__accordion-body>div:not(.bal-list__item__accordion-body__content--space-normal){padding-bottom:2px !important}.bal-list__item__accordion-body__content{padding-top:8px !important}.bal-list__item__accordion-body__content--space-normal{padding-top:1rem !important;padding-bottom:1rem !important}";

const List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.background = 'light';
    this.border = false;
    this.accordionOneLevel = false;
    this.size = '';
  }
  accordionOneLevelHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      const allNestedLists = Array.from(this.el.querySelectorAll('bal-list'));
      allNestedLists.forEach(list => (list.accordionOneLevel = newValue));
    }
  }
  componentWillLoad() {
    this.accordionOneLevelHandler(this.accordionOneLevel, false);
  }
  render() {
    const block = BEM.block('list');
    const closestListEl = this.el.closest('.bal-list');
    const nested = closestListEl !== null && closestListEl !== this.el;
    return (h(Host, { role: "list", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('nested').class(nested)), block.modifier('disabled').class(this.disabled)), block.modifier('border').class(this.border)), block.modifier(`size-${this.size || 'normal'}`).class()), block.modifier(`background-${this.background}`).class()) }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "accordionOneLevel": ["accordionOneLevelHandler"]
  }; }
};
List.style = {
  css: balListCss
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.balGroupStateChanged = createEvent(this, "balGroupStateChanged", 7);
    this.balWillAnimate = createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = createEvent(this, "balDidAnimate", 7);
    this.accordionOpen = false;
    this.animated = true;
    this.accordionChanged = (ev) => {
      const { detail } = ev;
      if (detail !== this.accordionOpen) {
        this.accordionOpen = detail;
        this.updateState();
      }
    };
    this.addEventListenerAccordionChange = () => {
      const accordionHeadEl = this.el.querySelector(ListItem.selectors.accordionHead);
      if (accordionHeadEl) {
        accordionHeadEl.addEventListener('balAccordionChange', this.accordionChanged);
        this.accordionOpen = accordionHeadEl.accordionOpen;
        this.updateState(true);
      }
    };
    this.removeEventListenerAccordionChange = () => {
      const accordionHeadEl = this.el.querySelector(ListItem.selectors.accordionHead);
      if (accordionHeadEl) {
        accordionHeadEl.removeEventListener('balAccordionChange', this.accordionChanged);
      }
    };
    this.updateHead = () => {
      const headEl = this.el.querySelector('bal-list-item-accordion-head');
      if (headEl) {
        headEl.accordionOpen = this.accordionOpen;
      }
    };
    this.updateState = (initialUpdate = false) => {
      if (this.accordionOpen) {
        this.expandAccordion(initialUpdate);
      }
      else {
        this.collapseAccordion(initialUpdate);
      }
    };
    this.expandAccordion = (initialUpdate = false) => {
      const contentEl = this.el.querySelector(ListItem.selectors.accordionBody);
      const contentElWrapper = this.el.querySelector(ListItem.selectors.accordionBodyWrapper);
      if (initialUpdate || contentEl === null || contentElWrapper === null) {
        this.state = 4;
        return;
      }
      if (this.state === 4) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      const parentListEl = this.el.closest('bal-list');
      if (parentListEl && parentListEl.accordionOneLevel) {
        const items = Array.from(parentListEl.querySelectorAll('bal-list-item')).filter(el => el !== this.el);
        items.forEach(item => item.dismiss(true));
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.state = 8;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 300);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.accordionOpen);
            await waitForTransition;
            this.state = 4;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.accordionOpen);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.accordionOpen);
        this.state = 4;
        this.balDidAnimate.emit(this.accordionOpen);
      }
    };
    this.collapseAccordion = (initialUpdate = false, ignoreNested = false) => {
      const contentEl = this.el.querySelector(ListItem.selectors.accordionBody);
      if (initialUpdate || contentEl === null) {
        this.state = 1;
        return;
      }
      if (this.state === 1) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (!ignoreNested) {
        const parentListEl = this.el.closest('bal-list');
        if (parentListEl && parentListEl.accordionOneLevel) {
          const items = Array.from(this.el.querySelectorAll('bal-list-item')).filter(el => el !== this.el);
          items.forEach(item => item.dismiss(true));
        }
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 300);
            this.state = 2;
            this.balWillAnimate.emit(this.accordionOpen);
            await waitForTransition;
            this.state = 1;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.accordionOpen);
          });
        });
      }
      else {
        this.balWillAnimate.emit(this.accordionOpen);
        this.state = 1;
        this.balDidAnimate.emit(this.accordionOpen);
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onClickTrigger = (ev) => {
      const accordionBodyEl = this.el.querySelector(ListItem.selectors.accordionBody);
      if (accordionBodyEl) {
        if (!accordionBodyEl.contains(ev.target)) {
          this.balNavigate.emit(ev);
        }
      }
      else {
        this.balNavigate.emit(ev);
      }
    };
    this.state = 1;
    this.disabled = false;
    this.clickable = false;
    this.selected = false;
    this.accordion = false;
    this.subAccordionItem = false;
    this.href = '';
    this.target = '_self';
    this.download = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    if (this.accordion) {
      this.addEventListenerAccordionChange();
    }
  }
  componentDidLoad() {
    if (this.accordion) {
      this.addEventListenerAccordionChange();
    }
  }
  disconnectedCallback() {
    this.removeEventListenerAccordionChange();
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async present() {
    if (this.accordion && this.accordionOpen === false) {
      this.accordionOpen = true;
      this.updateHead();
      this.expandAccordion();
    }
  }
  async dismiss(ignoreNested = false) {
    if (this.accordion && this.accordionOpen === true) {
      this.accordionOpen = false;
      this.updateHead();
      this.collapseAccordion(false, ignoreNested);
    }
  }
  async toggle() {
    if (this.accordion) {
      if (this.accordionOpen) {
        this.dismiss();
      }
      else {
        this.present();
      }
    }
  }
  render() {
    const item = BEM.block('list').element('item');
    const trigger = item.element('trigger');
    const basicClasses = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, item.class()), item.modifier('disabled').class(this.disabled)), item.modifier('selected').class(this.selected)), item.modifier('animated').class(this.animated)), item.modifier('accordion').class(this.accordion)), item.modifier('sub-accordion').class(this.subAccordionItem)), item.modifier('active').class(this.accordionOpen)), item.modifier('expanding').class(this.state === 8)), item.modifier('expanded').class(this.state === 4)), item.modifier('collapsing').class(this.state === 2)), item.modifier('collapsed').class(this.state === 1)), item.modifier('clickable').class(!this.disabled && (this.clickable || this.href.length > 0 || this.accordion)));
    if (this.href.length > 0 && !this.disabled) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("a", { class: Object.assign({}, trigger.class()), href: this.href, target: this.target, download: this.download, onClick: (ev) => this.onClickTrigger(ev) }, h("slot", null))));
    }
    if (this.clickable) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("button", { class: Object.assign({}, trigger.class()), disabled: this.disabled, onClick: (ev) => this.onClickTrigger(ev) }, h("slot", null))));
    }
    if (this.accordion) {
      return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses), onClick: (ev) => this.onClickTrigger(ev) }, h("div", { class: Object.assign({}, trigger.class()) }, h("slot", null))));
    }
    return (h(Host, { role: "listitem", class: Object.assign({}, basicClasses) }, h("div", { class: Object.assign({}, trigger.class()) }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
ListItem.selectors = {
  accordionHead: '.bal-list__item__trigger > bal-list-item-accordion-head',
  accordionBody: '.bal-list__item__trigger > bal-list-item-accordion-body',
  accordionBodyWrapper: '.bal-list__item__trigger > .bal-list__item__accordion-body > .bal-list__item__accordion-body__content',
};
__decorate$2([
  Logger('bal-list-item')
], ListItem.prototype, "createLogger", null);
__decorate$2([
  ListenToConfig()
], ListItem.prototype, "configChanged", null);

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
const ListItemAccordionBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isMobile = balBreakpoints.isMobile;
    this.setMinHeightForAnimation = () => {
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.isMobile && this.contentElWrapper) {
        this.contentElWrapper.style.removeProperty('min-height');
        return;
      }
      raf(() => {
        if (this.accordionGroup !== undefined && this.accordionGroup !== '') {
          const allAccordionBodies = Array.from(document.body.querySelectorAll('bal-list-item-accordion-body'));
          const groupContents = allAccordionBodies
            .filter(el => el.accordionGroup === this.accordionGroup)
            .map(el => el.querySelector('.bal-list__item__accordion-body__content'))
            .filter(el => el);
          const groupContentHeight = groupContents.reduce((acc, el) => (acc < el.offsetHeight ? el.offsetHeight : acc), 0);
          if (this.contentElWrapper && groupContentHeight > 0 && this.el.offsetHeight !== groupContentHeight) {
            this.contentElWrapper.style.setProperty('min-height', `${groupContentHeight}px`);
          }
        }
      });
    };
    this.debounceSetMinHeightForAnimation = debounce(this.setMinHeightForAnimation.bind(this), 100);
    this.accordionGroup = undefined;
    this.contentSpace = 'none';
    this.contentAlignment = 'start';
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.setMinHeightForAnimation();
  }
  componentDidRender() {
    this.setMinHeightForAnimation();
  }
  resizeListener() {
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
    this.debounceSetMinHeightForAnimation();
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item': true,
        'bal-list__item__accordion-body': true,
        'bal-list__item__accordion-body--grouped': this.accordionGroup !== undefined && this.accordionGroup !== '',
      } }, h("div", { class: {
        'bal-list__item__accordion-body__content': true,
        [`bal-list__item__accordion-body__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
        [`bal-list__item__accordion-body__content--space-${this.contentSpace}`]: this.contentSpace !== undefined,
      }, ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
__decorate$1([
  Logger('bal-list-item-accordion-body')
], ListItemAccordionBody.prototype, "createLogger", null);
__decorate$1([
  ListenToResize()
], ListItemAccordionBody.prototype, "resizeListener", null);
__decorate$1([
  ListenToBreakpoints()
], ListItemAccordionBody.prototype, "breakpointListener", null);

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
const ListItemAccordionHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balAccordionChange = createEvent(this, "balAccordionChange", 7);
    this.onClick = () => {
      if (this.el.closest('bal-list-item')) {
        this.accordionOpen = !this.accordionOpen;
      }
    };
    this.accordionOpen = false;
    this.icon = 'plus';
  }
  createLogger(log) {
    this.log = log;
  }
  accordionOpenHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.balAccordionChange.emit(this.accordionOpen);
    }
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item': true,
        'bal-list__item__accordion-head': true,
        'bal-list__item__accordion-head--open': this.accordionOpen,
      }, onClick: this.onClick }, h("slot", null), h("bal-list-item-icon", { right: true }, h("bal-icon", { class: "bal-list__item__accordion-head__icon", name: this.icon, size: "small", turn: this.accordionOpen }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "accordionOpen": ["accordionOpenHandler"]
  }; }
};
__decorate([
  Logger('bal-list-item-accordion-head')
], ListItemAccordionHead.prototype, "createLogger", null);

const ListItemContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentAlignment = undefined;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__content': true,
        [`bal-list__item__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
      } }, h("slot", null)));
  }
};

const ListItemIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.right = false;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__icon': true,
        'bal-list__item__icon--right': this.right,
      } }, h("slot", null)));
  }
};

const ListItemSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-list__item__subtitle" }, h("p", { class: "is-size-small" }, h("slot", null))));
  }
};

const ListItemTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.level = 'h5';
    this.visualLevel = undefined;
  }
  render() {
    return (h(Host, { class: "bal-list__item__title" }, h("bal-heading", { level: this.level, visualLevel: this.visualLevel, space: "none" }, h("slot", null))));
  }
};

export { List as bal_list, ListItem as bal_list_item, ListItemAccordionBody as bal_list_item_accordion_body, ListItemAccordionHead as bal_list_item_accordion_head, ListItemContent as bal_list_item_content, ListItemIcon as bal_list_item_icon, ListItemSubtitle as bal_list_item_subtitle, ListItemTitle as bal_list_item_title };
