import { ADD_To_CART,REMOVE_FROM_CART } from "./Constants";
export function addToCart (item)  {
    return {
      type:ADD_To_CART,
      data:item,
    };
  };
  export function remove_from_cart(item)  {
    return {
      type:REMOVE_FROM_CART,
      data:item,
    };
  };