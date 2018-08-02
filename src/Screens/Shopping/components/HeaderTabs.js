import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { colors } from '../../../utils/constants';

export class HeaderTabs extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        borderRadius: 25,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 5,
        borderWidth: 2,
        borderColor: colors.primaryBg
      }}>
        <View style={{
          margin: 4,
          flex: 1,
          backgroundColor: colors.primaryLight,
          borderRadius: 16,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: colors.white,
            fontWeight: 'bold'
          }}>Openning</Text>
        </View>
        <View style={{
          margin: 4,
          flex: 1,
          borderRadius: 16,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: colors.darkGray,
            fontWeight: 'bold'
          }}>Comming Soon</Text>
        </View>
      </View>
    );
  }
}

export default HeaderTabs;
