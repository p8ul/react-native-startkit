import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  dot: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginTop: 4
  },
});

export class Shape extends Component {
  static propTypes = {}

  render() {
    return (
      <TouchableOpacity >
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          borderRadius: 25,
          margin: 10,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5,
        }}>
          <Text style={[styles.dot, { fontSize: 29 }]}>
            Cir
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Shape;
