import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text, View, ScrollView,
  SafeAreaView, Image, StyleSheet
} from 'react-native';
import {
  Header, Right, Left, Body, Icon, Title
} from 'native-base';

/**
 * Components
 */
import HeaderTabs from './components/HeaderTabs';
import TimeInfoCard from './components/TimeInfoCard';
import ProductList from './components/ProductList';

import { colors, themes } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'white',
    shadowOpacity: 0.5,
    elevation: 5
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  timeLapse: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 120,
    // backgroundColor: colors.orange,
    borderRadius: 4,
    justifyContent: 'center',
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'white',
    shadowOpacity: 0.5,
    elevation: 5,
    marginTop: 12
  }
});

export class FlashSale extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  render() {
    return (
      <SafeAreaView>
        <Header style={[
          styles.container,
          { backgroundColor: this.props.settings.headerBg },
        ]} androidStatusBarColor={this.props.settings.headerBg}>
          <Left style={{ flex: 1 }}>
            <Icon style={{ color: colors.white }} name="list"/>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title style={{ color: colors.white }}>FLASH SALE</Title>
          </Body>
          <Right>
            <Icon style={{ color: colors.white }} name="share"/>
          </Right>
        </Header>
        <ScrollView style={{
          padding: 10,
          backgroundColor: this.props.settings.bodyBg
        }}>
          <View style={{ flex: 1, paddingBottom: 62 }}>
            <HeaderTabs />
            {/* time lapse */}
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['#f87879', '#f79b76', '#f8bc74']} style={styles.timeLapse}>

              {/* info card  */}
              <TimeInfoCard title={'3'} subTitle={'days'}/>
              {/* info card  */}
              <TimeInfoCard title={':'} subTitle={'  '}/>
              <TimeInfoCard title={'21'} subTitle={'hours'}/>
              <TimeInfoCard title={':'} subTitle={'  '}/>
              {/* info card  */}
              <TimeInfoCard title={'48'} subTitle={'mins'}/>
              <TimeInfoCard title={':'} subTitle={'  '}/>
              {/* info card  */}
              <TimeInfoCard title={'27'} subTitle={'secs'}/>
            </LinearGradient>
            {/* end time lapse */}
            {/* products */}
            <ProductList
              theme={this.props.settings}
              imageUri={require('../../../assets/1.png')}
              productName={'VR Glass 9.0'}
              price="$400" priceCancel="$500"/>
            <ProductList
              theme={this.props.settings}
              imageUri={require('../../../assets/4.png')}
              productName={'Nikon Camera lens'}
              price="$970" priceCancel="$1200"/>
            <ProductList
              theme={this.props.settings}
              imageUri={require('../../../assets/8.png')}
              productName={'Nikon Camera lens'}
              price="$970" priceCancel="$1200"/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  settings: state.settings,
  theme: state.settings.theme
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(FlashSale);
