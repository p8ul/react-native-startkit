import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export class CartSummary extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: this.props.settings.grey,
        margin: 10,
        padding: 2,
        flex: 1
      }}>
        <View style={{
          alignSelf: 'flex-end',
          alignContent: 'flex-end'
        }}>
          <Text style={{
            color: this.props.settings.textColor,
            fontSize: 18
          }}>
            {this.props.title}
          </Text>
        </View>
        <View style={{
          flex: 2,
          alignSelf: 'flex-end',
          alignContent: 'flex-end',
          justifyContent: 'flex-end'
        }}>
          <Text style={{
            textAlign: 'right',
            color: this.props.settings.textColor
          }}>
            {this.props.subTitle}</Text>
        </View>
      </View>
    );
  }
}

export default CartSummary;
