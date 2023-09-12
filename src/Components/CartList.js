import React from 'react';
import { Box,View, Text, Image, Pressable, Button, StyleSheet, ScrollView } from 'native-base';
import Colors from '../Screen/Color';
import { remove_from_cart } from './Redux/Action';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
export default function CartItems({ cartItems }) {
  const dispatch = useDispatch();
const navigation=useNavigation()
  const handleRemoveFromCart = (itemName) => {
    dispatch(remove_from_cart(itemName));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
 
  
return (
    <ScrollView>
      <Box bg={Colors.white} rounded={'md'} shadow={2} my={3} mx={1} p={4}>
        <Text fontSize={20} bold style={{ textAlign: 'center' }}>
          Cart Items :
        </Text>
        <Pressable>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              w={300}
              h={300}
              bg={Colors.pink}
              rounded={'md'}
              shadow={2}
              my={3}
              mx={1}
              ml={6}
              mb={3}
            >
              <Image
                source={{ uri: item.image }}
                alt={item.name}
                resizeMode='contain'
                flex={1}
                roundedTop={'md'}
              />
              <Text fontSize={20}>
                {item.name} - ₹{item.price}
              </Text>
              <Button
                size={'md'}
                fontSize={20}
                onPress={() => handleRemoveFromCart(item.name)}
                bg={Colors.red}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Pressable>
        {cartItems.length > 0 && (
          <>
            <View style={{ marginBottom: 20 }}>
              <Text fontSize={20} bold>
                Subtotal: ₹{calculateSubtotal()}
              </Text>
            </View>
            <Button  title='checkout' onPress={()=>{
              navigation.navigate('Checkout')
               
            }} style={{backgroundColor:'green',color:'white'}}>
              Checkout
            </Button>
          </>
        )}
      </Box>
    </ScrollView>
  );
}



  
