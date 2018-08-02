import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground, Dimensions
} from 'react-native';
import {
  Header, Icon, Left, Right, Body, Container, Button
} from 'native-base';

/**
 * Utilities
 */
import { themes, colors } from '../../utils/constants';

const { height, width } = Dimensions.get('window');
export class Shopping extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center'
      }}>

        <ScrollView style={{ flex: 1 }}>
          <ImageBackground
            style={{
              height, width, flex: 1
            }}
            resizeMode='stretch'
            source={require('../../../assets/bg4.png')}
          >
            <Header
              androidStatusBarColor={colors.black}
              iosBarStyle='light-content'
              style={{ backgroundColor: 'transparent' }}
            >
              <Left>
                <Icon style={
                  { color: colors.white }} name='apps'
                onPress={() => this.props.navigation.toggleDrawer()} />
              </Left>
              <Body></Body>
              <Right></Right>
            </Header>
            <View style={{
              flex: 1,
              backgroundColor: 'transparent'
            }}>
              <Body style={{
                alignSelf: 'flex-start',
                justifyContent: 'flex-end',
                marginHorizontal: 20,
                // marginBottom: 20,
                paddingBottom: 30
              }}>
                <Text style={{
                  fontSize: 38,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  color: themes.dark.textColor
                }}>ROBO</Text>
                <Text style={{
                  fontSize: 38,
                  fontWeight: 'bold',
                  color: themes.dark.textColor
                }}>COLLECTION</Text>
                <Text style={{
                  fontSize: 18,
                  alignSelf: 'flex-start',
                  color: themes.dark.greyOutline
                }}>KES 3,234.00</Text>
              </Body>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Shopping;
