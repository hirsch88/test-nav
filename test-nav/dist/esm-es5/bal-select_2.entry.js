import{__awaiter,__generator,__spreadArray}from"tslib";import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-e015dbc8.js";import{l as lodash_isnil}from"./index-82aff103.js";import{f as deepReady,i as isDescendant,d as debounce}from"./helpers-08b28736.js";import{c as isSpaceKey,g as areArraysEqual,m as isArrowDownKey,o as isArrowUpKey,d as isEnterKey,q as isEscapeKey,r as isBackspaceKey}from"./index.esm-df73647b.js";import{r as removeValue,p as preventDefault,l as length,g as getValues,i as includes,s as startsWith,a as addValue,f as findLabelByValue,b as findOptionByLabel,v as validateAfterBlur}from"./utils-9cb64c37.js";import{s as stopEventBubbling}from"./form-input-fd2d14ca.js";import{B as BEM}from"./bem-1b28532d.js";import{L as Logger}from"./log-01623e2c.js";import{d as defaultBalAriaForm}from"./form-479fd066.js";import"./browser-9199b5e2.js";import"./icons.constant-35253412.js";import"./_commonjsHelpers-ba3f0406.js";var watchForOptions=function(e,t,o){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){e=e.filter((function(e){return e.target.nodeName===t.toUpperCase()||e.target.nodeName==="bal-select".toUpperCase()}));if(e.length>0){o(undefined)}}));i.observe(e,{childList:true,subtree:true,attributes:true,characterData:true});return i};var balSelectCss=":root{--bal-select-control-background:var(--bal-color-primary-inverted);--bal-select-control-background-hover:var(--bal-form-field-control-background-hover);--bal-select-control-background-invalid:var(--bal-form-field-control-danger-background);--bal-select-control-background-disabled:var(--bal-form-field-control-disabled-background);--bal-select-control-input-background:var(--bal-color-grey-1);--bal-select-control-native-input-background:var(--bal-color-transparent);--bal-select-control-native-input-background-hover:var(--bal-color-transparent);--bal-select-control-input-inverted-footer-background:var(--bal-color-transparent);--bal-select-control-input-inverted-footer-background-hover:var(--bal-color-transparent);--bal-select-control-input-multiple-background:var(--bal-color-transparent);--bal-select-control-input-multiple-background-read-only-selection:var(--bal-color-transparent);--bal-select-control-input-option-background:var(--bal-color-transparent);--bal-select-control-input-option-background-selected:var(--bal-color-primary-1);--bal-select-control-input-option-background-focused:var(--bal-color-grey-2);--bal-select-control-input-option-background-hover:var(--bal-color-grey-2);--bal-select-control-border-radius:var(--bal-form-field-control-radius);--bal-select-popover-border-color:var(--bal-color-grey-2);--bal-select-control-border-color:var(--bal-form-field-control-border-color);--bal-select-control-border-color-focused:var(--bal-color-primary);--bal-select-control-border-color-hover:var(--bal-form-field-control-border-color-hover);--bal-select-control-border-color-invalid:var(--bal-form-field-control-danger-border-color);--bal-select-control-border-color-disabled:var(--bal-form-field-control-disabled-border-color);--bal-select-control-border-color-focus-within:var(--bal-color-primary);--bal-select-option-border-top-color:var(--bal-color-grey-2);--bal-select-popover-empty-text-color:var(--bal-form-field-control-color);--bal-select-control-text-color:var(--bal-form-field-control-color);--bal-select-control-text-color-focused:var(--bal-color-primary);--bal-select-input-text-color-disabled:var(--bal-form-field-label-disabled-color);--bal-select-control-inverted-footer-native-input-text-color:var(--bal-color-text-white);--bal-select-option-content-label-text-color:var(--bal-form-field-control-color)}bal-select-option{display:none !important}.bal-select{display:block;position:relative;width:100%;-ms-flex:1;flex:1;font-family:var(--bal-font-family-text)}.bal-select__popover{border:.125rem solid var(--bal-select-popover-border-color)}.bal-select__popover__empty{padding:.5rem 1rem;font-family:var(--bal-font-family-text);color:var(--bal-select-popover-empty-text-color)}.bal-select__popover__empty--hidden{display:none}.bal-select__native{position:absolute !important;left:0;top:0;margin:0;padding:0;opacity:0;outline:0;border:none;width:1px;height:1px;clip:rect(1px, 1px, 1px, 1px);overflow:hidden}.bal-select__control{display:-ms-flexbox;display:flex;border-width:.125rem;border-style:solid;border-color:var(--bal-select-control-border-color);border-radius:var(--bal-select-control-border-radius);background:var(--bal-select-control-background);font-size:var(--bal-weight-regular);font-family:var(--bal-font-family-text);color:var(--bal-select-control-text-color);outline:none;-webkit-box-shadow:var(--bal-shadow-none);box-shadow:var(--bal-shadow-none);padding-right:1rem;min-height:3rem}.bal-select__control--focused{border-color:var(--bal-select-control-border-color-focused)}.bal-select__control:not(.bal-select__control--disabled):not(.bal-select__control--invalid):not(.bal-select__control--inverted-footer):hover{border-color:var(--bal-select-control-border-color-hover);background-color:var(--bal-select-control-background-hover)}.bal-select__control:not(.bal-select__control--disabled):not(.bal-select__control--invalid):not(.bal-select__control--inverted-footer):hover .bal-select__control__input{background-color:var(--bal-select-control-input-background)}.bal-select__control--invalid:not(.bal-select__control--disabled){border-color:var(--bal-select-control-border-color-invalid) !important;background:var(--bal-select-control-background-invalid) !important}.bal-select__control:focus-within{border-color:var(--bal-select-control-border-color-focus-within) !important}.bal-select__control--disabled{background-color:var(--bal-select-control-background-disabled) !important;border-color:var(--bal-select-control-border-color-disabled) !important}.bal-select__control--disabled,.bal-select__control--disabled input{cursor:default !important;-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;pointer-events:none !important;color:var(--bal-select-input-text-color-disabled)}.bal-select__control--inverted-footer{border:none;background-color:var(--bal-select-control-input-inverted-footer-background) !important;padding-right:var(--bal-space-none)}.bal-select__control--inverted-footer:hover{background-color:var(--bal-select-control-input-inverted-footer-background-hover) !important}.bal-select__control--inverted-footer .input{color:var(--bal-select-control-inverted-footer-native-input-text-color);background-color:var(--bal-select-control-native-input-background) !important}.bal-select__control--inverted-footer .input:hover{background-color:var(--bal-select-control-native-input-background-hover) !important}.bal-select__control__icon{min-height:100% !important;max-height:100% !important}.bal-select__control__icon--loading{display:none}.bal-select__control__icon--clickable{cursor:pointer}.bal-select__control__selections{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.125rem;max-width:100%;min-width:0;gap:0;padding-left:.375rem}.bal-select__control__selections .bal-tag{margin-left:.25rem;margin-top:.375rem;margin-bottom:.375rem}.bal-select__control__selections .bal-tag+.input{padding-left:.625rem}.bal-select__control__input{border:none !important;outline:none !important;outline-width:0 !important;height:2.75rem !important;-webkit-box-shadow:var(--bal-shadow-none) !important;box-shadow:var(--bal-shadow-none) !important;background:var(--bal-select-control-input-multiple-background);-ms-flex:1;flex:1;min-height:2.75rem !important;padding-left:.25rem !important;padding-right:.625rem !important;text-overflow:ellipsis}.bal-select__control__input:-moz-read-only{-moz-user-select:none !important;user-select:none !important;-webkit-tap-highlight-color:rgba(0,0,0,0)}.bal-select__control__input:read-only{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;-webkit-tap-highlight-color:rgba(0,0,0,0)}.bal-select__control__input:read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:-moz-read-only::selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:read-only::selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:-moz-read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__control__input:read-only::-moz-selection{background:var(--bal-select-control-input-multiple-background-read-only-selection)}.bal-select__option{visibility:visible;font-family:var(--bal-font-family-text);background:var(--bal-select-control-input-option-background);border:none;cursor:pointer;outline:none;min-height:3rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0;margin:0;border-top:.125rem solid var(--bal-select-option-border-top-color);text-align:inherit;white-space:nowrap;width:100%}.bal-select__option:first-child{border-top:none}.bal-select__option::-moz-focus-inner{border:none}.bal-select__option--selected{background:var(--bal-select-control-input-option-background-selected)}.bal-select__option--selected .bal-select__option__content__label{font-weight:var(--bal-weight-bold)}.bal-select__option--focused{background:var(--bal-select-control-input-option-background-focused)}.bal-select__option:hover{background:var(--bal-select-control-input-option-background-hover)}.bal-select__option__content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;min-height:3rem;padding:.75rem 1rem;gap:.75rem}.bal-select__option__content__checkbox{margin:0;padding:0}.bal-select__option__content__label{margin:0;padding:0;font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-regular);color:var(--bal-select-option-content-label-text-color);line-height:1.125rem;word-break:break-word;white-space:normal;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}";var __decorate$1=undefined&&undefined.__decorate||function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)if(l=e[a])n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n;return r>3&&n&&Object.defineProperty(t,o,n),n};var isHuman=true;var isNotHuman=false;var Select=function(){function e(e){var t=this;registerInstance(this,e);this.balChange=createEvent(this,"balChange",7);this.balInputClick=createEvent(this,"balInputClick",7);this.balInput=createEvent(this,"balInput",7);this.balBlur=createEvent(this,"balBlur",7);this.balFocus=createEvent(this,"balFocus",7);this.balCancel=createEvent(this,"balCancel",7);this.balKeyPress=createEvent(this,"balKeyPress",7);this.didInit=false;this.inputId="bal-select-".concat(selectIds++);this.initialValue=[];this.removeValue=function(e){if(!t.disabled){t.updateRawValue(removeValue(t.rawValue,e),isHuman);if(t.multiple&&t.typeahead){t.setFocus()}}};this.handleClick=function(e){if(t.disabled||t.readonly){preventDefault(e)}};this.handlePopoverChange=function(e){e.stopPropagation();if(t.isPopoverOpen!==e.detail){t.isPopoverOpen=e.detail;if(t.isPopoverOpen){t.updateFocus()}else{t.focusIndex=-1;if(t.multiple&&t.typeahead){t.updateInputValue("")}t.balBlur.emit()}}};this.handleInputBlur=function(e){preventDefault(e);var o=e.relatedTarget;if(o===null||o&&o.nodeName&&(o.nodeName==="BAL-MODAL"||o.nodeName==="INPUT"||o.nodeName==="BUTTON")){t.validateAfterBlur(isHuman)}t.hasFocus=false};this.handleInputFocus=function(e){t.balFocus.emit(e);t.hasFocus=true};this.handleInputClick=function(e,o){if(o===void 0){o=false}return __awaiter(t,void 0,void 0,(function(){var t,i,r,n;return __generator(this,(function(l){switch(l.label){case 0:stopEventBubbling(e);if(this.isChipClicked(e)){return[2]}if(!(this.disabled||this.readonly))return[3,1];preventDefault(e);return[3,10];case 1:this.focusIndex=-1;this.balInputClick.emit(e);if(!this.typeahead)return[3,6];if(!(this.isPopoverOpen&&o))return[3,3];return[4,(t=this.popoverElement)===null||t===void 0?void 0:t.dismiss()];case 2:l.sent();return[3,5];case 3:return[4,(i=this.popoverElement)===null||i===void 0?void 0:i.present()];case 4:l.sent();l.label=5;case 5:return[3,10];case 6:if(!this.isPopoverOpen)return[3,8];return[4,(r=this.popoverElement)===null||r===void 0?void 0:r.dismiss()];case 7:l.sent();return[3,10];case 8:return[4,(n=this.popoverElement)===null||n===void 0?void 0:n.present()];case 9:l.sent();l.label=10;case 10:return[2]}}))}))};this.handleKeyPress=function(e){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!(!this.isPopoverOpen&&isSpaceKey(e)))return[3,2];preventDefault(e);return[4,this.open()];case 1:t.sent();t.label=2;case 2:this.balKeyPress.emit(e);return[2]}}))}))};this.handleInputChange=function(e){if(!t.disabled&&!t.readonly){t.inputValue=e.target.value}};this.handleInput=function(e){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){if(!this.disabled&&!this.readonly){this.inputValue=e.target.value;if(!this.isPopoverOpen){this.popoverElement.present()}this.focusIndex=-1;this.updateFocus();preventDefault(e);this.balInput.emit(this.inputValue)}return[2]}))}))};this.handleOptionMouseEnter=function(e){t.focusIndex=e};this.hasFocus=false;this.inputValue="";this.focusIndex=-1;this.isPopoverOpen=false;this.options=new Map;this.labelToScrollTo="";this.labelToSelectTo="";this.ariaForm=defaultBalAriaForm;this.name=this.inputId;this.invalid=false;this.filter="includes";this.balTabindex=0;this.freeSolo=false;this.multiple=false;this.maxLength=undefined;this.noDataLabel=undefined;this.autocomplete="off";this.typeahead=false;this.selectionOptional=false;this.disabled=false;this.readonly=false;this.required=false;this.inverted=false;this.placeholder=undefined;this.scrollable=250;this.loading=false;this.remote=false;this.value=[];this.rawValue=[]}e.prototype.createLogger=function(e){this.log=e};e.prototype.valueWatcher=function(){this.syncRawValue(false)};e.prototype.updateRawValue=function(e,t){if(t===void 0){t=true}if(!areArraysEqual(e,this.rawValue||[])){this.rawValue=__spreadArray([],e,true);this.syncNativeInput();if(this.didInit&&t===true){if(this.multiple){if(lodash_isnil(this.rawValue)){this.emitChangeEvent([])}else{this.emitChangeEvent(__spreadArray([],this.rawValue,true))}}else{if(lodash_isnil(this.rawValue)||length(this.rawValue)===0){this.emitChangeEvent(undefined)}else{this.emitChangeEvent(this.rawValue[0])}}}}};e.prototype.emitChangeEvent=function(e){this.balChange.emit(e)};e.prototype.connectedCallback=function(){var e=this;var t=debounce((function(){return e.updateOptions()}),0);this.initialValue=this.value;t();this.mutationO=watchForOptions(this.el,"bal-select-option",(function(){t()}))};e.prototype.componentWillLoad=function(){this.waitForOptionsAndThenUpdateRawValues();this.isInsideOfFooter();if(!lodash_isnil(this.rawValue)&&this.options.size>0&&length(this.rawValue)===1){var e=this.options.get(this.rawValue[0]);if(!lodash_isnil(e)){this.inputValue=e.label}}};e.prototype.componentDidLoad=function(){this.syncRawValue(false);if(!this.multiple){this.inputElement.value=this.inputValue}this.didInit=true};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.listenOnClick=function(e){if(this.disabled&&e.target&&e.target===this.el){preventDefault(e)}};e.prototype.resetHandler=function(e){var t=this;var o=e.target;if(o===null||o===void 0?void 0:o.contains(this.el)){if(this.resetHandlerTimer){clearTimeout(this.resetHandlerTimer)}this.resetHandlerTimer=setTimeout((function(){t.value=t.initialValue;t.syncRawValue(false);t.syncNativeInput();if(t.nativeSelectEl){var e=Array.from(t.nativeSelectEl.options);e.forEach((function(e){return e.selected=true}))}}),0)}};e.prototype.handleKeyDown=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){switch(o.label){case 0:if(!this.isPopoverOpen)return[3,1];if(isArrowDownKey(e)||isArrowUpKey(e)){preventDefault(e);this.navigateWithArrowKey(e);this.updateFocus()}if(isEnterKey(e)){preventDefault(e);this.selectedFocusedOption()}if(isEscapeKey(e)){this.cancel()}if(isBackspaceKey(e)&&this.typeahead&&this.multiple){if(this.inputElement.value===""&&length(this.rawValue)>0){t=getValues(this.rawValue);this.removeValue(t[length(this.rawValue)-1])}}if(!this.typeahead&&e.key.length===1){this.focusOptionByLabel(e.key)}if(isSpaceKey(e)&&!this.typeahead){preventDefault(e)}return[3,4];case 1:if(!this.hasFocus)return[3,4];if(!(isArrowDownKey(e)||isArrowUpKey(e)))return[3,3];preventDefault(e);return[4,this.open()];case 2:o.sent();o.label=3;case 3:if(!this.typeahead&&e.key.length===1){this.selectOptionByLabel(e.key)}o.label=4;case 4:return[2]}}))}))};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){clearTimeout(this.setFocusTimer);this.setFocusTimer=setTimeout((function(){if(e.inputElement&&!e.disabled){e.inputElement.focus()}}));return[2]}))}))};e.prototype.getValue=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.rawValue]}))}))};e.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.focusIndex=-1;if(this.inputElement){this.updateInputValue("");this.updateRawValue([],isHuman);this.value=this.multiple?[]:""}return[2]}))}))};e.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!(!this.disabled&&!this.readonly&&!lodash_isnil(this.popoverElement)))return[3,2];return[4,this.popoverElement.present()];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};e.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.disabled&&!this.readonly&&!lodash_isnil(this.popoverElement)){this.blurSelect()}return[2]}))}))};e.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.labelToScrollTo="";this.close();this.scrollTo(0);this.balCancel.emit();return[2]}))}))};e.prototype.select=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){t=this.options.get(e);if(!lodash_isnil(t)){this.optionSelected(t)}return[2]}))}))};e.prototype.setAriaForm=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.ariaForm=Object.assign({},e);return[2]}))}))};e.prototype.waitForOptionsAndThenUpdateRawValues=function(){return __awaiter(this,void 0,void 0,(function(){var e;var t=this;return __generator(this,(function(o){switch(o.label){case 0:clearTimeout(this.waitForOptionsAndThenUpdateRawValuesTimer);return[4,deepReady(this.el)];case 1:o.sent();e=this.options.size>0;if(e){if(!this.remote){this.syncRawValue(isNotHuman)}}else{this.waitForOptionsAndThenUpdateRawValuesTimer=setTimeout((function(){return t.waitForOptionsAndThenUpdateRawValues()}),10)}return[2]}}))}))};e.prototype.updateOptions=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,o,i,o,r,n;return __generator(this,(function(l){switch(l.label){case 0:e=this.getChildOpts();t=new Map;for(o=0;o<e.length;o++){i=e[o];t.set(i.value,{value:i.value,label:i.label,disabled:i.disabled,id:i.for,textContent:i.textContent,innerHTML:i.innerHTML})}if(!this.selectionOptional&&Array.isArray(this.rawValue)){for(o=0;o<this.rawValue.length;o++){r=this.rawValue[o];if(!t.has(r)){n=removeValue(this.rawValue,r);this.updateRawValue(n,isNotHuman)}}}this.options=new Map(t);if(!!this.typeahead)return[3,2];return[4,this.syncNativeInput()];case 1:l.sent();l.label=2;case 2:if(this.didInit&&!this.remote){this.validateAfterBlur()}return[2]}}))}))};Object.defineProperty(e.prototype,"optionArray",{get:function(){var e=this;var t=Array.from(this.options,(function(e){var t=e[0],o=e[1];return o}));if(!this.typeahead||this.remote){return t}return t.filter((function(t){return e.filter==="includes"?includes(t.textContent,e.inputValue):startsWith(t.textContent,e.inputValue)}))},enumerable:false,configurable:true});e.prototype.hasOptions=function(){return this.optionArray.length>0};Object.defineProperty(e.prototype,"inputPlaceholder",{get:function(){if(this.multiple){if(length(this.rawValue)<1){return this.placeholder}return undefined}else{if(!lodash_isnil(this.rawValue)&&length(this.rawValue)>0){return undefined}}return this.placeholder},enumerable:false,configurable:true});e.prototype.getChildOpts=function(){return Array.from(this.el.querySelectorAll("bal-select-option"))};e.prototype.getPopoverContent=function(){return this.popoverElement.querySelector(".bal-popover__content__inner")};e.prototype.updateFocus=function(){var e=this;if(this.focusIndex<-1){this.focusIndex=-1}var t=this.optionArray;if(t.length>0){if(t.length<=this.focusIndex){this.focusIndex=t.length-1}var o=t[this.focusIndex];if(o&&o.id){var i=this.el.querySelector("button#".concat(o.id));if(i){clearTimeout(this.updateFocusTimer);this.updateFocusTimer=setTimeout((function(){e.scrollToFocusedOption(i)}),0)}}}else{this.focusIndex=-1}};e.prototype.scrollToFocusedOption=function(e){if(e&&this.popoverElement){var t=this.getPopoverContent();if(t){var o=e.offsetTop;var i=t.scrollTop;if(o<i){t.scrollTop=o}var r=e.offsetTop+e.clientHeight;var n=t.scrollTop+t.clientHeight;if(r>n){t.scrollTop=t.scrollTop+e.clientHeight}}}};e.prototype.scrollTo=function(e){var t=this.getPopoverContent();if(t){t.scrollTop=e}};e.prototype.selectedFocusedOption=function(){var e=this.optionArray;if(e.length>this.focusIndex){var t=e[this.focusIndex];if(t){this.optionSelected(t)}}};e.prototype.navigateWithArrowKey=function(e){if(isArrowDownKey(e)){this.focusIndex=this.focusIndex+1}else{if(isArrowUpKey(e)){this.focusIndex=this.focusIndex-1}}};e.prototype.focusOptionByLabel=function(e){var t=this;this.labelToScrollTo=this.labelToScrollTo+e;clearTimeout(this.clearScrollToValue);this.clearScrollToValue=setTimeout((function(){t.scrollToLabel(t.labelToScrollTo)}),600)};e.prototype.selectOptionByLabel=function(e){var t=this;this.labelToSelectTo=this.labelToSelectTo+e;clearTimeout(this.clearSelectValue);this.clearSelectValue=setTimeout((function(){t.selectLabel(t.labelToSelectTo);t.labelToSelectTo=""}),600)};e.prototype.selectLabel=function(e){return __awaiter(this,void 0,void 0,(function(){var t,o,i;return __generator(this,(function(r){if(e!==" "){t=this.optionArray.find((function(t){return startsWith(t.label||"",e)}));if(!lodash_isnil(t)&&t.id){o=this.el.querySelector("button#".concat(t.id));if(!lodash_isnil(o)){i=this.optionArray.indexOf(t);this.focusIndex=i;this.select(t.value)}}this.labelToScrollTo=""}return[2]}))}))};e.prototype.scrollToLabel=function(e){return __awaiter(this,void 0,void 0,(function(){var t,o,i;return __generator(this,(function(r){if(e!==" "){t=this.optionArray.find((function(t){return startsWith(t.label||"",e)}));if(!lodash_isnil(t)&&t.id){o=this.el.querySelector("button#".concat(t.id));if(!lodash_isnil(o)){i=this.optionArray.indexOf(t);this.focusIndex=i;this.scrollTo(o.offsetTop)}}this.labelToScrollTo=""}return[2]}))}))};e.prototype.syncRawValue=function(e){if(e===void 0){e=true}var t=[];if(!lodash_isnil(this.value)&&this.value!==""){if(Array.isArray(this.value)){t=__spreadArray([],this.value.filter((function(e){return!lodash_isnil(e)})),true)}else{if(this.value.split("").includes(",")){t=__spreadArray([],this.value.split(",").filter((function(e){return e})).map((function(e){return e.trim()})),true)}else{t=[this.value]}}}this.updateRawValue(t,e)};e.prototype.blurSelect=function(){this.popoverElement.dismiss()};e.prototype.optionSelected=function(e){var t=getValues(this.rawValue);var o=t.some((function(t){return t===e.value}));this.updateValue(e.value,!o);if(!this.multiple){this.blurSelect()}else{if(this.typeahead){this.setFocus()}}};e.prototype.updateValue=function(e,t){if(t===void 0){t=true}if(this.multiple){if(t){this.updateRawValue(addValue(this.rawValue,e,this.multiple),isHuman)}else{this.updateRawValue(removeValue(this.rawValue,e),isHuman)}}else{this.updateRawValue(addValue(this.rawValue,e,this.multiple),isHuman);if(this.rawValue&&this.rawValue.length>0){this.updateInputValue(findLabelByValue(this.options,this.rawValue[0]))}}};e.prototype.validateAfterBlur=function(e){if(e===void 0){e=isNotHuman}var t=this.rawValue;if(this.didInit&&!this.multiple){if(this.typeahead&&(this.selectionOptional||this.remote)){var o=findOptionByLabel(this.options,this.inputElement.value);if(o){t=[o.value]}else{t=[this.inputElement.value]}}else{t=validateAfterBlur(this.rawValue,this.options,this.inputElement.value)}this.updateRawValue(t,e)}};e.prototype.syncNativeInput=function(){if(!this.multiple){if(length(this.rawValue)>0){var e=getValues(this.rawValue);var t=findLabelByValue(this.options,e[0]);if(!this.multiple&&this.typeahead&&this.selectionOptional&&t===""){t=e.join(", ")}return this.updateInputValue(t)}}return Promise.resolve()};e.prototype.updateInputValue=function(e){var t=this;return new Promise((function(o){if(t.updateInputValueTimer){clearTimeout(t.updateInputValueTimer)}t.updateInputValueTimer=setTimeout((function(){if(!lodash_isnil(t.inputElement)){t.inputElement.value=e;t.inputValue=e;o()}}),0)}))};e.prototype.isChipClicked=function(e){var t=false;if(this.multiple){var o=this.selectionEl.querySelectorAll("bal-tag");var i=e.target;o.forEach((function(e){var o=isDescendant(e,i)||e===i;if(o){t=o}}))}return t};e.prototype.isInsideOfFooter=function(){this.inverted=this.el.closest("bal-footer")!==null};e.prototype.render=function(){var e=this;var t;var o=function(t){return h("bal-tag",{size:"",closable:!e.disabled,disabled:e.disabled,invalid:e.invalid,tabindex:-1,onBalCloseClick:function(o){return e.removeValue(t.value)},"data-testid":"bal-select-chip"},findLabelByValue(e.options,t.value)||t.value)};var i=getValues(this.rawValue);var r=BEM.block("select");var n=r.element("native");var l=r.element("control");var a=l.element("icon");var s=l.element("selections");var c=l.element("input");var u=r.element("popover");var d=u.element("empty");var p=r.element("option");var b=p.element("content");var f=b.element("checkbox");var v=b.element("label");return h(Host,{role:"listbox",onClick:this.handleClick,"aria-disabled":this.disabled?"true":null,"data-value":(t=this.rawValue)===null||t===void 0?void 0:t.map((function(t){return findLabelByValue(e.options,t)})).join(","),class:Object.assign(Object.assign(Object.assign(Object.assign({},r.class()),r.modifier("disabled").class(this.disabled||this.readonly)),r.modifier("inverted").class(this.inverted)),r.modifier("inverted-footer").class(this.inverted))},h("select",{class:Object.assign({},n.class()),name:this.name,multiple:this.multiple,required:this.required,tabindex:-1,ref:function(t){return e.nativeSelectEl=t}},i.map((function(e){return h("option",{value:e,selected:true},e)}))),h("bal-popover",{onBalChange:this.handlePopoverChange,ref:function(t){return e.popoverElement=t}},h("div",{"bal-popover-trigger":true,class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l.class()),l.modifier("invalid").class(this.invalid)),l.modifier("disabled").class(this.disabled||this.readonly)),l.modifier("focused").class(this.isPopoverOpen)),l.modifier("inverted-footer").class(this.inverted))},h("div",{class:Object.assign(Object.assign({},s.class()),s.modifier("clickable").class(!this.isPopoverOpen&&!this.disabled&&!this.readonly)),onClick:this.handleInputClick,ref:function(t){return e.selectionEl=t}},i.filter((function(t){return e.multiple})).map((function(e){return h(o,{value:e})})),h("input",{type:"text",class:Object.assign(Object.assign({},c.class()),{input:true,"is-inverted":this.inverted,"is-danger":this.invalid,"is-disabled":this.disabled||this.readonly,"is-clickable":!this.isPopoverOpen&&!this.disabled&&!this.readonly,"data-test-select-input":true}),id:this.ariaForm.controlId||this.inputId,"aria-labelledby":this.ariaForm.labelId,"aria-describedby":this.ariaForm.messageId,"aria-invalid":this.invalid===true?"true":"false","aria-disabled":this.disabled?"true":null,"data-testid":"bal-select-input",autocomplete:this.autocomplete,placeholder:this.inputPlaceholder,readonly:!this.typeahead||this.disabled||this.readonly,contentEditable:this.typeahead,disabled:this.disabled,maxLength:this.maxLength,tabindex:this.balTabindex,onInput:this.handleInput,onClick:this.handleInputClick,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyPress:this.handleKeyPress,ref:function(t){return e.inputElement=t}})),!this.freeSolo&&!this.loading?h("bal-icon",{class:Object.assign(Object.assign(Object.assign({},a.class()),a.modifier("loading").class(this.loading)),a.modifier("clickable").class(!this.disabled&&!this.readonly)),name:!this.inverted?"caret-down":"caret-up",color:this.disabled||this.readonly?"grey-light":this.inverted?"white":this.invalid?"danger":"primary",turn:this.isPopoverOpen,onClick:function(t){return e.handleInputClick(t,true)},size:!this.inverted?"":"x-small"}):""),h("bal-popover-content",{class:Object.assign({},u.class()),scrollable:this.scrollable,spaceless:true,expanded:true},this.optionArray.map((function(t,o){return h("button",{type:"button",role:"option",id:t.id,"data-value":t.value,"data-label":t.label,class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},p.class()),p.modifier("selected").class(i.includes(t.value)&&!(e.typeahead&&!e.multiple))),p.modifier("focused").class(e.focusIndex===o)),p.modifier("checkbox").class(e.multiple)),p.modifier("disabled").class(t.disabled===true)),"data-testid":"bal-select-option",disabled:t.disabled,tabIndex:-1,onMouseEnter:function(){return e.handleOptionMouseEnter(o)},onClick:function(){return e.optionSelected(t)}},h("div",{class:Object.assign({},b.class())},h("span",{class:Object.assign({},f.class()),style:{display:e.multiple?"flex":"none"}},h("bal-checkbox",{checked:i.includes(t.value),tabindex:-1,hidden:true,flat:true,onBalChange:preventDefault})),h("span",{class:Object.assign({},v.class()),innerHTML:t.innerHTML})))})),h("div",{class:Object.assign(Object.assign({},d.class()),d.modifier("hidden").class(this.noDataLabel===undefined||this.hasOptions()||!this.typeahead||this.selectionOptional))},this.noDataLabel))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueWatcher"]}},enumerable:false,configurable:true});return e}();__decorate$1([Logger("bal-select")],Select.prototype,"createLogger",null);var selectIds=0;Select.style={css:balSelectCss};var __decorate=undefined&&undefined.__decorate||function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)if(l=e[a])n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n;return r>3&&n&&Object.defineProperty(t,o,n),n};var SelectOption=function(){function e(e){registerInstance(this,e);this.label=undefined;this.disabled=false;this.value=undefined;this.for="bal-selopt-".concat(selectOptionIds++)}e.prototype.createLogger=function(e){this.log=e};e.prototype.render=function(){return h(Host,{style:{display:"none"}},h("slot",null))};return e}();__decorate([Logger("bal-select-option")],SelectOption.prototype,"createLogger",null);var selectOptionIds=0;export{Select as bal_select,SelectOption as bal_select_option};