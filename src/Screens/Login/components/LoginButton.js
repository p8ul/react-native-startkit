import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  actionButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 14
  }
});
export class LoginButton extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    title: PropTypes.string
  }

  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[
          this.props.settings.bodyBg,
          this.props.settings.indigo,
          this.props.settings.bodyBg
        ]} style={{
          borderRadius: 6,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Text style={styles.actionButtonText}>
          {this.props.title}
        </Text>
      </LinearGradient>
    );
  }
}

export default LoginButton;
