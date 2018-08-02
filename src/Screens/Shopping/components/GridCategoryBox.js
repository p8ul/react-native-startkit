import React, { Component } from 'react';
import {
  Text, View, Dimensions, Image
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export class GridCategoryBox extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    imageUri: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={{
        backgroundColor: this.props.settings.cardBgLight,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: this.props.settings.textColor,
        shadowOpacity: 0.5,
        elevation: 2,
        width: width / 2 - 20,
        height: height / 3.2,
        borderRadius: 6,
        padding: 7,
        margin: 4
      }}>
        <View style={{
          flex: 1,
          padding: 6,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image
            style={{
              height: height / 6,
              width: height / 6,
            }}
            source={this.props.imageUri}
          />
        </View>
        <View style={{ alignContent: 'center' }}>
          <Text style={{
            color: this.props.settings.textColor,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 20
          }}>{this.props.title}</Text>
        </View>
        <View style={{ alignContent: 'center' }}>
          <Text style={{
            color: this.props.settings.primary,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 12
          }}>{this.props.subTitle}</Text>
        </View>
      </View>
    );
  }
}

export default GridCategoryBox;
