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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweetid.module.css */ \"./pages/tweet/tweetid.module.css\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar tweetid = function(param) {\n    var tweetdata = param.tweetdata;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: [\n                    \"div.\",\n                    (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().twe),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().tweet),\n                        children: tweetdata.text\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().count),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Retweet Count \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 17,\n                                        columnNumber: 27\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.retweet_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Reply Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, _this),\n                                    tweetdata.public_metrics.reply_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Like Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.like_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratio),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"The Determining Ratio\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                tweetdata.public_metrics.reply_count / (tweetdata.public_metrics.like_count + tweetdata.public_metrics.retweet_count)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().about),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Note: \"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            \"If the ratio is greater than 1, it indicates a negative response towards your tweet, as the number of replies is more than the number of likes and retweets taken together. If its less than one you are good to go.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tweetid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFMEI7QUFDVjtBQUUxQyxJQUFNRyxPQUFPLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDMUIscUJBQ0U7OzBCQUNFLDhEQUFDSCxpRUFBTTs7OztxQkFBRzswQkFFViw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFFSixzRUFBZ0I7O29CQUFFLE1BRTVCO29CQUFDQSxnRUFBVTtrQ0FDZiw4REFBQ0csS0FBRzt3QkFBQ0MsU0FBUyxFQUFFSixrRUFBWTtrQ0FBR0UsU0FBUyxDQUFDTSxJQUFJOzs7Ozs2QkFBTztrQ0FDcEQsOERBQUNMLEtBQUc7d0JBQUNDLFNBQVMsRUFBRUosa0VBQVk7OzBDQUMxQiw4REFBQ1UsR0FBQzs7b0NBQUMsZ0JBQ2E7a0RBQUEsOERBQUNDLElBQUU7Ozs7NkNBQUc7b0NBQUEsR0FBQztvQ0FBQ1QsU0FBUyxDQUFDVSxjQUFjLENBQUNDLGFBQWE7Ozs7OztxQ0FDMUQ7MENBQ0osOERBQUNILEdBQUM7O29DQUFDLGFBRUQ7a0RBQUEsOERBQUNDLElBQUU7Ozs7NkNBQUc7b0NBQ0xULFNBQVMsQ0FBQ1UsY0FBYyxDQUFDRSxXQUFXOzs7Ozs7cUNBQ25DOzBDQUVKLDhEQUFDSixHQUFDOztvQ0FBQyxZQUVEO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzZDQUFHO29DQUFBLEdBQUM7b0NBQUNULFNBQVMsQ0FBQ1UsY0FBYyxDQUFDRyxVQUFVOzs7Ozs7cUNBQ3pDOzs7Ozs7NkJBQ0E7a0NBRU4sOERBQUNaLEtBQUc7d0JBQUNDLFNBQVMsRUFBRUosa0VBQVk7a0NBQzFCLDRFQUFDVSxHQUFDOztnQ0FBQyx1QkFFRDs4Q0FBQSw4REFBQ0MsSUFBRTs7Ozt5Q0FBRztnQ0FDTFQsU0FBUyxDQUFDVSxjQUFjLENBQUNFLFdBQVcsR0FDbkMsQ0FBQ1osU0FBUyxDQUFDVSxjQUFjLENBQUNHLFVBQVUsR0FDbENiLFNBQVMsQ0FBQ1UsY0FBYyxDQUFDQyxhQUFhLENBQUM7Ozs7OztpQ0FDekM7Ozs7OzZCQUNBO2tDQUVOLDhEQUFDVixLQUFHO3dCQUFDQyxTQUFTLEVBQUVKLGtFQUFZOzswQ0FDMUIsOERBQUNrQixNQUFJOzBDQUFDLFFBQU07Ozs7O3FDQUFPOzRCQUFBLHNOQUlyQjs7Ozs7OzZCQUFNOzs7Ozs7cUJBQ0Y7O29CQUNMLENBQ0g7Q0FDSDs7QUFFRCwrREFBZWpCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanM/MTMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdHdlZXRpZC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IHR3ZWV0aWQgPSAoeyB0d2VldGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgICBkaXYue3N0eWxlcy50d2V9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHdlZXR9Pnt0d2VldGRhdGEudGV4dH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudH0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSZXR3ZWV0IENvdW50IDxiciAvPiB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJldHdlZXRfY291bnR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUmVwbHkgQ291bnRcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge3R3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5yZXBseV9jb3VudH1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExpa2UgQ291bnRcbiAgICAgICAgICAgIDxiciAvPiB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLmxpa2VfY291bnR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGlvfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBEZXRlcm1pbmluZyBSYXRpb1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50IC9cbiAgICAgICAgICAgICAgKHR3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5saWtlX2NvdW50ICtcbiAgICAgICAgICAgICAgICB0d2VldGRhdGEucHVibGljX21ldHJpY3MucmV0d2VldF9jb3VudCl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgICA8c3Bhbj5Ob3RlOiA8L3NwYW4+XG4gICAgICAgICAgSWYgdGhlIHJhdGlvIGlzIGdyZWF0ZXIgdGhhbiAxLCBpdCBpbmRpY2F0ZXMgYSBuZWdhdGl2ZSByZXNwb25zZVxuICAgICAgICAgIHRvd2FyZHMgeW91ciB0d2VldCwgYXMgdGhlIG51bWJlciBvZiByZXBsaWVzIGlzIG1vcmUgdGhhbiB0aGUgbnVtYmVyXG4gICAgICAgICAgb2YgbGlrZXMgYW5kIHJldHdlZXRzIHRha2VuIHRvZ2V0aGVyLiBJZiBpdHMgbGVzcyB0aGFuIG9uZSB5b3UgYXJlIGdvb2QgdG8gZ28uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0d2VldGlkO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgbGV0IHR3ZWV0aWQgPSBjb250ZXh0LnBhcmFtcy50d2VldGlkO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzIvdHdlZXRzP2lkcz0ke3R3ZWV0aWR9JnR3ZWV0LmZpZWxkcz1wdWJsaWNfbWV0cmljcyZleHBhbnNpb25zPWF0dGFjaG1lbnRzLm1lZGlhX2tleXMmbWVkaWEuZmllbGRzPXB1YmxpY19tZXRyaWNzYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdHdlZXRkYXRhOiBkYXRhLmRhdGFbMF0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsInN0eWxlcyIsInR3ZWV0aWQiLCJ0d2VldGRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0d2UiLCJ0d2VldCIsInRleHQiLCJjb3VudCIsInAiLCJiciIsInB1YmxpY19tZXRyaWNzIiwicmV0d2VldF9jb3VudCIsInJlcGx5X2NvdW50IiwibGlrZV9jb3VudCIsInJhdGlvIiwiYWJvdXQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

/***/ })

});