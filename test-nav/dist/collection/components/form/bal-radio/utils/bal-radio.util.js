export const newBalRadioOption = (option) => {
  return Object.assign(Object.assign({ interface: 'radio', labelHidden: false, flat: false, disabled: false, readonly: false, required: false, hidden: false, invisible: false, invalid: false }, option), { label: '', html: option.label });
};
