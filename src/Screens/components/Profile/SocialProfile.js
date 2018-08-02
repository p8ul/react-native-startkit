import React, { Component } from 'react';
import {
  Text, View, Dimensions, StyleSheet,
  ScrollView, SafeAreaView, Image, ImageBackground
} from 'react-native';
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themes } from '../utils/constants';
import AvatarCard from './components/Cards/AvatarList';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = SCREEN_HEIGHT / 2;
const HEADER_MIN_HEIGHT = 50;
const FORM_MAX_HEIGHT = SCREEN_HEIGHT / 1.5;
const FROM_MIN_HEIGHT = 50;
const PROFILE_MAX_HEIGHT = 80;

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#330044' }}>
        {/* header */}
        <View
          style={{
            height: HEADER_MAX_HEIGHT,
            backgroundColor: '#5700eb',
            // position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          <ImageBackground
            style={{
              height: null,
              width: null,
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
            source={require('../../assets/earth.jpg')}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 12,
                marginTop: HEADER_MAX_HEIGHT / 3
              }}
            >
              {/* left icon */}
              <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <View style={{
                  height: PROFILE_MAX_HEIGHT / 2,
                  width: PROFILE_MAX_HEIGHT / 2,
                  borderRadius: PROFILE_MAX_HEIGHT / 4,
                  borderWidth: 3,
                  overflow: 'hidden',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: 'purple',
                  borderColor: 'purple'
                }}>
                  <Ionicons name={'ios-mail-open'} color={'white'} size={19} />
                </View>
              </View>
              {/* avatar */}
              <View style={{
                height: PROFILE_MAX_HEIGHT,
                width: PROFILE_MAX_HEIGHT,
                borderRadius: PROFILE_MAX_HEIGHT / 2,
                borderWidth: 3,
                overflow: 'hidden'
              }}>
                <Image
                  source={require('../../assets/p.jpg')}
                  style={{
                    flex: 1, height: null, width: null
                  }}/>
              </View>
              {/* right icon */}
              <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <View style={{
                  height: PROFILE_MAX_HEIGHT / 2,
                  width: PROFILE_MAX_HEIGHT / 2,
                  borderRadius: PROFILE_MAX_HEIGHT / 4,
                  borderWidth: 3,
                  overflow: 'hidden',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: 'purple',
                  borderColor: 'purple'
                }}>
                  <Ionicons name={'ios-add'} color={'white'} size={19} />
                </View>
              </View>

            </View>
            {/* Title  */}
            <View style={{
              flex: 1,
              marginTop: 24
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 23,
                color: 'white'
              }}>Paul Kinuthia</Text>
            </View>
            {/* subtitle */}
            <View style={{
              flex: 1
            }}>
              <Text style={{
                fontSize: 13,
                color: 'white'
              }}>6443 Harminton Gith, Apt 241</Text>
            </View>

          </ImageBackground>
        </View>
        {/* container */}
        <ScrollView style={{
          marginHorizontal: 25,
          flex: 1
        }}>
          <View style={{
            flex: 1
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
              padding: 12
            }}>
              2k Following
            </Text>
          </View>
          {/* card */}
          <AvatarCard />
          <AvatarCard />
          <AvatarCard />
          {/* end card */}
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: PROFILE_MAX_HEIGHT / 2,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    height: 180
  },
  box1: {
    flex: 1,
    position: 'absolute',
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  box2: {
    position: 'absolute',
    top: 80,
    left: 80,
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    zIndex: 999
  },
  box3: {
    position: 'absolute',
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 80
  }
});

export default Profile;
