import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../../utils/constants';

export class Saleoffer extends Component {
  static propTypes = {
    bgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    imageUri: PropTypes.number,
    settings: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={{
        backgroundColor: this.props.bgColor,
        flexDirection: 'row',
        padding: 20,
        height: 130,
        borderRadius: 10,
        marginTop: 15,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 5,
      }} onPress={() => this.props.goTo()}
      >
        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Text onPress={() => this.props.goTo()} style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: this.props.settings.textColor
          }}>{this.props.title}</Text>
          <Text style={{
            fontSize: 20,
            color: this.props.settings.textColor,
            marginTop: 5
          }}>{this.props.subTitle}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={{
              height: 100, width: null
            }}
            source={this.props.imageUri}
            onPress={() => this.props.navigation.navigate('SingleProduct')}
          />
        </View>
      </View>
    );
  }
}

export default Saleoffer;
