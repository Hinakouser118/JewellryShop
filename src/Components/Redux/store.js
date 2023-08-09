import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
const  store = configureStore({
  reducer:rootReducers
})
export default store;