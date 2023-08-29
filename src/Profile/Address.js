import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { delete_Address } from '../Components/Redux/Action';
export default function AddressScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const addressList = useSelector((state) => state.AddressReducres);

  const navigateToAddAddress = () => {
    props.navigation.navigate('AddAddress');
  };

  const handleDeleteAddress = (index) => {
    dispatch(delete_Address(index));
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
     <View style={{ width: '100%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 }}>Address</Text>
        <TouchableOpacity style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.2, padding: 5, borderRadius: 10 }} onPress={navigateToAddAddress}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addressList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ width: '100%', height: 60, borderWidth: 0.2, borderColor: 'gray', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ marginLeft: 20 }}>
              <Text>{"City: " + item.city}</Text>
              <Text>{"House: " + item.house}</Text>
              <Text>{"Pincode: " + item.pincode}</Text>
            </View>
            <TouchableOpacity
              style={{ borderWidth: 0.2, padding: 7, marginRight: 20, backgroundColor: 'red', borderRadius: 5 }}
              onPress={() => handleDeleteAddress(index.city)}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
