const NUMBER_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ACTION_KEYS = [
  'Home',
  'End',
  'Backspace',
  'Enter',
  'ArrowLeft',
  'Left',
  'ArrowRight',
  'Right',
  'Tab',
  'Esc',
  'Escape',
  'Del',
  'Delete',
];
const isCtrlOrCommandKey = (ev) => ev.metaKey || ev.ctrlKey;

export { ACTION_KEYS as A, NUMBER_KEYS as N, isCtrlOrCommandKey as i };
