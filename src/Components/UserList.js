import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import CartItems from './CartList'
import { useSelector } from 'react-redux';
export default function UserList() {
    const cartData = useSelector((state) => state.reducer);
  return (
   <View>
 <CartItems cartItems={cartData}/>
   </View>
  )
}
