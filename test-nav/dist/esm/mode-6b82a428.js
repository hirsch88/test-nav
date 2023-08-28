import { a as setMode } from './index-e015dbc8.js';

const initStyleMode = (mode) => {
  const doc = document;
  if (doc) {
    doc.documentElement.setAttribute('mode', mode);
    doc.documentElement.classList.add(mode);
  }
  const isBalElement = (elm) => { var _a; return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith('BAL-'); };
  const isAllowedBalModeValue = (elmMode) => ['css', 'sass', 'all'].includes(elmMode);
  setMode((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedBalModeValue(elmMode)) {
          return elmMode;
        }
        else if (isBalElement(elm)) {
          console.warn('Invalid baloise style mode: "' + elmMode + '", expected: "css" or "sass"');
        }
      }
      elm = elm.parentElement;
    }
    return mode;
  });
};

export { initStyleMode as i };
