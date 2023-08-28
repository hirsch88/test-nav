import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as createCommonjsModule, c as commonjsGlobal } from './_commonjsHelpers.js';

var lodash_isempty = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;
});

const balCardCss = ":root{--bal-card-background:var(--bal-color-transparent);--bal-card-background-white:var(--bal-color-white);--bal-card-background-blue:var(--bal-color-primary);--bal-card-background-primary:var(--bal-color-primary);--bal-card-background-info:var(--bal-color-primary);--bal-card-background-success:var(--bal-color-success-2);--bal-card-background-warning:var(--bal-color-warning-2);--bal-card-background-danger:var(--bal-color-danger-2);--bal-card-background-grey:var(--bal-color-grey);--bal-card-background-red:var(--bal-color-red);--bal-card-background-yellow:var(--bal-color-yellow);--bal-card-background-purple:var(--bal-color-purple);--bal-card-background-green:var(--bal-color-green);--bal-card-background-red-light:var(--bal-color-red-1);--bal-card-background-yellow-light:var(--bal-color-yellow-1);--bal-card-background-purple-light:var(--bal-color-purple-1);--bal-card-background-green-light:var(--bal-color-green-1);--bal-card-background-grey-light:var(--bal-color-grey-1);--bal-card-background-purple-1:var(--bal-color-purple-1);--bal-card-background-purple-2:var(--bal-color-purple-2);--bal-card-background-purple-3:var(--bal-color-purple);--bal-card-background-green-1:var(--bal-color-green-1);--bal-card-background-green-2:var(--bal-color-green-2);--bal-card-background-green-3:var(--bal-color-green);--bal-card-background-red-1:var(--bal-color-red-1);--bal-card-background-red-2:var(--bal-color-red-2);--bal-card-background-red-3:var(--bal-color-red);--bal-card-background-yellow-1:var(--bal-color-yellow-1);--bal-card-background-yellow-2:var(--bal-color-yellow-2);--bal-card-background-yellow-3:var(--bal-color-yellow);--bal-card-selected-background:var(--bal-color-primary-2);--bal-card-radius:var(--bal-radius-large);--bal-card-square-radius:var(--bal-radius-none);--bal-card-border:var(--bal-border-width-normal) dashed var(--bal-color-grey)}.bal-card{position:relative;display:block;background:var(--bal-card-background);-webkit-box-shadow:var(--bal-shadow-normal);box-shadow:var(--bal-shadow-normal);border-radius:var(--bal-card-radius)}.bal-card--is-white{background:var(--bal-card-background-white)}.bal-card--is-blue{background:var(--bal-card-background-blue)}.bal-card--is-primary{background:var(--bal-card-background-primary)}.bal-card--is-info{background:var(--bal-card-background-info)}.bal-card--is-success{background:var(--bal-card-background-success)}.bal-card--is-warning{background:var(--bal-card-background-warning)}.bal-card--is-danger{background:var(--bal-card-background-danger)}.bal-card--is-grey{background:var(--bal-card-background-grey)}.bal-card--is-red{background:var(--bal-card-background-red)}.bal-card--is-yellow{background:var(--bal-card-background-yellow)}.bal-card--is-purple{background:var(--bal-card-background-purple)}.bal-card--is-green{background:var(--bal-card-background-green)}.bal-card--is-red-light{background:var(--bal-card-background-red-light)}.bal-card--is-yellow-light{background:var(--bal-card-background-yellow-light)}.bal-card--is-purple-light{background:var(--bal-card-background-purple-light)}.bal-card--is-green-light{background:var(--bal-card-background-green-light)}.bal-card--is-grey-light{background:var(--bal-card-background-grey-light)}.bal-card--is-purple-1{background:var(--bal-card-background-purple-1)}.bal-card--is-purple-2{background:var(--bal-card-background-purple-2)}.bal-card--is-purple-3{background:var(--bal-card-background-purple-3)}.bal-card--is-green-1{background:var(--bal-card-background-green-1)}.bal-card--is-green-2{background:var(--bal-card-background-green-2)}.bal-card--is-green-3{background:var(--bal-card-background-green-3)}.bal-card--is-red-1{background:var(--bal-card-background-red-1)}.bal-card--is-red-2{background:var(--bal-card-background-red-2)}.bal-card--is-red-3{background:var(--bal-card-background-red-3)}.bal-card--is-yellow-1{background:var(--bal-card-background-yellow-1)}.bal-card--is-yellow-2{background:var(--bal-card-background-yellow-2)}.bal-card--is-yellow-3{background:var(--bal-card-background-yellow-3)}.bal-card--has-fullheight,.bal-card--has-fullheight .bal-card-content,.bal-card--has-fullheight .bal-card-content>.is-flex{height:100%}.bal-card--has-border{border:var(--bal-card-border)}.bal-card--is-flat{-webkit-box-shadow:var(--bal-shadow-none);box-shadow:var(--bal-shadow-none)}.bal-card--is-square{border-radius:var(--bal-card-square-radius)}.bal-card--is-selected{background:var(--bal-card-selected-background)}.bal-card--is-clickable{cursor:pointer;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out, -webkit-transform .15s ease-in-out}.bal-card--is-clickable:active,.bal-card--is-clickable:hover{-webkit-box-shadow:var(--bal-shadow-large);box-shadow:var(--bal-shadow-large);-webkit-transform:translate3d(0, -2px, 0);transform:translate3d(0, -2px, 0)}.bal-card>:not(bal-badge):not(bal-tag):first-child{padding-top:1rem}.bal-card>:not(bal-badge):not(bal-tag):last-child{padding-bottom:1rem}.bal-card>bal-badge+bal-card-title,.bal-card>bal-badge+bal-card-content,.bal-card>bal-tag+bal-card-title,.bal-card>bal-tag+bal-card-content,.bal-card>bal-card-title+bal-card-content,.bal-card>bal-card-subtitle+bal-card-content,.bal-card>bal-card-actions,.bal-card>bal-card-button{padding-top:1rem}.bal-card>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card bal-card-title,.bal-card bal-card-subtitle,.bal-card bal-card-content,.bal-card bal-card-actions,.bal-card bal-card-button{padding-left:1rem;padding-right:1rem}@media screen and (min-width: 769px),print{.bal-card>:not(bal-badge):not(bal-tag):first-child{padding-top:1.5rem}.bal-card>:not(bal-badge):not(bal-tag):last-child{padding-bottom:1.5rem}.bal-card>bal-badge+bal-card-title,.bal-card>bal-badge+bal-card-content,.bal-card>bal-tag+bal-card-title,.bal-card>bal-tag+bal-card-content,.bal-card>bal-card-title+bal-card-content,.bal-card>bal-card-subtitle+bal-card-content,.bal-card>bal-card-actions,.bal-card>bal-card-button{padding-top:1.5rem}.bal-card>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card bal-card-title,.bal-card bal-card-subtitle,.bal-card bal-card-content,.bal-card bal-card-actions,.bal-card bal-card-button{padding-left:1.5rem;padding-right:1.5rem}}@media screen and (min-width: 769px),print{.bal-card--is-small>:not(bal-badge):not(bal-tag):first-child{padding-top:1rem}.bal-card--is-small>:not(bal-badge):not(bal-tag):last-child{padding-bottom:1rem}.bal-card--is-small>bal-badge+bal-card-title,.bal-card--is-small>bal-badge+bal-card-content,.bal-card--is-small>bal-tag+bal-card-title,.bal-card--is-small>bal-tag+bal-card-content,.bal-card--is-small>bal-card-title+bal-card-content,.bal-card--is-small>bal-card-subtitle+bal-card-content,.bal-card--is-small>bal-card-actions,.bal-card--is-small>bal-card-button{padding-top:1rem}.bal-card--is-small>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card--is-small bal-card-title,.bal-card--is-small bal-card-subtitle,.bal-card--is-small bal-card-content,.bal-card--is-small bal-card-actions,.bal-card--is-small bal-card-button{padding-left:1rem;padding-right:1rem}}@media screen and (min-width: 769px),print{.bal-card--is-medium>:not(bal-badge):not(bal-tag):first-child{padding-top:1.5rem}.bal-card--is-medium>:not(bal-badge):not(bal-tag):last-child{padding-bottom:1.5rem}.bal-card--is-medium>bal-badge+bal-card-title,.bal-card--is-medium>bal-badge+bal-card-content,.bal-card--is-medium>bal-tag+bal-card-title,.bal-card--is-medium>bal-tag+bal-card-content,.bal-card--is-medium>bal-card-title+bal-card-content,.bal-card--is-medium>bal-card-subtitle+bal-card-content,.bal-card--is-medium>bal-card-actions,.bal-card--is-medium>bal-card-button{padding-top:1.5rem}.bal-card--is-medium>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card--is-medium bal-card-title,.bal-card--is-medium bal-card-subtitle,.bal-card--is-medium bal-card-content,.bal-card--is-medium bal-card-actions,.bal-card--is-medium bal-card-button{padding-left:1.5rem;padding-right:1.5rem}}@media screen and (min-width: 1024px){.bal-card--is-medium>:not(bal-badge):not(bal-tag):first-child{padding-top:2rem}.bal-card--is-medium>:not(bal-badge):not(bal-tag):last-child{padding-bottom:2rem}.bal-card--is-medium>bal-badge+bal-card-title,.bal-card--is-medium>bal-badge+bal-card-content,.bal-card--is-medium>bal-tag+bal-card-title,.bal-card--is-medium>bal-tag+bal-card-content,.bal-card--is-medium>bal-card-title+bal-card-content,.bal-card--is-medium>bal-card-subtitle+bal-card-content,.bal-card--is-medium>bal-card-actions,.bal-card--is-medium>bal-card-button{padding-top:2rem}.bal-card--is-medium>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card--is-medium bal-card-title,.bal-card--is-medium bal-card-subtitle,.bal-card--is-medium bal-card-content,.bal-card--is-medium bal-card-actions,.bal-card--is-medium bal-card-button{padding-left:2rem;padding-right:2rem}}@media screen and (min-width: 769px),print{.bal-card--is-large>:not(bal-badge):not(bal-tag):first-child{padding-top:2rem}.bal-card--is-large>:not(bal-badge):not(bal-tag):last-child{padding-bottom:2rem}.bal-card--is-large>bal-badge+bal-card-title,.bal-card--is-large>bal-badge+bal-card-content,.bal-card--is-large>bal-tag+bal-card-title,.bal-card--is-large>bal-tag+bal-card-content,.bal-card--is-large>bal-card-title+bal-card-content,.bal-card--is-large>bal-card-subtitle+bal-card-content,.bal-card--is-large>bal-card-actions,.bal-card--is-large>bal-card-button{padding-top:2rem}.bal-card--is-large>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card--is-large bal-card-title,.bal-card--is-large bal-card-subtitle,.bal-card--is-large bal-card-content,.bal-card--is-large bal-card-actions,.bal-card--is-large bal-card-button{padding-left:2rem;padding-right:2rem}}@media screen and (min-width: 1024px){.bal-card--is-large>:not(bal-badge):not(bal-tag):first-child{padding-top:4rem}.bal-card--is-large>:not(bal-badge):not(bal-tag):last-child{padding-bottom:4rem}.bal-card--is-large>bal-badge+bal-card-title,.bal-card--is-large>bal-badge+bal-card-content,.bal-card--is-large>bal-tag+bal-card-title,.bal-card--is-large>bal-tag+bal-card-content,.bal-card--is-large>bal-card-title+bal-card-content,.bal-card--is-large>bal-card-subtitle+bal-card-content,.bal-card--is-large>bal-card-actions,.bal-card--is-large>bal-card-button{padding-top:4rem}.bal-card--is-large>.bal-accordion--card-v1{padding-bottom:0 !important}.bal-card--is-large bal-card-title,.bal-card--is-large bal-card-subtitle,.bal-card--is-large bal-card-content,.bal-card--is-large bal-card-actions,.bal-card--is-large bal-card-button{padding-left:4rem;padding-right:4rem}}.bal-card>.bal-tag{position:absolute;left:1rem;top:-1rem}@media screen and (min-width: 1024px){.bal-card>.bal-tag{left:1.5rem}}.bal-card>.bal-tag--is-left{left:1rem}@media screen and (min-width: 1024px){.bal-card>.bal-tag--is-left{left:1.5rem}}.bal-card>.bal-tag--is-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media screen and (min-width: 1024px){.bal-card>.bal-tag--is-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}}.bal-card-title{display:block;position:static}.bal-card-title .title .bal-tag-group,.bal-card-title .title .bal-button-group,.bal-card-title .bal-heading__text .bal-tag-group,.bal-card-title .bal-heading__text .bal-button-group{margin-top:.5rem}@media screen and (min-width: 769px),print{.bal-card-title .bal-heading h3{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.bal-card-title .title,.bal-card-title .bal-heading__text{display:-ms-flexbox;display:flex}.bal-card-title .title .bal-tag-group,.bal-card-title .title .bal-button-group,.bal-card-title .bal-heading__text .bal-tag-group,.bal-card-title .bal-heading__text .bal-button-group{margin-top:0;margin-left:.5rem;display:-ms-inline-flexbox;display:inline-flex}.bal-card-title .title .bal-tag-group .bal-tag,.bal-card-title .bal-heading__text .bal-tag-group .bal-tag{margin-top:.125rem}.bal-card-title .title .bal-button-group,.bal-card-title .bal-heading__text .bal-button-group{-ms-flex:1;flex:1}}.bal-card-subtitle{display:block;position:static}.bal-card-content{display:block;position:static;word-break:break-word;text-align:left;font-family:var(--bal-font-family-text);font-size:var(--bal-size-normal);line-height:var(--bal-line-height-normal);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.bal-card-actions{display:block;position:static}.bal-card-button{display:block;position:static}.column bal-card.has-height-auto,.column bal-card.has-height-auto bal-card-content,.column bal-card.has-height-auto bal-card-content>.is-flex{height:100%}";

