"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/tweet/[tweetid]";
exports.ids = ["pages/tweet/[tweetid]"];
exports.modules = {

/***/ "./pages/tweet/[tweetid].js":
/*!**********************************!*\
  !*** ./pages/tweet/[tweetid].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst tweetid = ({ tweetdata  })=>{\n    console.log(tweetdata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Retweet Count: \",\n                    tweetdata.public_metrics.retweet_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Reply Count: \",\n                    tweetdata.public_metrics.reply_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Like Count: \",\n                    tweetdata.public_metrics.like_count\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Ratio:\",\n                    tweetdata.public_metrics.reply_count / (tweetdata.public_metrics.like_count + tweetdata.public_metrics.retweet_count)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetid);\nasync function getServerSideProps(context) {\n    let tweetid1 = context.params.tweetid;\n    let data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://api.twitter.com/2/tweets?ids=${tweetid1}&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics`, {\n        headers: {\n            Authorization: `Bearer ${process.env.TOKEN}`\n        }\n    }).then((res)=>res.data\n    );\n    return {\n        props: {\n            tweetdata: data.data[0]\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBRTFCLE1BQU1FLE9BQU8sR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDQyxHQUFDOztvQkFBQyxpQkFBZTtvQkFBQ0osU0FBUyxDQUFDSyxjQUFjLENBQUNDLGFBQWE7Ozs7Ozt5QkFBSzswQkFDOUQsOERBQUNGLEdBQUM7O29CQUFDLGVBQWE7b0JBQUNKLFNBQVMsQ0FBQ0ssY0FBYyxDQUFDRSxXQUFXOzs7Ozs7eUJBQUs7MEJBRTFELDhEQUFDSCxHQUFDOztvQkFBQyxjQUFZO29CQUFDSixTQUFTLENBQUNLLGNBQWMsQ0FBQ0csVUFBVTs7Ozs7O3lCQUFLOzBCQUV4RCw4REFBQ0osR0FBQzs7b0JBQUMsUUFFQTtvQkFBQ0osU0FBUyxDQUFDSyxjQUFjLENBQUNFLFdBQVcsR0FDcEMsQ0FBQ1AsU0FBUyxDQUFDSyxjQUFjLENBQUNHLFVBQVUsR0FDbENSLFNBQVMsQ0FBQ0ssY0FBYyxDQUFDQyxhQUFhLENBQUM7Ozs7Ozt5QkFDekM7Ozs7OztpQkFDQSxDQUNOO0NBQ0g7QUFFRCxpRUFBZVAsT0FBTyxFQUFDO0FBRWhCLGVBQWVVLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFDaEQsSUFBSVgsUUFBTyxHQUFHVyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1osT0FBTztJQUVwQyxJQUFJYSxJQUFJLEdBQUcsTUFBTWQsZ0RBQ1gsQ0FDRixDQUFDLHFDQUFxQyxFQUFFQyxRQUFPLENBQUMsMEZBQTBGLENBQUMsRUFDM0k7UUFDRWUsT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0tBQ0YsQ0FDRixDQUNBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNSLElBQUk7SUFBQSxDQUFDO0lBRTFCLE9BQU87UUFDTFMsS0FBSyxFQUFFO1lBQ0xyQixTQUFTLEVBQUVZLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4QjtLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ci8uL3BhZ2VzL3R3ZWV0L1t0d2VldGlkXS5qcz8xMzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdHdlZXRpZCA9ICh7IHR3ZWV0ZGF0YSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHR3ZWV0ZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlJldHdlZXQgQ291bnQ6IHt0d2VldGRhdGEucHVibGljX21ldHJpY3MucmV0d2VldF9jb3VudH08L3A+XG4gICAgICA8cD5SZXBseSBDb3VudDoge3R3ZWV0ZGF0YS5wdWJsaWNfbWV0cmljcy5yZXBseV9jb3VudH08L3A+XG5cbiAgICAgIDxwPkxpa2UgQ291bnQ6IHt0d2VldGRhdGEucHVibGljX21ldHJpY3MubGlrZV9jb3VudH08L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBSYXRpbzogXG4gICAgICAgICB7dHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50IC9cbiAgICAgICAgICAodHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLmxpa2VfY291bnQgK1xuICAgICAgICAgICAgdHdlZXRkYXRhLnB1YmxpY19tZXRyaWNzLnJldHdlZXRfY291bnQpfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHdlZXRpZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGxldCB0d2VldGlkID0gY29udGV4dC5wYXJhbXMudHdlZXRpZDtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3R3ZWV0cz9pZHM9JHt0d2VldGlkfSZ0d2VldC5maWVsZHM9cHVibGljX21ldHJpY3MmZXhwYW5zaW9ucz1hdHRhY2htZW50cy5tZWRpYV9rZXlzJm1lZGlhLmZpZWxkcz1wdWJsaWNfbWV0cmljc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHR3ZWV0ZGF0YTogZGF0YS5kYXRhWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsInR3ZWV0aWQiLCJ0d2VldGRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsInB1YmxpY19tZXRyaWNzIiwicmV0d2VldF9jb3VudCIsInJlcGx5X2NvdW50IiwibGlrZV9jb3VudCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiVE9LRU4iLCJ0aGVuIiwicmVzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tweet/[tweetid].js"));
module.exports = __webpack_exports__;

})();