"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/dashboard.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/dashboard.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@property --rotate {\\n    syntax: \\\"<angle>\\\";\\n    initial-value: 132deg;\\n    inherits: false;\\n  }\\n  \\n  :root {\\n    --card-height: 65vh;\\n    --card-width: calc(var(--card-height) / 1.5);\\n  }\\n  \\n  body {\\n    min-height: 100vh;\\n    background: #212534;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    padding-top: 2rem;\\n    padding-bottom: 2rem;\\n    box-sizing: border-box;\\n  }\\n  \\n  .card {\\n    background: #191c29;\\n    width: var(--card-width);\\n    height: var(--card-height);\\n    padding: 3px;\\n    position: relative;\\n    border-radius: 6px;\\n    justify-content: center;\\n    align-items: center;\\n    text-align: center;\\n    display: flex;\\n    font-size: 1.5em;\\n    color: rgb(88 199 250 / 0%);\\n    cursor: pointer;\\n    font-family: cursive;\\n  }\\n  \\n  .card:hover {\\n    color: rgb(88 199 250 / 100%);\\n    transition: color 1s;\\n  }\\n  .card:hover:before,\\n  .card:hover:after {\\n    animation: none;\\n    opacity: 0;\\n  }\\n  \\n  .card::before {\\n    content: \\\"\\\";\\n    width: 104%;\\n    height: 102%;\\n    border-radius: 8px;\\n    background-image: linear-gradient(\\n      var(--rotate),\\n      #5ddcff,\\n      #3c67e3 43%,\\n      #4e00c2\\n    );\\n    position: absolute;\\n    z-index: -1;\\n    top: -1%;\\n    left: -2%;\\n    animation: spin 2.5s linear infinite;\\n  }\\n  \\n  .card::after {\\n    position: absolute;\\n    content: \\\"\\\";\\n    top: calc(var(--card-height) / 6);\\n    left: 0;\\n    right: 0;\\n    z-index: -1;\\n    height: 100%;\\n    width: 100%;\\n    margin: 0 auto;\\n    transform: scale(0.8);\\n    filter: blur(calc(var(--card-height) / 6));\\n    background-image: linear-gradient(\\n      var(--rotate),\\n      #5ddcff,\\n      #3c67e3 43%,\\n      #4e00c2\\n    );\\n    opacity: 1;\\n    transition: opacity 0.5s;\\n    animation: spin 2.5s linear infinite;\\n  }\\n  \\n  @keyframes spin {\\n    0% {\\n      --rotate: 0deg;\\n    }\\n    100% {\\n      --rotate: 360deg;\\n    }\\n  }\\n  \\n.card {\\n    border-radius: 12px;\\n    background: white;\\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\\n    color: #000;\\n}\\n.card-title {\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n.card-subtitle {\\n    font-size: 1.2rem;\\n    color: #666;\\n}\\n.productivity-card {\\n    background-color: white; /* Light Green */\\n}\\n.section-title {\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    margin-bottom: 20px;\\n    color: #FFFFFF; /* White */\\n}\\n.create-btn {\\n    background-color: white; /* Light Purple */\\n    color: #fff;\\n    border-radius: 12px;\\n    padding: 10px 20px;\\n    text-decoration: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/dashboard.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,4CAA4C;EAC9C;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,oBAAoB;IACpB,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,2BAA2B;IAC3B,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,6BAA6B;IAC7B,oBAAoB;EACtB;EACA;;IAEE,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB;;;;;KAKC;IACD,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,oCAAoC;EACtC;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,iCAAiC;IACjC,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,WAAW;IACX,cAAc;IACd,qBAAqB;IACrB,0CAA0C;IAC1C;;;;;KAKC;IACD,UAAU;IACV,wBAAwB;IACxB,oCAAoC;EACtC;;EAEA;IACE;MACE,cAAc;IAChB;IACA;MACE,gBAAgB;IAClB;EACF;;AAEF;IACI,mBAAmB;IACnB,iBAAiB;IACjB,0CAA0C;IAC1C,WAAW;AACf;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,uBAAuB,EAAE,gBAAgB;AAC7C;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc,EAAE,UAAU;AAC9B;AACA;IACI,uBAAuB,EAAE,iBAAiB;IAC1C,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;AACzB\",\"sourcesContent\":[\"@property --rotate {\\n    syntax: \\\"<angle>\\\";\\n    initial-value: 132deg;\\n    inherits: false;\\n  }\\n  \\n  :root {\\n    --card-height: 65vh;\\n    --card-width: calc(var(--card-height) / 1.5);\\n  }\\n  \\n  body {\\n    min-height: 100vh;\\n    background: #212534;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    padding-top: 2rem;\\n    padding-bottom: 2rem;\\n    box-sizing: border-box;\\n  }\\n  \\n  .card {\\n    background: #191c29;\\n    width: var(--card-width);\\n    height: var(--card-height);\\n    padding: 3px;\\n    position: relative;\\n    border-radius: 6px;\\n    justify-content: center;\\n    align-items: center;\\n    text-align: center;\\n    display: flex;\\n    font-size: 1.5em;\\n    color: rgb(88 199 250 / 0%);\\n    cursor: pointer;\\n    font-family: cursive;\\n  }\\n  \\n  .card:hover {\\n    color: rgb(88 199 250 / 100%);\\n    transition: color 1s;\\n  }\\n  .card:hover:before,\\n  .card:hover:after {\\n    animation: none;\\n    opacity: 0;\\n  }\\n  \\n  .card::before {\\n    content: \\\"\\\";\\n    width: 104%;\\n    height: 102%;\\n    border-radius: 8px;\\n    background-image: linear-gradient(\\n      var(--rotate),\\n      #5ddcff,\\n      #3c67e3 43%,\\n      #4e00c2\\n    );\\n    position: absolute;\\n    z-index: -1;\\n    top: -1%;\\n    left: -2%;\\n    animation: spin 2.5s linear infinite;\\n  }\\n  \\n  .card::after {\\n    position: absolute;\\n    content: \\\"\\\";\\n    top: calc(var(--card-height) / 6);\\n    left: 0;\\n    right: 0;\\n    z-index: -1;\\n    height: 100%;\\n    width: 100%;\\n    margin: 0 auto;\\n    transform: scale(0.8);\\n    filter: blur(calc(var(--card-height) / 6));\\n    background-image: linear-gradient(\\n      var(--rotate),\\n      #5ddcff,\\n      #3c67e3 43%,\\n      #4e00c2\\n    );\\n    opacity: 1;\\n    transition: opacity 0.5s;\\n    animation: spin 2.5s linear infinite;\\n  }\\n  \\n  @keyframes spin {\\n    0% {\\n      --rotate: 0deg;\\n    }\\n    100% {\\n      --rotate: 360deg;\\n    }\\n  }\\n  \\n.card {\\n    border-radius: 12px;\\n    background: white;\\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\\n    color: #000;\\n}\\n.card-title {\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n.card-subtitle {\\n    font-size: 1.2rem;\\n    color: #666;\\n}\\n.productivity-card {\\n    background-color: white; /* Light Green */\\n}\\n.section-title {\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    margin-bottom: 20px;\\n    color: #FFFFFF; /* White */\\n}\\n.create-btn {\\n    background-color: white; /* Light Purple */\\n    color: #fff;\\n    border-radius: 12px;\\n    padding: 10px 20px;\\n    text-decoration: none;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvZGFzaGJvYXJkLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsOERBQThELDBCQUEwQiw0QkFBNEIsc0JBQXNCLEtBQUssZUFBZSwwQkFBMEIsbURBQW1ELEtBQUssY0FBYyx3QkFBd0IsMEJBQTBCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLHdCQUF3QiwyQkFBMkIsNkJBQTZCLEtBQUssZUFBZSwwQkFBMEIsK0JBQStCLGlDQUFpQyxtQkFBbUIseUJBQXlCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixvQkFBb0IsdUJBQXVCLGtDQUFrQyxzQkFBc0IsMkJBQTJCLEtBQUsscUJBQXFCLG9DQUFvQywyQkFBMkIsS0FBSyw4Q0FBOEMsc0JBQXNCLGlCQUFpQixLQUFLLHVCQUF1QixvQkFBb0Isa0JBQWtCLG1CQUFtQix5QkFBeUIseUhBQXlILHlCQUF5QixrQkFBa0IsZUFBZSxnQkFBZ0IsMkNBQTJDLEtBQUssc0JBQXNCLHlCQUF5QixvQkFBb0Isd0NBQXdDLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLGtCQUFrQixxQkFBcUIsNEJBQTRCLGlEQUFpRCx5SEFBeUgsaUJBQWlCLCtCQUErQiwyQ0FBMkMsS0FBSyx5QkFBeUIsVUFBVSx1QkFBdUIsT0FBTyxZQUFZLHlCQUF5QixPQUFPLEtBQUssYUFBYSwwQkFBMEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsR0FBRyxlQUFlLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLHNCQUFzQiwrQkFBK0Isb0JBQW9CLGtCQUFrQix3QkFBd0Isd0JBQXdCLDBCQUEwQixzQkFBc0IsY0FBYyxlQUFlLCtCQUErQixvQ0FBb0MsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsR0FBRyxPQUFPLHlGQUF5RixZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyx3QkFBd0IsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLHFCQUFxQixNQUFNLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxhQUFhLGFBQWEsOENBQThDLDBCQUEwQiw0QkFBNEIsc0JBQXNCLEtBQUssZUFBZSwwQkFBMEIsbURBQW1ELEtBQUssY0FBYyx3QkFBd0IsMEJBQTBCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLHdCQUF3QiwyQkFBMkIsNkJBQTZCLEtBQUssZUFBZSwwQkFBMEIsK0JBQStCLGlDQUFpQyxtQkFBbUIseUJBQXlCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixvQkFBb0IsdUJBQXVCLGtDQUFrQyxzQkFBc0IsMkJBQTJCLEtBQUsscUJBQXFCLG9DQUFvQywyQkFBMkIsS0FBSyw4Q0FBOEMsc0JBQXNCLGlCQUFpQixLQUFLLHVCQUF1QixvQkFBb0Isa0JBQWtCLG1CQUFtQix5QkFBeUIseUhBQXlILHlCQUF5QixrQkFBa0IsZUFBZSxnQkFBZ0IsMkNBQTJDLEtBQUssc0JBQXNCLHlCQUF5QixvQkFBb0Isd0NBQXdDLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLGtCQUFrQixxQkFBcUIsNEJBQTRCLGlEQUFpRCx5SEFBeUgsaUJBQWlCLCtCQUErQiwyQ0FBMkMsS0FBSyx5QkFBeUIsVUFBVSx1QkFBdUIsT0FBTyxZQUFZLHlCQUF5QixPQUFPLEtBQUssYUFBYSwwQkFBMEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsR0FBRyxlQUFlLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLHNCQUFzQiwrQkFBK0Isb0JBQW9CLGtCQUFrQix3QkFBd0Isd0JBQXdCLDBCQUEwQixzQkFBc0IsY0FBYyxlQUFlLCtCQUErQixvQ0FBb0MsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsR0FBRyxtQkFBbUI7QUFDenpNO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9kYXNoYm9hcmQuY3NzPzlhN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBwcm9wZXJ0eSAtLXJvdGF0ZSB7XFxuICAgIHN5bnRheDogXFxcIjxhbmdsZT5cXFwiO1xcbiAgICBpbml0aWFsLXZhbHVlOiAxMzJkZWc7XFxuICAgIGluaGVyaXRzOiBmYWxzZTtcXG4gIH1cXG4gIFxcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtaGVpZ2h0OiA2NXZoO1xcbiAgICAtLWNhcmQtd2lkdGg6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpIC8gMS41KTtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTM0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcXG4gIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogIzE5MWMyOTtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IHJnYig4OCAxOTkgMjUwIC8gMCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgfVxcbiAgXFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoODggMTk5IDI1MCAvIDEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxcztcXG4gIH1cXG4gIC5jYXJkOmhvdmVyOmJlZm9yZSxcXG4gIC5jYXJkOmhvdmVyOmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgXFxuICAuY2FyZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDQlO1xcbiAgICBoZWlnaHQ6IDEwMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLXJvdGF0ZSksXFxuICAgICAgIzVkZGNmZixcXG4gICAgICAjM2M2N2UzIDQzJSxcXG4gICAgICAjNGUwMGMyXFxuICAgICk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRvcDogLTElO1xcbiAgICBsZWZ0OiAtMiU7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAyLjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIH1cXG4gIFxcbiAgLmNhcmQ6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAvIDYpO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIGZpbHRlcjogYmx1cihjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAvIDYpKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLXJvdGF0ZSksXFxuICAgICAgIzVkZGNmZixcXG4gICAgICAjM2M2N2UzIDQzJSxcXG4gICAgICAjNGUwMGMyXFxuICAgICk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG4gICAgYW5pbWF0aW9uOiBzcGluIDIuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7XFxuICAgICAgLS1yb3RhdGU6IDBkZWc7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgLS1yb3RhdGU6IDM2MGRlZztcXG4gICAgfVxcbiAgfVxcbiAgXFxuLmNhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZC1zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuLnByb2R1Y3Rpdml0eS1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIExpZ2h0IEdyZWVuICovXFxufVxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjsgLyogV2hpdGUgKi9cXG59XFxuLmNyZWF0ZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogTGlnaHQgUHVycGxlICovXFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZGFzaGJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixvQkFBb0I7RUFDdEI7RUFDQTs7SUFFRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCOzs7OztLQUtDO0lBQ0Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUM7Ozs7O0tBS0M7SUFDRCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QixFQUFFLGdCQUFnQjtBQUM3QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFFLFVBQVU7QUFDOUI7QUFDQTtJQUNJLHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHByb3BlcnR5IC0tcm90YXRlIHtcXG4gICAgc3ludGF4OiBcXFwiPGFuZ2xlPlxcXCI7XFxuICAgIGluaXRpYWwtdmFsdWU6IDEzMmRlZztcXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xcbiAgfVxcbiAgXFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC1oZWlnaHQ6IDY1dmg7XFxuICAgIC0tY2FyZC13aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgLyAxLjUpO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6ICMyMTI1MzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFxcbiAgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTkxYzI5O1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjb2xvcjogcmdiKDg4IDE5OSAyNTAgLyAwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICB9XFxuICBcXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYig4OCAxOTkgMjUwIC8gMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDFzO1xcbiAgfVxcbiAgLmNhcmQ6aG92ZXI6YmVmb3JlLFxcbiAgLmNhcmQ6aG92ZXI6YWZ0ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICBcXG4gIC5jYXJkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwNCU7XFxuICAgIGhlaWdodDogMTAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdmFyKC0tcm90YXRlKSxcXG4gICAgICAjNWRkY2ZmLFxcbiAgICAgICMzYzY3ZTMgNDMlLFxcbiAgICAgICM0ZTAwYzJcXG4gICAgKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdG9wOiAtMSU7XFxuICAgIGxlZnQ6IC0yJTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDIuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgfVxcbiAgXFxuICAuY2FyZDo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0b3A6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpIC8gNik7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgZmlsdGVyOiBibHVyKGNhbGModmFyKC0tY2FyZC1oZWlnaHQpIC8gNikpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdmFyKC0tcm90YXRlKSxcXG4gICAgICAjNWRkY2ZmLFxcbiAgICAgICMzYzY3ZTMgNDMlLFxcbiAgICAgICM0ZTAwYzJcXG4gICAgKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgICBhbmltYXRpb246IHNwaW4gMi41cyBsaW5lYXIgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHtcXG4gICAgICAtLXJvdGF0ZTogMGRlZztcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtLXJvdGF0ZTogMzYwZGVnO1xcbiAgICB9XFxuICB9XFxuICBcXG4uY2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLXN1YnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjNjY2O1xcbn1cXG4ucHJvZHVjdGl2aXR5LWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogTGlnaHQgR3JlZW4gKi9cXG59XFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGOyAvKiBXaGl0ZSAqL1xcbn1cXG4uY3JlYXRlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBMaWdodCBQdXJwbGUgKi9cXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[14].use[2]!./src/styles/dashboard.css\n"));

/***/ })

});