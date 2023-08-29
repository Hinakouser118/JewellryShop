import React from 'react';
import { View,  } from 'react-native';
import Colors from './Color';
import Homeproducts from '../Components/Homeproducts';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.subGreen }}>
      <Homeproducts />
   </View>
  );
}





