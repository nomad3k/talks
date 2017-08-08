import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const brie = require('./images/brie.png');
const cheddar = require('./images/cheddar.png');

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsla(90,40%,50%,1)'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  } 
});

export default class App extends React.Component {
  render() {
    const s = {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red'
    };
    return (
      <View style={styles.container}>

        <Text style={s}>Brie!</Text>
        <Image source={brie} />

        <Text style={s}>Cheddar!</Text>
        <Image source={cheddar} />

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
