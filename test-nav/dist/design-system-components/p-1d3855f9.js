import{b as t}from"./p-add1e9ec.js";import{d as a}from"./p-585cea76.js";import{b as e,a as s,c as n,d as o,e as c,f as i,g as l,h as r,i as b,j as h,k as g,l as I,m as u,n as d,o as f,p as j,q as O,r as m,s as p,t as w,u as C,v,w as N,x as L,y as D}from"./p-55865e45.js";const G="baloise-persist-config",S=new class{constructor(){this._componentObservers=[],this._observers=[],this._config={region:"CH",language:"de",allowedLanguages:["de","fr","it","en"],icons:{balIconClose:e,balIconInfoCircle:s,balIconPlus:n,balIconMinus:o,balIconEdit:c,balIconTrash:i,balIconNavGoLeft:l,balIconNavGoRight:r,balIconNavGoDown:b,balIconNavGoUp:h,balIconCaretLeft:g,balIconCaretDown:I,balIconCheck:u,balIconDate:d,balIconDocument:f,balIconUpload:j,balIconMenuBars:O},fallbackLanguage:"de",logger:a,animated:!0}}get locale(){return`${this._config.language}-${this._config.region}`}get region(){return this._config.region}set region(t){t!==this._config.region&&(this._config.region=t,this._notify())}get language(){return this._config.language}set language(t){t!==this._config.language&&(this._config.language=this._config.allowedLanguages.includes(t)?t:this._config.fallbackLanguage,this._notify())}get allowedLanguages(){return this._config.allowedLanguages}set allowedLanguages(t){t!==this._config.allowedLanguages&&(this._config.allowedLanguages=t,this._notify())}get icons(){return this._config.icons}set icons(t){this._config.icons=Object.assign(Object.assign({},this._config.icons),t),this._notify()}get logger(){return this._config.logger}set logger(t){this._config.logger=Object.assign({},t),this._notify()}get animated(){return this._config.animated}set animated(t){this._config.animated=t,this._notify()}attach(t){if(this._observers.includes(t))return console.log("Subject: Observer has been attached already.");this._observers.push(t),t.configChanged(this._config)}detach(t){const a=this._observers.indexOf(t);if(-1===a)return console.log("Subject: Nonexistent observer.");this._observers.splice(a,1)}attachComponent(t){if(this._componentObservers.includes(t))return console.log("Subject: Observer has been attached already.");this._componentObservers.push(t),t.configChanged(this._config)}detachComponent(t){const a=this._componentObservers.indexOf(t);if(-1===a)return console.log("Subject: Nonexistent observer.");this._componentObservers.splice(a,1)}toString(){return JSON.stringify(this._config)}reset(t){this._config=Object.assign(Object.assign(Object.assign({},this._config),t),{icons:Object.assign(Object.assign({},this._config.icons),t.icons)}),this._notify(!1)}_notify(a=!0){for(const t of this._componentObservers)t.configChanged(this._config);if(a)for(const t of this._observers)t.configChanged(this._config);t.hasWindow&&y(window,this._config)}},k=t=>{try{const a=t.sessionStorage.getItem(G);return null!==a?JSON.parse(a):{}}catch(t){return{}}},y=(t,a)=>{try{t.sessionStorage.setItem(G,JSON.stringify(a))}catch(t){return}},U={region:"CH",language:"de",allowedLanguages:["de","fr","it","en"],icons:{balIconClose:e,balIconInfoCircle:s,balIconPlus:n,balIconMinus:o,balIconEdit:c,balIconTrash:i,balIconNavGoLeft:l,balIconNavGoRight:r,balIconNavGoDown:b,balIconNavGoUp:h,balIconCaretLeft:g,balIconCaretDown:I,balIconCheck:u,balIconDate:d,balIconDocument:f,balIconUpload:j,balIconMenuBars:O,balIconFacebook:m,balIconInstagram:p,balIconLinkedin:w,balIconTwitter:C,balIconXing:v,balIconYoutube:N,balIconWeb:L,balIconCaretUp:D},fallbackLanguage:"de",logger:a,animated:!0},x=`${U.language}-${U.region}`,M=(a={},e={})=>{t.hasWindow&&((e=window).BaloiseDesignSystem=e.BaloiseDesignSystem||{},S.reset(Object.assign(Object.assign(Object.assign(Object.assign({},U),k(e)),a),{icons:Object.assign(Object.assign(Object.assign({},U.icons),k(e).icons),a.icons)})),e.BaloiseDesignSystem.config=S)};export{x as a,U as d,M as i}