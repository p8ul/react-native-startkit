import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Dimensions, Image
} from 'react-native';
/**
 * Utilities
 */
import { themes, colors } from '../../../utils/constants';

const WIDTH = Dimensions.get('window').width;

export class CategoryBox extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    imageUri: PropTypes.number,
    title: PropTypes.string,
    subTitle: PropTypes.string
  }

  render() {
    return (
      <View style={{ marginTop: 6, marginBottom: 6, marginRight: 6 }}>
        <View style={{
          height: WIDTH / 2.5,
          width: WIDTH / 2.7,
          backgroundColor: this.props.settings.cardBgLight,
          justifyContent: 'center',
          alignItems: 'center',
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5,
          borderRadius: 4
        }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 12
          }} >
            <Image
              style={{
                height: WIDTH / 4.6,
                width: WIDTH / 6,
                alignItems: 'center'
              }}
              source={this.props.imageUri}
            />
            <Text style={{
              color: 'white',
              alignSelf: 'flex-start'
            }}>{this.props.title}</Text>
            <Text style={{
              color: this.props.settings.primaryLight,
              alignSelf: 'flex-start'
            }}>{this.props.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CategoryBox;
