import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import ImageGallery from '../Component/ImageGallery';

const images = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/500',
];

const GalleryScreen = () => (
  <SafeAreaView>
    <ImageGallery/>
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  image: { height: 300, width: 300 },
});

export default GalleryScreen;
