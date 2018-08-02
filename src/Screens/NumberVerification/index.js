import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions, TextInput, TouchableOpacity,
  View, Text, ScrollView, SafeAreaView
} from 'react-native';
import {
  Content, Form, Label, Input, Item
} from 'native-base';
import styles from './styles';

const { height } = Dimensions.get('window');
export class index extends Component {
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
              fontSize: 23,
              fontWeight: '400',
              color: this.props.settings.bodyBg
            }}>Lets Get Started.</Text>
          </View>
          {/* ./intro */}

          {/* input */}
          <Content style={{ marginTop: 63 }}>
            <Form>
              <Item floatingLabel>
                <Label>Enter Mobile Number</Label>
                <Input />
              </Item>
            </Form>
          </Content>
          {/* ./input */}
        </View>
        {/* action */}
        <View style={{
          backgroundColor: this.props.settings.bodyBg,
          height: 60,
          justifyContent: 'center'
        }}>
          <Text onPress={() => this.props.navigation.navigate('Proceed')} style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 23,
            color: this.props.settings.textColor
          }}>PROCEED</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(index);
