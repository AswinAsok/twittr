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

/***/ "./components/components/Body/Body.jsx":
/*!*********************************************!*\
  !*** ./components/components/Body/Body.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body.module.css */ \"./components/components/Body/Body.module.css\");\n/* harmony import */ var _Body_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Body_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics\nvar Body = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tweetid = ref[0], setTweetid = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                children: \"Ratio which Determies the Future of your Tweets.\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_4___default().tagline),\n                children: \"We help you find the ratio which indicates the users responses to your tweet. J\"\n            }, void 0, false, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(event) {\n                            setTweetid(event.target.value);\n                            console.log(tweetid);\n                        },\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/tweet/\".concat(tweetid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Body_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/components/components/Body/Body.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Body, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHMvQm9keS9Cb2R5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNkO0FBQ0c7QUFFVTs7QUFFdkMscUpBQXFKO0FBRXJKLElBQU1LLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUE4QkosR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVQzQyxPQVNnQixHQUFnQkEsR0FBVyxHQUEzQixFQVRoQixVQVM0QixHQUFJQSxHQUFXLEdBQWY7SUFFMUIscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxtRUFBZ0I7OzBCQUM5Qiw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFFTCxpRUFBYzswQkFBRSxrREFFaEM7Ozs7O3FCQUFNOzBCQUNOLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVMLGlFQUFjOzBCQUFFLGlGQUErRTs7Ozs7cUJBQU07MEJBQ3JILDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVMLDhEQUFXOztrQ0FDekIsOERBQUNVLE9BQUs7d0JBQ0pDLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUs7NEJBQ25CVCxVQUFVLENBQUNTLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQzs0QkFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxPQUFPLENBQUMsQ0FBQzt5QkFDdEI7d0JBQ0RlLElBQUksRUFBQyxNQUFNO3dCQUNYQyxJQUFJLEVBQUMsRUFBRTt3QkFDUEMsRUFBRSxFQUFDLEVBQUU7Ozs7OzZCQUNMO2tDQUNGLDhEQUFDcEIsa0RBQUk7d0JBQUNxQixJQUFJLEVBQUUsU0FBUSxDQUFVLE9BQVJsQixPQUFPLENBQUU7a0NBQzdCLDRFQUFDbUIsUUFBTTs0QkFBQ2hCLFNBQVMsRUFBRUwsZ0VBQWE7c0NBQUUsT0FBSzs7Ozs7aUNBQVM7Ozs7OzZCQUMzQzs7Ozs7O3FCQUNIOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F6QktDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTJCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4P2U2NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQm9keS5tb2R1bGUuY3NzXCI7XG5cbi8vIGh0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzIvdHdlZXRzP2lkcz0xNTExNjc4MTk5NjE2MzM1ODcyJnR3ZWV0LmZpZWxkcz1wdWJsaWNfbWV0cmljcyZleHBhbnNpb25zPWF0dGFjaG1lbnRzLm1lZGlhX2tleXMmbWVkaWEuZmllbGRzPXB1YmxpY19tZXRyaWNzXG5cbmNvbnN0IEJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFt0d2VldGlkLCBzZXRUd2VldGlkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgUmF0aW8gd2hpY2ggRGV0ZXJtaWVzIHRoZSBGdXR1cmUgb2YgeW91ciBUd2VldHMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnbGluZX0+V2UgaGVscCB5b3UgZmluZCB0aGUgcmF0aW8gd2hpY2ggaW5kaWNhdGVzIHRoZSB1c2VycyByZXNwb25zZXMgdG8geW91ciB0d2VldC4gSjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0VHdlZXRpZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codHdlZXRpZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXRpZH1gfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJzdHlsZXMiLCJCb2R5IiwidHdlZXRpZCIsInNldFR3ZWV0aWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkaW5nIiwidGFnbGluZSIsImZvcm0iLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibmFtZSIsImlkIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/components/Body/Body.jsx\n");

/***/ })

});