import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export class CodeInput extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    code: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        flex: 1,
        marginHorizontal: 13
      }}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder=""
          placeholderTextColor='grey'
          style={{
            height: 80,
            flex: 1,
            fontSize: 35,
            textAlign: 'center'
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default CodeInput;
