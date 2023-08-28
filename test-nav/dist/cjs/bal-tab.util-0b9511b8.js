'use strict';

const newBalTabOption = (option) => {
  return Object.assign({ href: '', target: '_self', bubble: false, active: false, disabled: false, hidden: false, prevent: false, navigate: undefined }, option);
};

exports.newBalTabOption = newBalTabOption;
