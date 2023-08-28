export{a as attachToConfig,d as detachFromConfig,o as onBalConfigChange,u as updateBalAllowedLanguages,b as updateBalAnimated,c as updateBalIcons,e as updateBalLanguage,f as updateBalRegion,g as useBalConfig}from"./p-97b591c9.js";export{F as FileUploadRejectionReason}from"./p-3edac1bb.js";export{i as i18nBalClose}from"./p-97cc5f72.js";export{i as i18nBalDatepicker}from"./p-3ede0dab.js";export{i as i18nBalTimeInput}from"./p-43dbfe15.js";export{i as i18nBalInputStepper}from"./p-3d7415c9.js";export{i as i18nBalLabel}from"./p-345233f3.js";export{a as BalSnackbarController,B as BalToastController,c as balSnackbarController,b as balToastController,i as initializeBaloiseDesignSystem}from"./p-27c8fa27.js";export{n as newBalStepOption}from"./p-f3413edf.js";export{n as newBalTabOption}from"./p-21cfacbf.js";import{g as t,c as r}from"./p-7f5e6a6c.js";export{c as componentOnReady,f as deepReady,g as getAppRoot,i as isDescendant,s as shallowReady,h as wait,b as waitAfterFramePaint,e as waitAfterIdleCallback,w as waitForComponent,a as waitForDesignSystem}from"./p-7f5e6a6c.js";export{s as scrollToFirstInvalidField}from"./p-ba7c87d4.js";export{B as BalScrollHandler}from"./p-be4dae99.js";import{b as l}from"./p-add1e9ec.js";export{b as balBrowser}from"./p-add1e9ec.js";import{b as p}from"./p-f146219b.js";export{b as balDevice}from"./p-f146219b.js";import{B as m,b as j}from"./p-12b924ac.js";export{a as balBreakpointSubject,b as balBreakpoints}from"./p-12b924ac.js";import{S as x}from"./p-350daa19.js";export{B as BalSwipeSubject}from"./p-cf723e4c.js";import{g as y,a as C}from"./p-98d687f2.js";export{d as defaultConfig,i as initialize}from"./p-1d3855f9.js";export{i as initStyleMode}from"./p-ac1d269e.js";import"./p-55865e45.js";import"./p-393ab408.js";import"./p-585cea76.js";import"./p-e85eaa4e.js";const S={de:{optional:" (optional)"},en:{optional:" (optional)"},fr:{optional:" (optionnel)"},it:{optional:" (opzionale)"},nl:{optional:" (optioneel)"},es:{optional:" (opcional)"},pl:{optional:" (opcjonalnie)"},pt:{optional:" (opcional)"},sv:{optional:" (frivillig)"},fi:{optional:" (valinnainen)"}},v=a=>Object.assign(Object.assign({interface:"checkbox",labelHidden:!1,flat:!1,disabled:!1,readonly:!1,required:!1,hidden:!1,invalid:!1,checked:!1},a),{label:"",html:a.label}),k=a=>Object.assign(Object.assign({interface:"radio",labelHidden:!1,flat:!1,disabled:!1,readonly:!1,required:!1,hidden:!1,invisible:!1,invalid:!1},a),{label:"",html:a.label}),O=(a,e,o=!1,s)=>({value:a,label:e,disabled:o,data:s}),R=(a,e=!1,o)=>O(a,a,e,o),T=new class extends x{constructor(){super((a=>a.orientationListener(this.state))),this.listener=new m,this.state=p.orientation.toObject(),this.listener.connect(),this.listener.add((()=>{const a=p.orientation.toObject();this.isEqual(a)||(this.state=a,this.notify(void 0))}))}attach(a){super.attach(a),a.orientationListener(this.state)}isEqual(a){return a.landscape===this.state.landscape&&a.portrait===this.state.portrait}};class A{constructor(){this.tag="bal-modal"}create(a){return"undefined"!=typeof customElements&&l.hasDocument?customElements.whenDefined(this.tag).then((()=>{const e=document.createElement(this.tag);return Object.assign(e,a),t(document).appendChild(e),new Promise((a=>r(e,a)))})):Promise.resolve()}async dismissAll(a,e){if(l.hasDocument){const o=y(document,this.tag);await Promise.all(o.map((o=>o.dismiss(a,e))))}}dismiss(a,e,o){if(l.hasDocument){const s=C(document,this.tag,o);return s?s.dismiss(a,e):Promise.reject("overlay does not exist")}return Promise.resolve(!1)}async getTop(){if(l.hasDocument)return C(document,this.tag)}}const P=new A,D=()=>p.hasTouchScreen,I=a=>"Safari"===a&&l.isSafari,q=()=>j.detect(),z=(a,e)=>("string"==typeof a&&(e=a),!!e&&j.detect().includes(e)),E=O,H=R;export{A as BalModalController,E as NewBalOptionValue,H as NewBalSingleOptionValue,P as balModalController,T as balOrientationSubject,q as getPlatforms,D as hasTouchSupport,S as i18nBalFieldLabel,I as isBrowser,z as isPlatform,v as newBalCheckboxOption,O as newBalOptionValue,k as newBalRadioOption,R as newBalSingleOptionValue}