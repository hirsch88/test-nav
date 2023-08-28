'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const balDocLinkListItemCss = ".bal-doc-link-list-item{position:static;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}";

const DocLinkListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: "bal-doc-link-list-item" }, index.h("img", { loading: "lazy", src: image, alt: subject }), index.h("span", null, index.h("strong", null, subject), index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
DocLinkListItem.style = balDocLinkListItemCss;

exports.bal_doc_link_list_item = DocLinkListItem;
