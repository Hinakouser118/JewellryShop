import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet, Dimensions, Text, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Heading = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nameerror, setNameError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);
  const [emailerror, setEmailError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // New state for modal visibility

  const data = async () => {
    setNameError(!name ? true : false);
    setPasswordError(!password ? true : false);
    setEmailError(!email ? true : false);

    if (!name || !password || !email) {
      return false;
    }

    const url = 'http://10.0.2.2:3000/user';
    let result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    result = await result.json();
    setModalVisible(true); // Show modal when data is added
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={require('../../assets/coverpage.jpg')}
      />
      <View style={styles.view}>
        <Heading>SIGNUP</Heading>
        {/* Username */}
       
        <View style={[styles.inputContainer, { marginVertical: 10 }]}>
          <FontAwesome name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder='UserName'
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor='black'
          />
          {nameerror ? (
            <Text style={styles.error}>please enter valid name.</Text>
          ) : null}
        </View>
        {/* Email */}
        
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='user@gmail.com'
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor='black'
          />
          {emailerror ? (
            <Text style={styles.error}>please enter valid email.</Text>
          ) : null}
        </View>
        {/* Password */}
       
        <View style={[styles.inputContainer, { marginVertical: 10 }]}>
          <FontAwesome name="eye-slash" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder='*******'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor='black'
          />
          {passworderror ? (
            <Text style={styles.error}>please enter valid age.</Text>
          ) : null}
        </View>

        <Pressable style={styles.smallButton} onPress={data}>
          <Text style={styles.buttonText}>SAVEDATA</Text>
        </Pressable>

        {/* Modal Dialog */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Data Saved!</Text>
              <Pressable
                style={[styles.smallButton, styles.modalButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
  },
  view: {
    position: 'absolute',
    top: height / 5,
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    zIndex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  smallButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',

  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

export default RegisterScreen;
