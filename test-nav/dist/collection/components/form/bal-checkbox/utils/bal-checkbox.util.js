export const newBalCheckboxOption = (option) => {
  return Object.assign(Object.assign({ interface: 'checkbox', labelHidden: false, flat: false, disabled: false, readonly: false, required: false, hidden: false, invalid: false, checked: false }, option), { label: '', html: option.label });
};
