import isNil from 'lodash.isnil';
export function getValues(values) {
  if (Array.isArray(values)) {
    return values.filter(v => !isNil(v));
  }
  return [];
}
export function length(values) {
  return getValues(values).length;
}
export function removeValue(values, valueToRemove) {
  return getValues(values).filter(value => value !== valueToRemove);
}
export function addValue(values, valueToAdd, hasMultipleValue) {
  const valuesArray = getValues(values);
  if (hasMultipleValue) {
    if (valuesArray.includes(valueToAdd)) {
      return removeValue(values, valueToAdd);
    }
    return [...valuesArray, valueToAdd];
  }
  return [valueToAdd];
}
export function validateAfterBlur(values, options, typedLabel) {
  const valuesArray = getValues(values);
  if (valuesArray.length > 0) {
    const valueOption = options.get(valuesArray[0]);
    if (isNil(valueOption) || typedLabel !== valueOption.label) {
      return [];
    }
  }
  else {
    const typedOption = findOptionByLabel(options, typedLabel);
    if (!isNil(typedOption)) {
      return addValue(values, typedOption.value, false);
    }
  }
  return valuesArray;
}
function findOptionByLabelIterator(iterator, label) {
  const { value, done } = iterator.next();
  if (!isNil(value) && value.label === label) {
    return value;
  }
  if (done) {
    return undefined;
  }
  return findOptionByLabelIterator(iterator, label);
}
export function findOptionByLabel(options, label) {
  return findOptionByLabelIterator(options.values(), label);
}
export function findLabelByValue(options, value) {
  const option = options.get(value);
  if (!isNil(option)) {
    return option.label;
  }
  return '';
}
export function startsWith(text, input) {
  const content = text.trim().toLowerCase();
  const value = input.trim().toLowerCase();
  return content.startsWith(value);
}
export function includes(text, input) {
  const content = text.trim().toLowerCase();
  const value = input.trim().toLowerCase();
  return content.includes(value);
}
export function preventDefault(ev) {
  ev.preventDefault();
  ev.stopPropagation();
}
