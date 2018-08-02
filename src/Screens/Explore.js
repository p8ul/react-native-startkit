import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView, Image, Dimensions,
  TextInput, SafeAreaView, Platform, StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * COMPONENTS
 */
import Category from './components/Explore/Category';
/**
 * Constants
 */
import { colors, themes } from '../utils/constants';

const { height, width } = Dimensions.get('window');

export class Explore extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />
  }

  componentWictllMount() {
    this.startHeaderHeight = 50;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 50 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: colors.primaryBg }}>
          <View style={{
            height: this.startHeaderHeight,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#dddd'
          }}>
            <View style={{
              flexDirection: 'row',
              padding: 10,
              marginVertical: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS === 'android' ? 5 : null
            }}>
              <Ionicons name="ios-search" size={20}
                style={{ marginRight: 10, marginTop: 9 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: '700',
                  backgroundColor: 'white'
                }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, marginTop: 20, backgroundColor: 'white' }}>
              <Text style={{
                fontSize: 24,
                fontWeight: '700',
                marginHorizontal: 20
              }}>
               What can we help you find, P8ul
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                >
                  <Category imageUri={require('../../assets/scope_d.jpg')}
                    name="Home"
                  />
                  <Category imageUri={require('../../assets/d.png')}
                    name="Explore"
                  />
                  <Category imageUri={require('../../assets/u.png')}
                    name="Places"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing Airbnb Plus</Text>
                <Text style={{ fontWeight: '100', marginTop: 10, }}>
                  A new selection of homes verified for quality & comfort
                </Text>
              </View>
            </View>

            <View style={{
              width: width - 10,
              height: 200,
              paddingHorizontal: 20,
              marginTop: 20
            }}>
              <Image
                style={{
                  flex: 1, resizeMode: 'cover', width: null, height: null
                }}
                source={require('../../assets/u.png')} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;
