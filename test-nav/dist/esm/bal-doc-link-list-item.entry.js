import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';

const balDocLinkListItemCss = ".bal-doc-link-list-item{position:static;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}";

const DocLinkListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
DocLinkListItem.style = balDocLinkListItemCss;

export { DocLinkListItem as bal_doc_link_list_item };
