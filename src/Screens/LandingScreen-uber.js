import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  SafeAreaView,
  StyleSheet, TouchableOpacity, TextInput,
  Dimensions, Button
} from 'react-native';

/**
 * Icons
 */
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Animations
 */
/**
 * Utilites
 */
import { themes } from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export class LandingScreen extends Component {
  signIn = () => {
    AsyncStorage.setItem('userToken', 'tokenhere');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper} >
        <View style={{ flex: 1 }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 10,
              height: 100,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text onPress={ () => this.signIn() } style={{
                color: themes.dark.darkBlue,
                fontSize: 26,
                fontWeight: 'bold'
              }}>Merry</Text>
            </View>
          </View>
          {/* footer    */}
          <View >
            {/* upper block */}
            <View style={{ height: 150, backgroundColor: 'white' }}>
              <View
                style={{
                  opacity: 1,
                  alignItems: 'flex-start',
                  paddingHorizontal: 25,
                  marginTop: 25
                }}
              >
                <Text style={{ fontSize: 24 }}>
                Get moving with Merry
                </Text>
              </View>
              <TouchableOpacity>
                <View style={{
                  marginTop: 25,
                  paddingHorizontal: 25,
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderRadius: 30
                }}>
                  <View style={{ marginTop: 10 }}>
                    <Text>
                      <Ionicons name="ios-mail" color='black' size={30} />
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput
                      style={{ flex: 1, fontSize: 18 }}
                      placeholder="Enter your email"
                      underlineColorAndroid="transparent"
                    />
                  </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                  <Button style={{ flex: 1 }} title="Login" onPress={() => {}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ flex: 1, marginHorizontal: 23, backgroundColor: 'blue' }}>
                  <Text> Login </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* lower block */}
            <View style={{
              height: 70,
              backgroundColor: 'white',
              paddingHorizontal: 25,
              alignItems: 'flex-start',
              borderTopColor: themes.dark.darkGray,
              borderWidth: 1,
              justifyContent: 'center'
            }}>
              <Text>or use your social account to login</Text>
            </View>
          </View>
        </View>
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
    width: 50,
  }
});
