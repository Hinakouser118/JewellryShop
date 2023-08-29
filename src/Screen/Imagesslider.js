import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');


const imagesWithText = [
  
{ source: require('../../assets/Images/img.1.jpg'),text:'50%-Off'},
{ source:  require('../../assets/Images/img.2.jpg'),text:'50%-Off'},
{ source:require('../../assets/Images/img.3.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.4.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.5.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.6.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.7.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.8.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.9.jpg'),text:'50%-Off'},
{ source: require('../../assets/Images/img.10.jpg'),text:'50%-Off'}
  
];
const ImageSlider = () => {
  return (
    <Swiper
      style={styles.wrapper}
      loop
      autoplay
      showsPagination={false}
    >
      {imagesWithText.map((imageData, index) => (
        <View key={index} style={styles.slide}>
          <ImageBackground
            source={imageData.source}
            style={styles.imageBackground}
            resizeMode="cover"
            imageStyle={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.imageText1}>Sale</Text>
              <Text style={styles.imageText}>{imageData.text}</Text>
            </View>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  wrapper: {
    height: width / 1.5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',  
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  
  },
  imageText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  imageText1: {
    color: 'red',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ImageSlider;

