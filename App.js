import React from 'react';
import { NativeBaseProvider } from 'native-base';
import TabNavigation from './src/Components/TabNavigation';
import Main from './src/Components/MainScreen';

export default function App() {
  return (
    <NativeBaseProvider>
   <TabNavigation />
   
{/* <Main/> */}
    </NativeBaseProvider>
  );
}

