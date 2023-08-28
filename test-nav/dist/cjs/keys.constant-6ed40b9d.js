'use strict';

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

exports.ACTION_KEYS = ACTION_KEYS;
exports.NUMBER_KEYS = NUMBER_KEYS;
exports.isCtrlOrCommandKey = isCtrlOrCommandKey;
