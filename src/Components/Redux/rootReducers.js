import {combineReducers} from 'redux'
import { reducer } from './Reducers'
import { wishlistReducer } from './wishlistReducer'
import { AddressReducres } from './AddressReducres'
import { OrderReducers } from './OrderReducers'
export default combineReducers({
  reducer,
wishlistReducer,
AddressReducres,
OrderReducers
})