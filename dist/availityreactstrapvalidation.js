(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("AvailityReactstrapValidation", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AvailityReactstrapValidation"] = factory(require("react"), require("react-dom"));
	else
		root["AvailityReactstrapValidation"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_125__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(146);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.inputTypeOverride = exports.inputType = exports.isoDateFormat = undefined;
	exports.isEmpty = isEmpty;
	exports.isDecimal = isDecimal;
	
	var _isString = __webpack_require__(120);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isUndefined = __webpack_require__(54);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global document */
	var isoDateFormat = exports.isoDateFormat = 'YYYY-MM-DD';
	
	function isEmpty(value) {
	  return (0, _isUndefined2.default)(value) || value === null || (0, _isString2.default)(value) && value.trim() === '' || value === false || Array.isArray(value) && value.length === 0;
	}
	
	function isDecimal(value) {
	  return value % 1 !== 0;
	}
	
	var inputType = exports.inputType = { date: false, number: false, time: false, month: false, week: false };
	
	var inputTypeOverride = exports.inputTypeOverride = function inputTypeOverride(key, value) {
	  inputType[key] = value;
	};
	
	/* istanbul ignore next  */
	if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
	  var tester = document.createElement('input');
	
	  for (var i in inputType) {
	    if (inputType.hasOwnProperty(i)) {
	      tester.setAttribute('type', i);
	      tester.value = ':(';
	
	      if (tester.type === i && tester.value === '') {
	        inputType[i] = true;
	      }
	    }
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(65)('wks');
	var uid = __webpack_require__(45);
	var Symbol = __webpack_require__(3).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(148);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(147);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(56);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(56);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (true) {
	  var ReactIs = __webpack_require__(123);
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(297)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(111);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28),
	    isSymbol = __webpack_require__(53);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(2);
	var ctx = __webpack_require__(32);
	var hide = __webpack_require__(25);
	var has = __webpack_require__(24);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

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
	
	module.exports = isArray;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(5);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(9));
	var classNames = _interopDefault(__webpack_require__(18));
	var isFunction = _interopDefault(__webpack_require__(198));
	var isobject = _interopDefault(__webpack_require__(199));
	var ReactDOM = _interopDefault(__webpack_require__(125));
	var reactPopper = __webpack_require__(300);
	var toNumber = _interopDefault(__webpack_require__(200));
	var reactLifecyclesCompat = __webpack_require__(299);
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
	function getScrollbarWidth() {
	  var scrollDiv = document.createElement('div');
	  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
	}
	
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	
	function getOriginalBodyPadding() {
	  var style = window.getComputedStyle(document.body, null);
	
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	
	function conditionallyUpdateScrollbar() {
	  var scrollbarWidth = getScrollbarWidth();
	  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
	  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
	
	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	
	var globalCssModule = void 0;
	
	function setGlobalCssModule(cssModule) {
	  globalCssModule = cssModule;
	}
	
	function mapToCssModules() {
	  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;
	
	  if (!cssModule) return className;
	  return className.split(' ').map(function (c) {
	    return cssModule[c] || c;
	  }).join(' ');
	}
	
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */
	function omit(obj, omitKeys) {
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */
	function pick(obj, keys) {
	  var pickKeys = Array.isArray(keys) ? keys : [keys];
	  var length = pickKeys.length;
	  var key = void 0;
	  var result = {};
	
	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }
	  return result;
	}
	
	var warned = {};
	
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }
	    warned[message] = true;
	  }
	}
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
	    }
	
	    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }
	
	    return propType.apply(undefined, [props, propName, componentName].concat(rest));
	  };
	}
	
	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	
	var targetPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({ current: PropTypes.any })]);
	
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
	var TransitionTimeouts = {
	  Fade: 150, // $transition-fade
	  Collapse: 350, // $transition-collapse
	  Modal: 300, // $modal-transition
	  Carousel: 600 // $carousel-transition
	};
	
	// Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.
	var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	
	var TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	
	var keyCodes = {
	  esc: 27,
	  space: 32,
	  enter: 13,
	  tab: 9,
	  up: 38,
	  down: 40
	};
	
	var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	function isReactRefObj(target) {
	  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
	    return 'current' in target;
	  }
	  return false;
	}
	
	function findDOMElements(target) {
	  if (isReactRefObj(target)) {
	    return target.current;
	  }
	  if (isFunction(target)) {
	    return target();
	  }
	  if (typeof target === 'string' && canUseDOM) {
	    var selection = document.querySelectorAll(target);
	    if (!selection.length) {
	      selection = document.querySelectorAll('#' + target);
	    }
	    if (!selection.length) {
	      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
	    }
	    return selection;
	  }
	  return target;
	}
	
	function isArrayOrNodeList(els) {
	  if (els === null) {
	    return false;
	  }
	  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
	}
	
	function getTarget(target) {
	  var els = findDOMElements(target);
	  if (isArrayOrNodeList(els)) {
	    return els[0];
	  }
	  return els;
	}
	
	var defaultToggleEvents = ['touchstart', 'click'];
	
	function addMultipleEventListeners(_els, handler, _events) {
	  var els = _els;
	  if (!isArrayOrNodeList(els)) {
	    els = [els];
	  }
	
	  var events = _events;
	  if (typeof events === 'string') {
	    events = events.split(/\s+/);
	  }
	
	  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
	    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
	  }
	  events.forEach(function (event) {
	    els.forEach(function (el) {
	      el.addEventListener(event, handler);
	    });
	  });
	  return function removeEvents() {
	    events.forEach(function (event) {
	      els.forEach(function (el) {
	        el.removeEventListener(event, handler);
	      });
	    });
	  };
	}
	
	var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
	
	
	
	var utils = Object.freeze({
		getScrollbarWidth: getScrollbarWidth,
		setScrollbarWidth: setScrollbarWidth,
		isBodyOverflowing: isBodyOverflowing,
		getOriginalBodyPadding: getOriginalBodyPadding,
		conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
		setGlobalCssModule: setGlobalCssModule,
		mapToCssModules: mapToCssModules,
		omit: omit,
		pick: pick,
		warnOnce: warnOnce,
		deprecated: deprecated,
		DOMElement: DOMElement,
		targetPropType: targetPropType,
		TransitionTimeouts: TransitionTimeouts,
		TransitionPropTypeKeys: TransitionPropTypeKeys,
		TransitionStatuses: TransitionStatuses,
		keyCodes: keyCodes,
		PopperPlacements: PopperPlacements,
		canUseDOM: canUseDOM,
		isReactRefObj: isReactRefObj,
		findDOMElements: findDOMElements,
		isArrayOrNodeList: isArrayOrNodeList,
		getTarget: getTarget,
		defaultToggleEvents: defaultToggleEvents,
		addMultipleEventListeners: addMultipleEventListeners,
		focusableElements: focusableElements
	});
	
	var propTypes = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps = {
	  tag: 'div'
	};
	
	var Container = function Container(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      fluid = props.fluid,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, fluid ? 'container-fluid' : 'container'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Container.propTypes = propTypes;
	Container.defaultProps = defaultProps;
	
	var propTypes$1 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  noGutters: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  form: PropTypes.bool
	};
	
	var defaultProps$1 = {
	  tag: 'div'
	};
	
	var Row = function Row(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      noGutters = props.noGutters,
	      Tag = props.tag,
	      form = props.form,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag', 'form']);
	
	
	  var classes = mapToCssModules(classNames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Row.propTypes = propTypes$1;
	Row.defaultProps = defaultProps$1;
	
	var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
	  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
	  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	
	var propTypes$2 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  widths: PropTypes.array
	};
	
	var defaultProps$2 = {
	  tag: 'div',
	  widths: colWidths
	};
	
	var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Col = function Col(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      widths = props.widths,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
	    } else {
	      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
	      colClasses.push(_colClass);
	    }
	  });
	
	  if (!colClasses.length) {
	    colClasses.push('col');
	  }
	
	  var classes = mapToCssModules(classNames(className, colClasses), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Col.propTypes = propTypes$2;
	Col.defaultProps = defaultProps$2;
	
	var propTypes$3 = {
	  light: PropTypes.bool,
	  dark: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  full: PropTypes.bool,
	  fixed: PropTypes.string,
	  sticky: PropTypes.string,
	  color: PropTypes.string,
	  role: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggleable: deprecated(PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), 'Please use the prop "expand"'),
	  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
	};
	
	var defaultProps$3 = {
	  tag: 'nav',
	  expand: false
	};
	
	var getExpandClass = function getExpandClass(expand) {
	  if (expand === false) {
	    return false;
	  } else if (expand === true || expand === 'xs') {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + expand;
	};
	
	// To better maintain backwards compatibility while toggleable is deprecated.
	// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
	var toggleableToExpand = {
	  xs: 'sm',
	  sm: 'md',
	  md: 'lg',
	  lg: 'xl'
	};
	
	var getToggleableClass = function getToggleableClass(toggleable) {
	  if (toggleable === undefined || toggleable === 'xl') {
	    return false;
	  } else if (toggleable === false) {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
	};
	
	var Navbar = function Navbar(props) {
	  var _classNames;
	
	  var toggleable = props.toggleable,
	      expand = props.expand,
	      className = props.className,
	      cssModule = props.cssModule,
	      light = props.light,
	      dark = props.dark,
	      inverse = props.inverse,
	      fixed = props.fixed,
	      sticky = props.sticky,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
	    'navbar-light': light,
	    'navbar-dark': inverse || dark
	  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Navbar.propTypes = propTypes$3;
	Navbar.defaultProps = defaultProps$3;
	
	var propTypes$4 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$4 = {
	  tag: 'a'
	};
	
	var NavbarBrand = function NavbarBrand(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-brand'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavbarBrand.propTypes = propTypes$4;
	NavbarBrand.defaultProps = defaultProps$4;
	
	var propTypes$5 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  type: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node
	};
	
	var defaultProps$5 = {
	  tag: 'button',
	  type: 'button'
	};
	
	var NavbarToggler = function NavbarToggler(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-toggler'), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, { className: classes }),
	    children || React__default.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
	  );
	};
	
	NavbarToggler.propTypes = propTypes$5;
	NavbarToggler.defaultProps = defaultProps$5;
	
	var propTypes$6 = {
	  tabs: PropTypes.bool,
	  pills: PropTypes.bool,
	  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  horizontal: PropTypes.string,
	  justified: PropTypes.bool,
	  fill: PropTypes.bool,
	  navbar: PropTypes.bool,
	  card: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$6 = {
	  tag: 'ul',
	  vertical: false
	};
	
	var getVerticalClass = function getVerticalClass(vertical) {
	  if (vertical === false) {
	    return false;
	  } else if (vertical === true || vertical === 'xs') {
	    return 'flex-column';
	  }
	
	  return 'flex-' + vertical + '-column';
	};
	
	var Nav = function Nav(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabs = props.tabs,
	      pills = props.pills,
	      vertical = props.vertical,
	      horizontal = props.horizontal,
	      justified = props.justified,
	      fill = props.fill,
	      navbar = props.navbar,
	      card = props.card,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
	    'nav-tabs': tabs,
	    'card-header-tabs': card && tabs,
	    'nav-pills': pills,
	    'card-header-pills': card && pills,
	    'nav-justified': justified,
	    'nav-fill': fill
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Nav.propTypes = propTypes$6;
	Nav.defaultProps = defaultProps$6;
	
	var propTypes$7 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$7 = {
	  tag: 'li'
	};
	
	var NavItem = function NavItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'nav-item', active ? 'active' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavItem.propTypes = propTypes$7;
	NavItem.defaultProps = defaultProps$7;
	
	/* eslint react/no-find-dom-node: 0 */
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
	
	var propTypes$8 = {
	  disabled: PropTypes.bool,
	  dropup: deprecated(PropTypes.bool, 'Please use the prop "direction" with the value "up".'),
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
	  group: PropTypes.bool,
	  isOpen: PropTypes.bool,
	  nav: PropTypes.bool,
	  active: PropTypes.bool,
	  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
	  size: PropTypes.string,
	  tag: PropTypes.string,
	  toggle: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  inNavbar: PropTypes.bool,
	  setActiveFromChild: PropTypes.bool
	};
	
	var defaultProps$8 = {
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  active: false,
	  addonType: false,
	  inNavbar: false,
	  setActiveFromChild: false
	};
	
	var childContextTypes = {
	  toggle: PropTypes.func.isRequired,
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var Dropdown = function (_React$Component) {
	  inherits(Dropdown, _React$Component);
	
	  function Dropdown(props) {
	    classCallCheck(this, Dropdown);
	
	    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
	
	    _this.addEvents = _this.addEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.removeEvents = _this.removeEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(Dropdown, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        toggle: this.props.toggle,
	        isOpen: this.props.isOpen,
	        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	        inNavbar: this.props.inNavbar
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeEvents();
	    }
	  }, {
	    key: 'getContainer',
	    value: function getContainer() {
	      return ReactDOM.findDOMNode(this);
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	      var container = this.getContainer();
	
	      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	        return;
	      }
	
	      this.toggle(e);
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if (keyCodes.tab === e.which || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
	        return;
	      }
	
	      e.preventDefault();
	      if (this.props.disabled) return;
	
	      var container = this.getContainer();
	
	      if (e.which === keyCodes.space && keyCodes.enter && this.props.isOpen && container !== e.target) {
	        e.target.click();
	      }
	
	      if (e.which === keyCodes.esc || !this.props.isOpen) {
	        this.toggle(e);
	        container.querySelector('[aria-expanded]').focus();
	        return;
	      }
	
	      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
	      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
	      var disabledClass = mapToCssModules('disabled', this.props.cssModule);
	
	      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
	      if (!items.length) return;
	
	      var index = -1;
	
	      var charPressed = String.fromCharCode(e.which).toLowerCase();
	
	      for (var i = 0; i < items.length; i += 1) {
	        var firstLetter = items[i].textContent && items[i].textContent[0].toLowerCase();
	        if (firstLetter === charPressed || items[i] === e.target) {
	          index = i;
	          break;
	        }
	      }
	
	      if (e.which === keyCodes.up && index > 0) {
	        index -= 1;
	      }
	
	      if (e.which === keyCodes.down && index < items.length - 1) {
	        index += 1;
	      }
	
	      if (index < 0) {
	        index = 0;
	      }
	
	      items[index].focus();
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.addEvents();
	      } else {
	        this.removeEvents();
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          dropup = _omit.dropup,
	          isOpen = _omit.isOpen,
	          group = _omit.group,
	          size = _omit.size,
	          nav = _omit.nav,
	          setActiveFromChild = _omit.setActiveFromChild,
	          active = _omit.active,
	          addonType = _omit.addonType,
	          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);
	
	      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;
	
	      attrs.tag = attrs.tag || (nav ? 'li' : 'div');
	
	      var subItemIsActive = false;
	      if (setActiveFromChild) {
	        React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
	          if (dropdownItem.props.active) subItemIsActive = true;
	        });
	      }
	
	      var classes = mapToCssModules(classNames(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);
	
	      return React__default.createElement(reactPopper.Manager, _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
	    }
	  }]);
	  return Dropdown;
	}(React__default.Component);
	
	Dropdown.propTypes = propTypes$8;
	Dropdown.defaultProps = defaultProps$8;
	Dropdown.childContextTypes = childContextTypes;
	
	function NavDropdown(props) {
	  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
	  return React__default.createElement(Dropdown, _extends({ nav: true }, props));
	}
	
	var propTypes$9 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  disabled: PropTypes.bool,
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  onClick: PropTypes.func,
	  href: PropTypes.any
	};
	
	var defaultProps$9 = {
	  tag: 'a'
	};
	
	var NavLink = function (_React$Component) {
	  inherits(NavLink, _React$Component);
	
	  function NavLink(props) {
	    classCallCheck(this, NavLink);
	
	    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(NavLink, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.href === '#') {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          active = _props.active,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, 'nav-link', {
	        disabled: attributes.disabled,
	        active: active
	      }), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
	    }
	  }]);
	  return NavLink;
	}(React__default.Component);
	
	NavLink.propTypes = propTypes$9;
	NavLink.defaultProps = defaultProps$9;
	
	var propTypes$10 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  listClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  'aria-label': PropTypes.string
	};
	
	var defaultProps$10 = {
	  tag: 'nav',
	  listTag: 'ol',
	  'aria-label': 'breadcrumb'
	};
	
	var Breadcrumb = function Breadcrumb(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);
	
	
	  var classes = mapToCssModules(classNames(className), cssModule);
	
	  var listClasses = mapToCssModules(classNames('breadcrumb', listClassName), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, { className: classes, 'aria-label': label }),
	    React__default.createElement(
	      ListTag,
	      { className: listClasses },
	      children
	    )
	  );
	};
	
	Breadcrumb.propTypes = propTypes$10;
	Breadcrumb.defaultProps = defaultProps$10;
	
	var propTypes$11 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$11 = {
	  tag: 'li'
	};
	
	var BreadcrumbItem = function BreadcrumbItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, 'aria-current': active ? 'page' : undefined }));
	};
	
	BreadcrumbItem.propTypes = propTypes$11;
	BreadcrumbItem.defaultProps = defaultProps$11;
	
	var propTypes$12 = {
	  active: PropTypes.bool,
	  'aria-label': PropTypes.string,
	  block: PropTypes.bool,
	  color: PropTypes.string,
	  disabled: PropTypes.bool,
	  outline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  onClick: PropTypes.func,
	  size: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  close: PropTypes.bool
	};
	
	var defaultProps$12 = {
	  color: 'secondary',
	  tag: 'button'
	};
	
	var Button = function (_React$Component) {
	  inherits(Button, _React$Component);
	
	  function Button(props) {
	    classCallCheck(this, Button);
	
	    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(Button, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          active = _props.active,
	          ariaLabel = _props['aria-label'],
	          block = _props.block,
	          className = _props.className,
	          close = _props.close,
	          cssModule = _props.cssModule,
	          color = _props.color,
	          outline = _props.outline,
	          size = _props.size,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['active', 'aria-label', 'block', 'className', 'close', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);
	
	
	      if (close && typeof attributes.children === 'undefined') {
	        attributes.children = React__default.createElement(
	          'span',
	          { 'aria-hidden': true },
	          '\xD7'
	        );
	      }
	
	      var btnOutlineColor = 'btn' + (outline ? '-outline' : '') + '-' + color;
	
	      var classes = mapToCssModules(classNames(className, { close: close }, close || 'btn', close || btnOutlineColor, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);
	
	      if (attributes.href && Tag === 'button') {
	        Tag = 'a';
	      }
	
	      var defaultAriaLabel = close ? 'Close' : null;
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	      }, attributes, {
	        className: classes,
	        ref: innerRef,
	        onClick: this.onClick,
	        'aria-label': ariaLabel || defaultAriaLabel
	      }));
	    }
	  }]);
	  return Button;
	}(React__default.Component);
	
	Button.propTypes = propTypes$12;
	Button.defaultProps = defaultProps$12;
	
	var propTypes$13 = {
	  children: PropTypes.node
	};
	
	var ButtonDropdown = function ButtonDropdown(props) {
	  return React__default.createElement(Dropdown, _extends({ group: true }, props));
	};
	
	ButtonDropdown.propTypes = propTypes$13;
	
	var propTypes$14 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string,
	  size: PropTypes.string,
	  vertical: PropTypes.bool
	};
	
	var defaultProps$13 = {
	  tag: 'div',
	  role: 'group'
	};
	
	var ButtonGroup = function ButtonGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      vertical = props.vertical,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonGroup.propTypes = propTypes$14;
	ButtonGroup.defaultProps = defaultProps$13;
	
	var propTypes$15 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string
	};
	
	var defaultProps$14 = {
	  tag: 'div',
	  role: 'toolbar'
	};
	
	var ButtonToolbar = function ButtonToolbar(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'btn-toolbar'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonToolbar.propTypes = propTypes$15;
	ButtonToolbar.defaultProps = defaultProps$14;
	
	var propTypes$16 = {
	  children: PropTypes.node,
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  divider: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  header: PropTypes.bool,
	  onClick: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.bool
	};
	
	var contextTypes = {
	  toggle: PropTypes.func
	};
	
	var defaultProps$15 = {
	  tag: 'button',
	  toggle: true
	};
	
	var DropdownItem = function (_React$Component) {
	  inherits(DropdownItem, _React$Component);
	
	  function DropdownItem(props) {
	    classCallCheck(this, DropdownItem);
	
	    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.getTabIndex = _this.getTabIndex.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownItem, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      if (this.props.toggle) {
	        this.context.toggle(e);
	      }
	    }
	  }, {
	    key: 'getTabIndex',
	    value: function getTabIndex() {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        return '-1';
	      }
	
	      return '0';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabIndex = this.getTabIndex();
	
	      var _omit = omit(this.props, ['toggle']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          divider = _omit.divider,
	          Tag = _omit.tag,
	          header = _omit.header,
	          active = _omit.active,
	          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);
	
	      var classes = mapToCssModules(classNames(className, {
	        disabled: props.disabled,
	        'dropdown-item': !divider && !header,
	        active: active,
	        'dropdown-header': header,
	        'dropdown-divider': divider
	      }), cssModule);
	
	      if (Tag === 'button') {
	        if (header) {
	          Tag = 'h6';
	        } else if (divider) {
	          Tag = 'div';
	        } else if (props.href) {
	          Tag = 'a';
	        }
	      }
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	      }, props, {
	        tabIndex: tabIndex,
	        className: classes,
	        onClick: this.onClick
	      }));
	    }
	  }]);
	  return DropdownItem;
	}(React__default.Component);
	
	DropdownItem.propTypes = propTypes$16;
	DropdownItem.defaultProps = defaultProps$15;
	DropdownItem.contextTypes = contextTypes;
	
	var propTypes$17 = {
	  tag: PropTypes.string,
	  children: PropTypes.node.isRequired,
	  right: PropTypes.bool,
	  flip: PropTypes.bool,
	  modifiers: PropTypes.object,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  persist: PropTypes.bool
	};
	
	var defaultProps$16 = {
	  tag: 'div',
	  flip: true
	};
	
	var contextTypes$1 = {
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var noFlipModifier = { flip: { enabled: false } };
	
	var directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  down: 'bottom'
	};
	
	var DropdownMenu = function DropdownMenu(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      right = props.right,
	      tag = props.tag,
	      flip = props.flip,
	      modifiers = props.modifiers,
	      persist = props.persist,
	      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);
	
	  var classes = mapToCssModules(classNames(className, 'dropdown-menu', {
	    'dropdown-menu-right': right,
	    show: context.isOpen
	  }), cssModule);
	
	  var Tag = tag;
	
	  if (persist || context.isOpen && !context.inNavbar) {
	    Tag = reactPopper.Popper;
	
	    var position1 = directionPositionMap[context.direction] || 'bottom';
	    var position2 = right ? 'end' : 'start';
	    attrs.placement = position1 + '-' + position2;
	    attrs.component = tag;
	    attrs.modifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
	  }
	
	  return React__default.createElement(Tag, _extends({
	    tabIndex: '-1',
	    role: 'menu'
	  }, attrs, {
	    'aria-hidden': !context.isOpen,
	    className: classes,
	    'x-placement': attrs.placement
	  }));
	};
	
	DropdownMenu.propTypes = propTypes$17;
	DropdownMenu.defaultProps = defaultProps$16;
	DropdownMenu.contextTypes = contextTypes$1;
	
	var propTypes$18 = {
	  caret: PropTypes.bool,
	  color: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  onClick: PropTypes.func,
	  'aria-haspopup': PropTypes.bool,
	  split: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  nav: PropTypes.bool
	};
	
	var defaultProps$17 = {
	  'aria-haspopup': true,
	  color: 'secondary'
	};
	
	var contextTypes$2 = {
	  isOpen: PropTypes.bool.isRequired,
	  toggle: PropTypes.func.isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var DropdownToggle = function (_React$Component) {
	  inherits(DropdownToggle, _React$Component);
	
	  function DropdownToggle(props) {
	    classCallCheck(this, DropdownToggle);
	
	    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownToggle, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.nav && !this.props.tag) {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      this.context.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          color = _props.color,
	          cssModule = _props.cssModule,
	          caret = _props.caret,
	          split = _props.split,
	          nav = _props.nav,
	          tag = _props.tag,
	          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);
	
	      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	      var classes = mapToCssModules(classNames(className, {
	        'dropdown-toggle': caret || split,
	        'dropdown-toggle-split': split,
	        'nav-link': nav
	      }), cssModule);
	      var children = props.children || React__default.createElement(
	        'span',
	        { className: 'sr-only' },
	        ariaLabel
	      );
	
	      var Tag = void 0;
	
	      if (nav && !tag) {
	        Tag = 'a';
	        props.href = '#';
	      } else if (!tag) {
	        Tag = Button;
	        props.color = color;
	        props.cssModule = cssModule;
	      } else {
	        Tag = tag;
	      }
	
	      if (this.context.inNavbar) {
	        return React__default.createElement(Tag, _extends({}, props, {
	          className: classes,
	          onClick: this.onClick,
	          'aria-expanded': this.context.isOpen,
	          children: children
	        }));
	      }
	
	      return React__default.createElement(reactPopper.Target, _extends({}, props, {
	        className: classes,
	        component: Tag,
	        onClick: this.onClick,
	        'aria-expanded': this.context.isOpen,
	        children: children
	      }));
	    }
	  }]);
	  return DropdownToggle;
	}(React__default.Component);
	
	DropdownToggle.propTypes = propTypes$18;
	DropdownToggle.defaultProps = defaultProps$17;
	DropdownToggle.contextTypes = contextTypes$2;
	
	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var PropTypes$1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.classNamesShape = exports.timeoutsShape = undefined;
	  exports.transitionTimeout = transitionTimeout;
	
	  var _propTypes2 = _interopRequireDefault(PropTypes);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function transitionTimeout(transitionType) {
	    var timeoutPropName = 'transition' + transitionType + 'Timeout';
	    var enabledPropName = 'transition' + transitionType;
	
	    return function (props) {
	      // If the transition is enabled
	      if (props[enabledPropName]) {
	        // If no timeout duration is provided
	        if (props[timeoutPropName] == null) {
	          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	          // If the duration isn't a number
	        } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	      }
	
	      return null;
	    };
	  }
	
	  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
	    enter: _propTypes2.default.number,
	    exit: _propTypes2.default.number
	  }).isRequired]);
	
	  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    active: _propTypes2.default.string
	  }), _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    enterDone: _propTypes2.default.string,
	    enterActive: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    exitDone: _propTypes2.default.string,
	    exitActive: _propTypes2.default.string
	  })]);
	});
	
	unwrapExports(PropTypes$1);
	
	var Transition_1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	  var PropTypes$$1 = _interopRequireWildcard(PropTypes);
	
	  var _react2 = _interopRequireDefault(React__default);
	
	  var _reactDom2 = _interopRequireDefault(ReactDOM);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }newObj.default = obj;return newObj;
	    }
	  }
	
	  function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
	  var EXITED = exports.EXITED = 'exited';
	  var ENTERING = exports.ENTERING = 'entering';
	  var ENTERED = exports.ENTERED = 'entered';
	  var EXITING = exports.EXITING = 'exiting';
	
	  /**
	   * The Transition component lets you describe a transition from one component
	   * state to another _over time_ with a simple declarative API. Most commonly
	   * it's used to animate the mounting and unmounting of a component, but can also
	   * be used to describe in-place transition states as well.
	   *
	   * By default the `Transition` component does not alter the behavior of the
	   * component it renders, it only tracks "enter" and "exit" states for the components.
	   * It's up to you to give meaning and effect to those states. For example we can
	   * add styles to a component when it enters or exits:
	   *
	   * ```jsx
	   * import Transition from 'react-transition-group/Transition';
	   *
	   * const duration = 300;
	   *
	   * const defaultStyle = {
	   *   transition: `opacity ${duration}ms ease-in-out`,
	   *   opacity: 0,
	   * }
	   *
	   * const transitionStyles = {
	   *   entering: { opacity: 0 },
	   *   entered:  { opacity: 1 },
	   * };
	   *
	   * const Fade = ({ in: inProp }) => (
	   *   <Transition in={inProp} timeout={duration}>
	   *     {(state) => (
	   *       <div style={{
	   *         ...defaultStyle,
	   *         ...transitionStyles[state]
	   *       }}>
	   *         I'm a fade Transition!
	   *       </div>
	   *     )}
	   *   </Transition>
	   * );
	   * ```
	   *
	   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
	   * What it does do is track transition states over time so you can update the
	   * component (such as by adding styles or classes) when it changes states.
	   *
	   * There are 4 main states a Transition can be in:
	   *  - `'entering'`
	   *  - `'entered'`
	   *  - `'exiting'`
	   *  - `'exited'`
	   *
	   * Transition state is toggled via the `in` prop. When `true` the component begins the
	   * "Enter" stage. During this stage, the component will shift from its current transition state,
	   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
	   * it's complete. Let's take the following example:
	   *
	   * ```jsx
	   * state = { in: false };
	   *
	   * toggleEnterState = () => {
	   *   this.setState({ in: true });
	   * }
	   *
	   * render() {
	   *   return (
	   *     <div>
	   *       <Transition in={this.state.in} timeout={500} />
	   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the button is clicked the component will shift to the `'entering'` state and
	   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
	   *
	   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
	   *
	   * ## Timing
	   *
	   * Timing is often the trickiest part of animation, mistakes can result in slight delays
	   * that are hard to pin down. A common example is when you want to add an exit transition,
	   * you should set the desired final styles when the state is `'exiting'`. That's when the
	   * transition to those styles will start and, if you matched the `timeout` prop with the
	   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
	   *
	   * > **Note**: For simpler transitions the `Transition` component might be enough, but
	   * > take into account that it's platform-agnostic, while the `CSSTransition` component
	   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	   * > in order to make more complex transitions more predictable. For example, even though
	   * > classes `example-enter` and `example-enter-active` are applied immediately one after
	   * > another, you can still transition from one to the other because of the forced reflow
	   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
	   * > for more info). Take this into account when choosing between `Transition` and
	   * > `CSSTransition`.
	   *
	   * ## Example
	   *
	   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
	   *
	   */
	
	  var Transition = function (_React$Component) {
	    _inherits(Transition, _React$Component);
	
	    function Transition(props, context) {
	      _classCallCheck(this, Transition);
	
	      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	      var parentGroup = context.transitionGroup;
	      // In the context of a TransitionGroup all enters are really appears
	      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	
	      var initialStatus = void 0;
	      _this.nextStatus = null;
	
	      if (props.in) {
	        if (appear) {
	          initialStatus = EXITED;
	          _this.nextStatus = ENTERING;
	        } else {
	          initialStatus = ENTERED;
	        }
	      } else {
	        if (props.unmountOnExit || props.mountOnEnter) {
	          initialStatus = UNMOUNTED;
	        } else {
	          initialStatus = EXITED;
	        }
	      }
	
	      _this.state = { status: initialStatus };
	
	      _this.nextCallback = null;
	      return _this;
	    }
	
	    Transition.prototype.getChildContext = function getChildContext() {
	      return { transitionGroup: null }; // allows for nested Transitions
	    };
	
	    Transition.prototype.componentDidMount = function componentDidMount() {
	      this.updateStatus(true);
	    };
	
	    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _ref = this.pendingState || this.state,
	          status = _ref.status;
	
	      if (nextProps.in) {
	        if (status === UNMOUNTED) {
	          this.setState({ status: EXITED });
	        }
	        if (status !== ENTERING && status !== ENTERED) {
	          this.nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.nextStatus = EXITING;
	        }
	      }
	    };
	
	    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	      this.updateStatus();
	    };
	
	    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.cancelNextCallback();
	    };
	
	    Transition.prototype.getTimeouts = function getTimeouts() {
	      var timeout = this.props.timeout;
	
	      var exit = void 0,
	          enter = void 0,
	          appear = void 0;
	
	      exit = enter = appear = timeout;
	
	      if (timeout != null && typeof timeout !== 'number') {
	        exit = timeout.exit;
	        enter = timeout.enter;
	        appear = timeout.appear;
	      }
	      return { exit: exit, enter: enter, appear: appear };
	    };
	
	    Transition.prototype.updateStatus = function updateStatus() {
	      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      var nextStatus = this.nextStatus;
	
	      if (nextStatus !== null) {
	        this.nextStatus = null;
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();
	        var node = _reactDom2.default.findDOMNode(this);
	
	        if (nextStatus === ENTERING) {
	          this.performEnter(node, mounting);
	        } else {
	          this.performExit(node);
	        }
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({ status: UNMOUNTED });
	      }
	    };
	
	    Transition.prototype.performEnter = function performEnter(node, mounting) {
	      var _this2 = this;
	
	      var enter = this.props.enter;
	
	      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	
	      var timeouts = this.getTimeouts();
	
	      // no enter animation skip right to ENTERED
	      // if we are mounting and running this it means appear _must_ be set
	      if (!mounting && !enter) {
	        this.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	        return;
	      }
	
	      this.props.onEnter(node, appearing);
	
	      this.safeSetState({ status: ENTERING }, function () {
	        _this2.props.onEntering(node, appearing);
	
	        // FIXME: appear timeout?
	        _this2.onTransitionEnd(node, timeouts.enter, function () {
	          _this2.safeSetState({ status: ENTERED }, function () {
	            _this2.props.onEntered(node, appearing);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.performExit = function performExit(node) {
	      var _this3 = this;
	
	      var exit = this.props.exit;
	
	      var timeouts = this.getTimeouts();
	
	      // no exit animation skip right to EXITED
	      if (!exit) {
	        this.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	        return;
	      }
	      this.props.onExit(node);
	
	      this.safeSetState({ status: EXITING }, function () {
	        _this3.props.onExiting(node);
	
	        _this3.onTransitionEnd(node, timeouts.exit, function () {
	          _this3.safeSetState({ status: EXITED }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    };
	
	    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	      var _this4 = this;
	
	      // We need to track pending updates for instances where a cWRP fires quickly
	      // after cDM and before the state flushes, which would double trigger a
	      // transition
	      this.pendingState = nextState;
	
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      callback = this.setNextCallback(callback);
	      this.setState(nextState, function () {
	        _this4.pendingState = null;
	        callback();
	      });
	    };
	
	    Transition.prototype.setNextCallback = function setNextCallback(callback) {
	      var _this5 = this;
	
	      var active = true;
	
	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this5.nextCallback = null;
	
	          callback(event);
	        }
	      };
	
	      this.nextCallback.cancel = function () {
	        active = false;
	      };
	
	      return this.nextCallback;
	    };
	
	    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	      this.setNextCallback(handler);
	
	      if (node) {
	        if (this.props.addEndListener) {
	          this.props.addEndListener(node, this.nextCallback);
	        }
	        if (timeout != null) {
	          setTimeout(this.nextCallback, timeout);
	        }
	      } else {
	        setTimeout(this.nextCallback, 0);
	      }
	    };
	
	    Transition.prototype.render = function render() {
	      var status = this.state.status;
	      if (status === UNMOUNTED) {
	        return null;
	      }
	
	      var _props = this.props,
	          children = _props.children,
	          childProps = _objectWithoutProperties(_props, ['children']);
	      // filter props for Transtition
	
	
	      delete childProps.in;
	      delete childProps.mountOnEnter;
	      delete childProps.unmountOnExit;
	      delete childProps.appear;
	      delete childProps.enter;
	      delete childProps.exit;
	      delete childProps.timeout;
	      delete childProps.addEndListener;
	      delete childProps.onEnter;
	      delete childProps.onEntering;
	      delete childProps.onEntered;
	      delete childProps.onExit;
	      delete childProps.onExiting;
	      delete childProps.onExited;
	
	      if (typeof children === 'function') {
	        return children(status, childProps);
	      }
	
	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, childProps);
	    };
	
	    return Transition;
	  }(_react2.default.Component);
	
	  Transition.contextTypes = {
	    transitionGroup: PropTypes$$1.object
	  };
	  Transition.childContextTypes = {
	    transitionGroup: function transitionGroup() {}
	  };
	
	  Transition.propTypes =  true ? {
	    /**
	     * A `function` child can be used instead of a React element.
	     * This function is called with the current transition status
	     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
	     * to apply context specific props to a component.
	     *
	     * ```jsx
	     * <Transition timeout={150}>
	     *   {(status) => (
	     *     <MyComponent className={`fade fade-${status}`} />
	     *   )}
	     * </Transition>
	     * ```
	     */
	    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,
	
	    /**
	     * Show the component; triggers the enter or exit states
	     */
	    in: PropTypes$$1.bool,
	
	    /**
	     * By default the child component is mounted immediately along with
	     * the parent `Transition` component. If you want to "lazy mount" the component on the
	     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	     * mounted, even on "exited", unless you also specify `unmountOnExit`.
	     */
	    mountOnEnter: PropTypes$$1.bool,
	
	    /**
	     * By default the child component stays mounted after it reaches the `'exited'` state.
	     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	     */
	    unmountOnExit: PropTypes$$1.bool,
	
	    /**
	     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	     * If you want to transition on the first mount set `appear` to `true`, and the
	     * component will transition in as soon as the `<Transition>` mounts.
	     *
	     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	     */
	    appear: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable enter transitions.
	     */
	    enter: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable exit transitions.
	     */
	    exit: PropTypes$$1.bool,
	
	    /**
	     * The duration of the transition, in milliseconds.
	     * Required unless `addEndListener` is provided
	     *
	     * You may specify a single timeout for all transitions like: `timeout={500}`,
	     * or individually like:
	     *
	     * ```jsx
	     * timeout={{
	     *  enter: 300,
	     *  exit: 500,
	     * }}
	     * ```
	     *
	     * @type {number | { enter?: number, exit?: number }}
	     */
	    timeout: function timeout(props) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var pt = PropTypes$1.timeoutsShape;
	      if (!props.addEndListener) pt = pt.isRequired;
	      return pt.apply(undefined, [props].concat(args));
	    },
	
	    /**
	     * Add a custom transition end trigger. Called with the transitioning
	     * DOM node and a `done` callback. Allows for more fine grained transition end
	     * logic. **Note:** Timeouts are still used as a fallback if provided.
	     *
	     * ```jsx
	     * addEndListener={(node, done) => {
	     *   // use the css transitionend event to mark the finish of a transition
	     *   node.addEventListener('transitionend', done, false);
	     * }}
	     * ```
	     */
	    addEndListener: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEnter: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool)
	     */
	    onEntering: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entered" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEntered: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExit: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExiting: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exited" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExited: PropTypes$$1.func
	  } : {};
	
	  // Name the function so it is clearer in the documentation
	  function noop() {}
	
	  Transition.defaultProps = {
	    in: false,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    enter: true,
	    exit: true,
	
	    onEnter: noop,
	    onEntering: noop,
	    onEntered: noop,
	
	    onExit: noop,
	    onExiting: noop,
	    onExited: noop
	  };
	
	  Transition.UNMOUNTED = 0;
	  Transition.EXITED = 1;
	  Transition.ENTERING = 2;
	  Transition.ENTERED = 3;
	  Transition.EXITING = 4;
	
	  exports.default = Transition;
	});
	
	var Transition = unwrapExports(Transition_1);
	
	var propTypes$19 = _extends({}, Transition.propTypes, {
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	  baseClass: PropTypes.string,
	  baseClassActive: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	});
	
	var defaultProps$18 = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  in: true
	});
	
	function Fade(props) {
	  var Tag = props.tag,
	      baseClass = props.baseClass,
	      baseClassActive = props.baseClassActive,
	      className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      innerRef = props.innerRef,
	      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']);
	
	  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	  // empty object "{}". This is the result of the `react-transition-group` babel
	  // configuration settings. Therefore, to ensure that production builds work without
	  // error, we can either explicitly define keys or use the Transition.defaultProps.
	  // Using the Transition.defaultProps excludes any required props. Thus, the best
	  // solution is to explicitly define required props in our utilities and reference these.
	  // This also gives us more flexibility in the future to remove the prop-types
	  // dependency in distribution builds (Similar to how `react-transition-group` does).
	  // Note: Without omitting the `react-transition-group` props, the resulting child
	  // Tag component would inherit the Transition properties as attributes for the HTML
	  // element which results in errors/warnings for non-valid attributes.
	
	  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  var childProps = omit(otherProps, TransitionPropTypeKeys);
	
	  return React__default.createElement(
	    Transition,
	    transitionProps,
	    function (status) {
	      var isActive = status === 'entered';
	      var classes = mapToCssModules(classNames(className, baseClass, isActive && baseClassActive), cssModule);
	      return React__default.createElement(
	        Tag,
	        _extends({ className: classes }, childProps, { ref: innerRef }),
	        children
	      );
	    }
	  );
	}
	
	Fade.propTypes = propTypes$19;
	Fade.defaultProps = defaultProps$18;
	
	var propTypes$20 = {
	  color: PropTypes.string,
	  pill: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$19 = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};
	
	var Badge = function Badge(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      pill = props.pill,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);
	
	  if (attributes.href && Tag === 'span') {
	    Tag = 'a';
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Badge.propTypes = propTypes$20;
	Badge.defaultProps = defaultProps$19;
	
	var propTypes$21 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  inverse: PropTypes.bool,
	  color: PropTypes.string,
	  block: deprecated(PropTypes.bool, 'Please use the props "body"'),
	  body: PropTypes.bool,
	  outline: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var defaultProps$20 = {
	  tag: 'div'
	};
	
	var Card = function Card(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      block = props.block,
	      body = props.body,
	      inverse = props.inverse,
	      outline = props.outline,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);
	
	  var classes = mapToCssModules(classNames(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, ref: innerRef }));
	};
	
	Card.propTypes = propTypes$21;
	Card.defaultProps = defaultProps$20;
	
	var propTypes$22 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$21 = {
	  tag: 'div'
	};
	
	var CardGroup = function CardGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardGroup.propTypes = propTypes$22;
	CardGroup.defaultProps = defaultProps$21;
	
	var propTypes$23 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$22 = {
	  tag: 'div'
	};
	
	var CardDeck = function CardDeck(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-deck'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardDeck.propTypes = propTypes$23;
	CardDeck.defaultProps = defaultProps$22;
	
	var propTypes$24 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$23 = {
	  tag: 'div'
	};
	
	var CardColumns = function CardColumns(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-columns'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardColumns.propTypes = propTypes$24;
	CardColumns.defaultProps = defaultProps$23;
	
	var propTypes$25 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$24 = {
	  tag: 'div'
	};
	
	var CardBody = function CardBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardBody.propTypes = propTypes$25;
	CardBody.defaultProps = defaultProps$24;
	
	function CardBlock(props) {
	  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
	  return React__default.createElement(CardBody, props);
	}
	
	var propTypes$26 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$25 = {
	  tag: 'a'
	};
	
	var CardLink = function CardLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);
	
	  var classes = mapToCssModules(classNames(className, 'card-link'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	};
	
	CardLink.propTypes = propTypes$26;
	CardLink.defaultProps = defaultProps$25;
	
	var propTypes$27 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$26 = {
	  tag: 'div'
	};
	
	var CardFooter = function CardFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardFooter.propTypes = propTypes$27;
	CardFooter.defaultProps = defaultProps$26;
	
	var propTypes$28 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$27 = {
	  tag: 'div'
	};
	
	var CardHeader = function CardHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardHeader.propTypes = propTypes$28;
	CardHeader.defaultProps = defaultProps$27;
	
	var propTypes$29 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool,
	  bottom: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$28 = {
	  tag: 'img'
	};
	
	var CardImg = function CardImg(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      top = props.top,
	      bottom = props.bottom,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);
	
	
	  var cardImgClassName = 'card-img';
	  if (top) {
	    cardImgClassName = 'card-img-top';
	  }
	  if (bottom) {
	    cardImgClassName = 'card-img-bottom';
	  }
	
	  var classes = mapToCssModules(classNames(className, cardImgClassName), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImg.propTypes = propTypes$29;
	CardImg.defaultProps = defaultProps$28;
	
	var propTypes$30 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$29 = {
	  tag: 'div'
	};
	
	var CardImgOverlay = function CardImgOverlay(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-img-overlay'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImgOverlay.propTypes = propTypes$30;
	CardImgOverlay.defaultProps = defaultProps$29;
	
	var CarouselItem = function (_React$Component) {
	  inherits(CarouselItem, _React$Component);
	
	  function CarouselItem(props) {
	    classCallCheck(this, CarouselItem);
	
	    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));
	
	    _this.state = {
	      startAnimation: false
	    };
	
	    _this.onEnter = _this.onEnter.bind(_this);
	    _this.onEntering = _this.onEntering.bind(_this);
	    _this.onExit = _this.onExit.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(CarouselItem, [{
	    key: 'onEnter',
	    value: function onEnter(node, isAppearing) {
	      this.setState({ startAnimation: false });
	      this.props.onEnter(node, isAppearing);
	    }
	  }, {
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      // getting this variable triggers a reflow
	      var offsetHeight = node.offsetHeight;
	      this.setState({ startAnimation: true });
	      this.props.onEntering(node, isAppearing);
	      return offsetHeight;
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ startAnimation: false });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      this.setState({ startAnimation: true });
	      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          isIn = _props.in,
	          children = _props.children,
	          cssModule = _props.cssModule,
	          slide = _props.slide,
	          Tag = _props.tag,
	          className = _props.className,
	          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);
	
	
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          enter: slide,
	          exit: slide,
	          'in': isIn,
	          onEnter: this.onEnter,
	          onEntering: this.onEntering,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var direction = _this2.context.direction;
	
	          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
	          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
	          var itemClasses = mapToCssModules(classNames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	
	          return React__default.createElement(
	            Tag,
	            { className: itemClasses },
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return CarouselItem;
	}(React__default.Component);
	
	CarouselItem.propTypes = _extends({}, Transition.propTypes, {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  in: PropTypes.bool,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  slide: PropTypes.bool,
	  className: PropTypes.string
	});
	
	CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	
	CarouselItem.contextTypes = {
	  direction: PropTypes.string
	};
	
	var Carousel = function (_React$Component) {
	  inherits(Carousel, _React$Component);
	
	  function Carousel(props) {
	    classCallCheck(this, Carousel);
	
	    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
	
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.renderItems = _this.renderItems.bind(_this);
	    _this.hoverStart = _this.hoverStart.bind(_this);
	    _this.hoverEnd = _this.hoverEnd.bind(_this);
	    _this.state = {
	      direction: 'right',
	      indicatorClicked: false
	    };
	    return _this;
	  }
	
	  createClass(Carousel, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { direction: this.state.direction };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Set up the cycle
	      if (this.props.ride === 'carousel') {
	        this.setInterval();
	      }
	
	      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
	      document.addEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setInterval(nextProps);
	      // Calculate the direction to turn
	      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'right' });
	      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'left' });
	      } else if (this.props.activeIndex > nextProps.activeIndex) {
	        this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
	      } else if (this.props.activeIndex !== nextProps.activeIndex) {
	        this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
	      }
	      this.setState({ indicatorClicked: false });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearInterval();
	      document.removeEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'setInterval',
	    value: function (_setInterval) {
	      function setInterval() {
	        return _setInterval.apply(this, arguments);
	      }
	
	      setInterval.toString = function () {
	        return _setInterval.toString();
	      };
	
	      return setInterval;
	    }(function () {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      // make sure not to have multiple intervals going...
	      this.clearInterval();
	      if (props.interval) {
	        this.cycleInterval = setInterval(function () {
	          props.next();
	        }, parseInt(props.interval, 10));
	      }
	    })
	  }, {
	    key: 'clearInterval',
	    value: function (_clearInterval) {
	      function clearInterval() {
	        return _clearInterval.apply(this, arguments);
	      }
	
	      clearInterval.toString = function () {
	        return _clearInterval.toString();
	      };
	
	      return clearInterval;
	    }(function () {
	      clearInterval(this.cycleInterval);
	    })
	  }, {
	    key: 'hoverStart',
	    value: function hoverStart() {
	      if (this.props.pause === 'hover') {
	        this.clearInterval();
	      }
	      if (this.props.mouseEnter) {
	        var _props;
	
	        (_props = this.props).mouseEnter.apply(_props, arguments);
	      }
	    }
	  }, {
	    key: 'hoverEnd',
	    value: function hoverEnd() {
	      if (this.props.pause === 'hover') {
	        this.setInterval();
	      }
	      if (this.props.mouseLeave) {
	        var _props2;
	
	        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(evt) {
	      if (this.props.keyboard) {
	        if (evt.keyCode === 37) {
	          this.props.previous();
	        } else if (evt.keyCode === 39) {
	          this.props.next();
	        }
	      }
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(carouselItems, className) {
	      var _this2 = this;
	
	      var slide = this.props.slide;
	
	      return React__default.createElement(
	        'div',
	        { role: 'listbox', className: className },
	        carouselItems.map(function (item, index) {
	          var isIn = index === _this2.props.activeIndex;
	          return React__default.cloneElement(item, {
	            in: isIn,
	            slide: slide
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props3 = this.props,
	          cssModule = _props3.cssModule,
	          slide = _props3.slide,
	          className = _props3.className;
	
	      var outerClasses = mapToCssModules(classNames(className, 'carousel', slide && 'slide'), cssModule);
	
	      var innerClasses = mapToCssModules(classNames('carousel-inner'), cssModule);
	
	      // filter out booleans, null, or undefined
	      var children = this.props.children.filter(function (child) {
	        return child !== null && child !== undefined && typeof child !== 'boolean';
	      });
	
	      var slidesOnly = children.every(function (child) {
	        return child.type === CarouselItem;
	      });
	
	      // Rendering only slides
	      if (slidesOnly) {
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(children, innerClasses)
	        );
	      }
	
	      // Rendering slides and controls
	      if (children[0] instanceof Array) {
	        var _carouselItems = children[0];
	        var _controlLeft = children[1];
	        var _controlRight = children[2];
	
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(_carouselItems, innerClasses),
	          _controlLeft,
	          _controlRight
	        );
	      }
	
	      // Rendering indicators, slides and controls
	      var indicators = children[0];
	      var wrappedOnClick = function wrappedOnClick(e) {
	        if (typeof indicators.props.onClickHandler === 'function') {
	          _this3.setState({ indicatorClicked: true }, function () {
	            return indicators.props.onClickHandler(e);
	          });
	        }
	      };
	      var wrappedIndicators = React__default.cloneElement(indicators, { onClickHandler: wrappedOnClick });
	      var carouselItems = children[1];
	      var controlLeft = children[2];
	      var controlRight = children[3];
	
	      return React__default.createElement(
	        'div',
	        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	        wrappedIndicators,
	        this.renderItems(carouselItems, innerClasses),
	        controlLeft,
	        controlRight
	      );
	    }
	  }]);
	  return Carousel;
	}(React__default.Component);
	
	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: PropTypes.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: PropTypes.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: PropTypes.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: PropTypes.bool,
	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: PropTypes.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: PropTypes.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
	  children: PropTypes.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: PropTypes.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: PropTypes.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: PropTypes.bool,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true
	};
	
	Carousel.childContextTypes = {
	  direction: PropTypes.string
	};
	
	var CarouselControl = function CarouselControl(props) {
	  var direction = props.direction,
	      onClickHandler = props.onClickHandler,
	      cssModule = props.cssModule,
	      directionText = props.directionText,
	      className = props.className;
	
	
	  var anchorClasses = mapToCssModules(classNames(className, 'carousel-control-' + direction), cssModule);
	
	  var iconClasses = mapToCssModules(classNames('carousel-control-' + direction + '-icon'), cssModule);
	
	  var screenReaderClasses = mapToCssModules(classNames('sr-only'), cssModule);
	
	  return React__default.createElement(
	    'a',
	    {
	      className: anchorClasses,
	      role: 'button',
	      tabIndex: '0',
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler();
	      }
	    },
	    React__default.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
	    React__default.createElement(
	      'span',
	      { className: screenReaderClasses },
	      directionText || direction
	    )
	  );
	};
	
	CarouselControl.propTypes = {
	  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: PropTypes.func.isRequired,
	  cssModule: PropTypes.object,
	  directionText: PropTypes.string,
	  className: PropTypes.string
	};
	
	var CarouselIndicators = function CarouselIndicators(props) {
	  var items = props.items,
	      activeIndex = props.activeIndex,
	      cssModule = props.cssModule,
	      onClickHandler = props.onClickHandler,
	      className = props.className;
	
	
	  var listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
	  var indicators = items.map(function (item, idx) {
	    var indicatorClasses = mapToCssModules(classNames({ active: activeIndex === idx }), cssModule);
	    return React__default.createElement('li', {
	      key: '' + (item.key || item.src) + item.caption + item.altText,
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	
	  return React__default.createElement(
	    'ol',
	    { className: listClasses },
	    indicators
	  );
	};
	
	CarouselIndicators.propTypes = {
	  items: PropTypes.array.isRequired,
	  activeIndex: PropTypes.number.isRequired,
	  cssModule: PropTypes.object,
	  onClickHandler: PropTypes.func.isRequired,
	  className: PropTypes.string
	};
	
	var CarouselCaption = function CarouselCaption(props) {
	  var captionHeader = props.captionHeader,
	      captionText = props.captionText,
	      cssModule = props.cssModule,
	      className = props.className;
	
	  var classes = mapToCssModules(classNames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	
	  return React__default.createElement(
	    'div',
	    { className: classes },
	    React__default.createElement(
	      'h3',
	      null,
	      captionHeader
	    ),
	    React__default.createElement(
	      'p',
	      null,
	      captionText
	    )
	  );
	};
	
	CarouselCaption.propTypes = {
	  captionHeader: PropTypes.string,
	  captionText: PropTypes.string.isRequired,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	var propTypes$31 = {
	  items: PropTypes.array.isRequired,
	  indicators: PropTypes.bool,
	  controls: PropTypes.bool,
	  autoPlay: PropTypes.bool,
	  activeIndex: PropTypes.number,
	  next: PropTypes.func,
	  previous: PropTypes.func,
	  goToIndex: PropTypes.func
	};
	
	var UncontrolledCarousel = function (_Component) {
	  inherits(UncontrolledCarousel, _Component);
	
	  function UncontrolledCarousel(props) {
	    classCallCheck(this, UncontrolledCarousel);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));
	
	    _this.animating = false;
	    _this.state = { activeIndex: 0 };
	    _this.next = _this.next.bind(_this);
	    _this.previous = _this.previous.bind(_this);
	    _this.goToIndex = _this.goToIndex.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledCarousel, [{
	    key: 'onExiting',
	    value: function onExiting() {
	      this.animating = true;
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited() {
	      this.animating = false;
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'previous',
	    value: function previous() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'goToIndex',
	    value: function goToIndex(newIndex) {
	      if (this.animating) return;
	      this.setState({ activeIndex: newIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          autoPlay = _props.autoPlay,
	          indicators = _props.indicators,
	          controls = _props.controls,
	          items = _props.items,
	          goToIndex = _props.goToIndex,
	          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
	      var activeIndex = this.state.activeIndex;
	
	
	      var slides = items.map(function (item) {
	        return React__default.createElement(
	          CarouselItem,
	          {
	            onExiting: _this2.onExiting,
	            onExited: _this2.onExited,
	            key: item.src
	          },
	          React__default.createElement('img', { className: 'd-block w-100', src: item.src, alt: item.altText }),
	          React__default.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.header || item.caption })
	        );
	      });
	
	      return React__default.createElement(
	        Carousel,
	        _extends({
	          activeIndex: activeIndex,
	          next: this.next,
	          previous: this.previous,
	          ride: autoPlay ? 'carousel' : undefined
	        }, props),
	        indicators && React__default.createElement(CarouselIndicators, {
	          items: items,
	          activeIndex: props.activeIndex || activeIndex,
	          onClickHandler: goToIndex || this.goToIndex
	        }),
	        slides,
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'prev',
	          directionText: 'Previous',
	          onClickHandler: props.previous || this.previous
	        }),
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'next',
	          directionText: 'Next',
	          onClickHandler: props.next || this.next
	        })
	      );
	    }
	  }]);
	  return UncontrolledCarousel;
	}(React.Component);
	
	UncontrolledCarousel.propTypes = propTypes$31;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};
	
	var propTypes$32 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$30 = {
	  tag: 'h6'
	};
	
	var CardSubtitle = function CardSubtitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-subtitle'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardSubtitle.propTypes = propTypes$32;
	CardSubtitle.defaultProps = defaultProps$30;
	
	var propTypes$33 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$31 = {
	  tag: 'p'
	};
	
	var CardText = function CardText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardText.propTypes = propTypes$33;
	CardText.defaultProps = defaultProps$31;
	
	var propTypes$34 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$32 = {
	  tag: 'h5'
	};
	
	var CardTitle = function CardTitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-title'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardTitle.propTypes = propTypes$34;
	CardTitle.defaultProps = defaultProps$32;
	
	var propTypes$35 = {
	  className: PropTypes.string,
	  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	  type: PropTypes.string.isRequired,
	  label: PropTypes.node,
	  inline: PropTypes.bool,
	  valid: PropTypes.bool,
	  invalid: PropTypes.bool,
	  bsSize: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	function CustomInput(props) {
	  var className = props.className,
	      label = props.label,
	      inline = props.inline,
	      valid = props.valid,
	      invalid = props.invalid,
	      cssModule = props.cssModule,
	      children = props.children,
	      bsSize = props.bsSize,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize', 'innerRef']);
	
	
	  var type = attributes.type;
	
	  var customClass = mapToCssModules(classNames(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);
	
	  var validationClassNames = mapToCssModules(classNames(invalid && 'is-invalid', valid && 'is-valid'), cssModule);
	
	  if (type === 'select') {
	    return React__default.createElement(
	      'select',
	      _extends({}, attributes, { ref: innerRef, className: classNames(validationClassNames, customClass) }),
	      children
	    );
	  }
	
	  if (type === 'file') {
	    return React__default.createElement(
	      'div',
	      { className: customClass },
	      React__default.createElement('input', _extends({}, attributes, { ref: innerRef, className: classNames(validationClassNames, mapToCssModules('custom-file-input', cssModule)) })),
	      React__default.createElement(
	        'label',
	        { className: mapToCssModules('custom-file-label', cssModule), htmlFor: attributes.id },
	        label || 'Choose file'
	      )
	    );
	  }
	
	  if (type !== 'checkbox' && type !== 'radio') {
	    return React__default.createElement('input', _extends({}, attributes, { ref: innerRef, className: classNames(validationClassNames, customClass) }));
	  }
	
	  var wrapperClasses = classNames(customClass, mapToCssModules(classNames('custom-control', { 'custom-control-inline': inline }), cssModule));
	
	  return React__default.createElement(
	    'div',
	    { className: wrapperClasses },
	    React__default.createElement('input', _extends({}, attributes, {
	      ref: innerRef,
	      className: classNames(validationClassNames, mapToCssModules('custom-control-input', cssModule))
	    })),
	    React__default.createElement(
	      'label',
	      { className: mapToCssModules('custom-control-label', cssModule), htmlFor: attributes.id },
	      label
	    ),
	    children
	  );
	}
	
	CustomInput.propTypes = propTypes$35;
	
	var propTypes$36 = {
	  children: PropTypes.node.isRequired,
	  className: PropTypes.string,
	  placement: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  arrowClassName: PropTypes.string,
	  hideArrow: PropTypes.bool,
	  tag: PropTypes.string,
	  isOpen: PropTypes.bool.isRequired,
	  cssModule: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	  flip: PropTypes.bool,
	  container: targetPropType,
	  target: targetPropType.isRequired,
	  modifiers: PropTypes.object,
	  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement])
	};
	
	var defaultProps$33 = {
	  boundariesElement: 'scrollParent',
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: 0,
	  fallbackPlacement: 'flip',
	  flip: true,
	  container: 'body',
	  modifiers: {}
	};
	
	var childContextTypes$1 = {
	  popperManager: PropTypes.object.isRequired
	};
	
	var PopperContent = function (_React$Component) {
	  inherits(PopperContent, _React$Component);
	
	  function PopperContent(props) {
	    classCallCheck(this, PopperContent);
	
	    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));
	
	    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
	    _this.setTargetNode = _this.setTargetNode.bind(_this);
	    _this.getTargetNode = _this.getTargetNode.bind(_this);
	    _this.state = {};
	    return _this;
	  }
	
	  createClass(PopperContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this.setTargetNode,
	          getTargetNode: this.getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      } else if (this._element) {
	        // rerender
	        this.renderIntoSubtree();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.hide();
	    }
	  }, {
	    key: 'setTargetNode',
	    value: function setTargetNode(node) {
	      this.targetNode = node;
	    }
	  }, {
	    key: 'getTargetNode',
	    value: function getTargetNode() {
	      return this.targetNode;
	    }
	  }, {
	    key: 'getContainerNode',
	    value: function getContainerNode() {
	      return getTarget(this.props.container);
	    }
	  }, {
	    key: 'handlePlacementChange',
	    value: function handlePlacementChange(data) {
	      if (this.state.placement !== data.placement) {
	        this.setState({ placement: data.placement });
	      }
	      return data;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.container !== 'inline') {
	        if (this.props.isOpen) {
	          this.show();
	        } else {
	          this.hide();
	        }
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this._element) {
	        this.getContainerNode().removeChild(this._element);
	        ReactDOM.unmountComponentAtNode(this._element);
	        this._element = null;
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this._element = document.createElement('div');
	      this.getContainerNode().appendChild(this._element);
	      this.renderIntoSubtree();
	      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	        this._element.childNodes[0].focus();
	      }
	    }
	  }, {
	    key: 'renderIntoSubtree',
	    value: function renderIntoSubtree() {
	      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _props = this.props,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          isOpen = _props.isOpen,
	          flip = _props.flip,
	          target = _props.target,
	          offset = _props.offset,
	          fallbackPlacement = _props.fallbackPlacement,
	          placementPrefix = _props.placementPrefix,
	          _arrowClassName = _props.arrowClassName,
	          hideArrow = _props.hideArrow,
	          className = _props.className,
	          tag = _props.tag,
	          container = _props.container,
	          modifiers = _props.modifiers,
	          boundariesElement = _props.boundariesElement,
	          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'arrowClassName', 'hideArrow', 'className', 'tag', 'container', 'modifiers', 'boundariesElement']);
	
	      var arrowClassName = mapToCssModules(classNames('arrow', _arrowClassName), cssModule);
	      var placement = (this.state.placement || attrs.placement).split('-')[0];
	      var popperClassName = mapToCssModules(classNames(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);
	
	      var extendedModifiers = _extends({
	        offset: { offset: offset },
	        flip: { enabled: flip, behavior: fallbackPlacement },
	        preventOverflow: { boundariesElement: boundariesElement },
	        update: {
	          enabled: true,
	          order: 950,
	          fn: this.handlePlacementChange
	        }
	      }, modifiers);
	
	      return React__default.createElement(
	        reactPopper.Popper,
	        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName, 'x-placement': this.state.placement || attrs.placement }),
	        children,
	        !hideArrow && React__default.createElement(reactPopper.Arrow, { className: arrowClassName })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setTargetNode(getTarget(this.props.target));
	
	      if (this.props.container === 'inline') {
	        return this.props.isOpen ? this.renderChildren() : null;
	      }
	
	      return null;
	    }
	  }]);
	  return PopperContent;
	}(React__default.Component);
	
	PopperContent.propTypes = propTypes$36;
	PopperContent.defaultProps = defaultProps$33;
	PopperContent.childContextTypes = childContextTypes$1;
	
	var PopperTargetHelper = function PopperTargetHelper(props, context) {
	  context.popperManager.setTargetNode(getTarget(props.target));
	  return null;
	};
	
	PopperTargetHelper.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	
	PopperTargetHelper.propTypes = {
	  target: targetPropType.isRequired
	};
	
	var propTypes$37 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: targetPropType.isRequired,
	  container: targetPropType,
	  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	};
	
	var DEFAULT_DELAYS = {
	  show: 0,
	  hide: 0
	};
	
	var defaultProps$34 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  delay: DEFAULT_DELAYS,
	  toggle: function toggle() {}
	};
	
	var Popover = function (_React$Component) {
	  inherits(Popover, _React$Component);
	
	  function Popover(props) {
	    classCallCheck(this, Popover);
	
	    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));
	
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.getRef = _this.getRef.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    _this._target = null;
	    return _this;
	  }
	
	  createClass(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearShowTimeout();
	      this.clearHideTimeout();
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'getRef',
	    value: function getRef(ref) {
	      this._popover = ref;
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.show();
	      } else {
	        this.hide();
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.clearHideTimeout();
	      this.addTargetEvents();
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.clearShowTimeout();
	      this.removeTargetEvents();
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (this._target) {
	        if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
	          if (this._hideTimeout) {
	            this.clearHideTimeout();
	          }
	
	          if (this.props.isOpen) {
	            this.toggle(e);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$37));
	      var classes = mapToCssModules(classNames('popover-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('popover', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          container: this.props.container,
	          modifiers: this.props.modifiers,
	          offset: this.props.offset,
	          boundariesElement: this.props.boundariesElement
	        },
	        React__default.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
	      );
	    }
	  }]);
	  return Popover;
	}(React__default.Component);
	
	Popover.propTypes = propTypes$37;
	Popover.defaultProps = defaultProps$34;
	
	var propTypes$38 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$35 = {
	  tag: 'h3'
	};
	
	var PopoverHeader = function PopoverHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverHeader.propTypes = propTypes$38;
	PopoverHeader.defaultProps = defaultProps$35;
	
	function PopoverTitle(props) {
	  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
	  return React__default.createElement(PopoverHeader, props);
	}
	
	var propTypes$39 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$36 = {
	  tag: 'div'
	};
	
	var PopoverBody = function PopoverBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverBody.propTypes = propTypes$39;
	PopoverBody.defaultProps = defaultProps$36;
	
	function PopoverContent(props) {
	  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
	  return React__default.createElement(PopoverBody, props);
	}
	
	var propTypes$40 = {
	  children: PropTypes.node,
	  bar: PropTypes.bool,
	  multi: PropTypes.bool,
	  tag: PropTypes.string,
	  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  animated: PropTypes.bool,
	  striped: PropTypes.bool,
	  color: PropTypes.string,
	  className: PropTypes.string,
	  barClassName: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$37 = {
	  tag: 'div',
	  value: 0,
	  max: 100
	};
	
	var Progress = function Progress(props) {
	  var children = props.children,
	      className = props.className,
	      barClassName = props.barClassName,
	      cssModule = props.cssModule,
	      value = props.value,
	      max = props.max,
	      animated = props.animated,
	      striped = props.striped,
	      color = props.color,
	      bar = props.bar,
	      multi = props.multi,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);
	
	
	  var percent = toNumber(value) / toNumber(max) * 100;
	
	  var progressClasses = mapToCssModules(classNames(className, 'progress'), cssModule);
	
	  var progressBarClasses = mapToCssModules(classNames('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
	
	  var ProgressBar = multi ? children : React__default.createElement('div', {
	    className: progressBarClasses,
	    style: { width: percent + '%' },
	    role: 'progressbar',
	    'aria-valuenow': value,
	    'aria-valuemin': '0',
	    'aria-valuemax': max,
	    children: children
	  });
	
	  if (bar) {
	    return ProgressBar;
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
	};
	
	Progress.propTypes = propTypes$40;
	Progress.defaultProps = defaultProps$37;
	
	var propTypes$42 = {
	  children: PropTypes.node.isRequired,
	  node: PropTypes.any
	};
	
	var Portal = function (_React$Component) {
	  inherits(Portal, _React$Component);
	
	  function Portal() {
	    classCallCheck(this, Portal);
	    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }
	
	  createClass(Portal, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.defaultNode) {
	        document.body.removeChild(this.defaultNode);
	      }
	      this.defaultNode = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!canUseDOM) {
	        return null;
	      }
	
	      if (!this.props.node && !this.defaultNode) {
	        this.defaultNode = document.createElement('div');
	        document.body.appendChild(this.defaultNode);
	      }
	
	      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
	    }
	  }]);
	  return Portal;
	}(React__default.Component);
	
	Portal.propTypes = propTypes$42;
	
	function noop() {}
	
	var FadePropTypes = PropTypes.shape(Fade.propTypes);
	
	var propTypes$41 = {
	  isOpen: PropTypes.bool,
	  autoFocus: PropTypes.bool,
	  centered: PropTypes.bool,
	  size: PropTypes.string,
	  toggle: PropTypes.func,
	  keyboard: PropTypes.bool,
	  role: PropTypes.string,
	  labelledBy: PropTypes.string,
	  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
	  onEnter: PropTypes.func,
	  onExit: PropTypes.func,
	  onOpened: PropTypes.func,
	  onClosed: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  wrapClassName: PropTypes.string,
	  modalClassName: PropTypes.string,
	  backdropClassName: PropTypes.string,
	  contentClassName: PropTypes.string,
	  external: PropTypes.node,
	  fade: PropTypes.bool,
	  cssModule: PropTypes.object,
	  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	  backdropTransition: FadePropTypes,
	  modalTransition: FadePropTypes,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var propsToOmit = Object.keys(propTypes$41);
	
	var defaultProps$38 = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop,
	  onClosed: noop,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition
	  }
	};
	
	var Modal = function (_React$Component) {
	  inherits(Modal, _React$Component);
	
	  function Modal(props) {
	    classCallCheck(this, Modal);
	
	    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	    _this._element = null;
	    _this._originalBodyPadding = null;
	    _this.getFocusableChildren = _this.getFocusableChildren.bind(_this);
	    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
	    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
	    _this.handleEscape = _this.handleEscape.bind(_this);
	    _this.handleTab = _this.handleTab.bind(_this);
	    _this.onOpened = _this.onOpened.bind(_this);
	    _this.onClosed = _this.onClosed.bind(_this);
	
	    _this.state = {
	      isOpen: props.isOpen
	    };
	
	    if (props.isOpen) {
	      _this.init();
	    }
	    return _this;
	  }
	
	  createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onEnter) {
	        this.props.onEnter();
	      }
	
	      if (this.state.isOpen && this.props.autoFocus) {
	        this.setFocus();
	      }
	
	      this._isMounted = true;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.isOpen && !this.props.isOpen) {
	        this.setState({ isOpen: nextProps.isOpen });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.isOpen && !this.state.isOpen) {
	        this.init();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	        this.setFocus();
	      }
	
	      if (this._element && prevProps.zIndex !== this.props.zIndex) {
	        this._element.style.zIndex = this.props.zIndex;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.onExit) {
	        this.props.onExit();
	      }
	
	      if (this.state.isOpen) {
	        this.destroy();
	      }
	
	      this._isMounted = false;
	    }
	  }, {
	    key: 'onOpened',
	    value: function onOpened(node, isAppearing) {
	      this.props.onOpened();
	      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
	    }
	  }, {
	    key: 'onClosed',
	    value: function onClosed(node) {
	      // so all methods get called before it is unmounted
	      this.props.onClosed();
	      (this.props.modalTransition.onExited || noop)(node);
	      this.destroy();
	
	      if (this._isMounted) {
	        this.setState({ isOpen: false });
	      }
	    }
	  }, {
	    key: 'setFocus',
	    value: function setFocus() {
	      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	        this._dialog.parentNode.focus();
	      }
	    }
	  }, {
	    key: 'getFocusableChildren',
	    value: function getFocusableChildren() {
	      return this._element.querySelectorAll(focusableElements.join(', '));
	    }
	  }, {
	    key: 'getFocusedChild',
	    value: function getFocusedChild() {
	      var currentFocus = void 0;
	      var focusableChildren = this.getFocusableChildren();
	
	      try {
	        currentFocus = document.activeElement;
	      } catch (err) {
	        currentFocus = focusableChildren[0];
	      }
	      return currentFocus;
	    }
	
	    // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
	
	  }, {
	    key: 'handleBackdropClick',
	    value: function handleBackdropClick(e) {
	      if (e.target === this._mouseDownElement) {
	        e.stopPropagation();
	        if (!this.props.isOpen || this.props.backdrop !== true) return;
	
	        var container = this._dialog;
	
	        if (e.target && !container.contains(e.target) && this.props.toggle) {
	          this.props.toggle(e);
	        }
	      }
	    }
	  }, {
	    key: 'handleTab',
	    value: function handleTab(e) {
	      if (e.which !== 9) return;
	
	      var focusableChildren = this.getFocusableChildren();
	      var totalFocusable = focusableChildren.length;
	      var currentFocus = this.getFocusedChild();
	
	      var focusedIndex = 0;
	
	      for (var i = 0; i < totalFocusable; i += 1) {
	        if (focusableChildren[i] === currentFocus) {
	          focusedIndex = i;
	          break;
	        }
	      }
	
	      if (e.shiftKey && focusedIndex === 0) {
	        e.preventDefault();
	        focusableChildren[totalFocusable - 1].focus();
	      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
	        e.preventDefault();
	        focusableChildren[0].focus();
	      }
	    }
	  }, {
	    key: 'handleBackdropMouseDown',
	    value: function handleBackdropMouseDown(e) {
	      this._mouseDownElement = e.target;
	    }
	  }, {
	    key: 'handleEscape',
	    value: function handleEscape(e) {
	      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      try {
	        this._triggeringElement = document.activeElement;
	      } catch (err) {
	        this._triggeringElement = null;
	      }
	      this._element = document.createElement('div');
	      this._element.setAttribute('tabindex', '-1');
	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      this._originalBodyPadding = getOriginalBodyPadding();
	
	      conditionallyUpdateScrollbar();
	
	      document.body.appendChild(this._element);
	      if (Modal.openCount === 0) {
	        document.body.className = classNames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	      }
	      Modal.openCount += 1;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._element) {
	        document.body.removeChild(this._element);
	        this._element = null;
	      }
	
	      if (this._triggeringElement) {
	        if (this._triggeringElement.focus) this._triggeringElement.focus();
	        this._triggeringElement = null;
	      }
	
	      if (Modal.openCount <= 1) {
	        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
	        // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
	        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
	        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	      }
	      Modal.openCount -= 1;
	
	      setScrollbarWidth(this._originalBodyPadding);
	    }
	  }, {
	    key: 'renderModalDialog',
	    value: function renderModalDialog() {
	      var _classNames,
	          _this2 = this;
	
	      var attributes = omit(this.props, propsToOmit);
	      var dialogBaseClass = 'modal-dialog';
	
	      return React__default.createElement(
	        'div',
	        _extends({}, attributes, {
	          className: mapToCssModules(classNames(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
	          role: 'document',
	          ref: function ref(c) {
	            _this2._dialog = c;
	          }
	        }),
	        React__default.createElement(
	          'div',
	          {
	            className: mapToCssModules(classNames('modal-content', this.props.contentClassName), this.props.cssModule)
	          },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.isOpen) {
	        var _props = this.props,
	            wrapClassName = _props.wrapClassName,
	            modalClassName = _props.modalClassName,
	            backdropClassName = _props.backdropClassName,
	            cssModule = _props.cssModule,
	            isOpen = _props.isOpen,
	            backdrop = _props.backdrop,
	            role = _props.role,
	            labelledBy = _props.labelledBy,
	            external = _props.external,
	            innerRef = _props.innerRef;
	
	
	        var modalAttributes = {
	          onClick: this.handleBackdropClick,
	          onMouseDown: this.handleBackdropMouseDown,
	          onKeyUp: this.handleEscape,
	          onKeyDown: this.handleTab,
	          style: { display: 'block' },
	          'aria-labelledby': labelledBy,
	          role: role,
	          tabIndex: '-1'
	        };
	
	        var hasTransition = this.props.fade;
	        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
	          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	          timeout: hasTransition ? this.props.modalTransition.timeout : 0
	        });
	        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
	          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	        });
	
	        var Backdrop = hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
	          'in': isOpen && !!backdrop,
	          cssModule: cssModule,
	          className: mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)
	        })) : React__default.createElement('div', { className: mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule) });
	
	        return React__default.createElement(
	          Portal,
	          { node: this._element },
	          React__default.createElement(
	            'div',
	            { className: mapToCssModules(wrapClassName) },
	            React__default.createElement(
	              Fade,
	              _extends({}, modalAttributes, modalTransition, {
	                'in': isOpen,
	                onEntered: this.onOpened,
	                onExited: this.onClosed,
	                cssModule: cssModule,
	                className: mapToCssModules(classNames('modal', modalClassName), cssModule),
	                innerRef: innerRef
	              }),
	              external,
	              this.renderModalDialog()
	            ),
	            Backdrop
	          )
	        );
	      }
	
	      return null;
	    }
	  }]);
	  return Modal;
	}(React__default.Component);
	
	Modal.propTypes = propTypes$41;
	Modal.defaultProps = defaultProps$38;
	Modal.openCount = 0;
	
	var propTypes$43 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  toggle: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  closeAriaLabel: PropTypes.string,
	  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  close: PropTypes.object
	};
	
	var defaultProps$39 = {
	  tag: 'h5',
	  wrapTag: 'div',
	  closeAriaLabel: 'Close',
	  charCode: 215
	};
	
	var ModalHeader = function ModalHeader(props) {
	  var closeButton = void 0;
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      toggle = props.toggle,
	      Tag = props.tag,
	      WrapTag = props.wrapTag,
	      closeAriaLabel = props.closeAriaLabel,
	      charCode = props.charCode,
	      close = props.close,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel', 'charCode', 'close']);
	
	
	  var classes = mapToCssModules(classNames(className, 'modal-header'), cssModule);
	
	  if (!close && toggle) {
	    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
	    closeButton = React__default.createElement(
	      'button',
	      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        closeIcon
	      )
	    );
	  }
	
	  return React__default.createElement(
	    WrapTag,
	    _extends({}, attributes, { className: classes }),
	    React__default.createElement(
	      Tag,
	      { className: mapToCssModules('modal-title', cssModule) },
	      children
	    ),
	    close || closeButton
	  );
	};
	
	ModalHeader.propTypes = propTypes$43;
	ModalHeader.defaultProps = defaultProps$39;
	
	var propTypes$44 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$40 = {
	  tag: 'div'
	};
	
	var ModalBody = function ModalBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalBody.propTypes = propTypes$44;
	ModalBody.defaultProps = defaultProps$40;
	
	var propTypes$45 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$41 = {
	  tag: 'div'
	};
	
	var ModalFooter = function ModalFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalFooter.propTypes = propTypes$45;
	ModalFooter.defaultProps = defaultProps$41;
	
	var propTypes$46 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: targetPropType.isRequired,
	  container: targetPropType,
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  arrowClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  autohide: PropTypes.bool,
	  placementPrefix: PropTypes.string,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
	  trigger: PropTypes.string
	};
	
	var DEFAULT_DELAYS$1 = {
	  show: 0,
	  hide: 250
	};
	
	var defaultProps$42 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'top',
	  placementPrefix: 'bs-tooltip',
	  delay: DEFAULT_DELAYS$1,
	  autohide: true,
	  toggle: function toggle() {}
	};
	
	var Tooltip = function (_React$Component) {
	  inherits(Tooltip, _React$Component);
	
	  function Tooltip(props) {
	    classCallCheck(this, Tooltip);
	
	    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
	
	    _this._target = null;
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
	    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
	    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
	    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
	    return _this;
	  }
	
	  createClass(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.addTargetEvents();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearHideTimeout();
	      this.clearShowTimeout();
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'onMouseOverTooltip',
	    value: function onMouseOverTooltip(e) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
	    }
	  }, {
	    key: 'onMouseLeaveTooltip',
	    value: function onMouseLeaveTooltip(e) {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  }, {
	    key: 'onMouseOverTooltipContent',
	    value: function onMouseOverTooltipContent() {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	    }
	  }, {
	    key: 'onMouseLeaveTooltipContent',
	    value: function onMouseLeaveTooltipContent(e) {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      e.persist();
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  }, {
	    key: 'onEscKeyDown',
	    value: function onEscKeyDown(e) {
	      if (e.key === 'Escape') {
	        this.hide(e);
	      }
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'show',
	    value: function show(e) {
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this.toggle(e);
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide(e) {
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this.toggle(e);
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (this._target !== null && (e.target === this._target || this._target.contains(e.target))) {
	        if (this._hideTimeout) {
	          this.clearHideTimeout();
	        }
	
	        if (!this.props.isOpen) {
	          this.toggle(e);
	        }
	      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
	        if (this._showTimeout) {
	          this.clearShowTimeout();
	        }
	        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      if (this.props.trigger) {
	        var triggers = this.props.trigger.split(' ');
	        if (triggers.indexOf('manual') === -1) {
	          if (triggers.indexOf('click') > -1) {
	            ['click', 'touchstart'].forEach(function (event) {
	              return document.addEventListener(event, _this2.handleDocumentClick, true);
	            });
	          }
	          if (this._target !== null) {
	            if (triggers.indexOf('hover') > -1) {
	              this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
	              this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
	            }
	            if (triggers.indexOf('focus') > -1) {
	              this._target.addEventListener('focusin', this.show, true);
	              this._target.addEventListener('focusout', this.hide, true);
	            }
	            this._target.addEventListener('keydown', this.onEscKeyDown, true);
	          }
	        }
	      } else {
	        if (this._target !== null) {
	          this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
	          this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
	          this._target.addEventListener('keydown', this.onEscKeyDown, true);
	          this._target.addEventListener('focusin', this.show, true);
	          this._target.addEventListener('focusout', this.hide, true);
	        }
	        ['click', 'touchstart'].forEach(function (event) {
	          return document.addEventListener(event, _this2.handleDocumentClick, true);
	        });
	      }
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      if (this._target !== null) {
	        this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
	        this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
	        this._target.addEventListener('keydown', this.onEscKeyDown, true);
	        this._target.addEventListener('focusin', this.show, true);
	        this._target.addEventListener('focusout', this.hide, true);
	      }
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$46));
	      var classes = mapToCssModules(classNames('tooltip-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('tooltip', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          boundariesElement: this.props.boundariesElement,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          arrowClassName: this.props.arrowClassName,
	          container: this.props.container,
	          modifiers: this.props.modifiers,
	          offset: this.props.offset,
	          cssModule: this.props.cssModule
	        },
	        React__default.createElement('div', _extends({}, attributes, {
	          ref: this.props.innerRef,
	          className: classes,
	          role: 'tooltip',
	          'aria-hidden': this.props.isOpen,
	          onMouseOver: this.onMouseOverTooltipContent,
	          onMouseLeave: this.onMouseLeaveTooltipContent,
	          onKeyDown: this.onEscKeyDown
	        }))
	      );
	    }
	  }]);
	  return Tooltip;
	}(React__default.Component);
	
	Tooltip.propTypes = propTypes$46;
	Tooltip.defaultProps = defaultProps$42;
	
	var propTypes$47 = {
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  bordered: PropTypes.bool,
	  borderless: PropTypes.bool,
	  striped: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  dark: PropTypes.bool,
	  hover: PropTypes.bool,
	  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$43 = {
	  tag: 'table',
	  responsiveTag: 'div'
	};
	
	var Table = function Table(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      bordered = props.bordered,
	      borderless = props.borderless,
	      striped = props.striped,
	      inverse = props.inverse,
	      dark = props.dark,
	      hover = props.hover,
	      responsive = props.responsive,
	      Tag = props.tag,
	      ResponsiveTag = props.responsiveTag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
	
	  var table = React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	
	  if (responsive) {
	    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;
	
	    return React__default.createElement(
	      ResponsiveTag,
	      { className: responsiveClassName },
	      table
	    );
	  }
	
	  return table;
	};
	
	Table.propTypes = propTypes$47;
	Table.defaultProps = defaultProps$43;
	
	var propTypes$48 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  flush: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$44 = {
	  tag: 'ul'
	};
	
	var ListGroup = function ListGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      flush = props.flush,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroup.propTypes = propTypes$48;
	ListGroup.defaultProps = defaultProps$44;
	
	var propTypes$49 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$45 = {
	  tag: 'form'
	};
	
	var Form = function (_Component) {
	  inherits(Form, _Component);
	
	  function Form(props) {
	    classCallCheck(this, Form);
	
	    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	
	    _this.getRef = _this.getRef.bind(_this);
	    _this.submit = _this.submit.bind(_this);
	    return _this;
	  }
	
	  createClass(Form, [{
	    key: 'getRef',
	    value: function getRef(ref) {
	      if (this.props.innerRef) {
	        this.props.innerRef(ref);
	      }
	      this.ref = ref;
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      if (this.ref) {
	        this.ref.submit();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          inline = _props.inline,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, inline ? 'form-inline' : false), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	    }
	  }]);
	  return Form;
	}(React.Component);
	
	Form.propTypes = propTypes$49;
	Form.defaultProps = defaultProps$45;
	
	var propTypes$50 = {
	  children: PropTypes.node,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  valid: PropTypes.bool,
	  tooltip: PropTypes.bool
	};
	
	var defaultProps$46 = {
	  tag: 'div',
	  valid: undefined
	};
	
	var FormFeedback = function FormFeedback(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      valid = props.valid,
	      tooltip = props.tooltip,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);
	
	
	  var validMode = tooltip ? 'tooltip' : 'feedback';
	
	  var classes = mapToCssModules(classNames(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormFeedback.propTypes = propTypes$50;
	FormFeedback.defaultProps = defaultProps$46;
	
	var propTypes$51 = {
	  children: PropTypes.node,
	  row: PropTypes.bool,
	  check: PropTypes.bool,
	  inline: PropTypes.bool,
	  disabled: PropTypes.bool,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$47 = {
	  tag: 'div'
	};
	
	var FormGroup = function FormGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      row = props.row,
	      disabled = props.disabled,
	      check = props.check,
	      inline = props.inline,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormGroup.propTypes = propTypes$51;
	FormGroup.defaultProps = defaultProps$47;
	
	var propTypes$52 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  color: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$48 = {
	  tag: 'small',
	  color: 'muted'
	};
	
	var FormText = function FormText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormText.propTypes = propTypes$52;
	FormText.defaultProps = defaultProps$48;
	
	/* eslint react/prefer-stateless-function: 0 */
	
	var propTypes$53 = {
	  children: PropTypes.node,
	  type: PropTypes.string,
	  size: PropTypes.string,
	  bsSize: PropTypes.string,
	  state: deprecated(PropTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
	  valid: PropTypes.bool,
	  invalid: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
	  plaintext: PropTypes.bool,
	  addon: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$49 = {
	  type: 'text'
	};
	
	var Input = function (_React$Component) {
	  inherits(Input, _React$Component);
	
	  function Input(props) {
	    classCallCheck(this, Input);
	
	    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	
	    _this.getRef = _this.getRef.bind(_this);
	    _this.focus = _this.focus.bind(_this);
	    return _this;
	  }
	
	  createClass(Input, [{
	    key: 'getRef',
	    value: function getRef(ref) {
	      if (this.props.innerRef) {
	        this.props.innerRef(ref);
	      }
	      this.ref = ref;
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.ref) {
	        this.ref.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          type = _props.type,
	          bsSize = _props.bsSize,
	          state = _props.state,
	          valid = _props.valid,
	          invalid = _props.invalid,
	          tag = _props.tag,
	          addon = _props.addon,
	          staticInput = _props.static,
	          plaintext = _props.plaintext,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);
	
	
	      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	      var isNotaNumber = new RegExp('\\D', 'g');
	
	      var fileInput = type === 'file';
	      var textareaInput = type === 'textarea';
	      var selectInput = type === 'select';
	      var Tag = tag || (selectInput || textareaInput ? type : 'input');
	
	      var formControlClass = 'form-control';
	
	      if (plaintext || staticInput) {
	        formControlClass = formControlClass + '-plaintext';
	        Tag = tag || 'p';
	      } else if (fileInput) {
	        formControlClass = formControlClass + '-file';
	      } else if (checkInput) {
	        if (addon) {
	          formControlClass = null;
	        } else {
	          formControlClass = 'form-check-input';
	        }
	      }
	
	      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
	        if (state === 'danger') {
	          invalid = true;
	        } else if (state === 'success') {
	          valid = true;
	        }
	      }
	
	      if (attributes.size && isNotaNumber.test(attributes.size)) {
	        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	        bsSize = attributes.size;
	        delete attributes.size;
	      }
	
	      var classes = mapToCssModules(classNames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);
	
	      if (Tag === 'input' || tag && typeof tag === 'function') {
	        attributes.type = type;
	      }
	
	      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
	        delete attributes.children;
	      }
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	    }
	  }]);
	  return Input;
	}(React__default.Component);
	
	Input.propTypes = propTypes$53;
	Input.defaultProps = defaultProps$49;
	
	var propTypes$54 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  size: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$50 = {
	  tag: 'div'
	};
	
	var InputGroup = function InputGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      size = props.size,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);
	
	  var classes = mapToCssModules(classNames(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroup.propTypes = propTypes$54;
	InputGroup.defaultProps = defaultProps$50;
	
	var propTypes$56 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$52 = {
	  tag: 'span'
	};
	
	var InputGroupText = function InputGroupText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroupText.propTypes = propTypes$56;
	InputGroupText.defaultProps = defaultProps$52;
	
	var propTypes$55 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$51 = {
	  tag: 'div'
	};
	
	var InputGroupAddon = function InputGroupAddon(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      addonType = props.addonType,
	      children = props.children,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-' + addonType), cssModule);
	
	  // Convenience to assist with transition
	  if (typeof children === 'string') {
	    return React__default.createElement(
	      Tag,
	      _extends({}, attributes, { className: classes }),
	      React__default.createElement(InputGroupText, { children: children })
	    );
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
	};
	
	InputGroupAddon.propTypes = propTypes$55;
	InputGroupAddon.defaultProps = defaultProps$51;
	
	var propTypes$57 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  groupClassName: PropTypes.string,
	  groupAttributes: PropTypes.object,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var InputGroupButton = function InputGroupButton(props) {
	  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');
	
	  var children = props.children,
	      groupClassName = props.groupClassName,
	      groupAttributes = props.groupAttributes,
	      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);
	
	
	  if (typeof children === 'string') {
	    var cssModule = propsWithoutGroup.cssModule,
	        tag = propsWithoutGroup.tag,
	        addonType = propsWithoutGroup.addonType,
	        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);
	
	
	    var allGroupAttributes = _extends({}, groupAttributes, {
	      cssModule: cssModule,
	      tag: tag,
	      addonType: addonType
	    });
	
	    return React__default.createElement(
	      InputGroupAddon,
	      _extends({}, allGroupAttributes, { className: groupClassName }),
	      React__default.createElement(Button, _extends({}, attributes, { children: children }))
	    );
	  }
	
	  return React__default.createElement(InputGroupAddon, _extends({}, props, { children: children }));
	};
	
	InputGroupButton.propTypes = propTypes$57;
	
	var propTypes$58 = {
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node
	};
	
	var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
	  return React__default.createElement(Dropdown, props);
	};
	
	InputGroupButtonDropdown.propTypes = propTypes$58;
	
	var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
	
	var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
	  size: stringOrNumberProp$1,
	  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	
	var propTypes$59 = {
	  children: PropTypes.node,
	  hidden: PropTypes.bool,
	  check: PropTypes.bool,
	  size: PropTypes.string,
	  for: PropTypes.string,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  widths: PropTypes.array
	};
	
	var defaultProps$53 = {
	  tag: 'label',
	  widths: colWidths$1
	};
	
	var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Label = function Label(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      hidden = props.hidden,
	      widths = props.widths,
	      Tag = props.tag,
	      check = props.check,
	      size = props.size,
	      htmlFor = props.for,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);
	
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	    var colClass = void 0;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
	    } else {
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	
	  var classes = mapToCssModules(classNames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
	};
	
	Label.propTypes = propTypes$59;
	Label.defaultProps = defaultProps$53;
	
	var propTypes$60 = {
	  body: PropTypes.bool,
	  bottom: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  heading: PropTypes.bool,
	  left: PropTypes.bool,
	  list: PropTypes.bool,
	  middle: PropTypes.bool,
	  object: PropTypes.bool,
	  right: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool
	};
	
	var Media = function Media(props) {
	  var body = props.body,
	      bottom = props.bottom,
	      className = props.className,
	      cssModule = props.cssModule,
	      heading = props.heading,
	      left = props.left,
	      list = props.list,
	      middle = props.middle,
	      object = props.object,
	      right = props.right,
	      tag = props.tag,
	      top = props.top,
	      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
	
	
	  var defaultTag = void 0;
	  if (heading) {
	    defaultTag = 'h4';
	  } else if (attributes.href) {
	    defaultTag = 'a';
	  } else if (attributes.src || object) {
	    defaultTag = 'img';
	  } else if (list) {
	    defaultTag = 'ul';
	  } else {
	    defaultTag = 'div';
	  }
	  var Tag = tag || defaultTag;
	
	  var classes = mapToCssModules(classNames(className, {
	    'media-body': body,
	    'media-heading': heading,
	    'media-left': left,
	    'media-right': right,
	    'media-top': top,
	    'media-bottom': bottom,
	    'media-middle': middle,
	    'media-object': object,
	    'media-list': list,
	    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Media.propTypes = propTypes$60;
	
	var propTypes$61 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  listClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string
	};
	
	var defaultProps$54 = {
	  tag: 'nav',
	  listTag: 'ul',
	  'aria-label': 'pagination'
	};
	
	var Pagination = function Pagination(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      size = props.size,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);
	
	
	  var classes = mapToCssModules(classNames(className), cssModule);
	
	  var listClasses = mapToCssModules(classNames(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    { className: classes, 'aria-label': label },
	    React__default.createElement(ListTag, _extends({}, attributes, { className: listClasses }))
	  );
	};
	
	Pagination.propTypes = propTypes$61;
	Pagination.defaultProps = defaultProps$54;
	
	var propTypes$62 = {
	  active: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$55 = {
	  tag: 'li'
	};
	
	var PaginationItem = function PaginationItem(props) {
	  var active = props.active,
	      className = props.className,
	      cssModule = props.cssModule,
	      disabled = props.disabled,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-item', {
	    active: active,
	    disabled: disabled
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PaginationItem.propTypes = propTypes$62;
	PaginationItem.defaultProps = defaultProps$55;
	
	var propTypes$63 = {
	  'aria-label': PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  next: PropTypes.bool,
	  previous: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$56 = {
	  tag: 'a'
	};
	
	var PaginationLink = function PaginationLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      next = props.next,
	      previous = props.previous,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-link'), cssModule);
	
	  var defaultAriaLabel = void 0;
	  if (previous) {
	    defaultAriaLabel = 'Previous';
	  } else if (next) {
	    defaultAriaLabel = 'Next';
	  }
	  var ariaLabel = props['aria-label'] || defaultAriaLabel;
	
	  var defaultCaret = void 0;
	  if (previous) {
	    defaultCaret = '\xAB';
	  } else if (next) {
	    defaultCaret = '\xBB';
	  }
	
	  var children = props.children;
	  if (children && Array.isArray(children) && children.length === 0) {
	    children = null;
	  }
	
	  if (!attributes.href && Tag === 'a') {
	    Tag = 'button';
	  }
	
	  if (previous || next) {
	    children = [React__default.createElement(
	      'span',
	      {
	        'aria-hidden': 'true',
	        key: 'caret'
	      },
	      children || defaultCaret
	    ), React__default.createElement(
	      'span',
	      {
	        className: 'sr-only',
	        key: 'sr'
	      },
	      ariaLabel
	    )];
	  }
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, {
	      className: classes,
	      'aria-label': ariaLabel
	    }),
	    children
	  );
	};
	
	PaginationLink.propTypes = propTypes$63;
	PaginationLink.defaultProps = defaultProps$56;
	
	var propTypes$64 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  activeTab: PropTypes.any,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$57 = {
	  tag: 'div'
	};
	
	var childContextTypes$2 = {
	  activeTabId: PropTypes.any
	};
	
	var TabContent = function (_Component) {
	  inherits(TabContent, _Component);
	  createClass(TabContent, null, [{
	    key: 'getDerivedStateFromProps',
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      if (prevState.activeTab !== nextProps.activeTab) {
	        return {
	          activeTab: nextProps.activeTab
	        };
	      }
	      return null;
	    }
	  }]);
	
	  function TabContent(props) {
	    classCallCheck(this, TabContent);
	
	    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));
	
	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }
	
	  createClass(TabContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        activeTabId: this.state.activeTab
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          Tag = _props.tag;
	
	
	      var attributes = omit(this.props, Object.keys(propTypes$64));
	
	      var classes = mapToCssModules(classNames('tab-content', className), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	    }
	  }]);
	  return TabContent;
	}(React.Component);
	
	reactLifecyclesCompat.polyfill(TabContent);
	TabContent.propTypes = propTypes$64;
	TabContent.defaultProps = defaultProps$57;
	TabContent.childContextTypes = childContextTypes$2;
	
	var propTypes$65 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  tabId: PropTypes.any
	};
	
	var defaultProps$58 = {
	  tag: 'div'
	};
	
	var contextTypes$3 = {
	  activeTabId: PropTypes.any
	};
	
	function TabPane(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabId = props.tabId,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);
	
	  var classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	}
	TabPane.propTypes = propTypes$65;
	TabPane.defaultProps = defaultProps$58;
	TabPane.contextTypes = contextTypes$3;
	
	var propTypes$66 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$59 = {
	  tag: 'div'
	};
	
	var Jumbotron = function Jumbotron(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      fluid = props.fluid,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);
	
	
	  var classes = mapToCssModules(classNames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Jumbotron.propTypes = propTypes$66;
	Jumbotron.defaultProps = defaultProps$59;
	
	var propTypes$67 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  closeClassName: PropTypes.string,
	  closeAriaLabel: PropTypes.string,
	  cssModule: PropTypes.object,
	  color: PropTypes.string,
	  fade: PropTypes.bool,
	  isOpen: PropTypes.bool,
	  toggle: PropTypes.func,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  transition: PropTypes.shape(Fade.propTypes),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var defaultProps$60 = {
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  fade: true,
	  transition: _extends({}, Fade.defaultProps, {
	    unmountOnExit: true
	  })
	};
	
	function Alert(props) {
	  var className = props.className,
	      closeClassName = props.closeClassName,
	      closeAriaLabel = props.closeAriaLabel,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      color = props.color,
	      isOpen = props.isOpen,
	      toggle = props.toggle,
	      children = props.children,
	      transition = props.transition,
	      fade = props.fade,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);
	
	
	  var classes = mapToCssModules(classNames(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
	
	  var closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);
	
	  var alertTransition = _extends({}, Fade.defaultProps, transition, {
	    baseClass: fade ? transition.baseClass : '',
	    timeout: fade ? transition.timeout : 0
	  });
	
	  return React__default.createElement(
	    Fade,
	    _extends({}, attributes, alertTransition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert', innerRef: innerRef }),
	    toggle ? React__default.createElement(
	      'button',
	      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        '\xD7'
	      )
	    ) : null,
	    children
	  );
	}
	
	Alert.propTypes = propTypes$67;
	Alert.defaultProps = defaultProps$60;
	
	var _transitionStatusToCl;
	
	var propTypes$68 = _extends({}, Transition.propTypes, {
	  isOpen: PropTypes.bool,
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.node,
	  navbar: PropTypes.bool,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
	});
	
	var defaultProps$61 = _extends({}, Transition.defaultProps, {
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts.Collapse
	});
	
	var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);
	
	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}
	
	function getHeight(node) {
	  return node.scrollHeight;
	}
	
	var Collapse = function (_Component) {
	  inherits(Collapse, _Component);
	
	  function Collapse(props) {
	    classCallCheck(this, Collapse);
	
	    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));
	
	    _this.state = {
	      height: null
	    };
	
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
	      _this[name] = _this[name].bind(_this);
	    });
	    return _this;
	  }
	
	  createClass(Collapse, [{
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      this.setState({ height: getHeight(node) });
	      this.props.onEntering(node, isAppearing);
	    }
	  }, {
	    key: 'onEntered',
	    value: function onEntered(node, isAppearing) {
	      this.setState({ height: null });
	      this.props.onEntered(node, isAppearing);
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ height: getHeight(node) });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      // getting this variable triggers a reflow
	      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
	      this.setState({ height: 0 });
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      this.setState({ height: null });
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          Tag = _props.tag,
	          isOpen = _props.isOpen,
	          className = _props.className,
	          navbar = _props.navbar,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          innerRef = _props.innerRef,
	          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
	      var height = this.state.height;
	
	      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	      // empty object "{}". This is the result of the `react-transition-group` babel
	      // configuration settings. Therefore, to ensure that production builds work without
	      // error, we can either explicitly define keys or use the Transition.defaultProps.
	      // Using the Transition.defaultProps excludes any required props. Thus, the best
	      // solution is to explicitly define required props in our utilities and reference these.
	      // This also gives us more flexibility in the future to remove the prop-types
	      // dependency in distribution builds (Similar to how `react-transition-group` does).
	      // Note: Without omitting the `react-transition-group` props, the resulting child
	      // Tag component would inherit the Transition properties as attributes for the HTML
	      // element which results in errors/warnings for non-valid attributes.
	
	      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	      var childProps = omit(otherProps, TransitionPropTypeKeys);
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          'in': isOpen,
	          onEntering: this.onEntering,
	          onEntered: this.onEntered,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var collapseClass = getTransitionClass(status);
	          var classes = mapToCssModules(classNames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
	          var style = height === null ? null : { height: height };
	          return React__default.createElement(
	            Tag,
	            _extends({}, childProps, {
	              style: _extends({}, childProps.style, style),
	              className: classes,
	              ref: _this2.props.innerRef
	            }),
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return Collapse;
	}(React.Component);
	
	Collapse.propTypes = propTypes$68;
	Collapse.defaultProps = defaultProps$61;
	
	var propTypes$69 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  color: PropTypes.string,
	  action: PropTypes.bool,
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$62 = {
	  tag: 'li'
	};
	
	var handleDisabledOnClick = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};
	
	var ListGroupItem = function ListGroupItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      active = props.active,
	      disabled = props.disabled,
	      action = props.action,
	      color = props.color,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);
	
	  // Prevent click event when disabled.
	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick;
	  }
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItem.propTypes = propTypes$69;
	ListGroupItem.defaultProps = defaultProps$62;
	
	var propTypes$70 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$63 = {
	  tag: 'h5'
	};
	
	var ListGroupItemHeading = function ListGroupItemHeading(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-heading'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemHeading.propTypes = propTypes$70;
	ListGroupItemHeading.defaultProps = defaultProps$63;
	
	var propTypes$71 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$64 = {
	  tag: 'p'
	};
	
	var ListGroupItemText = function ListGroupItemText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemText.propTypes = propTypes$71;
	ListGroupItemText.defaultProps = defaultProps$64;
	
	var UncontrolledAlert = function (_Component) {
	  inherits(UncontrolledAlert, _Component);
	
	  function UncontrolledAlert(props) {
	    classCallCheck(this, UncontrolledAlert);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));
	
	    _this.state = { isOpen: true };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledAlert, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledAlert;
	}(React.Component);
	
	var UncontrolledButtonDropdown = function (_Component) {
	  inherits(UncontrolledButtonDropdown, _Component);
	
	  function UncontrolledButtonDropdown(props) {
	    classCallCheck(this, UncontrolledButtonDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledButtonDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledButtonDropdown;
	}(React.Component);
	
	var propTypes$72 = {
	  toggler: PropTypes.string.isRequired,
	  toggleEvents: PropTypes.arrayOf(PropTypes.string)
	};
	
	var defaultProps$65 = {
	  toggleEvents: defaultToggleEvents
	};
	
	var UncontrolledCollapse = function (_Component) {
	  inherits(UncontrolledCollapse, _Component);
	
	  function UncontrolledCollapse(props) {
	    classCallCheck(this, UncontrolledCollapse);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));
	
	    _this.togglers = null;
	    _this.removeEventListeners = null;
	    _this.toggle = _this.toggle.bind(_this);
	
	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }
	
	  createClass(UncontrolledCollapse, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.togglers = findDOMElements(this.props.toggler);
	      if (this.togglers.length) {
	        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.togglers.length && this.removeEventListeners) {
	        this.removeEventListeners();
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      this.setState(function (_ref) {
	        var isOpen = _ref.isOpen;
	        return { isOpen: !isOpen };
	      });
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          toggleEvents = _props.toggleEvents,
	          rest = objectWithoutProperties(_props, ['toggleEvents']);
	
	      return React__default.createElement(Collapse, _extends({ isOpen: this.state.isOpen }, rest));
	    }
	  }]);
	  return UncontrolledCollapse;
	}(React.Component);
	
	UncontrolledCollapse.propTypes = propTypes$72;
	UncontrolledCollapse.defaultProps = defaultProps$65;
	
	var UncontrolledDropdown = function (_Component) {
	  inherits(UncontrolledDropdown, _Component);
	
	  function UncontrolledDropdown(props) {
	    classCallCheck(this, UncontrolledDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledDropdown;
	}(React.Component);
	
	var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
	  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');
	
	  return React__default.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
	};
	
	var UncontrolledTooltip = function (_Component) {
	  inherits(UncontrolledTooltip, _Component);
	
	  function UncontrolledTooltip(props) {
	    classCallCheck(this, UncontrolledTooltip);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledTooltip, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledTooltip;
	}(React.Component);
	
	exports.Alert = Alert;
	exports.Container = Container;
	exports.Row = Row;
	exports.Col = Col;
	exports.Navbar = Navbar;
	exports.NavbarBrand = NavbarBrand;
	exports.NavbarToggler = NavbarToggler;
	exports.Nav = Nav;
	exports.NavItem = NavItem;
	exports.NavDropdown = NavDropdown;
	exports.NavLink = NavLink;
	exports.Breadcrumb = Breadcrumb;
	exports.BreadcrumbItem = BreadcrumbItem;
	exports.Button = Button;
	exports.ButtonDropdown = ButtonDropdown;
	exports.ButtonGroup = ButtonGroup;
	exports.ButtonToolbar = ButtonToolbar;
	exports.Dropdown = Dropdown;
	exports.DropdownItem = DropdownItem;
	exports.DropdownMenu = DropdownMenu;
	exports.DropdownToggle = DropdownToggle;
	exports.Fade = Fade;
	exports.Badge = Badge;
	exports.Card = Card;
	exports.CardLink = CardLink;
	exports.CardGroup = CardGroup;
	exports.CardDeck = CardDeck;
	exports.CardColumns = CardColumns;
	exports.CardBody = CardBody;
	exports.CardBlock = CardBlock;
	exports.CardFooter = CardFooter;
	exports.CardHeader = CardHeader;
	exports.CardImg = CardImg;
	exports.CardImgOverlay = CardImgOverlay;
	exports.Carousel = Carousel;
	exports.UncontrolledCarousel = UncontrolledCarousel;
	exports.CarouselControl = CarouselControl;
	exports.CarouselItem = CarouselItem;
	exports.CarouselIndicators = CarouselIndicators;
	exports.CarouselCaption = CarouselCaption;
	exports.CardSubtitle = CardSubtitle;
	exports.CardText = CardText;
	exports.CardTitle = CardTitle;
	exports.Popover = Popover;
	exports.PopoverContent = PopoverContent;
	exports.PopoverBody = PopoverBody;
	exports.PopoverTitle = PopoverTitle;
	exports.PopoverHeader = PopoverHeader;
	exports.Progress = Progress;
	exports.Modal = Modal;
	exports.ModalHeader = ModalHeader;
	exports.ModalBody = ModalBody;
	exports.ModalFooter = ModalFooter;
	exports.PopperContent = PopperContent;
	exports.PopperTargetHelper = PopperTargetHelper;
	exports.Tooltip = Tooltip;
	exports.Table = Table;
	exports.ListGroup = ListGroup;
	exports.Form = Form;
	exports.FormFeedback = FormFeedback;
	exports.FormGroup = FormGroup;
	exports.FormText = FormText;
	exports.Input = Input;
	exports.InputGroup = InputGroup;
	exports.InputGroupAddon = InputGroupAddon;
	exports.InputGroupButton = InputGroupButton;
	exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
	exports.InputGroupText = InputGroupText;
	exports.Label = Label;
	exports.CustomInput = CustomInput;
	exports.Media = Media;
	exports.Pagination = Pagination;
	exports.PaginationItem = PaginationItem;
	exports.PaginationLink = PaginationLink;
	exports.TabContent = TabContent;
	exports.TabPane = TabPane;
	exports.Jumbotron = Jumbotron;
	exports.Collapse = Collapse;
	exports.ListGroupItem = ListGroupItem;
	exports.ListGroupItemText = ListGroupItemText;
	exports.ListGroupItemHeading = ListGroupItemHeading;
	exports.UncontrolledAlert = UncontrolledAlert;
	exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
	exports.UncontrolledCollapse = UncontrolledCollapse;
	exports.UncontrolledDropdown = UncontrolledDropdown;
	exports.UncontrolledNavDropdown = UncontrolledNavDropdown;
	exports.UncontrolledTooltip = UncontrolledTooltip;
	exports.Util = utils;
	//# sourceMappingURL=reactstrap.cjs.js.map


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(48),
	    getRawTag = __webpack_require__(240),
	    objectToString = __webpack_require__(266);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

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
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(29)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(26);
	var createDesc = __webpack_require__(43);
	module.exports = __webpack_require__(23) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14);
	var IE8_DOM_DEFINE = __webpack_require__(90);
	var toPrimitive = __webpack_require__(68);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(221),
	    getValue = __webpack_require__(243);
	
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
	
	module.exports = getNative;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

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
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(91);
	var defined = __webpack_require__(58);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(41);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(95);
	var enumBugKeys = __webpack_require__(60);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(53);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactstrap = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AvFeedback = function (_Component) {
	  (0, _inherits3.default)(AvFeedback, _Component);
	
	  function AvFeedback() {
	    (0, _classCallCheck3.default)(this, AvFeedback);
	    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
	  }
	
	  AvFeedback.prototype.render = function render() {
	    var validation = this.context.Group.getInputState();
	    return _react2.default.createElement(_reactstrap.FormFeedback, (0, _extends3.default)({ valid: !validation.error }, this.props));
	  };
	
	  return AvFeedback;
	}(_react.Component);
	
	AvFeedback.propTypes = (0, _assign2.default)({}, _reactstrap.FormFeedback.propTypes);
	AvFeedback.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired,
	  Group: _propTypes2.default.object.isRequired
	};
	exports.default = AvFeedback;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactstrap = __webpack_require__(17);
	
	var _AvBaseInput2 = __webpack_require__(81);
	
	var _AvBaseInput3 = _interopRequireDefault(_AvBaseInput2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AvInput = function (_AvBaseInput) {
	  (0, _inherits3.default)(AvInput, _AvBaseInput);
	
	  function AvInput() {
	    (0, _classCallCheck3.default)(this, AvInput);
	    return (0, _possibleConstructorReturn3.default)(this, _AvBaseInput.apply(this, arguments));
	  }
	
	  AvInput.prototype.getValue = function getValue() {
	    return this.props.valueParser ? this.props.valueParser(this.value) : this.value;
	  };
	
	  AvInput.prototype.getViewValue = function getViewValue() {
	    return this.props.valueFormatter ? this.props.valueFormatter(this.value) : this.value;
	  };
	
	  AvInput.prototype.render = function render() {
	    var _props = this.props,
	        omit1 = _props.errorMessage,
	        omit2 = _props.validate,
	        omit3 = _props.validationEvent,
	        omit4 = _props.state,
	        omit5 = _props.trueValue,
	        omit6 = _props.falseValue,
	        omit7 = _props.valueParser,
	        omit8 = _props.valueFormatter,
	        className = _props.className,
	        tag = _props.tag,
	        getRef = _props.getRef,
	        _props$id = _props.id,
	        id = _props$id === undefined ? this.props.name : _props$id,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'trueValue', 'falseValue', 'valueParser', 'valueFormatter', 'className', 'tag', 'getRef', 'id']);
	
	
	    var touched = this.context.FormCtrl.isTouched(this.props.name);
	    var hasError = this.context.FormCtrl.hasError(this.props.name);
	    var Tag = tag;
	
	    if (Array.isArray(tag)) {
	      var tags = void 0;
	      Tag = tag[0];
	      tags = tag.slice(1);
	
	      attributes.tag = tags;
	      if (attributes.tag.length <= 1) {
	        attributes.tag = attributes.tag[0];
	      }
	    }
	
	    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid', attributes.type === 'checkbox' && touched && hasError && 'was-validated');
	
	    var value = this.getViewValue();
	
	    return _react2.default.createElement(Tag, (0, _extends3.default)({}, attributes, {
	      ref: getRef
	    }, this.getValidatorProps(), {
	      className: classes,
	      value: value,
	      id: id
	    }));
	  };
	
	  return AvInput;
	}(_AvBaseInput3.default);
	
	AvInput.defaultProps = (0, _assign2.default)({}, _AvBaseInput3.default.defaultProps, {
	  tag: _reactstrap.Input
	});
	AvInput.contextTypes = _AvBaseInput3.default.contextTypes;
	exports.default = AvInput;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _isRegExp = __webpack_require__(283);
	
	var _isRegExp2 = _interopRequireDefault(_isRegExp);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression
	
	function asRegExp(pattern) {
	  // if regex then return it
	  if ((0, _isRegExp2.default)(pattern)) {
	    return pattern;
	  }
	
	  // if string then test for valid regex then convert to regex and return
	  var match = pattern.match(REGEX);
	  if (match) {
	    return new RegExp(match[1], match[2]);
	  }
	
	  return new RegExp(pattern);
	}
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];
	
	  return values.some(function (expression) {
	    return asRegExp(expression).test(value);
	  }) || constraint.errorMessage || false;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(26).f;
	var has = __webpack_require__(24);
	var TAG = __webpack_require__(4)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs=e()}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(l=r),r},D=function(t,e,n){if(y(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new v(r)},g=d;g.l=M,g.i=y,g.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return g},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return D(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<D(t)},d.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var h=this,f=!!g.u(a)||a,c=g.p(t),d=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return g.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case o:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var D=this.$locale().weekStart||0,v=(l<D?l+7:l)-D;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var h,f=g.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[o]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(a-this.$W):a;if(f===u||f===o){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[g.p(t)]()},d.add=function(t,a){var h,f=this;t=Number(t);var c=g.p(a),d=function(e){var n=new Date(f.$d);return n.setDate(n.getDate()+Math.round(e*t)),g.w(n,f)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.valueOf()+t*$;return g.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:c(i.monthsShort,a,h,3),MMMM:h[a]||h(this,n),D:this.$D,DD:g.s(this.$D,2,"0"),d:this.$W,dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:s,HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:u,mm:g.s(u,2,"0"),s:this.$s,ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return String(n.replace(f,function(t,e){return e||l[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=g.p(h),$=D(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=g.m(this,$);return y=(c={},c[o]=y/12,c[u]=y,c[a]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:g.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=M(t,e,!0),n},d.clone=function(){return g.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return D.prototype=v.prototype,D.extend=function(t,e){return t(e,v,D),D},D.locale=M,D.isDayjs=y,D.unix=function(t){return D(1e3*t)},D.en=m[l],D.Ls=m,D});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(253),
	    listCacheDelete = __webpack_require__(254),
	    listCacheGet = __webpack_require__(255),
	    listCacheHas = __webpack_require__(256),
	    listCacheSet = __webpack_require__(257);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(12);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(77);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(250);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(107);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(87);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(150);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(149);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(301);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	var document = __webpack_require__(3).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(41);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(14);
	var dPs = __webpack_require__(173);
	var enumBugKeys = __webpack_require__(60);
	var IE_PROTO = __webpack_require__(64)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(59)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(89).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(65)('keys');
	var uid = __webpack_require__(45);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(2);
	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(34) ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(58);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(2);
	var LIBRARY = __webpack_require__(34);
	var wksExt = __webpack_require__(70);
	var defineProperty = __webpack_require__(26).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(4);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(12);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(258),
	    mapCacheDelete = __webpack_require__(259),
	    mapCacheGet = __webpack_require__(260),
	    mapCacheHas = __webpack_require__(261),
	    mapCacheSet = __webpack_require__(262);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(219),
	    isObjectLike = __webpack_require__(21);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(16),
	    isKey = __webpack_require__(76),
	    stringToPath = __webpack_require__(276),
	    toString = __webpack_require__(293);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(16),
	    isSymbol = __webpack_require__(53);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(73);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	module.exports = isLength;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(209),
	    baseKeys = __webpack_require__(224),
	    isArrayLike = __webpack_require__(117);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(40);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isUndefined = __webpack_require__(54);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _isEqual = __webpack_require__(78);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _get = __webpack_require__(52);
	
	var _get2 = _interopRequireDefault(_get);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var htmlValidationAttrs = ['min', 'max', 'minLength', 'maxLength', 'pattern', 'required', 'step'];
	
	var htmlValidationTypes = ['email', 'date', 'datetime', 'number', 'tel', 'url'];
	
	var AvBaseInput = function (_Component) {
	  (0, _inherits3.default)(AvBaseInput, _Component);
	
	  function AvBaseInput(props) {
	    (0, _classCallCheck3.default)(this, AvBaseInput);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
	
	    _this.state = { value: _this.props.multiple ? [] : '' };
	    _this.validations = {};
	    _this.value = '';
	    _this.onKeyUpHandler = _this.onKeyUpHandler.bind(_this);
	    _this.onInputHandler = _this.onInputHandler.bind(_this);
	    _this.onBlurHandler = _this.onBlurHandler.bind(_this);
	    _this.onFocusHandler = _this.onFocusHandler.bind(_this);
	    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
	    _this.validate = _this.validate.bind(_this);
	    return _this;
	  }
	
	  AvBaseInput.prototype.componentDidMount = function componentDidMount() {
	    this.value = this.props.value || this.getDefaultValue();
	    this.setState({ value: this.value });
	    this.updateValidations();
	  };
	
	  AvBaseInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.name !== this.props.name) {
	      this.context.FormCtrl.unregister(this);
	    }
	    if (this.props.type === 'checkbox') {
	      if (prevProps.checked !== this.props.checked) {
	        if (this.props.checked) {
	          this.value = this.props.trueValue;
	        } else {
	          this.value = this.props.falseValue;
	        }
	        this.setState({ value: this.value });
	      }
	    } else {
	      if (prevProps.multiple !== this.props.multiple) {
	        this.value = this.props.multiple ? [] : '';
	        this.setState({ value: this.value });
	      }
	      if (prevProps.value !== this.props.value) {
	        this.value = this.props.value;
	        this.setState({ value: this.props.value });
	      }
	    }
	
	    if (!(0, _isEqual2.default)(prevProps, this.props)) {
	      this.updateValidations(this.props);
	    }
	  };
	
	  AvBaseInput.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.context.FormCtrl.unregister(this);
	  };
	
	  AvBaseInput.prototype.onKeyUpHandler = function onKeyUpHandler(event) {
	    var badInput = (0, _get2.default)(event, 'target.validity.badInput', false);
	    if (badInput !== this.context.FormCtrl.isBad(this.props.name)) {
	      this.context.FormCtrl.setBad(this.props.name, badInput);
	      this.validate();
	    }
	    this.props.onKeyUp && this.props.onKeyUp(event);
	  };
	
	  AvBaseInput.prototype.onInputHandler = function onInputHandler(_value) {
	    this.value = this.getFieldValue(_value);
	    this.validateEvent('onInput', _value);
	    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
	  };
	
	  AvBaseInput.prototype.onBlurHandler = function onBlurHandler(_value) {
	    this.value = this.getFieldValue(_value);
	    this.validateEvent('onBlur', _value);
	    !this.context.FormCtrl.isTouched(this.props.name) && this.context.FormCtrl.setTouched(this.props.name);
	  };
	
	  AvBaseInput.prototype.onFocusHandler = function onFocusHandler(_value) {
	    this.value = this.getFieldValue(_value);
	    this.validateEvent('onFocus', _value);
	  };
	
	  AvBaseInput.prototype.onChangeHandler = function onChangeHandler(_value) {
	    this.value = this.getFieldValue(_value);
	    this.validateEvent('onChange', _value);
	    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
	  };
	
	  AvBaseInput.prototype.getDefaultValue = function getDefaultValue() {
	    var defaultValue = '';
	
	    if (this.props.type === 'checkbox') {
	      if (!(0, _isUndefined2.default)(this.props.defaultChecked)) {
	        return this.props.defaultChecked ? this.props.trueValue : this.props.falseValue;
	      }
	      defaultValue = this.props.falseValue;
	    }
	
	    if (this.props.type === 'select' && this.props.multiple) {
	      defaultValue = [];
	    }
	
	    var value = this.props.defaultValue || this.context.FormCtrl.getDefaultValue(this.props.name);
	
	    if (this.props.type === 'checkbox' && value !== this.props.trueValue) {
	      value = defaultValue;
	    }
	
	    return (0, _isUndefined2.default)(value) ? defaultValue : value;
	  };
	
	  AvBaseInput.prototype.getFieldValue = function getFieldValue(event) {
	    if (this.props.type === 'checkbox') {
	      return event.target.checked ? this.props.trueValue : this.props.falseValue;
	    }
	
	    if (this.props.type === 'select' && this.props.multiple) {
	      /* // Something about this does not work when transpiled
	      return [...event.target.options]
	        .filter(({ selected }) => selected)
	        .map(({ value }) => value); */
	      var ret = [];
	      var options = event.target.options;
	      for (var i = 0; i < options.length; i++) {
	        if (options[i].selected) {
	          ret.push(options[i].value);
	        }
	      }
	      return ret;
	    }
	    return event && event.target && !(0, _isUndefined2.default)(event.target.value) ? event.target.value : event;
	  };
	
	  AvBaseInput.prototype.getValidationEvent = function getValidationEvent() {
	    var validationEvent = this.props.validationEvent ? this.props.validationEvent : this.context.FormCtrl.getValidationEvent();
	    return Array.isArray(validationEvent) ? validationEvent : [validationEvent];
	  };
	
	  AvBaseInput.prototype.getValidatorProps = function getValidatorProps() {
	    var _this2 = this;
	
	    var validatity = this.context.FormCtrl.getInputState(this.props.name);
	    var htmlValAttrs = (0, _keys2.default)(this.props.validate || {}).filter(function (val) {
	      return htmlValidationAttrs.indexOf(val) > -1;
	    }).reduce(function (result, item) {
	      result[item] = _this2.props.validate[item].value || _this2.props.validate[item];
	      return result;
	    }, {});
	
	    var newProps = (0, _extends3.default)({
	      onKeyUp: this.onKeyUpHandler,
	      onBlur: this.onBlurHandler,
	      onInput: this.onInputHandler,
	      onFocus: this.onFocusHandler,
	      onChange: this.onChangeHandler,
	      value: this.value
	    }, htmlValAttrs);
	
	    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
	      newProps.disabled = this.context.FormCtrl.isDisabled();
	    }
	
	    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
	      newProps.readOnly = this.context.FormCtrl.isReadOnly();
	    }
	
	    if (this.props.type === 'checkbox') {
	      newProps.checked = this.value === this.props.trueValue;
	    }
	
	    if (this.props.state || validatity && validatity.errorMessage) {
	      newProps.valid = !(validatity && validatity.errorMessage);
	    }
	
	    return newProps;
	  };
	
	  AvBaseInput.prototype.getValue = function getValue() {
	    return this.value;
	  };
	
	  AvBaseInput.prototype.reset = function reset() {
	    this.value = this.getDefaultValue();
	    this.context.FormCtrl.setDirty(this.props.name, false);
	    this.context.FormCtrl.setTouched(this.props.name, false);
	    this.context.FormCtrl.setBad(this.props.name, false);
	    this.setState({ value: this.value });
	    this.validate();
	    this.props.onReset && this.props.onReset(this.value);
	  };
	
	  AvBaseInput.prototype.validateEvent = function validateEvent(eventName, _event) {
	    this.setState({ value: this.value });
	    if (this.getValidationEvent().indexOf(eventName) > -1) {
	      this.validate();
	    }
	    this.props[eventName] && this.props[eventName](_event, this.value);
	  };
	
	  AvBaseInput.prototype.validate = function validate() {
	    this.context.FormCtrl.validate(this.props.name);
	  };
	
	  AvBaseInput.prototype.updateValidations = function updateValidations() {
	    var _this3 = this;
	
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	    this.validations = (0, _assign2.default)({}, props.validate);
	
	    if (htmlValidationTypes.indexOf(props.type) > -1) {
	      this.validations[props.type] = this.validations[props.type] || true;
	    }
	
	    (0, _keys2.default)(props).filter(function (val) {
	      return htmlValidationAttrs.indexOf(val) > -1;
	    }).forEach(function (attr) {
	      if (props[attr]) {
	        _this3.validations[attr] = _this3.validations[attr] || {
	          value: props[attr]
	        };
	      } else {
	        delete _this3.validations[attr];
	      }
	    });
	
	    this.context.FormCtrl && this.context.FormCtrl.register(this);
	    this.validate();
	  };
	
	  return AvBaseInput;
	}(_react.Component);
	
	AvBaseInput.propTypes = {
	  name: _propTypes2.default.string.isRequired,
	  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['', 'onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
	  validate: _propTypes2.default.object,
	  value: _propTypes2.default.any,
	  defaultValue: _propTypes2.default.any,
	  trueValue: _propTypes2.default.any,
	  falseValue: _propTypes2.default.any,
	  checked: _propTypes2.default.bool,
	  defaultChecked: _propTypes2.default.bool,
	  state: _propTypes2.default.bool,
	  type: _propTypes2.default.string,
	  multiple: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  readOnly: _propTypes2.default.bool,
	  onKeyUp: _propTypes2.default.func,
	  onInput: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onBlur: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onReset: _propTypes2.default.func
	};
	AvBaseInput.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvBaseInput.defaultProps = {
	  validationEvent: '',
	  validate: {},
	  trueValue: true,
	  falseValue: false
	};
	exports.default = AvBaseInput;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactstrap = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AvGroup = function (_Component) {
	  (0, _inherits3.default)(AvGroup, _Component);
	
	  function AvGroup(props) {
	    (0, _classCallCheck3.default)(this, AvGroup);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
	
	    _this.state = { input: { props: {} } };
	    return _this;
	  }
	
	  AvGroup.prototype.getChildContext = function getChildContext() {
	    var _this2 = this;
	
	    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
	    var registerValidator = this.FormCtrl.register;
	    this.FormCtrl.register = function (input) {
	      _this2.setState({ input: input });
	      registerValidator(input, _this2.update.bind(_this2, input));
	    };
	    return {
	      Group: {
	        getInput: function getInput() {
	          return _this2.state.input;
	        },
	        getInputState: this.getInputState.bind(this)
	      },
	      FormCtrl: this.FormCtrl
	    };
	  };
	
	  AvGroup.prototype.getInputState = function getInputState() {
	    return this.context.FormCtrl.getInputState(this.state.input.props.name);
	  };
	
	  AvGroup.prototype.update = function update(input) {
	    if (input && input.setState) input.setState.call(input, {});
	    this.setState({});
	  };
	
	  AvGroup.prototype.render = function render() {
	    var validation = this.getInputState();
	    var classname = (0, _classnames2.default)(this.props.className, validation.color && 'text-' + validation.color);
	    return _react2.default.createElement(_reactstrap.FormGroup, (0, _extends3.default)({ className: classname }, this.props));
	  };
	
	  return AvGroup;
	}(_react.Component);
	
	AvGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes);
	AvGroup.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvGroup.childContextTypes = {
	  Group: _propTypes2.default.object.isRequired,
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	exports.default = AvGroup;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validComponent(input) {
	  var name = input && input.props ? input.props.name : undefined;
	
	  if (!name) {
	    throw new Error('Input ' + input + ' has no "name" prop');
	  }
	
	  return { name: name };
	}
	
	var InputContainer = function (_Component) {
	  (0, _inherits3.default)(InputContainer, _Component);
	
	  function InputContainer() {
	    (0, _classCallCheck3.default)(this, InputContainer);
	    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
	  }
	
	  InputContainer.prototype.componentDidMount = function componentDidMount() {
	    this._updaters = {};
	    this._inputs = {};
	  };
	
	  InputContainer.prototype.getOldInputName = function getOldInputName(input) {
	    for (var key in this._inputs) {
	      if (this._inputs[key] === input) {
	        return key;
	      }
	    }
	  };
	
	  InputContainer.prototype.registerInput = function registerInput(input) {
	    var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);
	
	    var _validComponent = validComponent(input, updater),
	        name = _validComponent.name;
	
	    var oldName = this.getOldInputName(input);
	    if (oldName !== name) {
	      if (oldName) {
	        this.unregisterInput({ props: { name: oldName } });
	      }
	      this._updaters[name] = updater;
	      this._inputs[name] = input;
	    }
	  };
	
	  InputContainer.prototype.unregisterInput = function unregisterInput(input) {
	    var _validComponent2 = validComponent(input),
	        name = _validComponent2.name;
	
	    delete this._updaters[name];
	    delete this._inputs[name];
	  };
	
	  return InputContainer;
	}(_react.Component);
	
	exports.default = InputContainer;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _date = __webpack_require__(132);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _dateRange = __webpack_require__(133);
	
	var _dateRange2 = _interopRequireDefault(_dateRange);
	
	var _email = __webpack_require__(134);
	
	var _email2 = _interopRequireDefault(_email);
	
	var _match = __webpack_require__(135);
	
	var _match2 = _interopRequireDefault(_match);
	
	var _max = __webpack_require__(136);
	
	var _max2 = _interopRequireDefault(_max);
	
	var _maxlength = __webpack_require__(137);
	
	var _maxlength2 = _interopRequireDefault(_maxlength);
	
	var _maxchecked = __webpack_require__(85);
	
	var _maxchecked2 = _interopRequireDefault(_maxchecked);
	
	var _min = __webpack_require__(138);
	
	var _min2 = _interopRequireDefault(_min);
	
	var _minlength = __webpack_require__(139);
	
	var _minlength2 = _interopRequireDefault(_minlength);
	
	var _minchecked = __webpack_require__(86);
	
	var _minchecked2 = _interopRequireDefault(_minchecked);
	
	var _number = __webpack_require__(141);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _npi = __webpack_require__(140);
	
	var _npi2 = _interopRequireDefault(_npi);
	
	var _pattern = __webpack_require__(39);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	var _phone = __webpack_require__(142);
	
	var _phone2 = _interopRequireDefault(_phone);
	
	var _required = __webpack_require__(143);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _step = __webpack_require__(144);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _url = __webpack_require__(145);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  date: _date2.default,
	  datetime: _date2.default,
	  dateRange: _dateRange2.default,
	  email: _email2.default,
	  match: _match2.default,
	  max: _max2.default,
	  maxlength: _maxlength2.default,
	  maxLength: _maxlength2.default,
	  maxChecked: _maxchecked2.default,
	  min: _min2.default,
	  minlength: _minlength2.default,
	  minLength: _minlength2.default,
	  minChecked: _minchecked2.default,
	  number: _number2.default,
	  npi: _npi2.default,
	  pattern: _pattern2.default,
	  phone: _phone2.default,
	  tel: _phone2.default,
	  required: _required2.default,
	  step: _step2.default,
	  url: _url2.default
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if ((0, _utils.isEmpty)(input.value)) return true;
	
	  var max = (0, _toNumber2.default)(constraint.value);
	
	  return !isNaN(max) && isFinite(max) && !(0, _utils.isDecimal)(max) && max >= input.value.length || constraint.errorMessage || false;
	}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if ((0, _utils.isEmpty)(input.value)) return true;
	
	  var min = (0, _toNumber2.default)(constraint.value);
	
	  return !isNaN(min) && isFinite(min) && !(0, _utils.isDecimal)(min) && min <= input.value.length || constraint.errorMessage || false;
	}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(31);
	var TAG = __webpack_require__(4)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(29)(function () {
	  return Object.defineProperty(__webpack_require__(59)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(31);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(34);
	var $export = __webpack_require__(15);
	var redefine = __webpack_require__(98);
	var hide = __webpack_require__(25);
	var Iterators = __webpack_require__(33);
	var $iterCreate = __webpack_require__(167);
	var setToStringTag = __webpack_require__(44);
	var getPrototypeOf = __webpack_require__(175);
	var ITERATOR = __webpack_require__(4)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(42);
	var createDesc = __webpack_require__(43);
	var toIObject = __webpack_require__(30);
	var toPrimitive = __webpack_require__(68);
	var has = __webpack_require__(24);
	var IE8_DOM_DEFINE = __webpack_require__(90);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(95);
	var hiddenKeys = __webpack_require__(60).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(24);
	var toIObject = __webpack_require__(30);
	var arrayIndexOf = __webpack_require__(160)(false);
	var IE_PROTO = __webpack_require__(64)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14);
	var isObject = __webpack_require__(19);
	var newPromiseCapability = __webpack_require__(61);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(14);
	var aFunction = __webpack_require__(41);
	var SPECIES = __webpack_require__(4)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(32);
	var invoke = __webpack_require__(163);
	var html = __webpack_require__(89);
	var cel = __webpack_require__(59);
	var global = __webpack_require__(3);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(31)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(66);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 102 */
/***/ (function(module, exports) {



/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(180)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(92)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(184);
	var global = __webpack_require__(3);
	var hide = __webpack_require__(25);
	var Iterators = __webpack_require__(33);
	var TO_STRING_TAG = __webpack_require__(4)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs_plugin_customParseFormat=n()}(this,function(){"use strict";var t,n=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,e=/\d\d/,r=/\d\d?/,o=/\d*[^\s\d-:/.()]+/;var s=function(t){return function(n){this[t]=+n}},i=[/[+-]\d\d:?\d\d/,function(t){var n,e;(this.zone||(this.zone={})).offset=(n=t.match(/([+-]|\d\d)/g),0===(e=60*n[1]+ +n[2])?0:"+"===n[0]?-e:e)}],a={A:[/[AP]M/,function(t){this.afternoon="PM"===t}],a:[/[ap]m/,function(t){this.afternoon="pm"===t}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[e,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[e,s("day")],Do:[o,function(n){var e=t.ordinal,r=n.match(/\d+/);if(this.day=r[0],e)for(var o=1;o<=31;o+=1)e(o).replace(/\[|\]/g,"")===n&&(this.day=o)}],M:[r,s("month")],MM:[e,s("month")],MMM:[o,function(n){var e=t,r=e.months,o=e.monthsShort,s=o?o.findIndex(function(t){return t===n}):r.findIndex(function(t){return t.substr(0,3)===n});if(s<0)throw new Error;this.month=s+1}],MMMM:[o,function(n){var e=t.months.indexOf(n);if(e<0)throw new Error;this.month=e+1}],Y:[/[+-]?\d+/,s("year")],YY:[e,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,s("year")],Z:i,ZZ:i};var u=function(t,e,r){try{var o=function(t){for(var e=t.match(n),r=e.length,o=0;o<r;o+=1){var s=e[o],i=a[s],u=i&&i[0],f=i&&i[1];e[o]=f?{regex:u,parser:f}:s.replace(/^\[|\]$/g,"")}return function(t){for(var n={},o=0,s=0;o<r;o+=1){var i=e[o];if("string"==typeof i)s+=i.length;else{var a=i.regex,u=i.parser,f=t.substr(s),h=a.exec(f)[0];u.call(n,h),t=t.replace(h,"")}}return function(t){var n=t.afternoon;if(void 0!==n){var e=t.hours;n?e<12&&(t.hours+=12):12===e&&(t.hours=0),delete t.afternoon}}(n),n}}(e)(t),s=o.year,i=o.month,u=o.day,f=o.hours,h=o.minutes,d=o.seconds,c=o.milliseconds,m=o.zone;if(m)return new Date(Date.UTC(s,i-1,u,f||0,h||0,d||0,c||0)+60*m.offset*1e3);var l=new Date,v=s||l.getFullYear(),p=i>0?i-1:l.getMonth(),M=u||l.getDate(),y=f||0,D=h||0,Y=d||0,g=c||0;return r?new Date(Date.UTC(v,p,M,y,D,Y,g)):new Date(v,p,M,y,D,Y,g)}catch(t){return new Date("")}};return function(n,e,r){var o=e.prototype,s=o.parse;o.parse=function(n){var e=n.date,o=n.format,i=n.pl,a=n.utc;this.$u=a,o?(t=i?r.Ls[i]:this.$locale(),this.$d=u(e,o,a),this.init(n)):s.call(this,n)}}});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(47),
	    stackClear = __webpack_require__(271),
	    stackDelete = __webpack_require__(272),
	    stackGet = __webpack_require__(273),
	    stackHas = __webpack_require__(274),
	    stackSet = __webpack_require__(275);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(74),
	    toKey = __webpack_require__(36);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(225),
	    baseMatchesProperty = __webpack_require__(226),
	    identity = __webpack_require__(281),
	    isArray = __webpack_require__(16),
	    property = __webpack_require__(286);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(205),
	    arraySome = __webpack_require__(212),
	    cacheHas = __webpack_require__(232);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(111);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)(module)))

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
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
	
	module.exports = toSource;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(218),
	    isObjectLike = __webpack_require__(21);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(119),
	    isLength = __webpack_require__(79);
	
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
	
	module.exports = isArrayLike;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
	    stubFalse = __webpack_require__(289);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
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
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObject = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
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
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isArray = __webpack_require__(16),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(223),
	    baseUnary = __webpack_require__(109),
	    nodeUtil = __webpack_require__(114);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (false) {
	  module.exports = require('./cjs/react-is.production.min.js');
	} else {
	  module.exports = __webpack_require__(298);
	}


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _find = __webpack_require__(278);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _reactstrap = __webpack_require__(17);
	
	var _AvInput = __webpack_require__(38);
	
	var _AvInput2 = _interopRequireDefault(_AvInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
	delete checkPropTypes.name;
	
	var AvCheckbox = function (_Component) {
	  (0, _inherits3.default)(AvCheckbox, _Component);
	
	  function AvCheckbox() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AvCheckbox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  AvCheckbox.prototype.componentDidMount = function componentDidMount() {
	    this.context.FormCtrl && this.context.FormCtrl.register(this);
	  };
	
	  AvCheckbox.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
	  };
	
	  AvCheckbox.prototype.isDefaultChecked = function isDefaultChecked(valueArr) {
	    var _this2 = this;
	
	    return Array.isArray(valueArr) && valueArr.length > 0 && (0, _find2.default)(valueArr, function (item) {
	      return item === _this2.props.value;
	    });
	  };
	
	  AvCheckbox.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        id = _props.id,
	        customInput = _props.customInput,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);
	
	
	    var groupProps = this.context.Group.getProps();
	
	    var touched = this.context.FormCtrl.isTouched(groupProps.name);
	    var hasError = this.context.FormCtrl.hasError(groupProps.name);
	
	    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');
	
	    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
	      attributes.disabled = this.context.FormCtrl.isDisabled();
	    }
	
	    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
	      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
	    }
	
	    if (customInput) {
	      return _react2.default.createElement(_reactstrap.CustomInput, (0, _extends3.default)({
	        name: groupProps.name,
	        type: 'checkbox'
	      }, attributes, {
	        inline: groupProps.inline,
	        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
	        className: classes,
	        onChange: this.onChangeHandler,
	        value: this.props.value && this.props.value.toString(),
	        defaultChecked: this.isDefaultChecked(groupProps.value),
	        required: groupProps.required,
	        label: this.props.label
	      }));
	    }
	
	    return _react2.default.createElement(
	      _reactstrap.FormGroup,
	      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
	      _react2.default.createElement(_reactstrap.Input, (0, _extends3.default)({
	        name: groupProps.name,
	        type: 'checkbox'
	      }, attributes, {
	        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
	        className: classes,
	        onChange: this.onChangeHandler,
	        value: this.props.value && this.props.value.toString(),
	        defaultChecked: this.isDefaultChecked(groupProps.value),
	        required: groupProps.required
	      })),
	      _react2.default.createElement(
	        _reactstrap.Label,
	        { check: true, 'for': id || 'checkbox-' + groupProps.name + '-' + this.props.value },
	        this.props.label
	      )
	    );
	  };
	
	  return AvCheckbox;
	}(_react.Component);
	
	AvCheckbox.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
	  Group: _propTypes2.default.object.isRequired
	});
	AvCheckbox.propTypes = checkPropTypes;
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onChangeHandler = function (event) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    _this3.context.Group.update(event, _this3.props.value);
	    if (_this3.props.onChange) {
	      var _props2;
	
	      (_props2 = _this3.props).onChange.apply(_props2, [event].concat(args));
	    }
	  };
	};
	
	exports.default = AvCheckbox;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _keys = __webpack_require__(40);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _regenerator = __webpack_require__(57);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(55);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(125);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(78);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _isUndefined = __webpack_require__(54);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _reactstrap = __webpack_require__(17);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _AvFeedback = __webpack_require__(37);
	
	var _AvFeedback2 = _interopRequireDefault(_AvFeedback);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var htmlValidationAttrs = ['required'];
	
	var noop = function noop() {};
	
	var AvCheckboxGroup = function (_Component) {
	  (0, _inherits3.default)(AvCheckboxGroup, _Component);
	
	  function AvCheckboxGroup() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AvCheckboxGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      invalidInputs: {},
	      dirtyInputs: {},
	      touchedInputs: {},
	      badInputs: {},
	      validate: {},
	      value: []
	    }, _this._inputs = [], _this.value = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  AvCheckboxGroup.prototype.getChildContext = function getChildContext() {
	    var _this2 = this;
	
	    if (!this.FormCtrl) {
	      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
	      this.FormCtrl.register = this.registerInput.bind(this);
	      this.FormCtrl.unregister = this.unregisterInput.bind(this);
	      this.FormCtrl.validate = noop;
	    }
	
	    var updateGroup = function () {
	      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (e.target.checked) {
	                  _this2.value.push(value);
	                } else {
	                  _this2.value = _this2.value.filter(function (item) {
	                    return item !== value;
	                  });
	                }
	
	                _this2.setState({ value: _this2.value });
	
	                _context.next = 4;
	                return _this2.validate();
	
	              case 4:
	                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
	                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
	                _this2.props.onChange && _this2.props.onChange(e, _this2.value);
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2);
	      }));
	
	      return function updateGroup(_x, _x2) {
	        return _ref.apply(this, arguments);
	      };
	    }();
	
	    return {
	      Group: {
	        getProps: function getProps() {
	          return {
	            name: _this2.props.name,
	            inline: _this2.props.inline,
	            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
	            value: _this2.value
	          };
	        },
	        update: updateGroup,
	        getValue: function getValue() {
	          return _this2.value;
	        },
	        getInputState: this.getInputState.bind(this)
	      },
	      FormCtrl: this.FormCtrl
	    };
	  };
	
	  AvCheckboxGroup.prototype.componentDidMount = function componentDidMount() {
	    this.value = this.props.value || this.getDefaultValue().value;
	    this.setState({ value: this.value });
	    this.updateValidations();
	  };
	
	  AvCheckboxGroup.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.name !== this.props.name) {
	      this.context.FormCtrl.unregister(this);
	    }
	    if (prevProps.value !== this.props.value) {
	      this.value = this.props.value;
	      this.setState({ value: this.props.value });
	    }
	    if (!(0, _isEqual2.default)(prevProps, this.props)) {
	      this.updateValidations(this.props);
	    }
	  };
	
	  AvCheckboxGroup.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.context.FormCtrl.unregister(this);
	  };
	
	  AvCheckboxGroup.prototype.getValue = function getValue() {
	    return this.value;
	  };
	
	  AvCheckboxGroup.prototype.getInputState = function getInputState() {
	    return this.context.FormCtrl.getInputState(this.props.name);
	  };
	
	  AvCheckboxGroup.prototype.getDefaultValue = function getDefaultValue() {
	    var key = 'defaultValue';
	
	    var value = [];
	    if (!(0, _isUndefined2.default)(this.props[key])) {
	      value = this.props[key];
	    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
	      value = this.context.FormCtrl.getDefaultValue(this.props.name);
	    }
	
	    return { key: key, value: value };
	  };
	
	  AvCheckboxGroup.prototype.validate = function () {
	    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	      return _regenerator2.default.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this.context.FormCtrl.validate(this.props.name);
	
	            case 2:
	              this.updateInputs();
	
	            case 3:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));
	
	    function validate() {
	      return _ref2.apply(this, arguments);
	    }
	
	    return validate;
	  }();
	
	  AvCheckboxGroup.prototype.update = function update() {
	    this.setState({});
	    this.updateInputs();
	  };
	
	  AvCheckboxGroup.prototype.updateValidations = function updateValidations() {
	    var _this3 = this;
	
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	    this.validations = (0, _assign2.default)({}, props.validate);
	
	    (0, _keys2.default)(props).filter(function (val) {
	      return htmlValidationAttrs.indexOf(val) > -1;
	    }).forEach(function (attr) {
	      if (props[attr]) {
	        _this3.validations[attr] = _this3.validations[attr] || {
	          value: props[attr]
	        };
	      } else {
	        delete _this3.validations[attr];
	      }
	    });
	
	    this.context.FormCtrl.register(this, this.update.bind(this));
	    this.validate();
	  };
	
	  AvCheckboxGroup.prototype.updateInputs = function updateInputs() {
	    this._inputs.forEach(function (input) {
	      return (0, _reactDom.findDOMNode)(input).firstChild.setCustomValidity('Invalid.') && input.setState.call(input, {});
	    });
	
	    this.setState({});
	  };
	
	  AvCheckboxGroup.prototype.reset = function reset() {
	    this.value = this.getDefaultValue().value;
	    this.context.FormCtrl.setDirty(this.props.name, false);
	    this.context.FormCtrl.setTouched(this.props.name, false);
	    this.context.FormCtrl.setBad(this.props.name, false);
	    this.setState({ value: this.value });
	    this.validate();
	    this.props.onReset && this.props.onReset(this.value);
	  };
	
	  AvCheckboxGroup.prototype.registerInput = function registerInput(input) {
	    if (this._inputs.indexOf(input) < 0) {
	      this._inputs.push(input);
	    }
	  };
	
	  AvCheckboxGroup.prototype.unregisterInput = function unregisterInput(input) {
	    this._inputs = this._inputs.filter(function (ipt) {
	      return ipt !== input;
	    });
	  };
	
	  AvCheckboxGroup.prototype.render = function render() {
	    var legend = this.props.label ? _react2.default.createElement(
	      'legend',
	      null,
	      this.props.label
	    ) : '';
	    var validation = this.getInputState();
	    var _props = this.props,
	        omit1 = _props.errorMessage,
	        omit2 = _props.validate,
	        omit3 = _props.validationEvent,
	        omit4 = _props.state,
	        omit5 = _props.label,
	        omit6 = _props.required,
	        omit7 = _props.inline,
	        children = _props.children,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);
	
	
	    var touched = this.context.FormCtrl.isTouched(this.props.name);
	    var hasError = this.context.FormCtrl.hasError(this.props.name);
	
	    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');
	
	    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');
	
	    return _react2.default.createElement(
	      _reactstrap.FormGroup,
	      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
	      legend,
	      _react2.default.createElement(
	        'div',
	        { className: classes },
	        children
	      ),
	      _react2.default.createElement(
	        _AvFeedback2.default,
	        null,
	        validation.errorMessage
	      )
	    );
	  };
	
	  return AvCheckboxGroup;
	}(_react.Component);
	
	AvCheckboxGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes, {
	  name: _propTypes2.default.string.isRequired
	});
	AvCheckboxGroup.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvCheckboxGroup.childContextTypes = {
	  Group: _propTypes2.default.object.isRequired,
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	exports.default = AvCheckboxGroup;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _AvInput = __webpack_require__(38);
	
	var _AvInput2 = _interopRequireDefault(_AvInput);
	
	var _AvGroup = __webpack_require__(82);
	
	var _AvGroup2 = _interopRequireDefault(_AvGroup);
	
	var _AvFeedback = __webpack_require__(37);
	
	var _AvFeedback2 = _interopRequireDefault(_AvFeedback);
	
	var _reactstrap = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
	
	var AvField = function (_Component) {
	  (0, _inherits3.default)(AvField, _Component);
	
	  function AvField() {
	    (0, _classCallCheck3.default)(this, AvField);
	    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
	  }
	
	  AvField.prototype.getChildContext = function getChildContext() {
	    var _this2 = this;
	
	    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
	    var registerValidator = this.FormCtrl.register;
	    this.FormCtrl.register = function (input) {
	      var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);
	
	      registerValidator(input, function () {
	        _this2.setState({});
	        if (updater) updater({});
	      });
	    };
	    return {
	      FormCtrl: this.FormCtrl
	    };
	  };
	
	  AvField.prototype.render = function render() {
	    var row = false;
	    var col = {};
	    var labelCol = {};
	    var _props = this.props,
	        helpMessage = _props.helpMessage,
	        label = _props.label,
	        labelHidden = _props.labelHidden,
	        inputClass = _props.inputClass,
	        labelClass = _props.labelClass,
	        children = _props.children,
	        _props$id = _props.id,
	        id = _props$id === undefined ? this.props.name : _props$id,
	        size = _props.size,
	        disabled = _props.disabled,
	        readOnly = _props.readOnly,
	        grid = _props.grid,
	        labelAttrs = _props.labelAttrs,
	        groupAttrs = _props.groupAttrs,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['helpMessage', 'label', 'labelHidden', 'inputClass', 'labelClass', 'children', 'id', 'size', 'disabled', 'readOnly', 'grid', 'labelAttrs', 'groupAttrs']);
	
	
	    if (grid) {
	      colSizes.forEach(function (colSize) {
	        if (grid[colSize]) {
	          row = true;
	          var sizeNum = parseInt(grid[colSize], 10);
	          col[colSize] = sizeNum;
	          labelCol[colSize] = 12 - sizeNum;
	        }
	      });
	    }
	
	    var input = _react2.default.createElement(
	      _AvInput2.default,
	      (0, _extends3.default)({
	        id: id,
	        className: inputClass,
	        size: size,
	        disabled: disabled,
	        readOnly: readOnly
	      }, attributes),
	      children
	    );
	
	    var validation = this.context.FormCtrl.getInputState(this.props.name);
	
	    var feedback = validation.errorMessage ? _react2.default.createElement(
	      _AvFeedback2.default,
	      null,
	      validation.errorMessage
	    ) : null;
	    var help = helpMessage ? _react2.default.createElement(
	      _reactstrap.FormText,
	      null,
	      helpMessage
	    ) : null;
	    var inputRow = row ? _react2.default.createElement(
	      _reactstrap.Col,
	      col,
	      input,
	      feedback,
	      help
	    ) : input;
	    var check = attributes.type === 'checkbox';
	
	    if ((check || attributes.type === "radio" || attributes.type === "switch") && (attributes.tag === _reactstrap.CustomInput || Array.isArray(attributes.tag) && attributes.tag[0] === _reactstrap.CustomInput)) {
	      return _react2.default.createElement(
	        _AvGroup2.default,
	        { className: 'mb-0' },
	        _react2.default.createElement(
	          _AvInput2.default,
	          this.props,
	          feedback,
	          help
	        )
	      );
	    }
	
	    return _react2.default.createElement(
	      _AvGroup2.default,
	      (0, _extends3.default)({ check: check, disabled: disabled, row: row }, groupAttrs),
	      check && inputRow,
	      label && _react2.default.createElement(
	        _reactstrap.Label,
	        (0, _extends3.default)({
	          'for': id,
	          className: labelClass,
	          hidden: labelHidden,
	          size: size
	        }, labelCol, labelAttrs),
	        label
	      ),
	      !check && inputRow,
	      !row && feedback,
	      !row && help
	    );
	  };
	
	  return AvField;
	}(_react.Component);
	
	AvField.propTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, {
	  label: _propTypes2.default.node,
	  labelHidden: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  readOnly: _propTypes2.default.bool,
	  id: _propTypes2.default.string,
	  inputClass: _propTypes2.default.string,
	  labelClass: _propTypes2.default.string,
	  helpMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  labelAttrs: _propTypes2.default.object,
	  groupAttrs: _propTypes2.default.object,
	  grid: _propTypes2.default.object
	});
	AvField.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvField.childContextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	exports.default = AvField;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(87);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _regenerator = __webpack_require__(57);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _keys = __webpack_require__(40);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _asyncToGenerator2 = __webpack_require__(55);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _typeof2 = __webpack_require__(56);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _AvInputContainer = __webpack_require__(83);
	
	var _AvInputContainer2 = _interopRequireDefault(_AvInputContainer);
	
	var _AvValidator = __webpack_require__(84);
	
	var _AvValidator2 = _interopRequireDefault(_AvValidator);
	
	var _reactstrap = __webpack_require__(17);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _get2 = __webpack_require__(52);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _set2 = __webpack_require__(287);
	
	var _set3 = _interopRequireDefault(_set2);
	
	var _throttle2 = __webpack_require__(290);
	
	var _throttle3 = _interopRequireDefault(_throttle2);
	
	var _isString = __webpack_require__(120);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getInputErrorMessage = function getInputErrorMessage(input, ruleName) {
	  var errorMessage = input && input.props && input.props.errorMessage;
	
	  if ((typeof errorMessage === 'undefined' ? 'undefined' : (0, _typeof3.default)(errorMessage)) === 'object') {
	    return errorMessage[ruleName];
	  }
	  return errorMessage;
	};
	
	var AvForm = function (_InputContainer) {
	  (0, _inherits3.default)(AvForm, _InputContainer);
	
	  function AvForm() {
	    var _this2 = this;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AvForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _InputContainer.call.apply(_InputContainer, [this].concat(args))), _this), _this._isMounted = false, _this.state = {
	      invalidInputs: {},
	      dirtyInputs: {},
	      touchedInputs: {},
	      badInputs: {},
	      submitted: false
	    }, _this.validations = {}, _this.handleSubmit = function () {
	      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
	        var savedEvent, values, _ref2, isValid, errors;
	
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                savedEvent = e;
	
	
	                if (_this.props.beforeSubmitValidation) {
	                  _this.props.beforeSubmitValidation(savedEvent);
	                }
	
	                if (typeof e.preventDefault === 'function') {
	                  e.preventDefault();
	                }
	
	                if (!_this.props.disabled) {
	                  _context.next = 5;
	                  break;
	                }
	
	                return _context.abrupt('return');
	
	              case 5:
	                values = _this.getValues();
	                _context.next = 8;
	                return _this.validateAll(values, false);
	
	              case 8:
	                _ref2 = _context.sent;
	                isValid = _ref2.isValid;
	                errors = _ref2.errors;
	
	
	                _this.setTouched((0, _keys2.default)(_this._inputs), true, false);
	
	                _this.updateInputs();
	
	                _this.props.onSubmit(savedEvent, errors, values);
	                if (isValid) {
	                  _this.props.onValidSubmit(savedEvent, values);
	                } else {
	                  _this.props.onInvalidSubmit(savedEvent, errors, values);
	                }
	
	                !_this.state.submitted && _this._isMounted && _this.setState({ submitted: true });
	
	              case 16:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2);
	      }));
	
	      return function (_x) {
	        return _ref.apply(this, arguments);
	      };
	    }(), _this.handleNonFormSubmission = function (event) {
	      var savedEvent = event;
	      if (_this.props.onKeyDown(event) !== false) {
	        if (event.type === 'keydown' && (event.which === 13 || event.keyCode === 13 || event.key === 'Enter')) {
	          event.stopPropagation();
	          event.preventDefault();
	          _this.handleSubmit(savedEvent);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  AvForm.prototype.getChildContext = function getChildContext() {
	    var _this3 = this;
	
	    return {
	      FormCtrl: {
	        getDefaultValue: this.getDefaultValue.bind(this),
	        getInputState: this.getInputState.bind(this),
	        getInput: function getInput(name) {
	          return _this3._inputs[name];
	        },
	        getInputValue: this.getValue.bind(this),
	        getValues: this.getValues.bind(this),
	        hasError: this.hasError.bind(this),
	        isDirty: this.isDirty.bind(this),
	        isTouched: this.isTouched.bind(this),
	        isBad: this.isBad.bind(this),
	        isDisabled: function isDisabled() {
	          return _this3.props.disabled;
	        },
	        isReadOnly: function isReadOnly() {
	          return _this3.props.readOnly;
	        },
	        setDirty: this.setDirty.bind(this),
	        setTouched: this.setTouched.bind(this),
	        setBad: this.setBad.bind(this),
	        register: this.registerInput.bind(this),
	        unregister: this.unregisterInput.bind(this),
	        validate: this.validateInput.bind(this),
	        getValidationEvent: function getValidationEvent() {
	          return _this3.props.validationEvent;
	        },
	        parent: this.context.FormCtrl || null
	      }
	    };
	  };
	
	  AvForm.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	  };
	
	  AvForm.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    _InputContainer.prototype.componentDidMount.call(this);
	
	    this._validators = {};
	  };
	
	  AvForm.prototype.registerInput = function registerInput(input, updater) {
	    _InputContainer.prototype.registerInput.call(this, input, updater);
	
	    if ((0, _typeof3.default)(input.validations) === 'object') {
	      this._validators[input.props.name] = this.compileValidationRules(input, input.validations);
	    }
	  };
	
	  AvForm.prototype.unregisterInput = function unregisterInput(input) {
	    _InputContainer.prototype.unregisterInput.call(this, input);
	
	    delete this._validators[input.props.name];
	    this.setError(input.props.name, false);
	    this.setDirty(input.props.name, false);
	    this.setTouched(input.props.name, false);
	    this.setBad(input.props.name, false);
	  };
	
	  AvForm.prototype.render = function render() {
	    var _props = this.props,
	        Tag = _props.tag,
	        omit1 = _props.errorMessage,
	        omit2 = _props.model,
	        omit3 = _props.onValidSubmit,
	        omit4 = _props.onInvalidSubmit,
	        omit5 = _props.validate,
	        omit6 = _props.validateOne,
	        omit7 = _props.validateAll,
	        omit8 = _props.validationEvent,
	        omit9 = _props.disabled,
	        omit10 = _props.readOnly,
	        omit11 = _props.beforeSubmitValidation,
	        className = _props.className,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['tag', 'errorMessage', 'model', 'onValidSubmit', 'onInvalidSubmit', 'validate', 'validateOne', 'validateAll', 'validationEvent', 'disabled', 'readOnly', 'beforeSubmitValidation', 'className']);
	
	
	    var classes = (0, _classnames2.default)(className, this.state.submitted ? 'av-submitted' : false, (0, _keys2.default)(this.state.invalidInputs).length > 0 ? 'av-invalid' : 'av-valid');
	
	    if (Tag !== 'form' && Tag !== _reactstrap.Form) {
	      attributes.onKeyDown = this.handleNonFormSubmission;
	    }
	
	    return _react2.default.createElement(Tag, (0, _extends3.default)({ noValidate: true,
	      action: '#'
	    }, attributes, {
	      className: classes,
	      onSubmit: this.handleSubmit
	    }));
	  };
	
	  AvForm.prototype.getValues = function getValues() {
	    var _this4 = this;
	
	    return (0, _keys2.default)(this._inputs).reduce(function (values, inputName) {
	      (0, _set3.default)(values, inputName, _this4.getValue(inputName));
	
	      return values;
	    }, {});
	  };
	
	  AvForm.prototype.submit = function submit() {
	    this.handleSubmit.apply(this, arguments);
	  };
	
	  AvForm.prototype.reset = function reset() {
	    var _this5 = this;
	
	    (0, _keys2.default)(this._inputs).forEach(function (inputName) {
	      return _this5._inputs[inputName] && _this5._inputs[inputName].reset();
	    });
	  };
	
	  AvForm.prototype.updateInputs = function updateInputs() {
	    var _this6 = this;
	
	    if (this.throttledUpdateInputs) {
	      this.throttledUpdateInputs();
	      return;
	    }
	    // this is just until a more intelligent way to determine which inputs need updated is implemented in v3
	    this.throttledUpdateInputs = (0, _throttle3.default)(function () {
	      (0, _keys2.default)(_this6._updaters).forEach(function (inputName) {
	        return _this6._updaters[inputName] && _this6._inputs[inputName] && _this6._updaters[inputName].call(_this6._inputs[inputName], {});
	      });
	    }, 250);
	    this.updateInputs();
	  };
	
	  AvForm.prototype.validateInput = function () {
	    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {
	      return _regenerator2.default.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this.validateOne(name, this.getValues());
	
	            case 2:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));
	
	    function validateInput(_x2) {
	      return _ref3.apply(this, arguments);
	    }
	
	    return validateInput;
	  }();
	
	  AvForm.prototype.getInputState = function getInputState(inputName) {
	    var errorMessage = void 0;
	    var error = this.isTouched(inputName) && this.hasError(inputName);
	    var color = void 0;
	
	    if (error) {
	      errorMessage = this.state.invalidInputs[inputName];
	      color = 'danger';
	      if (!(0, _isString2.default)(errorMessage)) {
	        errorMessage = 'This field is invalid';
	      }
	    }
	
	    return { color: color, error: error, errorMessage: errorMessage };
	  };
	
	  AvForm.prototype.hasError = function hasError(inputName) {
	    return inputName ? !!this.state.invalidInputs[inputName] : (0, _keys2.default)(this.state.invalidInputs).length > 0;
	  };
	
	  AvForm.prototype.isDirty = function isDirty(inputName) {
	    return inputName ? !!this.state.dirtyInputs[inputName] : (0, _keys2.default)(this.state.dirtyInputs).length > 0;
	  };
	
	  AvForm.prototype.isTouched = function isTouched(inputName) {
	    return inputName ? !!this.state.touchedInputs[inputName] : (0, _keys2.default)(this.state.touchedInputs).length > 0;
	  };
	
	  AvForm.prototype.isBad = function isBad(inputName) {
	    return inputName ? !!this.state.badInputs[inputName] : (0, _keys2.default)(this.state.badInputs).length > 0;
	  };
	
	  AvForm.prototype.setError = function setError(inputName) {
	    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var _this7 = this;
	
	    var errText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : error;
	    var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	    if (error && !(0, _isString2.default)(errText) && typeof errText !== 'boolean') {
	      errText = errText + '';
	    }
	    var changed = false;
	    var currentError = this.hasError(inputName);
	    var invalidInputs = this.state.invalidInputs;
	
	    if ((invalidInputs[inputName] === undefined && !error || invalidInputs[inputName] === (errText || true)) && error === currentError) return;
	    if (error) {
	      invalidInputs[inputName] = errText || true;
	      changed = true;
	    } else {
	      delete invalidInputs[inputName];
	      changed = true;
	    }
	
	    if (!changed) return;
	
	    invalidInputs = (0, _extends3.default)({}, this.state.invalidInputs);
	    this.setState({ invalidInputs: invalidInputs }, function () {
	      if (update) _this7.updateInputs();
	    });
	  };
	
	  AvForm.prototype.setDirty = function setDirty(inputs) {
	    var _this8 = this;
	
	    var dirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	    var dirtyInputs = this.state.dirtyInputs;
	    var changed = false;
	    if (!Array.isArray(inputs)) {
	      inputs = [inputs];
	    }
	    inputs.forEach(function (inputName) {
	      if (dirty && !dirtyInputs[inputName]) {
	        dirtyInputs[inputName] = true;
	        changed = true;
	      } else if (!dirty && dirtyInputs[inputName]) {
	        delete dirtyInputs[inputName];
	        changed = true;
	      }
	    });
	
	    if (!changed) return;
	
	    dirtyInputs = (0, _extends3.default)({}, this.state.dirtyInputs);
	    this.setState({ dirtyInputs: dirtyInputs }, function () {
	      if (update) _this8.updateInputs();
	    });
	  };
	
	  AvForm.prototype.setTouched = function setTouched(inputs) {
	    var _this9 = this;
	
	    var touched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	    var touchedInputs = this.state.touchedInputs;
	    var changed = false;
	    if (!Array.isArray(inputs)) {
	      inputs = [inputs];
	    }
	    inputs.forEach(function (inputName) {
	      if (touched && !touchedInputs[inputName]) {
	        touchedInputs[inputName] = true;
	        changed = true;
	      } else if (!touched && touchedInputs[inputName]) {
	        delete touchedInputs[inputName];
	        changed = true;
	      }
	    });
	
	    if (!changed) return;
	
	    touchedInputs = (0, _extends3.default)({}, this.state.touchedInputs);
	    this.setState({ touchedInputs: touchedInputs }, function () {
	      if (update) _this9.updateInputs();
	    });
	  };
	
	  AvForm.prototype.setBad = function setBad(inputs) {
	    var _this10 = this;
	
	    var isBad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	    var badInputs = this.state.badInputs;
	    var changed = false;
	    if (!Array.isArray(inputs)) {
	      inputs = [inputs];
	    }
	    inputs.forEach(function (inputName) {
	      if (isBad && !badInputs[inputName]) {
	        badInputs[inputName] = true;
	        changed = true;
	      } else if (!isBad && badInputs[inputName]) {
	        delete badInputs[inputName];
	        changed = true;
	      }
	    });
	
	    if (!changed) return;
	
	    badInputs = (0, _extends3.default)({}, this.state.badInputs);
	    this.setState({ badInputs: badInputs }, function () {
	      if (update) _this10.updateInputs();
	    });
	  };
	
	  AvForm.prototype.validateOne = function () {
	    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(inputName, context) {
	      var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	      var input, value, validate, isValid, result, error;
	      return _regenerator2.default.wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              input = this._inputs[inputName];
	
	              if (!Array.isArray(input)) {
	                _context3.next = 3;
	                break;
	              }
	
	              throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');
	
	            case 3:
	              value = (0, _get3.default)(context, inputName);
	              validate = input.validations;
	              isValid = true;
	              result = void 0;
	              error = void 0;
	
	              if (!(typeof validate === 'function')) {
	                _context3.next = 14;
	                break;
	              }
	
	              _context3.next = 11;
	              return validate(value, context, input);
	
	            case 11:
	              result = _context3.sent;
	              _context3.next = 21;
	              break;
	
	            case 14:
	              if (!((typeof validate === 'undefined' ? 'undefined' : (0, _typeof3.default)(validate)) === 'object')) {
	                _context3.next = 20;
	                break;
	              }
	
	              _context3.next = 17;
	              return this._validators[inputName](value, context);
	
	            case 17:
	              result = _context3.sent;
	              _context3.next = 21;
	              break;
	
	            case 20:
	              result = true;
	
	            case 21:
	
	              if (result !== true) {
	                isValid = false;
	
	                if ((0, _isString2.default)(result)) {
	                  error = result;
	                }
	              }
	
	              this.setError(inputName, !isValid, error, update);
	
	              return _context3.abrupt('return', isValid);
	
	            case 24:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _callee3, this);
	    }));
	
	    function validateOne(_x12, _x13) {
	      return _ref4.apply(this, arguments);
	    }
	
	    return validateOne;
	  }();
	
	  AvForm.prototype.validateAll = function () {
	    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(context) {
	      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var errors, isValid, inputName, valid, formLevelValidation;
	      return _regenerator2.default.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              errors = [];
	              isValid = true;
	              _context4.t0 = _regenerator2.default.keys(this._inputs);
	
	            case 3:
	              if ((_context4.t1 = _context4.t0()).done) {
	                _context4.next = 12;
	                break;
	              }
	
	              inputName = _context4.t1.value;
	
	              if (!this._inputs.hasOwnProperty(inputName)) {
	                _context4.next = 10;
	                break;
	              }
	
	              _context4.next = 8;
	              return this.validateOne(inputName, context, update);
	
	            case 8:
	              valid = _context4.sent;
	
	              if (!valid) {
	                isValid = false;
	                errors.push(inputName);
	              }
	
	            case 10:
	              _context4.next = 3;
	              break;
	
	            case 12:
	
	              if (this.props.validate) {
	                formLevelValidation = this.props.validate;
	
	                if (!Array.isArray(formLevelValidation)) {
	                  formLevelValidation = [formLevelValidation];
	                }
	
	                if (!formLevelValidation.every(function (validationFn) {
	                  return validationFn(context);
	                })) {
	                  isValid = false;
	                  errors.push('*');
	                }
	              }
	
	              return _context4.abrupt('return', {
	                isValid: isValid,
	                errors: errors
	              });
	
	            case 14:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, _callee4, this);
	    }));
	
	    function validateAll(_x15) {
	      return _ref5.apply(this, arguments);
	    }
	
	    return validateAll;
	  }();
	
	  AvForm.prototype.compileValidationRules = function compileValidationRules(input, ruleProp) {
	    var _this11 = this;
	
	    return function () {
	      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(val, context) {
	        var result, validations, _loop, rule;
	
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                if (!_this11.isBad(input.props.name)) {
	                  _context5.next = 2;
	                  break;
	                }
	
	                return _context5.abrupt('return', false);
	
	              case 2:
	                result = true;
	                validations = [];
	
	                _loop = function _loop(rule) {
	                  /* istanbul ignore else  */
	                  if (ruleProp.hasOwnProperty(rule)) {
	                    var ruleResult = void 0;
	
	                    var promise = new _promise2.default(function (resolve, reject) {
	                      var callback = function callback(value) {
	                        return resolve({ value: value, rule: rule });
	                      };
	
	                      if (typeof ruleProp[rule] === 'function') {
	                        ruleResult = ruleProp[rule](val, context, input, callback);
	                      } else {
	                        if (typeof _AvValidator2.default[rule] !== 'function') {
	                          return reject(new Error('Invalid input validation rule: "' + rule + '"'));
	                        }
	
	                        if (ruleProp[rule].enabled === false) {
	                          ruleResult = true;
	                        } else {
	                          ruleResult = _AvValidator2.default[rule](val, context, ruleProp[rule], input, callback);
	                        }
	                      }
	
	                      if (ruleResult && typeof ruleResult.then === 'function') {
	                        ruleResult.then(callback);
	                      } else if (ruleResult !== undefined) {
	                        callback(ruleResult);
	                      } else {
	                        // they are using the callback
	                      }
	                    });
	
	                    validations.push(promise);
	                  }
	                };
	
	                for (rule in ruleProp) {
	                  _loop(rule);
	                }
	
	                _context5.next = 8;
	                return _promise2.default.all(validations).then(function (results) {
	                  results.every(function (ruleResult) {
	                    if (result === true && ruleResult.value !== true) {
	                      result = (0, _isString2.default)(ruleResult.value) && ruleResult.value || getInputErrorMessage(input, ruleResult.rule) || getInputErrorMessage(_this11, ruleResult.rule) || false;
	                    }
	                    return result === true;
	                  });
	                });
	
	              case 8:
	                return _context5.abrupt('return', result);
	
	              case 9:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, _this11);
	      }));
	
	      return function (_x17, _x18) {
	        return _ref6.apply(this, arguments);
	      };
	    }();
	  };
	
	  AvForm.prototype.getDefaultValue = function getDefaultValue(inputName) {
	    return (0, _get3.default)(this.props.model, inputName);
	  };
	
	  AvForm.prototype.getValue = function getValue(inputName) {
	    var input = this._inputs[inputName];
	
	    if (!input) return undefined;
	
	    if (Array.isArray(input)) {
	      throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');
	    }
	
	    return input.getValue();
	  };
	
	  return AvForm;
	}(_AvInputContainer2.default);
	
	AvForm.childContextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvForm.contextTypes = {
	  FormCtrl: _propTypes2.default.object
	};
	AvForm.propTypes = {
	  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
	  className: _propTypes2.default.string,
	  model: _propTypes2.default.object,
	  method: _propTypes2.default.oneOf(['get', 'post']),
	  onSubmit: _propTypes2.default.func,
	  beforeSubmitValidation: _propTypes2.default.func,
	  validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.array]),
	  onValidSubmit: _propTypes2.default.func,
	  onInvalidSubmit: _propTypes2.default.func,
	  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
	  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.node]),
	  disabled: _propTypes2.default.bool,
	  readOnly: _propTypes2.default.bool
	};
	AvForm.defaultProps = {
	  tag: _reactstrap.Form,
	  model: {},
	  validationEvent: ['onChange', 'onInput'],
	  method: 'get',
	  onSubmit: function onSubmit() {},
	  onKeyDown: function onKeyDown() {},
	  onValidSubmit: function onValidSubmit() {},
	  onInvalidSubmit: function onInvalidSubmit() {}
	};
	exports.default = AvForm;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactstrap = __webpack_require__(17);
	
	var _AvInput = __webpack_require__(38);
	
	var _AvInput2 = _interopRequireDefault(_AvInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var radioPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
	delete radioPropTypes.name;
	
	var AvRadio = function (_Component) {
	  (0, _inherits3.default)(AvRadio, _Component);
	
	  function AvRadio() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AvRadio);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  AvRadio.prototype.componentDidMount = function componentDidMount() {
	    this.context.FormCtrl && this.context.FormCtrl.register(this);
	  };
	
	  AvRadio.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
	  };
	
	  AvRadio.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        id = _props.id,
	        customInput = _props.customInput,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);
	
	
	    var groupProps = this.context.Group.getProps();
	
	    var touched = this.context.FormCtrl.isTouched(groupProps.name);
	    var hasError = this.context.FormCtrl.hasError(groupProps.name);
	
	    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');
	
	    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
	      attributes.disabled = this.context.FormCtrl.isDisabled();
	    }
	
	    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
	      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
	    }
	
	    if (customInput) {
	      return _react2.default.createElement(_reactstrap.CustomInput, (0, _extends3.default)({ name: groupProps.name,
	        type: 'radio'
	      }, attributes, {
	        inline: groupProps.inline,
	        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
	        className: classes,
	        onChange: this.onChangeHandler,
	        checked: this.props.value === groupProps.value,
	        value: this.props.value && this.props.value.toString(),
	        required: groupProps.required,
	        label: this.props.label
	      }));
	    }
	
	    return _react2.default.createElement(
	      _reactstrap.FormGroup,
	      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
	      _react2.default.createElement(_reactstrap.Input, (0, _extends3.default)({
	        name: groupProps.name,
	        type: 'radio'
	      }, attributes, {
	        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
	        className: classes,
	        onChange: this.onChangeHandler,
	        checked: this.props.value === groupProps.value,
	        value: this.props.value && this.props.value.toString(),
	        required: groupProps.required
	      })),
	      _react2.default.createElement(
	        _reactstrap.Label,
	        { check: true, 'for': id || 'radio-' + groupProps.name + '-' + this.props.value },
	        this.props.label
	      )
	    );
	  };
	
	  return AvRadio;
	}(_react.Component);
	
	AvRadio.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
	  Group: _propTypes2.default.object.isRequired
	});
	AvRadio.propTypes = radioPropTypes;
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.onChangeHandler = function (event) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    _this2.context.Group.update(event, _this2.props.value);
	    if (_this2.props.onChange) {
	      var _props2;
	
	      (_props2 = _this2.props).onChange.apply(_props2, [event].concat(args));
	    }
	  };
	};
	
	exports.default = AvRadio;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectWithoutProperties2 = __webpack_require__(22);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _keys = __webpack_require__(40);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(10);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _regenerator = __webpack_require__(57);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(55);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _extends2 = __webpack_require__(11);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(6);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(8);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(7);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(9);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(78);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _isUndefined = __webpack_require__(54);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _reactstrap = __webpack_require__(17);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _AvFeedback = __webpack_require__(37);
	
	var _AvFeedback2 = _interopRequireDefault(_AvFeedback);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var htmlValidationAttrs = ['required'];
	
	var noop = function noop() {};
	
	var AvRadioGroup = function (_Component) {
	  (0, _inherits3.default)(AvRadioGroup, _Component);
	
	  function AvRadioGroup() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AvRadioGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      invalidInputs: {},
	      dirtyInputs: {},
	      touchedInputs: {},
	      badInputs: {},
	      validate: {},
	      value: ''
	    }, _this._inputs = [], _this.value = '', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  AvRadioGroup.prototype.getChildContext = function getChildContext() {
	    var _this2 = this;
	
	    if (!this.FormCtrl) {
	      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
	      this.FormCtrl.register = this.registerInput.bind(this);
	      this.FormCtrl.unregister = this.unregisterInput.bind(this);
	      this.FormCtrl.validate = noop;
	    }
	
	    var updateGroup = function () {
	      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this2.setState({ value: value });
	                _this2.value = value;
	                _context.next = 4;
	                return _this2.validate();
	
	              case 4:
	                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
	                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
	                _this2.props.onChange && _this2.props.onChange(e, value);
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2);
	      }));
	
	      return function updateGroup(_x, _x2) {
	        return _ref.apply(this, arguments);
	      };
	    }();
	
	    return {
	      Group: {
	        getProps: function getProps() {
	          return {
	            name: _this2.props.name,
	            inline: _this2.props.inline,
	            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
	            value: _this2.value
	          };
	        },
	        update: updateGroup,
	        getValue: function getValue() {
	          return _this2.value;
	        },
	        getInputState: this.getInputState.bind(this)
	      },
	      FormCtrl: this.FormCtrl
	    };
	  };
	
	  AvRadioGroup.prototype.componentDidMount = function componentDidMount() {
	    this.value = this.props.value || this.getDefaultValue().value;
	    this.setState({ value: this.value });
	    this.updateValidations();
	  };
	
	  AvRadioGroup.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.name !== this.props.name) {
	      this.context.FormCtrl.unregister(this);
	    }
	    if (prevProps.value !== this.props.value) {
	      this.value = this.props.value;
	      this.setState({ value: this.props.value });
	    }
	    if (!(0, _isEqual2.default)(prevProps, this.props)) {
	      this.updateValidations(this.props);
	    }
	  };
	
	  AvRadioGroup.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.context.FormCtrl.unregister(this);
	  };
	
	  AvRadioGroup.prototype.getValue = function getValue() {
	    return this.value;
	  };
	
	  AvRadioGroup.prototype.getInputState = function getInputState() {
	    return this.context.FormCtrl.getInputState(this.props.name);
	  };
	
	  AvRadioGroup.prototype.getDefaultValue = function getDefaultValue() {
	    var key = 'defaultValue';
	
	    var value = '';
	    if (!(0, _isUndefined2.default)(this.props[key])) {
	      value = this.props[key];
	    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
	      value = this.context.FormCtrl.getDefaultValue(this.props.name);
	    }
	
	    return { key: key, value: value };
	  };
	
	  AvRadioGroup.prototype.validate = function () {
	    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	      return _regenerator2.default.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this.context.FormCtrl.validate(this.props.name);
	
	            case 2:
	              this.updateInputs();
	
	            case 3:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));
	
	    function validate() {
	      return _ref2.apply(this, arguments);
	    }
	
	    return validate;
	  }();
	
	  AvRadioGroup.prototype.update = function update() {
	    this.setState({});
	    this.updateInputs();
	  };
	
	  AvRadioGroup.prototype.updateValidations = function updateValidations() {
	    var _this3 = this;
	
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	    this.validations = (0, _assign2.default)({}, props.validate);
	
	    (0, _keys2.default)(props).filter(function (val) {
	      return htmlValidationAttrs.indexOf(val) > -1;
	    }).forEach(function (attr) {
	      if (props[attr]) {
	        _this3.validations[attr] = _this3.validations[attr] || {
	          value: props[attr]
	        };
	      } else {
	        delete _this3.validations[attr];
	      }
	    });
	
	    this.context.FormCtrl.register(this, this.update.bind(this));
	    this.validate();
	  };
	
	  AvRadioGroup.prototype.updateInputs = function updateInputs() {
	    this._inputs.forEach(function (input) {
	      return input.setState.call(input, {});
	    });
	    this.setState({});
	  };
	
	  AvRadioGroup.prototype.reset = function reset() {
	    this.value = this.getDefaultValue().value;
	    this.context.FormCtrl.setDirty(this.props.name, false);
	    this.context.FormCtrl.setTouched(this.props.name, false);
	    this.context.FormCtrl.setBad(this.props.name, false);
	    this.setState({ value: this.value });
	    this.validate();
	    this.props.onReset && this.props.onReset(this.value);
	  };
	
	  AvRadioGroup.prototype.registerInput = function registerInput(input) {
	    if (this._inputs.indexOf(input) < 0) {
	      this._inputs.push(input);
	    }
	  };
	
	  AvRadioGroup.prototype.unregisterInput = function unregisterInput(input) {
	    this._inputs = this._inputs.filter(function (ipt) {
	      return ipt !== input;
	    });
	  };
	
	  AvRadioGroup.prototype.render = function render() {
	    var legend = this.props.label ? _react2.default.createElement(
	      'legend',
	      null,
	      this.props.label
	    ) : '';
	    var validation = this.getInputState();
	    var _props = this.props,
	        omit1 = _props.errorMessage,
	        omit2 = _props.validate,
	        omit3 = _props.validationEvent,
	        omit4 = _props.state,
	        omit5 = _props.label,
	        omit6 = _props.required,
	        omit7 = _props.inline,
	        children = _props.children,
	        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);
	
	
	    var touched = this.context.FormCtrl.isTouched(this.props.name);
	    var hasError = this.context.FormCtrl.hasError(this.props.name);
	
	    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');
	
	    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');
	
	    return _react2.default.createElement(
	      _reactstrap.FormGroup,
	      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
	      legend,
	      _react2.default.createElement(
	        'div',
	        { className: classes },
	        children
	      ),
	      _react2.default.createElement(
	        _AvFeedback2.default,
	        null,
	        validation.errorMessage
	      )
	    );
	  };
	
	  return AvRadioGroup;
	}(_react.Component);
	
	AvRadioGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes, {
	  name: _propTypes2.default.string.isRequired
	});
	AvRadioGroup.contextTypes = {
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	AvRadioGroup.childContextTypes = {
	  Group: _propTypes2.default.object.isRequired,
	  FormCtrl: _propTypes2.default.object.isRequired
	};
	exports.default = AvRadioGroup;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _dayjs = __webpack_require__(46);
	
	var _dayjs2 = _interopRequireDefault(_dayjs);
	
	var _customParseFormat = __webpack_require__(105);
	
	var _customParseFormat2 = _interopRequireDefault(_customParseFormat);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_dayjs2.default.extend(_customParseFormat2.default);
	
	var defaultFormat = 'MM/DD/YYYY';
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$format = _ref.format,
	      format = _ref$format === undefined ? defaultFormat : _ref$format,
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? 'Format needs to be ' + format : _ref$errorMessage;
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var date = (0, _dayjs2.default)(value, format);
	
	  if (format === defaultFormat && !date.isValid()) {
	    date = (0, _dayjs2.default)(value, _utils.isoDateFormat);
	  }
	
	  return date.isValid() || errorMessage;
	}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _dayjs = __webpack_require__(46);
	
	var _dayjs2 = _interopRequireDefault(_dayjs);
	
	var _isBetween = __webpack_require__(195);
	
	var _isBetween2 = _interopRequireDefault(_isBetween);
	
	var _customParseFormat = __webpack_require__(105);
	
	var _customParseFormat2 = _interopRequireDefault(_customParseFormat);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_dayjs2.default.extend(_isBetween2.default);
	_dayjs2.default.extend(_customParseFormat2.default);
	
	function setMin(value) {
	  value.set('hours', 0);
	  value.set('minutes', 0);
	  value.set('seconds', 0);
	
	  return value;
	}
	
	function setMax(value) {
	  value.set('hours', 23);
	  value.set('minutes', 59);
	  value.set('seconds', 59);
	
	  return value;
	}
	
	function getStartDate(start) {
	  return setMin((0, _dayjs2.default)().add(start.value, start.units));
	}
	
	function getEndDate(end) {
	  return setMax((0, _dayjs2.default)().add(end.value, end.units));
	}
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$format = _ref.format,
	      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
	      _ref$displayFormat = _ref.displayFormat,
	      displayFormat = _ref$displayFormat === undefined ? 'MM/DD/YYYY' : _ref$displayFormat,
	      _ref$start = _ref.start,
	      start = _ref$start === undefined ? {} : _ref$start,
	      _ref$end = _ref.end,
	      end = _ref$end === undefined ? {} : _ref$end,
	      errorMessage = _ref.errorMessage;
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var startDate = void 0;
	  var endDate = void 0;
	
	  var date = (0, _dayjs2.default)(value, format);
	
	  if (!date.isValid()) {
	    date = (0, _dayjs2.default)(value, _utils.isoDateFormat);
	  }
	  date = setMin(date);
	
	  if (!(0, _utils.isEmpty)(start.units) && !(0, _utils.isEmpty)(end.units)) {
	    startDate = getStartDate(start);
	    endDate = getEndDate(end);
	  } else {
	    startDate = (0, _dayjs2.default)(start.value, start.format || format);
	    endDate = setMax((0, _dayjs2.default)(end.value, end.format || format));
	  }
	  errorMessage = errorMessage || 'Date must be between ' + startDate.format(displayFormat) + ' and ' + endDate.format(displayFormat);
	  return date.isValid() && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) || errorMessage;
	}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _pattern = __webpack_require__(39);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$pattern = _ref.pattern,
	      pattern = _ref$pattern === undefined ? EMAIL_REGEXP : _ref$pattern,
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
	}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _utils = __webpack_require__(1);
	
	var _get = __webpack_require__(52);
	
	var _get2 = _interopRequireDefault(_get);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  return (0, _utils.isEmpty)(value) || value === (0, _get2.default)(context, constraint.value) || constraint.errorMessage || false;
	}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _dayjs = __webpack_require__(46);
	
	var _dayjs2 = _interopRequireDefault(_dayjs);
	
	var _isSameOrBefore = __webpack_require__(197);
	
	var _isSameOrBefore2 = _interopRequireDefault(_isSameOrBefore);
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	var _maxchecked = __webpack_require__(85);
	
	var _maxchecked2 = _interopRequireDefault(_maxchecked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_dayjs2.default.extend(_isSameOrBefore2.default);
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if (Array.isArray(input.value)) {
	    return (0, _maxchecked2.default)(value, context, constraint, input);
	  }
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
	    return (0, _dayjs2.default)(value, [_utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrBefore(constraint.value, 'day') || constraint.errorMessage || false;
	  }
	
	  var number = (0, _toNumber2.default)(value);
	
	  return !isNaN(number) && isFinite(number) && number <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
	}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var length = value.length;
	
	  return length <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _dayjs = __webpack_require__(46);
	
	var _dayjs2 = _interopRequireDefault(_dayjs);
	
	var _isSameOrAfter = __webpack_require__(196);
	
	var _isSameOrAfter2 = _interopRequireDefault(_isSameOrAfter);
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	var _minchecked = __webpack_require__(86);
	
	var _minchecked2 = _interopRequireDefault(_minchecked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_dayjs2.default.extend(_isSameOrAfter2.default);
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if (Array.isArray(input.value)) {
	    return (0, _minchecked2.default)(value, context, constraint, input);
	  }
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
	    return (0, _dayjs2.default)(value, [_utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrAfter(constraint.value, 'day') || constraint.errorMessage || false;
	  }
	
	  var number = (0, _toNumber2.default)(value);
	
	  return !isNaN(number) && isFinite(number) && number >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
	}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var length = value.length;
	
	  return length >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
	}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _utils = __webpack_require__(1);
	
	var INTEGER_REGEX = /^\d*$/;
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  value = value + '';
	
	  if (!INTEGER_REGEX.test(value) || value.length !== 10) {
	    return errorMessage;
	  }
	
	  var firstDigit = value.charAt(0);
	  if (['1', '2', '3', '4'].indexOf(firstDigit) < 0) {
	    return errorMessage;
	  }
	
	  var digit = parseInt(value.charAt(9), 10);
	  value = value.substring(0, 9);
	  value = '80840' + value;
	
	  var alternate = true;
	  var total = 0;
	
	  for (var i = value.length; i > 0; i--) {
	    var next = parseInt(value.charAt(i - 1), 10);
	    if (alternate) {
	      next = next * 2;
	      if (next > 9) {
	        next = next % 10 + 1;
	      }
	    }
	    total += next;
	    alternate = !alternate;
	  }
	
	  var roundUp = Math.ceil(total / 10) * 10;
	  var calculatedCheck = roundUp - total;
	
	  return calculatedCheck === digit || errorMessage;
	}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _isNumber = __webpack_require__(282);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  var number = (0, _toNumber2.default)(value);
	
	  return (0, _isNumber2.default)(number) && !isNaN(number) || errorMessage;
	}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _pattern = __webpack_require__(39);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NANP_REGEXP = /^(\+?1[\.\-\s]?)?\(?[2-9]\d{2}[\)\.\-\s]?\s?[2-9]\d{2}[\.\-\s]?\d{4}$/;
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$pattern = _ref.pattern,
	      pattern = _ref$pattern === undefined ? NANP_REGEXP : _ref$pattern,
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
	}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _utils = __webpack_require__(1);
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$value = _ref.value,
	      enabled = _ref$value === undefined ? true : _ref$value,
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  return !enabled || !(0, _utils.isEmpty)(value) || errorMessage || false;
	}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _toNumber = __webpack_require__(13);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getDecCount(val) {
	  var valStr = val.toString();
	  if (valStr.indexOf('e-') > -1) {
	    var valArr = valStr.split('e-');
	    return parseInt((valArr[0].split('.')[1] || '').length, 10) + parseInt(valArr[1], 10);
	  }
	  return (valStr.split('.')[1] || '').length;
	}
	
	// http://stackoverflow.com/a/31711034/1873485
	function floatSafeRemainder(val, step) {
	  var valDecCount = getDecCount(val);
	  var stepDecCount = getDecCount(step);
	  var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	  var valInt = parseInt(val.toFixed(decCount).replace('.', ''), 10);
	  var stepInt = parseInt(step.toFixed(decCount).replace('.', ''), 10);
	  return valInt % stepInt / Math.pow(10, decCount);
	}
	
	function validate(value, context) {
	  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if ((0, _utils.isEmpty)(value)) return true;
	
	  return floatSafeRemainder((0, _toNumber2.default)(value), (0, _toNumber2.default)(constraint.value)) === 0 || constraint.errorMessage || false;
	}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = validate;
	
	var _pattern = __webpack_require__(39);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// https://gist.github.com/dperini/729294
	var URL_REGEXP = new RegExp('^' +
	// protocol identifier
	'(?:(?:https?|ftps?|sftp)://)' +
	// user:pass authentication
	'(?:\\S+(?::\\S*)?@)?' + '(?:' +
	// IP address exclusion
	// private & local networks
	'(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
	// IP address dotted notation octets
	// excludes loopback network 0.0.0.0
	// excludes reserved space >= 224.0.0.0
	// excludes network & broacast addresses
	// (first & last IP address of each class)
	'(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' +
	// host name
	'(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
	// domain name
	'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
	// TLD identifier
	'(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
	// TLD may end with dot
	'\\.?' + ')' +
	// port number
	'(?::\\d{2,5})?' +
	// resource path
	'(?:[/?#]\\S*)?' + '$', 'i');
	
	function validate(value, context) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$pattern = _ref.pattern,
	      pattern = _ref$pattern === undefined ? URL_REGEXP : _ref$pattern,
	      _ref$errorMessage = _ref.errorMessage,
	      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;
	
	  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
	}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.AvValidator = exports.AvInputContainer = exports.AvBaseInput = exports.AvInput = exports.AvRadio = exports.AvRadioGroup = exports.AvGroup = exports.AvForm = exports.AvField = exports.AvFeedback = exports.AvCheckboxGroup = exports.AvCheckbox = undefined;
	
	var _AvCheckbox = __webpack_require__(126);
	
	var _AvCheckbox2 = _interopRequireDefault(_AvCheckbox);
	
	var _AvCheckboxGroup = __webpack_require__(127);
	
	var _AvCheckboxGroup2 = _interopRequireDefault(_AvCheckboxGroup);
	
	var _AvFeedback = __webpack_require__(37);
	
	var _AvFeedback2 = _interopRequireDefault(_AvFeedback);
	
	var _AvField = __webpack_require__(128);
	
	var _AvField2 = _interopRequireDefault(_AvField);
	
	var _AvForm = __webpack_require__(129);
	
	var _AvForm2 = _interopRequireDefault(_AvForm);
	
	var _AvGroup = __webpack_require__(82);
	
	var _AvGroup2 = _interopRequireDefault(_AvGroup);
	
	var _AvRadioGroup = __webpack_require__(131);
	
	var _AvRadioGroup2 = _interopRequireDefault(_AvRadioGroup);
	
	var _AvRadio = __webpack_require__(130);
	
	var _AvRadio2 = _interopRequireDefault(_AvRadio);
	
	var _AvInput = __webpack_require__(38);
	
	var _AvInput2 = _interopRequireDefault(_AvInput);
	
	var _AvBaseInput = __webpack_require__(81);
	
	var _AvBaseInput2 = _interopRequireDefault(_AvBaseInput);
	
	var _AvInputContainer = __webpack_require__(83);
	
	var _AvInputContainer2 = _interopRequireDefault(_AvInputContainer);
	
	var _AvValidator = __webpack_require__(84);
	
	var _AvValidator2 = _interopRequireDefault(_AvValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AvCheckbox = _AvCheckbox2.default;
	exports.AvCheckboxGroup = _AvCheckboxGroup2.default;
	exports.AvFeedback = _AvFeedback2.default;
	exports.AvField = _AvField2.default;
	exports.AvForm = _AvForm2.default;
	exports.AvGroup = _AvGroup2.default;
	exports.AvRadioGroup = _AvRadioGroup2.default;
	exports.AvRadio = _AvRadio2.default;
	exports.AvInput = _AvInput2.default;
	exports.AvBaseInput = _AvBaseInput2.default;
	exports.AvInputContainer = _AvInputContainer2.default;
	exports.AvValidator = _AvValidator2.default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(185);
	module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(186);
	var $Object = __webpack_require__(2).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(187);
	module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(188);
	module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(190);
	__webpack_require__(102);
	__webpack_require__(193);
	__webpack_require__(194);
	module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	__webpack_require__(104);
	module.exports = __webpack_require__(70).f('iterator');


/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 159 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30);
	var toLength = __webpack_require__(101);
	var toAbsoluteIndex = __webpack_require__(181);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35);
	var gOPS = __webpack_require__(63);
	var pIE = __webpack_require__(42);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(32);
	var call = __webpack_require__(166);
	var isArrayIter = __webpack_require__(164);
	var anObject = __webpack_require__(14);
	var toLength = __webpack_require__(101);
	var getIterFn = __webpack_require__(183);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(33);
	var ITERATOR = __webpack_require__(4)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(31);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(62);
	var descriptor = __webpack_require__(43);
	var setToStringTag = __webpack_require__(44);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(25)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(4)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 169 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(45)('meta');
	var isObject = __webpack_require__(19);
	var has = __webpack_require__(24);
	var setDesc = __webpack_require__(26).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(29)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var macrotask = __webpack_require__(100).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(31)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(35);
	var gOPS = __webpack_require__(63);
	var pIE = __webpack_require__(42);
	var toObject = __webpack_require__(67);
	var IObject = __webpack_require__(91);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(29)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(26);
	var anObject = __webpack_require__(14);
	var getKeys = __webpack_require__(35);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(30);
	var gOPN = __webpack_require__(94).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(24);
	var toObject = __webpack_require__(67);
	var IE_PROTO = __webpack_require__(64)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15);
	var core = __webpack_require__(2);
	var fails = __webpack_require__(29);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(25);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(19);
	var anObject = __webpack_require__(14);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(32)(Function.call, __webpack_require__(93).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(3);
	var core = __webpack_require__(2);
	var dP = __webpack_require__(26);
	var DESCRIPTORS = __webpack_require__(23);
	var SPECIES = __webpack_require__(4)('species');
	
	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66);
	var defined = __webpack_require__(58);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var navigator = global.navigator;
	
	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(88);
	var ITERATOR = __webpack_require__(4)('iterator');
	var Iterators = __webpack_require__(33);
	module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(158);
	var step = __webpack_require__(169);
	var Iterators = __webpack_require__(33);
	var toIObject = __webpack_require__(30);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(92)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(172) });


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(62) });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(67);
	var $keys = __webpack_require__(35);
	
	__webpack_require__(176)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(15);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(178).set });


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(34);
	var global = __webpack_require__(3);
	var ctx = __webpack_require__(32);
	var classof = __webpack_require__(88);
	var $export = __webpack_require__(15);
	var isObject = __webpack_require__(19);
	var aFunction = __webpack_require__(41);
	var anInstance = __webpack_require__(159);
	var forOf = __webpack_require__(162);
	var speciesConstructor = __webpack_require__(99);
	var task = __webpack_require__(100).set;
	var microtask = __webpack_require__(171)();
	var newPromiseCapabilityModule = __webpack_require__(61);
	var perform = __webpack_require__(96);
	var userAgent = __webpack_require__(182);
	var promiseResolve = __webpack_require__(97);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(177)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(44)($Promise, PROMISE);
	__webpack_require__(179)(PROMISE);
	Wrapper = __webpack_require__(2)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(168)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(3);
	var has = __webpack_require__(24);
	var DESCRIPTORS = __webpack_require__(23);
	var $export = __webpack_require__(15);
	var redefine = __webpack_require__(98);
	var META = __webpack_require__(170).KEY;
	var $fails = __webpack_require__(29);
	var shared = __webpack_require__(65);
	var setToStringTag = __webpack_require__(44);
	var uid = __webpack_require__(45);
	var wks = __webpack_require__(4);
	var wksExt = __webpack_require__(70);
	var wksDefine = __webpack_require__(69);
	var enumKeys = __webpack_require__(161);
	var isArray = __webpack_require__(165);
	var anObject = __webpack_require__(14);
	var isObject = __webpack_require__(19);
	var toIObject = __webpack_require__(30);
	var toPrimitive = __webpack_require__(68);
	var createDesc = __webpack_require__(43);
	var _create = __webpack_require__(62);
	var gOPNExt = __webpack_require__(174);
	var $GOPD = __webpack_require__(93);
	var $DP = __webpack_require__(26);
	var $keys = __webpack_require__(35);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(94).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(42).f = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(34)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(25)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(15);
	var core = __webpack_require__(2);
	var global = __webpack_require__(3);
	var speciesConstructor = __webpack_require__(99);
	var promiseResolve = __webpack_require__(97);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(15);
	var newPromiseCapability = __webpack_require__(61);
	var perform = __webpack_require__(96);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('asyncIterator');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('observable');


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.dayjs_plugin_isBetween=t()}(this,function(){"use strict";return function(e,t,i){t.prototype.isBetween=function(e,t,s,f){var n=i(e),o=i(t),r="("===(f=f||"()")[0],u=")"===f[1];return(r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))}}});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.dayjs_plugin_isSameOrAfter=t()}(this,function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.dayjs_plugin_isSameOrBefore=t()}(this,function(){"use strict";return function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}}});


