(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("katex"));
	else if(typeof define === 'function' && define.amd)
		define("ReactKaTeX", ["react", "prop-types", "katex"], factory);
	else if(typeof exports === 'object')
		exports["ReactKaTeX"] = factory(require("react"), require("prop-types"), require("katex"));
	else
		root["ReactKaTeX"] = factory(root["React"], root["PropTypes"], root["katex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InlineMath = __webpack_require__(1);

	Object.defineProperty(exports, 'InlineMath', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InlineMath).default;
	  }
	});

	var _BlockMath = __webpack_require__(6);

	Object.defineProperty(exports, 'BlockMath', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BlockMath).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createMathComponent = __webpack_require__(4);

	var _createMathComponent2 = _interopRequireDefault(_createMathComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InlineMath = function InlineMath(_ref) {
	  var html = _ref.html;

	  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: html } });
	};

	InlineMath.propTypes = {
	  html: _propTypes2.default.string.isRequired
	};

	exports.default = (0, _createMathComponent2.default)(InlineMath, { displayMode: false });

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _katex = __webpack_require__(5);

	var _katex2 = _interopRequireDefault(_katex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createMathComponent = function createMathComponent(Component, _ref) {
	  var displayMode = _ref.displayMode;

	  var MathComponent = function (_React$Component) {
	    _inherits(MathComponent, _React$Component);

	    function MathComponent(props) {
	      _classCallCheck(this, MathComponent);

	      var _this = _possibleConstructorReturn(this, (MathComponent.__proto__ || Object.getPrototypeOf(MathComponent)).call(this, props));

	      _this.usedProp = props.math ? 'math' : 'children';

	      _this.state = _this.createNewState(null, props);
	      return _this;
	    }

	    _createClass(MathComponent, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps() {
	        this.setState(this.createNewState);
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        return nextProps[this.usedProp] !== this.props[this.usedProp];
	      }
	    }, {
	      key: 'createNewState',
	      value: function createNewState(prevState, props) {
	        try {
	          var html = this.generateHtml(props);

	          return { html: html, error: undefined };
	        } catch (error) {
	          return { error: error, html: undefined };
	        }
	      }
	    }, {
	      key: 'generateHtml',
	      value: function generateHtml(props) {
	        var errorColor = props.errorColor;
	        var renderError = props.renderError;


	        return _katex2.default.renderToString(props[this.usedProp], { displayMode: displayMode, errorColor: errorColor, throwOnError: !!renderError });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        if (this.state.html) {
	          return _react2.default.createElement(Component, { html: this.state.html });
	        }

	        if (this.props.renderError) {
	          return this.props.renderError(this.state.error);
	        }

	        throw this.state.error;
	      }
	    }]);

	    return MathComponent;
	  }(_react2.default.Component);

	  MathComponent.propTypes = {
	    children: _propTypes2.default.string,
	    errorColor: _propTypes2.default.string,
	    math: _propTypes2.default.string,
	    renderError: _propTypes2.default.func
	  };

	  return MathComponent;
	};

	exports.default = createMathComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createMathComponent = __webpack_require__(4);

	var _createMathComponent2 = _interopRequireDefault(_createMathComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlockMath = function BlockMath(_ref) {
	  var html = _ref.html;

	  return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
	};

	BlockMath.propTypes = {
	  html: _propTypes2.default.string.isRequired
	};

	exports.default = (0, _createMathComponent2.default)(BlockMath, { displayMode: true });

/***/ }
/******/ ])
});
;