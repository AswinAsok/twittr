"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[tweetid]",{

/***/ "./pages/tweet/[tweetid].js":
/*!**********************************!*\
  !*** ./pages/tweet/[tweetid].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components/Navbar/Navbar */ \"./components/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweetid.module.css */ \"./pages/tweet/tweetid.module.css\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar tweetid = function(param) {\n    var tweetdata = param.tweetdata;\n    console.log(tweetdata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().tweet),\n                        children: tweetdata.text\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().count),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Retweet Count \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 16,\n                                        columnNumber: 27\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.retweet_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Reply Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 20,\n                                        columnNumber: 13\n                                    }, _this),\n                                    tweetdata.public_metrics.reply_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Like Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.like_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratio),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Ratio\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                tweetdata.public_metrics.reply_count / (tweetdata.public_metrics.like_count + tweetdata.public_metrics.retweet_count)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    \"div.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tweetid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFcUM7QUFDckI7QUFFMUMsSUFBTUcsT0FBTyxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIscUJBQ0U7OzBCQUNFLDhEQUFDSCw0RUFBTTs7OztxQkFBRzswQkFFViw4REFBQ00sS0FBRztnQkFBQ0MsU0FBUyxFQUFFTixzRUFBZ0I7O2tDQUM5Qiw4REFBQ0ssS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTixrRUFBWTtrQ0FBR0UsU0FBUyxDQUFDTyxJQUFJOzs7Ozs2QkFBTztrQ0FDcEQsOERBQUNKLEtBQUc7d0JBQUNDLFNBQVMsRUFBRU4sa0VBQVk7OzBDQUMxQiw4REFBQ1csR0FBQzs7b0NBQUMsZ0JBQ2E7a0RBQUEsOERBQUNDLElBQUU7Ozs7NkNBQUc7b0NBQUEsR0FBQztvQ0FBQ1YsU0FBUyxDQUFDVyxjQUFjLENBQUNDLGFBQWE7Ozs7OztxQ0FDMUQ7MENBQ0osOERBQUNILEdBQUM7O29DQUFDLGFBRUQ7a0RBQUEsOERBQUNDLElBQUU7Ozs7NkNBQUc7b0NBQ0xWLFNBQVMsQ0FBQ1csY0FBYyxDQUFDRSxXQUFXOzs7Ozs7cUNBQ25DOzBDQUVKLDhEQUFDSixHQUFDOztvQ0FBQyxZQUVEO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzZDQUFHO29DQUFBLEdBQUM7b0NBQUNWLFNBQVMsQ0FBQ1csY0FBYyxDQUFDRyxVQUFVOzs7Ozs7cUNBQ3pDOzs7Ozs7NkJBQ0E7a0NBRU4sOERBQUNYLEtBQUc7d0JBQUNDLFNBQVMsRUFBRU4sa0VBQVk7a0NBQzFCLDRFQUFDVyxHQUFDOztnQ0FBQyxPQUVEOzhDQUFBLDhEQUFDQyxJQUFFOzs7O3lDQUFHO2dDQUNMVixTQUFTLENBQUNXLGNBQWMsQ0FBQ0UsV0FBVyxHQUNuQyxDQUFDYixTQUFTLENBQUNXLGNBQWMsQ0FBQ0csVUFBVSxHQUNsQ2QsU0FBUyxDQUFDVyxjQUFjLENBQUNDLGFBQWEsQ0FBQzs7Ozs7O2lDQUN6Qzs7Ozs7NkJBQ0E7b0JBQUEsTUFFRjs7Ozs7O3FCQUNBOztvQkFDTCxDQUNIO0NBQ0g7O0FBRUQsK0RBQWViLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanM/MTMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90d2VldGlkLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgdHdlZXRpZCA9ICh7IHR3ZWV0ZGF0YSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHR3ZWV0ZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0fT57dHdlZXRkYXRhLnRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnR9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUmV0d2VldCBDb3VudCA8YnIgLz4ge3R3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5yZXR3ZWV0X2NvdW50fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFJlcGx5IENvdW50XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHt0d2VldGRhdGEucHVibGljX21ldHJpY3MucmVwbHlfY291bnR9XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMaWtlIENvdW50XG4gICAgICAgICAgICA8YnIgLz4ge3R3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5saWtlX2NvdW50fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpb30+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSYXRpb1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50IC9cbiAgICAgICAgICAgICAgKHR3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5saWtlX2NvdW50ICtcbiAgICAgICAgICAgICAgICB0d2VldGRhdGEucHVibGljX21ldHJpY3MucmV0d2VldF9jb3VudCl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBkaXYue31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHdlZXRpZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGxldCB0d2VldGlkID0gY29udGV4dC5wYXJhbXMudHdlZXRpZDtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cz9pZHM9JHt0d2VldGlkfSZ0d2VldC5maWVsZHM9cHVibGljX21ldHJpY3MmZXhwYW5zaW9ucz1hdHRhY2htZW50cy5tZWRpYV9rZXlzJm1lZGlhLmZpZWxkcz1wdWJsaWNfbWV0cmljc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHR3ZWV0ZGF0YTogZGF0YS5kYXRhWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJzdHlsZXMiLCJ0d2VldGlkIiwidHdlZXRkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInR3ZWV0IiwidGV4dCIsImNvdW50IiwicCIsImJyIiwicHVibGljX21ldHJpY3MiLCJyZXR3ZWV0X2NvdW50IiwicmVwbHlfY291bnQiLCJsaWtlX2NvdW50IiwicmF0aW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

/***/ })

});