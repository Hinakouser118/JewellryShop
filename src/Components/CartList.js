import React from 'react';
import { Box, Text, Image, Pressable,Button,StyleSheet } from 'native-base';
import Colors from '../Screen/Color';
import { remove_from_cart } from './Redux/Action';
import { useDispatch } from 'react-redux';
export default function CartItems({ cartItems }) {
  const dispatch=useDispatch();
  const handleRemovetocart = (item) => {
    dispatch(remove_from_cart(item.name)); 
  };
  return (
    <Box bg={Colors.white} rounded={'md'} shadow={2} my={3} mx={1} p={4}>
      <Text fontSize={20} bold>Cart Items :</Text>
      <Pressable>
        {cartItems.map((item) => (
          <Box key={item.id} w={300} h={300} bg={Colors.pink} rounded={'md'} shadow={2} my={3} mx={1}>
            <Image source={{ uri: item.image }} alt={item.name} resizeMode='cover' flex={1} roundedTop={'md'} />
            <Text fontSize={20}>{item.name} - ₹{item.price}</Text>
            <Button size={'md'} fontSize={20} onPress={() => handleRemovetocart(item)} bg={Colors.red}>
          Remove
        </Button> 
           </Box>
        ))}
      </Pressable>
    </Box>
  );
}

  
