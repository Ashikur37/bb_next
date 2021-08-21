import axios from "./axios";
import {
  GET_HOME_PAGE_DATA,
  BEST_SELLING_PRODUCTS,
  TRENDING_ATTRIBUTES,
  NEW_ARRIVALS,
  GET_BEST_BRANDS,
} from "./types";

export const getBestSellingProducts = async (dispatch, lang = 'en') => {
  // axios
  //   .get(lang+"/getdata/products/bestselling")
  //   .then((res) => {
  //     dispatch({
  //       type: BEST_SELLING_PRODUCTS,
  //       payload: {data:res.data,lang},
  //     });
  //   })
  //   .catch();
  const res = await fetch(`/api/homePageData?locale=${lang}&type=bestselling`);
  const data = await res.json();
  dispatch({
    type: BEST_SELLING_PRODUCTS,
    payload: {
      data, lang
    }
  });
};

export const getHomePageData = (dispatch) => {
  axios
    .get("getdata/attributes")
    .then((res) => {
      dispatch({
        type: GET_HOME_PAGE_DATA,
        payload: res.data,
      });
    })
    .catch();
};
export const getTrendingAttributes = (dispatch) => {
  axios
    .get("getdata/trending")
    .then((res) => {
      dispatch({
        type: TRENDING_ATTRIBUTES,
        payload: res.data,
      });
    })
    .catch();
};
export const getNewArrivals = async (dispatch, lang = "en") => {
  // axios
  //   .get(lang+"/getdata/products/newarrivals")
  //   .then((res) => {
  //     dispatch({
  //       type: NEW_ARRIVALS,
  //       payload: {data:res.data,lang},
  //     });
  //   })
  //   .catch();
  const res = await fetch(`/api/homePageData?locale=${lang}&type=newarrivals`);
  const data = await res.json();
  dispatch({
    type: NEW_ARRIVALS,
    payload: {
      data, lang
    }
  });
};

export const getBestBrands = (dispatch) => {
  axios
    .get("en/getdata/best_brands")
    .then((res) => {
      dispatch({
        type: GET_BEST_BRANDS,
        payload: res.data,
      });
    })
    .catch();
};
