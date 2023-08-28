'use strict';

const bemReturn = (selector) => ({
  class: (condition = true) => ({ [selector]: condition }),
  element: bemElement(selector),
  modifier: bemModifier(selector),
});
const bemElement = (selector) => (name) => bemReturn(`${selector}__${name}`);
const bemModifier = (selector) => (name) => bemReturn(`${selector}--${name}`);
const BEM = { block: (name) => bemReturn(`bal-${name}`) };

exports.BEM = BEM;
