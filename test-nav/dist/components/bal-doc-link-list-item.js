import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const balDocLinkListItemCss = ".bal-doc-link-list-item{position:static;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}";

const DocLinkListItem = proxyCustomElement(class DocLinkListItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return balDocLinkListItemCss; }
}, [4, "bal-doc-link-list-item", {
    "image": [1],
    "subject": [1],
    "template": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-link-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-link-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocLinkListItem);
      }
      break;
  } });
}

const BalDocLinkListItem = DocLinkListItem;
const defineCustomElement = defineCustomElement$1;

export { BalDocLinkListItem, defineCustomElement };
