import { h, Host } from '@stencil/core';
export class DocLinkListItem {
  constructor() {
    this.image = '';
    this.subject = '';
    this.template = '';
  }
  render() {
    let { subject, image } = this;
    if (this.template === 'html5') {
      subject = 'HTML5';
      image =
        'https://raw.githubusercontent.com/baloise/design-system/main/packages/components/public/assets/images/html.png';
    }
    if (this.template === 'angular') {
      subject = 'Angular';
      image =
        'https://raw.githubusercontent.com/baloise/design-system/main/packages/components/public/assets/images/angular.svg';
    }
    if (this.template === 'vue') {
      subject = 'Vue';
      image =
        'https://raw.githubusercontent.com/baloise/design-system/main/packages/components/public/assets/images/vue.png';
    }
    if (this.template === 'react') {
      subject = 'React';
      image =
        'https://raw.githubusercontent.com/baloise/design-system/main/packages/components/public/assets/images/react.svg';
    }
    return (h(Host, { class: "bal-doc-link-list-item" }, h("img", { loading: "lazy", src: image, alt: subject }), h("span", null, h("strong", null, subject), h("slot", null))));
  }
  static get is() { return "bal-doc-link-list-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-link-list-item.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-link-list-item.css"]
    };
  }
  static get properties() {
    return {
      "image": {
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
        "attribute": "image",
        "reflect": false,
        "defaultValue": "''"
      },
      "subject": {
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
        "attribute": "subject",
        "reflect": false,
        "defaultValue": "''"
      },
      "template": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'' | 'html5' | 'angular' | 'vue' | 'react'",
          "resolved": "\"\" | \"angular\" | \"html5\" | \"react\" | \"vue\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "template",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "el"; }
}
