'use strict';

const trackingAttributes = ['data-tracking-style', 'data-tracking-topic', 'data-tracking-context', 'data-tracking-id'];
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const inheritTrackingAttributes = (el, ignoreList) => {
  let attributesToInherit = trackingAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter(attr => !ignoreList.includes(attr));
  }
  return inheritAttributes(el, attributesToInherit);
};

exports.inheritAttributes = inheritAttributes;
exports.inheritTrackingAttributes = inheritTrackingAttributes;
