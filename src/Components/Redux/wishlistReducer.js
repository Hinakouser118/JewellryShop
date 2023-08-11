import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './Constants';
const initialState=[]
export const wishlistReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case ADD_TO_WISHLIST:
      return [...state, Action.data];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.name !== Action.data);
    default:
      return state;
  }
};
