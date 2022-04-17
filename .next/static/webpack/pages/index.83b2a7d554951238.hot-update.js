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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.png */ \"./components/Body/logo.png\");\n/* harmony import */ var _public_github_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/github.png */ \"./public/github.png\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Body.module.css */ \"./components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Body = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), stars = ref1[0], setStars = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://api.github.com/repos/AswinAsok/twittr\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setStars(data.stargazers_count);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 85,\n                height: 85\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),\n                children: \"The Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().tagline),\n                children: \"On the social media platform Twitter, a ratio, or getting ratioed, is when replies to a tweet vastly outnumber likes or retweets. This means people are objecting to the tweet and considering its content bad.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().formfield),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setTweetid(event.target.value);\n                                },\n                                type: \"text\",\n                                name: \"\",\n                                id: \"\",\n                                placeholder: \"twitter.com/elonmusk/status/:tweetId\"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/tweet/\".concat(tweetid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                    children: \"R\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().note),\n                        children: [\n                            \"Click on any tweet and from the url in the browser you can find the tweetId. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    \"Enter the TweetId only \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 36\n                                    }, _this),\n                                    \"(Sample TweetId: 1515360606643228686)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://github.com/AswinAsok/twittr\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().github),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    stars,\n                                    \" Stars \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _public_github_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                width: 50,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_6___default().credits),\n                children: [\n                    \"Made By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/Govind-S-B\",\n                        target: \"_blank\",\n                        children: \"Govind SB\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \",\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/ashwin271\",\n                        target: \"_blank\",\n                        children: \"Ashwin M Murali\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/AswinAsok\",\n                        target: \"_blank\",\n                        children: \"Aswin Asok\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"for Saturday Hack-Night \\uD83D\\uDE80.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztxQ0FBSTs0QkFBQyxHQUFHOzs7Ozs7NkJBQzFDOzs7Ozt5QkFDTDs7Ozs7cUJBQ0o7MEJBRUosOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsaUVBQWM7O29CQUFFLFNBQ3ZCO29CQUFDLEdBQUc7a0NBQ1gsOERBQUNxQyxHQUFDO3dCQUFDTCxJQUFJLEVBQUMsK0JBQStCO3dCQUFDTixNQUFNLEVBQUMsUUFBUTtrQ0FBQyxXQUV4RDs7Ozs7NkJBQUk7b0JBQUMsR0FBRztvQkFBQyxHQUNSO29CQUFDLEdBQUc7a0NBQ0wsOERBQUNXLEdBQUM7d0JBQUNMLElBQUksRUFBQyw4QkFBOEI7d0JBQUNOLE1BQU0sRUFBQyxRQUFRO2tDQUFDLGlCQUV2RDs7Ozs7NkJBQUk7b0JBQUMsR0FBRztvQkFBQyxLQUNOO29CQUFDLEdBQUc7a0NBQ1AsOERBQUNXLEdBQUM7d0JBQUNMLElBQUksRUFBQyw4QkFBOEI7d0JBQUNOLE1BQU0sRUFBQyxRQUFRO2tDQUFDLFlBRXZEOzs7Ozs2QkFBSTtvQkFBQyxHQUFHO29CQUFDLHVDQUVYOzs7Ozs7cUJBQU07Ozs7OzthQUNGLENBQ047Q0FDSDtHQTVFS3pCLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQThFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9keS9Cb2R5LmpzeD80M2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2xvZ28ucG5nXCI7XG5pbXBvcnQgZ2l0aHViIGZyb20gXCIuLi8uLi9wdWJsaWMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Cb2R5Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQm9keSA9ICgpID0+IHtcbiAgY29uc3QgW3R3ZWV0aWQsIHNldFR3ZWV0aWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Bc3dpbkFzb2svdHdpdHRyYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGFycyhkYXRhLnN0YXJnYXplcnNfY291bnQpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxJbWFnZSBzcmM9e2xvZ299IHdpZHRoPXs4NX0gaGVpZ2h0PXs4NX0gLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgVGhlIFJhdGlvIHdoaWNoIERldGVybWllcyB0aGUgRnV0dXJlIG9mIHlvdXIgVHdlZXRzLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ2xpbmV9PlxuICAgICAgICBPbiB0aGUgc29jaWFsIG1lZGlhIHBsYXRmb3JtIFR3aXR0ZXIsIGEgcmF0aW8sIG9yIGdldHRpbmcgcmF0aW9lZCwgaXNcbiAgICAgICAgd2hlbiByZXBsaWVzIHRvIGEgdHdlZXQgdmFzdGx5IG91dG51bWJlciBsaWtlcyBvciByZXR3ZWV0cy4gVGhpcyBtZWFuc1xuICAgICAgICBwZW9wbGUgYXJlIG9iamVjdGluZyB0byB0aGUgdHdlZXQgYW5kIGNvbnNpZGVyaW5nIGl0cyBjb250ZW50IGJhZC5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtZmllbGR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUd2VldGlkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR3aXR0ZXIuY29tL2Vsb25tdXNrL3N0YXR1cy86dHdlZXRJZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXRpZH1gfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5SPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RlfT5cbiAgICAgICAgICBDbGljayBvbiBhbnkgdHdlZXQgYW5kIGZyb20gdGhlIHVybCBpbiB0aGUgYnJvd3NlciB5b3UgY2FuIGZpbmQgdGhlXG4gICAgICAgICAgdHdlZXRJZC4gPGJyIC8+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIEVudGVyIHRoZSBUd2VldElkIG9ubHkgPGJyIC8+XG4gICAgICAgICAgICAoU2FtcGxlIFR3ZWV0SWQ6IDE1MTUzNjA2MDY2NDMyMjg2ODYpXG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Fzd2luQXNvay90d2l0dHJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5naXRodWJ9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcn0+XG4gICAgICAgICAgICA8c3Bhbj4ge3N0YXJzfSBTdGFycyA8L3NwYW4+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtnaXRodWJ9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz57XCIgXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdHN9PlxuICAgICAgICBNYWRlIEJ5e1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0dvdmluZC1TLUJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBHb3ZpbmQgU0JcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgLHtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2h3aW4yNzFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBBc2h3aW4gTSBNdXJhbGlcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgYW5ke1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Fzd2luQXNva1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIEFzd2luIEFzb2tcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgZm9yIFNhdHVyZGF5IEhhY2stTmlnaHQg8J+agC5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkltYWdlIiwibG9nbyIsImdpdGh1YiIsInN0eWxlcyIsIkJvZHkiLCJ0d2VldGlkIiwic2V0VHdlZXRpZCIsInN0YXJzIiwic2V0U3RhcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN0YXJnYXplcnNfY291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJyIiwiaGVhZGluZyIsInRhZ2xpbmUiLCJmb3JtIiwiZm9ybWZpZWxkIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJocmVmIiwiYnV0dG9uIiwicCIsIm5vdGUiLCJzdHJvbmciLCJhIiwic3RhciIsInNwYW4iLCJjcmVkaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Body/Body.jsx\n");

/***/ })

});