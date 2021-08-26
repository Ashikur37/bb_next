import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";
const initialState = {
  isAuthenticated: false,
  user: {},
  error: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case "SET_LOGIN_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
