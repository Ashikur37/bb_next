import { activeBulkId } from "../../components/utils/helper";
import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  SET_CART_FROM_LOCAL,
  REMOVE_FROM_CART,
  PLUS_ONE_TO_CART,
  MINUS_ONE_TO_CART,
  EMPTY_CART,
  INPUT_ITEM_TO_CART,
  SET_CART_AFTER_PRICE_CHANGE,
} from "../actions/types";

const initialState = {
  message: "",
  cartItem: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let storage_items;
      if (localStorage.getItem("cart")) {
        storage_items = JSON.parse(localStorage.getItem("cart"));
      }
      if (!storage_items) {
         // cart is not inatalized
    
         let activeOfferId = activeBulkId(action.payload.offers,action.payload.qnt);
         let product = action.payload;
         product.bulk_id = activeOfferId;
 
         localStorage.setItem(
           "cart",
           JSON.stringify([...state.cartItem, product])
         );
 
         toast.success("Product Added To Bag", {
           position: "bottom-right",
           autoClose: 2000,
           hideProgressBar: true,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
         return {
           ...state,
           message: action.payload.message,
           cartItem: [...state.cartItem, action.payload],
         };
      } else if (
        storage_items.filter(
          (it) =>
            it.product_id == action.payload.product_id &&
            it.option_id == action.payload.option_id
        ).length == 0
      ) {
        let activeOfferId = activeBulkId(action.payload.offers,action.payload.qnt);
        let product = action.payload;
        product.bulk_id = activeOfferId;
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cartItem, product])
        );

        toast.success("Product Added To Bag", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return {
          ...state,
          message: action.payload.message,
          cartItem: [...state.cartItem, action.payload],
        };
      } else {
        let newCartItems = storage_items.map((item) => {
          if (
            item.product_id == action.payload.product_id &&
            item.option_id == action.payload.option_id
          ) {
            let activeOfferId = activeBulkId(item.offers,(item.qnt+ action.payload.qnt));
              item.bulk_id = activeOfferId;
              item.qnt += action.payload.qnt;
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify([...newCartItems]));
        toast.info("Cart Item Updated", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return {
          ...state,
          message: action.payload.message,
          cartItem: [...newCartItems],
        };
      }

    case SET_CART_FROM_LOCAL:
      let items = JSON.parse(localStorage.getItem("cart"));
      return {
        ...state,
        cartItem: [...items],
      };
    case REMOVE_FROM_CART:
      let newCart = JSON.parse(localStorage.getItem("cart")).filter(
        //item.option_id != action.payload.option_id

        (item) => {
          if (
            item.product_id == action.payload.id &&
            item.option_id == action.payload.option_id
          ) {
          } else {
            return item;
          }
        }
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cartItem: newCart,
      };
    case PLUS_ONE_TO_CART:
      let { id, option_id } = action.payload;
      let newCartItems = JSON.parse(localStorage.getItem("cart")).map(
        (item) => {
          if (item.product_id == id && item.option_id == option_id) {
            let activeOfferId = activeBulkId(item.offers,item.qnt+1);
            item.qnt += 1;
            item.bulk_id = activeOfferId;
          }
          return item;
        }
      );
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItem: newCartItems,
      };
    case MINUS_ONE_TO_CART:
      let newCartItem = JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (
          item.product_id == action.payload.id &&
          item.option_id == action.payload.option_id
        ) {
          let activeOfferId = activeBulkId(item.offers,item.qnt-1);
            item.qnt -= 1;
            item.bulk_id = activeOfferId;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCartItem));
      return {
        ...state,
        cartItem: newCartItem,
      };

    case INPUT_ITEM_TO_CART:
      let newCarts = JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (
          item.product_id == action.payload.id &&
          item.option_id == action.payload.option_id
        ) {
          let activeOfferId = activeBulkId(item.offers,action.payload.qnt);
            item.bulk_id = activeOfferId;
          item.qnt = action.payload.qnt;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCarts));
      return {
        ...state,
        cartItem: newCarts,
      };

    case EMPTY_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cartItem: [],
      };
    case SET_CART_AFTER_PRICE_CHANGE:
      localStorage.removeItem("cart");
      localStorage.setItem("cart",JSON.stringify([...action.payload]));
      return {
        ...state,
        cartItem: [...action.payload],
      };
    default:
      return state;
  }
}