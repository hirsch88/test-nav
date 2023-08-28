import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const BalDocGithub$1 = proxyCustomElement(class BalDocGithub extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.link = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("section", { class: "mt-xx-large pt-normal has-border-top-light" }, h("p", { class: "mb-small" }, "If you experience any issues while using a component, please head over to the", ' ', h("a", { class: "sbdocs-a", href: "https://design.baloise.dev/?path=/docs/support--page" }, "Support page"), ' ', "for more guidelines and help."), h("p", null, "This page is open source. Noticed a typo? Or something unclear?"), h("a", { class: "is-link sbdocs-a", target: "_blank", href: 'https://github.com/baloise/design-system/blob/main/packages/components/src' + this.link }, "Improve this page on GitHub"))));
  }
}, [0, "bal-doc-github", {
    "link": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-github"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-github":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocGithub$1);
      }
      break;
  } });
}

const BalDocGithub = BalDocGithub$1;
const defineCustomElement = defineCustomElement$1;

export { BalDocGithub, defineCustomElement };
