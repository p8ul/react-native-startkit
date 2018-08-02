import React, { Component } from 'react';
import {
  Text, View, Dimensions, StyleSheet,
  ScrollView, SafeAreaView, Image, ImageBackground
} from 'react-native';
import {
  Icon, Header,
  Right, Left,
  Body, Title,
  Container
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themes } from '../utils/constants';
import ProductItem from './components/Cards/ProductItem';

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
      <SafeAreaView style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#281543' }}
          androidStatusBarColor="#281543"
          iosBarStyle="light-content">
          <Left>
            <Icon style={{ color: 'white' }} name="arrow-back" />
          </Left>
          <Body >
            <Title style={{
              textAlign: 'center'
            }}>Grid Products</Title>
          </Body>
          <Right>
            <Icon style={{ color: 'white' }} name="cart" />
          </Right>
        </Header>
        <ScrollView style={{
          flex: 1,
          backgroundColor: '#412266'
        }}>
          {/* filter */}
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#281543',
            marginVertical: 6
          }}>
            <View style={{ flex: 2, padding: 12 }}>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>128 Products</Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center'
            }}>
              <Right style={{
                justifyContent: 'center',
                alignSelf: 'flex-end',
                paddingEnd: 12
              }}>
                <Icon style={{ color: 'white' }} name="grid" />
              </Right>
            </View>
            <View style={{
              flex: 1,
              backgroundColor: '#646bb3',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 19
              }}>Filter</Text>
            </View>
          </View>
          {/* end filter */}
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#281543',
            marginBottom: 6
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#8877bb',
              borderRadius: 10,
              height: 120,
              margin: 10
            }}>
              <View style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                {/* body */}
                <View style={{ flex: 2, padding: 10 }}>
                  <Text style={{
                    flex: 1,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 19
                  }}>
                   Sale offer 50%
                  </Text>
                  <Text style={{
                    flex: 1,
                    color: 'white',
                    fontWeight: 'normal'
                  }}>
                   Addiction When Gambling, Becomes A Problem
                  </Text>
                </View>
                {/* image */}
                <View style={{ flex: 1, padding: 10 }}>
                  <Image style={{
                    flex: 1, width: null, height: null
                  }} source={require('../../assets/choo.png')}/>
                </View>
              </View>
            </View>
          </View>
          {/* cards */}
          <View style={{
            flexDirection: 'row',
            marginBottom: 6
          }}>
            <ProductItem/>
            <ProductItem/>
          </View>
          <View style={{
            flexDirection: 'row',
            marginBottom: 6
          }}>
            <ProductItem/>
            <ProductItem/>
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
