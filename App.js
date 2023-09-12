import { NativeBaseProvider} from 'native-base'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/Components/Redux/store';
import DrawerNavigation from './src/Components/Sidebar';
import TabNavigation from './src/Components/TabNavigation';
export default function App() {
  return (
    <NavigationContainer>
    <NativeBaseProvider>
      <TabNavigation/>
{/* <Provider store={store}>
<DrawerNavigation/>
</Provider> */}
  </NativeBaseProvider> 
  </NavigationContainer>
  )
}

