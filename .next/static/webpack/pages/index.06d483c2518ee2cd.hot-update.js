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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.png */ \"./components/Body/logo.png\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Body.module.css */ \"./components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics\nvar Body = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                width: 85,\n                height: 85\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading),\n                children: \"The Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().tagline),\n                children: \"We help you find the ratio which indicates the users responses to your tweet. Just enter your tweet id and view the magic\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: function(event) {\n                            setTweetid(event.target.value);\n                        },\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\",\n                        placeholder: \"twitter.com/elonmusk/status/:tweetId\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/tweet/\".concat(tweetid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        children: [\n                            \"Click on any tweet and from the url in the browser you can find the tweetId. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                children: \"Enter the TweetId only.\"\n                            }, void 0, false, {\n                                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_7___default().credits),\n                children: [\n                    \"Made By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/Govind-S-B\",\n                        target: \"_blank\",\n                        children: \"Govind SB\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \",\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/ashwin271\",\n                        target: \"_blank\",\n                        children: \"Ashwin M Murali\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/AswinAsok\",\n                        target: \"_blank\",\n                        children: \"Aswin Asok\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"for Saturday Hack-Night \\uD83D\\uDE80.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/Body/Body.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nfunction getServerSideProps(context) {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = _asyncToGenerator(_home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var tweetid, data;\n        return _home_aswin_Desktop_SHN_twittr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    tweetid = context.params.tweetid;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://api.twitter.com/2/tweets?ids=\".concat(tweetid, \"&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics\"), {\n                        headers: {\n                            Authorization: \"Bearer \".concat(process.env.TOKEN)\n                        }\n                    }).then(function(res) {\n                        return res.data;\n                    });\n                case 3:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            rdata: data.data[0]\n                        }\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzZCLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDL0IsT0FBTyxDQUFDOzsyQkFFcEJOLGdEQUNYLENBQ0YsdUNBQXNDLENBQVUsTUFBMEYsQ0FBbEdNLE9BQU8sRUFBQyw0RkFBMEYsQ0FBQyxFQUMzSTt3QkFDRWlDLE9BQU8sRUFBRTs0QkFDUEMsYUFBYSxFQUFFLFNBQVEsQ0FBb0IsT0FBbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUU7eUJBQzdDO3FCQUNGLENBQ0YsQ0FDQUMsSUFBSSxDQUFDLFNBQUNDLEdBQUc7K0JBQUtBLEdBQUcsQ0FBQ1QsSUFBSTtxQkFBQSxDQUFDOztvQkFUdEJBLElBQUksWUFTa0I7aURBRW5CO3dCQUNMVSxLQUFLLEVBQUU7NEJBQ0xDLEtBQUssRUFBRVgsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjtxQkFDRjs7Ozs7O0tBQ0Y7V0FuQnFCRixtQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4PzQzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2xvZ28ucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0JvZHkubW9kdWxlLmNzc1wiO1xuXG4vLyBodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cz9pZHM9MTUxMTY3ODE5OTYxNjMzNTg3MiZ0d2VldC5maWVsZHM9cHVibGljX21ldHJpY3MmZXhwYW5zaW9ucz1hdHRhY2htZW50cy5tZWRpYV9rZXlzJm1lZGlhLmZpZWxkcz1wdWJsaWNfbWV0cmljc1xuXG5jb25zdCBCb2R5ID0gKCkgPT4ge1xuICBjb25zdCBbdHdlZXRpZCwgc2V0VHdlZXRpZF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxJbWFnZSBzcmM9e2xvZ299IHdpZHRoPXs4NX0gaGVpZ2h0PXs4NX0gLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgVGhlIFJhdGlvIHdoaWNoIERldGVybWllcyB0aGUgRnV0dXJlIG9mIHlvdXIgVHdlZXRzLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ2xpbmV9PlxuICAgICAgICBXZSBoZWxwIHlvdSBmaW5kIHRoZSByYXRpbyB3aGljaCBpbmRpY2F0ZXMgdGhlIHVzZXJzIHJlc3BvbnNlcyB0byB5b3VyXG4gICAgICAgIHR3ZWV0LiBKdXN0IGVudGVyIHlvdXIgdHdlZXQgaWQgYW5kIHZpZXcgdGhlIG1hZ2ljXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldFR3ZWV0aWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0d2l0dGVyLmNvbS9lbG9ubXVzay9zdGF0dXMvOnR3ZWV0SWRcIlxuICAgICAgICAvPlxuICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXRpZH1gfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RlfT5cbiAgICAgICAgICBDbGljayBvbiBhbnkgdHdlZXQgYW5kIGZyb20gdGhlIHVybCBpbiB0aGUgYnJvd3NlciB5b3UgY2FuIGZpbmQgdGhlXG4gICAgICAgICAgdHdlZXRJZC4gPGJyIC8+XG4gICAgICAgICAgPHN0cm9uZz5FbnRlciB0aGUgVHdlZXRJZCBvbmx5Ljwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRzfT5cbiAgICAgICAgTWFkZSBCeXtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Hb3ZpbmQtUy1CXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgR292aW5kIFNCXG4gICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICx7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXNod2luMjcxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgQXNod2luIE0gTXVyYWxpXG4gICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIGFuZHtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Bc3dpbkFzb2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBBc3dpbiBBc29rXG4gICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIGZvciBTYXR1cmRheSBIYWNrLU5pZ2h0IPCfmoAuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGxldCB0d2VldGlkID0gY29udGV4dC5wYXJhbXMudHdlZXRpZDtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cz9pZHM9JHt0d2VldGlkfSZ0d2VldC5maWVsZHM9cHVibGljX21ldHJpY3MmZXhwYW5zaW9ucz1hdHRhY2htZW50cy5tZWRpYV9rZXlzJm1lZGlhLmZpZWxkcz1wdWJsaWNfbWV0cmljc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJkYXRhOiBkYXRhLmRhdGFbMF0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiSW1hZ2UiLCJsb2dvIiwic3R5bGVzIiwiQm9keSIsInR3ZWV0aWQiLCJzZXRUd2VldGlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJiciIsImhlYWRpbmciLCJ0YWdsaW5lIiwiZm9ybSIsImlucHV0Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwiaHJlZiIsImJ1dHRvbiIsInAiLCJub3RlIiwic3Ryb25nIiwiY3JlZGl0cyIsImEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZGF0YSIsInBhcmFtcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIlRPS0VOIiwidGhlbiIsInJlcyIsInByb3BzIiwicmRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Body/Body.jsx\n");

/***/ })

});