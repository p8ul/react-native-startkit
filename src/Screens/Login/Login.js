import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, StyleSheet,
  Text, Dimensions, ScrollView, SafeAreaView
} from 'react-native';
import { Icon } from 'native-base';
/** containers */
import InputText from './components/InputText2';
import BlockButton from './components/LoginButton';
import SocialButton from './components/SocialButton';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    height: height / 1.5,
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginTop: height / 6,
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row'
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  circleWrapper: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    left: 120,
    zIndex: 999,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginTop: 12,
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  SocialIcon: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',

  },
  socialWrapper: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: 'white',
    marginTop: 16
  }
});

export class Login extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = { text: '', password: '' };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={{
              padding: 17,
              alignContent: 'center'
            }}>
              <Text style={[styles.title, {
                color: this.props.settings.bodyBg
              }]}>LOGIN</Text>

            </View>
            {/* input */}
            <InputText settings={this.props.settings}/>
            {/* ./input */}
            <View>
              <Text style={{
                textAlign: 'center'
              }}>Don't have an account ? </Text>
              <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                color: this.props.settings.bodyBg
              }}>REGISTER </Text>
            </View>
            {/* btn */}
            <View style={{
              marginTop: 12,
              marginHorizontal: 20
            }}>
              <BlockButton
                settings={this.props.settings}
                title={'Login'}
              />
            </View>
            {/* ./btn */}
            <View style={{
              height: 40,
              marginTop: 12
            }}>
              <View style={styles.circleWrapper}>
                <Text style={{
                  textAlign: 'center',
                  marginTop: 3,
                  fontWeight: 'bold',
                  color: this.props.settings.bodyBg
                }}>OR</Text>
              </View>
              <View style={{
                height: 20,
                backgroundColor: this.props.settings.bodyBg,
                top: 20,
                zIndex: 0
              }}></View>
            </View>

            <View style={{
              backgroundColor: this.props.settings.bodyBg,
            }}>
              <Text style={styles.text}>Register with social media</Text>

            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: this.props.settings.bodyBg,
              justifyContent: 'space-around',
              paddingHorizontal: 55,
            }}>
              <View style={styles.socialWrapper} >
                <Icon style={[styles.SocialIcon, {
                  color: this.props.settings.bodyBg,
                }]} name="heart" />
              </View>
              <View style={styles.socialWrapper} >
                <Icon style={[styles.SocialIcon, {
                  color: this.props.settings.bodyBg,
                }]} name="ios-bonfire" />
              </View>
              <View style={styles.socialWrapper}>
                <Icon style={[styles.SocialIcon, {
                  color: this.props.settings.bodyBg,
                }]} name="ios-rose" />
              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
