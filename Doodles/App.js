import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'http://www4.pictures.zimbio.com/mp/26-j9dYPwm_l.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Cheese!</Text>
        <Image source={{uri: 'http://www4.pictures.zimbio.com/mp/26-j9dYPwm_l.jpg'}} 
        style={{width: 193, height: 110}} />
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
