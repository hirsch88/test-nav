import{b as s}from"./p-add1e9ec.js";const o=s=>{c({configChanged(o){s(o)}})},t=()=>{if(!s.hasWindow)return;const o=window;return o&&o.BaloiseDesignSystem&&o.BaloiseDesignSystem.config},c=s=>{const o=t();o&&o.attach(s)},n=s=>{const o=t();o&&o.detach(s)},a=s=>{const o=t();o&&o.attachComponent(s)},e=s=>{const o=t();o&&o.detachComponent(s)},r=s=>{const o=t();o&&(o.language=s)},d=s=>{const o=t();o&&(o.region=s)},i=s=>{const o=t();o&&(o.allowedLanguages=s)},b=s=>{const o=t();o&&(o.icons=Object.assign(Object.assign({},o.icons),s))},f=s=>{const o=t();o&&(o.animated=s)};export{c as a,f as b,b as c,n as d,r as e,d as f,t as g,a as h,e as i,o,i as u}