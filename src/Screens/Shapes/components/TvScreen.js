import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';
import styles from './styles';

export class TvScreen extends Component {
  static propTypes = {}

  render() {
    return (
      <TouchableOpacity >
        <View style={{ flex: 1 }}>
          <View style={{
            backgroundColor: 'red',
            flex: 1,
            width: 120,
            height: 70,
            borderBottomRightRadius: 45,
            borderTopLeftRadius: 45,
          }}>
            <Text style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }}>X</Text>
          </View>

          <View style={{
            backgroundColor: 'red',
            flex: 1,
            width: 120,
            height: 70,
            borderBottomRightRadius: 45,
            // borderTopLeftRadius: 45,
            borderTopRightRadius: 45,
            // marginTop: 12
          }}>
            <Text style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }}>X</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default TvScreen;
