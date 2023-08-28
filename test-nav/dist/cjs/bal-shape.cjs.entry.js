'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');
const tokens_esm = require('./tokens.esm-505d1e8f.js');

const balShapeCss = ".bal-shape{display:block;overflow:hidden;border-radius:var(--bal-radius-normal);width:66px;height:66px}@media screen and (min-width: 769px),print{.bal-shape{width:120px;height:120px}}@media screen and (min-width: 1024px){.bal-shape{width:198px;height:198px;border-radius:unset}}.bal-shape--is-rotation-0{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.bal-shape--is-rotation-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.bal-shape--is-rotation-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bal-shape--is-rotation-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}";

const Shape = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.getHex = () => {
      let color;
      switch (this.color) {
        case 'green':
          color = tokens_esm.e.balColorGreen6;
          break;
        case 'green-light':
          color = tokens_esm.e.balColorGreen3;
          break;
        case 'red':
          color = tokens_esm.e.balColorRed5;
          break;
        case 'red-light':
          color = tokens_esm.e.balColorRed3;
          break;
        case 'purple':
          color = tokens_esm.e.balColorPurple6;
          break;
        case 'purple-light':
          color = tokens_esm.e.balColorPurple3;
          break;
        case 'yellow':
          color = tokens_esm.e.balColorYellow5;
          break;
        case 'yellow-light':
          color = tokens_esm.e.balColorYellow3;
          break;
        default:
          color = tokens_esm.e.balColorGrey4;
      }
      return color;
    };
    this.variation = '1';
    this.color = 'green';
    this.rotation = '0';
  }
  render() {
    const block = bem.BEM.block('shape');
    const shapes = [
      index.h("g", { id: "e8353d3b-35a2-4e20-9245-0eceed641ae5" }, index.h("g", { id: "af87362a-72b2-42cf-8efe-c9917dc1f7f6" }, index.h("path", { class: "st0", d: "M132,66v66H66V66H132z M132,0v66H66V0H132z M66,0v66H0V6.4C0,4.2,0,3,0.4,2.2c0.4-0.7,1-1.4,1.7-1.7\n            C3,0,4.2,0,6.4,0H66z M191.6,0c2.2,0,3.4,0,4.2,0.4c0.7,0.4,1.4,1,1.7,1.7c0.4,0.9,0.4,2,0.4,4.2V66h-66V0H191.6z M0,125.6V66h66\n            v66H6.4H0 M198,132v59.6c0,2.2,0,3.4-0.4,4.2c-0.4,0.7-1,1.4-1.7,1.7c-0.9,0.4-2,0.4-4.2,0.4H132v-66H198z" }))),
      index.h("g", { id: "b949d602-8478-437e-a171-ad3f26649cb4" }, index.h("g", { id: "ae3574e0-2065-4681-8937-4318b8656147" }, index.h("path", { class: "b9f37b2d-094d-4f18-b17c-7c5acf36f9a6", d: "M132,66v66H66V66ZM191.6,0c2.24,0,3.36,0,4.22.44a4,4,0,0,1,1.74,1.74c.44.86.44,2,.44,4.22V66H132V0ZM66,0V66H0V6.4C0,4.16,0,3,.44,2.18A4,4,0,0,1,2.18.44C3,0,4.16,0,6.4,0Zm0,132v66H6.4c-2.24,0-3.36,0-4.22-.44a4,4,0,0,1-1.74-1.74C0,195,0,193.84,0,191.6V132Zm66,0v66H66V132Zm66,0v59.6c0,2.24,0,3.36-.44,4.22a4,4,0,0,1-1.74,1.74c-.86.44-2,.44-4.22.44H132V132Zm0-66v66H132V66Z" }))),
      index.h("g", { id: "e827a936-cbcd-43b3-971a-aa8f8714fdff" }, index.h("g", { id: "e540dca8-23ca-45dc-b462-df9071c1317d" }, index.h("path", { class: "st0", d: "M132,66v66H66V66H132z M132,0v66H66V0H132z M66,0v66H0V6.4C0,4.2,0,3,0.4,2.2c0.4-0.7,1-1.4,1.7-1.7\n            C3,0,4.2,0,6.4,0H66z M66,132v66H6.4c-2.2,0-3.4,0-4.2-0.4c-0.7-0.4-1.4-1-1.7-1.7C0,195,0,193.8,0,191.6V132H66z M132,132v66H66\n            v-66H132z M198,132v59.6c0,2.2,0,3.4-0.4,4.2c-0.4,0.7-1,1.4-1.7,1.7c-0.9,0.4-2,0.4-4.2,0.4H132v-66H198z M198,66v66h-66V66" }))),
    ];
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`is-rotation-${this.rotation}`).class()) }, index.h("svg", { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 198 198", focusable: "false", "aria-hidden": "true", fill: this.getHex() }, shapes[parseInt(this.variation) - 1])));
  }
  get el() { return index.getElement(this); }
};
Shape.style = {
  css: balShapeCss
};

exports.bal_shape = Shape;
