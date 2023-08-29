import React, { useEffect, useState } from 'react';
import { Pressable, Image, Box, Text, Heading, Button } from 'native-base';
import Colors from '../Screen/Color';
import Rating from './Rating';
import { addToCart } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from './Redux/Action';
import heartIconRed from '../../assets/Images/red.png';
// import heartIconBlack from '../../assets/Images/failed.jpg';
export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const cartItems = useSelector((state) => state.reducer);
  const wishlistItems = useSelector((state) => state.wishlistReducer);
  // const [originalIconColor, setOriginalIconColor] = useState(heartIconRed);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
    // setOriginalIconColor(heartIconBlack);
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

  useEffect(() => {
    if (wishlistItems && wishlistItems.length) {
      wishlistItems.forEach((element) => {
        if (element.name === item.name) {
          setWishlist(true);
        }
      });
    }
  }, [wishlistItems]);

  // const iconStyle = {
  //   width: 22,
  //   height: 22,
  //   tintColor: wishlist ? originalIconColor : heartIconRed,
  // };

  // const heartIconStyle = {
  //   ...iconStyle,
  //   tintColor: 'red', 
  // };

  // const removeIconStyle = {
  //   ...iconStyle,
  //   tintColor: 'black', 
  // };

  return (
    <Pressable key={item.name} w={170} h={300} bg={Colors.white} rounded={'md'} shadow={2} my={3} mx={1}>
      <Image source={{ uri: item.image }} alt={item.name} resizeMode="cover" flex={1} roundedTop={'md'} />
      <Box px={6} pt={1}>
        <Text fontSize={20} mt={1} isTruncated w="full">
          {item.name}
        </Text>
        <Heading size="sm" bold>
          ₹{item.price}
        </Heading>
        <Text fontSize={15}>{item.grams}</Text>
        <Text fontSize={15}>{item.goldPurity}</Text>
        <Rating value={item.rating} />
        <Button onPress={() => handleAddToCart(item)} style={{ marginBottom: 10 }} bg={Colors.main}>
          Add to cart
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
            right: 15,
          }}
          onPress={() => handleAddToWishlist(item)}
        >     
         <Image source={heartIconRed} alt="Wishlist Icon" style={{ width: 22, height: 22 }} /> 
        {/* <Image source={wishlist ?  heartIconBlack  :heartIconRed} alt="Wishlist Icon" style={wishlist ? removeIconStyle : heartIconStyle} /> */}
        </Button>
      </Box>
    </Pressable>
  );
}
