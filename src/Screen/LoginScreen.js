import React, { useState } from "react";
import { Alert, Modal, Pressable, TextInput } from "react-native";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./Color";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const Heading = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>
}
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  async function handleLogin() {
    if (!email || !password) {
      setDisplay(true);
      setLoginSuccess(false);
    } else {
      try {
        const response = await axios.post("http://192.168.1.4:3000/Login", {
          email,
          password,
        });
        // console.log(response.data);
        setDisplay(true);
        if (response.data.success) {
          setLoginSuccess(true);
   navigation.navigate("HomeScreen")
        } else {
          setLoginSuccess(false);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  }
  const handleLogout = async () => {
    let response;
    setShowConfirmationModal(true);
  };
  const confirmLogout = async () => {
    try {
      //ApiCall if requied
      response = await simulateLogoutAPI();
      if (response.success) {
        setMessage("Logout successful!");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setMessage("");
        }, 2000);
      } else {
        setMessage("Logout failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while logging out.");
    } finally {
      setShowConfirmationModal(false);
      if (response && response.success) {
        Alert.alert(
          "Logout Successful",
          "You have been successfully logged out."
        );
      }
    }
  };

  const cancelLogout = () => {
    setShowConfirmationModal(false);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/coverpage.jpg")}
      />

      <View style={styles.view}>
        <Heading>LOGIN</Heading>
        {/* Email */}
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="user@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="black"
          />
        </View>
        {/* Password */}
        <View style={[styles.inputContainer, { marginVertical: 10 }]}>
          <FontAwesome name="eye-slash" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="black"
          />
        </View>
         <View style={styles.buttonsContainer}>
          <Pressable style={styles.smallButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={styles.smallButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </Pressable>
          <Pressable style={styles.smallButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
        {display &&
          !loginSuccess &&
          !email &&
          !password &&
          Alert.alert("Login Error", "Type the Email and Password", [
            { text: "OK", onPress: () => setDisplay(false) },
          ])}
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <Modal
          visible={showConfirmationModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Are you sure you want to log out?</Text>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.smallButton} onPress={confirmLogout}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
                 <Pressable style={styles.smallButton} onPress={cancelLogout}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
              </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height,
  },
  view: {
    position: "absolute",
    top: height / 5,
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "black",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  smallButton: {
    backgroundColor: Colors.black,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsContainer: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  smallButton: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 6,
    margin: 6,
    alignItems: "center",
    color: "white",
  },
  buttonText: {
    color: "white",
  },
  message: {
    marginTop: 10,
    color: "#000000",
    fontSize: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 10,
    alignItems: "center",
  },
});
const simulateLogoutAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};
export default LoginScreen;