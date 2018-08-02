import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export class H2 extends Component {
  render() {
    return (
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}>{this.props.title}</Text>
      </View>
    );
  }
}

H2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default H2;