/***/ }),
/* 198 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    nullTag = '[object Null]',
	    proxyTag = '[object Proxy]',
	    undefinedTag = '[object Undefined]';
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
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
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
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
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isFunction;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
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
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(12);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(245),
	    hashDelete = __webpack_require__(246),
	    hashGet = __webpack_require__(247),
	    hashHas = __webpack_require__(248),
	    hashSet = __webpack_require__(249);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(12);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(12);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(72),
	    setCacheAdd = __webpack_require__(268),
	    setCacheHas = __webpack_require__(269);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(12);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(12);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(230),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(16),
	    isBuffer = __webpack_require__(118),
	    isIndex = __webpack_require__(75),
	    isTypedArray = __webpack_require__(121);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 210 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(214),
	    eq = __webpack_require__(77);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(235);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(211),
	    isArray = __webpack_require__(16);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(106),
	    equalArrays = __webpack_require__(110),
	    equalByTag = __webpack_require__(236),
	    equalObjects = __webpack_require__(237),
	    getTag = __webpack_require__(242),
	    isArray = __webpack_require__(16),
	    isBuffer = __webpack_require__(118),
	    isTypedArray = __webpack_require__(121);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(106),
	    baseIsEqual = __webpack_require__(73);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(119),
	    isMasked = __webpack_require__(251),
	    isObject = __webpack_require__(28),
	    toSource = __webpack_require__(115);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
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
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';
	
	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp(value) {
	  return isObjectLike(value) && baseGetTag(value) == regexpTag;
	}
	
	module.exports = baseIsRegExp;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isLength = __webpack_require__(79),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(252),
	    nativeKeys = __webpack_require__(265);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(220),
	    getMatchData = __webpack_require__(239),
	    matchesStrictComparable = __webpack_require__(113);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(73),
	    get = __webpack_require__(52),
	    hasIn = __webpack_require__(280),
	    isKey = __webpack_require__(76),
	    isStrictComparable = __webpack_require__(112),
	    matchesStrictComparable = __webpack_require__(113),
	    toKey = __webpack_require__(36);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(107);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(213),
	    castPath = __webpack_require__(74),
	    isIndex = __webpack_require__(75),
	    isObject = __webpack_require__(28),
	    toKey = __webpack_require__(36);
	
	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;
	
	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = baseSet;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(48),
	    arrayMap = __webpack_require__(210),
	    isArray = __webpack_require__(16),
	    isSymbol = __webpack_require__(53);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(12);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(108),
	    isArrayLike = __webpack_require__(117),
	    keys = __webpack_require__(80);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}
	
	module.exports = createFind;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(48),
	    Uint8Array = __webpack_require__(206),
	    eq = __webpack_require__(77),
	    equalArrays = __webpack_require__(110),
	    mapToArray = __webpack_require__(263),
	    setToArray = __webpack_require__(270);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(238);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(216),
	    getSymbols = __webpack_require__(241),
	    keys = __webpack_require__(80);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(112),
	    keys = __webpack_require__(80);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(48);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(208),
	    stubArray = __webpack_require__(288);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(201),
	    Map = __webpack_require__(71),
	    Promise = __webpack_require__(203),
	    Set = __webpack_require__(204),
	    WeakMap = __webpack_require__(207),
	    baseGetTag = __webpack_require__(20),
	    toSource = __webpack_require__(115);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
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
	
	module.exports = getTag;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

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
	
	module.exports = getValue;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(74),
	    isArguments = __webpack_require__(116),
	    isArray = __webpack_require__(16),
	    isIndex = __webpack_require__(75),
	    isLength = __webpack_require__(79),
	    toKey = __webpack_require__(36);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(51);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(51);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(51);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(51);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(233);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
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
	
	module.exports = isMasked;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
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
	
	module.exports = isPrototype;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(49);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(49);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(49);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(49);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(202),
	    ListCache = __webpack_require__(47),
	    Map = __webpack_require__(71);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(50);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(50);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(50);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(50);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 263 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(284);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(267);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 266 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

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
	
	module.exports = overArg;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 270 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(47);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 273 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(47),
	    Map = __webpack_require__(71),
	    MapCache = __webpack_require__(72);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(264);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28),
	    now = __webpack_require__(285),
	    toNumber = __webpack_require__(13);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;
	
	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(234),
	    findIndex = __webpack_require__(279);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);
	
	module.exports = find;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(215),
	    baseIteratee = __webpack_require__(108),
	    toInteger = __webpack_require__(292);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	module.exports = findIndex;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(217),
	    hasPath = __webpack_require__(244);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && baseGetTag(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsRegExp = __webpack_require__(222),
	    baseUnary = __webpack_require__(109),
	    nodeUtil = __webpack_require__(114);
	
	/* Node.js helper references. */
	var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
	
	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
	
	module.exports = isRegExp;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(72);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(12);
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	module.exports = now;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(227),
	    basePropertyDeep = __webpack_require__(228),
	    isKey = __webpack_require__(76),
	    toKey = __webpack_require__(36);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(229);
	
	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}
	
	module.exports = set;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 289 */
