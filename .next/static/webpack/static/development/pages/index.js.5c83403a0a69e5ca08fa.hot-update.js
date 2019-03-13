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
    className: "jsx-366812611" + " " + "col-md-4 mb-3 card-box"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-366812611" + " " + "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-366812611" + " " + "card-title"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}",
    className: "jsx-366812611"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-366812611" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    key: "{data.fields.slug}",
    className: "jsx-366812611" + " " + "card-subtitle text-muted"
  }, data.fields.slug)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-366812611" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-366812611" + " " + "card-text"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.link}",
    className: "jsx-366812611" + " " + "card-subtitle text-muted"
  }, data.fields.link), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    className: "jsx-366812611" + " " + "card-link"
  }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    },
    className: "jsx-366812611"
  }), " ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "366812611"
  }, ".card-box.jsx-366812611{padding-top:25px;}h3.jsx-366812611{padding:20px 0 0 20px;font-size:1.7em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}img.jsx-366812611{width:100%;}.card.jsx-366812611:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);boxShadow:0 30px 30px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFcUIsQUFJa0IsQUFFdUIsQUFRekIsQUFFd0IsV0FGdkIsTUFWRSxLQUdnQixnQkFDTyx1QkFDSixjQVF5QyxLQVA1QyxnQkFDbEIscUdBTzJDLHNDQUMzQyIsImZpbGUiOiIvVXNlcnMvbWF0ZWVuYWgubWF0ZWVuYWgvRG9jdW1lbnRzL1RyYWluaW5ncy9uZXh0SnMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9teUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICcuLi9oZWxwZXJzL2dldGNvbnRlbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcblxuXG5mdW5jdGlvbiBnZXRQb3N0cygpe1xuICByZXR1cm4gW1xuICAgIHsgaWQ6J2hlbGxvLW5leHRqcycgLCB0aXRsZTonSGVsbG8gTmV4dC5qcycgfSxcbiAgICB7IGlkOidsZWFybi1uZXh0anMnICwgdGl0bGU6J0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOidkZXBsb3ktbmV4dGpzJyAsIHRpdGxlOidEZXBsb3kgYXBwcyB3aXRoIFplaXQnIH0sXG4gIF1cbn1cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9saT5cbilcblxuICAvLyBjb25zdCBNZWRpYUl0ZW0gPSAoe2l0ZW19KSA9PiB7XG4gIC8vICAgaXRlbS5pc1ZpZGVvID8gPHZpZGVvIC8+IDogPGltZyAvPlxuICAvLyB9XG5cbi8vIGNvbnN0IENoZWNrTWVkaWFJdGVtID0gKHtkYXRhMX0pID0+IHtcblxuLy8gICBpZihkYXRhQ2hlY2suZmllbGRzLm1lZGlhKSB7IC8qIGRvIHN0dWZmICovIFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuLy8gICAgICAgICB7LyogPE1lZGlhSXRlbSBpdGVtPXtkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZX0vPiAgKi99XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YUNoZWNrLmZpZWxkcy5tZWRpYSAmJiBkYXRhQ2hlY2suZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgc3R5bGU9IHtkaXZTdHlsZX0vPlxuLy8gICAgICAgICA8L2Rpdj4gXG4vLyAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuLy8gICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBocmVmPXtkYXRhLmZpZWxkcy5tZWRpYUxpbmt9PntkYXRhLmZpZWxkcy5tZWRpYUxpbmt9PC9hPiAgKi99XG4vLyAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgIH1cblxuXG4vLyAgIH1cblxuXG4gIGNvbnN0IENvbnRlbnRmdWxDYXJkID0gKHsgZGF0YSB9KSA9PiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItMyBjYXJkLWJveFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT4gKi99XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiIGtleT1cIntkYXRhLmZpZWxkcy5zbHVnfVwiPntkYXRhLmZpZWxkcy5zbHVnfTwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMubGlua31cIj57ZGF0YS5maWVsZHMubGlua308L3A+XG4gICAgICAgICAgICAgICAgICAgeyhkYXRhLmZpZWxkcy5tZWRpYSkgPyBcbiAgICAgICAgICAgICAgICAgICAgKCBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZmllbGRzLm1lZGlhICYmIGRhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0ga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzQ1XCIga2V5PVwie2RhdGEuZmllbGRzLmVtYmVkTGlua31cIiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgKX0gPC9kaXY+XG4gICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY2FyZC1ib3h7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjI1cHhcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT4gICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICBcbiApXG4gICAgICBcbiAgICAgICAgXG4gXG4gIFxuLy8gIGNvbnN0IENyb3VzZWxDYXJkID0gKHsgZGF0YSB9KSA9PiAoXG4gICBcbiAgIFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gYWN0aXZlXCI+XG4gICAgICBcbi8vIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1tdXRlZFwiPjxoMyBrZXk9XCJ7ZGF0YS5maWVsZHMudGl0bGV9XCI+e2RhdGEuZmllbGRzLnRpdGxlfTwvaDM+PC9kaXY+XG5cbi8vICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT5cbi8vICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLnNsdWd9XCI+e2RhdGEuZmllbGRzLnNsdWd9PC9oND5cbi8vICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgIHsoZGF0YS5maWVsZHMubWVkaWEpID8gXG4vLyAgICAgICAgICAgICAgICAgICggPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmZpZWxkcy5tZWRpYSAmJiBkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGtleT1cIntkYXRhLmZpZWxkcy5tZWRpYX1cIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBzdHlsZT0ge2RpdlN0eWxlfS8+XG4vLyAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICk6XG4vLyAgICAgICAgICAgICAgICAoXG4vLyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcImtleT1cIntkYXRhLmZpZWxkcy5lbWJlZExpbmt9XCIgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgIFxuLy8gPC9kaXY+XG4gICAgICAgICAgIFxuLy8gPC9kaXY+XG4gICBcbi8vIClcbiAgXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgXG4gICAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudF90eXBlOnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6MVxuICAgICAgICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBzb21lRW50cnlBc1Byb3AgPSBlbnRyaWVzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxzb21lRW50cnlBc1Byb3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllczExMSA9IGVudHJpZXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cmllczExMVwiLCBlbnRyaWVzMTExLmZpZWxkcy5tZWRpYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvbWVFbnRyeUFzUHJvcFwiLHNvbWVFbnRyeUFzUHJvcClcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJlbnRyaWVzMTExXCIsZW50cmllczExMS5maWVsZHMubWVkaWFMaW5rLmZpZWxkcy5maWxlKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4gQ29udGVudCBnb3R0ZW4gYW5kIHdyaXR0ZW4gZm9yJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNvbWVFbnRyeUFzUHJvcCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxoMT5GaW5pZG5nczwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zb21lRW50cnlBc1Byb3AubWFwKGRhdGEgPT4gICBcbiAgICAgICAgICAgICAgICAgIDxDb250ZW50ZnVsQ2FyZCBrZXk9e2RhdGEuaWR9IGRhdGE9e2RhdGF9IC8+KX0gICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgIH1cblxuICAgIFxuICAgICAgICBjb25zdCBkaXZTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgY2FyZFN0eWxlID0ge1xuICAgICAgICBcbiAgICAgICAgLy8gICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJyxcbiAgICAgICAgLy8gICB0cmFuc2l0aW9uOiAnMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpJyxcbiAgICAgICAgLy8gICBib3hTaGFkb3c6ICcwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgIFxuICAgICAgICAvLyB9O1xuXG4gICAgICBcbiAgIl19 */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
}; //  const CrouselCard = ({ data }) => (
//   <div className="item active">
// <div className="card text-white bg-primary mb-3">
//            <div className="card-title text-muted"><h3 key="{data.fields.title}">{data.fields.title}</h3></div>
//            <div className="card-body">
//              <h5 className="card-title">Special title treatment</h5>
//              <h4 className="card-subtitle text-muted" key="{data.fields.slug}">{data.fields.slug}</h4>
//            </div>
//                {(data.fields.media) ? 
//                  ( <div className="card-body">
//                       <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
//                        <img src={data.fields.media && data.fields.media.fields.file.url} key="{data.fields.media}" className="card-link" style= {divStyle}/>
//                    </div> ):
//                (
//                    <div className="card-body">
//                            <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
//                            <div width="200" height="345"key="{data.fields.embedLink}"  dangerouslySetInnerHTML={{ __html: data.fields.embedLink}} >
//                            </div>
//                          </div>
//                )}
// </div>
// </div>
// )


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
//# sourceMappingURL=index.js.5c83403a0a69e5ca08fa.hot-update.js.map