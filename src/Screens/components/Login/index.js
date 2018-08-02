import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from 'native-base';
import { View, Animated, AsyncStorage } from 'react-native';
import styles from './styles';

/**
 * Utilities
 */
import { themes } from '../../../utils/constants';

class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.timing( // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 4000 // Make it take a while
      }
    ).start(); // Starts the animation
    // this._loginAsync();
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Animated.View style={{
              opacity: fadeAnim,
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: 'indigo',
                fontWeight: 'bold',
                fontSize: 23
              }}>Merry</Text>
              <Text style={{
                color: themes.dark.darkBlue,
                fontWeight: '300',
                fontSize: 17
              }}>Happiness behind Security</Text>
              <Text style={{
                color: 'indigo',
                fontSize: 12
              }}>Welcome, Please login to your account</Text>
            </Animated.View>
            <Item floatingLabel>
              <Icon active name="person" />
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon active name="lock" />
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <View style={{ flex: 1, alignItems: 'flex-end', padding: 12 }}>
            <Text style={{
              fontSize: 14
            }}>Forgot password?</Text>
          </View>
          <Button onPress={() => this.props.login()} block style={{ margin: 15, marginTop: 5 }}>
            <Text>Sign In</Text>
          </Button>
          <View style={{
            flex: 1,
            alignItems:
            'center',
            padding: 12,
            marginHorizontal: 15
          }}>
            <Text style={{
              fontSize: 14
            }}>Don't Have an account? Create one here</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;
