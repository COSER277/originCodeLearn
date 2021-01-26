(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/axios-mini.js":
/*!********************************!*\
  !*** ./src/core/axios-mini.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/core/utils.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./src/core/default.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/core/request.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Axios = /*#__PURE__*/function () {
  function Axios() {
    _classCallCheck(this, Axios);

    var _this = this;

    return new Proxy(_request__WEBPACK_IMPORTED_MODULE_2__.default, {
      apply: function apply(fn, thisArg, args) {
        var options = _this._preprocessArgs(undefined, args);

        if (!options) {
          if (args.length == 2) {
            assert(typeof args[0] == 'string', 'args[0] must is string');
            assert(_typeof(args[1]) == 'object' && args[1] && args[1].constructor == Object, 'args[1] must is JSON');
            options = _objectSpread(_objectSpread({}, args[1]), {}, {
              url: args[0]
            });
            console.log(options);
          } else {
            assert(false, 'invaild args');
          }
        }
      },
      set: function set(data, name, value) {
        _this[name] = value;
        return true;
      },
      get: function get(data, name) {
        return _this[name];
      }
    });
  }

  _createClass(Axios, [{
    key: "_preprocessArgs",
    value: function _preprocessArgs(method) {
      var options;
      console.log("\u53C2\u6570\u957F\u5EA6".concat(arguments.length <= 1 ? 0 : arguments.length - 1, ",").concat(_typeof(arguments.length <= 1 ? undefined : arguments[1])));

      if ((arguments.length <= 1 ? 0 : arguments.length - 1) == 1 && typeof (arguments.length <= 1 ? undefined : arguments[1]) == 'string') {
        options = {
          method: method,
          url: arguments.length <= 1 ? undefined : arguments[1]
        };
        console.log("参数是String");
      } else if ((arguments.length <= 1 ? 0 : arguments.length - 1) == 1 && _typeof(arguments.length <= 1 ? undefined : arguments[1]) == 'object') {
        options = _objectSpread(_objectSpread({}, arguments.length <= 1 ? undefined : arguments[1]), {}, {
          method: method
        });
        console.log("参数是对象");
      } else {
        return undefined;
      }

      return options;
    }
  }, {
    key: "get",
    value: function get() {
      console.log("GET");

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var options = this._preprocessArgs('get', args);

      console.log(options);

      if (!options) {
        console.log(args);

        if (args.length == 2) {
          _utils__WEBPACK_IMPORTED_MODULE_0__.default.assert(typeof args[0] == 'string', 'args[0] must is string');
          _utils__WEBPACK_IMPORTED_MODULE_0__.default.assert(_typeof(args[1]) == 'object' && args[1] && args[1].constructor == Object, 'args[1] must is JSON');
          options = _objectSpread(_objectSpread({}, args[1]), {}, {
            url: args[0],
            method: 'get'
          });
          console.log(options);
        } else {
          _utils__WEBPACK_IMPORTED_MODULE_0__.default.assert(false, 'invaild args');
        }
      }
    }
  }, {
    key: "post",
    value: function post() {
      console.log("POST");

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var options = this._preprocessArgs('post', args);

      if (!options) {}
    }
  }, {
    key: "delete",
    value: function _delete() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var options = this._preprocessArgs('delete', args);

      if (!options) {}
    }
  }]);

  return Axios;
}();

Axios.create = Axios.prototype.create = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var axios = new Axios();

  var res = _objectSpread({}, JSON.parse(JSON.stringify(_default__WEBPACK_IMPORTED_MODULE_1__.default)));

  _utils__WEBPACK_IMPORTED_MODULE_0__.default.merge(res, params);
  axios["default"] = res;
  return axios;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios.create());

/***/ }),

/***/ "./src/core/default.js":
/*!*****************************!*\
  !*** ./src/core/default.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var _default = {
  method: "get",
  headers: {
    common: {
      'X-Request-By': 'XMLHttpRequest'
    },
    get: {},
    post: {},
    "delete": {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);

/***/ }),

/***/ "./src/core/request.js":
/*!*****************************!*\
  !*** ./src/core/request.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function request(options) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, true);

  for (var key in options.headers) {
    xhr.setRequestHeader(key, options.headers[key]);
  }

  xhr.send(options.data);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./src/core/utils.js":
/*!***************************!*\
  !*** ./src/core/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "merge",
    value: function merge(target, source) {
      for (var key in source) {
        if (_typeof(source[key]) === 'object') {
          //是object 说明有嵌套属性
          if (!target[key]) {
            //目标没有这属性
            target[key] = {};
          }

          this.merge(target[key], source[key]);
        } else {
          //
          target[key] = source[key];
        }
      }
    }
  }, {
    key: "assert",
    value: function assert(exp) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assert faild';

      if (!exp) {
        throw new Error(msg);
      }
    }
  }]);

  return Utils;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Utils());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_axios_mini__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/axios-mini */ "./src/core/axios-mini.js");

var axios = _core_axios_mini__WEBPACK_IMPORTED_MODULE_0__.default.create({
  baseUrl: "http://xxxxxx:xxx",
  headers: {
    common: "121212",
    Authorization: "Bear sdsdsdsd"
  }
});
axios.get({
  method: "get",
  url: './1.json'
});
axios.get('./1.json');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=axios.map