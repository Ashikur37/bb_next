"use strict";
exports.id = 9717;
exports.ids = [9717];
exports.modules = {

/***/ 9717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rheostat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3768);
/* harmony import */ var rheostat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rheostat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(542);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class RangeSlider extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      min: this.props.min,
      max: this.props.max
    });

    _defineProperty(this, "onChange", ({
      values: [min, max]
    }) => {
      const {
        currentRefinement,
        refine
      } = this.props;

      if (currentRefinement.min !== min || currentRefinement.max !== max) {
        refine({
          min,
          max
        });
      }
    });

    _defineProperty(this, "onValuesUpdated", ({
      values: [min, max]
    }) => {
      this.setState({
        min,
        max
      });
    });
  }

  componentDidUpdate(prevProps) {
    const {
      currentRefinement
    } = prevProps;

    if (this.props.canRefine && (currentRefinement.min !== this.props.currentRefinement.min || currentRefinement.max !== this.props.currentRefinement.max)) {
      this.setState(_objectSpread({}, currentRefinement));
    }
  }

  render() {
    const {
      min,
      max,
      currentRefinement
    } = this.props;

    if (min === max) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((rheostat__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "ais-RangeSlider",
      min: min,
      max: max,
      values: [currentRefinement.min, currentRefinement.max],
      onChange: this.onChange,
      onValuesUpdated: this.onValuesUpdated,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rheostat-marker",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "rheostat-value rheostat-marker--min",
          children: this.state.min
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rheostat-marker",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "rheostat-value rheostat-marker--max",
          children: this.state.max
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__.connectRange)(RangeSlider));

/***/ })

};
;