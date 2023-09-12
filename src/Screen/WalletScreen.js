import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMoney, removeMoney } from '../Components/Redux/Action';
import { FontAwesome5 } from '@expo/vector-icons'; 

const WalletScreen = () => {
  const walletBalance = useSelector((state) => state.WalletReducers.walletBalance);
  const dispatch = useDispatch();
  const [amountToAdd, setAmountToAdd] = useState('');
  const [amountToRemove, setAmountToRemove] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(walletBalance);

  const handleAddMoney = () => {
    const amount = parseFloat(amountToAdd);
    if (!isNaN(amount) && amount > 0) {
      dispatch(addMoney(amount));
      setAmountToAdd('');
      setCurrentBalance(currentBalance + amount);
      setTransactions([...transactions, `Added: $${amount.toFixed(2)}`]);
    }
  };

  const handleRemoveMoney = () => {
    const amount = parseFloat(amountToRemove);
    if (!isNaN(amount) && amount > 0 && amount <= currentBalance) {
      dispatch(removeMoney(amount));
      setAmountToRemove('');
      setCurrentBalance(currentBalance - amount);
      setTransactions([...transactions, `Removed: $${amount.toFixed(2)}`]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Wallet Balance</Text>
      <Text style={styles.amountText}>₹{currentBalance ? currentBalance.toFixed(2) : 'Loading...'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount to add"
        keyboardType="numeric"
        value={amountToAdd}
        onChangeText={text => setAmountToAdd(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <FontAwesome5 name="plus-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Add Money</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter amount to remove"
        keyboardType="numeric"
        value={amountToRemove}
        onChangeText={text => setAmountToRemove(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRemoveMoney}>
        <FontAwesome5 name="minus-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Remove Money</Text>
      </TouchableOpacity>
      <Text style={styles.transactionText}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Text style={styles.transactionItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  balanceText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  transactionText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  transactionItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default WalletScreen;
