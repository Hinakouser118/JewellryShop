import {ADD_ORDER,DELETE_ORDER} from './Constants';
const initialState =[];
export const OrderReducers=(state=initialState,Action)=>{
switch (Action.type){
  case ADD_ORDER:
    return [...state,Action.data]
    case DELETE_ORDER:
   let result =state.filter(item=>{
    return item.name!=Action.data
   })
   return[...result]
 
    default: 
    return state
}
 }
