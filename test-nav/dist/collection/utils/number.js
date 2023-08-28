import { defaultLocale, useBalConfig } from './config';
import { getDecimalSeparator as getDecimalSeparatorUtil, getThousandSeparator as getThousandSeparatorUtil, formatLocaleNumber as formatLocaleNumberUtil, } from '@baloise/web-app-utils';
const getLocale = () => {
  const config = useBalConfig();
  return (config && config.locale) || defaultLocale;
};
export const getDecimalSeparator = () => {
  return getDecimalSeparatorUtil(getLocale());
};
export const getDecimalSeparators = () => {
  if (getThousandSeparator() !== '.') {
    return [getDecimalSeparator(), '.'];
  }
  return [getDecimalSeparator()];
};
export const getThousandSeparator = () => {
  return getThousandSeparatorUtil(getLocale());
};
export const formatLocaleNumber = (number, minimumFractionDigits) => {
  return formatLocaleNumberUtil(getLocale(), number, minimumFractionDigits);
};
export const parseLocaleNumber = (stringNumber) => {
  const thousandSeparator = getThousandSeparator();
  const decimalSeparator = getDecimalSeparator();
  return parseFloat(stringNumber
    .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
    .replace(new RegExp('\\' + decimalSeparator), '.'));
};
export const getNegativeSymbol = () => {
  return '-';
};
export const parseFloatString = (value) => {
  return value.replace(getDecimalSeparator(), '.');
};
export const formatFloatString = (value) => {
  return value.replace('.', getDecimalSeparator());
};
