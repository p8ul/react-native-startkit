import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {
  View, Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image, Dimensions
} from 'react-native';
import {
  Right, Left, Icon, Header
} from 'native-base';

/**
 * Components
 */
import GridCategoryBox from './components/GridCategoryBox';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  headerBottom: {
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: 'row',
    padding: 12
  },
  text: {
    color: 'white',
    padding: 2,
    fontSize: 24,
    fontWeight: 'bold'
  }

});

export class GridCategory extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: this.props.settings.bodyBg,
        flex: 1
      }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          colors={[
            this.props.settings.purpleDark,
            this.props.settings.purple,
            this.props.settings.purpleLight
          ]}
          style={styles.header}>
          <Header style={[
            styles.container,
          ]} androidStatusBarColor={this.props.settings.purple}>
            <Left style={{ flex: 1 }}>
              <Icon style={{ color: this.props.settings.white }} name="list"/>
            </Left>

            <Right>
              <Icon style={{ color: this.props.settings.white }} name="search"/>
            </Right>
          </Header>
        </LinearGradient>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          colors={[
            this.props.settings.purpleDark,
            this.props.settings.purple,
            this.props.settings.purpleLight,
          ]}
          style={[styles.headerBottom, { backgroundColor: this.props.settings.bodyBg, }]}>
          {/* search */}
          <View><Text style={[styles.text]}>Grid Categories</Text></View>

        </LinearGradient>
        <ScrollView>
          <View style={{
            marginHorizontal: 10,
            marginTop: 6,
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            <Swiper height={height / 1.4} horizontal={true} style={styles.wrapper} autoplay={true} >
              <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sales offer 50%'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/1.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Game Fx'}
                  subTitle={'18 items'}
                  imageUri={require('../../../assets/4.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Visual Reality '}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/5.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sony VR v90'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/9.png')}/>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sales offer 50%'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/1.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sales offer 50%'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/3.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sales offer 50%'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/5.png')}/>
                <GridCategoryBox
                  settings={this.props.settings}
                  title={'Sales offer 50%'}
                  subTitle={'108 items'}
                  imageUri={require('../../../assets/8.png')}/>
              </View>
            </Swiper>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridCategory);
