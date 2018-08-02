import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

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

export class DeleteKey extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    number: PropTypes.string,
    setPin: PropTypes.func.isRequired
  }

  render() {
    return (
      <TouchableOpacity >
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          borderBottomStartRadius: 30,
          borderTopStartRadius: 30,
          margin: 10,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5,
          alignItems: 'center'
        }}>
          <Text onPress={() => this.props.setPin()} style={[styles.dot, { fontSize: 29 }]}>
            {this.props.number}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeleteKey;
