"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 7005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.2102f507.png","height":858,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAlklEQVR42iWOTQrCQAyF53auxGO4cO/KhRfQE7jrSsF7CKJgoSDo0spMKxRFms5Pkj4YCEm+LxCeERFVZWYRzgs6pMFIKfkQXNvWde29B0IaHAGNtcvFfDKdOeeAkEaY+xA/1bUr1q/dqrmXFCIkXklPA/06PRV63tP/C8yv0OOllOP2fdjYWyVASJNTDSSPp6KIJKcaAf7Tmk0xyk0rAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 7036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7005);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4937);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1957);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Chat({ id , users  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I);
    const queryRecipients = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__.db, "users"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("email", "==", (0,_utils_getEmail__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(users, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useCollection)(queryRecipients);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getEmail__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(users, user);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        onClick: ()=>enterChat(),
        children: [
            recipient?.photoURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                src: recipient?.photoURL,
                alt: ""
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _public_avatar_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                width: 50,
                height: 50,
                alt: "",
                style: defaultImageStyle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                children: recipientEmail
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
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
const UserAvatar = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
margin: 5px;

`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
margin-left: 15px;
`;
const defaultImageStyle = {
    cursor: "pointer",
    borderRadius: "50%",
    margin: "5px 15px"
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1072);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1957);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7036);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, _Chat__WEBPACK_IMPORTED_MODULE_9__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, _Chat__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Sidebar() {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const userChatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__.db, "chats");
    const queryChats = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)(userChatRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("users", "array-contains", user?.email));
    const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection)(queryChats);
    const chats = chatsSnapshot?.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    const chatExists = (email)=>chats?.find((chat)=>chat.users.includes(user.email) && chat.users.includes(email));
    const newChat = async ()=>{
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return null;
        let validator = __webpack_require__(1072);
        if (validator.validate(input) && input !== user?.email && !chatExists(input)) {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__.db, "chats"), {
                users: [
                    user.email,
                    input
                ]
            });
        }
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const logoutUser = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
        router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                                src: user.photoURL,
                                onClick: logoutUser
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                                children: user.displayName
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
            chatsSnapshot?.docs.map((chat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    id: chat.id,
                    users: chat.data().users
                }, chat.id))
        ]
    });
};
// }
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
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
const HeaderContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
display: flex;
flex-wrap: wrap;
padding: 0px 20px;
flex-direction: column;
background-color: whitesmoke;
z-index: 1;
`;
const Header = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
display: flex;
margin-top: 0;
position: sticky;
top: 0;
background-color: whitesmoke;
z-index: 1;
align-items: center;
padding-top:5px;
height: 80px;

`;
const UserAvatar = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;

:hover{
    opacity: 0.8;
}
`;
const UserName = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3)`
text-align: left;
margin-left: 15px;
word-break: break-word;
`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
margin-left:30px;
margin-top: 15px;
color: blue;
font-size: 24px;
`;
const SidebarButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
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

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getEmail = (users, userLoggedIn)=>users?.filter((userToFilter)=>userToFilter !== userLoggedIn?.email)[0];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEmail);


/***/ })

};
;