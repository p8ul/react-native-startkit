import React, { Component } from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

export class FullButton extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    iconName: PropTypes.string
  }

  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[
          this.props.settings.purpleDark,
          this.props.settings.purple,
          this.props.settings.purpleLight
        ]} style={{
          borderRadius: 6,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Icon name={this.props.iconName} style={{
          color: 'white',
          padding: 6,
        //   marginLeft: 6
        }} />
      </LinearGradient>
    );
  }
}

export default FullButton;
