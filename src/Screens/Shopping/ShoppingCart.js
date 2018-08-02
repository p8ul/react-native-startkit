import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  View, Text,
  SafeAreaView, Image,
  ScrollView, StyleSheet,
  TextInput, TouchableOpacity,
} from 'react-native';
import {
  Header, Right, Left, Body, Icon, Title, Button
} from 'native-base';

/**
 * Utils
 */
import { colors } from '../../utils/constants';
/**
 * components
 */
import PromoteCode from './components/PromoteCode';
import SaleOffer from './components/CartItem';
import Summary from './components/CartSummary';
import ActionButtons from './components/ActionButtons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  headerBottom: {
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12
  },
  text: {
    color: 'white',
    padding: 2,
    fontSize: 24
  }

});

export class ListCategory extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: this.props.settings.bodyBgLight,
        flex: 1
      }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          colors={[
            this.props.settings.purpleLight,
            this.props.settings.purple,
            this.props.settings.purpleDark
          ]}
          style={styles.timeLapse}>
          <Header style={[
            styles.container,
          ]} androidStatusBarColor={this.props.settings.purple}>
            <Left style={{ flex: 1 }}>
              <Icon style={{ color: colors.white }} name="arrow-back"/>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center' }}>
              <Title style={{ color: colors.white, fontSize: 17 }}>Shopping Cart</Title>
            </Body>
            <Right></Right>
          </Header>
        </LinearGradient>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          colors={[
            this.props.settings.purpleLight,
            this.props.settings.purple,
            this.props.settings.purpleDark
          ]}
          style={styles.headerBottom}>
          {/* search */}
          <View><Text style={[styles.text, ]}>Have</Text></View>
          <View><Text style={[
            styles.text, { fontWeight: 'bold', fontSize: 26 }
          ]}>04</Text></View>
          <View><Text style={[styles.text]}>Items on cart</Text></View>

        </LinearGradient>
        <ScrollView >
          <View style={{ marginHorizontal: 10 }}>
            {/* sale offer */}
            <SaleOffer
              settings={this.props.settings}
              goTo={() => this.props.navigation.navigate('SingleProduct')}
              bgColor={this.props.settings.purpleDark}
              title={'Sales offer 50%'}
              subTitle={'108 items'}
              imageUri={require('../../../assets/7.png')}/>
            <SaleOffer
              settings={this.props.settings}
              bgColor={this.props.settings.cardBgLight}
              title={'Sales offer 50%'}
              subTitle={'108 items'}
              imageUri={require('../../../assets/9.png')}/>
            <SaleOffer
              settings={this.props.settings}
              bgColor={this.props.settings.cardBgLight}
              title={'Sales offer 50%'}
              subTitle={'108 items'}
              imageUri={require('../../../assets/1.png')}/>

            <View style={{
              marginTop: 12,
              borderRadius: 6,
              flex: 1,
              shadowOffset: { width: 5, height: 3 },
              shadowColor: 'white',
              shadowOpacity: 0.5,
              elevation: 2,
              backgroundColor: this.props.settings.greyBlue
            }}>
              <Summary
                settings={this.props.settings}
                title={'Shipping'}
                subTitle={'KES 123'}
              />
              <Summary
                settings={this.props.settings}
                title={'Sub Total'}
                subTitle={'KES 523'}
              />
              <PromoteCode
                settings={this.props.settings}
                title={'Promotion code'}
                subTitle={'KES 523'}
              />
            </View>
            {/* actions */}
            <View style={{ flex: 1, marginTop: 12 }}>
              <ActionButtons
                settings={this.props.settings}
                leftText={'KES 923'}
                rightText={'Checkout'}
                leftBorderColor={'transparent'}
              />
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);
