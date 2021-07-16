/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StyleSheet, ImageBackground, Text, Button , View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
    
      <Text>Please focuse your camera to the QR code properly!</Text>
      
    <Button
        title="Scan QR"
        onPress={() => this.props.navigation.navigate('Scanner')}
      />
    </View>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
