import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

export class CartItem extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    imageUri: PropTypes.number
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        backgroundColor: this.props.settings.cardBgDark,
        height: 60,
        marginTop: 16,
        borderRadius: 6,
        padding: 2,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 2,
      }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: null
            }}
            source={this.props.imageUri} />
        </View>
        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Text style={{ color: this.props.settings.textColor, fontWeight: 'bold' }}>Home made Apple</Text>
          <Text style={{ color: 'grey' }}>KES 123</Text>
        </View>
        <View style={{
          flex: 2,
          flexDirection: 'row',
          margin: 15,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 20
        }}>
          <View style={{
            flex: 1,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'white',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white' }}>-</Text>
          </View>
          <View style={{
            flex: 2,
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', textAlign: 'center', paddingTop: 2 }}>3</Text>
          </View>
          <View style={{
            flex: 1,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'white',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white' }}>+</Text>
          </View>
        </View>
      </View>

    );
  }
}

export default CartItem;
