export const stopEventBubbling = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
};
export const getInputTarget = (ev) => {
  return ev.target;
};
export const getNativeInputValue = (component) => {
  var _a;
  return ((_a = component.nativeInput) === null || _a === void 0 ? void 0 : _a.value) || '';
};
export const getUpcomingValue = (component, ev) => {
  var _a, _b;
  const value = ((_a = component.nativeInput) === null || _a === void 0 ? void 0 : _a.value) || '';
  const idx = (_b = ev.target) === null || _b === void 0 ? void 0 : _b.selectionStart;
  return value.slice(0, idx) + ev.key + value.slice(idx + Math.abs(0));
};
export const inputSetBlur = (component) => {
  if (component.nativeInput) {
    component.nativeInput.blur();
  }
};
export const inputListenOnClick = (component, ev) => {
  if ((component.disabled || component.readonly) && ev.target && ev.target === component.el) {
    stopEventBubbling(ev);
  }
};
let inputSetFocusTimer;
export const inputSetFocus = (component) => {
  clearTimeout(inputSetFocusTimer);
  inputSetFocusTimer = setTimeout(() => {
    if (component.nativeInput) {
      component.nativeInput.focus();
    }
  }, 0);
};
export const inputHandleHostClick = (component, ev) => {
  if (component.disabled || component.readonly) {
    stopEventBubbling(ev);
  }
};
export const inputHandleClick = (component, ev) => {
  if (!component.disabled && !component.readonly && component.balClick) {
    component.balClick.emit(ev);
  }
};
export const inputHandleFocus = (component, ev) => {
  component.focused = true;
  component.inputValue = component.value;
  if (!component.disabled && component.balFocus) {
    component.balFocus.emit(ev);
  }
};
export const inputHandleReset = (component, defaultValue = undefined, timer) => {
  component.value = defaultValue;
  component.inputValue = component.value;
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (component.nativeInput) {
      component.nativeInput.value = component.value;
    }
  });
};
export const inputHandleBlur = (component, ev) => {
  component.focused = false;
  if (!component.disabled && component.balBlur) {
    component.balBlur.emit(ev);
  }
};
export const inputHandleChange = (component) => {
  if (component.value !== component.inputValue) {
    component.value = component.inputValue;
    component.balChange.emit(component.value);
  }
};
