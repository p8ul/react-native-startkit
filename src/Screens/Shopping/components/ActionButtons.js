import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  actionButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  }
});

export class ActionButtons extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    rightText: PropTypes.string,
    leftText: PropTypes.string,
    leftBorderColor: PropTypes.string
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginBottom: 34
      }}>
        <View style={{ flex: 1, marginRight: 3 }}>
          <View style={{
            borderWidth: 1,
            borderRadius: 50,
            borderColor: this.props.leftBorderColor
          }}>
            <Text style={[styles.actionButtonText, { textAlign: 'auto', fontSize: 24 }]}>
              {this.props.leftText}
            </Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          marginLeft: 3,
          borderRadius: 20
        }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            colors={[
              this.props.settings.purpleLight,
              this.props.settings.purple,
              this.props.settings.purpleDark
            ]} style={{
              borderRadius: 50,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <Text style={styles.actionButtonText}>
              {this.props.rightText}
            </Text>
          </LinearGradient>
        </View>

      </View>
    );
  }
}

export default ActionButtons;
