import React, { useState } from 'react';
import { View, Text,TextInput, Image, StyleSheet } from 'react-native';
import buliding from '../Profile/building.png'
import passcode from '../Profile/passcode.png'
import { Button } from 'native-base';
import { useDispatch } from 'react-redux';
import { add_Address } from '../Components/Redux/Action';
const  AddAddressScreen=()=> {
const [city, setCity] = useState('');
const [house,setHouse]= useState('');
const [pincode,setPincode]=useState('');
const dispatch=useDispatch()
const saveAddress = () => {
  if (city !== '' && house !== '' && pincode !== '') {
    const newAddress={ city:city, house:house, pincode:pincode };
    dispatch(add_Address(newAddress));
    setCity('');
    setHouse('');
    setPincode('');
  }
};
return (
    <View style={{ flex: 1, marginTop: 20 }}>
     <View style={styles.textBoxContainer}>
        <Image source={buliding} style={styles.icon} />
        <TextInput
          style={styles.textBox} 
          placeholder='Enter City name'
          value={city}
          onChangeText={(text) => setCity(text)}
          placeholderTextColor='black'
        />
      </View>
      <View style={styles.textBoxContainer}>
        <Image source={buliding} style={styles.icon} />
        <TextInput
          style={styles.textBox} 
          placeholder='enter Building name'
          value={house}
          onChangeText={(text) => setHouse(text)}
          placeholderTextColor='black'
        />
      </View>
      <View style={styles.textBoxContainer}>
        <Image source={passcode} style={styles.icon} />
        <TextInput
          style={styles.textBox} 
          placeholder='enter pincode name'
          value={pincode}
          keyboardType='number-pad'
          onChangeText={(text) => setPincode(text)}
          placeholderTextColor='black'
        />
 </View>
<Button
        style={styles.button}
        onPress={saveAddress}
      >
        <Text style={styles.buttonText}>Save Address</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical:8,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
   marginTop:2
  },
  icon: {
    width: 20,
    height: 20,
    margin: 5,
    marginHorizontal:8,
  },
  textBox: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
export default AddAddressScreen;
