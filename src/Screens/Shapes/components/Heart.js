import React, { Component } from 'react';
import {
  View, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export class Shape extends Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    return (
      <TouchableOpacity >
        <View {...this.props} style={[styles.heartShape, this.props.style]}>
          <View style={styles.leftHeart} />
          <View style={styles.rightHeart} />
        </View>
      </TouchableOpacity>
    );
  }
}
export default Shape;
