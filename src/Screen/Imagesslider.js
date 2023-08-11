import React from 'react';
import { View, Image, StyleSheet, Dimensions ,StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  'https://tse3.mm.bing.net/th?id=OIP.GhPVWPFBYlTR9DVqQPb41gHaHa&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.te6Jin75kPidaThxpX80yQHaKg&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.Zg3RJuN6u3QF3d_STaH5AAHaHa&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.ukYtN3fiJb5EX1WPp5R9IAHaHa&pid=Api&P=0&h=180',
  "https://tse4.mm.bing.net/th?id=OIP.yWMnRNyOH5tf576b_qEXngHaE_&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.ngX0mNaYwRmaUC9XgiiecwHaFf&pid=Api&P=0&h=180",
];

const ImageSlider = () => {
  return (
    <Swiper
      style={styles.wrapper}
      loop
      autoplay
      showsPagination={false}
    >
      {images.map((imageUrl, index) => (
        <View key={index} style={styles.slide}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: StatusBar.currentHeight, 
      },
    
  wrapper: {
    height: width /1.5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
  },
});

export default ImageSlider;
