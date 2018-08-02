import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'native-base';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{
        margin: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#534368',
        borderColor: 'transparent'
      }}>
        <Icon name="search" style={{
          marginTop: 5,
          marginLeft: 10,
          color: 'grey'
        }}/>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search categories"
          placeholderTextColor='grey'
          style={{ height: 40, flex: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Search;
