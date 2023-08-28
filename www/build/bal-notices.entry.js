import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const balNoticesCss = ".bal-notices{position:fixed !important;display:-ms-flexbox !important;display:flex !important;top:0 !important;bottom:0 !important;left:0 !important;right:0 !important;padding:16px !important;margin:0 !important;overflow:hidden !important;z-index:var(--bal-z-index-toast) !important;pointer-events:none !important;-ms-flex-direction:column !important;flex-direction:column !important}.bal-notices .container{width:100% !important}.bal-notices.has-snackbar{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:end;align-items:flex-end;-ms-flex-direction:column-reverse;flex-direction:column-reverse;margin:.5em}.bal-notices.has-snackbar .bal-snackbar{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-item-align:end;align-self:flex-end;pointer-events:auto !important}.bal-notices.has-toast{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;margin:.5em}.bal-notices.has-toast .bal-toast{-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:center;align-self:center}";

const BalNotices = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interface = 'toast';
  }
  render() {
    return (h(Host, { class: {
        'bal-app': true,
        'bal-notices': true,
        [`has-${this.interface}`]: true,
      } }, h("slot", null)));
  }
};
BalNotices.style = {
  css: balNoticesCss
};

export { BalNotices as bal_notices };
