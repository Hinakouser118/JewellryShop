import { View, Text, Image } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import userpng from '../Profile/user.png'
import { useNavigation } from '@react-navigation/native';
export default function ProfileScreen(props) {
  const navigateToAddress = () => {
    props.navigation.navigate('Address'); 
  };
  const navigation=useNavigation()
 return (
    <View style={{ flex: 1, marginTop: 20 }}>
     <Image source={userpng} alt="profile" style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 30 }} />
      <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}>HINA</Text>
      <TouchableOpacity style={{ width: '80%', alignSelf: 'center', height: 50, borderBottomWidth: 4, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }} onPress={navigateToAddress}>
      <Text style={{ color: 'black', fontWeight: 'bold' }}>Address</Text>
       </TouchableOpacity>
      <TouchableOpacity style={{ width: '80%', alignSelf: 'center', height: 50, borderBottomWidth: 4, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }} onPress={()=>{
        navigation.navigate('Orders')
      }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '80%', alignSelf: 'center', height: 50, borderBottomWidth: 4, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Offers</Text>
      </TouchableOpacity>

    </View>
  )
}
