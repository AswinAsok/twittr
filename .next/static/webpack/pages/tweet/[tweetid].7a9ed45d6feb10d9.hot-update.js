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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweetid.module.css */ \"./pages/tweet/tweetid.module.css\");\n/* harmony import */ var _tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar tweetid = function(param) {\n    var tweetdata = param.tweetdata;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: [\n                    \"div.\",\n                    (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().twee),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().tweet),\n                        children: tweetdata.text\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().count),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Retweet Count \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 17,\n                                        columnNumber: 27\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.retweet_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Reply Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, _this),\n                                    tweetdata.public_metrics.reply_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Like Count\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \" \",\n                                    tweetdata.public_metrics.like_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().ratio),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"The Determining Ratio\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                tweetdata.public_metrics.reply_count / (tweetdata.public_metrics.like_count + tweetdata.public_metrics.retweet_count)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_tweetid_module_css__WEBPACK_IMPORTED_MODULE_3___default().about),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Note: \"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            \"If the ratio is greater than 1, it indicates a negative response towards your tweet, as the number of replies is more than the number of likes and retweets taken together. If its less than one you are good to go.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tweetid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFMEI7QUFDVjtBQUUxQyxJQUFNRyxPQUFPLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDMUIscUJBQ0U7OzBCQUNFLDhEQUFDSCxpRUFBTTs7OztxQkFBRzswQkFFViw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFFSixzRUFBZ0I7O29CQUFFLE1BRTVCO29CQUFDQSxpRUFBVztrQ0FDaEIsOERBQUNHLEtBQUc7d0JBQUNDLFNBQVMsRUFBRUosa0VBQVk7a0NBQUdFLFNBQVMsQ0FBQ00sSUFBSTs7Ozs7NkJBQU87a0NBQ3BELDhEQUFDTCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVKLGtFQUFZOzswQ0FDMUIsOERBQUNVLEdBQUM7O29DQUFDLGdCQUNhO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzZDQUFHO29DQUFBLEdBQUM7b0NBQUNULFNBQVMsQ0FBQ1UsY0FBYyxDQUFDQyxhQUFhOzs7Ozs7cUNBQzFEOzBDQUNKLDhEQUFDSCxHQUFDOztvQ0FBQyxhQUVEO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzZDQUFHO29DQUNMVCxTQUFTLENBQUNVLGNBQWMsQ0FBQ0UsV0FBVzs7Ozs7O3FDQUNuQzswQ0FFSiw4REFBQ0osR0FBQzs7b0NBQUMsWUFFRDtrREFBQSw4REFBQ0MsSUFBRTs7Ozs2Q0FBRztvQ0FBQSxHQUFDO29DQUFDVCxTQUFTLENBQUNVLGNBQWMsQ0FBQ0csVUFBVTs7Ozs7O3FDQUN6Qzs7Ozs7OzZCQUNBO2tDQUVOLDhEQUFDWixLQUFHO3dCQUFDQyxTQUFTLEVBQUVKLGtFQUFZO2tDQUMxQiw0RUFBQ1UsR0FBQzs7Z0NBQUMsdUJBRUQ7OENBQUEsOERBQUNDLElBQUU7Ozs7eUNBQUc7Z0NBQ0xULFNBQVMsQ0FBQ1UsY0FBYyxDQUFDRSxXQUFXLEdBQ25DLENBQUNaLFNBQVMsQ0FBQ1UsY0FBYyxDQUFDRyxVQUFVLEdBQ2xDYixTQUFTLENBQUNVLGNBQWMsQ0FBQ0MsYUFBYSxDQUFDOzs7Ozs7aUNBQ3pDOzs7Ozs2QkFDQTtrQ0FFTiw4REFBQ1YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFSixrRUFBWTs7MENBQzFCLDhEQUFDa0IsTUFBSTswQ0FBQyxRQUFNOzs7OztxQ0FBTzs0QkFBQSxzTkFJckI7Ozs7Ozs2QkFBTTs7Ozs7O3FCQUNGOztvQkFDTCxDQUNIO0NBQ0g7O0FBRUQsK0RBQWVqQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW3R3ZWV0aWRdLmpzPzEzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3R3ZWV0aWQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCB0d2VldGlkID0gKHsgdHdlZXRkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgICAgZGl2LntzdHlsZXMudHdlZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50d2VldH0+e3R3ZWV0ZGF0YS50ZXh0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFJldHdlZXQgQ291bnQgPGJyIC8+IHt0d2VldGRhdGEucHVibGljX21ldHJpY3MucmV0d2VldF9jb3VudH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSZXBseSBDb3VudFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50fVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTGlrZSBDb3VudFxuICAgICAgICAgICAgPGJyIC8+IHt0d2VldGRhdGEucHVibGljX21ldHJpY3MubGlrZV9jb3VudH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW99PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIERldGVybWluaW5nIFJhdGlvXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHt0d2VldGRhdGEucHVibGljX21ldHJpY3MucmVwbHlfY291bnQgL1xuICAgICAgICAgICAgICAodHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLmxpa2VfY291bnQgK1xuICAgICAgICAgICAgICAgIHR3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5yZXR3ZWV0X2NvdW50KX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxuICAgICAgICAgIDxzcGFuPk5vdGU6IDwvc3Bhbj5cbiAgICAgICAgICBJZiB0aGUgcmF0aW8gaXMgZ3JlYXRlciB0aGFuIDEsIGl0IGluZGljYXRlcyBhIG5lZ2F0aXZlIHJlc3BvbnNlXG4gICAgICAgICAgdG93YXJkcyB5b3VyIHR3ZWV0LCBhcyB0aGUgbnVtYmVyIG9mIHJlcGxpZXMgaXMgbW9yZSB0aGFuIHRoZSBudW1iZXJcbiAgICAgICAgICBvZiBsaWtlcyBhbmQgcmV0d2VldHMgdGFrZW4gdG9nZXRoZXIuIElmIGl0cyBsZXNzIHRoYW4gb25lIHlvdSBhcmUgZ29vZCB0byBnby5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR3ZWV0aWQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBsZXQgdHdlZXRpZCA9IGNvbnRleHQucGFyYW1zLnR3ZWV0aWQ7XG5cbiAgbGV0IGRhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMi90d2VldHM/aWRzPSR7dHdlZXRpZH0mdHdlZXQuZmllbGRzPXB1YmxpY19tZXRyaWNzJmV4cGFuc2lvbnM9YXR0YWNobWVudHMubWVkaWFfa2V5cyZtZWRpYS5maWVsZHM9cHVibGljX21ldHJpY3NgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlRPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0d2VldGRhdGE6IGRhdGEuZGF0YVswXSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwic3R5bGVzIiwidHdlZXRpZCIsInR3ZWV0ZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInR3ZWUiLCJ0d2VldCIsInRleHQiLCJjb3VudCIsInAiLCJiciIsInB1YmxpY19tZXRyaWNzIiwicmV0d2VldF9jb3VudCIsInJlcGx5X2NvdW50IiwibGlrZV9jb3VudCIsInJhdGlvIiwiYWJvdXQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

/***/ })

});