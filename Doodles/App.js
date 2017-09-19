import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MartaDash from './MartaDash';

export default class App extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Cheese!</Text>
        <Image source={{uri: 'https://placekitten.com/193/193'}} 
        style={{width: 193, height: 193}} />
        <MartaDash/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
