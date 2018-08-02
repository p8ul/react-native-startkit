import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={{
        margin: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: this.props.settings.primary,
        borderColor: 'transparent'
      }}>
        <Icon name="search" style={{
          marginTop: 5,
          marginLeft: 10,
          color: this.props.settings.lightGrey
        }}/>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search "
          placeholderTextColor={this.props.settings.lightGrey}
          style={{ height: 40, flex: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Search;
