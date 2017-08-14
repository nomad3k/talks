import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

const images = {
  brie: require('../images/brie.png'),
  cheddar: require('../images/cheddar.png'),
  danishBlue: require('../images/danish-blue.png'),
  edam: require('../images/edam.png')
};

export default class Cheese extends React.Component {
  static propType = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    const s = {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red'
    };
    const { title, image } = this.props;
    const img = images[image];
    return (
      <View>
        <Text style={s}>{title}</Text>
        <Image source={img} />
      </View>
    );
  }
}
