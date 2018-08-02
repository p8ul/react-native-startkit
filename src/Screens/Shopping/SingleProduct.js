import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  View, Text,
  SafeAreaView, ScrollView,
  StyleSheet, Dimensions
} from 'react-native';
import {
  Header, Right, Left, Body, Icon, Title
} from 'native-base';
import Swiper from 'react-native-swiper';

/**
 * Components *
 */
import H1 from './components/H1';
import SingleSwipe from './components/SingleSwipe';

const styles = StyleSheet.create({
  icons: {
    color: 'white'
  }
});

const { height } = Dimensions.get('window');

export class SingleProduct extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: this.props.settings.headerBg
      }}>
        <Header style={[
          { backgroundColor: this.props.settings.headerBg },
        ]} androidStatusBarColor={this.props.settings.headerBg}>
          <Left>
            <Icon style={styles.icons} name="list" />
          </Left>
          <Body>
            <Title>Single Product</Title>
          </Body>
          <Right>
            <Icon style={styles.icons} name="basket" />
          </Right>
        </Header>
        <ScrollView >
          <View style={{ marginHorizontal: 15 }}>

            {/* image */}
            <Swiper height={height / 2} horizontal={false} style={styles.wrapper} autoplay={true} >
              <View style={{ flex: 1 }}>
                <SingleSwipe imageUri={require('../../../assets/1.png')} settings={this.props.settings} />
              </View>
              <View style={{ flex: 1 }}>
                <SingleSwipe imageUri={require('../../../assets/3.png')} settings={this.props.settings} />
              </View>
              <View style={{ flex: 1 }}>
                <SingleSwipe imageUri={require('../../../assets/5.png')} settings={this.props.settings} />
              </View>
            </Swiper>
            {/* ./image */}
            {/* title */}
            <H1 title="ARCTIS PRO WIRELESS"/>
            {/* ./tile */}
            <View>
              <Text style={{
                color: this.props.settings.primaryLight,
                fontWeight: 'bold',
                fontSize: 16
              }}>KES 3,288</Text>
            </View>
            {/* rating */}
            <View style={{ flexDirection: 'row' }}>
              <Icon style={{ marginRight: 4, color: this.props.settings.primaryLight }} name="star" />
              <Icon style={{ marginRight: 4, color: this.props.settings.primaryLight }} name="star" />
              <Icon style={{ marginRight: 4, color: this.props.settings.primaryLight }} name="star" />
              <Icon style={{ marginRight: 4, color: this.props.settings.primaryLight }} name="star" />
              <Icon style={{ marginRight: 4, color: this.props.settings.grey }} name="star" />
            </View>
            {/* ./rating */}
            {/* description */}
            <View>
              <Text style={{
                color: 'white',
                fontSize: 14,
                marginTop: 6,
                textAlign: 'justify'
              }}>
              Modal dialog is a small window that communicates information
              to the user and prompt them for a response. Dialog
              boxes are classified as "modal" or "modeless",
              depending on whether or not they block interaction
              with the page that initiated the dialog. Table below
              contains basic modal dialog examples. Click Launch
              button to run modal examples.
              </Text>
            </View>
            {/* ./description */}
            {/* actions */}
            <View style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: 10,
              marginBottom: 34
            }}>
              <View style={{ flex: 1, marginRight: 3 }}>
                <View style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: this.props.settings.primaryLight
                }}>
                  <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    padding: 10
                  }}>Details</Text>
                </View>
              </View>
              <View style={{
                flex: 1,
                marginLeft: 3,
                borderRadius: 20
              }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                  colors={[
                    this.props.settings.purpleLight,
                    this.props.settings.purple,
                    this.props.settings.purpleDark
                  ]} style={{ borderRadius: 50, flexDirection: 'row' }}>
                  <Icon name="basket" style={{
                    color: 'white',
                    padding: 6,
                    marginLeft: 6
                  }} />
                  <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>Add to cart</Text>
                </LinearGradient>
              </View>

            </View>


            {/* ./actions */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
