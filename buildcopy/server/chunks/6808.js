"use strict";
exports.id = 6808;
exports.ids = [6808];
exports.modules = {

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "Zw": () => (/* binding */ setLoginError),
/* harmony export */   "TX": () => (/* binding */ logoutUser)
/* harmony export */ });
/* unused harmony export setCurrentUser */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1877);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6698);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);




const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_2___default())();
const loginUser = (dispatch, userInfo) => {
  dispatch(setLoginError(""));
  axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/login", userInfo).then(res => {
    // Set token to local storage
    let {
      token,
      user
    } = res.data;
    window.localStorage.setItem("expire_time", Date.now() + 172790000); // window.localStorage.setItem("expire_time", Date.now() + 55000);

    window.localStorage.setItem("auth_token", token.access_token);
    cookies.set("auth_token", token.access_token);
    window.localStorage.setItem("user", JSON.stringify(user)); //set current user

    dispatch(setCurrentUser(user));
  }).catch(err => {
    dispatch(setLoginError(err.response ? err.response.data.message : "Something went wrong"));
  });
};
/**
 * old one
 */
// export const loginUser = (dispatch, userInfo) => {
//   dispatch(setLoginError(""));
//   axios
//     .post("en/auth/login", userInfo)
//     .then((res) => {
//       // Set token to local storage
//       let { token, user } = res.data;
//       window.localStorage.setItem("expire_time", Date.now() + 43200000);
//       // window.localStorage.setItem("expire_time", Date.now() + 55000);
//       window.localStorage.setItem("auth_token", token.access_token);
//       window.localStorage.setItem("user", JSON.stringify(user));
//       //set current user
//       dispatch(setCurrentUser(user));
//     })
//     .catch((err) => {
//       dispatch(
//         setLoginError(
//           err.response ? err.response.data.message : "Something went wrong"
//         )
//       );
//     });
// };
// Set Login error

const setLoginError = msg => {
  return {
    type: "SET_LOGIN_ERROR",
    payload: msg
  };
}; // Set Logged In User

const setCurrentUser = decoded => {
  return {
    type: _actions_types__WEBPACK_IMPORTED_MODULE_3__/* .SET_CURRENT_USER */ .uC,
    payload: decoded
  };
}; //Log out a user

const logoutUser = dispatch => {
  let token = window.localStorage.getItem("auth_token"); //   Remove Token from Local Stroge

  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common.Authorization) = `Bearer ${token}`;
  axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/logout").then(res => {
    if (res.data === "success") {
      window.localStorage.removeItem("auth_token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("expire_time"); //   Set current user to {} and set is authenticated to false

      dispatch(setCurrentUser({}));
    }
  }).catch(err => {
    if (err) {
      window.localStorage.removeItem("auth_token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("expire_time"); //   Set current user to {} and set is authenticated to false

      dispatch(setCurrentUser({}));
    }
  });
};

/***/ })

};
;