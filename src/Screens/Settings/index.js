import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Radio,
  Text,
  Left,
  Right,
  Body
} from 'native-base';
import { settingTheme } from '../../actions';


class Settings extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      light: false,
      dark: true
    };
  }

  toggleLight() {
    this.setState({
      light: true,
      dark: false
    });
    this.props.settingTheme({ theme: 'light' });
  }

  toggleDark() {
    this.setState({
      light: false,
      dark: true
    });
    this.props.settingTheme({ theme: 'dark' });
  }

  static propTypes = {
    settings: PropTypes.object.isRequired,
    settingTheme: PropTypes.func.isRequired,
    navigation: PropTypes.any
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Container style={{
          backgroundColor: this.props.settings.cardBackground
        }}>
          <Header style={[
            { backgroundColor: this.props.settings.headerBg },
          ]} androidStatusBarColor={this.props.settings.headerBg}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Settings</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <ListItem
              selected={this.state.light}
              onPress={() => this.toggleLight()}
            >
              <Left>
                <Text style={{
                  color: this.props.settings.textColor
                }}>LIght Theme</Text>
              </Left>
              <Right>
                <Radio
                  selected={this.state.light}
                  onPress={() => this.toggleLight()}
                />
              </Right>
            </ListItem>
            <ListItem
              selected={this.state.dark}
              onPress={() => this.toggleDark()}
            >
              <Left>
                <Text>Dark Theme</Text>
              </Left>
              <Right>
                <Radio
                  selected={this.state.dark}
                  onPress={() => this.toggleDark()}
                />
              </Right>
            </ListItem>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  theme: state.settings.theme
});

const mapDispatchToProps = {
  settingTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
