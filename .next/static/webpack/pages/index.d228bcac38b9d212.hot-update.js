"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/login.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/login.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nhtml, body {\\n    display: grid;\\n    height: 100%;\\n    width: 100%;\\n    place-items: center;\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n}\\n\\n.wrapper {\\n    max-width: 390px;\\n    background-color: #fff;\\n    padding: 30px;\\n    border-radius: 10px;\\n    box-shadow: 0 15px 20px rgba(0, 0, 0, .1);\\n    overflow: hidden;\\n}\\n\\n.title-text {\\n    display: flex;\\n    width: 200%;\\n}\\n\\n.title-text .title {\\n    width: 50%;\\n    font-size: 35px;\\n    font-weight: 600;\\n    text-align: center;\\n    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n    color: #555;\\n}\\n\\n.form-container {\\n    width: 100%;\\n    overflow: hidden;\\n}\\n\\n.slide-controls {\\n    display: flex;\\n    justify-content: space-between;\\n    height: 50px;\\n    width: 100%;\\n    border: 1px solid lightgrey;\\n    overflow: hidden;\\n    margin: 30px 0 10px 0;\\n    border-radius: 10px;\\n    position: relative;\\n}\\n\\n.slide-controls .slide {\\n    width: 100%;\\n    height: 100%;\\n    font-size: 18px;\\n    font-weight: 500;\\n    line-height: 48px;\\n    text-align: center;\\n    cursor: pointer;\\n    color: #fff;\\n    z-index: 1;\\n    transition: all .6s ease;\\n}\\n\\n.slide-controls .signup {\\n    color: #212121;\\n}\\n\\n.slide-tab {\\n    position: absolute;\\n    height: 100%;\\n    width: 50%;\\n    top: 0;\\n    left: 0;\\n    z-index: 0;\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n\\ninput[type=\\\"radio\\\"] {\\n    display: none;\\n}\\n\\n#signup:checked ~ .slide-tab {\\n    left: 50%;\\n}\\n\\n#signup:checked ~ .signup {\\n    color: #fff;\\n}\\n\\n#signup:checked ~ .login {\\n    color: #212121;\\n}\\n\\n.form-inner {\\n    display: flex;\\n    width: 200%;\\n    transform: translateX(0%);\\n    transition: transform 0.6s ease-in-out;\\n}\\n\\n/* When the signup form is active, move the form-inner to show the signup form */\\n.form-inner.move {\\n    transform: translateX(-50%);\\n}\\n\\n.form-inner form {\\n    width: 50%;\\n}\\n\\n\\n\\n.form-inner form .field {\\n    height: 50px;\\n    width: 100%;\\n    margin-top: 20px;\\n}\\n\\n.form-inner form .field input {\\n    width: 100%;\\n    height: 100%;\\n    outline: none;\\n    font-size: 17px;\\n    padding-left: 15px;\\n    border-radius: 10px;\\n    border: 1px solid lightgray;\\n    border-bottom-width: 2px;\\n    transition: all 0.4s ease;\\n}\\n\\n.form-inner form .field input:focus {\\n    border-color: #fc83bb;\\n}\\n\\n.form-inner form .pass-link {\\n    margin-top: 5px;\\n}\\n\\n.form-inner form .pass-link a,\\na {\\n    color: #fa4299;\\n    text-decoration: none;\\n}\\n\\n.form-inner form .signup-link {\\n    color: #212121;\\n    text-align: center;\\n    margin-top: 30px;\\n}\\n\\n.form-inner form .pass-link a:hover,\\n.form-inner form .signup-link a:hover {\\n    text-decoration: underline;\\n}\\n\\nform .field input[type=\\\"submit\\\"] {\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n    color: #fff;\\n    font-size: 20px;\\n    font-weight: 500;\\n    padding-left: 0;\\n    border: none;\\n    cursor: pointer;\\n}\\n\\n.move {\\n    left: 50% !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/login.css\"],\"names\":[],\"mappings\":\"AAAA,qHAAqH;;AAErH;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,sDAAsD;AAC1D;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,2DAA2D;IAC3D,WAAW;AACf;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,MAAM;IACN,OAAO;IACP,UAAU;IACV,sDAAsD;IACtD,2DAA2D;AAC/D;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA,gFAAgF;AAChF;IACI,2BAA2B;AAC/B;;AAEA;IACI,UAAU;AACd;;;;AAIA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,sDAAsD;IACtD,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nhtml, body {\\n    display: grid;\\n    height: 100%;\\n    width: 100%;\\n    place-items: center;\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n}\\n\\n.wrapper {\\n    max-width: 390px;\\n    background-color: #fff;\\n    padding: 30px;\\n    border-radius: 10px;\\n    box-shadow: 0 15px 20px rgba(0, 0, 0, .1);\\n    overflow: hidden;\\n}\\n\\n.title-text {\\n    display: flex;\\n    width: 200%;\\n}\\n\\n.title-text .title {\\n    width: 50%;\\n    font-size: 35px;\\n    font-weight: 600;\\n    text-align: center;\\n    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n    color: #555;\\n}\\n\\n.form-container {\\n    width: 100%;\\n    overflow: hidden;\\n}\\n\\n.slide-controls {\\n    display: flex;\\n    justify-content: space-between;\\n    height: 50px;\\n    width: 100%;\\n    border: 1px solid lightgrey;\\n    overflow: hidden;\\n    margin: 30px 0 10px 0;\\n    border-radius: 10px;\\n    position: relative;\\n}\\n\\n.slide-controls .slide {\\n    width: 100%;\\n    height: 100%;\\n    font-size: 18px;\\n    font-weight: 500;\\n    line-height: 48px;\\n    text-align: center;\\n    cursor: pointer;\\n    color: #fff;\\n    z-index: 1;\\n    transition: all .6s ease;\\n}\\n\\n.slide-controls .signup {\\n    color: #212121;\\n}\\n\\n.slide-tab {\\n    position: absolute;\\n    height: 100%;\\n    width: 50%;\\n    top: 0;\\n    left: 0;\\n    z-index: 0;\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n\\ninput[type=\\\"radio\\\"] {\\n    display: none;\\n}\\n\\n#signup:checked ~ .slide-tab {\\n    left: 50%;\\n}\\n\\n#signup:checked ~ .signup {\\n    color: #fff;\\n}\\n\\n#signup:checked ~ .login {\\n    color: #212121;\\n}\\n\\n.form-inner {\\n    display: flex;\\n    width: 200%;\\n    transform: translateX(0%);\\n    transition: transform 0.6s ease-in-out;\\n}\\n\\n/* When the signup form is active, move the form-inner to show the signup form */\\n.form-inner.move {\\n    transform: translateX(-50%);\\n}\\n\\n.form-inner form {\\n    width: 50%;\\n}\\n\\n\\n\\n.form-inner form .field {\\n    height: 50px;\\n    width: 100%;\\n    margin-top: 20px;\\n}\\n\\n.form-inner form .field input {\\n    width: 100%;\\n    height: 100%;\\n    outline: none;\\n    font-size: 17px;\\n    padding-left: 15px;\\n    border-radius: 10px;\\n    border: 1px solid lightgray;\\n    border-bottom-width: 2px;\\n    transition: all 0.4s ease;\\n}\\n\\n.form-inner form .field input:focus {\\n    border-color: #fc83bb;\\n}\\n\\n.form-inner form .pass-link {\\n    margin-top: 5px;\\n}\\n\\n.form-inner form .pass-link a,\\na {\\n    color: #fa4299;\\n    text-decoration: none;\\n}\\n\\n.form-inner form .signup-link {\\n    color: #212121;\\n    text-align: center;\\n    margin-top: 30px;\\n}\\n\\n.form-inner form .pass-link a:hover,\\n.form-inner form .signup-link a:hover {\\n    text-decoration: underline;\\n}\\n\\nform .field input[type=\\\"submit\\\"] {\\n    background: linear-gradient(to left, #a445b2, #fa4299);\\n    color: #fff;\\n    font-size: 20px;\\n    font-weight: 500;\\n    padding-left: 0;\\n    border: none;\\n    cursor: pointer;\\n}\\n\\n.move {\\n    left: 50% !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvbG9naW4uY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxpSEFBaUgsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxtQkFBbUIsT0FBTyxnQkFBZ0IsaUJBQWlCLDZCQUE2Qix5Q0FBeUMsR0FBRyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixrQkFBa0IsMEJBQTBCLDZEQUE2RCxHQUFHLGNBQWMsdUJBQXVCLDZCQUE2QixvQkFBb0IsMEJBQTBCLGdEQUFnRCx1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLGtCQUFrQixHQUFHLHdCQUF3QixpQkFBaUIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsa0VBQWtFLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsbUJBQW1CLGtCQUFrQixrQ0FBa0MsdUJBQXVCLDRCQUE0QiwwQkFBMEIseUJBQXlCLEdBQUcsNEJBQTRCLGtCQUFrQixtQkFBbUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IseUJBQXlCLHNCQUFzQixrQkFBa0IsaUJBQWlCLCtCQUErQixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxnQkFBZ0IseUJBQXlCLG1CQUFtQixpQkFBaUIsYUFBYSxjQUFjLGlCQUFpQiw2REFBNkQsa0VBQWtFLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLGtDQUFrQyxnQkFBZ0IsR0FBRywrQkFB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a0MsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsaUNBQWlDLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixtQkFBbUIsb0JBQW9CLHNCQUFzQix5QkFBeUIsMEJBQTBCLGtDQUFrQywrQkFBK0IsZ0NBQWdDLEdBQUcseUNBQXlDLDRCQUE0QixHQUFHLGlDQUFpQyxzQkFBc0IsR0FBRyx1Q0FBdUMscUJBQXFCLDRCQUE0QixHQUFHLG1DQUFtQyxxQkFBcUIseUJBQXlCLHVCQUF1QixHQUFHLGlGQUFpRixpQ0FBaUMsR0FBRyx3Q0FBd0MsNkRBQTZELGtCQUFrQixzQkFBc0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsc0JBQXNCLEdBQUcsV0FBVywyQkFBMkIsR0FBRyxxQkFBcUI7QUFDaCtQO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9sb2dpbi5jc3M/ZDE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgbWF4LXdpZHRoOiAzOTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwMCU7XFxufVxcblxcbi50aXRsZS10ZXh0IC50aXRsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcXG4gICAgY29sb3I6ICM1NTU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2xpZGUtY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luOiAzMHB4IDAgMTBweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zbGlkZS1jb250cm9scyAuc2xpZGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNnMgZWFzZTtcXG59XFxuXFxuLnNsaWRlLWNvbnRyb2xzIC5zaWdudXAge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnNsaWRlLXRhYiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjYTQ0NWIyLCAjZmE0Mjk5KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jc2lnbnVwOmNoZWNrZWQgfiAuc2xpZGUtdGFiIHtcXG4gICAgbGVmdDogNTAlO1xcbn1cXG5cXG4jc2lnbnVwOmNoZWNrZWQgfiAuc2lnbnVwIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNzaWdudXA6Y2hlY2tlZCB+IC5sb2dpbiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uZm9ybS1pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogV2hlbiB0aGUgc2lnbnVwIGZvcm0gaXMgYWN0aXZlLCBtb3ZlIHRoZSBmb3JtLWlubmVyIHRvIHNob3cgdGhlIHNpZ251cCBmb3JtICovXFxuLmZvcm0taW5uZXIubW92ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLmZvcm0taW5uZXIgZm9ybSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcblxcblxcbi5mb3JtLWlubmVyIGZvcm0gLmZpZWxkIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmZvcm0taW5uZXIgZm9ybSAuZmllbGQgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcblxcbi5mb3JtLWlubmVyIGZvcm0gLmZpZWxkIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmM4M2JiO1xcbn1cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5wYXNzLWxpbmsge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5mb3JtLWlubmVyIGZvcm0gLnBhc3MtbGluayBhLFxcbmEge1xcbiAgICBjb2xvcjogI2ZhNDI5OTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5zaWdudXAtbGluayB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5mb3JtLWlubmVyIGZvcm0gLnBhc3MtbGluayBhOmhvdmVyLFxcbi5mb3JtLWlubmVyIGZvcm0gLnNpZ251cC1saW5rIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9ybSAuZmllbGQgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZlIHtcXG4gICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2xvZ2luLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxSEFBcUg7O0FBRXJIO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLHNEQUFzRDtJQUN0RCwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNDQUFzQztBQUMxQzs7QUFFQSxnRkFBZ0Y7QUFDaEY7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNhNDQ1YjIsICNmYTQyOTkpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMzkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDAlO1xcbn1cXG5cXG4udGl0bGUtdGV4dCAudGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxuICAgIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNsaWRlLWNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMzBweCAwIDEwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2xpZGUtY29udHJvbHMgLnNsaWRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGVhc2U7XFxufVxcblxcbi5zbGlkZS1jb250cm9scyAuc2lnbnVwIHtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5zbGlkZS10YWIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3NpZ251cDpjaGVja2VkIH4gLnNsaWRlLXRhYiB7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuI3NpZ251cDpjaGVja2VkIH4gLnNpZ251cCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc2lnbnVwOmNoZWNrZWQgfiAubG9naW4ge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmZvcm0taW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIFdoZW4gdGhlIHNpZ251cCBmb3JtIGlzIGFjdGl2ZSwgbW92ZSB0aGUgZm9ybS1pbm5lciB0byBzaG93IHRoZSBzaWdudXAgZm9ybSAqL1xcbi5mb3JtLWlubmVyLm1vdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbi5mb3JtLWlubmVyIGZvcm0ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5maWVsZCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb3JtLWlubmVyIGZvcm0gLmZpZWxkIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5maWVsZCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZjODNiYjtcXG59XFxuXFxuLmZvcm0taW5uZXIgZm9ybSAucGFzcy1saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5wYXNzLWxpbmsgYSxcXG5hIHtcXG4gICAgY29sb3I6ICNmYTQyOTk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvcm0taW5uZXIgZm9ybSAuc2lnbnVwLWxpbmsge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uZm9ybS1pbm5lciBmb3JtIC5wYXNzLWxpbmsgYTpob3ZlcixcXG4uZm9ybS1pbm5lciBmb3JtIC5zaWdudXAtbGluayBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmZvcm0gLmZpZWxkIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNhNDQ1YjIsICNmYTQyOTkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW92ZSB7XFxuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/login.css\n"));

/***/ })

});