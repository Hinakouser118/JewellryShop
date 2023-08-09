import React, { useEffect, useState } from 'react';
import { Pressable,Image, Box, Text, Heading, Button } from 'native-base';
import Colors from '../Screen/Color';
import Rating from './Rating';
import { addToCart } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state) => state.reducer);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  
useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach((element) => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  return (
    <Pressable key={item.id} w={170} h={400} bg={Colors.white} rounded={'md'} shadow={2} my={3} mx={1}>
      <Image source={{ uri: item.image }} alt={item.name} resizeMode='cover' flex={1} roundedTop={'md'} />
      <Box px={6} pt={1}>
        <Text fontSize={20} mt={1} isTruncated w="full">
          {item.name}
        </Text>
        <Heading size='sm' bold>
          ₹{item.price}
        </Heading>
        <Text fontSize={15}>{item.grams}</Text>
        <Text fontSize={15}>{item.goldPurity}</Text>
        <Rating value={item.rating} />
        <Button onPress={() => handleAddToCart(item)} style={{ marginBottom: 10 }} bg={Colors.main}>
          Add to cart
        </Button>
        
      </Box>
    </Pressable>
  );
}


