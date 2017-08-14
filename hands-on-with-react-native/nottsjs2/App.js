import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Cheese from './components/cheese';

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

  const [head, ...tail] = myArray;
  const {
    foo,
    bah,
    ...other
  } = { foo: 1, bah: 2, x: 1, y: 345};

  render() {
    const s = {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red'
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <Cheese title='Brie' image='brie' />
          <Cheese title='Cheddar' image='cheddar' />
          <Cheese title='Danish Blue' image='danishBlue' />
        </ScrollView>
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
