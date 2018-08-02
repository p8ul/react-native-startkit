import React, { Component } from 'react';
import {
  View, TouchableOpacity
} from 'react-native';

import styles from './styles';

export class KeyBoard extends Component {
  static propTypes = {}

  render() {
    return (
      <TouchableOpacity >
        <View style={styles.triangleDown}></View>
      </TouchableOpacity>
    );
  }
}
export default KeyBoard;
