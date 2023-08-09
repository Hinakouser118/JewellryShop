import React, { useState,useEffect } from 'react';
import { Pressable, Box, Text } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../Screen/Color';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data from API (replace with your API URL)
    fetch('http://192.168.1.6:3000/Products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const addToWishlist = (item) => {
    if (!wishlistItems.includes(item)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlistItems.filter((i) => i.id !== item.id);
    setWishlistItems(updatedWishlist);
  };

  const isItemInWishlist = (item) => {
    return wishlistItems.some((i) => i.id === item.id);
  };

  return (
    <Box mt={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Wishlist
      </Text>
      {products.map((item) => (
        <Box
          key={item.id}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          bg={Colors.white}
          rounded="md"
          shadow={2}
          my={2}
          px={4}
          py={2}
        >
          <Text>{item.name}</Text>
          {isItemInWishlist(item) ? (
            <Pressable onPress={() => removeFromWishlist(item)}>
     <AntDesign name="hearto" size={24} color={Colors.red} />
            </Pressable>
          ) : (
            <Pressable onPress={() => addToWishlist(item)}>
<AntDesign name="heart" size={24} color="black" />
            </Pressable>
          )}
        </Box>
      ))}
    </Box>
  );
}
