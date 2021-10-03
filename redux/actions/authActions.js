import { LOGIN_USER, SET_CURRENT_USER } from "../actions/types";
import axios from "./axios";
import Axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const loginUser = (dispatch, userInfo) => {
  dispatch(setLoginError(""));
  Axios.post("/api/login", userInfo)
    .then((res) => {
      // Set token to local storage
      let { token, user } = res.data;
      window.localStorage.setItem("expire_time", Date.now() + 172790000);
      // window.localStorage.setItem("expire_time", Date.now() + 55000);
      window.localStorage.setItem("auth_token", token.access_token);
      cookies.set("auth_token", token.access_token);
      window.localStorage.setItem("user", JSON.stringify(user));
      //set current user
      dispatch(setCurrentUser(user));
    })
    .catch((err) => {
      dispatch(
        setLoginError(
          err.response ? err.response.data.message : "Something went wrong"
        )
      );
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
export const setLoginError = (msg) => {
  return {
    type: "SET_LOGIN_ERROR",
    payload: msg,
  };
};
// Set Logged In User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log out a user

export const logoutUser = (dispatch) => {
  let token = window.localStorage.getItem("auth_token");

  //   Remove Token from Local Stroge
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .get("auth/logout")
    .then((res) => {
      if (res.data === "success") {
        window.localStorage.removeItem("auth_token");
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("expire_time");

        //   Set current user to {} and set is authenticated to false
        dispatch(setCurrentUser({}));
      }
    })
    .catch((err) => {
      if (err) {
        window.localStorage.removeItem("auth_token");
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("expire_time");

        //   Set current user to {} and set is authenticated to false
        dispatch(setCurrentUser({}));
      }
    });
};