const BalCard = proxyCustomElement(class BalCard extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.border = false;
    this.flat = false;
    this.square = false;
    this.inverted = false;
    this.clickable = false;
    this.selected = false;
    this.fullheight = false;
    this.space = '';
    this.color = 'white';
  }
  get colorTypeClass() {
    return lodash_isempty(this.color) ? '' : `is-${this.inverted ? 'blue' : this.color}`;
  }
  render() {
    return (h(Host, { class: {
        'bal-card': true,
        [`bal-card--${this.colorTypeClass}`]: !lodash_isempty(this.color),
        [`bal-card--is-${this.space}`]: this.space !== '',
        'bal-card--has-border': this.border,
        'bal-card--is-flat': this.flat,
        'bal-card--is-clickable': this.clickable,
        'bal-card--is-selected': this.selected,
        'bal-card--is-square': this.square,
        'bal-card--has-fullheight': this.fullheight,
      } }, h("slot", null)));
  }
  static get style() { return {
    css: balCardCss
  }; }
}, [36, "bal-card", {
    "border": [4],
    "flat": [4],
    "square": [4],
    "inverted": [4],
    "clickable": [4],
    "selected": [4],
    "fullheight": [4],
    "space": [1],
    "color": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalCard);
      }
      break;
  } });
}

export { BalCard as B, defineCustomElement as d };
