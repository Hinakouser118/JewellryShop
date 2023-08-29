import { Button } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import { add_Order } from '../Components/Redux/Action';

export default function Checkout() {
  const CartItems = useSelector((state) => state.reducer);
  const addressList = useSelector((state) => state.AddressReducres);
  const [selectedAddress, setSelectedAddress] = useState('');
  const navigation =useNavigation()
  const dispatch=useDispatch()
  const getTotal = () => {
    
    let tempTotal = 0;
    CartItems.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={CartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  width: '100%',
                  height: 70,
                  flexDirection: 'row',
                  marginTop: 10,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  style={{ width: 70, height: 70, marginLeft: 10 }}
                />
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ marginTop: 10 }}>{'₹' + item.price}</Text>
                </View>
              </View>
            )}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 30,
              borderTopWidth: 0.5,
              borderTopColor: '#8e8e8e',
              height: 50,
            }}
          >
            <Text>Total :</Text>
            <Text>{'₹' + getTotal()}</Text>
          </View>
          <FlatList
            data={addressList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ width: '100%', height: 60, borderWidth: 0.2, borderColor: 'gray', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', marginBottom: 10 }}>
                <View style={{ marginLeft: 20 }}>
                  <Text>{'City: ' + item.city}</Text>
                  <Text>{'House: ' + item.house}</Text>
                  <Text>{'Pincode: ' + item.pincode}</Text>
                </View>
                <TouchableOpacity
                  style={{ borderWidth: 0.2, padding: 7, marginRight: 20, backgroundColor: 'red', borderRadius: 5 }}
                  onPress={() => setSelectedAddress('City :' + item.city + ', House:' + item.house + ', Pincode:' + item.pincode)}>
                  <Text style={{ color: 'white' }}>Selected Address</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <Text style={{ margin: 20, fontSize: 18 }}>Select Address</Text>
        <Text style={{ marginLeft: 20, fontSize: 18 }}>{selectedAddress === '' ? 'Please select an address from the above list.' : selectedAddress}</Text>
      </View>
      <Button style={{backgroundColor:'black',color:'white',marginBottom:100,margin:20,padding:20}}title={'place order'} onPress={()=>{
        var options = {
            description: 'Credits towards consultation',
            image: 'https://tse2.mm.bing.net/th?id=OIP.Tm-SX2yv2PKOHe3RfZ9chQHaHa&pid=Api&P=0&h=180',
            currency: 'INR',
            key: 'rzp_test_BDAtyJxf1DyqOb', 
            amount:''+ parseInt(getTotal())+'',
            // amount:10000,
            name: 'Afiya-Jewellery',
            prefill: {
              email: '123@gmail.com',
              contact: '+91',
              name: ''
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id}`);
            dispatch(add_Order({item:CartItems,total:getTotal(),address:selectedAddress}))
            navigation.navigate('Profile-Main')
            
          }).catch((error) => {
            // handle failure
            alert('Payment Error', error.message);
           
          });
      }}>
        PlaceOrder
      </Button>
    </SafeAreaView>
  );
}
