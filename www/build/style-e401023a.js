const convert = (value) => parseInt(value.slice(0, -2), 10);
const getComputedPadding = (element, defaultPadding = 16) => {
  if (typeof window === 'undefined' || element === undefined) {
    return { top: defaultPadding, right: defaultPadding, bottom: defaultPadding, left: defaultPadding };
  }
  const computedStyle = window.getComputedStyle(element);
  const top = convert(computedStyle.getPropertyValue('padding-top'));
  const right = convert(computedStyle.getPropertyValue('padding-right'));
  const bottom = convert(computedStyle.getPropertyValue('padding-bottom'));
  const left = convert(computedStyle.getPropertyValue('padding-left'));
  return { top, right, bottom, left };
};
const getComputedWidth = (element) => {
  if (typeof window === 'undefined') {
    return element.clientWidth;
  }
  const computedStyle = window.getComputedStyle(element);
  return convert(computedStyle.getPropertyValue('width'));
};

export { getComputedWidth as a, getComputedPadding as g };
