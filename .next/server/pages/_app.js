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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__]);\n_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Login() {\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useSignInWithGoogle)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n                    lineNumber: 14,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n                        src: \"http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>signInWithGoogle(\"\", {\n                                prompt: \"select_account\"\n                            }),\n                        variant: \"outlined\",\n                        children: \"Sign in with Google\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n                        lineNumber: 18,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\components\\\\Login.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`\r\ndisplay: grid;\r\nplace-items: center;\r\nheight: 100vh;\r\nbackground-color: whitesmoke;\r\n`;\nconst LoginContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`\r\npadding: 100px;\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\nbackground-color: white;\r\nborder-radius: 50px;\r\nbox-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);\r\n`;\nconst Logo = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().img)`\r\nheight:200px;\r\nwidth: 200px;\r\nmargin-bottom: 50px;\r\n\r\n`;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUNjO0FBQ0o7QUFDRTtBQUN1QjtBQUVoRSxTQUFTTSxLQUFLLEdBQUc7SUFDZixNQUFNLENBQUNDLGdCQUFnQixFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxDQUFDLEdBQUdMLDhFQUFtQixDQUFDRCxpREFBSSxDQUFDO0lBRTFFLHFCQUNFLDhEQUFDTyxTQUFTOzswQkFDSiw4REFBQ1Ysa0RBQUk7MEJBQ0QsNEVBQUNXLE9BQUs7OEJBQUMsT0FBSzs7Ozs7d0JBQVE7Ozs7O29CQUNqQjswQkFDUCw4REFBQ0MsY0FBYzs7a0NBQ1gsOERBQUNDLElBQUk7d0JBQUNDLEdBQUcsRUFBQyxnRUFBZ0U7Ozs7OzRCQUFHO2tDQUM3RSw4REFBQ2IscURBQU07d0JBQUNjLE9BQU8sRUFBRSxJQUFNVCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7Z0NBQUNVLE1BQU0sRUFBRSxnQkFBZ0I7NkJBQUMsQ0FBQzt3QkFBRUMsT0FBTyxFQUFDLFVBQVU7a0NBQUMscUJBQW1COzs7Ozs0QkFBUzs7Ozs7O29CQUMzRzs7Ozs7O1lBQ1gsQ0FDYjtDQUNGO0FBRUQsaUVBQWVaLEtBQUssRUFBQztBQUVyQixNQUFNSyxTQUFTLEdBQUdSLDhEQUFVLENBQUM7QUFPN0IsTUFBTVU7QUFVTixNQUFNQyxJQUFJLEdBQUdYLE1BQU0sQ0FBQ2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLXByb2plY3QvLi9jb21wb25lbnRzL0xvZ2luLmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnO1xyXG5pbXBvcnQgeyB1c2VTaWduSW5XaXRoR29vZ2xlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbc2lnbkluV2l0aEdvb2dsZSwgdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlU2lnbkluV2l0aEdvb2dsZShhdXRoKTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxMb2dpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TG9nbyBzcmM9XCJodHRwOi8vYXNzZXRzLnN0aWNrcG5nLmNvbS9pbWFnZXMvNTgwYjU3ZmNkOTk5NmUyNGJjNDNjNTQzLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW5XaXRoR29vZ2xlKFwiXCIsIHtwcm9tcHQ6IFwic2VsZWN0X2FjY291bnRcIn0pfSB2YXJpYW50PVwib3V0bGluZWRcIj5TaWduIGluIHdpdGggR29vZ2xlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xvZ2luQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbmhlaWdodDogMTAwdmg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6IDEwMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC0zcHggcmdiYSgwLDAsMCwwLjcpO1xyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbmhlaWdodDoyMDBweDtcclxud2lkdGg6IDIwMHB4O1xyXG5tYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuYDsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQnV0dG9uIiwic3R5bGVkIiwiYXV0aCIsInVzZVNpZ25JbldpdGhHb29nbGUiLCJMb2dpbiIsInNpZ25JbldpdGhHb29nbGUiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiQ29udGFpbmVyIiwidGl0bGUiLCJMb2dpbkNvbnRhaW5lciIsIkxvZ28iLCJzcmMiLCJvbkNsaWNrIiwicHJvbXB0IiwidmFyaWFudCIsImRpdiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ }),

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCZjvWRV4HgU4ehn6JfbdxuXnOOsj01nsk\",\n    authDomain: \"messenger-sv-whatsup.firebaseapp.com\",\n    projectId: \"messenger-sv-whatsup\",\n    storageBucket: \"messenger-sv-whatsup.appspot.com\",\n    messagingSenderId: \"397884871292\",\n    appId: \"1:397884871292:web:ae483d6a022a65d8bdeff9\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZUNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSztBQUNDO0FBQ1g7QUFFeEMsTUFBTUksY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO0lBQ2xEQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO0lBQ2pEQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBR0QsTUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDSSxjQUFjLENBQUM7QUFDekMsTUFBTVEsSUFBSSxHQUFHVCxzREFBTyxFQUFFO0FBQ3RCLE1BQU1VLEVBQUUsR0FBR1osZ0VBQVksQ0FBQ1UsR0FBRyxDQUFDO0FBQzVCLE1BQU1HLFFBQVEsR0FBRyxJQUFJWiw2REFBa0IsRUFBRTtBQUVaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLXByb2plY3QvLi9maXJlYmFzZUNvbmZpZy5qcz9mOTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDWmp2V1JWNEhnVTRlaG42SmZiZHh1WG5PT3NqMDFuc2tcIixcclxuICBhdXRoRG9tYWluOiBcIm1lc3Nlbmdlci1zdi13aGF0c3VwLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJtZXNzZW5nZXItc3Ytd2hhdHN1cFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibWVzc2VuZ2VyLXN2LXdoYXRzdXAuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzOTc4ODQ4NzEyOTJcIixcclxuICBhcHBJZDogXCIxOjM5Nzg4NDg3MTI5Mjp3ZWI6YWU0ODNkNmEwMjJhNjVkOGJkZWZmOVwiXHJcbn07XHJcblxyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJkYiIsInByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseConfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, _components_Login__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);\n([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, _components_Login__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user) {\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.uid);\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)(userRef, {\n                userName: user.displayName,\n                email: user.email,\n                lastSeen: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)(),\n                photoURL: user.photoURL\n            }, {\n                merge: true\n            });\n        }\n    }, [\n        user\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this);\n    }\n    ;\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 15\n        }, this);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-project\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQzBCO0FBQ3RCO0FBQ1U7QUFDTDtBQUMyQjtBQUduRSxTQUFTUSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdaLHVFQUFZLENBQUNFLGlEQUFJLENBQUM7SUFDMUNELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlVLElBQUksRUFBRztZQUNiLE1BQU1FLE9BQU8sR0FBR1IsdURBQUcsQ0FBQ0YsK0NBQUUsRUFBRSxPQUFPLEVBQUVRLElBQUksQ0FBQ0csR0FBRyxDQUFDO1lBQ3RDUiwwREFBTSxDQUFDTyxPQUFPLEVBQUU7Z0JBQ2RFLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxXQUFXO2dCQUMxQkMsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7Z0JBQ2pCQyxRQUFRLEVBQUVYLG1FQUFlLEVBQUU7Z0JBQzNCWSxRQUFRLEVBQUVSLElBQUksQ0FBQ1EsUUFBUTthQUN4QixFQUFFO2dCQUFFQyxLQUFLLEVBQUUsSUFBSTthQUFFLENBQUMsQ0FBQztTQUNyQjtLQUNGLEVBQUU7UUFBQ1QsSUFBSTtLQUFDLENBQUMsQ0FBQztJQUVULElBQUlDLE9BQU8sRUFBRTtRQUNYLHFCQUNBLDhEQUFDUyxLQUFHO3NCQUFDLFNBQU87Ozs7O2dCQUFNLENBRWxCO0tBQ0g7O0lBQ0QsSUFBSSxDQUFDVixJQUFJLEVBQUU7UUFDUCxxQkFBUSw4REFBQ1AseURBQUs7Ozs7Z0JBQUc7S0FDcEI7O0lBRUQscUJBQU8sOERBQUNLLFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJO0NBQ3BDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXItcHJvamVjdC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7ICB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IHsgIGRvYywgc2V0RG9jLCBzZXJ2ZXJUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIgKSB7XG4gIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsICd1c2VycycsIHVzZXIudWlkKTtcbiAgICAgIHNldERvYyh1c2VyUmVmLCB7XG4gICAgICAgIHVzZXJOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgbGFzdFNlZW46IHNlcnZlclRpbWVzdGFtcCgpLFxuICAgICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcbiAgICAgIH0sIHsgbWVyZ2U6IHRydWUgfSk7XG4gICAgfVxuICB9LCBbdXNlcl0pO1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICBcbiAgICApO1xuICB9O1xuICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiAgPExvZ2luIC8+XG4gIH07XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoU3RhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZGIiLCJMb2dpbiIsImRvYyIsInNldERvYyIsInNlcnZlclRpbWVzdGFtcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsImxvYWRpbmciLCJ1c2VyUmVmIiwidWlkIiwidXNlck5hbWUiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwibGFzdFNlZW4iLCJwaG90b1VSTCIsIm1lcmdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();