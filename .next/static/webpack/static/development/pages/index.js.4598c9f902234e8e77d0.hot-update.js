webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_myLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/myLayout.js */ "./components/myLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_getcontent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/getcontent */ "./helpers/getcontent.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_12__);














function getPosts() {
  return [{
    id: "hello-nextjs",
    title: "Hello Next.js"
  }, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }, {
    id: "deploy-nextjs",
    title: "Deploy apps with Zeit"
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    key: "{post.title}",
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", null, post.title)));
};

var ContentfulCard = function ContentfulCard(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2144671493" + " " + "col-md-4 mb-3 card-box"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2144671493" + " " + "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2144671493" + " " + "card-title"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}",
    className: "jsx-2144671493"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2144671493" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    key: "{data.fields.slug}",
    className: "jsx-2144671493" + " " + "card-subtitle text-muted"
  }, data.fields.slug)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2144671493" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-2144671493" + " " + "card-text"
  }, data.fields.content), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    className: "jsx-2144671493" + " " + "card-link"
  }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    },
    className: "jsx-2144671493"
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.mediaLink}",
    className: "jsx-2144671493" + " " + "card-subtitle text-muted"
  }, data.fields.mediaLink))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2144671493"
  }, ".card-box.jsx-2144671493{padding-top:25px;}h3.jsx-2144671493{padding:20px 0 0 20px;font-size:1.7em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.card-link.jsx-2144671493{width:100%;}.card.jsx-2144671493:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);boxshadow:0 30px 30px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEZ0IsQUFHMEIsQUFHSyxBQU9YLEFBR1UsV0FGdkIsTUFWQSxLQUdrQixnQkFDTyx1QkFDSixjQVF5QyxLQVA1QyxnQkFDbEIscUdBTzJDLHNDQUMzQyIsImZpbGUiOiIvVXNlcnMvbWF0ZWVuYWgubWF0ZWVuYWgvRG9jdW1lbnRzL1RyYWluaW5ncy9uZXh0SnMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbXlMYXlvdXQuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCIuLi9oZWxwZXJzL2dldGNvbnRlbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogXCJoZWxsby1uZXh0anNcIiwgdGl0bGU6IFwiSGVsbG8gTmV4dC5qc1wiIH0sXG4gICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICB7IGlkOiBcImRlcGxveS1uZXh0anNcIiwgdGl0bGU6IFwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgfVxuICBdO1xufVxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rXG4gICAgICBrZXk9XCJ7cG9zdC50aXRsZX1cIlxuICAgICAgYXM9e2AvcC8ke3Bvc3QuaWR9YH1cbiAgICAgIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH1cbiAgICA+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2xpPlxuKTtcblxuY29uc3QgQ29udGVudGZ1bENhcmQgPSAoeyBkYXRhIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zIGNhcmQtYm94XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgPGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICB7LyogPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5TcGVjaWFsIHRpdGxlIHRyZWF0bWVudDwvaDU+ICovfVxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLnNsdWd9XCI+XG4gICAgICAgICAge2RhdGEuZmllbGRzLnNsdWd9XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPlxuICAgICAgICAgIHtkYXRhLmZpZWxkcy5jb250ZW50fVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2RhdGEuZmllbGRzLm1lZGlhID8gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17ZGF0YS5maWVsZHMubWVkaWEgJiYgZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzQ1XCJcbiAgICAgICAgICAgIGtleT1cIntkYXRhLmZpZWxkcy5lbWJlZExpbmt9XCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhTGlua31cIj5cbiAgICAgICAgICB7ZGF0YS5maWVsZHMubWVkaWFMaW5rfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FyZC1ib3gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuY2FyZC1saW5rIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgICAgICBib3hzaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgZGl2U3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpO1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICBjb250ZW50X3R5cGU6IHR5cGUsXG4gICAgICBpbmNsdWRlOiAxXG4gICAgfSk7XG4gICAgY29uc3Qgc29tZUVudHJ5QXNQcm9wID0gZW50cmllcy5pdGVtcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbWVFbnRyeUFzUHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZW50cmllczExMSA9IGVudHJpZXMuaXRlbXNbaV07XG4gICAgICBjb25zb2xlLmxvZyhcImVudHJpZXMxMTFcIiwgZW50cmllczExMSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJzb21lRW50cnlBc1Byb3BcIixzb21lRW50cnlBc1Byb3ApXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZW50cmllczExMVwiLGVudHJpZXMxMTEuZmllbGRzLm1lZGlhTGluay5maWVsZHMuZmlsZSlcbiAgICBjb25zb2xlLmxvZyhcIj4gQ29udGVudCBnb3R0ZW4gYW5kIHdyaXR0ZW4gZm9yXCIpO1xuICAgIHJldHVybiB7IHNvbWVFbnRyeUFzUHJvcCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+RmluaWRuZ3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNvbWVFbnRyeUFzUHJvcC5tYXAoZGF0YSA9PiAoXG4gICAgICAgICAgICA8Q29udGVudGZ1bENhcmQga2V5PXtkYXRhLmlkfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
};

var divStyle = {
  width: "100%"
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_myLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", null, "Finidngs"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "row"
      }, this.props.someEntryAsProp.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ContentfulCard, {
          key: data.id,
          data: data
        });
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var client, entries, someEntryAsProp, i, entries111;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = Object(_helpers_getcontent__WEBPACK_IMPORTED_MODULE_10__["createClient"])();
                _context.next = 3;
                return client.getEntries({
                  content_type: os__WEBPACK_IMPORTED_MODULE_12__["type"],
                  include: 1
                });

              case 3:
                entries = _context.sent;
                someEntryAsProp = entries.items;

                for (i = 0; i < someEntryAsProp.length; i++) {
                  entries111 = entries.items[i];
                  console.log("entries111", entries111);
                } // console.log("someEntryAsProp",someEntryAsProp)
                //  console.log("entries111",entries111.fields.mediaLink.fields.file)


                console.log("> Content gotten and written for");
                return _context.abrupt("return", {
                  someEntryAsProp: someEntryAsProp
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.4598c9f902234e8e77d0.hot-update.js.map