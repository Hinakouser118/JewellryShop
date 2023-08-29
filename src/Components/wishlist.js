import React from 'react';
import { View, Text, Image, Button, ScrollView, Modal } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from './Redux/Action';
import { FontAwesome } from '@expo/vector-icons'; 
import { addToCart } from './Redux/Action';
export default function WishlistScreen() {
  const wishlistItems = useSelector(state => state.wishlistReducer);
  const dispatch = useDispatch();
  const handleDeleteFromWishlist = (itemName) => {
    dispatch(removeFromWishlist(itemName));
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    handleDeleteFromWishlist(item.name); 
  };
return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
      <View style={{ width: '80%', maxWidth: 300 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40 }}>Wishlist Items:</Text>
        {wishlistItems.map((item, index) => (
          <View key={index} style={{ marginBottom: 40, borderWidth: 5, borderColor: '#ccc', borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.image }} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
          <Button
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#fff',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              title='wrong'
              onPress={() => handleDeleteFromWishlist(item.name)}
            >
  <FontAwesome name="trash-o" size={20} color="red" />
            </Button>
            <Button   style={{
                backgroundColor: 'black',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }} title='Cart' onPress={()=>handleAddToCart(item)}>Go to Cart</Button>
          </View>
        ))}
      </View>
     
    </ScrollView>
    
  );
}

