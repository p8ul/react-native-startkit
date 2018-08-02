import React from 'react';
import {
  Dimensions,
  AsyncStorage,
  ScrollView,
  View, Text, Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Icon } from 'native-base';
import { themes } from '../utils/constants';
import styles from '../styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

    state = {
      fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    }

    componentDidMount() {
      Animated.timing( // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 3000, // Make it take a while
        }
      ).start(); // Starts the animation
    }

    // fetch the token from storate then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      // This will switch to the App screen or Auth screen and the loading
      // screen will be unmounted and thrown away.
      // setTimeout(() => {
      this.props.navigation.navigate(userToken ? 'App' : 'AuthLoading');
      // }, 90000)
    };

    // Render any loading content that you like here
    render() {
      const { fadeAnim } = this.state;
      return (
        <ScrollView style={{
          flex: 1,
          backgroundColor: themes.dark.darkBlue,
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>

            <View
              style={{
                width: SCREEN_WIDTH - 40,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }}
            >
              <Animatable.View animation="zoomInUp" iterationCount={1} direction="alternate">
                <View
                  style={{
                    padding: 10,
                    marginBottom: 20
                  }}
                >
                  <Text style={{
                    fontSize: 40,
                    fontWeight: '900',
                    color: 'white'
                  }}>M</Text>
                </View>
              </Animatable.View>

              <Animated.View style={{
                borderBottomColor: 'white',
                borderBottomWidth: fadeAnim,
                marginBottom: 20,
                borderRadius: 10
              }}>
                <Animatable.View animation="zoomInUp" iterationCount={1} direction="alternate">

                  <Text style={{
                    color: 'white',
                    textAlign: 'justify',
                    letterSpacing: 9,
                    fontSize: 20,
                    fontWeight: '500'
                  }}>MERRY</Text>
                </Animatable.View>
              </Animated.View>

              <Text style={{
                color: 'white',
                textAlign: 'center',
                letterSpacing: 3,
                fontSize: 13,
              }}>
                THE OPERATING SYSTEM FOR INVESTIMENT GROUP
              </Text>
              <Button
                onPress={() => this.props.navigation.navigate('Login')}
                bordered
                block
                style={{
                  margin: 20,
                  marginLeft: 10,
                  backgroundColor: 'white',
                  borderColor: 'blue'
                }}
              >
                <Text style={{
                  color: 'indigo',
                  fontSize: 14,
                  fontWeight: 'bold',
                  letterSpacing: 3,
                }}>Login</Text>
              </Button>
              <Animatable.View animation="zoomInUp" iterationCount={1} direction="alternate">

                <Text style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'white'
                }}>Don't Have Account ?</Text>
              </Animatable.View>
              <Button
                bordered
                block
                style={{ margin: 20, marginLeft: 10 }}
              >
                <Text style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 'bold',
                  letterSpacing: 3,
                }}>Create a new account</Text>
              </Button>

            </View>
          </View>
        </ScrollView>
      );
    }
}

export default AuthLoadingScreen;
