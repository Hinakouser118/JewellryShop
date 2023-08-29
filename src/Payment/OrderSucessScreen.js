import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";
import { Pressable } from "native-base";
import { StyleSheet } from "react-native";

export default function OrderSucessScreen({ status }) {
  const navigation = useNavigation();
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={
          status === "success"
            ? require("../../assets/Images/failed.jpg")
            : require("../../assets/Images/success.png")
        }
        style={{ width: 50, height: 50 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20 }}>
        {/* {status === 'success'
          ? 'Your Order Placed Successfully'
          : 'Order Failed'} */}
        {status === "Failed"
          ? "Order Failed"
          : "Your Order Placed Successfully"}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.6,
        }}
        onPress={() => {
          navigation.navigate("HomeScreen"); 
        }}
      >
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
      {/* <View style={styles.buttonContainer}>
                <Pressable style={styles.smallButton} onPress={()=>navigation.navigate('Orders')}>
                  <Text style={styles.buttonText}>Orders</Text>
                </Pressable>
                 
              </View> */}
             
    </View>
  );
}
// const styles=StyleSheet.create({

//   buttonContainer: {
//     flexDirection: "row",
//  marginTop:20
//   },
//   smallButton: {
//     backgroundColor: 'black',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
// })