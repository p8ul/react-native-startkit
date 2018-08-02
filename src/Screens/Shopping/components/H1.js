import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export class H1 extends Component {
  render() {
    return (
      <View style={{
        alignItems: 'flex-start',
        marginTop: 10
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
        }}>{this.props.title}</Text>
      </View>
    );
  }
}

H1.propTypes = {
  title: PropTypes.string.isRequired,
};

export default H1;
