import React, { Component } from 'react';
import {
  View, TouchableOpacity
} from 'react-native';
import styles from './styles';

export class Shape extends Component {
  static propTypes = {}

  render() {
    return (
      <TouchableOpacity >
        <View style={styles.oval}></View>
      </TouchableOpacity>
    );
  }
}
export default Shape;
