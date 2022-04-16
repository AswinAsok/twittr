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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst tweetid = ({ tweetdata  })=>{\n    console.log(tweetdata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hi\"\n    }, void 0, false, {\n        fileName: \"/home/aswin/Desktop/SHN/twittr/pages/tweet/[tweetid].js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetid);\nasync function getServerSideProps(context) {\n    let tweetid1 = context.params.tweetid;\n    let data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://api.twitter.com/2/tweets?ids=${tweetid1}&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics`, {\n        headers: {\n            Authorization: `Bearer ${process.env.TOKEN}`\n        }\n    }).then((res)=>res.data\n    );\n    return {\n        props: {\n            tweetdata: data.data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9bdHdlZXRpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBRTFCLE1BQU1FLE9BQU8sR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIscUJBQU8sOERBQUNHLEtBQUc7a0JBQUMsSUFBRTs7Ozs7aUJBQU0sQ0FBQztDQUN0QjtBQUVELGlFQUFlSixPQUFPLEVBQUM7QUFFaEIsZUFBZUssa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxJQUFJTixRQUFPLEdBQUdNLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDUCxPQUFPO0lBRXBDLElBQUlRLElBQUksR0FBRyxNQUFNVCxnREFDWCxDQUNGLENBQUMscUNBQXFDLEVBQUVDLFFBQU8sQ0FBQywwRkFBMEYsQ0FBQyxFQUMzSTtRQUNFVSxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7U0FDN0M7S0FDRixDQUNGLENBQ0FDLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ1IsSUFBSTtJQUFBLENBQUM7SUFFMUIsT0FBTztRQUNMUyxLQUFLLEVBQUU7WUFDTGhCLFNBQVMsRUFBRU8sSUFBSSxDQUFDQSxJQUFJO1NBQ3JCO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRyLy4vcGFnZXMvdHdlZXQvW3R3ZWV0aWRdLmpzPzEzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB0d2VldGlkID0gKHsgdHdlZXRkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2codHdlZXRkYXRhKTtcbiAgcmV0dXJuIDxkaXY+SGk8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0d2VldGlkO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgbGV0IHR3ZWV0aWQgPSBjb250ZXh0LnBhcmFtcy50d2VldGlkO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzIvdHdlZXRzP2lkcz0ke3R3ZWV0aWR9JnR3ZWV0LmZpZWxkcz1wdWJsaWNfbWV0cmljcyZleHBhbnNpb25zPWF0dGFjaG1lbnRzLm1lZGlhX2tleXMmbWVkaWEuZmllbGRzPXB1YmxpY19tZXRyaWNzYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdHdlZXRkYXRhOiBkYXRhLmRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwidHdlZXRpZCIsInR3ZWV0ZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIlRPS0VOIiwidGhlbiIsInJlcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[tweetid].js\n");

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