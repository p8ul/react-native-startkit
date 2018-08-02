import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Utilities
 */
import { colors } from '../../../utils/constants';

const WIDTH = Dimensions.get('window').width;

export class CategoryBox extends Component {
  render() {
    return (
      <View style={{ marginTop: 6, marginRight: 6 }}>
        <View style={{
          height: WIDTH / 5,
          width: WIDTH / 5,
          backgroundColor: colors.primaryBg,
          justifyContent: 'center',
          alignItems: 'center',
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5,
          borderRadius: 4
        }}>
          <View >
            <Ionicons name={this.props.icon} color={colors.red} size={44} />
          </View>
        </View>
      </View>
    );
  }
}

export default CategoryBox;
