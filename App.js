
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import products from './src/data/products';
import ProductScreen from './src/screens/ProductScreen';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ProductScreen />
    </View>
  );}
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png'
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
   itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
