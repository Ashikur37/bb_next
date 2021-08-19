import { combineReducers } from "redux";
// import homePageReducer from "./homePageReducer";
// import brandsReducer from "./brandsReducer";
// import cartReducer from "./cartReducer";
// import authReducer from "./authReducer";
import layoutReducer from "./layoutReducer";

export default combineReducers({
    layout: layoutReducer,
//   homePage: homePageReducer,
//   brands: brandsReducer,
//   cart: cartReducer,
//   auth: authReducer,
});
