import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDetails = ({ orderItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordered Items</Text>
      {orderItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>₹{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default OrderDetails;
