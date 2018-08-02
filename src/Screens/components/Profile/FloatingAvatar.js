import React, { Component } from 'react';
import {
  Text, View, Dimensions, StyleSheet,
  ScrollView, SafeAreaView, Image
} from 'react-native';
import { Icon } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = SCREEN_HEIGHT / 3;
const HEADER_MIN_HEIGHT = 50;
const FORM_MAX_HEIGHT = SCREEN_HEIGHT / 1.5;
const FROM_MIN_HEIGHT = 50;
const PROFILE_MAX_HEIGHT = 80;

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#d0d0d0' }}>
        {/* header */}
        <View
          style={{
            height: HEADER_MAX_HEIGHT,
            backgroundColor: '#5700eb',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        ></View>
        {/* container */}
        <ScrollView style={{
          flex: 1
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            height: FORM_MAX_HEIGHT,
            zIndex: 686,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
            margin: 20,
            overflow: 'visible',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 12,
            // position: 'absolute/'
            marginTop: HEADER_MAX_HEIGHT - (FORM_MAX_HEIGHT / 3)
          }}>
            <View style={{
              height: PROFILE_MAX_HEIGHT,
              width: PROFILE_MAX_HEIGHT,
              position: 'relative',
              borderRadius: PROFILE_MAX_HEIGHT / 2,
              borderWidth: 3,
              overflow: 'hidden',
              justifyContent: 'center',
              alignContent: 'center',
              borderColor: 'white',
              zIndex: 999,
              position: 'absolute',
              shadowOffset: { width: 5, height: 3 },
              shadowColor: 'black',
              shadowOpacity: 0.5,
              elevation: 5
            }}>
              <Image
                style={{ width: null, height: null, flex: 1 }}
                source={require('../../assets/p.jpg')} />
            </View>
            <View style={styles.container}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: PROFILE_MAX_HEIGHT / 2 - 10
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20
                }}>Paul Dinah</Text>
                <Text style={{
                  fontWeight: 'normal',
                  color: 'grey',
                  fontSize: 12
                }}>Full-stack Developer</Text>
                <View style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                  marginTop: 23
                }}>
                  <Icon
                    active
                    name="logo-googleplus"
                    style={{ color: '#DD5044', paddingRight: 12 }}
                  />

                  <Icon
                    active
                    name="logo-facebook"
                    style={{ color: '#3B579D', paddingRight: 12 }}
                  />

                  <Icon active name="logo-twitter" style={{ color: '#55ACEE', paddingRight: 12 }} />

                  <Icon
                    active
                    name="logo-linkedin"
                    style={{ color: '#007BB6', paddingRight: 12 }}
                  />
                </View>
                <View style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  padding: 12
                }}>
                  <Text style={{
                    color: 'grey',
                    textAlign: 'center',
                    fontSize: 13
                  }}>
                 My name is Paul. I live in Nairobi, Kenya. My Dream is to be an entreprenuer.
                  </Text>
                </View>
              </View>
              <Text> ACCOUNT SETTINGS</Text>
              <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text> ACCOUNT SETTINGS</Text>
              </View>
              {/* <View style={styles.box1}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.text}>3</Text>
            </View> */}
            </View>
          </View>
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
