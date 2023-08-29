import { NativeBaseProvider} from 'native-base'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/Components/TabNavigation';
import Main from './src/Components/MainScreen'

export default function App() {
  return (
    <NavigationContainer>
    <NativeBaseProvider>
   <TabNavigation/>
   {/* <Main/> */}

  </NativeBaseProvider> 
  </NavigationContainer>
  )
}

