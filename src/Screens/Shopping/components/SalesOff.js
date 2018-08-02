import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

/**
 * Utilities
 */
import { themes, colors } from '../../../utils/constants';

export class OfferCard extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{
          flex: 1,
          backgroundColor: colors.red,
          borderRadius: 4,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5
        }}>
          <View style={{ flex: 1, flexDirection: 'row', padding: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Image style={{
                  flex: 1, width: 80, height: 80
                }} source={require('../../../../assets/9.png')}/>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', padding: 12 }}>
              <View style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginBottom: 0
              }}>
                <Text style={{
                  fontWeight: '800',
                  color: colors.primaryBgDark,
                  fontSize: 20
                }}>SALE OFF</Text>
              </View>
              <View style={{
                flex: 1,
                alignItems: 'flex-end',
                alignContent: 'flex-start',
                marginTop: 0,
                justifyContent: 'flex-start'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: colors.primaryBgDark,
                  fontSize: 46
                }}>50%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default OfferCard;
