import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import {
  Body, Title, Header, Icon, Right, Left
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  header: {}
});

export class HeaderGradient extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[
          this.props.settings.purpleLight,
          this.props.settings.purple,
          this.props.settings.purpleDark
        ]}
        style={styles.header}>
        <Header style={[
          styles.container,
        ]} androidStatusBarColor={this.props.settings.purple}>
          <Left style={{ flex: 1 }}>
            <Icon style={{ color: this.props.settings.white }} name="arrow-back"/>
          </Left>
          <Body style={{ flex: 1, justifyContent: 'center' }}>
            <Title style={{ color: this.props.settings.white, fontSize: 17 }}>
            Shopping Cart
            </Title>
          </Body>
          <Right></Right>
        </Header>
      </LinearGradient>
    );
  }
}

export default HeaderGradient;
