import { ADD_TO_WISHLIST, ADD_To_CART,REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./Constants";
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
 
export function addToWishlist(item) {
  return {
    type: ADD_TO_WISHLIST,
    data: item,
  };
}

export function removeFromWishlist(itemName) {
  return {
    type: REMOVE_FROM_WISHLIST,
    data: itemName,
  };
}