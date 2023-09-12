import { ADD_MONEY, ADD_ORDER, ADD_TO_ADDRESS, ADD_TO_WISHLIST, ADD_To_CART,DELETE_ADDRESS,DELETE_ORDER,REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, REMOVE_MONEY } from "./Constants";
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
export function add_Address(address) {
  return {
    type: ADD_TO_ADDRESS,
    data: address,
  };
}

export function delete_Address(deletitem) {
  return {
    type:DELETE_ADDRESS,
    data: deletitem,
  };
}
export function add_Order(order) {
  return {
    type: ADD_ORDER,
    data: order,
  };
}

export function delete_Order(item) {
  return {
    type:DELETE_ORDER,
    data: item,
  };
}
export function addMoney (item)  {
  return {
    type:ADD_MONEY,
    data:item,
  };
};
export function removeMoney(item)  {
  return {
    type:REMOVE_MONEY,
    data:item,
  };
};