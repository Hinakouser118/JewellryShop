import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HomeScreen from '../Screen/HomeScreen';
import UserList from './UserList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
export default function TabNavigation() {
  
  return (
    <Provider store={store}>
       {/* <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}style={{padding:30}}/>
            <Tab.Screen name="Userlist" component={UserList}  options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer> */}
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Userlist" component={UserList}/>
      </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}
