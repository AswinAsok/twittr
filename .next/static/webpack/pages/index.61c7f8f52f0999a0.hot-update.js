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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.png */ \"./components/Body/logo.png\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Body.module.css */ \"./components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics\nvar Body = function(param) {\n    var repodata = param.repodata;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                width: 85,\n                height: 85\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading),\n                children: \"The Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().tagline),\n                children: \"We help you find the ratio which indicates the users responses to your tweet. Just enter your tweet id and view the magic\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: function(event) {\n                            setTweetid(event.target.value);\n                        },\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\",\n                        placeholder: \"twitter.com/elonmusk/status/:tweetId\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/tweet/\".concat(tweetid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        children: [\n                            \"Click on any tweet and from the url in the browser you can find the tweetId. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                children: \"Enter the TweetId only.\"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().credits),\n                children: [\n                    \"Made By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/Govind-S-B\",\n                        target: \"_blank\",\n                        children: \"Govind SB\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \",\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/ashwin271\",\n                        target: \"_blank\",\n                        children: \"Ashwin M Murali\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/AswinAsok\",\n                        target: \"_blank\",\n                        children: \"Aswin Asok\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"for Saturday Hack-Night \\uD83D\\uDE80.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nfunction getServerSideProps(context) {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = _asyncToGenerator(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var tweetid, data;\n        return _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    tweetid = context.params.tweetid;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://api.github.com/repos/AswinAsok/text.\", {\n                        headers: {\n                            Authorization: \"Bearer \".concat(process.env.TOKEN)\n                        }\n                    }).then(function(res) {\n                        return res.data;\n                    });\n                case 3:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            repodata: data\n                        }\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTs7OztvQkFGSjlCLE9BQU8sR0FBRzZCLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDL0IsT0FBTyxDQUFDOzsyQkFFcEJQLGdEQUNYLENBQ0QsOENBQTRDLEVBQzdDO3dCQUNFd0MsT0FBTyxFQUFFOzRCQUNQQyxhQUFhLEVBQUUsU0FBUSxDQUFvQixPQUFsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBRTt5QkFDN0M7cUJBQ0YsQ0FDRixDQUNBQyxJQUFJLENBQUMsU0FBQ0MsR0FBRzsrQkFBS0EsR0FBRyxDQUFDVCxJQUFJO3FCQUFBLENBQUM7O29CQVR0QkEsSUFBSSxZQVNrQjtpREFFbkI7d0JBQ0xVLEtBQUssRUFBRTs0QkFDTHpDLFFBQVEsRUFBRStCLElBQUk7eUJBQ2Y7cUJBQ0Y7Ozs7OztLQUNGO1dBbkJxQkYsbUJBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9keS9Cb2R5LmpzeD80M2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9sb2dvLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Cb2R5Lm1vZHVsZS5jc3NcIjtcblxuLy8gaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMi90d2VldHM/aWRzPTE1MTE2NzgxOTk2MTYzMzU4NzImdHdlZXQuZmllbGRzPXB1YmxpY19tZXRyaWNzJmV4cGFuc2lvbnM9YXR0YWNobWVudHMubWVkaWFfa2V5cyZtZWRpYS5maWVsZHM9cHVibGljX21ldHJpY3NcblxuY29uc3QgQm9keSA9ICh7IHJlcG9kYXRhIH0pID0+IHtcbiAgY29uc3QgW3R3ZWV0aWQsIHNldFR3ZWV0aWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSB3aWR0aD17ODV9IGhlaWdodD17ODV9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgIFRoZSBSYXRpbyB3aGljaCBEZXRlcm1pZXMgdGhlIEZ1dHVyZSBvZiB5b3VyIFR3ZWV0cy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT5cbiAgICAgICAgV2UgaGVscCB5b3UgZmluZCB0aGUgcmF0aW8gd2hpY2ggaW5kaWNhdGVzIHRoZSB1c2VycyByZXNwb25zZXMgdG8geW91clxuICAgICAgICB0d2VldC4gSnVzdCBlbnRlciB5b3VyIHR3ZWV0IGlkIGFuZCB2aWV3IHRoZSBtYWdpY1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZXRUd2VldGlkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHdpdHRlci5jb20vZWxvbm11c2svc3RhdHVzLzp0d2VldElkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmsgaHJlZj17YC90d2VldC8ke3R3ZWV0aWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlN0YXJ0PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX0+XG4gICAgICAgICAgQ2xpY2sgb24gYW55IHR3ZWV0IGFuZCBmcm9tIHRoZSB1cmwgaW4gdGhlIGJyb3dzZXIgeW91IGNhbiBmaW5kIHRoZVxuICAgICAgICAgIHR3ZWV0SWQuIDxiciAvPlxuICAgICAgICAgIDxzdHJvbmc+RW50ZXIgdGhlIFR3ZWV0SWQgb25seS48L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0c30+XG4gICAgICAgIE1hZGUgQnl7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vR292aW5kLVMtQlwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIEdvdmluZCBTQlxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAse1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FzaHdpbjI3MVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIEFzaHdpbiBNIE11cmFsaVxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICBhbmR7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXN3aW5Bc29rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgQXN3aW4gQXNva1xuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICBmb3IgU2F0dXJkYXkgSGFjay1OaWdodCDwn5qALlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgbGV0IHR3ZWV0aWQgPSBjb250ZXh0LnBhcmFtcy50d2VldGlkO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvQXN3aW5Bc29rL3RleHQuYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVwb2RhdGE6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiSW1hZ2UiLCJsb2dvIiwic3R5bGVzIiwiQm9keSIsInJlcG9kYXRhIiwidHdlZXRpZCIsInNldFR3ZWV0aWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJyIiwiaGVhZGluZyIsInRhZ2xpbmUiLCJmb3JtIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJocmVmIiwiYnV0dG9uIiwicCIsIm5vdGUiLCJzdHJvbmciLCJjcmVkaXRzIiwiYSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJkYXRhIiwicGFyYW1zIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiVE9LRU4iLCJ0aGVuIiwicmVzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Body/Body.jsx\n");

/***/ })

});