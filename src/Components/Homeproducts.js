import { ScrollView, Flex,View } from 'native-base'
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import HomeSearch from './HomeSearch';
import ImageSlider from '../Screen/Imagesslider';
export default function Homeproducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Products = async () => {
      const url = "http://192.168.1.6:3000/Products";
      let result = await fetch(url);
      result = await result.json();
      setData(result);
    }

    Products();
  }, []);

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <HomeSearch />
      <ImageSlider/>
      <Flex flexWrap={'wrap'} direction='row' justifyContent={'space-between'} px={6}>
        {data.map((item) => <ProductItem key={item.id} item={item} />)}
      </Flex>
    </ScrollView>
    
  )
}



