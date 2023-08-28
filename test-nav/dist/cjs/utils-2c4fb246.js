'use strict';

const index = require('./index-e6a233be.js');

function getValues(values) {
  if (Array.isArray(values)) {
    return values.filter(v => !index.lodash_isnil(v));
  }
  return [];
}
function length(values) {
  return getValues(values).length;
}
function removeValue(values, valueToRemove) {
  return getValues(values).filter(value => value !== valueToRemove);
}
function addValue(values, valueToAdd, hasMultipleValue) {
  const valuesArray = getValues(values);
  if (hasMultipleValue) {
    if (valuesArray.includes(valueToAdd)) {
      return removeValue(values, valueToAdd);
    }
    return [...valuesArray, valueToAdd];
  }
  return [valueToAdd];
}
function validateAfterBlur(values, options, typedLabel) {
  const valuesArray = getValues(values);
  if (valuesArray.length > 0) {
    const valueOption = options.get(valuesArray[0]);
    if (index.lodash_isnil(valueOption) || typedLabel !== valueOption.label) {
      return [];
    }
  }
  else {
    const typedOption = findOptionByLabel(options, typedLabel);
    if (!index.lodash_isnil(typedOption)) {
      return addValue(values, typedOption.value, false);
    }
  }
  return valuesArray;
}
function findOptionByLabelIterator(iterator, label) {
  const { value, done } = iterator.next();
  if (!index.lodash_isnil(value) && value.label === label) {
    return value;
  }
  if (done) {
    return undefined;
  }
  return findOptionByLabelIterator(iterator, label);
}
function findOptionByLabel(options, label) {
  return findOptionByLabelIterator(options.values(), label);
}
function findLabelByValue(options, value) {
  const option = options.get(value);
  if (!index.lodash_isnil(option)) {
    return option.label;
  }
  return '';
}
function startsWith(text, input) {
  const content = text.trim().toLowerCase();
  const value = input.trim().toLowerCase();
  return content.startsWith(value);
}
function includes(text, input) {
  const content = text.trim().toLowerCase();
  const value = input.trim().toLowerCase();
  return content.includes(value);
}
function preventDefault(ev) {
  ev.preventDefault();
  ev.stopPropagation();
}

exports.addValue = addValue;
exports.findLabelByValue = findLabelByValue;
exports.findOptionByLabel = findOptionByLabel;
exports.getValues = getValues;
exports.includes = includes;
exports.length = length;
exports.preventDefault = preventDefault;
exports.removeValue = removeValue;
exports.startsWith = startsWith;
exports.validateAfterBlur = validateAfterBlur;
