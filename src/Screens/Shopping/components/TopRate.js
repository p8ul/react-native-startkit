import React, { Component } from 'react';
import {
  Text, View, Dimensions, Image
} from 'react-native';
/**
 * Utilities
 */
import { themes, colors } from '../../../utils/constants';

const WIDTH = Dimensions.get('window').width;

export class CategoryBox extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: colors.primaryBg,
        width: WIDTH / 3 - 10,
        height: WIDTH / 3 - 10,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 4
      }}>
        <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
        }} source={this.props.imageUri}/>

      </View>
    );
  }
}

export default CategoryBox;
