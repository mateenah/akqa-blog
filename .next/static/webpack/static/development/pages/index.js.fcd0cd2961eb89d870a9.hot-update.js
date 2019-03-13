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
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", null, post.title)));
}; // const MediaItem = ({item}) => {
//   item.isVideo ? <video /> : <img />
// }
// const CheckMediaItem = ({data1}) => {
//   if(dataCheck.fields.media) { /* do stuff */ 
//         <div className="card-body">
//         {/* <MediaItem item={data.fields.media.fields.file}/>  */}
//             <img src={dataCheck.fields.media && dataCheck.fields.media.fields.file.url} className="card-link" style= {divStyle}/>
//         </div> 
//       }else{
//          <div className="card-body">
//                 <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
//                 {/* <a className="card-link" href={data.fields.mediaLink}>{data.fields.mediaLink}</a>  */}
//                 <div width="200" height="345" dangerouslySetInnerHTML={{ __html: data.fields.embedLink}} >
//                 </div>
//               </div>
//       }
//   }


var ContentfulCard = function ContentfulCard(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "col-md-4 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-title text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    className: "card-title"
  }, "Special title treatment"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", {
    className: "card-subtitle text-muted",
    key: "{data.fields.slug}"
  }, data.fields.slug)), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    className: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    className: "card-link",
    style: divStyle
  })) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    className: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    }
  }))));
};

