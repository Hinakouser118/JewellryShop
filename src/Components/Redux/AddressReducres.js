import { ADD_TO_ADDRESS,DELETE_ADDRESS } from "./Constants";

const initialState =[];
export const AddressReducres=(state=initialState,Action)=>{
switch (Action.type){
  case ADD_TO_ADDRESS:
    return [...state,Action.data]
    case DELETE_ADDRESS:
   let result =state.filter(item=>{
    return item.name!=Action.data
   })
   return[...result]
 
    default: 
    return state
}
 }