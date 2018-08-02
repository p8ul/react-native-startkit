import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions,
  View, Text, SafeAreaView
} from 'react-native';
import {
  Icon
} from 'native-base';
import styles from './styles';

/** components */
import CodeInput from './components/CodeInput';

const { height } = Dimensions.get('window');

export class Proceed extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={styles.flexOne}>
        <View style={{ marginHorizontal: 10, flex: 1 }}>

          {/* intro */}
          <View style={{
            alignItems: 'center',
            marginTop: height / 9
          }}>
            <Text style={{
              fontSize: 53,
              fontWeight: 'bold',
              color: this.props.settings.bodyBg
            }}>Hi.</Text>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
              color: this.props.settings.bodyBg,
              marginHorizontal: 33
            }}>Waiting to automatically detect an sms sent to your phone.</Text>
          </View>
          {/* ./intro */}

          {/* input */}
          <View style={[styles.textWrapper]}>

            <View style={styles.flexOne}></View>

            <View style={styles.flexTwo}>
              <Text style={styles.textFade}>+254-718 062 033 </Text>
            </View>

            <View style={styles.flexOne}>
              <Icon name="ios-document" />
            </View>

          </View>

          <View style={styles.textWrapper}>
            <Text style={{
              textAlign: 'center',
              fontWeight: '400',
              color: this.props.settings.bodyBg
            }}>Enter 4 digit code</Text>
          </View>
          {/* ./input */}

          {/* fields */}
          <View style={{
            flexDirection: 'row',
            height: 70
          }}>
            <CodeInput settings={this.props.settings}/>
            <CodeInput settings={this.props.settings}/>
            <CodeInput settings={this.props.settings}/>
            <CodeInput settings={this.props.settings}/>
          </View>

          <View style={[styles.textWrapper, { marginTop: 22, flexDirection: 'row' }]}>
            <Text style={{
              textAlign: 'center',
              fontWeight: '400'
            }}>Didn't recieve the code? </Text>
            <Text style={{
              textAlign: 'center',
              fontWeight: '700',
              color: this.props.settings.bodyBg
            }}>RESEND CODE</Text>
          </View>

        </View>
        {/* action */}
        <View style={{
          backgroundColor: this.props.settings.bodyBg,
          height: 60,
          justifyContent: 'center'
        }}>
          <Icon style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 63,
            color: this.props.settings.textColor
          }} name="ios-checkmark-outline" />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Proceed);
