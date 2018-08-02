import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import {
  View, Text, SafeAreaView,
  ScrollView, Dimensions,
  StyleSheet
} from 'react-native';
import {
  Header, Right, Icon, Body
} from 'native-base';

/**
 * Components
 */
import Search from './components/SearchLight';
import SingleSwipe from './components/SingleSwipe';
import H1 from './components/H2';
import BestSellerBox from './components/BestSellerBox';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 12
  }
});

export class BestSeller extends Component {
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
        backgroundColor: this.props.settings.primaryBg
      }}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: this.props.settings.primaryBg
        }}>
          <View style={{
            flex: 20
          }}>
            <Search settings={this.props.settings} />
          </View>

          <Right style={{ flex: 1, marginLeft: 2, marginRight: 12 }}>
            <Icon style={{ color: 'white' }} name="apps" />
          </Right>
        </View>
        <ScrollView style={{
          flex: 1,
          marginHorizontal: 1,
          backgroundColor: this.props.settings.primaryBg
        }}>
          {/* image */}
          <Swiper height={height / 2.3} horizontal={true} style={styles.wrapper} autoplay={false} >
            <View style={{ flex: 1 }}>
              <SingleSwipe imageUri={require('../../../assets/apple-homepod-speakers-woofer-tweeter.png')} settings={this.props.settings} />
            </View>
            <View style={{ flex: 1 }}>
              <SingleSwipe imageUri={require('../../../assets/kisspng-mavic-dji-4k-resolution-quadcopter-unmanned-aerial-drone-png-clipart-5a753579cfbc51.0541478515176308418509.jpg')} settings={this.props.settings} />
            </View>
          </Swiper>
          {/* ./image */}
          <View style={{
            borderLeftColor: this.props.settings.primary,
            borderLeftWidth: 5,
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            padding: 3,
            marginLeft: 10
          }}>
            <H1 title={'Best Seller'}/>
          </View>
          <View style={{ height: width, marginLeft: 6, marginBottom: 34 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <BestSellerBox settings={this.props.settings} subTitle={'KES 123'} title={'Sony VR Glass'} imageUri={require('../../../assets/4.png')}/>
              <BestSellerBox settings={this.props.settings} subTitle={'KES 123'} title={'Sony VR Glass'} imageUri={require('../../../assets/1.png')}/>
              <BestSellerBox settings={this.props.settings} subTitle={'KES 399'} title={'Sony VR Glass'} imageUri={require('../../../assets/3.png')}/>
              <BestSellerBox settings={this.props.settings} subTitle={'KES 399'} title={'Sony VR Glass'} imageUri={require('../../../assets/8.png')}/>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
