import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'; // Correct import
import React from 'react';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import NotVerifyScreen from '../Screen/Wallpaper';
import { StatusBar } from 'react-native';

import TabNavigation from '../Components/TabNavigation'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator >
      <Stack.Screen name="JewelleryShop" component={NotVerifyScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Tabnavigation" component={TabNavigation}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
