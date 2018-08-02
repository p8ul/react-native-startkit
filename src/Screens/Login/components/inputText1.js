import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontSize: 20
  }
});

export class inputText1 extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: '', password: '' };
  }

  render() {
    return (
      <View style={{
        backgroundColor: this.props.settings.textColor,
        padding: 12,
        borderRadius: 6,
        marginTop: 12
      }}>
        <View style={styles.inputWrapper}>
          <Icon name="person" style={styles.icon}/>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor='grey'
            style={{ height: 40, flex: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View style={{
          flex: 1,
          borderBottomColor: 'grey',
          borderBottomWidth: 1
        }}></View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" style={styles.icon}/>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor='grey'
            style={{ height: 40, flex: 1 }}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
      </View>
    );
  }
}

export default inputText1;
