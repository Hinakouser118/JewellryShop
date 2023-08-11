import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import  wishlistReducer from './wishlistReducer';
const  store = configureStore({
  reducer:rootReducers,
  wishlist:wishlistReducer
})
export default store;