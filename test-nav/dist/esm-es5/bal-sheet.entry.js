import{r as registerInstance,h,H as Host}from"./index-e015dbc8.js";import{B as BEM}from"./bem-1b28532d.js";var balSheetCss=":root{--bal-sheet-radius:var(--bal-radius-large);--bal-sheet-background-color:var(--bal-color-white);--bal-sheet-shadow:var(--bal-shadow-normal);--bal-sheet-position-bottom:.5rem}.bal-sheet{display:block;position:fixed;bottom:var(--bal-sheet-position-bottom);left:0;right:0;width:100%;z-index:var(--bal-z-index-sticky);font-weight:var(--bal-weight-regular);font-family:var(--bal-font-family-text);font-size:var(--bal-size-normal)}.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{border-radius:var(--bal-sheet-radius);background:var(--bal-sheet-background);-webkit-box-shadow:var(--bal-sheet-shadow);box-shadow:var(--bal-sheet-shadow);padding:1rem}@media screen and (min-width: 769px),print{.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{padding:1rem 1.5rem}}";var Sheet=function(){function e(e){registerInstance(this,e);this.containerSize=""}e.prototype.render=function(){var e;var a=BEM.block("sheet");var t=a.element("container");var s=t.element("inner");var n=this.containerSize!==""?"is-".concat(this.containerSize):"";return h(Host,{class:Object.assign({},a.class())},h("div",{class:Object.assign(Object.assign({},t.class()),(e={container:true},e[n]=true,e))},h("div",{class:Object.assign({},s.class())},h("slot",null))))};return e}();Sheet.style={css:balSheetCss};export{Sheet as bal_sheet};