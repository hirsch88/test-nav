import{__awaiter,__generator}from"tslib";import{r as registerInstance,h,H as Host}from"./index-e015dbc8.js";import{a as commonjsGlobal}from"./_commonjsHelpers-ba3f0406.js";import{B as BEM}from"./bem-1b28532d.js";import{d as defaultConfig}from"./initialize-92ae5fef.js";import{L as ListenToConfig}from"./config.decorator-54721e29.js";import"./browser-9199b5e2.js";import"./log-01623e2c.js";import"./icons.constant-35253412.js";import"./index-8b8ed6bd.js";var INFINITY$1=1/0;var symbolTag$1="[object Symbol]";var rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$1="\\u0300-\\u036f\\ufe20-\\ufe23",rsComboSymbolsRange$1="\\u20d0-\\u20f0",rsVarRange$1="\\ufe0e\\ufe0f";var rsAstral$1="["+rsAstralRange$1+"]",rsCombo$1="["+rsComboMarksRange$1+rsComboSymbolsRange$1+"]",rsFitz$1="\\ud83c[\\udffb-\\udfff]",rsModifier$1="(?:"+rsCombo$1+"|"+rsFitz$1+")",rsNonAstral$1="[^"+rsAstralRange$1+"]",rsRegional$1="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair$1="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d";var reOptMod$1=rsModifier$1+"?",rsOptVar$1="["+rsVarRange$1+"]?",rsOptJoin$1="(?:"+rsZWJ$1+"(?:"+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join("|")+")"+rsOptVar$1+reOptMod$1+")*",rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1,rsSymbol$1="(?:"+[rsNonAstral$1+rsCombo$1+"?",rsCombo$1,rsRegional$1,rsSurrPair$1,rsAstral$1].join("|")+")";var reUnicode$1=RegExp(rsFitz$1+"(?="+rsFitz$1+")|"+rsSymbol$1+rsSeq$1,"g");var reHasUnicode$1=RegExp("["+rsZWJ$1+rsAstralRange$1+rsComboMarksRange$1+rsComboSymbolsRange$1+rsVarRange$1+"]");var freeGlobal$1=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var freeSelf$1=typeof self=="object"&&self&&self.Object===Object&&self;var root$1=freeGlobal$1||freeSelf$1||Function("return this")();function asciiToArray$1(r){return r.split("")}function hasUnicode$1(r){return reHasUnicode$1.test(r)}function stringToArray$1(r){return hasUnicode$1(r)?unicodeToArray$1(r):asciiToArray$1(r)}function unicodeToArray$1(r){return r.match(reUnicode$1)||[]}var objectProto$1=Object.prototype;var objectToString$1=objectProto$1.toString;var Symbol$1=root$1.Symbol;var symbolProto$1=Symbol$1?Symbol$1.prototype:undefined,symbolToString$1=symbolProto$1?symbolProto$1.toString:undefined;function baseSlice$1(r,e,i){var o=-1,a=r.length;if(e<0){e=-e>a?0:a+e}i=i>a?a:i;if(i<0){i+=a}a=e>i?0:i-e>>>0;e>>>=0;var n=Array(a);while(++o<a){n[o]=r[o+e]}return n}function baseToString$1(r){if(typeof r=="string"){return r}if(isSymbol$1(r)){return symbolToString$1?symbolToString$1.call(r):""}var e=r+"";return e=="0"&&1/r==-INFINITY$1?"-0":e}function castSlice$1(r,e,i){var o=r.length;i=i===undefined?o:i;return!e&&i>=o?r:baseSlice$1(r,e,i)}function createCaseFirst$1(r){return function(e){e=toString$1(e);var i=hasUnicode$1(e)?stringToArray$1(e):undefined;var o=i?i[0]:e.charAt(0);var a=i?castSlice$1(i,1).join(""):e.slice(1);return o[r]()+a}}function isObjectLike$1(r){return!!r&&typeof r=="object"}function isSymbol$1(r){return typeof r=="symbol"||isObjectLike$1(r)&&objectToString$1.call(r)==symbolTag$1}function toString$1(r){return r==null?"":baseToString$1(r)}var upperFirst$1=createCaseFirst$1("toUpperCase");var lodash_upperfirst=upperFirst$1;var INFINITY=1/0;var symbolTag="[object Symbol]";var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f\\ufe20-\\ufe23",rsComboSymbolsRange="\\u20d0-\\u20f0",rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;var rsApos="['’]",rsAstral="["+rsAstralRange+"]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboMarksRange+rsComboSymbolsRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d";var rsLowerMisc="(?:"+rsLower+"|"+rsMisc+")",rsUpperMisc="(?:"+rsUpper+"|"+rsMisc+")",rsOptLowerContr="(?:"+rsApos+"(?:d|ll|m|re|s|t|ve))?",rsOptUpperContr="(?:"+rsApos+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")";var reApos=RegExp(rsApos,"g");var reComboMark=RegExp(rsCombo,"g");var reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");var reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptLowerContr+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsUpperMisc+"+"+rsOptUpperContr+"(?="+[rsBreak,rsUpper+rsLowerMisc,"$"].join("|")+")",rsUpper+"?"+rsLowerMisc+"+"+rsOptLowerContr,rsUpper+"+"+rsOptUpperContr,rsDigits,rsEmoji].join("|"),"g");var reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+"]");var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var deburredLetters={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"};var freeGlobal=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function("return this")();function arrayReduce(r,e,i,o){var a=-1,n=r?r.length:0;if(o&&n){i=r[++a]}while(++a<n){i=e(i,r[a],a,r)}return i}function asciiToArray(r){return r.split("")}function asciiWords(r){return r.match(reAsciiWord)||[]}function basePropertyOf(r){return function(e){return r==null?undefined:r[e]}}var deburrLetter=basePropertyOf(deburredLetters);function hasUnicode(r){return reHasUnicode.test(r)}function hasUnicodeWord(r){return reHasUnicodeWord.test(r)}function stringToArray(r){return hasUnicode(r)?unicodeToArray(r):asciiToArray(r)}function unicodeToArray(r){return r.match(reUnicode)||[]}function unicodeWords(r){return r.match(reUnicodeWord)||[]}var objectProto=Object.prototype;var objectToString=objectProto.toString;var Symbol=root.Symbol;var symbolProto=Symbol?Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;function baseSlice(r,e,i){var o=-1,a=r.length;if(e<0){e=-e>a?0:a+e}i=i>a?a:i;if(i<0){i+=a}a=e>i?0:i-e>>>0;e>>>=0;var n=Array(a);while(++o<a){n[o]=r[o+e]}return n}function baseToString(r){if(typeof r=="string"){return r}if(isSymbol(r)){return symbolToString?symbolToString.call(r):""}var e=r+"";return e=="0"&&1/r==-INFINITY?"-0":e}function castSlice(r,e,i){var o=r.length;i=i===undefined?o:i;return!e&&i>=o?r:baseSlice(r,e,i)}function createCaseFirst(r){return function(e){e=toString(e);var i=hasUnicode(e)?stringToArray(e):undefined;var o=i?i[0]:e.charAt(0);var a=i?castSlice(i,1).join(""):e.slice(1);return o[r]()+a}}function createCompounder(r){return function(e){return arrayReduce(words(deburr(e).replace(reApos,"")),r,"")}}function isObjectLike(r){return!!r&&typeof r=="object"}function isSymbol(r){return typeof r=="symbol"||isObjectLike(r)&&objectToString.call(r)==symbolTag}function toString(r){return r==null?"":baseToString(r)}var camelCase=createCompounder((function(r,e,i){e=e.toLowerCase();return r+(i?capitalize(e):e)}));function capitalize(r){return upperFirst(toString(r).toLowerCase())}function deburr(r){r=toString(r);return r&&r.replace(reLatin,deburrLetter).replace(reComboMark,"")}var upperFirst=createCaseFirst("toUpperCase");function words(r,e,i){r=toString(r);e=i?undefined:e;if(e===undefined){return hasUnicodeWord(r)?unicodeWords(r):asciiWords(r)}return r.match(e)||[]}var lodash_camelcase=camelCase;var balIconCss=":root{--bal-icon-color-grey:var(--bal-color-grey-5);--bal-icon-color-grey-light:var(--bal-color-border-grey-dark);--bal-icon-color-success:var(--bal-color-success);--bal-icon-color-warning:var(--bal-color-warning);--bal-icon-color-danger:var(--bal-color-danger);--bal-icon-color-danger-dark:var(--bal-color-danger-5);--bal-icon-color-danger-darker:var(--bal-color-danger-6);--bal-icon-color-primary:var(--bal-color-primary);--bal-icon-color-primary-dark:var(--bal-color-primary-6);--bal-icon-color-blue:var(--bal-color-primary);--bal-icon-color-light-blue:var(--bal-color-light-blue-5);--bal-icon-color-primary-light:var(--bal-color-primary-3);--bal-icon-color-white:var(--bal-color-white)}.bal-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:static;pointer-events:visible;width:1.125rem;max-height:1.125rem}.bal-icon--shadow svg{-webkit-filter:drop-shadow(0px 0px 80px rgba(0, 0, 0, 0.5));filter:drop-shadow(0px 0px 80px rgba(0, 0, 0, 0.5))}.bal-icon--is-inline{display:-ms-inline-flexbox;display:inline-flex}.bal-icon__inner{display:block;position:static;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;padding:.063rem;width:1.125rem;max-height:1.125rem}.bal-icon__inner--turn-plus{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.bal-icon__inner--turn-caret-down,.bal-icon__inner--turn-caret-up{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bal-icon__inner--turn-nav-go-down{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bal-icon__inner>svg{vertical-align:top}.bal-icon--is-xsmall{width:.75rem;max-height:.75rem}.bal-icon--is-x-small{width:.75rem;max-height:.75rem}.bal-icon--is-small{width:.875rem;max-height:.875rem}.bal-icon--is-medium{width:1.625rem;max-height:1.625rem}.bal-icon--is-large{width:2.5rem;max-height:2.5rem}.bal-icon--is-x-large{width:5rem;max-height:5rem}.bal-icon--is-xx-large{width:11rem;max-height:11rem}.bal-icon--is-grey svg,.bal-icon--is-grey g,.bal-icon--is-grey path,.bal-icon--is-grey circle{fill:var(--bal-icon-color-grey)}.bal-icon--is-grey-light svg,.bal-icon--is-grey-light g,.bal-icon--is-grey-light path,.bal-icon--is-grey-light circle{fill:var(--bal-icon-color-grey-light)}.bal-icon--is-success svg,.bal-icon--is-success g,.bal-icon--is-success path,.bal-icon--is-success circle{fill:var(--bal-icon-color-success)}.bal-icon--is-warning svg,.bal-icon--is-warning g,.bal-icon--is-warning path,.bal-icon--is-warning circle{fill:var(--bal-icon-color-warning)}.bal-icon--is-danger svg,.bal-icon--is-danger g,.bal-icon--is-danger path,.bal-icon--is-danger circle{fill:var(--bal-icon-color-danger)}.bal-icon--is-danger-dark svg,.bal-icon--is-danger-dark g,.bal-icon--is-danger-dark path,.bal-icon--is-danger-dark circle{fill:var(--bal-icon-color-danger-dark)}.bal-icon--is-danger-darker svg,.bal-icon--is-danger-darker g,.bal-icon--is-danger-darker path,.bal-icon--is-danger-darker circle{fill:var(--bal-icon-color-danger-darker)}.bal-icon--is-primary svg,.bal-icon--is-primary g,.bal-icon--is-primary path,.bal-icon--is-primary circle{fill:var(--bal-icon-color-primary)}.bal-icon--is-primary-dark svg,.bal-icon--is-primary-dark g,.bal-icon--is-primary-dark path,.bal-icon--is-primary-dark circle{fill:var(--bal-icon-color-primary-dark)}.bal-icon--is-blue svg,.bal-icon--is-blue g,.bal-icon--is-blue path,.bal-icon--is-blue circle{fill:var(--bal-icon-color-blue)}.bal-icon--is-light-blue svg,.bal-icon--is-light-blue g,.bal-icon--is-light-blue path,.bal-icon--is-light-blue circle{fill:var(--bal-icon-color-light-blue)}.bal-icon--is-primary-light svg,.bal-icon--is-primary-light g,.bal-icon--is-primary-light path,.bal-icon--is-primary-light circle{fill:var(--bal-icon-color-primary-light)}.bal-icon--is-white svg,.bal-icon--is-white g,.bal-icon--is-white path,.bal-icon--is-white circle,.bal-icon--is-inverted svg,.bal-icon--is-inverted g,.bal-icon--is-inverted path,.bal-icon--is-inverted circle{fill:var(--bal-icon-color-white)}.icon-text{-ms-flex-align:center;align-items:center;color:inherit;display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;-ms-flex-wrap:nowrap;flex-wrap:nowrap;word-break:break-word;line-height:1.5rem}.icon-text.is-small{line-height:1.75rem}.icon-text.is-medium{line-height:1.5rem}.icon-text.is-large{line-height:3rem}.icon-text.is-x-large{line-height:4rem}.icon-text.is-xlarge{line-height:4rem}.icon-text .icon{-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.icon-text .icon:not(:last-child){margin-right:.5rem}.icon-text .icon:not(:first-child){margin-right:.5rem}div.icon-text{display:-ms-flexbox;display:flex}";var __decorate=undefined&&undefined.__decorate||function(r,e,i,o){var a=arguments.length,n=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(r,e,i,o);else for(var t=r.length-1;t>=0;t--)if(s=r[t])n=(a<3?s(n):a>3?s(e,i,n):s(e,i))||n;return a>3&&n&&Object.defineProperty(e,i,n),n};var Icon=function(){function r(r){var e=this;registerInstance(this,r);this.svgContent=function(r){var i=Object.keys(e.icons).length>0;if(i&&r&&r.length>0){if(r.startsWith("alert")){r="alert-triangle"}if(r.startsWith("info")){r="info-circle"}var o=e.icons["balIcon".concat(lodash_upperfirst(lodash_camelcase(r)))];if(o){return o}}return e.svg||""};this.icons=defaultConfig.icons;this.name="";this.svg="";this.size="";this.color="";this.inline=false;this.inverted=false;this.turn=false;this.shadow=false;this.disabled=undefined;this.invalid=undefined;this.hovered=false;this.pressed=false}r.prototype.configChanged=function(r){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.icons=r.icons;return[2]}))}))};r.prototype.parseColor=function(){if(!!this.disabled){return"grey"}if(!!this.invalid){if(this.pressed){return"danger-darker"}else if(this.hovered){return"danger-dark"}else{return"danger"}}if(this.color!=="auto"){if(this.pressed){return"primary-dark"}else if(this.hovered){return"light-blue"}}return["auto","white","blue","grey","danger","warning","success","grey-light","primary","primary-light"].includes(this.color)?this.color:"primary"};r.prototype.render=function(){var r=this.parseColor();var e=BEM.block("icon");var i=this.svgContent(this.name);return h(Host,{"aria-hidden":"true",class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e.class()),e.modifier("is-inverted").class(this.inverted)),e.modifier("is-inline").class(this.inline)),e.modifier("shadow").class(this.shadow)),e.modifier("is-".concat(this.size)).class(!!this.size)),e.modifier("is-".concat(r)).class())},h("div",{class:Object.assign(Object.assign(Object.assign({},e.element("inner").class()),e.element("inner").modifier("turn-".concat(this.name)).class(this.turn)),e.modifier("is-".concat(this.size)).class(!!this.size)),innerHTML:i}))};return r}();__decorate([ListenToConfig()],Icon.prototype,"configChanged",null);Icon.style={css:balIconCss};export{Icon as bal_icon};