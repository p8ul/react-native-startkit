import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  AsyncStorage
} from 'react-native';


/**
 * Utilities
 */
import { themes } from '../utils/constants';

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

export class Trips extends Component {
  logOut = () => {
    alert('hello');
    AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View onPress={ () => this.logOut()} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: themes.dark.darkBlue,
          height: HEADER_MAX_HEIGHT

        }}>

        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={{
            height: PROFILE_IMAGE_MAX_HEIGHT,
            width: PROFILE_IMAGE_MAX_HEIGHT,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderWidth: 3,
            overflow: 'hidden',
            marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2)
          }}>
            <Image
              style={{ width: null, height: null, flex: 1 }}
              source={require('../../assets/p.jpg')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Trips;
