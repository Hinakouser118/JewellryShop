import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import Wishlist from './wishlist';
import UserList from './UserList';
import Checkout from '../Payment/Checkout';
// import MainScreenfile from '../Profile/MainScreenfile';
import WalletScreen from '../Screen/WalletScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState('HomeScreen');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    setIsSidebarOpen(false); 
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'HomeScreen':
        return <HomeScreen />;
      case 'Wishlist':
        return <Wishlist />;
      case 'UserList':
        return <UserList />;
      case 'Checkout':
        return <Checkout />;
      // case 'Profile-Main':
      //   return <MainScreenfile />;
      case 'wallet':
        return <WalletScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('HomeScreen')}
          >
              <Icon name="home" size={20} color="black" style={styles.sidebarIcon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('Wishlist')}
          >
            <Icon name="heart" size={20} color="black" style={styles.sidebarIcon} />
            <Text style={styles.sidebarText}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('UserList')}
          >
             <Icon name="users" size={20} color="black" style={styles.sidebarIcon} />
            <Text style={styles.sidebarText}>User List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('Checkout')}
          >
              <Icon name="shopping-cart" size={20} color="black" style={styles.sidebarIcon} />
            <Text style={styles.sidebarText}>Checkout</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('Profile-Main')}
          >
          <Icon name="user" size={20} color="black" style={styles.sidebarIcon} />
            <Text style={styles.sidebarText}>Profile</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigateToScreen('wallet')}
          >
         
              <FontAwesome5 name="wallet" size={20} color="black" style={styles.sidebarIcon}  />
            <Text style={styles.sidebarText}>Wallet</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.mainContent}>{renderScreen()}</View>
      <TouchableOpacity style={styles.sidebarToggle} onPress={toggleSidebar}>
      <Icon name={isSidebarOpen ? 'times' : 'bars'} size={22} color="black"  style={styles.icon} />
    
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: 'Black',
    paddingTop: 50,
    alignItems: 'center',
  },
  sidebarItem: {
    padding: 10,
  },

  sidebarText: {
    color: 'black', 
    fontSize: 18,
    fontWeight: 'bold', 
  },
  mainContent: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarIcon: {
    marginRight: 10,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999, 
  },
  sidebarToggleText: {
    color: 'blue',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
    right:10
  },
});
