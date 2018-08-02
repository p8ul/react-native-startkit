import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class SignIn extends Component {
  static navigationOptions = {
    title: 'ghh',
    header: null,
    headerTitle: 'zcqwerty'
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ color: 'black' }}> SignIn </Text>
      </View>
    );
  }
}

export default SignIn;
