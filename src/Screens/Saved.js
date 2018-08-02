import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Saved extends Component {
  static naviagationOptions = {
    title: 'Welcome to the app!',
    header: null,
  };

  constructor(props) {
    super(props);
    this.name = 'hi';
  }

  render() {
    return (
      <View>
        <Text> Saved </Text>
      </View>
    );
  }
}

export default Saved;
