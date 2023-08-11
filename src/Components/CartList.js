import React from 'react';
import { Box, Text, Image, Pressable,Button,StyleSheet } from 'native-base';
import Colors from '../Screen/Color';
import { AntDesign } from '@expo/vector-icons';
import { remove_from_cart, } from './Redux/Action';
import { useDispatch } from 'react-redux';
export default function CartItems({ cartItems }) {
  const dispatch=useDispatch();
  const handleRemovetocart = (item) => {
    dispatch(remove_from_cart(item.name)); 
  };
 
  return (
    <Box bg={Colors.white} rounded={'md'} shadow={2} my={3} mx={1} p={4}>
      <Text fontSize={20} bold style={{textAlign:'center'}}>Cart Items :</Text>
      <Pressable>
        {cartItems.map((item) => (
          <Box key={item.id} w={300} h={300} bg={Colors.pink} rounded={'md'} shadow={2} my={3} mx={1} ml={6} mb={3}>
            <Image source={{ uri: item.image }} alt={item.name} resizeMode='contain' flex={1} roundedTop={'md'} />
            <Text fontSize={20}>{item.name} - ₹{item.price}</Text>
            <Button size={'md'} fontSize={20} onPress={() => handleRemovetocart(item)} bg={Colors.red}>
          Remove
        </Button> 
        <Button
        style={{
          width: 40,
          elevation: 5,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
   
      >
        <AntDesign name={  'hearto'} size={22} color="black" />
      </Button>
     
           </Box>
        ))}
      </Pressable>
    </Box>
  );
}


  
