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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.png */ \"./components/Body/logo.png\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Body.module.css */ \"./components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Body = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(.0), stars = ref1[0], setStars = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    fetch(\"https://api.github.com/repos/AswinAsok/twittr\").then(function(res) {\n                        return res.json();\n                    }).then(function(data) {\n                        setStars(data.stargazers_count);\n                    });\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                width: 85,\n                height: 85\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading),\n                children: \"The Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().tagline),\n                children: \"We help you find the ratio which indicates the users responses to your tweet. Just enter your tweet id and view the magic\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: function(event) {\n                            setTweetid(event.target.value);\n                        },\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\",\n                        placeholder: \"twitter.com/elonmusk/status/:tweetId\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/tweet/\".concat(tweetid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        children: [\n                            \"Click on any tweet and from the url in the browser you can find the tweetId. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                children: \"Enter the TweetId only.\"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().credits),\n                children: [\n                    \"Made By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/Govind-S-B\",\n                        target: \"_blank\",\n                        children: \"Govind SB\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \",\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/ashwin271\",\n                        target: \"_blank\",\n                        children: \"Ashwin M Murali\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/AswinAsok\",\n                        target: \"_blank\",\n                        children: \"Aswin Asok\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"for Saturday Hack-Night \\uD83D\\uDE80.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"NSYHTRIZowa3Sm/PAY8XNgLiFYc=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ1AsOERBQUNZLEdBQUM7d0JBQUNOLElBQUksRUFBQyw4QkFBOEI7d0JBQUNOLE1BQU0sRUFBQyxRQUFRO2tDQUFDLFlBRXZEOzs7Ozs2QkFBSTtvQkFBQyxHQUFHO29CQUFDLHVDQUVYOzs7Ozs7cUJBQU07Ozs7OzthQUNGLENBQ047Q0FDSDtHQTVES3hCLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQThEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9keS9Cb2R5LmpzeD80M2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2xvZ28ucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0JvZHkubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBCb2R5ID0gKCkgPT4ge1xuICBjb25zdCBbdHdlZXRpZCwgc2V0VHdlZXRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N0YXJzLCBzZXRTdGFyc10gPSB1c2VTdGF0ZSguMClcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0Fzd2luQXNvay90d2l0dHJgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YXJzKGRhdGEuc3RhcmdhemVyc19jb3VudCk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEltYWdlIHNyYz17bG9nb30gd2lkdGg9ezg1fSBoZWlnaHQ9ezg1fSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICBUaGUgUmF0aW8gd2hpY2ggRGV0ZXJtaWVzIHRoZSBGdXR1cmUgb2YgeW91ciBUd2VldHMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnbGluZX0+XG4gICAgICAgIFdlIGhlbHAgeW91IGZpbmQgdGhlIHJhdGlvIHdoaWNoIGluZGljYXRlcyB0aGUgdXNlcnMgcmVzcG9uc2VzIHRvIHlvdXJcbiAgICAgICAgdHdlZXQuIEp1c3QgZW50ZXIgeW91ciB0d2VldCBpZCBhbmQgdmlldyB0aGUgbWFnaWNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0VHdlZXRpZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgIGlkPVwiXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR3aXR0ZXIuY29tL2Vsb25tdXNrL3N0YXR1cy86dHdlZXRJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldGlkfWB9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TdGFydDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdGV9PlxuICAgICAgICAgIENsaWNrIG9uIGFueSB0d2VldCBhbmQgZnJvbSB0aGUgdXJsIGluIHRoZSBicm93c2VyIHlvdSBjYW4gZmluZCB0aGVcbiAgICAgICAgICB0d2VldElkLiA8YnIgLz5cbiAgICAgICAgICA8c3Ryb25nPkVudGVyIHRoZSBUd2VldElkIG9ubHkuPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdHN9PlxuICAgICAgICBNYWRlIEJ5e1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0dvdmluZC1TLUJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBHb3ZpbmQgU0JcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgLHtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2h3aW4yNzFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBBc2h3aW4gTSBNdXJhbGlcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgYW5ke1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Fzd2luQXNva1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIEFzd2luIEFzb2tcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgZm9yIFNhdHVyZGF5IEhhY2stTmlnaHQg8J+agC5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxpbmsiLCJJbWFnZSIsImxvZ28iLCJzdHlsZXMiLCJCb2R5IiwidHdlZXRpZCIsInNldFR3ZWV0aWQiLCJzdGFycyIsInNldFN0YXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJiciIsImhlYWRpbmciLCJ0YWdsaW5lIiwiZm9ybSIsImlucHV0Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwiaHJlZiIsImJ1dHRvbiIsInAiLCJub3RlIiwic3Ryb25nIiwiY3JlZGl0cyIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Body/Body.jsx\n");

/***/ })

});