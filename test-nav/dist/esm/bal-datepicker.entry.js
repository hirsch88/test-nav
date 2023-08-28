import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { m as debounceEvent } from './helpers-08b28736.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { p as parse, f as formatDateString, i as isValidIsoString, b as format, c as isSpaceKey, d as isEnterKey, e as dateSeparator, n as now } from './index.esm-df73647b.js';
import { l as lodash_isnil } from './index-82aff103.js';
import { i as isCtrlOrCommandKey, N as NUMBER_KEYS, A as ACTION_KEYS } from './keys.constant-a195c4b1.js';
import { i as i18nBalDatepicker } from './bal-datepicker.i18n-590bae0f.js';
import { g as useBalConfig } from './index-8b8ed6bd.js';
import { s as stopEventBubbling, i as inputHandleFocus, a as inputHandleHostClick, b as inputListenOnClick, c as inputSetFocus, d as inputSetBlur, g as getInputTarget } from './form-input-fd2d14ca.js';
import { p as preventDefault } from './utils-9cb64c37.js';
import { B as BEM } from './bem-1b28532d.js';
import { L as Logger } from './log-01623e2c.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import { d as defaultConfig, a as defaultLocale } from './initialize-92ae5fef.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './_commonjsHelpers-ba3f0406.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  requiredArgs(2, arguments);
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, options);
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  requiredArgs(2, arguments);
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

