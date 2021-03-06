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








var _this = undefined;







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
}; // const Index = () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <p>{someEntryAsProp.text}</p>
//     <ul>
//     { getPosts().map((post) => (
//        <PostLink key={post.id} post={post}/>
//     ))}
//     </ul>
//   </Layout>
//   );
// Index.getInitialProps = async () => {
//   console.log('> Starting import',);
//  const client = createClient();
//    const entries = await client.getEntries({
//     // some query
//     content_type:type,
//     include:1
//    });
//    const someEntryAsProp = entries.items[0].fields;
//   // console.log(entries)
//   console.log("entries.items[0]-----",entries.items[0])
//   console.log("someEntryAsProp----",someEntryAsProp)
//   // console.log('> Content gotten and written for',)
//   return { someEntryAsProp };
//   //return {};
// };


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
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_myLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "My Blog"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, this.props.someEntryAsProp[1].fields.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, getPosts().map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PostLink, {
          key: post.id,
          post: post
        });
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "col-12 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("renderTrails", null))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var client, entries, someEntryAsProp;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = Object(_helpers_getcontent__WEBPACK_IMPORTED_MODULE_9__["createClient"])();
                _context.next = 3;
                return client.getEntries({
                  // some query
                  content_type: os__WEBPACK_IMPORTED_MODULE_11__["type"],
                  include: 1
                });

              case 3:
                entries = _context.sent;
                someEntryAsProp = entries.items;
                console.log('> Content gotten and written for');
                return _context.abrupt("return", {
                  someEntryAsProp: someEntryAsProp
                });

              case 7:
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



var renderTrails = function renderTrails() {
  console.log("TRAILS", _this.props.someEntryAsProp);

  if (_this.props.someEntryAsProp) {
    var trail = _this.props.someEntryAsProp.map(function (t) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card text-white bg-success mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-header"
      }, t.fields.title), ")}", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        class: "card-title",
        key: "{t.fields.slug}"
      }, t.fields.slug), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "card-text",
        key: "{t.fields.content}"
      }, t.fields.content)));
    });

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      class: "row"
    }, trail);
  }
};

{
  /*         
       {(this.props.someEntryAsProp && this.props.someEntryAsProp.length > 0) ? 
         <div class="card text-white bg-success mb-3" >
         {this.props.someEntryAsProp.map(agency => 
           <div class="card-header" key="{agency.fields.title}">{agency.fields.title}</div>)}
           <div class="card-body">
             <h4 class="card-title" key="{agency.fields.slug}">{agency.fields.slug}</h4>
             <p class="card-text" key="{agency.fields.content}">{agency.fields.content}</p> 
             </div> 
           </div> : <p><strong>Have nothing!!</strong></p>} */
}

/***/ })

})
//# sourceMappingURL=index.js.a5ba16311dec504c64d5.hot-update.js.map