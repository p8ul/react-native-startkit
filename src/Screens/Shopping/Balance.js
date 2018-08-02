import React, { Component } from 'react';
import {
  Text, View,
  ScrollView, Dimensions,
  SafeAreaView, Image
} from 'react-native';
import {
  Body, Right, Button, Input,
  Left, Container, Item,
  Header, Icon, Title
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * Utilities
 */
import { colors } from '../../utils/constants';
/**
 * Components
 */
import TopRate from './components/TopRate';
import SalesOff from './components/SalesOff';
import H2 from './components/H2';
import CategoryBox from './components/CategoryBox';

// let HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const images = [
  require('../../../assets/1.png'),
  require('../../../assets/4.png'),
  require('../../../assets/8.png'),
  require('../../../assets/3.png'),
  require('../../../assets/8.png'),
  require('../../../assets/1.png')
];

export class Balance extends Component {
  static navigationOptions = {
    header: null
  }

  renderImages = () => images.map((image, index) => (
    <View key={index} style={{
      backgroundColor: colors.primaryBg,
      width: WIDTH / 2 - 20,
      height: WIDTH / 2 - 20,
      paddingLeft: 2,
      padding: 6,
      margin: 6,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'white',
      shadowOpacity: 0.5,
      elevation: 5
    }}>
      <Image style={{
        flex: 1, width: null, height: null
      }}
      source={image} />
    </View>
  ))

  render() {
    return (
      <SafeAreaView>
        <Header style={{
          backgroundColor: colors.primaryBgDark,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'white',
          shadowOpacity: 0.5,
          elevation: 5
        }} androidStatusBarColor={colors.primaryBgDark}>
          <Left>
            <Icon style={{ color: colors.white }} name="list"/>
          </Left>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ color: colors.white }}>Balance</Title>
          </Body>
          <Right>
            <Icon style={{ color: colors.white }} name="cart"/>
          </Right>
        </Header>
        <ScrollView style={{
          backgroundColor: colors.primaryBgDark
        }}>
          <View style={{
            marginHorizontal: 20
          }}>
            <Item>
              <Icon active name="search" style={{
                color: colors.lightGrey
              }}/>
              <Input underlineColorAndroid='transparent' placeholder="Search" style={{
                color: colors.white
              }}/>
            </Item>
            <View style={{ flexDirection: 'row', height: 130, marginVertical: 6 }}>
              <SalesOff />
            </View>
            <H2 title="CATEGORY" />
            <View style={{ height: WIDTH / 5 + 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <CategoryBox icon='ios-headset-outline'/>
                <CategoryBox icon='ios-jet-outline'/>
                <CategoryBox icon='ios-car-outline'/>
                <CategoryBox icon='ios-desktop-outline'/>
                <CategoryBox icon='ios-finger-print-outline'/>
              </ScrollView>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <H2 title="TOP RATE" />
              </View>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  color: colors.lightGrey
                }}>See more</Text>
              </View>
            </View>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 12
          }}>
            {this.renderImages()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Balance;
