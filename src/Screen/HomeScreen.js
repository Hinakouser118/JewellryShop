import React from 'react';
import { View, Button } from 'react-native';
import Colors from './Color';
import Homeproducts from '../Components/Homeproducts';

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.subGreen }}>
      <Homeproducts />
      <Button color={'pink'} title="Go to Userlist" onPress={() => { props.navigation.navigate('Userlist') }} />
    </View>
  );
}





