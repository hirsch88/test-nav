import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './bal-button2.js';
import { d as defineCustomElement$5 } from './bal-close2.js';
import { d as defineCustomElement$4 } from './bal-heading2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const balSnackbarCss = ":root{--bal-snackbar-font-size:var(--bal-size-normal);--bal-snackbar-font-family:var(--bal-font-family-text);--bal-snackbar-background:var(--bal-color-white);--bal-snackbar-background-primary:var(--bal-color-white);--bal-snackbar-background-info:var(--bal-color-info-2);--bal-snackbar-background-success:var(--bal-color-success-2);--bal-snackbar-background-warning:var(--bal-color-warning-2);--bal-snackbar-background-danger:var(--bal-color-danger-2);--bal-snackbar-radius:var(--bal-radius-large);--bal-snackbar-color:var(--bal-color-text-primary);--bal-snackbar-color-primary:var(--bal-color-text-primary);--bal-snackbar-color-info:var(--bal-color-text-primary);--bal-snackbar-color-success:var(--bal-color-text-primary);--bal-snackbar-color-warning:var(--bal-color-text-primary);--bal-snackbar-color-danger:var(--bal-color-text-primary)}.bal-snackbar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-positive:0 !important;flex-grow:0 !important;width:100%;-ms-flex-pack:end;justify-content:flex-end}@media screen and (max-width: 768px){.bal-snackbar{width:288px}}@media screen and (min-width: 769px),print{.bal-snackbar{width:288px}}@media screen and (min-width: 1024px){.bal-snackbar{width:440px}}.bal-snackbar__inner{min-height:56px;border-radius:var(--bal-snackbar-radius);font-size:var(--bal-snackbar-font-size);font-family:var(--bal-snackbar-font-family);background:var(--bal-snackbar-background);color:var(--bal-snackbar-color);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1;margin:.5rem 0 0 0;-webkit-box-shadow:var(--bal-shadow-normal);box-shadow:var(--bal-shadow-normal);padding:1.25rem;-ms-flex-item-align:end;align-self:flex-end;-ms-flex-direction:column !important;flex-direction:column !important;row-gap:1rem}.bal-snackbar__inner--is-primary{background:var(--bal-snackbar-background-primary);color:var(--bal-snackbar-color-primary)}.bal-snackbar__inner--is-info{background:var(--bal-snackbar-background-info);color:var(--bal-snackbar-color-info)}.bal-snackbar__inner--is-danger{background:var(--bal-snackbar-background-danger);color:var(--bal-snackbar-color-danger)}.bal-snackbar__inner--is-warning{background:var(--bal-snackbar-background-warning);color:var(--bal-snackbar-color-warning)}.bal-snackbar__inner--is-success{background:var(--bal-snackbar-background-success);color:var(--bal-snackbar-color-success)}@media screen and (min-width: 769px),print{.bal-snackbar__inner{padding:1.25rem}}@media screen and (min-width: 1024px){.bal-snackbar__inner{padding:1.5rem}}.bal-snackbar__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}.bal-snackbar__footer{-ms-flex-pack:start;justify-content:start;margin-top:.5rem}.bal-snackbar__close.bal-close{position:absolute;right:1.5rem;top:1.5rem}";

const Snackbar = proxyCustomElement(class Snackbar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balClose = createEvent(this, "balClose", 7);
    this.balAction = createEvent(this, "balAction", 7);
    this.snackbarId = `bal-snackbar-${snackbarIds++}`;
    this.onActionHandler = () => {
      this.balAction.emit(this.snackbarId);
      this.actionHandler();
    };
    this.animationClass = 'fadeInDown';
    this.color = '';
    this.duration = 0;
    this.subject = '';
    this.message = '';
    this.icon = '';
    this.action = '';
    this.closeHandler = () => void 0;
    this.actionHandler = () => void 0;
    this.href = undefined;
    this.target = '_self';
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
    clearTimeout(this.timer);
    this.balClose.emit(this.snackbarId);
    this.element.remove();
    this.closeHandler();
  }
  get colorType() {
    if (this.color === '') {
      return '';
    }
    return `bal-snackbar__inner--is-${this.color}`;
  }
  get buttonType() {
    if (this.color === '') {
      return 'info';
    }
    return this.color;
  }
  render() {
    const labelAttributes = {};
    if (this.message !== undefined && this.message !== '') {
      labelAttributes.innerHTML = this.message;
    }
    return (h(Host, { id: this.snackbarId, class: "bal-snackbar" }, h("div", { role: "alert", class: `bal-snackbar__inner ${this.animationClass} ${this.colorType}` }, h("div", { class: "bal-snackbar__header" }, h("span", { class: "icon-text is-size-small" }, h("span", { class: "icon", style: { display: this.icon ? '' : 'none' } }, h("bal-icon", { name: this.icon, color: 'primary' })), h("bal-heading", { level: "h5", space: "none", "data-testid": "bal-snackbar-heading" }, this.subject))), h("span", Object.assign({ class: "bal-snackbar__label", "data-testid": "bal-snackbar-label" }, labelAttributes), h("slot", null), h("span", { class: "hidden" })), h("bal-close", { class: "bal-snackbar__close", "data-testid": "bal-snackbar-close", onClick: () => this.close() }), h("div", { class: "bal-snackbar__footer", style: { display: this.action === '' ? 'none' : 'inline-flex' } }, h("bal-button", { color: "info", href: this.href, target: this.target, onClick: () => this.onActionHandler(), "data-testid": "bal-snackbar-action" }, this.action)))));
  }
  get element() { return this; }
  static get style() { return {
    css: balSnackbarCss
  }; }
}, [36, "bal-snackbar", {
    "color": [1],
    "duration": [2],
    "subject": [1],
    "message": [1],
    "icon": [1],
    "action": [1],
    "closeHandler": [16],
    "actionHandler": [16],
    "href": [1],
    "target": [1],
    "animationClass": [32],
    "closeIn": [64],
    "close": [64]
  }]);
let snackbarIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-snackbar", "bal-button", "bal-close", "bal-heading", "bal-icon", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-snackbar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Snackbar);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalSnackbar = Snackbar;
const defineCustomElement = defineCustomElement$1;

export { BalSnackbar, defineCustomElement };