/***/ (function(module, exports) {

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
	
	module.exports = stubFalse;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(277),
	    isObject = __webpack_require__(28);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	module.exports = throttle;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(13);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(291);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(231);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.14.7
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Popper = factory());
	}(this, (function () { 'use strict';
	
	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
	
	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}
	
	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}
	
	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}
	
	var supportsMicroTasks = isBrowser && window.Promise;
	
	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
	
	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}
	
	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var window = element.ownerDocument.defaultView;
	  var css = window.getComputedStyle(element, null);
	  return property ? css[property] : css;
	}
	
	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}
	
	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }
	
	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }
	
	  // Firefox want us to check `-x` and `-y` variations as well
	
	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;
	
	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }
	
	  return getScrollParent(getParentNode(element));
	}
	
	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
	
	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}
	
	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }
	
	  var noOffsetParent = isIE(10) ? document.body : null;
	
	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent || null;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }
	
	  var nodeName = offsetParent && offsetParent.nodeName;
	
	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }
	
	  // .offsetParent will return the closest TH, TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }
	
	  return offsetParent;
	}
	
	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;
	
	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}
	
	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }
	
	  return node;
	}
	
	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }
	
	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;
	
	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;
	
	  // Both nodes are inside #document
	
	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }
	
	    return getOffsetParent(commonAncestorContainer);
	  }
	
	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}
	
	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
	
	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;
	
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }
	
	  return element[upperSide];
	}
	
	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}
	
	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */
	
	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
	
	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}
	
	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
	}
	
	function getWindowSizes(document) {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);
	
	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}
	
	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};
	
	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}
	
	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };
	
	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;
	
	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;
	
	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');
	
	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }
	
	  return getClientRect(result);
	}
	
	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);
	
	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
	
	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && isHTML) {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;
	
	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);
	
	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;
	
	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }
	
	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }
	
	  return offsets;
	}
	
	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);
	
	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
	
	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };
	
	  return getClientRect(offset);
	}
	
	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  var parentNode = getParentNode(element);
	  if (!parentNode) {
	    return false;
	  }
	  return isFixed(parentNode);
	}
	
	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */
	
	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}
	
	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	  // NOTE: 1 DOM access here
	
	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	
	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }
	
	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
	
	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;
	
	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }
	
	  // Add paddings
	  padding = padding || 0;
	  var isPaddingNumber = typeof padding === 'number';
	  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
	  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
	  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
	  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
	
	  return boundaries;
	}
	
	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;
	
	  return width * height;
	}
	
	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }
	
	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
	
	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };
	
	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });
	
	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });
	
	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
	
	  var variation = placement.split('-')[1];
	
	  return computedPlacement + (variation ? '-' + variation : '');
	}
	
	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}
	
	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var window = element.ownerDocument.defaultView;
	  var styles = window.getComputedStyle(element);
	  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
	  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}
	
	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}
	
	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];
	
	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);
	
	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };
	
	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
	
	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }
	
	  return popperOffsets;
	}
	
	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }
	
	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}
	
	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }
	
	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}
	
	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
	
	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);
	
	      data = fn(data, modifier);
	    }
	  });
	
	  return data;
	}
	
	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }
	
	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };
	
	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
	
	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
	
	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;
	
	  data.positionFixed = this.options.positionFixed;
	
	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
	
	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
	
	  // run the modifiers
	  data = runModifiers(this.modifiers, data);
	
	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}
	
	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}
	
	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
	
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}
	
	/**
	 * Destroys the popper.
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;
	
	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }
	
	  this.disableEventListeners();
	
	  // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}
	
	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}
	
	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });
	
	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}
	
	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
	
	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;
	
	  return state;
	}
	
	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}
	
	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);
	
	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });
	
	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}
	
	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}
	
	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}
	
	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);
	
	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);
	
	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }
	
	  return data;
	}
	
	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
	
	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
	
	  popper.setAttribute('x-placement', placement);
	
	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
	
	  return options;
	}
	
	/**
	 * @function
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
	 * @returns {Object} The popper's position offsets rounded
	 *
	 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
	 * good as it can be within reason.
	 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
	 *
	 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
	 * as well on High DPI screens).
	 *
	 * Firefox prefers no rounding for positioning and does not have blurriness on
	 * high DPI screens.
	 *
	 * Only horizontal placement and left/right values need to be considered.
	 */
	function getRoundedOffsets(data, shouldRound) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var round = Math.round,
	      floor = Math.floor;
	
	  var noRound = function noRound(v) {
	    return v;
	  };
	
	  var referenceWidth = round(reference.width);
	  var popperWidth = round(popper.width);
	
	  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
	  var isVariation = data.placement.indexOf('-') !== -1;
	  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
	  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
	
	  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
	  var verticalToInteger = !shouldRound ? noRound : round;
	
	  return {
	    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
	    top: verticalToInteger(popper.top),
	    bottom: verticalToInteger(popper.bottom),
	    right: horizontalToInteger(popper.right)
	  };
	}
	
	var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;
	
	  // Remove this legacy support in Popper.js v2
	
	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
	
	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);
	
	  // Styles
	  var styles = {
	    position: popper.position
	  };
	
	  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
	
	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';
	
	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');
	
	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
	    // and not the bottom of the html element
	    if (offsetParent.nodeName === 'HTML') {
	      top = -offsetParent.clientHeight + offsets.bottom;
	    } else {
	      top = -offsetParentRect.height + offsets.bottom;
	    }
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    if (offsetParent.nodeName === 'HTML') {
	      left = -offsetParent.clientWidth + offsets.right;
	    } else {
	      left = -offsetParentRect.width + offsets.right;
	    }
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }
	
	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };
	
	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
	
	  return data;
	}
	
	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });
	
	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });
	
	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;
	
	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }
	
	  var arrowElement = options.element;
	
	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);
	
	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }
	
	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
	
	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];
	
	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjunction
	  //
	
	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);
	
	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
	
	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
	
	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
	
	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
	
	  return data;
	}
	
	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}
	
	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-end` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	
	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);
	
	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}
	
	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }
	
	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }
	
	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
	
	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';
	
	  var flipOrder = [];
	
	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }
	
	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }
	
	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);
	
	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;
	
	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
	
	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
	
	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
	
	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
	
	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;
	
	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }
	
	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }
	
	      data.placement = placement + (variation ? '-' + variation : '');
	
	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
	
	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';
	
	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }
	
	  return data;
	}
	
	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];
	
	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }
	
	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }
	
	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}
	
	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];
	
	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
	
	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });
	
	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));
	
	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }
	
	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
	
	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });
	
	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var basePlacement = placement.split('-')[0];
	
	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }
	
	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }
	
	  data.popper = popper;
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
	
	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }
	
	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];
	
	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';
	
	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
	
	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;
	
	  options.boundaries = boundaries;
	
	  var order = options.priority;
	  var popper = data.offsets.popper;
	
	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty({}, mainSide, value);
	    }
	  };
	
	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });
	
	  data.offsets.popper = popper;
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];
	
	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;
	
	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';
	
	    var shiftOffsets = {
	      start: defineProperty({}, side, reference[side]),
	      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };
	
	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }
	
	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;
	
	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }
	
	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }
	
	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
	
	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
	
	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
	
	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);
	
	  return data;
	}
	
	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */
	
	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },
	
	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unit-less, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the `height`.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },
	
	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * A scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper. This makes sure the popper always has a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },
	
	  /**
	   * Modifier used to make sure the reference and its popper stay near each other
	   * without leaving any gap between the two. Especially useful when the arrow is
	   * enabled and you want to ensure that it points to its reference element.
	   * It cares only about the first axis. You can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },
	
	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjunction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },
	
	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations)
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position.
	     * The popper will never be placed outside of the defined boundaries
	     * (except if `keepTogether` is enabled)
	     */
	    boundariesElement: 'viewport'
	  },
	
	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },
	
	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },
	
	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },
	
	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define your own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: undefined
	  }
	};
	
	/**
	 * The `dataObject` is an object containing all the information used by Popper.js.
	 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */
	
	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overridden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass an object with the same
	 * structure of the `options` object, as the 3rd argument. For example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement.
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',
	
	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,
	
	  /**
	   * Whether events (resize, scroll) are initially enabled.
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,
	
	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,
	
	  /**
	   * Callback called when the popper is created.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},
	
	  /**
	   * Callback called when the popper is updated. This callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},
	
	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js.
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};
	
	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */
	
	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */
	
	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Creates a new Popper.js instance.
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as the popper
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;
	
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);
	
	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };
	
	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));
	
	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);
	
	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };
	
	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;
	
	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });
	
	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });
	
	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });
	
	    // fire the first update to position the popper in the right place
	    this.update();
	
	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }
	
	    this.state.eventsEnabled = eventsEnabled;
	  }
	
	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs
	
	
	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }
	
	    /**
	     * Schedules an update. It will run on the next UI update available.
	     * @method scheduleUpdate
	     * @memberof Popper
	     */
	
	
	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */
	
	  }]);
	  return Popper;
	}();
	
	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10.
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */
	
	
	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;
	
	return Popper;
	
	})));
	//# sourceMappingURL=popper.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var printWarning = function() {};
	
	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(122);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);
	
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (true) {
	    loggedTypeFailures = {};
	  }
	}
	
	module.exports = checkPropTypes;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactIs = __webpack_require__(123);
	var assign = __webpack_require__(294);
	
	var ReactPropTypesSecret = __webpack_require__(122);
	var checkPropTypes = __webpack_require__(296);
	
	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};
	
	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (true) {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.8.6
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (true) {
	  (function() {
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;
	
	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;
	
	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	
	  return undefined;
	}
	
	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	
	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	
	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}


/***/ }),
/* 299 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}
	
	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}
	
	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}
	
	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	
	function polyfill(Component) {
	  var prototype = Component.prototype;
	
	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }
	
	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }
	
	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';
	
	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }
	
	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }
	
	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }
	
	    prototype.componentWillUpdate = componentWillUpdate;
	
	    var componentDidUpdate = prototype.componentDidUpdate;
	
	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;
	
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }
	
	  return Component;
	}
	
	exports.polyfill = polyfill;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var react = __webpack_require__(5);
	var PropTypes = _interopDefault(__webpack_require__(9));
	var PopperJS = _interopDefault(__webpack_require__(295));
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var Manager = function (_Component) {
	  inherits(Manager, _Component);
	
	  function Manager() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    classCallCheck(this, Manager);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
	      _this._targetNode = node;
	    }, _this._getTargetNode = function () {
	      return _this._targetNode;
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }
	
	  createClass(Manager, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this._setTargetNode,
	          getTargetNode: this._getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          children = _props.children,
	          restProps = objectWithoutProperties(_props, ['tag', 'children']);
	
	      if (tag !== false) {
	        return react.createElement(tag, restProps, children);
	      } else {
	        return children;
	      }
	    }
	  }]);
	  return Manager;
	}(react.Component);
	
	Manager.childContextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	Manager.propTypes = {
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	Manager.defaultProps = {
	  tag: 'div'
	};
	
	var Target = function Target(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'div' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popperManager = context.popperManager;
	
	  var targetRef = function targetRef(node) {
	    popperManager.setTargetNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };
	
	  if (typeof children === 'function') {
	    var targetProps = { ref: targetRef };
	    return children({ targetProps: targetProps, restProps: restProps });
	  }
	
	  var componentProps = _extends({}, restProps);
	
	  if (typeof component === 'string') {
	    componentProps.ref = targetRef;
	  } else {
	    componentProps.innerRef = targetRef;
	  }
	
	  return react.createElement(component, componentProps, children);
	};
	
	Target.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	
	Target.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	
	var placements = PopperJS.placements;
	
	var Popper = function (_Component) {
	  inherits(Popper, _Component);
	
	  function Popper() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    classCallCheck(this, Popper);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
	      _this._arrowNode = node;
	    }, _this._getTargetNode = function () {
	      if (_this.props.target) {
	        return _this.props.target;
	      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
	        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
	      }
	      return _this.context.popperManager.getTargetNode();
	    }, _this._getOffsets = function (data) {
	      return Object.keys(data.offsets).map(function (key) {
	        return data.offsets[key];
	      });
	    }, _this._isDataDirty = function (data) {
	      if (_this.state.data) {
	        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
	      } else {
	        return true;
	      }
	    }, _this._updateStateModifier = {
	      enabled: true,
	      order: 900,
	      fn: function fn(data) {
	        if (_this._isDataDirty(data)) {
	          _this.setState({ data: data });
	        }
	        return data;
	      }
	    }, _this._getPopperStyle = function () {
	      var data = _this.state.data;
	
	
	      if (!_this._popper || !data) {
	        return {
	          position: 'absolute',
	          pointerEvents: 'none',
	          opacity: 0
	        };
	      }
	
	      return _extends({
	        position: data.offsets.popper.position
	      }, data.styles);
	    }, _this._getPopperPlacement = function () {
	      return _this.state.data ? _this.state.data.placement : undefined;
	    }, _this._getPopperHide = function () {
	      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
	    }, _this._getArrowStyle = function () {
	      if (!_this.state.data || !_this.state.data.offsets.arrow) {
	        return {};
	      } else {
	        var _this$state$data$offs = _this.state.data.offsets.arrow,
	            top = _this$state$data$offs.top,
	            left = _this$state$data$offs.left;
	
	        return { top: top, left: left };
	      }
	    }, _this._handlePopperRef = function (node) {
	      _this._popperNode = node;
	      if (node) {
	        _this._createPopper();
	      } else {
	        _this._destroyPopper();
	      }
	      if (_this.props.innerRef) {
	        _this.props.innerRef(node);
	      }
	    }, _this._scheduleUpdate = function () {
	      _this._popper && _this._popper.scheduleUpdate();
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }
	
	  createClass(Popper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popper: {
	          setArrowNode: this._setArrowNode,
	          getArrowStyle: this._getArrowStyle
	        }
	      };
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(lastProps) {
	      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
	        this._destroyPopper();
	        this._createPopper();
	      }
	      if (lastProps.children !== this.props.children) {
	        this._scheduleUpdate();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroyPopper();
	    }
	  }, {
	    key: '_createPopper',
	    value: function _createPopper() {
	      var _this2 = this;
	
	      var _props = this.props,
	          placement = _props.placement,
	          eventsEnabled = _props.eventsEnabled,
	          positionFixed = _props.positionFixed;
	
	      var modifiers = _extends({}, this.props.modifiers, {
	        applyStyle: { enabled: false },
	        updateState: this._updateStateModifier
	      });
	      if (this._arrowNode) {
	        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
	          element: this._arrowNode
	        });
	      }
	      this._popper = new PopperJS(this._getTargetNode(), this._popperNode, {
	        placement: placement,
	        positionFixed: positionFixed,
	        eventsEnabled: eventsEnabled,
	        modifiers: modifiers
	      });
	
	      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
	      setTimeout(function () {
	        return _this2._scheduleUpdate();
	      });
	    }
	  }, {
	    key: '_destroyPopper',
	    value: function _destroyPopper() {
	      if (this._popper) {
	        this._popper.destroy();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          component = _props2.component,
	          innerRef = _props2.innerRef,
	          placement = _props2.placement,
	          eventsEnabled = _props2.eventsEnabled,
	          positionFixed = _props2.positionFixed,
	          modifiers = _props2.modifiers,
	          children = _props2.children,
	          restProps = objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);
	
	      var popperStyle = this._getPopperStyle();
	      var popperPlacement = this._getPopperPlacement();
	      var popperHide = this._getPopperHide();
	
	      if (typeof children === 'function') {
	        var popperProps = {
	          ref: this._handlePopperRef,
	          style: popperStyle,
	          'data-placement': popperPlacement,
	          'data-x-out-of-boundaries': popperHide
	        };
	        return children({
	          popperProps: popperProps,
	          restProps: restProps,
	          scheduleUpdate: this._scheduleUpdate
	        });
	      }
	
	      var componentProps = _extends({}, restProps, {
	        style: _extends({}, restProps.style, popperStyle),
	        'data-placement': popperPlacement,
	        'data-x-out-of-boundaries': popperHide
	      });
	
	      if (typeof component === 'string') {
	        componentProps.ref = this._handlePopperRef;
	      } else {
	        componentProps.innerRef = this._handlePopperRef;
	      }
	
	      return react.createElement(component, componentProps, children);
	    }
	  }]);
	  return Popper;
	}(react.Component);
	
	Popper.contextTypes = {
	  popperManager: PropTypes.object
	};
	Popper.childContextTypes = {
	  popper: PropTypes.object.isRequired
	};
	Popper.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  placement: PropTypes.oneOf(placements),
	  eventsEnabled: PropTypes.bool,
	  positionFixed: PropTypes.bool,
	  modifiers: PropTypes.object,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  target: PropTypes.oneOfType([
	  // the following check is needed for SSR
	  PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), PropTypes.shape({
	    getBoundingClientRect: PropTypes.func.isRequired,
	    clientWidth: PropTypes.number.isRequired,
	    clientHeight: PropTypes.number.isRequired
	  })])
	};
	Popper.defaultProps = {
	  component: 'div',
	  placement: 'bottom',
	  eventsEnabled: true,
	  positionFixed: false,
	  modifiers: {}
	};
	
	var Arrow = function Arrow(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'span' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popper = context.popper;
	
	  var arrowRef = function arrowRef(node) {
	    popper.setArrowNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };
	  var arrowStyle = popper.getArrowStyle();
	
	  if (typeof children === 'function') {
	    var arrowProps = {
	      ref: arrowRef,
	      style: arrowStyle
	    };
	    return children({ arrowProps: arrowProps, restProps: restProps });
	  }
	
	  var componentProps = _extends({}, restProps, {
	    style: _extends({}, arrowStyle, restProps.style)
	  });
	
	  if (typeof component === 'string') {
	    componentProps.ref = arrowRef;
	  } else {
	    componentProps.innerRef = arrowRef;
	  }
	
	  return react.createElement(component, componentProps, children);
	};
	
	Arrow.contextTypes = {
	  popper: PropTypes.object.isRequired
	};
	
	Arrow.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	
	exports.Manager = Manager;
	exports.Target = Target;
	exports.Popper = Popper;
	exports.placements = placements;
	exports.Arrow = Arrow;
	//# sourceMappingURL=react-popper.js.map


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(302);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),
/* 302 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ })
/******/ ])
});
;
//# sourceMappingURL=availityreactstrapvalidation.js.map