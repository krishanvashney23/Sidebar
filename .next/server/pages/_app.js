/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/BootstrapJsLoader.js":
/*!*********************************************!*\
  !*** ./src/components/BootstrapJsLoader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BootstrapJSLoader = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BootstrapJSLoader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb290c3RyYXBKc0xvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFbEMsTUFBTUMsb0JBQW9CO0lBQ3hCRCxnREFBU0EsQ0FBQztRQUNSLElBQUksS0FBa0IsRUFBYSxFQUVsQztJQUNILEdBQUcsRUFBRTtJQUVMLE9BQU87QUFDVDtBQUVBLGlFQUFlQyxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0Jvb3RzdHJhcEpzTG9hZGVyLmpzPzJhOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQm9vdHN0cmFwSlNMb2FkZXIgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpbXBvcnQoJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcEpTTG9hZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQm9vdHN0cmFwSlNMb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BootstrapJsLoader.js\n");

/***/ }),

/***/ "./src/components/Toast.js":
/*!*********************************!*\
  !*** ./src/components/Toast.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   showToast: () => (/* binding */ showToast)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/components/Toast.js\n\n\n\n\nconst Toast = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Toast.js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined);\n};\nconst showToast = (message, type = \"info\")=>{\n    (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(message, {\n        type\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2FzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7O0FBQ0E7QUFDNkI7QUFDUjtBQUUvQyxNQUFNRyxRQUFRO0lBQ1oscUJBQU8sOERBQUNGLDBEQUFjQTs7Ozs7QUFDeEI7QUFFTyxNQUFNRyxZQUFZLENBQUNDLFNBQVNDLE9BQU8sTUFBTTtJQUM5Q0oscURBQUtBLENBQUNHLFNBQVM7UUFBRUM7SUFBSztBQUN4QixFQUFFO0FBRUYsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1RvYXN0LmpzPzc5YmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHMvVG9hc3QuanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxUb2FzdENvbnRhaW5lciAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93VG9hc3QgPSAobWVzc2FnZSwgdHlwZSA9ICdpbmZvJykgPT4ge1xyXG4gIHRvYXN0KG1lc3NhZ2UsIHsgdHlwZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiVG9hc3QiLCJzaG93VG9hc3QiLCJtZXNzYWdlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Toast.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/sidebar.css */ \"./src/styles/sidebar.css\");\n/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_topbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/topbar.css */ \"./src/styles/topbar.css\");\n/* harmony import */ var _styles_topbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_topbar_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/dashboard.css */ \"./src/styles/dashboard.css\");\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Toast */ \"./src/components/Toast.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_BootstrapJsLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/BootstrapJsLoader */ \"./src/components/BootstrapJsLoader.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_7__]);\n_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BootstrapJsLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNqQjtBQUNDO0FBQ0Q7QUFDRDtBQUNJO0FBQ1E7QUFDWDtBQUNrQztBQUUvRCxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFOzswQkFDRSw4REFBQ0gscUVBQWlCQTs7Ozs7MEJBQ2xCLDhEQUFDRix5REFBS0E7Ozs7OzBCQUVOLDhEQUFDQyxrREFBSUE7O2tDQUNILDhEQUFDSzt3QkFBS0MsTUFBSzt3QkFBbUVDLEtBQUk7Ozs7OztrQ0FDbEYsOERBQUNGO3dCQUFLRSxLQUFJO3dCQUFhRCxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRDt3QkFBS0UsS0FBSTt3QkFBYUQsTUFBSzt3QkFBNEJFLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUFLQyxNQUFLO3dCQUE2RkMsS0FBSTs7Ozs7O2tDQUM1Ryw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQXFHQyxLQUFJOzs7Ozs7Ozs7Ozs7MEJBRXRILDhEQUFDSjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0ICdAL3N0eWxlcy9zaWRlYmFyLmNzcyc7XHJcbmltcG9ydCAnQC9zdHlsZXMvdG9wYmFyLmNzcyc7XHJcbmltcG9ydCAnQC9zdHlsZXMvaW5kZXguY3NzJztcclxuaW1wb3J0ICdAL3N0eWxlcy9kYXNoYm9hcmQuY3NzJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9hc3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQm9vdHN0cmFwSlNMb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL0Jvb3RzdHJhcEpzTG9hZGVyJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm9vdHN0cmFwSlNMb2FkZXIgLz5cclxuICAgICAgPFRvYXN0IC8+XHJcbiAgICAgIFxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9yZW1peGljb25AMi41LjAvZm9udHMvcmVtaXhpY29uLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIkhlYWQiLCJCb290c3RyYXBKU0xvYWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsImhyZWYiLCJyZWwiLCJjcm9zc09yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/dashboard.css":
/*!**********************************!*\
  !*** ./src/styles/dashboard.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/sidebar.css":
/*!********************************!*\
  !*** ./src/styles/sidebar.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/topbar.css":
/*!*******************************!*\
  !*** ./src/styles/topbar.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();