import{__awaiter,__generator,__spreadArray}from"tslib";import{h,r as registerInstance,c as createEvent,H as Host,g as getElement}from"./index-e015dbc8.js";import{g as areArraysEqual}from"./index.esm-df73647b.js";import{s as stopEventBubbling,a as inputHandleHostClick,i as inputHandleFocus,e as inputHandleBlur,c as inputSetFocus,d as inputSetBlur}from"./form-input-fd2d14ca.js";import{L as Logger}from"./log-01623e2c.js";import{c as createCommonjsModule,g as getDefaultExportFromCjs}from"./_commonjsHelpers-ba3f0406.js";import{B as BEM}from"./bem-1b28532d.js";import{F as FileUploadRejectionReason}from"./bal-file-upload.type-02fb0bc0.js";import{d as defaultBalAriaForm}from"./form-479fd066.js";import"./index-82aff103.js";import"./browser-9199b5e2.js";var spec=createCommonjsModule((function(e,i){Object.defineProperty(i,"__esModule",{value:true});var t={radix:1e3,unit:["b","kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"]};var a={radix:1024,unit:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"]};var l={radix:1024,unit:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"]};i.SPECS={si:t,iec:a,jedec:l}}));var lib=createCommonjsModule((function(e,i){Object.defineProperty(i,"__esModule",{value:true});function t(e,i,t){if(i===void 0){i=1}e=Math.abs(e);var a=spec.SPECS[t]||spec.SPECS["jedec"],l=a.radix,n=a.unit;var r=0;while(e>=l){e/=l;++r}return e.toFixed(i)+" "+n[r]}i.default=t}));var fileSize=getDefaultExportFromCjs(lib);var bemListEl=BEM.block("file-upload").element("list");var FileListComponent=function(e){var i=e.files,t=e.disabled,a=e.subTitle,l=e.onRemoveFile;return h("bal-card",{class:Object.assign({},bemListEl.class()),flat:true},h("bal-list",{disabled:t,border:true,size:"large"},i.map((function(e,i){return h("bal-list-item",{disabled:t},h("bal-list-item-icon",null,h("bal-icon",{name:"document"})),h("bal-list-item-content",null,h("bal-list-item-title",null,e.name),h("bal-list-item-subtitle",null,a?a(e):fileSize(e.size))),h("bal-list-item-icon",{right:true,class:{"file-remove":true,"is-clickable":!t},onClick:function(e){return l(e,i)}},h("bal-icon",{name:"trash",color:t?"grey":"danger"})))}))))};var toFileArray=function(e){return Array.from(e?e:[])};var toFileList=function(e){var i=new DataTransfer;if(e&&e.length>0){e.forEach((function(e){return i.items.add(e)}))}return i.files};var validateFileArray=function(e,i,t){var a=[];var l=__spreadArray([],e,true);var n=[];var r=function(r){var s=i[r];if(s){var o=[];if(t.accept&&t.accept.split(" ").join("").split(",").indexOf(s.type)===-1){o.push(FileUploadRejectionReason.BAD_EXTENSION)}if(t.maxFileSize!==undefined&&s.size>t.maxFileSize){o.push(FileUploadRejectionReason.FILE_TOO_BIG)}var d=l.map((function(e){return e.size})).reduce((function(e,i){return e+i}),0);var u=d+s.size;if(t.maxBundleSize!==undefined&&u>t.maxBundleSize){o.push(FileUploadRejectionReason.FILE_SIZE_SUM_TOO_BIG)}var f=l.length+1;if(t.maxFiles!==undefined&&f>t.maxFiles){o.push(FileUploadRejectionReason.TOO_MANY_FILES)}var c=function(e,i){return e.size===i.size&&e.name===i.name&&e.type===i.type&&e.lastModified===i.lastModified};var p=e.filter((function(e){return c(e,s)}));if(p.length>0){o.push(FileUploadRejectionReason.DUPLICATED_FILE)}if(o.length>0){n.push({file:s,reasons:o})}else{l.push(s);a.push(s)}}};for(var s=0;s<i.length;s++){r(s)}return{validFiles:a,invalidFiles:n}};var balFileUploadCss=".bal-file-upload{display:block;position:static;width:100%}.bal-file-upload .file-label{word-break:break-word;white-space:normal}.bal-file-upload .bal-heading{word-break:break-all}.bal-file-upload__card{margin-top:var(--bal-space-normal)}.bal-file-upload__list{padding:0 !important}";var __decorate=undefined&&undefined.__decorate||function(e,i,t,a){var l=arguments.length,n=l<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,t):a,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,i,t,a);else for(var s=e.length-1;s>=0;s--)if(r=e[s])n=(l<3?r(n):l>3?r(i,t,n):r(i,t))||n;return l>3&&n&&Object.defineProperty(i,t,n),n};var FileUpload=function(){function e(e){var i=this;registerInstance(this,e);this.balChange=createEvent(this,"balChange",7);this.balFilesAdded=createEvent(this,"balFilesAdded",7);this.balFilesRemoved=createEvent(this,"balFilesRemoved",7);this.balRejectedFile=createEvent(this,"balRejectedFile",7);this.balInputClick=createEvent(this,"balInputClick",7);this.balBlur=createEvent(this,"balBlur",7);this.balFocus=createEvent(this,"balFocus",7);this.fileUploadId="bal-file-upload-".concat(FileUploadIds++);this.initialValue=this.value||[];this.addEventListenerDragAndDrop=function(){if(i.labelEl){i.labelEl.addEventListener("dragenter",i.onDragenter,false);i.labelEl.addEventListener("dragover",i.onDragover,false);i.labelEl.addEventListener("drop",i.onDrop,false)}};this.removeEventListenerDragAndDrop=function(){if(i.labelEl){i.labelEl.removeEventListener("dragenter",i.onDragenter,false);i.labelEl.removeEventListener("dragover",i.onDragover,false);i.labelEl.removeEventListener("drop",i.onDrop,false)}};this.handleFiles=function(e){var t=toFileArray(e);var a=validateFileArray(i.files,t,{accept:i.accept,maxFileSize:i.maxFileSize,maxBundleSize:i.maxBundleSize,maxFiles:i.maxFiles});if(a.invalidFiles.length>0){i.balRejectedFile.emit(a.invalidFiles[0])}if(a.validFiles.length>0){i.balFilesAdded.emit(a.validFiles);i.files=__spreadArray(__spreadArray([],i.files,true),a.validFiles,true);i.balChange.emit(i.files)}i.updateFileInput()};this.updateFileInput=function(){var e;if((e=i.nativeInput)===null||e===void 0?void 0:e.files){i.nativeInput.files=toFileList(i.files)}};this.onDragenter=function(e){stopEventBubbling(e)};this.onDragover=function(e){stopEventBubbling(e)};this.onDrop=function(e){stopEventBubbling(e);if(!i.disabled&&!i.readonly&&!i.loading){var t=e.dataTransfer;if(t){i.handleFiles(t.files)}}};this.onInputChange=function(){var e;if(!i.disabled&&!i.readonly&&!i.loading){if((e=i.nativeInput)===null||e===void 0?void 0:e.files){i.handleFiles(i.nativeInput.files)}}};this.onRemoveFile=function(e,t){stopEventBubbling(e);if(t>=0&&t<i.files.length){var a=i.files;var l=a.splice(t,1);i.balFilesRemoved.emit(l);i.files=__spreadArray([],a,true);i.balChange.emit(i.files);i.updateFileInput()}};this.onHostClick=function(e){return inputHandleHostClick(i,e)};this.onInputFocus=function(e){return inputHandleFocus(i,e)};this.onInputBlur=function(e){return inputHandleBlur(i,e)};this.onInputClick=function(e){if(i.nativeInput&&!i.disabled&&!i.readonly&&!i.loading){i.nativeInput.value=""}i.balInputClick.emit(e)};this.files=[];this.focused=false;this.ariaForm=defaultBalAriaForm;this.name=this.fileUploadId;this.value=[];this.label="Choose or drop a file...";this.multiple=true;this.disabled=false;this.readonly=false;this.loading=false;this.required=false;this.accept=undefined;this.maxFiles=undefined;this.maxFileSize=undefined;this.maxBundleSize=undefined;this.hasFileList=true;this.invalid=false;this.subTitle=undefined}e.prototype.createLogger=function(e){this.log=e};e.prototype.onValueChange=function(){if(!areArraysEqual(this.files,this.value)){this.files=this.value}};e.prototype.componentWillLoad=function(){this.onValueChange()};e.prototype.connectedCallback=function(){this.initialValue=this.value||[];this.addEventListenerDragAndDrop()};e.prototype.componentDidLoad=function(){this.addEventListenerDragAndDrop()};e.prototype.disconnectedCallback=function(){this.removeEventListenerDragAndDrop()};e.prototype.resetHandler=function(e){var i=this;var t=e.target;if(t===null||t===void 0?void 0:t.contains(this.el)){this.files=__spreadArray([],this.initialValue,true);clearTimeout(this.resetHandlerTimer);this.resetHandlerTimer=setTimeout((function(){if(i.nativeInput){i.nativeInput.files=toFileList(i.initialValue)}}))}};e.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.files=[];this.updateFileInput();return[2]}))}))};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){inputSetFocus(this);return[2]}))}))};e.prototype.setBlur=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){inputSetBlur(this);return[2]}))}))};e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};e.prototype.setAriaForm=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){this.ariaForm=Object.assign({},e);return[2]}))}))};e.prototype.render=function(){var e=this;var i=this.ariaForm.controlId||this.fileUploadId;return h(Host,{onClick:this.onHostClick,"aria-disabled":this.disabled?"true":null,class:{"bal-file-upload":true}},h("div",{class:{file:true,"is-disabled":this.disabled||this.readonly||this.loading,"is-danger":this.invalid}},h("label",{htmlFor:i,ref:function(i){return e.labelEl=i},class:{"file-label":true,"is-disabled":this.disabled||this.loading||this.readonly}},h("input",{class:"file-input",type:"file",id:i,"aria-labelledby":this.ariaForm.labelId,"aria-describedby":this.ariaForm.messageId,"aria-invalid":this.invalid===true?"true":"false","aria-disabled":this.disabled?"true":null,name:this.name,multiple:this.multiple,disabled:this.disabled||this.loading||this.readonly,readonly:this.readonly,required:this.required,accept:this.accept,onClick:this.onInputClick,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur,ref:function(i){return e.nativeInput=i},"data-testid":"bal-file-upload-input"}),this.loading?h("span",{class:"file-cta"},h("bal-spinner",null)):h("span",{class:"file-cta"},h("span",{class:"file-icon"},h("bal-icon",{name:"upload",size:"medium",color:this.disabled||this.loading||this.readonly?"grey-light":this.invalid?"danger":"blue"})),h("span",{class:"file-label","data-testid":"bal-file-upload-label"},this.label)))),this.hasFileList&&this.files.length>0?h(FileListComponent,{files:this.files,disabled:this.disabled||this.readonly||this.loading,subTitle:this.subTitle,onRemoveFile:this.onRemoveFile}):"")};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["onValueChange"]}},enumerable:false,configurable:true});return e}();__decorate([Logger("bal-file-upload")],FileUpload.prototype,"createLogger",null);var FileUploadIds=0;FileUpload.style={css:balFileUploadCss};export{FileUpload as bal_file_upload};