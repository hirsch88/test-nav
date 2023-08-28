import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';

const balToastCss = ":root{--bal-toast-font-size:var(--bal-size-normal);--bal-toast-font-family:var(--bal-font-family-text);--bal-toast-background:var(--bal-color-white);--bal-toast-background-primary:var(--bal-color-white);--bal-toast-background-info:var(--bal-color-info-2);--bal-toast-background-success:var(--bal-color-success-2);--bal-toast-background-warning:var(--bal-color-warning-2);--bal-toast-background-danger:var(--bal-color-danger-2);--bal-toast-radius:var(--bal-radius-large);--bal-toast-color:var(--bal-color-text-primary);--bal-toast-color-primary:var(--bal-color-text-primary);--bal-toast-color-info:var(--bal-color-text-primary);--bal-toast-color-success:var(--bal-color-text-primary);--bal-toast-color-warning:var(--bal-color-text-primary);--bal-toast-color-danger:var(--bal-color-text-primary)}.bal-toast{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-positive:0 !important;flex-grow:0 !important;width:100%}.bal-toast__inner{min-height:56px;border-radius:var(--bal-toast-radius);font-size:var(--bal-toast-font-size);font-family:var(--bal-toast-font-family);background:var(--bal-toast-background);color:var(--bal-toast-color);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1;margin:.5rem 0 0 0;-webkit-box-shadow:var(--bal-shadow-normal);box-shadow:var(--bal-shadow-normal);padding:1rem}.bal-toast__inner--is-primary{background:var(--bal-toast-background-primary);color:var(--bal-toast-color-primary)}.bal-toast__inner--is-info{background:var(--bal-toast-background-info);color:var(--bal-toast-color-info)}.bal-toast__inner--is-danger{background:var(--bal-toast-background-danger);color:var(--bal-toast-color-danger)}.bal-toast__inner--is-warning{background:var(--bal-toast-background-warning);color:var(--bal-toast-color-warning)}.bal-toast__inner--is-success{background:var(--bal-toast-background-success);color:var(--bal-toast-color-success)}@media screen and (min-width: 769px),print{.bal-toast__inner{padding:1rem}}@media screen and (min-width: 1024px){.bal-toast__inner{padding:1rem}}@media screen and (min-width: 769px),print{.bal-toast__inner{max-width:460px;width:460px}}@media screen and (min-width: 1024px){.bal-toast__inner{max-width:480px;width:480px}}.bal-toast__label{margin-right:3rem;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.bal-toast__close.bal-close{position:absolute;top:50%;right:1rem;margin-top:-0.75rem}";

const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balClose = createEvent(this, "balClose", 7);
    this.toastId = `bal-toast-${toastIds++}`;
    this.color = '';
    this.duration = 0;
    this.message = '';
    this.closeHandler = () => void 0;
  }
  async componentWillLoad() {
    if (this.duration > 0) {
      await this.closeIn(this.duration);
    }
  }
  async closeIn(duration) {
    this.timer = setTimeout(() => this.close(), duration);
  }
  async close() {
    this.element.remove();
    clearTimeout(this.timer);
    this.balClose.emit(this.toastId);
    this.closeHandler();
  }
  get colorType() {
    if (this.color === '') {
      return '';
    }
    return `bal-toast__inner--is-${this.color}`;
  }
  render() {
    return (h(Host, { id: this.toastId, class: "bal-toast" }, h("div", { role: "alert", onClick: () => this.close(), class: `bal-toast__inner ${this.colorType}` }, h("span", { class: "bal-toast__label", innerHTML: this.message, "data-testid": "bal-toast-label" }, h("slot", null)), h("bal-close", { class: "bal-toast__close", inverted: false, "data-testid": "bal-toast-close" }))));
  }
  get element() { return getElement(this); }
};
let toastIds = 0;
Toast.style = {
  css: balToastCss
};

export { Toast as bal_toast };
