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
    className: "jsx-3868047995" + " " + "col-md-4 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-3868047995" + " " + "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-3868047995" + " " + "card-title text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}",
    className: "jsx-3868047995"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-3868047995" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    className: "jsx-3868047995" + " " + "card-title"
  }, "Special title treatment"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", {
    key: "{data.fields.slug}",
    className: "jsx-3868047995" + " " + "card-subtitle text-muted"
  }, data.fields.slug)), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-3868047995" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-3868047995" + " " + "card-text"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    style: divStyle,
    className: "jsx-3868047995" + " " + "card-link"
  })) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-3868047995" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-3868047995" + " " + "card-text"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    },
    className: "jsx-3868047995"
  }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "3868047995"
  }, ".card.jsx-3868047995:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);boxShadow:0 30px 30px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFcUIsQUFHd0MsMkVBQ3VDLDBIQUNuQixzQ0FDM0MiLCJmaWxlIjoiL1VzZXJzL21hdGVlbmFoLm1hdGVlbmFoL0RvY3VtZW50cy9UcmFpbmluZ3MvbmV4dEpzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2NyZWF0ZUNsaWVudH0gZnJvbSAnLi4vaGVscGVycy9nZXRjb250ZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XG5cblxuZnVuY3Rpb24gZ2V0UG9zdHMoKXtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOidoZWxsby1uZXh0anMnICwgdGl0bGU6J0hlbGxvIE5leHQuanMnIH0sXG4gICAgeyBpZDonbGVhcm4tbmV4dGpzJyAsIHRpdGxlOidMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgeyBpZDonZGVwbG95LW5leHRqcycgLCB0aXRsZTonRGVwbG95IGFwcHMgd2l0aCBaZWl0JyB9LFxuICBdXG59XG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gIDwvbGk+XG4pXG5cbiAgLy8gY29uc3QgTWVkaWFJdGVtID0gKHtpdGVtfSkgPT4ge1xuICAvLyAgIGl0ZW0uaXNWaWRlbyA/IDx2aWRlbyAvPiA6IDxpbWcgLz5cbiAgLy8gfVxuXG4vLyBjb25zdCBDaGVja01lZGlhSXRlbSA9ICh7ZGF0YTF9KSA9PiB7XG5cbi8vICAgaWYoZGF0YUNoZWNrLmZpZWxkcy5tZWRpYSkgeyAvKiBkbyBzdHVmZiAqLyBcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgey8qIDxNZWRpYUl0ZW0gaXRlbT17ZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGV9Lz4gICovfVxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2RhdGFDaGVjay5maWVsZHMubWVkaWEgJiYgZGF0YUNoZWNrLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbi8vICAgICAgICAgPC9kaXY+IFxuLy8gICAgICAgfWVsc2V7XG4vLyAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbi8vICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgaHJlZj17ZGF0YS5maWVsZHMubWVkaWFMaW5rfT57ZGF0YS5maWVsZHMubWVkaWFMaW5rfTwvYT4gICovfVxuLy8gICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICB9XG5cblxuLy8gICB9XG5cblxuICBjb25zdCBDb250ZW50ZnVsQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LW11dGVkXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+U3BlY2lhbCB0aXRsZSB0cmVhdG1lbnQ8L2g1PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuc2x1Z31cIj57ZGF0YS5maWVsZHMuc2x1Z308L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgeyhkYXRhLmZpZWxkcy5tZWRpYSkgPyBcbiAgICAgICAgICAgICAgICAgICAgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZmllbGRzLm1lZGlhICYmIGRhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0ga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKTpcbiAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwia2V5PVwie2RhdGEuZmllbGRzLmVtYmVkTGlua31cIiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9IFxuICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT4gICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICBcbiApXG4gICAgICBcbiAgICAgICAgXG4gXG4gIFxuIGNvbnN0IENyb3VzZWxDYXJkID0gKHsgZGF0YSB9KSA9PiAoXG4gICBcbiAgIFxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gYWN0aXZlXCI+XG4gICAgICBcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1tdXRlZFwiPjxoMyBrZXk9XCJ7ZGF0YS5maWVsZHMudGl0bGV9XCI+e2RhdGEuZmllbGRzLnRpdGxlfTwvaDM+PC9kaXY+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT5cbiAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLnNsdWd9XCI+e2RhdGEuZmllbGRzLnNsdWd9PC9oND5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgIHsoZGF0YS5maWVsZHMubWVkaWEpID8gXG4gICAgICAgICAgICAgICAgICggPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmZpZWxkcy5tZWRpYSAmJiBkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGtleT1cIntkYXRhLmZpZWxkcy5tZWRpYX1cIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBzdHlsZT0ge2RpdlN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+ICk6XG4gICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcImtleT1cIntkYXRhLmZpZWxkcy5lbWJlZExpbmt9XCIgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgIFxuPC9kaXY+XG4gICAgICAgICAgIFxuPC9kaXY+XG4gICBcbilcbiAgXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgXG4gICAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudF90eXBlOnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6MVxuICAgICAgICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBzb21lRW50cnlBc1Byb3AgPSBlbnRyaWVzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxzb21lRW50cnlBc1Byb3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllczExMSA9IGVudHJpZXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cmllczExMVwiLCBlbnRyaWVzMTExLmZpZWxkcy5tZWRpYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvbWVFbnRyeUFzUHJvcFwiLHNvbWVFbnRyeUFzUHJvcClcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJlbnRyaWVzMTExXCIsZW50cmllczExMS5maWVsZHMubWVkaWFMaW5rLmZpZWxkcy5maWxlKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4gQ29udGVudCBnb3R0ZW4gYW5kIHdyaXR0ZW4gZm9yJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNvbWVFbnRyeUFzUHJvcCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxoMT5GaW5pZG5nczwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zb21lRW50cnlBc1Byb3AubWFwKGRhdGEgPT4gICBcbiAgICAgICAgICAgICAgICAgIDxDb250ZW50ZnVsQ2FyZCBrZXk9e2RhdGEuaWR9IGRhdGE9e2RhdGF9IC8+KX0gICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgIH1cblxuICAgIFxuICAgICAgICBjb25zdCBkaXZTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgY2FyZFN0eWxlID0ge1xuICAgICAgICBcbiAgICAgICAgLy8gICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJyxcbiAgICAgICAgLy8gICB0cmFuc2l0aW9uOiAnMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpJyxcbiAgICAgICAgLy8gICBib3hTaGFkb3c6ICcwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgIFxuICAgICAgICAvLyB9O1xuXG4gICAgICBcbiAgIl19 */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
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
        className: "jsx-3046761007"
      }, "Finidngs"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3046761007" + " " + "row"
      }, this.props.someEntryAsProp.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ContentfulCard, {
          key: data.id,
          data: data
        });
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3046761007"
      }, "p.jsx-3046761007{color:red;}.card.jsx-3046761007{-webkit-transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;-ms-transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;transform:scale(1.2), transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275), boxShadow:0 30px 30px rgba(0,0,0,0.5),;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1KMEIsQUFHNkIsQUFNYixVQUxDLHVXQUtBIiwiZmlsZSI6Ii9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL215TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJy4uL2hlbHBlcnMvZ2V0Y29udGVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnb3MnO1xuXG5cbmZ1bmN0aW9uIGdldFBvc3RzKCl7XG4gIHJldHVybiBbXG4gICAgeyBpZDonaGVsbG8tbmV4dGpzJyAsIHRpdGxlOidIZWxsbyBOZXh0LmpzJyB9LFxuICAgIHsgaWQ6J2xlYXJuLW5leHRqcycgLCB0aXRsZTonTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuICAgIHsgaWQ6J2RlcGxveS1uZXh0anMnICwgdGl0bGU6J0RlcGxveSBhcHBzIHdpdGggWmVpdCcgfSxcbiAgXVxufVxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2xpPlxuKVxuXG4gIC8vIGNvbnN0IE1lZGlhSXRlbSA9ICh7aXRlbX0pID0+IHtcbiAgLy8gICBpdGVtLmlzVmlkZW8gPyA8dmlkZW8gLz4gOiA8aW1nIC8+XG4gIC8vIH1cblxuLy8gY29uc3QgQ2hlY2tNZWRpYUl0ZW0gPSAoe2RhdGExfSkgPT4ge1xuXG4vLyAgIGlmKGRhdGFDaGVjay5maWVsZHMubWVkaWEpIHsgLyogZG8gc3R1ZmYgKi8gXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4vLyAgICAgICAgIHsvKiA8TWVkaWFJdGVtIGl0ZW09e2RhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlfS8+ICAqL31cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhQ2hlY2suZmllbGRzLm1lZGlhICYmIGRhdGFDaGVjay5maWVsZHMubWVkaWEuZmllbGRzLmZpbGUudXJsfSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBzdHlsZT0ge2RpdlN0eWxlfS8+XG4vLyAgICAgICAgIDwvZGl2PiBcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4vLyAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGhyZWY9e2RhdGEuZmllbGRzLm1lZGlhTGlua30+e2RhdGEuZmllbGRzLm1lZGlhTGlua308L2E+ICAqL31cbi8vICAgICAgICAgICAgICAgICA8ZGl2IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzQ1XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgfVxuXG5cbi8vICAgfVxuXG5cbiAgY29uc3QgQ29udGVudGZ1bENhcmQgPSAoeyBkYXRhIH0pID0+IChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1tdXRlZFwiPjxoMyBrZXk9XCJ7ZGF0YS5maWVsZHMudGl0bGV9XCI+e2RhdGEuZmllbGRzLnRpdGxlfTwvaDM+PC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCIga2V5PVwie2RhdGEuZmllbGRzLnNsdWd9XCI+e2RhdGEuZmllbGRzLnNsdWd9PC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHsoZGF0YS5maWVsZHMubWVkaWEpID8gXG4gICAgICAgICAgICAgICAgICAgICggPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmZpZWxkcy5tZWRpYSAmJiBkYXRhLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGtleT1cIntkYXRhLmZpZWxkcy5tZWRpYX1cIiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBzdHlsZT0ge2RpdlN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICk6XG4gICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcImtleT1cIntkYXRhLmZpZWxkcy5lbWJlZExpbmt9XCIgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5maWVsZHMuZW1iZWRMaW5rfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfSBcbiAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+ICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG4gKVxuICAgICAgXG4gICAgICAgIFxuIFxuICBcbiBjb25zdCBDcm91c2VsQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxuICAgXG4gICBcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGVtIGFjdGl2ZVwiPlxuICAgICAgXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtbXV0ZWRcIj48aDMga2V5PVwie2RhdGEuZmllbGRzLnRpdGxlfVwiPntkYXRhLmZpZWxkcy50aXRsZX08L2gzPjwvZGl2PlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5TcGVjaWFsIHRpdGxlIHRyZWF0bWVudDwvaDU+XG4gICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiIGtleT1cIntkYXRhLmZpZWxkcy5zbHVnfVwiPntkYXRhLmZpZWxkcy5zbHVnfTwvaDQ+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICB7KGRhdGEuZmllbGRzLm1lZGlhKSA/IFxuICAgICAgICAgICAgICAgICAoIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5maWVsZHMubWVkaWEgJiYgZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGUudXJsfSBrZXk9XCJ7ZGF0YS5maWVsZHMubWVkaWF9XCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgc3R5bGU9IHtkaXZTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PiApOlxuICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzQ1XCJrZXk9XCJ7ZGF0YS5maWVsZHMuZW1iZWRMaW5rfVwiICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICBcbjwvZGl2PlxuICAgICAgICAgICBcbjwvZGl2PlxuICAgXG4pXG4gIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgIFxuICAgICAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRfdHlwZTp0eXBlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOjFcbiAgICAgICAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICAgICAgICAgICAgY29uc3Qgc29tZUVudHJ5QXNQcm9wID0gZW50cmllcy5pdGVtcztcbiAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8c29tZUVudHJ5QXNQcm9wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJpZXMxMTEgPSBlbnRyaWVzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudHJpZXMxMTFcIiwgZW50cmllczExMS5maWVsZHMubWVkaWEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb21lRW50cnlBc1Byb3BcIixzb21lRW50cnlBc1Byb3ApXG4gICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZW50cmllczExMVwiLGVudHJpZXMxMTEuZmllbGRzLm1lZGlhTGluay5maWVsZHMuZmlsZSlcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+IENvbnRlbnQgZ290dGVuIGFuZCB3cml0dGVuIGZvcicpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBzb21lRW50cnlBc1Byb3AgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICA8aDE+RmluaWRuZ3M8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc29tZUVudHJ5QXNQcm9wLm1hcChkYXRhID0+ICAgXG4gICAgICAgICAgICAgICAgICA8Q29udGVudGZ1bENhcmQga2V5PXtkYXRhLmlkfSBkYXRhPXtkYXRhfSAvPil9ICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSxcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgY29uc3QgZGl2U3R5bGUgPSB7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnN0IGNhcmRTdHlsZSA9IHtcbiAgICAgICAgXG4gICAgICAgIC8vICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gICAgICAgIC8vICAgdHJhbnNpdGlvbjogJzAuMnMgYWxsIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG4gICAgICAgIC8vICAgYm94U2hhZG93OiAnMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICBcbiAgICAgICAgLy8gfTtcblxuICAgICAgXG4gICJdfQ== */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
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
//# sourceMappingURL=index.js.e9241704cfa18dda221d.hot-update.js.map