import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';

export class Category extends Component {
  render() {
    return (
      <View style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddd'
      }}>
        <View style={{ flex: 2 }} >
          <Image source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
        </View>
        <View style={{
          flex: 1,
          paddingLeft: 10,
          paddingTop: 10
        }}>
          <Text>{this.props.name} </Text>
        </View>
      </View>
    );
  }
}

export default Category;
