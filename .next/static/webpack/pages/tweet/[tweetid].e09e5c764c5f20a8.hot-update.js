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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar tweetid = function(param) {\n    var tweetdata = param.tweetdata;\n    console.log(tweetdata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Retweet Count: \",\n                    tweetdata.public_metrics.retweet_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Reply Count: \",\n                    tweetdata.public_metrics.reply_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Like Count\",\n                    tweetdata.public_metrics.reply_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tweetid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFHMUIsSUFBTUMsT0FBTyxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDQyxHQUFDOztvQkFBQyxpQkFBZTtvQkFBQ0osU0FBUyxDQUFDSyxjQUFjLENBQUNDLGFBQWE7Ozs7OztxQkFBSzswQkFDOUQsOERBQUNGLEdBQUM7O29CQUFDLGVBQWE7b0JBQUNKLFNBQVMsQ0FBQ0ssY0FBYyxDQUFDRSxXQUFXOzs7Ozs7cUJBQUs7MEJBRTFELDhEQUFDSCxHQUFDOztvQkFBQyxZQUFVO29CQUFDSixTQUFTLENBQUNLLGNBQWMsQ0FBQ0UsV0FBVzs7Ozs7O3FCQUFLOzs7Ozs7YUFDbkQsQ0FDTjtDQUNIOztBQUVELCtEQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW3R3ZWV0aWRdLmpzPzEzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB0d2VldGlkID0gKHsgdHdlZXRkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2codHdlZXRkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+UmV0d2VldCBDb3VudDoge3R3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5yZXR3ZWV0X2NvdW50fTwvcD5cbiAgICAgIDxwPlJlcGx5IENvdW50OiB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50fTwvcD5cblxuICAgICAgPHA+TGlrZSBDb3VudHt0d2VldGRhdGEucHVibGljX21ldHJpY3MucmVwbHlfY291bnR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHdlZXRpZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGxldCB0d2VldGlkID0gY29udGV4dC5wYXJhbXMudHdlZXRpZDtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cz9pZHM9JHt0d2VldGlkfSZ0d2VldC5maWVsZHM9cHVibGljX21ldHJpY3MmZXhwYW5zaW9ucz1hdHRhY2htZW50cy5tZWRpYV9rZXlzJm1lZGlhLmZpZWxkcz1wdWJsaWNfbWV0cmljc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHR3ZWV0ZGF0YTogZGF0YS5kYXRhWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0d2VldGlkIiwidHdlZXRkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiLCJwdWJsaWNfbWV0cmljcyIsInJldHdlZXRfY291bnQiLCJyZXBseV9jb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

/***/ })

});