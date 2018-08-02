import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { settingTheme } from '../actions';

export class Settings extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    settingTheme: PropTypes.func.isRequired
  }

  render() {
    return (
      <View>
        <Text> prop </Text>
        <Button title='theme' onPress={ () => this.props.settingTheme({ theme: 'white' })}/>
        <Text>{this.props.settings.theme}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = {
  settingTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
