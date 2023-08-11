import React from 'react';

import { NativeBaseProvider } from 'native-base';
import TabNavigation from './src/Components/TabNavigation';
import Main from './src/Components/MainScreen';
import { StyleSheet } from 'react-native';
import OrderScreen from './src/Screen/OrderScreen';
export default function App() {
  return (
    <NativeBaseProvider>
   {/* <TabNavigation /> */}
   {/* <Main/> */}
   <OrderScreen/>
</NativeBaseProvider>
  );
}

