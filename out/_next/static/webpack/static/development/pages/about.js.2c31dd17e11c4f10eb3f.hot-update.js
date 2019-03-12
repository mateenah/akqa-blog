webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_myLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/myLayout */ "./components/myLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_myLayout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "This is about page")));
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props, context) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props, context));
    _this.handleSelect = _this.handleSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      index: 0,
      direction: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "handleSelect",
    value: function handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          index = _this$state.index,
          direction = _this$state.direction;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel, {
        activeIndex: index,
        direction: direction,
        onSelect: this.handleSelect
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Item, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "d-block w-100",
        src: "holder.js/800x400?text=First slide&bg=373940",
        alt: "First slide"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Caption, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "First slide label"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Nulla vitae elit libero, a pharetra augue mollis interdum."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Item, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "d-block w-100",
        src: "holder.js/800x400?text=Second slide&bg=282c34",
        alt: "Third slide"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Caption, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Second slide label"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Item, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "d-block w-100",
        src: "holder.js/800x400?text=Third slide&bg=20232a",
        alt: "Third slide"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Carousel.Caption, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Third slide label"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.2c31dd17e11c4f10eb3f.hot-update.js.map