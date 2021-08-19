import { GET_LAYOUT_DATA, MENU_LOADED, GET_MOBILE_BANNER } from "../actions/types";

const initialState = {
  menu: null,
  slider: null,
  categoryLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAYOUT_DATA:
      return {
        ...state,
        menu: action.payload.menu,
        slider: action.payload.slider,
      };
    case GET_MOBILE_BANNER:
      return {
        ...state,
        slider: action.payload,
      };
    case MENU_LOADED:
      return {
        ...state,
        categoryLoaded: true,
      };
    default:
      return state;
  }
}
