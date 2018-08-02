import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet, TouchableOpacity, TextInput,
  Dimensions, Button, ImageBackground
} from 'react-native';
import { Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

/**
 * Icons
 */
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Components
 */
import Login from './components/Login';
/**
 * Utilites
 */
import { themes } from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = SCREEN_HEIGHT / 3;
const HEADER_MIN_HEIGHT = 50;
const FORM_MAX_HEIGHT = SCREEN_HEIGHT / 1.5;
const FROM_MIN_HEIGHT = 50;

export class LoginScreen extends Component {
  _loginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <SafeAreaView style={styles.wrapper} >
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_MAX_HEIGHT,
          backgroundColor: themes.dark.darkBlue,
          // borderTopEndRadius: 20,
          // borderTopStartRadius: 20
        }}>
          <ImageBackground
            source={require('../../assets/bg.jpg')}
            style={{ flex: 1 }}
          >

          </ImageBackground>
        </View>

        <View style={{
          padding: 15, flexDirection: 'row',
        }}>
          <Icon
            active style={{ color: 'white' }} name="arrow-back" />
        </View>

        <ScrollView>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            height: FORM_MAX_HEIGHT,
            zIndex: 686,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: themes.dark.darkBlue,
            shadowOpacity: 0.5,
            elevation: 5,
            margin: 20,
            marginTop: HEADER_MAX_HEIGHT - (FORM_MAX_HEIGHT / 3)
          }}>
            <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate">

              <View style={{ flex: 1 }}>
                <View style={{
                  flex: 1
                }}>
                  <Login login={ () => this.props.navigation.navigate('App')}/>
                </View>

              </View>
            </Animatable.View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 50,
  }
});
