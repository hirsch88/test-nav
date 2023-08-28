import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const balNotificationCss = ":root{--bal-notification-font-size:var(--bal-size-normal);--bal-notification-font-family:var(--bal-font-family-text);--bal-notification-background:var(--bal-color-grey-2);--bal-notification-background-primary:var(--bal-color-grey-2);--bal-notification-background-info:var(--bal-color-info-2);--bal-notification-background-success:var(--bal-color-success-2);--bal-notification-background-warning:var(--bal-color-warning-2);--bal-notification-background-danger:var(--bal-color-danger-2);--bal-notification-radius:var(--bal-radius-large);--bal-notification-color:var(--bal-color-text-primary);--bal-notification-color-primary:var(--bal-color-text-primary);--bal-notification-color-info:var(--bal-color-text-primary);--bal-notification-color-success:var(--bal-color-text-primary);--bal-notification-color-warning:var(--bal-color-text-primary);--bal-notification-color-danger:var(--bal-color-text-primary)}.bal-notification{display:block;position:static}.bal-notification__inner{min-height:56px;border-radius:var(--bal-notification-radius);font-size:var(--bal-notification-font-size);font-family:var(--bal-notification-font-family);background:var(--bal-notification-background);color:var(--bal-notification-color);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding:1.25rem}@media screen and (min-width: 769px),print{.bal-notification__inner{padding:1.25rem}}@media screen and (min-width: 1024px){.bal-notification__inner{padding:1.5rem}}.bal-notification__inner--is-primary{background:var(--bal-notification-background-primary);color:var(--bal-notification-color-primary)}.bal-notification__inner--is-info{background:var(--bal-notification-background-info);color:var(--bal-notification-color-info)}.bal-notification__inner--is-danger{background:var(--bal-notification-background-danger);color:var(--bal-notification-color-danger)}.bal-notification__inner--is-warning{background:var(--bal-notification-background-warning);color:var(--bal-notification-color-warning)}.bal-notification__inner--is-success{background:var(--bal-notification-background-success);color:var(--bal-notification-color-success)}";

const Notification = proxyCustomElement(class Notification extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.color = '';
  }
  render() {
    return (h(Host, { class: "bal-notification" }, h("div", { class: `bal-notification__inner bal-notification__inner--is-${this.color}`, "data-testid": "bal-notification-content" }, h("slot", null))));
  }
  static get style() { return {
    css: balNotificationCss
  }; }
}, [36, "bal-notification", {
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-notification"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-notification":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Notification);
      }
      break;
  } });
}

const BalNotification = Notification;
const defineCustomElement = defineCustomElement$1;

export { BalNotification, defineCustomElement };
