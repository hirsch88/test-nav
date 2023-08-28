import { h, Host } from '@stencil/core';
export class BalDocGithub {
  constructor() {
    this.link = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("section", { class: "mt-xx-large pt-normal has-border-top-light" }, h("p", { class: "mb-small" }, "If you experience any issues while using a component, please head over to the", ' ', h("a", { class: "sbdocs-a", href: "https://design.baloise.dev/?path=/docs/support--page" }, "Support page"), ' ', "for more guidelines and help."), h("p", null, "This page is open source. Noticed a typo? Or something unclear?"), h("a", { class: "is-link sbdocs-a", target: "_blank", href: 'https://github.com/baloise/design-system/blob/main/packages/components/src' + this.link }, "Improve this page on GitHub"))));
  }
  static get is() { return "bal-doc-github"; }
  static get properties() {
    return {
      "link": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "link",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