var CrouselCard = function CrouselCard(_ref3) {
  var data = _ref3.data;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "item active"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-title text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    className: "card-title"
  }, "Special title treatment"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", {
    className: "card-subtitle text-muted",
    key: "{data.fields.slug}"
  }, data.fields.slug)), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    className: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    className: "card-link",
    style: divStyle
  })) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    className: "card-text",
    key: "{data.fields.content}"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_myLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        className: "jsx-487036683"
      }, "Finidngs"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-487036683" + " " + "row"
      }, this.props.someEntryAsProp.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ContentfulCard, {
          key: data.id,
          data: data
        });
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "487036683"
      }, ".card.jsx-487036683{-webkit-transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;-ms-transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRJMEIsQUFPZ0IsaVhBQUMiLCJmaWxlIjoiL1VzZXJzL21hdGVlbmFoLm1hdGVlbmFoL0RvY3VtZW50cy9UcmFpbmluZ3MvbmV4dEpzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2NyZWF0ZUNsaWVudH0gZnJvbSAnLi4vaGVscGVycy9nZXRjb250ZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XG5cblxuZnVuY3Rpb24gZ2V0UG9zdHMoKXtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOidoZWxsby1uZXh0anMnICwgdGl0bGU6J0hlbGxvIE5leHQuanMnIH0sXG4gICAgeyBpZDonbGVhcm4tbmV4dGpzJyAsIHRpdGxlOidMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgeyBpZDonZGVwbG95LW5leHRqcycgLCB0aXRsZTonRGVwbG95IGFwcHMgd2l0aCBaZWl0JyB9LFxuICBdXG59XG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gIDwvbGk+XG4pXG5cbiAgLy8gY29uc3QgTWVkaWFJdGVtID0gKHtpdGVtfSkgPT4ge1xuICAvLyAgIGl0ZW0uaXNWaWRlbyA/IDx2aWRlbyAvPiA6IDxpbWcgLz5cbiAgLy8gfVxuXG4vLyBjb25zdCBDaGVja01lZGlhSXRlbSA9ICh7ZGF0YTF9KSA9PiB7XG5cbi8vICAgaWYoZGF0YUNoZWNrLmZpZWxkcy5tZWRpYSkgeyAvKiBkbyBzdHVmZiAqLyBcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgey8qIDxNZWRpYUl0ZW0gaXRlbT17ZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGV9Lz4gICovfVxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2RhdGFDaGVjay5maWVsZHMubWVkaWEgJiYgZGF0YUNoZWNrLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbi8vICAgICAgICAgPC9kaXY+IFxuLy8gICAgICAgfWVsc2V7XG4vLyAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbi8vICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgaHJlZj17ZGF0YS5maWVsZHMubWVkaWFMaW5rfT57ZGF0YS5maWVsZHMubWVkaWFMaW5rfTwvYT4gICovfVxuLy8gICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICB9XG5cblxuLy8gICB9XG5cblxuICBjb25zdCBDb250ZW50ZnVsQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LW11dGVkXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+U3BlY2lhbCB0aXRsZSB0cmVhdG1lbnQ8L2g1PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuc2x1Z31cIj57ZGF0YS5maWVsZHMuc2x1Z308L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgeyhkYXRhLmZpZWxkcy5tZWRpYSkgPyBcbiAgICAgICAgICAgICAgICAgICAgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZmllbGRzLm1lZGlhICYmIGRhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0ga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKTpcbiAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwia2V5PVwie2RhdGEuZmllbGRzLmVtYmVkTGlua31cIiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9IFxuICAgICAgICAgPC9kaXY+ICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICBcbiApXG4gICAgICBcbiAgICAgICAgXG4gXG4gIFxuIGNvbnN0IENyb3VzZWxDYXJkID0gKHsgZGF0YSB9KSA9PiAoXG4gICBcbiAgIFxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gYWN0aXZlXCI+XG4gICAgICBcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1tdXRlZFwiPjxoMyBrZXk9XCJ7ZGF0YS5maWVsZHMudGl0bGV9XCI+e2RhdGEuZmllbGRzLnRpdGxlfTwvaDM+PC9kaXY+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT5cbiAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLnNsdWd9XCI+e2RhdGEuZmllbGRzLnNsdWd9PC9oND5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgIHsoZGF0YS5maWVsZHMubWVkaWEpID8gXG4gICAgICAgICAgICAgICAgICggPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmZpZWxkcy5tZWRpYSAmJiBkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGtleT1cIntkYXRhLmZpZWxkcy5tZWRpYX1cIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBzdHlsZT0ge2RpdlN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+ICk6XG4gICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcImtleT1cIntkYXRhLmZpZWxkcy5lbWJlZExpbmt9XCIgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgIFxuPC9kaXY+XG4gICAgICAgICAgIFxuPC9kaXY+XG4gICBcbilcbiAgXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgXG4gICAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudF90eXBlOnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6MVxuICAgICAgICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBzb21lRW50cnlBc1Byb3AgPSBlbnRyaWVzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxzb21lRW50cnlBc1Byb3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllczExMSA9IGVudHJpZXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cmllczExMVwiLCBlbnRyaWVzMTExLmZpZWxkcy5tZWRpYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvbWVFbnRyeUFzUHJvcFwiLHNvbWVFbnRyeUFzUHJvcClcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJlbnRyaWVzMTExXCIsZW50cmllczExMS5maWVsZHMubWVkaWFMaW5rLmZpZWxkcy5maWxlKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4gQ29udGVudCBnb3R0ZW4gYW5kIHdyaXR0ZW4gZm9yJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNvbWVFbnRyeUFzUHJvcCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxoMT5GaW5pZG5nczwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zb21lRW50cnlBc1Byb3AubWFwKGRhdGEgPT4gICBcbiAgICAgICAgICAgICAgICAgIDxDb250ZW50ZnVsQ2FyZCBrZXk9e2RhdGEuaWR9IGRhdGE9e2RhdGF9IC8+KX0gICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgIH1cblxuICAgIFxuICAgICAgICBjb25zdCBkaXZTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgY2FyZFN0eWxlID0ge1xuICAgICAgICBcbiAgICAgICAgLy8gICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJyxcbiAgICAgICAgLy8gICB0cmFuc2l0aW9uOiAnMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpJyxcbiAgICAgICAgLy8gICBib3hTaGFkb3c6ICcwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgIFxuICAgICAgICAvLyB9O1xuXG4gICAgICBcbiAgIl19 */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
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
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);


var divStyle = {
  width: '100%'
}; // const cardStyle = {
//   transform: 'scale(1.2)',
//   transition: '0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//   boxShadow: '0 30px 30px rgba(0, 0, 0, 0.5)',
// };

/***/ })

})
//# sourceMappingURL=index.js.fcd0cd2961eb89d870a9.hot-update.js.map