import{__awaiter,__generator,__spreadArray}from"tslib";import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-e015dbc8.js";import{l as lodash_isnil}from"./index-82aff103.js";import{a as defaultLocale,d as defaultConfig}from"./initialize-92ae5fef.js";import{L as ListenToConfig}from"./config.decorator-54721e29.js";import{i as isCtrlOrCommandKey,N as NUMBER_KEYS,A as ACTION_KEYS}from"./keys.constant-a195c4b1.js";import{e as inputHandleBlur,f as inputHandleChange,s as stopEventBubbling,k as getUpcomingValue,i as inputHandleFocus,h as inputHandleClick,a as inputHandleHostClick,b as inputListenOnClick,j as inputHandleReset,c as inputSetFocus,d as inputSetBlur,g as getInputTarget,l as getNativeInputValue}from"./form-input-fd2d14ca.js";import{m as debounceEvent}from"./helpers-08b28736.js";import{i as inheritAttributes}from"./attributes-56afda45.js";import{g as useBalConfig}from"./index-8b8ed6bd.js";import{j as getDecimalSeparator$1,h as formatLocaleNumber$1,k as getThousandSeparator$1}from"./index.esm-df73647b.js";import{B as BEM}from"./bem-1b28532d.js";import{d as defaultBalAriaForm}from"./form-479fd066.js";import"./browser-9199b5e2.js";import"./log-01623e2c.js";import"./icons.constant-35253412.js";import"./_commonjsHelpers-ba3f0406.js";var numberTag="[object Number]";var objectProto=Object.prototype;var objectToString=objectProto.toString;function isObjectLike(e){return!!e&&typeof e=="object"}function isNaN$1(e){return isNumber(e)&&e!=+e}function isNumber(e){return typeof e=="number"||isObjectLike(e)&&objectToString.call(e)==numberTag}var lodash_isnan=isNaN$1;var getLocale=function(){var e=useBalConfig();return e&&e.locale||defaultLocale};var getDecimalSeparator=function(){return getDecimalSeparator$1(getLocale())};var getDecimalSeparators=function(){if(getThousandSeparator()!=="."){return[getDecimalSeparator(),"."]}return[getDecimalSeparator()]};var getThousandSeparator=function(){return getThousandSeparator$1(getLocale())};var formatLocaleNumber=function(e,t){return formatLocaleNumber$1(getLocale(),e,t)};var getNegativeSymbol=function(){return"-"};var parseFloatString=function(e){return e.replace(getDecimalSeparator(),".")};var formatFloatString=function(e){return e.replace(".",getDecimalSeparator())};var formatInputValue=function(e,t){if(t===void 0){t=0}if(e.charAt(0)===getDecimalSeparator()){e="0".concat(e)}var i=t===0?parseInt(e,10):parseFloat(e);return lodash_isnan(i)?"":formatLocaleNumber(i,t)};var balNumberInputCss=".bal-number-input{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0;font-family:var(--bal-font-family-text)}";var __decorate=undefined&&undefined.__decorate||function(e,t,i,n){var a=arguments.length,r=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,i,n);else for(var u=e.length-1;u>=0;u--)if(o=e[u])r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r;return a>3&&r&&Object.defineProperty(t,i,r),r};var NumberInput=function(){function e(e){var t=this;registerInstance(this,e);this.balInput=createEvent(this,"balInput",7);this.balChange=createEvent(this,"balChange",7);this.balBlur=createEvent(this,"balBlur",7);this.balFocus=createEvent(this,"balFocus",7);this.balKeyPress=createEvent(this,"balKeyPress",7);this.inputId="bal-number-input-".concat(numberInputIds++);this.inheritedAttributes={};this.inputValue=this.value;this.initialValue=0;this.onInput=function(e){var i=getInputTarget(e);if(i){var n=parseFloat(parseFloat(parseFloatString(i.value)).toFixed(t.decimal));if(!isNaN(n)){t.inputValue=n}else{if(!t.decimal&&i.value!==getNegativeSymbol()&&i.value!==getDecimalSeparator()){t.inputValue=undefined;i.value=""}}}t.balInput.emit(t.inputValue)};this.onBlur=function(e){inputHandleBlur(t,e);var i=getInputTarget(e);if(i&&(getDecimalSeparators().indexOf(i.value)>=0||i.value===getNegativeSymbol())){t.inputValue=undefined;i.value=""}if(t.exactNumber&&i&&(i.value===undefined||i.value===""||i.value===null)){t.inputValue=0;i.value="0"}inputHandleChange(t)};this.onKeydown=function(e){if(!lodash_isnil(e)&&!isCtrlOrCommandKey(e)){if(!t.getAllowedKeys().includes(e.key)){return stopEventBubbling(e)}var i=getNativeInputValue(t);if(getDecimalSeparators().indexOf(e.key)>=0){if(!t.decimal||i.split("").some((function(e){return getDecimalSeparators().includes(e)}))){return stopEventBubbling(e)}}if(e.key===getNegativeSymbol()){if(i.length!==0){return stopEventBubbling(e)}}if(__spreadArray(__spreadArray(__spreadArray([],NUMBER_KEYS,true),getDecimalSeparators(),true),[getNegativeSymbol()],false).indexOf(e.key)>=0){var n=getUpcomingValue(t,e);var a="";i.split("").some((function(e){if(getDecimalSeparators().includes(e)){a=e}}));if(a!==""){var r=a!==""&&n.includes(a)?n===null||n===void 0?void 0:n.split(a)[1]:"";if(r&&r.length>t.decimal){return stopEventBubbling(e)}}}}};this.onFocus=function(e){return inputHandleFocus(t,e)};this.onClick=function(e){return inputHandleClick(t,e)};this.handleClick=function(e){return inputHandleHostClick(t,e)};this.focused=false;this.language=defaultConfig.language;this.region=defaultConfig.region;this.ariaForm=defaultBalAriaForm;this.name=this.inputId;this.invalid=false;this.decimal=0;this.suffix=undefined;this.placeholder=undefined;this.required=false;this.disabled=false;this.readonly=false;this.exactNumber=false;this.max=undefined;this.min=undefined;this.debounce=0;this.value=undefined}e.prototype.debounceChanged=function(){this.balChange=debounceEvent(this.balChange,this.debounce)};e.prototype.listenOnClick=function(e){inputListenOnClick(this,e)};e.prototype.resetHandler=function(e){var t=e.target;if(t===null||t===void 0?void 0:t.contains(this.el)){inputHandleReset(this,this.initialValue,this.resetHandlerTimer)}};e.prototype.connectedCallback=function(){this.debounceChanged();this.initialValue=this.value||0};e.prototype.componentDidLoad=function(){this.inputValue=this.value};e.prototype.componentWillLoad=function(){this.inheritedAttributes=inheritAttributes(this.el,["aria-label","tabindex","title"])};e.prototype.configChanged=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.language=e.language;this.region=e.region;if(!this.focused&&this.nativeInput){this.nativeInput.value=this.getFormattedValue()}return[2]}))}))};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){inputSetFocus(this);return[2]}))}))};e.prototype.setBlur=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){inputSetBlur(this);return[2]}))}))};e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};e.prototype.setAriaForm=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.ariaForm=Object.assign({},e);return[2]}))}))};e.prototype.getAllowedKeys=function(){return __spreadArray(__spreadArray(__spreadArray(__spreadArray([],NUMBER_KEYS,true),ACTION_KEYS,true),getDecimalSeparators(),true),[getNegativeSymbol()],false)};e.prototype.getRawValue=function(){return typeof this.value==="number"&&!isNaN(this.value)?this.value.toString():(this.value||"").toString()};e.prototype.getFormattedValue=function(){var e=this.getRawValue();var t=this.suffix!==undefined&&e!==undefined&&e!==""?" "+this.suffix:"";return"".concat(formatInputValue(e,this.decimal)).concat(t)};Object.defineProperty(e.prototype,"pattern",{get:function(){var e=this.suffix||"";if(e!==""){e=" ".concat(e)}return"[".concat(getNegativeSymbol(),"0-9").concat(getThousandSeparator()).concat(this.decimal>0?getDecimalSeparator():"").concat(e,"]*")},enumerable:false,configurable:true});e.prototype.render=function(){var e=this;var t=this.focused?formatFloatString(this.getRawValue()):this.getFormattedValue();if(this.nativeInput&&this.nativeInput.value){this.nativeInput.value=t}var i=BEM.block("number-input");return h(Host,{onClick:this.handleClick,"aria-disabled":this.disabled?"true":null,class:Object.assign({},i.class())},h("input",Object.assign({class:{input:true,"is-disabled":this.disabled||this.readonly,"is-danger":this.invalid},"data-testid":"bal-number-input",ref:function(t){return e.nativeInput=t},id:this.ariaForm.controlId||this.inputId,"aria-labelledby":this.ariaForm.labelId,"aria-describedby":this.ariaForm.messageId,"aria-invalid":this.invalid===true?"true":"false","aria-disabled":this.disabled?"true":null,name:this.name,disabled:this.disabled,placeholder:this.placeholder||"",readonly:this.readonly,required:this.required,pattern:this.pattern,min:this.min,max:this.max,value:t,onInput:function(t){return e.onInput(t)},onFocus:function(t){return e.onFocus(t)},onBlur:function(t){return e.onBlur(t)},onClick:this.onClick,onKeyDown:function(t){return e.onKeydown(t)},onKeyPress:function(t){return e.balKeyPress.emit(t)}},this.inheritedAttributes)))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{debounce:["debounceChanged"]}},enumerable:false,configurable:true});return e}();__decorate([ListenToConfig()],NumberInput.prototype,"configChanged",null);var numberInputIds=0;NumberInput.style={css:balNumberInputCss};export{NumberInput as bal_number_input};