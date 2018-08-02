import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class OfferCard extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#281543',
        marginBottom: 6
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#8877bb',
          borderRadius: 10,
          height: 120,
          margin: 10
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            {/* body */}
            <View style={{ flex: 2, padding: 10 }}>
              <Text style={{
                flex: 1,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 19
              }}>
                   Sale offer 50%
              </Text>
              <Text style={{
                flex: 1,
                color: 'white',
                fontWeight: 'normal'
              }}>
                   Addiction When Gambling, Becomes A Problem
              </Text>
            </View>
            {/* image */}
            <View style={{ flex: 1, padding: 10 }}>
              <Image style={{
                flex: 1, width: null, height: null
              }} source={require('../../../../assets/choo.png')}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default OfferCard;
