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
    className: "jsx-2327750359" + " " + "col-md-4 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2327750359" + " " + "card text-white bg-primary mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2327750359" + " " + "card-title text-muted"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
    key: "{data.fields.title}",
    className: "jsx-2327750359"
  }, data.fields.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2327750359" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
    key: "{data.fields.slug}",
    className: "jsx-2327750359" + " " + "card-subtitle text-muted"
  }, data.fields.slug)), data.fields.media ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2327750359" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-2327750359" + " " + "card-text"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.fields.media && data.fields.media.fields.file.url,
    key: "{data.fields.media}",
    className: "jsx-2327750359" + " " + "card-link"
  })) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2327750359" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
    key: "{data.fields.content}",
    className: "jsx-2327750359" + " " + "card-text"
  }, data.fields.content), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    width: "200",
    height: "345",
    key: "{data.fields.embedLink}",
    dangerouslySetInnerHTML: {
      __html: data.fields.embedLink
    },
    className: "jsx-2327750359"
  }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2327750359"
  }, "h3.jsx-2327750359{padding:20px 0 0 20px;font-size:1.7em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}img.jsx-2327750359{width:100%;}.card.jsx-2327750359:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);transition:0.2s all cubic-bezier(0.175,0.885,0.32,1.275);boxShadow:0 30px 30px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRlZW5haC5tYXRlZW5haC9Eb2N1bWVudHMvVHJhaW5pbmdzL25leHRKcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFcUIsQUFHeUMsQUFRekIsQUFFd0IsV0FGdkIsV0FQa0IsZ0JBQ08sdUJBQ0osY0FReUMsS0FQNUMsZ0JBQ2xCLHFHQU8yQyxzQ0FDM0MiLCJmaWxlIjoiL1VzZXJzL21hdGVlbmFoLm1hdGVlbmFoL0RvY3VtZW50cy9UcmFpbmluZ3MvbmV4dEpzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2NyZWF0ZUNsaWVudH0gZnJvbSAnLi4vaGVscGVycy9nZXRjb250ZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XG5cblxuZnVuY3Rpb24gZ2V0UG9zdHMoKXtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOidoZWxsby1uZXh0anMnICwgdGl0bGU6J0hlbGxvIE5leHQuanMnIH0sXG4gICAgeyBpZDonbGVhcm4tbmV4dGpzJyAsIHRpdGxlOidMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgeyBpZDonZGVwbG95LW5leHRqcycgLCB0aXRsZTonRGVwbG95IGFwcHMgd2l0aCBaZWl0JyB9LFxuICBdXG59XG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gIDwvbGk+XG4pXG5cbiAgLy8gY29uc3QgTWVkaWFJdGVtID0gKHtpdGVtfSkgPT4ge1xuICAvLyAgIGl0ZW0uaXNWaWRlbyA/IDx2aWRlbyAvPiA6IDxpbWcgLz5cbiAgLy8gfVxuXG4vLyBjb25zdCBDaGVja01lZGlhSXRlbSA9ICh7ZGF0YTF9KSA9PiB7XG5cbi8vICAgaWYoZGF0YUNoZWNrLmZpZWxkcy5tZWRpYSkgeyAvKiBkbyBzdHVmZiAqLyBcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgey8qIDxNZWRpYUl0ZW0gaXRlbT17ZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGV9Lz4gICovfVxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2RhdGFDaGVjay5maWVsZHMubWVkaWEgJiYgZGF0YUNoZWNrLmZpZWxkcy5tZWRpYS5maWVsZHMuZmlsZS51cmx9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbi8vICAgICAgICAgPC9kaXY+IFxuLy8gICAgICAgfWVsc2V7XG4vLyAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbi8vICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgaHJlZj17ZGF0YS5maWVsZHMubWVkaWFMaW5rfT57ZGF0YS5maWVsZHMubWVkaWFMaW5rfTwvYT4gICovfVxuLy8gICAgICAgICAgICAgICAgIDxkaXYgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzNDVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICB9XG5cblxuLy8gICB9XG5cblxuICBjb25zdCBDb250ZW50ZnVsQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LW11dGVkXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT4gKi99XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiIGtleT1cIntkYXRhLmZpZWxkcy5zbHVnfVwiPntkYXRhLmZpZWxkcy5zbHVnfTwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB7KGRhdGEuZmllbGRzLm1lZGlhKSA/IFxuICAgICAgICAgICAgICAgICAgICAoIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5maWVsZHMubWVkaWEgJiYgZGF0YS5maWVsZHMubWVkaWEuZmllbGRzLmZpbGUudXJsfSBrZXk9XCJ7ZGF0YS5maWVsZHMubWVkaWF9XCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApOlxuICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuY29udGVudH1cIj57ZGF0YS5maWVsZHMuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzQ1XCJrZXk9XCJ7ZGF0YS5maWVsZHMuZW1iZWRMaW5rfVwiICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuZmllbGRzLmVtYmVkTGlua319ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX0gXG4gICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPiAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIFxuIClcbiAgICAgIFxuICAgICAgICBcbiBcbiAgXG4gY29uc3QgQ3JvdXNlbENhcmQgPSAoeyBkYXRhIH0pID0+IChcbiAgIFxuICAgXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBhY3RpdmVcIj5cbiAgICAgIFxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LW11dGVkXCI+PGgzIGtleT1cIntkYXRhLmZpZWxkcy50aXRsZX1cIj57ZGF0YS5maWVsZHMudGl0bGV9PC9oMz48L2Rpdj5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+U3BlY2lhbCB0aXRsZSB0cmVhdG1lbnQ8L2g1PlxuICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIiBrZXk9XCJ7ZGF0YS5maWVsZHMuc2x1Z31cIj57ZGF0YS5maWVsZHMuc2x1Z308L2g0PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgeyhkYXRhLmZpZWxkcy5tZWRpYSkgPyBcbiAgICAgICAgICAgICAgICAgKCA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIGtleT1cIntkYXRhLmZpZWxkcy5jb250ZW50fVwiPntkYXRhLmZpZWxkcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZmllbGRzLm1lZGlhICYmIGRhdGEuZmllbGRzLm1lZGlhLmZpZWxkcy5maWxlLnVybH0ga2V5PVwie2RhdGEuZmllbGRzLm1lZGlhfVwiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHN0eWxlPSB7ZGl2U3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKTpcbiAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIga2V5PVwie2RhdGEuZmllbGRzLmNvbnRlbnR9XCI+e2RhdGEuZmllbGRzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM0NVwia2V5PVwie2RhdGEuZmllbGRzLmVtYmVkTGlua31cIiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmZpZWxkcy5lbWJlZExpbmt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgXG48L2Rpdj5cbiAgICAgICAgICAgXG48L2Rpdj5cbiAgIFxuKVxuICBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICBcbiAgICAgICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50X3R5cGU6dHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToxXG4gICAgICAgICAgICAgICAgICB9KTsgICBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbWVFbnRyeUFzUHJvcCA9IGVudHJpZXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHNvbWVFbnRyeUFzUHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyaWVzMTExID0gZW50cmllcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRyaWVzMTExXCIsIGVudHJpZXMxMTEuZmllbGRzLm1lZGlhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29tZUVudHJ5QXNQcm9wXCIsc29tZUVudHJ5QXNQcm9wKVxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImVudHJpZXMxMTFcIixlbnRyaWVzMTExLmZpZWxkcy5tZWRpYUxpbmsuZmllbGRzLmZpbGUpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPiBDb250ZW50IGdvdHRlbiBhbmQgd3JpdHRlbiBmb3InKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc29tZUVudHJ5QXNQcm9wIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPGgxPkZpbmlkbmdzPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNvbWVFbnRyeUFzUHJvcC5tYXAoZGF0YSA9PiAgIFxuICAgICAgICAgICAgICAgICAgPENvbnRlbnRmdWxDYXJkIGtleT17ZGF0YS5pZH0gZGF0YT17ZGF0YX0gLz4pfSAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgfVxuXG4gICAgXG4gICAgICAgIGNvbnN0IGRpdlN0eWxlID0ge1xuICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBjYXJkU3R5bGUgPSB7XG4gICAgICAgIFxuICAgICAgICAvLyAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiknLFxuICAgICAgICAvLyAgIHRyYW5zaXRpb246ICcwLjJzIGFsbCBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuICAgICAgICAvLyAgIGJveFNoYWRvdzogJzAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgICAgXG4gICAgICAgIC8vIH07XG5cbiAgICAgIFxuICAiXX0= */\n/*@ sourceURL=/Users/mateenah.mateenah/Documents/Trainings/nextJs/hello-next/pages/index.js */"));
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
//# sourceMappingURL=index.js.7e38016208b41a04a6e1.hot-update.js.map