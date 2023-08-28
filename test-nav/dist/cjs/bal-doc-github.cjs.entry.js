'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocGithub = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.link = '';
  }
  render() {
    return (index.h(index.Host, { class: "bal-app" }, index.h("section", { class: "mt-xx-large pt-normal has-border-top-light" }, index.h("p", { class: "mb-small" }, "If you experience any issues while using a component, please head over to the", ' ', index.h("a", { class: "sbdocs-a", href: "https://design.baloise.dev/?path=/docs/support--page" }, "Support page"), ' ', "for more guidelines and help."), index.h("p", null, "This page is open source. Noticed a typo? Or something unclear?"), index.h("a", { class: "is-link sbdocs-a", target: "_blank", href: 'https://github.com/baloise/design-system/blob/main/packages/components/src' + this.link }, "Improve this page on GitHub"))));
  }
};

exports.bal_doc_github = BalDocGithub;
