"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 233:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/user.f35ded89.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVElEQVR42g3HOwqDQABF0bOFJL2pBRMCKWfAchAbP5vQzv1XPi5cOPAxa2k2IKxexvRUDewoHqkgqng7nDnRX2fyS5MusmoAmoWvC8AVobcpadNzA/4+CyJ1AE+8AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 36:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(937);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(957);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Chat({ id , users  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I);
    const queryRecipients = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__.db, "users"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)("email", "==", (0,_utils_getEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection)(queryRecipients);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        onClick: ()=>enterChat(),
        children: [
            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                src: recipient?.photoURL
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                children: recipientEmail[0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: recipientEmail
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
display: flex;
align-items: center;
cursor: pointer;
padding: 15px;  
word-break: break-word;
overflow-y: auto;
scrollbar-width: none;

:hover{
    background-color: #e9eaeb;
}
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar)`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
margin: 5px;
margin-right: 15px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(774);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(957);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(492);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_9__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _Chat__WEBPACK_IMPORTED_MODULE_11__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_9__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _Chat__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Sidebar() {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_9__/* .auth */ .I);
    const userChatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_9__.db, "chats");
    const queryChats = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(userChatRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)("users", "array-contains", user?.email));
    const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollection)(queryChats);
    const chats = chatsSnapshot?.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    const chatExists = (email)=>chats?.find((chat)=>chat.users.includes(user.email) && chat.users.includes(email));
    const newChat = async ()=>{
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return null;
        let validator = __webpack_require__(72);
        if (validator.validate(input) && input !== user?.email && !chatExists(input)) {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_9__.db, "chats"), {
                users: [
                    user.email,
                    input
                ]
            });
        }
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const logoutUser = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_9__/* .auth */ .I);
        router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                                src: user.photoURL || _public_user_png__WEBPACK_IMPORTED_MODULE_2__.logo,
                                onClick: logoutUser
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                                children: user.displayName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default()), {
                                onClick: logoutUser
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarButton, {
                        onClick: ()=>newChat(),
                        children: "Search or start a new chat"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                children: "Chats"
            }),
            chatsSnapshot?.docs.map((chat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    id: chat.id,
                    users: chat.data().users
                }, chat.id))
        ]
    });
};
// }
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
flex:0.45;
border-right: 1px solid whitesmoke;
height: 100vh;
min-width: 200px;
max-width: 350px;
overflow-y: scroll;

::-webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;

`;
const HeaderContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
display: flex;
flex-wrap: wrap;
padding: 0px 20px;
flex-direction: column;
background-color: whitesmoke;
z-index: 1;
`;
const Header = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
display: flex;
margin-top: 0;
position: sticky;
top: 0;
background-color: whitesmoke;
z-index: 1;
justify-content: space-between;
align-items: center;
padding-top:5px;
height: 80px;

`;
const UserAvatar = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;

:hover{
    opacity: 0.8;
}
`;
const UserName = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3)`
text-align: left;
word-break: break-word;
`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
margin-left:30px;
margin-top: 15px;
color: blue;
font-size: 24px;
`;
const SidebarButton = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`
width: 100%;
margin-top: 10px;
border: 1px solid whitesmoke;
border-radius: 10px;
font-size:16px;
padding: 8px;
padding-left: 10px;
background-color: white;
margin-bottom: 15px;

&&& {    
    color: black;
    font-weight: 500;
    text-align: left;
    
}

`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getEmail = (users, userLoggedIn)=>users?.filter((userToFilter)=>userToFilter !== userLoggedIn?.email)[0];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEmail);


/***/ })

};
;