import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';

const BalDocGithub = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.link = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("section", { class: "mt-xx-large pt-normal has-border-top-light" }, h("p", { class: "mb-small" }, "If you experience any issues while using a component, please head over to the", ' ', h("a", { class: "sbdocs-a", href: "https://design.baloise.dev/?path=/docs/support--page" }, "Support page"), ' ', "for more guidelines and help."), h("p", null, "This page is open source. Noticed a typo? Or something unclear?"), h("a", { class: "is-link sbdocs-a", target: "_blank", href: 'https://github.com/baloise/design-system/blob/main/packages/components/src' + this.link }, "Improve this page on GitHub"))));
  }
};

export { BalDocGithub as bal_doc_github };
