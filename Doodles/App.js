import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MartaDash from './MartaDash';

const styles = StyleSheet.create({
    // No Dashes
    // No periods
    catBox: {
        //style values in quotes
        borderColor: 'purple',
        borderWidth: 3,
        borderStyle: 'solid'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
});

export default class App extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.catBox}>
            <Text>Cheese!</Text>
            <Image source={{uri: 'https://placekitten.com/193/193'}} 
            style={{width: 193, height: 193}} />
        </View>
        <MartaDash/>
      </View>
    );
  }
}
