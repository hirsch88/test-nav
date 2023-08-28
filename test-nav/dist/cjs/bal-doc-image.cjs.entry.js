'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const BalDocImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.src = '';
    this.text = '';
  }
  render() {
    return (index.h(index.Host, { class: "bal-app" }, index.h("p", { style: { textAlign: 'center' } }, index.h("img", { loading: "lazy", src: this.src, alt: this.text }))));
  }
};

exports.bal_doc_image = BalDocImage;
