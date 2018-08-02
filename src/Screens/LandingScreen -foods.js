import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet, TouchableOpacity, TextInput,
  Dimensions, Button
} from 'react-native';

/**
 * Icons
 */
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Compoments
 */
import Login from './components/Login';
/**
 * Utilites
 */
import { themes } from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = SCREEN_HEIGHT / 2;
const HEADER_MIN_HEIGHT = 50;
const FORM_MAX_HEIGHT = 300;
const FROM_MIN_HEIGHT = 50;

export class LandingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper} >
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: HEADER_MAX_HEIGHT,
          backgroundColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20
        }}>

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
            marginTop: HEADER_MAX_HEIGHT - (FORM_MAX_HEIGHT / 2)
          }}>

            <View style={{ flex: 1 }}>
              <Login />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LandingScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: themes.dark.darkBlue
  },
  logo: {
    width: 50
  }
});
