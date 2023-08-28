export const newBalOptionValue = (value, label, disabled = false, data) => {
  return {
    value,
    label,
    disabled,
    data,
  };
};
export const newBalSingleOptionValue = (valueAndLabel, disabled = false, data) => {
  return newBalOptionValue(valueAndLabel, valueAndLabel, disabled, data);
};
