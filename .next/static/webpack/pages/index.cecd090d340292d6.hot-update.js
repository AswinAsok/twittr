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

/***/ "./components/Body/Body.jsx":
/*!**********************************!*\
  !*** ./components/Body/Body.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo.png */ \"./components/Body/logo.png\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Body.module.css */ \"./components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Body = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), stars = ref1[0], setStars = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://api.github.com/repos/AswinAsok/text.ly\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setStars(data.stargazers_count);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            \"p\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                width: 85,\n                height: 85\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),\n                children: \"The Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().tagline),\n                children: \"We help you find the ratio which indicates the users responses to your tweet. Just enter your tweet id and view the magic\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(event) {\n                            setTweetid(event.target.value);\n                        },\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\",\n                        placeholder: \"twitter.com/elonmusk/status/:tweetId\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/tweet/\".concat(tweetid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().note),\n                        children: [\n                            \"Click on any tweet and from the url in the browser you can find the tweetId. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Enter the TweetId only.\"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().credits),\n                children: [\n                    \"Made By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/Govind-S-B\",\n                        target: \"_blank\",\n                        children: \"Govind SB\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \",\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/ashwin271\",\n                        target: \"_blank\",\n                        children: \"Ashwin M Murali\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/AswinAsok\",\n                        target: \"_blank\",\n                        children: \"Aswin Asok\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"for Saturday Hack-Night \\uD83D\\uDE80.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4Qjt3QkFBQ04sTUFBTSxFQUFDLFFBQVE7a0NBQUMsWUFFdkQ7Ozs7OzZCQUFJO29CQUFDLEdBQUc7b0JBQUMsdUNBRVg7Ozs7OztxQkFBTTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBN0RLeEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBK0RWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4PzQzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vbG9nby5wbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQm9keS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFt0d2VldGlkLCBzZXRUd2VldGlkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3RhcnMsIHNldFN0YXJzXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvQXN3aW5Bc29rL3RleHQubHlgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YXJzKGRhdGEuc3RhcmdhemVyc19jb3VudCk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgcFxuICAgICAgPEltYWdlIHNyYz17bG9nb30gd2lkdGg9ezg1fSBoZWlnaHQ9ezg1fSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICBUaGUgUmF0aW8gd2hpY2ggRGV0ZXJtaWVzIHRoZSBGdXR1cmUgb2YgeW91ciBUd2VldHMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnbGluZX0+XG4gICAgICAgIFdlIGhlbHAgeW91IGZpbmQgdGhlIHJhdGlvIHdoaWNoIGluZGljYXRlcyB0aGUgdXNlcnMgcmVzcG9uc2VzIHRvIHlvdXJcbiAgICAgICAgdHdlZXQuIEp1c3QgZW50ZXIgeW91ciB0d2VldCBpZCBhbmQgdmlldyB0aGUgbWFnaWNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0VHdlZXRpZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgIGlkPVwiXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR3aXR0ZXIuY29tL2Vsb25tdXNrL3N0YXR1cy86dHdlZXRJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldGlkfWB9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TdGFydDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdGV9PlxuICAgICAgICAgIENsaWNrIG9uIGFueSB0d2VldCBhbmQgZnJvbSB0aGUgdXJsIGluIHRoZSBicm93c2VyIHlvdSBjYW4gZmluZCB0aGVcbiAgICAgICAgICB0d2VldElkLiA8YnIgLz5cbiAgICAgICAgICA8c3Ryb25nPkVudGVyIHRoZSBUd2VldElkIG9ubHkuPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdHN9PlxuICAgICAgICBNYWRlIEJ5e1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0dvdmluZC1TLUJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBHb3ZpbmQgU0JcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgLHtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2h3aW4yNzFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBBc2h3aW4gTSBNdXJhbGlcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgYW5ke1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Fzd2luQXNva1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIEFzd2luIEFzb2tcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgZm9yIFNhdHVyZGF5IEhhY2stTmlnaHQg8J+agC5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwiSW1hZ2UiLCJsb2dvIiwic3R5bGVzIiwiQm9keSIsInR3ZWV0aWQiLCJzZXRUd2VldGlkIiwic3RhcnMiLCJzZXRTdGFycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3RhcmdhemVyc19jb3VudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYnIiLCJoZWFkaW5nIiwidGFnbGluZSIsImZvcm0iLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsImhyZWYiLCJidXR0b24iLCJwIiwibm90ZSIsInN0cm9uZyIsImNyZWRpdHMiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Body/Body.jsx\n");

/***/ })

});