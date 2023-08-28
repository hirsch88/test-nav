import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const BalDocImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = '';
    this.text = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("p", { style: { textAlign: 'center' } }, h("img", { loading: "lazy", src: this.src, alt: this.text }))));
  }
};

export { BalDocImage as bal_doc_image };
