import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export class TimeInfoCard extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired
    }

    render() {
      return (
        <View style={{
          alignItems: 'center',
          padding: 4
        }}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 45,
              color: 'white'
            }}>{this.props.title}</Text>
          </View>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontWeight: '400',
              fontSize: 25,
              color: 'white'
            }}>{this.props.subTitle}</Text>
          </View>
        </View>
      );
    }
}

export default TimeInfoCard;
