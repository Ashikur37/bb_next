import {
  GET_HOME_PAGE_DATA,
  BEST_SELLING_PRODUCTS,
  TRENDING_ATTRIBUTES,
  GET_BEST_BRANDS,
  NEW_ARRIVALS,
} from "../actions/types";

const initialState = {
  slider: null,
  trending: null,
  concern: null,
  bestSelling: [],
  bestBrands: null,
  newArrivals: null,
  localLang: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case BEST_SELLING_PRODUCTS:
      return {
        ...state,
        bestSelling: action.payload.data,
        localLang: action.payload.lang == 'ar_QA' ? 'ar' :'en'
      };
    case GET_HOME_PAGE_DATA:
      return{
        ...state,
        slider: action.payload.slider,
        trending: action.payload.trending,
        concern: action.payload.concern,
      }
    case TRENDING_ATTRIBUTES:
      return {
        ...state,
        trending: action.payload,
      };
    case GET_BEST_BRANDS:
      return{
        ...state,
        bestBrands: action.payload
      };
    case NEW_ARRIVALS:
      return {
        ...state,
        newArrivals: action.payload.data,
        localLang: action.payload.lang == 'ar_QA' ? 'ar' :'en'
      };
    default:
      return state;
  }
}
