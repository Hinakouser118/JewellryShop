import { View, FlatList, Image,  } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { Text, SafeAreaView, StyleSheet ,Pressable} from 'react-native';
import React, { useRef } from "react";
import { useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import { delete_Order } from '../Components/Redux/Action';
export default function Orders() {
  const navigation=useNavigation()
  const dispatch=useDispatch()
 const orders = useSelector((state) => state.OrderReducers);
// const handleDelete=(index)=>{
// dispatch(delete_Order(index))
// }
 const [selectedStep, setSelectedStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 50,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 50,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 50,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
const calculateTotal = (orderItems) => {
  return orderItems.reduce((total, item) => total + item.price, 0);
};
const generatePDFForSelectedOrder = () => {
const selectedOrderItems = orders[selectedStep]?.item;
  if (selectedOrderItems) {
    navigation.navigate("Pdf", {
      orderItems: selectedOrderItems,
      orderTotal: calculateTotal(selectedOrderItems),
    });
  }
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList 
          data={orders} 
          renderItem={({ item,index }) => (
            <View
              style={{
                width: '100%',
                height: '200%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderBottomWidth: 1,
                borderColor: 'lightgray', 
                paddingHorizontal: 20,
                marginBottom: 10,
              }}
            >
              {item.item.map((item1, innerIndex) => (
                <View
                  key={innerIndex}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 20,
                  }}
                >
                  <Image
                    alt={'image'}
                  source={{uri: item1.image}}
                    style={{ width: 50, height: 50, marginTop: 10, marginBottom: 10 }}
                  />
                  <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item1.name}</Text>
                  <Text style={{ marginTop: 10 }}>{'₹' + item1.price}</Text>
                </View>
                {/* <TouchableOpacity 
                    onPress={handleDelete(index)}
                    style={{ marginLeft: 'auto' }}
                  >
                    <Text style={{ color: 'red' }}>Delete</Text>
                  </TouchableOpacity> */}
                  </View>
              ))}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
     
    <View style={{flex:1,marginBottom:500}}>
   
      <View style={{ width: "100%",padding: 30}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 0 ? "green" : "#f2f2f2",
            
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              padding: 3,
            }}
          >
            1
          </Text>
          <Text style={{
      position: "absolute",
      left: 45,
      top: 8,
     fontSize: 14,
      width: 100,
    }} >OrderConfirmed</Text>
</View>
<View
          style={{ width: 6, height: 50, backgroundColor: "#f2f2f2" }}
        >
    </View>
       <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 1 ? "green" : "#f2f2f2",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              padding: 3,
            }}
          >
            2
          </Text>
          <Text style={{
      position: "absolute",
      left: 45,
      top: 8,
     fontSize: 14,
      width: 100,
    }} >Shipped</Text>
        </View>
        <View
          style={{ width: 5, height: 50, backgroundColor: "#f2f2f2" }}
        ></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 2 ? "green" : "#f2f2f2",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              padding: 3,
            }}
          >
            3
          </Text>
          <Text style={{
      position: "absolute",
      left: 45,
      top: 8,
     fontSize: 14,
      width: 100,
    }} >Out For Delivery</Text>
        </View>

        <View
          style={{ width: 5, height: 50, backgroundColor: "#f2f2f2" }}
        ></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 3 ? "green" : "#f2f2f2",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              padding: 3,
             
            }}
          >
          4
          </Text>
          <Text style={{
      position: "absolute",
      left: 45,
      top: 8,
     fontSize: 14,
      width: 100,
    }} >Delivery</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          padding: 30,
          marginLeft:12,
          position:"absolute",
          top: 0,
        }}
      >
        <Animated.View
          style={{
            width: 5,
            height: progress1,
            marginTop: 30,
            backgroundColor: "green",
          }}
        >

        </Animated.View>
    <Animated.View
          style={{
            width: 5,
            height: progress2,
            marginTop: 30,
            backgroundColor: "green",
          }}
        ></Animated.View>

        <Animated.View
          style={{
            width: 5,
            height: progress3,
            marginTop: 30,
            backgroundColor: "green",
          }}
        ></Animated.View>
      </View>
      <View style={styles.buttonContainer}>
              <Pressable style={styles.smallButton}  onPress={() => {
          if (selectedStep == 1) {
            start1();
          }
          if (selectedStep == 2) {
            start2();
          }
          if (selectedStep == 3) {
            start3();
          }
          if (selectedStep == 0) {
            setSelectedStep(selectedStep + 1);
          } else {
            setTimeout(() => {
              setSelectedStep(selectedStep + 1);
            }, 2000);
          }
        }}>
                <Text style={styles.buttonText}>NextStep</Text>
              </Pressable>
      <Pressable style={styles.smallButton} onPress={()=>navigation.navigate('Feedback')}>
                <Text style={styles.buttonText}>feedback</Text>
              </Pressable>
              <Pressable
            style={styles.smallButton}
            onPress={generatePDFForSelectedOrder}
          >
            <Text style={styles.buttonText}>Print Bill</Text>
          </Pressable>
            </View>
         </View>
  </SafeAreaView>
    
  );
}
const styles=StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10, 
    margin:'auto'
  },
  buttonText: {
    color: 'white',
  },
})
