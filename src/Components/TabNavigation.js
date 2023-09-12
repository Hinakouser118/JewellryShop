import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HomeScreen from '../Screen/HomeScreen';
import UserList from './UserList';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import wishlist from '../Components/wishlist';
import Checkout from '../Payment/Checkout';
import { FontAwesome } from '@expo/vector-icons';
import MainScreenfile from '../Profile/MainScreenfile';
import { Ionicons } from '@expo/vector-icons';
import WalletScreen from '../Screen/WalletScreen';
import { Entypo } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Provider store={store}>
     <Tab.Navigator
          initialRouteName="Home"
          shifting={true}
          activeColor="white"
          barStyle={styles.tabBar}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color={'white'} />
              ),
            }}
          />
        
             <Tab.Screen
            name="Wishlist"
            component={wishlist}
            options={{
              tabBarIcon: ({ color }) => (
           <AntDesign name="heart" size={24} color={color} />
              ),
            }}
          />
            <Tab.Screen
            name="Userlist"
            component={UserList}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="shoppingcart" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Checkout"
            component={Checkout}
            options={{
              tabBarIcon: ({ color }) => (
<FontAwesome name="check-square" size={24} color={color} />

              ),
            }}
          />
      
           <Tab.Screen
            name="Profile-Main"
            component={MainScreenfile}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="ios-list" size={24} color={color} />

              ),
            }}
          />
           <Tab.Screen
            name="wallet"
            component={WalletScreen}
            options={{
              tabBarIcon: ({ color }) => (
<Entypo name="wallet" size={24} color={color} />

              ),
            }}
          />
          </Tab.Navigator>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000000',
  },
});
