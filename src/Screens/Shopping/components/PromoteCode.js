import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export class PromoteCode extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '#D32DEG'
    };
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        margin: 10,
        flex: 1
      }}>
        <View style={{
          flex: 2,
          alignSelf: 'flex-end',
          alignContent: 'flex-end',
          justifyContent: 'center',
          margin: 3
        }}>
          <Text style={{
            color: this.props.settings.textColor,
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            {this.props.title}
          </Text>
        </View>
        <View style={{
          flex: 1,
          alignSelf: 'flex-end',
          alignContent: 'flex-end',
          justifyContent: 'flex-end'
        }}>
          <View style={{
            flex: 1,
            backgroundColor: this.props.settings.grey,
            borderRadius: 10
          }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="code"
              placeholderTextColor='grey'
              textColor="white"
              selectionColor="white"
              style={{
                height: 39, width: null, textAlign: 'center', color: 'white', flex: 1
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default PromoteCode;
