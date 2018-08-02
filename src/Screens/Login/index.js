import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text, Dimensions, Image,
  SafeAreaView, ScrollView, StyleSheet
} from 'react-native';
import { Header, Right } from 'native-base';

/** Components */
import InputText from './components/inputText1';
import BlockButton from './components/BlockButton';
import OrBlock from './components/OrBlock';
import SocialButtons from './components/SocialButton';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  wrapper: {
    marginHorizontal: 10
  },
  image: {
    height: null,
    width: null,
    flex: 1
  },
  iconsWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 12
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontSize: 20
  },
  flexOne: {
    flex: 1,
    padding: 12
  }
});

export class index extends Component {
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
        <Header style={[
          styles.container,
        ]} androidStatusBarColor={this.props.settings.bodyBg}>

          <Right>
            <Text>Skip</Text>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={{
              height: height / 5,
              width: width / 3,
              backgroundColor: this.props.settings.textColor,
              alignSelf: 'center',
              shadowOffset: { width: 5, height: 3 },
              shadowColor: 'white',
              shadowOpacity: 0.5,
              elevation: 5,
              padding: 22,
              borderRadius: 6,
              marginTop: height / 19
            }}>
              <Image
                source={require('../../../assets/logoc.png')}
                style={styles.image} />
            </View>
            <View style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: '700',
                letterSpacing: 1,
                color: this.props.settings.textColor
              }}>Hydrate</Text>
            </View>
            <View style={{
              margin: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: this.props.settings.primary
              }}>Every sip counts</Text>
            </View>

            {/* inputs */}
            <InputText settings={this.props.settings} />
            {/* ./inputs */}

            <View style={{
              marginTop: 12,
            }}>
              <Text style={{
                fontWeight: 'bold',
                color: this.props.settings.textColor
              }}>Forgot Password ?</Text>
            </View>

            {/* login button */}
            <View style={{
              flex: 1,
              marginTop: 12
            }}>
              <BlockButton
                settings={this.props.settings}
                title={'Login'}
              />
            </View>
            {/* or */}
            <View style={{
              flex: 1,
              marginTop: 12
            }}>
              <OrBlock
                settings={this.props.settings}
                title={'Login'}
              />
            </View>

            {/* social login buttons */}
            <View style={styles.iconsWrapper}>
              <View style={styles.flexOne}></View>
              <View style={styles.flexOne}>
                <SocialButtons
                  settings={this.props.settings}
                  iconName={'ios-bonfire'}
                />
              </View>
              <View style={styles.flexOne}>
                <SocialButtons
                  settings={this.props.settings}
                  iconName={'ios-finger-print-outline'}
                />
              </View>
              <View style={styles.flexOne}></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(index);
