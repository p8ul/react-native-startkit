import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  View, Text,
  SafeAreaView,
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
import Search from './components/Search';
import SaleOffer from './components/Salesoffer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  headerBottom: {
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
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
        backgroundColor: this.props.settings.bodyBg,
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
              <Icon style={{ color: colors.white }} name="list"/>
            </Left>
            <Body style={{ flex: 1 }}>
              <Title style={{ color: colors.white }}>List Categories</Title>
            </Body>
            <Right>
              <Icon style={{ color: colors.white }} name="basket"/>
            </Right>
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
          <Search />
        </LinearGradient>
        <ScrollView style={{ marginHorizontal: 15 }}>

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
            imageUri={require('../../../assets/3.png')}/>
          <SaleOffer
            settings={this.props.settings}
            bgColor={this.props.settings.cardBgLight}
            title={'Sales offer 50%'}
            subTitle={'108 items'}
            imageUri={require('../../../assets/1.png')}/>
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
