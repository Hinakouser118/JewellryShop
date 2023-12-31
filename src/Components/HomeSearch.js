import { Text, HStack, Input, Pressable, Box, View } from "native-base";
import ProductItem from './ProductItem';
import React, { useEffect, useState } from "react";
import Colors from "../Screen/Color";
import { useSelector } from 'react-redux';

import { FontAwesome5 } from "@expo/vector-icons";

export default function HomeSearch(props) {
  const cartData = useSelector((state) => state.reducer);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null); 

  useEffect(() => {
    setSearchText('');
    setData([]);
    setError(null); 
    const search = async (text) => {
      try {
        setSearchText(text);
        const url = `http://192.168.1.4:3000/Products?q=${text}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
        setError(null); 
      } catch (error) {
        setError(error); 
      }
    };
    search(searchText);
  }, [searchText]);

  return (
    <HStack space={3} w="full" px={10} bg={Colors.pink} py={4} paddingTop={1} alignItems="center" safeAreaTop>
      <View style={{ flex: 1 }}>
        <Input
          placeholder="Search"
          w="90%"
          bg={Colors.white}
          type="search"
          h={12}
          borderWidth={0}
          _focus={{ bg: Colors.white }}
          fontSize={20}
          onChangeText={(text) => setSearchText(text)}
        />
        {error ? (
          <Text>Error: {error.message}</Text>
        ) : (
          searchText && data.length ? data.map((item) => <ProductItem key={item.id} item={item} />) : null
        )}
        <Pressable ml={10} style={{ position: "absolute", top: 10, right: 0 }}>
          <FontAwesome5 name="shopping-basket" size={24} color="black" />
          <Box
            px={1}
            rounded={"full"}
            position={"absolute"}
            top={-10}
            left={2}
            bg={Colors.red}
            _text={{
              color: Colors.white,
              fontSize: "11px",
            }}
          >
            {cartData.length}
          </Box>
        </Pressable>
      </View>
    </HStack>
  );
}


