import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import React from "react";
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen";
import NotVerifyScreen from "../Screen/Wallpaper";
import { StatusBar } from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import HomeScreen from "../Screen/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const Main = () => {
  const navigation=useNavigation()
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="JewelleryShop" component={NotVerifyScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
 </NativeBaseProvider>
  );
};

export default Main;
