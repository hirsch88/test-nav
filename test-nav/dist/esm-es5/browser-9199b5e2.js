var BrowserWindow=function(){function e(){}Object.defineProperty(e.prototype,"width",{get:function(){if(balBrowser.hasWindow){return window.innerWidth}return 0},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"height",{get:function(){if(balBrowser.hasWindow){return window.innerHeight}return 0},enumerable:false,configurable:true});return e}();var Browser=function(){function e(){this.window=new BrowserWindow}Object.defineProperty(e.prototype,"isSafari",{get:function(){return/^((?!chrome|android).)*safari/i.test(this.userAgent)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"hasWindow",{get:function(){return typeof window!=="undefined"},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"hasNavigator",{get:function(){return typeof navigator!=="undefined"},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"hasDocument",{get:function(){return typeof document!=="undefined"},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"userAgent",{get:function(){var e;if(this.hasWindow&&this.hasNavigator){return(e=navigator.userAgent)!==null&&e!==void 0?e:""}return""},enumerable:false,configurable:true});return e}();var balBrowser=new Browser;export{balBrowser as b};