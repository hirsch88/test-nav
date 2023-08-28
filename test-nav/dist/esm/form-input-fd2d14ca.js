const stopEventBubbling = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
};
const getInputTarget = (ev) => {
  return ev.target;
};
const getNativeInputValue = (component) => {
  var _a;
  return ((_a = component.nativeInput) === null || _a === void 0 ? void 0 : _a.value) || '';
};
const getUpcomingValue = (component, ev) => {
  var _a, _b;
  const value = ((_a = component.nativeInput) === null || _a === void 0 ? void 0 : _a.value) || '';
  const idx = (_b = ev.target) === null || _b === void 0 ? void 0 : _b.selectionStart;
  return value.slice(0, idx) + ev.key + value.slice(idx + Math.abs(0));
};
const inputSetBlur = (component) => {
  if (component.nativeInput) {
    component.nativeInput.blur();
  }
};
const inputListenOnClick = (component, ev) => {
  if ((component.disabled || component.readonly) && ev.target && ev.target === component.el) {
    stopEventBubbling(ev);
  }
};
let inputSetFocusTimer;
const inputSetFocus = (component) => {
  clearTimeout(inputSetFocusTimer);
  inputSetFocusTimer = setTimeout(() => {
    if (component.nativeInput) {
      component.nativeInput.focus();
    }
  }, 0);
};
const inputHandleHostClick = (component, ev) => {
  if (component.disabled || component.readonly) {
    stopEventBubbling(ev);
  }
};
const inputHandleClick = (component, ev) => {
  if (!component.disabled && !component.readonly && component.balClick) {
    component.balClick.emit(ev);
  }
};
const inputHandleFocus = (component, ev) => {
  component.focused = true;
  component.inputValue = component.value;
  if (!component.disabled && component.balFocus) {
    component.balFocus.emit(ev);
  }
};
const inputHandleReset = (component, defaultValue = undefined, timer) => {
  component.value = defaultValue;
  component.inputValue = component.value;
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (component.nativeInput) {
      component.nativeInput.value = component.value;
    }
  });
};
const inputHandleBlur = (component, ev) => {
  component.focused = false;
  if (!component.disabled && component.balBlur) {
    component.balBlur.emit(ev);
  }
};
const inputHandleChange = (component) => {
  if (component.value !== component.inputValue) {
    component.value = component.inputValue;
    component.balChange.emit(component.value);
  }
};

export { inputHandleHostClick as a, inputListenOnClick as b, inputSetFocus as c, inputSetBlur as d, inputHandleBlur as e, inputHandleChange as f, getInputTarget as g, inputHandleClick as h, inputHandleFocus as i, inputHandleReset as j, getUpcomingValue as k, getNativeInputValue as l, stopEventBubbling as s };
