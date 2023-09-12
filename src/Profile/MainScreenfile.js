import React from "react";
import AddAddressScreen from "./AddAdressScreen";
import AddressScreen from "./Address";
import ProfileScreen from "./Profilescreen";
import { Provider } from "react-redux";
import store from "../Components/Redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "./Orders";
import Feedback from "./FeedBack";
import Pdf from "../Components/Pdf";
const Stack = createStackNavigator();
function MainScreenfile() {
  return (
    <Provider store={store}>
     <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="AddAddress" component={AddAddressScreen} />
    <Stack.Screen name="Orders" component={Orders}/>
    <Stack.Screen name='Feedback' component={Feedback}/>
    <Stack.Screen name="Pdf" component={Pdf}/>
      </Stack.Navigator>
    </Provider>
  );
}

export default MainScreenfile;

