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
    className: "card text-white bg-primary mb-3",
    style: cardStyle
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
        className: "jsx-3977700736"
      }, "Finidngs"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3977700736" + " " + "row"
      }, this.props.someEntryAsProp.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ContentfulCard, {
          key: data.id,
          data: data
        });
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3977700736"
      }, "p.jsx-3977700736{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRJMEIsQUFHNkIsVUFDWiIsImZpbGUiOiIvVXNlcnMvbWF0ZWVuYWgubWF0ZWVuYWgvRG9jdW1lbnRzL1RyYWluaW5ncy9uZXh0SnMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9teUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICcuLi9oZWxwZXJzL2dldGNvbnRlbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcblxuXG5mdW5jdGlvbiBnZXRQb3N0cygpe1xuICByZXR1cm4gW1xuICAgIHsgaWQ6J2hlbGxvLW5leHRqcycgLCB0aXRsZTonSGVsbG8gTmV4dC5qcycgfSxcbiAgICB7IGlkOidsZWFybi1uZXh0anMnICwgdGl0bGU6J0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOidkZXBsb3ktbmV4dGpzJyAsIHRpdGxlOidEZXBsb3kgYXBwcyB3aXRoIFplaXQnIH0sXG4gIF1cbn1cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9saT5cbilcblxuICAvLyBjb25zdCBNZWRpYUl0ZW0gPSAoe2l0ZW19KSA9PiB7XG4gIC8vICAgaXRlbS5pc1ZpZGVvID8gPHZpZGVvIC8+IDogPGltZyAvPlxuICAvLyB9XG5cbi8vIGNvbnN0IENoZWNrTWVkaWFJdGVtID0gKHtkYXRhMX0pID0+IHtcblxuLy8gICBpZihkYXRhQ2hlY2suZmllbGRzLm1lZGlhKSB7IC8qIGRvIHN0dWZmICovIFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuLy8gICAgICAgICB7LyogPE1lZGlhSXRlbSBpdGVtPXtkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZX0vPiAgKi99XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YUNoZWNrLmZpZWxkcy5tZWRpYSAmJiBkYXRhQ2hlY2suZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgc3R5bGU9IHtkaXZTdHlsZX0vPlxuLy8gICAgICAgICA8L2Rpdj4gXG4vLyAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuLy8gICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBocmVmPXtkYXRhLmZpZWxkcy5tZWRpYUxpbmt9PntkYXRhLmZpZWxkcy5tZWRpYUxpbmt9PC9hPiAgKi99XG4vLyAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgIH1cblxuXG4vLyAgIH1cblxuXG4gIGNvbnN0IENvbnRlbnRmdWxDYXJkID0gKHsgZGF0YSB9KSA9PiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e2NhcmRTdHlsZX0+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtbXV0ZWRcIj48aDMga2V5PVwie2RhdGEuZmllbGRzLnRpdGxlfVwiPntkYXRhLmZpZWxkcy50aXRsZX08L2gzPjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5TcGVjaWFsIHRpdGxlIHRyZWF0bWVudDwvaDU+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiIGtleT1cIntkYXRhLmZpZWxkcy5zbHVnfVwiPntkYXRhLmZpZWxkcy5zbHVnfTwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB7KGRhdGEuZmllbGRzLm1lZGlhKSA/IFxuICAgICAgICAgICAgICAgICAgICAoIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5maWVsZHMubWVkaWEgJiYgZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGUudXJsfSBrZXk9XCJ7ZGF0YS5maWVsZHMubWVkaWF9XCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgc3R5bGU9IHtkaXZTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApOlxuICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzQ1XCJrZXk9XCJ7ZGF0YS5maWVsZHMuZW1iZWRMaW5rfVwiICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX0gXG4gICAgICAgICA8L2Rpdj4gICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIFxuIClcbiAgICAgIFxuICAgICAgICBcbiBcbiAgXG4gY29uc3QgQ3JvdXNlbENhcmQgPSAoeyBkYXRhIH0pID0+IChcbiAgIFxuICAgXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBhY3RpdmVcIj5cbiAgICAgIFxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LW11dGVkXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+U3BlY2lhbCB0aXRsZSB0cmVhdG1lbnQ8L2g1PlxuICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuc2x1Z31cIj57ZGF0YS5maWVsZHMuc2x1Z308L2g0PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgeyhkYXRhLmZpZWxkcy5tZWRpYSkgPyBcbiAgICAgICAgICAgICAgICAgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZmllbGRzLm1lZGlhICYmIGRhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0ga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKTpcbiAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwia2V5PVwie2RhdGEuZmllbGRzLmVtYmVkTGlua31cIiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgXG48L2Rpdj5cbiAgICAgICAgICAgXG48L2Rpdj5cbiAgIFxuKVxuICBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICBcbiAgICAgICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50X3R5cGU6dHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToxXG4gICAgICAgICAgICAgICAgICB9KTsgICBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbWVFbnRyeUFzUHJvcCA9IGVudHJpZXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHNvbWVFbnRyeUFzUHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyaWVzMTExID0gZW50cmllcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRyaWVzMTExXCIsIGVudHJpZXMxMTEuZmllbGRzLm1lZGlhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29tZUVudHJ5QXNQcm9wXCIsc29tZUVudHJ5QXNQcm9wKVxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImVudHJpZXMxMTFcIixlbnRyaWVzMTExLmZpZWxkcy5tZWRpYUxpbmsuZmllbGRzLmZpbGUpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPiBDb250ZW50IGdvdHRlbiBhbmQgd3JpdHRlbiBmb3InKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc29tZUVudHJ5QXNQcm9wIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPGgxPkZpbmlkbmdzPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNvbWVFbnRyeUFzUHJvcC5tYXAoZGF0YSA9PiAgIFxuICAgICAgICAgICAgICAgICAgPENvbnRlbnRmdWxDYXJkIGtleT17ZGF0YS5pZH0gZGF0YT17ZGF0YX0gLz4pfSAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgY29uc3QgZGl2U3R5bGUgPSB7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnN0IGNhcmRTdHlsZSA9IHtcbiAgICAgICAgXG4gICAgICAgIC8vICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gICAgICAgIC8vICAgdHJhbnNpdGlvbjogJzAuMnMgYWxsIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG4gICAgICAgIC8vICAgYm94U2hhZG93OiAnMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICBcbiAgICAgICAgLy8gfTtcblxuICAgICAgXG4gICJdfQ== */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
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
//# sourceMappingURL=index.js.4699ee855b4dc059083f.hot-update.js.map