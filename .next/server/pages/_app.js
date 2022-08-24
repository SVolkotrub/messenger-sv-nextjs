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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__]);\n_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Login() {\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useSignInWithGoogle)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n                    lineNumber: 13,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n                        src: \"http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n                        lineNumber: 16,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: ()=>signInWithGoogle(\"\", {\n                                prompt: \"select_account\"\n                            }),\n                        variant: \"outlined\",\n                        children: \"Sign in with Google\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\components\\\\Login.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\ndisplay: grid;\r\nplace-items: center;\r\nheight: 100vh;\r\nbackground-color: whitesmoke;\r\n`;\nconst LoginContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\npadding: 100px;\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\nbackground-color: white;\r\nborder-radius: 50px;\r\nbox-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);\r\n`;\nconst Logo = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`\r\nheight:200px;\r\nwidth: 200px;\r\nmargin-bottom: 50px;\r\n`;\nconst Button = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`\r\nfont-size: 16px;\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\npadding:15px;\r\nborder: 1px solid whitesmoke;\r\nbackground-color: whitesmoke;\r\nborder-radius: 15px;\r\ntext-transform: uppercase;\r\n:hover {\r\n  transform: scale(102%);\r\n}\r\n`;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0c7QUFDVTtBQUNFO0FBQ3VCO0FBRWhFLFNBQVNLLEtBQUssR0FBRztJQUNmLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLENBQUMsR0FBR0wsOEVBQW1CLENBQUNELGlEQUFJLENBQUM7SUFFMUUscUJBQ0UsOERBQUNPLFNBQVM7OzBCQUNKLDhEQUFDVCxrREFBSTswQkFDRCw0RUFBQ1UsT0FBSzs4QkFBQyxPQUFLOzs7Ozt3QkFBUTs7Ozs7b0JBQ2pCOzBCQUNQLDhEQUFDQyxjQUFjOztrQ0FDWCw4REFBQ0MsSUFBSTt3QkFBQ0MsR0FBRyxFQUFDLGdFQUFnRTs7Ozs7NEJBQUc7a0NBQzdFLDhEQUFDQyxNQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTVYsZ0JBQWdCLENBQUMsRUFBRSxFQUFFO2dDQUFDVyxNQUFNLEVBQUUsZ0JBQWdCOzZCQUFDLENBQUM7d0JBQUVDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLHFCQUFtQjs7Ozs7NEJBQVM7Ozs7OztvQkFDM0c7Ozs7OztZQUNYLENBQ2I7Q0FDRjtBQUVELGlFQUFlYixLQUFLLEVBQUM7QUFFckIsTUFBTUssU0FBUyxHQUFHUiw4REFBVSxDQUFDO0FBTzdCLE1BQU1VO0FBVU4sTUFBTUMsSUFBSSxHQUFHWCxNQUFNLENBQUNrQjtBQU1wQixNQUFNTCxNQUFNLEdBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLXN2LW5leHRqcy8uL2NvbXBvbmVudHMvTG9naW4uanM/NjUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEdvb2dsZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgW3NpZ25JbldpdGhHb29nbGUsIHVzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZVNpZ25JbldpdGhHb29nbGUoYXV0aCk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8TG9naW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvZ28gc3JjPVwiaHR0cDovL2Fzc2V0cy5zdGlja3BuZy5jb20vaW1hZ2VzLzU4MGI1N2ZjZDk5OTZlMjRiYzQzYzU0My5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aEdvb2dsZShcIlwiLCB7cHJvbXB0OiBcInNlbGVjdF9hY2NvdW50XCJ9KX0gdmFyaWFudD1cIm91dGxpbmVkXCI+U2lnbiBpbiB3aXRoIEdvb2dsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Mb2dpbkNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBncmlkO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAxMDBweDtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtM3B4IHJnYmEoMCwwLDAsMC43KTtcclxuYDtcclxuXHJcbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxyXG5oZWlnaHQ6MjAwcHg7XHJcbndpZHRoOiAyMDBweDtcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbmZvbnQtc2l6ZTogMTZweDtcclxuZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5wYWRkaW5nOjE1cHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbmJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMDIlKTtcclxufVxyXG5gOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJzdHlsZWQiLCJhdXRoIiwidXNlU2lnbkluV2l0aEdvb2dsZSIsIkxvZ2luIiwic2lnbkluV2l0aEdvb2dsZSIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJDb250YWluZXIiLCJ0aXRsZSIsIkxvZ2luQ29udGFpbmVyIiwiTG9nbyIsInNyYyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9tcHQiLCJ2YXJpYW50IiwiZGl2IiwiaW1nIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ }),

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCZjvWRV4HgU4ehn6JfbdxuXnOOsj01nsk\",\n    authDomain: \"messenger-sv-whatsup.firebaseapp.com\",\n    projectId: \"messenger-sv-whatsup\",\n    storageBucket: \"messenger-sv-whatsup.appspot.com\",\n    messagingSenderId: \"397884871292\",\n    appId: \"1:397884871292:web:ae483d6a022a65d8bdeff9\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZUNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSztBQUNDO0FBQ1g7QUFFeEMsTUFBTUksY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsc0NBQXNDO0lBQ2xEQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDQyxhQUFhLEVBQUUsa0NBQWtDO0lBQ2pEQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBR0QsTUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDSSxjQUFjLENBQUM7QUFDekMsTUFBTVEsSUFBSSxHQUFHVCxzREFBTyxFQUFFO0FBQ3RCLE1BQU1VLEVBQUUsR0FBR1osZ0VBQVksQ0FBQ1UsR0FBRyxDQUFDO0FBQzVCLE1BQU1HLFFBQVEsR0FBRyxJQUFJWiw2REFBa0IsRUFBRTtBQUVaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLXN2LW5leHRqcy8uL2ZpcmViYXNlQ29uZmlnLmpzP2Y5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNaanZXUlY0SGdVNGVobjZKZmJkeHVYbk9Pc2owMW5za1wiLFxyXG4gIGF1dGhEb21haW46IFwibWVzc2VuZ2VyLXN2LXdoYXRzdXAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIm1lc3Nlbmdlci1zdi13aGF0c3VwXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJtZXNzZW5nZXItc3Ytd2hhdHN1cC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM5Nzg4NDg3MTI5MlwiLFxyXG4gIGFwcElkOiBcIjE6Mzk3ODg0ODcxMjkyOndlYjphZTQ4M2Q2YTAyMmE2NWQ4YmRlZmY5XCJcclxufTtcclxuXHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsImRiIiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebaseConfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, _components_Login__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);\n([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, _components_Login__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user) {\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.uid);\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)(userRef, {\n                userName: user.displayName,\n                email: user.email,\n                lastSeen: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)(),\n                photoURL: user.photoURL\n            }, {\n                merge: true\n            });\n        }\n    }, [\n        user\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this);\n    }\n    ;\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 15\n        }, this);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"H:\\\\Svetik\\\\qa-testing\\\\github\\\\messenger-sv-nextjs\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQzBCO0FBQ3RCO0FBQ1U7QUFDTDtBQUMyQjtBQUduRSxTQUFTUSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdaLHVFQUFZLENBQUNFLGlEQUFJLENBQUM7SUFDMUNELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlVLElBQUksRUFBRztZQUNiLE1BQU1FLE9BQU8sR0FBR1IsdURBQUcsQ0FBQ0YsK0NBQUUsRUFBRSxPQUFPLEVBQUVRLElBQUksQ0FBQ0csR0FBRyxDQUFDO1lBQ3RDUiwwREFBTSxDQUFDTyxPQUFPLEVBQUU7Z0JBQ2RFLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxXQUFXO2dCQUMxQkMsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7Z0JBQ2pCQyxRQUFRLEVBQUVYLG1FQUFlLEVBQUU7Z0JBQzNCWSxRQUFRLEVBQUVSLElBQUksQ0FBQ1EsUUFBUTthQUN4QixFQUFFO2dCQUFFQyxLQUFLLEVBQUUsSUFBSTthQUFFLENBQUMsQ0FBQztTQUNyQjtLQUNGLEVBQUU7UUFBQ1QsSUFBSTtLQUFDLENBQUMsQ0FBQztJQUVULElBQUlDLE9BQU8sRUFBRTtRQUNYLHFCQUNBLDhEQUFDUyxLQUFHO3NCQUFDLFNBQU87Ozs7O2dCQUFNLENBRWxCO0tBQ0g7O0lBQ0QsSUFBSSxDQUFDVixJQUFJLEVBQUU7UUFDUCxxQkFBUSw4REFBQ1AseURBQUs7Ozs7Z0JBQUc7S0FDcEI7O0lBRUQscUJBQU8sOERBQUNLLFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJO0NBQ3BDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXItc3YtbmV4dGpzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHsgIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgeyAgZG9jLCBzZXREb2MsIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciApIHtcbiAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ3VzZXJzJywgdXNlci51aWQpO1xuICAgICAgc2V0RG9jKHVzZXJSZWYsIHtcbiAgICAgICAgdXNlck5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBsYXN0U2Vlbjogc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxuICAgICAgfSwgeyBtZXJnZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIFxuICAgICk7XG4gIH07XG4gIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuICA8TG9naW4gLz5cbiAgfTtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZUF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsImF1dGgiLCJkYiIsIkxvZ2luIiwiZG9jIiwic2V0RG9jIiwic2VydmVyVGltZXN0YW1wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwibG9hZGluZyIsInVzZXJSZWYiLCJ1aWQiLCJ1c2VyTmFtZSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJsYXN0U2VlbiIsInBob3RvVVJMIiwibWVyZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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