const balDatepickerCss = ":root{--bal-datepicker-popover-background:var(--bal-color-grey-2);--bal-datepicker-cell-background:var(--bal-color-white);--bal-datepicker-cell-selected-background:var(--bal-color-primary);--bal-datepicker-cell-selected-today-background:var(--bal-color-primary-inverted);--bal-datepicker-cell-today-background:var(--bal-color-primary);--bal-datepicker-cell-today-radius:var(--bal-radius-rounded)}.bal-datepicker{display:block;font-family:var(--bal-font-family-text);width:100%}.bal-datepicker__native{position:absolute !important;left:0;top:0;margin:0;padding:0;opacity:0;outline:0;border:none;width:1px;height:1px;clip:rect(1px, 1px, 1px, 1px);overflow:hidden}.bal-datepicker__popup{padding:1rem;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--bal-datepicker-popover-background)}@media screen and (min-width: 769px),print{.bal-datepicker__popup{max-width:392px}}.bal-datepicker__popup__body{max-width:360px;margin:0 auto 0 auto;margin-top:.75rem}.bal-datepicker-pagination{max-width:360px;margin:0 auto 0 auto}.bal-datepicker-pagination__inner{display:-ms-flexbox;display:flex;gap:.5rem}.bal-datepicker-pagination__month-and-year{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;gap:.5rem}.bal-datepicker-pagination__month-and-year__select{-ms-flex:1;flex:1}.bal-datepicker-pagination__month-and-year__select .select,.bal-datepicker-pagination__month-and-year__select .select select{padding-top:0 !important;padding-bottom:0 !important;text-align:center !important;min-height:2rem !important;height:2rem !important}@media screen and (min-width: 769px),print{.bal-datepicker-pagination__month-and-year__select .select,.bal-datepicker-pagination__month-and-year__select .select select{min-height:3rem !important;height:3rem !important}}.bal-datepicker-grid{display:table;border-collapse:collapse;width:100%;table-layout:fixed}.bal-datepicker-grid__body{display:table-row-group}.bal-datepicker-grid__row{display:table-row}.bal-datepicker-grid__row .bal-datepicker-grid__cell{margin-bottom:.25rem;margin-right:.25rem}.bal-datepicker-grid__row:last-child .bal-datepicker-grid__cell{margin-bottom:0}.bal-datepicker-grid__header{display:-ms-flexbox;display:flex;max-width:360px;margin:0 auto 0 auto;gap:.25rem}.bal-datepicker-grid__header .bal-datepicker-grid__cell{background:rgba(0,0,0,0)}.bal-datepicker-grid__header .bal-datepicker-grid__cell span{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;width:100%}.bal-datepicker-grid__cell{position:relative;text-align:center;vertical-align:middle;display:table-cell;width:13%;padding:0 !important;height:3rem;min-height:3rem;min-width:2.25rem;-webkit-appearance:auto !important;-moz-appearance:auto !important;appearance:auto !important;background:var(--bal-datepicker-cell-background)}.bal-datepicker-grid__cell--selected{background:var(--bal-datepicker-cell-selected-background) !important}.bal-datepicker-grid__cell--today:not(.bal-datepicker-grid__cell--outdated)>span{font-weight:var(--bal-weight-bold)}.bal-datepicker-grid__cell--today:not(.bal-datepicker-grid__cell--outdated)::after{content:\"\";position:absolute;display:block;width:4px;height:4px;background:var(--bal-datepicker-cell-today-background);border-radius:var(--bal-datepicker-cell-today-radius);margin-left:-2px;left:50%;bottom:6px}.bal-datepicker-grid__cell--today.bal-datepicker-grid__cell--selected:not(.bal-datepicker-grid__cell--outdated)::after{background:var(--bal-datepicker-cell-selected-today-background)}.bal-datepicker-grid__cell:last-child{margin-right:0}.bal-datepicker-grid__cell>span{font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-regular)}@media screen and (min-width: 769px),print{.bal-datepicker-grid__cell{min-width:3rem !important}}.bal-datepicker-grid__cell--disabled{border-color:rgba(0,0,0,0) !important;background:rgba(0,0,0,0) !important}.bal-datepicker-grid__cell--header>span{border:none;background:rgba(0,0,0,0);color:var(--bal-color-text-primary);font-weight:var(--bal-weight-bold);cursor:default}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Datepicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balInput = createEvent(this, "balInput", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balInputClick = createEvent(this, "balInputClick", 7);
    this.balIconClick = createEvent(this, "balIconClick", 7);
    this.inputId = `bal-dp-${datepickerIds++}`;
    this.inheritedAttributes = {};
    this.inputValue = this.value;
    this.onIconClick = (ev) => {
      if (!this.disabled && !this.readonly) {
        this.popoverElement.toggle();
      }
      stopEventBubbling(ev);
      this.balIconClick.emit(ev);
    };
    this.onInputClick = (ev) => {
      if (!this.triggerIcon && !this.disabled && !this.readonly) {
        this.popoverElement.toggle();
      }
      stopEventBubbling(ev);
      if (!this.triggerIcon) {
        this.balInputClick.emit(ev);
      }
    };
    this.onPopoverChange = (ev) => {
      stopEventBubbling(ev);
      if (this.isPopoverOpen !== ev.detail) {
        this.isPopoverOpen = ev.detail;
        if (!this.isPopoverOpen) {
          this.balBlur.emit();
        }
      }
    };
    this.onInput = (ev) => {
      const input = getInputTarget(ev);
      if (input) {
        this.inputValue = input.value;
        if (input.value) {
          this.nativeInput.value = this.formatDate(this.inputValue);
        }
        if (this.inputValue && this.inputValue.length >= 6) {
          const date = parse(this.inputValue, this.getLocale());
          const dateString = formatDateString(date);
          if (isValidIsoString(dateString)) {
            this.selectedDate = dateString;
            this.updatePointerDates();
          }
        }
      }
      this.balInput.emit(this.inputValue);
    };
    this.onInputChange = (ev) => {
      const inputValue = ev.target.value;
      const date = parse(inputValue, this.getLocale());
      const dateString = formatDateString(date);
      const formattedValue = format(this.getLocale(), date);
      this.nativeInput.value = formattedValue;
      this.updateValue(dateString);
      this.updatePointerDates();
    };
    this.onClickDateCell = (cell) => {
      if (!cell.isDisabled) {
        this.select(cell.dateString);
      }
    };
    this.onInputKeyUp = (ev) => {
      if (isSpaceKey(ev) && !this.triggerIcon) {
        if (this.isPopoverOpen) {
          this.close();
        }
        else {
          this.open();
        }
      }
      if (isEnterKey(ev) && !this.triggerIcon) {
        const date = parse(this.nativeInput.value, this.getLocale());
        const dateString = formatDateString(date);
        if (this.isPopoverOpen) {
          if (this.value === dateString) {
            this.close();
          }
        }
      }
    };
    this.onInputKeyDown = (ev) => {
      const separator = dateSeparator(this.getLocale());
      const allowedKeys = [...NUMBER_KEYS, separator, ...ACTION_KEYS];
      if (!isCtrlOrCommandKey(ev) && allowedKeys.indexOf(ev.key) < 0) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      if (ev.key === 'Tab') {
        this.close();
      }
    };
    this.onMonthSelect = (ev) => {
      const inputValue = ev.target.value;
      this.pointerDate = Object.assign(Object.assign({}, this.pointerDate), { day: 1, month: parseInt(inputValue, 10) });
    };
    this.onYearSelect = (ev) => {
      const inputValue = ev.target.value;
      const yearValue = parseInt(inputValue, 10);
      let month = undefined;
      if (this.defaultDate) {
        const defaultDate = parse(this.defaultDate);
        if (this.max) {
          const maxDate = parse(this.max);
          if (defaultDate.getMonth() > maxDate.getMonth()) {
            month = maxDate.getMonth();
          }
        }
        if (this.min) {
          const minDate = parse(this.min);
          if (defaultDate.getMonth() < minDate.getMonth()) {
            month = minDate.getMonth();
          }
        }
      }
      this.pointerDate = {
        day: 1,
        year: yearValue,
        month: month !== undefined ? month : this.pointerDate.month,
      };
    };
    this.onInputFocus = (ev) => inputHandleFocus(this, ev);
    this.onInputBlur = (ev) => {
      preventDefault(ev);
      this.focused = false;
    };
    this.handleClick = (ev) => inputHandleHostClick(this, ev);
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.isMobile = balBreakpoints.isMobile;
    this.focused = false;
    this.isPopoverOpen = false;
    this.selectedDate = '';
    this.pointerDate = {
      year: getYear(now()),
      month: getMonth(now()),
      day: getDate(now()),
    };
    this.ariaForm = defaultBalAriaForm;
    this.name = this.inputId;
    this.invalid = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.loading = false;
    this.placeholder = undefined;
    this.min = undefined;
    this.max = undefined;
    this.closeOnSelect = true;
    this.triggerIcon = false;
    this.minYearProp = undefined;
    this.maxYearProp = undefined;
    this.debounce = 0;
    this.defaultDate = undefined;
    this.value = undefined;
    this.allowedDates = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  valueChanged() {
    this.selectedDate = this.value;
    this.updatePointerDates();
  }
  listenOnClick(ev) {
    inputListenOnClick(this, ev);
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      if (this.resetHandlerTimer) {
        clearTimeout(this.resetHandlerTimer);
      }
      this.resetHandlerTimer = setTimeout(() => {
        if (this.initialValue) {
          this.nativeInput.value = format(this.getLocale(), parse(this.initialValue));
        }
        else {
          this.nativeInput.value = '';
        }
        this.selectedDate = this.initialValue;
        this.updateValue(this.initialValue, false);
        this.updatePointerDates();
      }, 0);
    }
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
  }
  connectedCallback() {
    this.debounceChanged();
    this.initialValue = this.value;
  }
  componentDidLoad() {
    this.inputValue = this.value;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
    this.selectedDate = this.value;
    this.updatePointerDates();
    this.updateValue(this.value, false);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  async open() {
    if (!this.disabled && this.popoverElement) {
      this.popoverElement.present();
    }
  }
  async close() {
    if (!this.disabled && this.popoverElement) {
      this.popoverElement.dismiss();
    }
  }
  async select(dateString) {
    var _a;
    this.nativeInput.value = format(this.getLocale(), parse(dateString));
    this.updateValue(dateString);
    this.updatePointerDates();
    if (this.closeOnSelect) {
      await ((_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.toggle());
    }
  }
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  updatePointerDates() {
    let date = now();
    date.setDate(1);
    if (this.selectedDate) {
      date = parse(this.selectedDate);
    }
    else {
      if (this.defaultDate) {
        date = parse(this.defaultDate);
      }
    }
    if (this.min) {
      const minDate = parse(this.min);
      if (minDate && date < minDate) {
        date = minDate;
      }
    }
    if (this.max) {
      const maxDate = parse(this.max);
      if (maxDate && date > maxDate) {
        date = maxDate;
      }
    }
    this.pointerDate = {
      year: getYear(date),
      month: getMonth(date),
      day: getDate(date),
    };
  }
  updateValue(dateString, isHuman = true) {
    if (!isValidIsoString(dateString)) {
      this.selectedDate = undefined;
      this.value = undefined;
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    }
    if (this.value !== dateString) {
      this.value = dateString;
      if (isHuman && (this.isDateInRange(parse(this.value)) || this.value === '')) {
        this.balChange.emit(this.value);
      }
    }
  }
  get minYear() {
    if (this.min) {
      return parseInt(this.min.substring(0, 4), 10);
    }
    return this.minYearProp ? this.minYearProp : getYear(subYears(now(), 100));
  }
  get maxYear() {
    if (this.max) {
      return parseInt(this.max.substring(0, 4), 10);
    }
    return this.maxYearProp ? this.maxYearProp : getYear(addYears(now(), 100));
  }
  get years() {
    let years = Array.from({ length: this.maxYear - this.minYear + 1 }, (_, index) => this.minYear + index);
    if (this.min && this.pointerDate.month === getMonth(parse(this.min))) {
      const minYear = getYear(parse(this.min));
      years = years.filter(y => y >= minYear);
    }
    if (this.max && this.pointerDate.month === getMonth(parse(this.max))) {
      const maxYear = getYear(parse(this.max));
      years = years.filter(y => y <= maxYear);
    }
    return years;
  }
  get months() {
    const monthNames = i18nBalDatepicker[this.language].monthsShort;
    let months = monthNames.map((name, index) => ({ name, index }));
    if (this.min && this.pointerDate.year === getYear(parse(this.min))) {
      const minMonth = parseInt(this.min.substring(5, 7), 10) - 1;
      months = months.filter(month => month.index >= minMonth);
    }
    if (this.max && this.pointerDate.year === getYear(parse(this.max))) {
      const maxMonth = parseInt(this.max.substring(5, 7), 10) - 1;
      months = months.filter(month => month.index <= maxMonth);
    }
    return months;
  }
  get weekDays() {
    const translations = [...i18nBalDatepicker[this.language].weekdaysMin];
    translations.push(translations.shift() || '');
    return translations;
  }
  get firstDateOfBox() {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1);
    return startOfWeek(date, { weekStartsOn: 1 });
  }
  getLocale() {
    const config = useBalConfig();
    return (config && config.locale) || defaultLocale;
  }
  get calendarGrid() {
    const weekDatePointer = this.firstDateOfBox;
    const dayDatePointer = this.firstDateOfBox;
    let calendar = [];
    do {
      let row = [];
      do {
        row = [
          ...row,
          {
            date: new Date(dayDatePointer),
            display: format(this.getLocale(), dayDatePointer),
            dateString: formatDateString(dayDatePointer),
            label: getDate(dayDatePointer).toString(),
            isToday: isSameDay(dayDatePointer, now()),
            isSelected: parse(this.selectedDate) !== undefined &&
              isSameDay(dayDatePointer, parse(this.selectedDate)),
            isDisabled: !this.getAllowedDates(dayDatePointer) || !this.isDateInRange(dayDatePointer),
            isOutdated: this.pointerDate.month !== dayDatePointer.getMonth() || !this.isDateInRange(dayDatePointer),
          },
        ];
        dayDatePointer.setDate(dayDatePointer.getDate() + 1);
      } while (isSameWeek(dayDatePointer, weekDatePointer, { weekStartsOn: 1 }));
      calendar = [...calendar, row];
      weekDatePointer.setDate(weekDatePointer.getDate() + 7);
    } while (isSameMonth(new Date(this.pointerDate.year, this.pointerDate.month, this.pointerDate.day), dayDatePointer));
    return calendar;
  }
  getAllowedDates(dayDatePointer) {
    if (lodash_isnil(this.allowedDates)) {
      return true;
    }
    return this.allowedDates(formatDateString(dayDatePointer));
  }
  formatDate(value) {
    const separator = dateSeparator(this.getLocale());
    const length = value.length;
    const currentChar = value.charAt(length - 1);
    const lastChar = value.charAt(length - 2);
    if (currentChar === separator) {
      if (length === 1 || lastChar === separator || value.split(separator).filter(val => val.length > 0).length >= 3) {
        return value.substring(0, length - 1);
      }
    }
    if (length === 5) {
      if (value.split(separator)[0].split('').length === 1 && lastChar !== separator && currentChar !== separator) {
        return value.substring(0, length - 1) + separator + value.substring(length - 1, length);
      }
    }
    if (length === 3 || length === 6) {
      if (currentChar !== separator && lastChar !== separator && value.split(separator).length <= 2) {
        return value.substring(0, length - 1) + separator + value.substring(length - 1, length);
      }
    }
    return value;
  }
  render() {
    const block = BEM.block('datepicker');
    const native = block.element('native');
    const popup = block.element('popup');
    const popupBody = popup.element('body');
    const popupFooter = popup.element('footer');
    return (h(Host, { onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, block.class()), block.modifier('disabled').class(this.disabled || this.readonly)) }, h("input", { type: "date", class: Object.assign({}, native.class()), name: this.name, min: this.min, max: this.max, value: this.value, tabindex: -1, "aria-hidden": "true" }), h("bal-popover", { onBalChange: this.onPopoverChange, ref: el => (this.popoverElement = el) }, this.renderInput(), h("bal-popover-content", { spaceless: true, contentMinWidth: 392 }, h("div", { class: Object.assign({}, popup.class()) }, this.renderHeader(), h("div", { class: Object.assign({}, popupBody.class()) }, this.renderGrid()), h("div", { class: Object.assign({}, popupFooter.class()) }, h("slot", null)))))));
  }
  renderInput() {
    return (h("div", { "bal-popover-trigger": true, class: "control" }, h("bal-input-group", { disabled: this.disabled || this.readonly, invalid: this.invalid }, h("input", Object.assign({ class: {
        'input': true,
        'data-test-input': true,
        'is-clickable': !this.disabled && !this.triggerIcon && !this.readonly,
        'is-disabled': this.disabled || this.readonly,
        'is-danger': this.invalid,
      }, "data-testid": "bal-datepicker-input", ref: el => (this.nativeInput = el), id: this.ariaForm.controlId || this.inputId, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, type: "text", maxlength: "10", autoComplete: "off", value: format(this.getLocale(), parse(this.value || '')), required: this.required, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, onKeyDown: e => this.onInputKeyDown(e), onKeyUp: e => this.onInputKeyUp(e), onInput: this.onInput, onClick: this.onInputClick, onChange: this.onInputChange, onBlur: this.onInputBlur, onFocus: this.onInputFocus }, this.inheritedAttributes)), !this.loading ? (h("bal-icon", { class: {
        'datepicker-trigger-icon': true,
        'is-clickable': !this.disabled && !this.readonly,
      }, "is-right": true, color: this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : 'primary', name: "date", onClick: this.onIconClick })) : (''))));
  }
  renderGrid() {
    const block = BEM.block('datepicker-grid');
    const rowEl = block.element('row');
    const cellEl = block.element('cell');
    return (h("div", null, this.renderWeekDayHeader(), h("div", { class: Object.assign({}, block.class()) }, this.calendarGrid.map(row => (h("div", { class: Object.assign({}, rowEl.class()) }, row.map(cell => (h("button", { type: "button", "data-date": cell.dateString, onClick: () => this.onClickDateCell(cell), disabled: cell.isDisabled, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, cellEl.class()), { 'button': true, 'is-text': !cell.isDisabled && !cell.isSelected, 'is-primary': cell.isSelected && cell.isSelected, 'is-disabled': cell.isDisabled || cell.isOutdated }), cellEl.modifier('today').class(cell.isToday)), cellEl.modifier('selectable').class(!cell.isDisabled && !cell.isOutdated)), cellEl.modifier('disabled').class(cell.isDisabled || cell.isOutdated)), cellEl.modifier('outdated').class(cell.isOutdated)), cellEl.modifier('selected').class(cell.isSelected)) }, h("span", null, cell.label))))))))));
  }
  renderWeekDayHeader() {
    const block = BEM.block('datepicker-grid');
    const headerEl = block.element('header');
    const cellEl = block.element('cell');
    return (h("header", { class: Object.assign({}, headerEl.class()) }, this.weekDays.map(weekday => (h("div", { class: Object.assign(Object.assign({}, cellEl.class()), cellEl.modifier('header').class()) }, h("span", null, weekday))))));
  }
  renderHeader() {
    const block = BEM.block('datepicker-pagination');
    const innerEl = block.element('inner');
    const monthAndYearEl = block.element('month-and-year');
    const selectEl = monthAndYearEl.element('select');
    return (h("header", { class: Object.assign({}, block.class()) }, h("div", { class: Object.assign({}, innerEl.class()) }, h("bal-button", { square: true, size: this.isMobile ? 'small' : '', color: "info", icon: "nav-go-left", disabled: this.isPreviousMonthDisabled, onClick: () => this.previousMonth() }), h("div", { class: Object.assign({}, monthAndYearEl.class()) }, h("div", { class: Object.assign(Object.assign({}, selectEl.class()), selectEl.modifier('month').class()) }, h("div", { class: "select" }, h("select", { onInput: this.onMonthSelect }, this.months.map(month => (h("option", { value: month.index, selected: this.pointerDate.month === month.index }, month.name)))))), h("div", { class: Object.assign(Object.assign({}, selectEl.class()), selectEl.modifier('year').class()) }, h("div", { class: "select" }, h("select", { onInput: this.onYearSelect }, this.years.map(year => (h("option", { value: year, selected: this.pointerDate.year === year }, year))))))), h("bal-button", { square: true, size: this.isMobile ? 'small' : '', color: "info", icon: "nav-go-right", disabled: this.isNextMonthDisabled, onClick: () => this.nextMonth() }))));
  }
  previousMonth() {
    if (!this.isPreviousMonthDisabled) {
      if (this.pointerDate.year === this.minYear && this.pointerDate.month === 0) {
        return;
      }
      this.pointerDate = this.calcPreviousMonth();
    }
  }
  nextMonth() {
    if (!this.isNextMonthDisabled) {
      if (this.pointerDate.year === this.maxYear && this.pointerDate.month === 11) {
        return;
      }
      this.pointerDate = this.calcNextMonth();
    }
  }
  calcPreviousMonth() {
    if (this.pointerDate.month === 0) {
      return Object.assign(Object.assign({}, this.pointerDate), { year: this.pointerDate.year - 1, month: 11, day: 1 });
    }
    else {
      return Object.assign(Object.assign({}, this.pointerDate), { month: this.pointerDate.month - 1, day: 1 });
    }
  }
  calcNextMonth() {
    if (this.pointerDate.month === 11) {
      return Object.assign(Object.assign({}, this.pointerDate), { year: this.pointerDate.year + 1, month: 0, day: 1 });
    }
    else {
      return Object.assign(Object.assign({}, this.pointerDate), { month: this.pointerDate.month + 1, day: 1 });
    }
  }
  lastDayOfMonth(year, month) {
    const d = new Date(year, month + 1, 0);
    return getDate(d);
  }
  get isPreviousMonthDisabled() {
    if (this.min) {
      const minDate = parse(this.min);
      const lastDayOfMonth = this.lastDayOfMonth(this.calcPreviousMonth().year, this.calcPreviousMonth().month);
      const beforeDate = new Date(this.calcPreviousMonth().year, this.calcPreviousMonth().month, lastDayOfMonth);
      return isBefore(beforeDate, subDays(minDate, 1));
    }
    return false;
  }
  get isNextMonthDisabled() {
    if (this.max) {
      const maxDate = parse(this.max);
      const beforeDate = new Date(this.calcNextMonth().year, this.calcNextMonth().month, 1);
      return isAfter(beforeDate, lastDayOfMonth(maxDate) ? maxDate : addDays(maxDate, 1));
    }
    return false;
  }
  isDateInRange(cellDate) {
    const parsedCellDate = parse(formatDateString(cellDate));
    if (this.min && this.max && this.max > this.min) {
      return isWithinInterval(parsedCellDate, {
        start: parse(this.min),
        end: parse(this.max),
      });
    }
    if (this.min) {
      return isAfter(parsedCellDate, parse(this.min)) || isSameDay(parsedCellDate, parse(this.min));
    }
    if (this.max) {
      return (isBefore(parsedCellDate, addDays(parse(this.max), 1)) ||
        isSameDay(parsedCellDate, parse(this.max)));
    }
    return true;
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
__decorate([
  Logger('bal-datepicker')
], Datepicker.prototype, "createLogger", null);
__decorate([
  ListenToBreakpoints()
], Datepicker.prototype, "breakpointListener", null);
__decorate([
  ListenToConfig()
], Datepicker.prototype, "configChanged", null);
let datepickerIds = 0;
Datepicker.style = {
  css: balDatepickerCss
};

export { Datepicker as bal_datepicker };
