import { ScrollView, Flex, View,Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import HomeSearch from './HomeSearch';
import ImageSlider from '../Screen/Imagesslider';

export default function Homeproducts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "http://192.168.1.4:3000/Products";
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
    }

    fetchProducts();
  }, []);

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <HomeSearch />
      <ImageSlider />
      <Flex flexWrap={'wrap'} direction='row' justifyContent={'space-between'} px={6}>
        {error ? (
          <View>
            <Text>Error: {error.message}</Text>
          </View>
        ) : (
          data.map((item) => <ProductItem key={item.id} item={item} />)
        )}
      </Flex>
    </ScrollView>
  )
}



