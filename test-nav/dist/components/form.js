const scrollToFirstInvalidField = (options) => {
  const selector = options.selector || '.bal-field--invalid';
  const invalidFieldNodes = options.formEl.querySelectorAll(selector);
  const invalidFields = Array.from(invalidFieldNodes);
  if (invalidFields.length > 0) {
    const firstInvalidField = invalidFields[0];
    if (firstInvalidField) {
      const invalidField = firstInvalidField.closest('bal-field');
      if (invalidField && invalidField.scrollIntoView) {
        invalidField.scrollIntoView();
      }
    }
  }
};
const defaultBalAriaForm = {
  controlId: undefined,
  labelId: undefined,
  messageId: undefined,
};

export { defaultBalAriaForm as d, scrollToFirstInvalidField as s };
