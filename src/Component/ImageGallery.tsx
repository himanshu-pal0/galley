import React, { useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

const mockImages = Array.from({ length: 50 }, (_, i) => `https://picsum.photos/id/${i}/200/300`);

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState(mockImages);

  const loadMore = () => {
    const newImages = Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/id/${images.length + i}/200/300`
    );
    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  image: { width: 200, height: 300, margin: 5 },
});

export default ImageGallery;
