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

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Navbar = ()=>{\n    _s();\n    const [dropdownVisible, setDropdownVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDropdown = ()=>{\n        setDropdownVisible(!dropdownVisible);\n    };\n    const callNow = ()=>{\n        window.location.href = \"tel:\".concat(9632587410);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (!event.target.closest(\"dropbtn\")) {\n                setDropdownVisible(false);\n            }\n        };\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"navbarForm\",\n                action: \"#\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"search-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search-input\",\n                            placeholder: \"Search...\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 30,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"ri-search-line search-icon\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"qq\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"ri-notification-line\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"qq\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"ri-settings-4-line\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: callNow,\n                                children: \"Call Now\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            dropdownVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dropdownContent\",\n                                id: \"myDropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#home\",\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\personal\\\\Sidebar\\\\src\\\\components\\\\Navbar.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"B77BNn53ze/IOQ49/lhEEQ1Ws4A=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNSyxpQkFBaUI7UUFDckJELG1CQUFtQixDQUFDRDtJQUN0QjtJQUNBLE1BQU1HLFVBQVU7UUFDZEMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsT0FBa0IsT0FBWDtJQUNoQztJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1TLHFCQUFxQixDQUFDQztZQUMxQixJQUFJLENBQUNBLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFlBQVk7Z0JBQ3BDVCxtQkFBbUI7WUFDckI7UUFDRjtRQUVBRyxPQUFPTyxnQkFBZ0IsQ0FBQyxTQUFTSjtRQUNqQyxPQUFPO1lBQ0xILE9BQU9RLG1CQUFtQixDQUFDLFNBQVNMO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTtnQkFBYUUsUUFBTzswQkFDcEMsNEVBQUNIO29CQUFJQyxXQUFVOztzQ0FDakIsOERBQUNHOzRCQUFNQyxNQUFLOzRCQUFPSixXQUFVOzRCQUFlSyxhQUFZOzs7Ozs7c0NBQ3hELDhEQUFDQzs0QkFBRU4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQUVQLFdBQVU7a0NBQ1gsNEVBQUNNOzRCQUFFTixXQUFVOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ087d0JBQUVQLFdBQVU7a0NBQ1gsNEVBQUNNOzRCQUFFTixXQUFVOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBT0MsU0FBU3BCOzBDQUFTOzs7Ozs7NEJBQ3pCSCxpQ0FDQyw4REFBQ2E7Z0NBQUlDLFdBQVU7Z0NBQWtCVSxJQUFHOztrREFDbEMsOERBQUNIO3dDQUFFZixNQUFLO2tEQUFROzs7Ozs7a0RBQ2hCLDhEQUFDZTt3Q0FBRWYsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9CO0dBbERNUDtLQUFBQTtBQW9ETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanM/M2QwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkcm9wZG93blZpc2libGUsIHNldERyb3Bkb3duVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgc2V0RHJvcGRvd25WaXNpYmxlKCFkcm9wZG93blZpc2libGUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbE5vdyA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHRlbDokezk2MzI1ODc0MTB9YDtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJkcm9wYnRuXCIpKSB7XHJcbiAgICAgICAgc2V0RHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIxXCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5hdmJhckZvcm1cIiBhY3Rpb249XCIjXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIi8+XHJcbiAgICA8aSBjbGFzc05hbWU9XCJyaS1zZWFyY2gtbGluZSBzZWFyY2gtaWNvblwiPjwvaT5cclxuICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicXFcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLW5vdGlmaWNhdGlvbi1saW5lXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJxcVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktc2V0dGluZ3MtNC1saW5lXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbGxOb3d9PkNhbGwgTm93PC9idXR0b24+XHJcbiAgICAgICAgICB7ZHJvcGRvd25WaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bkNvbnRlbnRcIiBpZD1cIm15RHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjYWJvdXRcIj5DaGF0PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiZHJvcGRvd25WaXNpYmxlIiwic2V0RHJvcGRvd25WaXNpYmxlIiwidG9nZ2xlRHJvcGRvd24iLCJjYWxsTm93Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});