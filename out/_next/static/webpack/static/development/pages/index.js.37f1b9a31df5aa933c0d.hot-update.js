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
/* harmony import */ var _components_myLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/myLayout.js */ "./components/myLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_getcontent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/getcontent */ "./helpers/getcontent.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_11__);













function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with Zeit'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, post.title)));
}; // const MediaItem = ({item}) => {
//   item.isVideo ? <video /> : <img />
// }


var CheckMediaItem = function CheckMediaItem(_ref2) {
  var dataCheck = _ref2.dataCheck;

  if (dataCheck.fields.media) {
    /* do stuff */
    react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      class: "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
      src: dataCheck.fields.media && dataCheck.fields.media.fields.file.url,
      class: "card-link",
      style: divStyle
    }));
  } else {
    react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      class: "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
      class: "card-text",
      key: "{data.fields.content}"
    }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      width: "200",
      height: "345",
      dangerouslySetInnerHTML: {
        __html: data.fields.embedLink
      }
    }));
  }
};

var ContentfulCard = function ContentfulCard(_ref3) {
  var data = _ref3.data;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "col-4 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "card-title text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    key: "{data.fields.title}"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
    class: "card-title"
  }, "Special title treatment"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
    class: "card-subtitle text-muted",
    key: "{data.fields.slug}"
  }, data.fields.slug)), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    class: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    class: "card-link",
    style: divStyle
  })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    class: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    class: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    }
  }))));
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
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_myLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "My Blog"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "row"
      }, this.props.someEntryAsProp.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ContentfulCard, {
          key: data.id,
          data: data
        });
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Carousel Example"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "myCarousel",
        class: "carousel slide",
        "data-ride": "carousel"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ol", {
        class: "carousel-indicators"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "0",
        class: "active"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "1"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "2"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "carousel-inner"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "item active"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "la.jpg",
        alt: "Los Angeles",
        style: crouselStyle
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "item"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "chicago.jpg",
        alt: "Chicago",
        style: crouselStyle
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "item"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "ny.jpg",
        alt: "New york",
        style: crouselStyle
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        class: "left carousel-control",
        href: "#myCarousel",
        "data-slide": "prev"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "glyphicon glyphicon-chevron-left"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "sr-only"
      }, "Previous")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        class: "right carousel-control",
        href: "#myCarousel",
        "data-slide": "next"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "glyphicon glyphicon-chevron-right"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "sr-only"
      }, "Next")))));
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
                client = Object(_helpers_getcontent__WEBPACK_IMPORTED_MODULE_9__["createClient"])();
                _context.next = 3;
                return client.getEntries({
                  content_type: os__WEBPACK_IMPORTED_MODULE_11__["type"],
                  include: 1
                });

              case 3:
                entries = _context.sent;
                someEntryAsProp = entries.items;

                for (i = 0; i < someEntryAsProp.length; i++) {
                  entries111 = entries.items[i];
                  console.log("entries111", entries111.fields.media);
                } // console.log("someEntryAsProp",someEntryAsProp)
                //  console.log("entries111",entries111.fields.mediaLink.fields.file)


                console.log('> Content gotten and written for');
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
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);


var divStyle = {
  width: '100%'
};
var crouselStyle = {
  width: '100%'
};

/***/ })

})
//# sourceMappingURL=index.js.37f1b9a31df5aa933c0d.hot-update.js.map