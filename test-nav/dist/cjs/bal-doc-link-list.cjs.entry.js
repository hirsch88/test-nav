'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const balDocLinkListCss = ".bal-doc-link-list{margin-bottom:24px}.bal-doc-link-list.has-one-column{grid-template-columns:1fr !important}.bal-doc-link-list a{display:block;padding:20px 30px 20px 15px;border:1px solid rgba(0,0,0,.062745098);border-radius:8px;-webkit-transition:background 150ms ease-out,border 150ms ease-out,-webkit-transform 150ms ease-out;transition:background 150ms ease-out,border 150ms ease-out,-webkit-transform 150ms ease-out;transition:background 150ms ease-out,border 150ms ease-out,transform 150ms ease-out;transition:background 150ms ease-out,border 150ms ease-out,transform 150ms ease-out,-webkit-transform 150ms ease-out;color:#333;background-color:#fefefe;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.bal-doc-link-list a:hover{background-color:#fcfcfc;border-color:rgba(30,167,253,.3137254902);-webkit-transform:translate3d(0, -3px, 0);transform:translate3d(0, -3px, 0);-webkit-box-shadow:rgba(0,0,0,.08) 0 3px 10px 0;box-shadow:rgba(0,0,0,.08) 0 3px 10px 0}.bal-doc-link-list a:active{border-color:#1ea7fd;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.bal-doc-link-list a strong{font-weight:var(--bal-weight-bold);font-size:1.2rem;display:block;margin-bottom:2px}.bal-doc-link-list a img{height:40px;width:40px;margin-right:15px;-ms-flex:none;flex:none}.bal-doc-link-list a span{font-size:14px;line-height:20px;color:#333}";

const DocLinkList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.oneColumn = false;
  }
  render() {
    return (index.h(index.Host, { class: {
        'bal-doc-link-list': true,
        'link-list': true,
        'has-one-column': this.oneColumn,
      } }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
DocLinkList.style = balDocLinkListCss;

exports.bal_doc_link_list = DocLinkList;
