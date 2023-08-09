import { View, Center, Image, VStack } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from './Color';
import Buttons from '../Components/Buttons';

export default function NotVerifyScreen() {
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View flex={1} bg={Colors.pink} paddingTop={2} safeAreaTop>
      <Center flex={1} h={300}>
        <VStack space={6} alignItems='center'>
          <Image
            source={require('../../assets/favicon.png')}
            alt='logo'
            size='lg'
          />
          <Buttons bg={Colors.black} color={Colors.white} mt={2} onPress={navigateToRegister}>
            REGISTER
          </Buttons>
          <Buttons bg={Colors.white} color={Colors.black} onPress={navigateToLogin}>
            LOGIN
          </Buttons>
        </VStack>
      </Center>
    </View>
  );
}
