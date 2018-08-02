import React, { Component } from 'react';
import {
  Image,
  View, Text, SafeAreaView, ScrollView, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/** components */
import KeyBoard from './components/KeyBoard';
import DeleteKey from './components/DeleteKey';

const styles = StyleSheet.create({
  logo: {
    // flex: 1,
    flexDirection: 'row',
    height: 40,
    width: 30,
    margin: 30
  },
  dot: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginTop: 4
  },
  image: {
    height: null,
    width: null,
    flex: 1
  },
  wrapper: {
    marginHorizontal: 10
  },
  flexOne: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 0];
export class Branch extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      one: '_',
      two: '_',
      three: '_',
      four: '_'
    };
  }

  hiddePin = () => {
    if (this.state.one !== '_' && this.state.one !== '.') {
      this.setState({ one: '.' });
    }
    if (this.state.two !== '_' && this.state.two !== '.') {
      this.setState({ two: '.' });
    }
    if (this.state.three !== '_' && this.state.three !== '.') {
      this.setState({ three: '.' });
    }
    if (this.state.four !== '_' && this.state.four !== '.') {
      this.setState({ four: '.' });
    }
  }

  reset = () => {
    if (this.state.four === '.') {
      this.setState({ four: '_' });
      return;
    }
    if (this.state.three === '.') {
      this.setState({ three: '_' });
      return;
    }
    if (this.state.two === '.') {
      this.setState({ two: '_' });
      return;
    }
    if (this.state.one === '.') {
      this.setState({ one: '_' });
    }
  }

  setPin = (number) => {
    if (number === 10) {
      this.reset();
      return;
    }
    setTimeout(() => { this.hiddePin(); }, 500);
    if (this.state.one === '_') {
      this.setState({ one: number });
      return;
    }
    if (this.state.two === '_') {
      this.setState({ two: number });
      return;
    }
    if (this.state.three === '_') {
      this.setState({ three: number });
      return;
    }
    if (this.state.four === '_') {
      this.setState({ four: number });
    }
  }

  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: this.props.settings.bodyBg,
        flex: 1
      }}>
        <ScrollView>
          <View style={styles.wrapper}>
            {/* logo */}
            <View style={styles.logo}>
              <Image
                style={styles.image}
                source={require('../../../assets/logoc.png')}
              />
            </View>
            {/* message */}
            <View>
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',

              }}>Verify your security PIN to unlock your App</Text>
            </View>
            {/* ./ message */}
            {/* inputs */}
            <View style={styles.flexOne}>
              <View style={styles.flexOne}>
                <Text style={styles.dot}>{this.state.one}</Text>
                <Text style={styles.dot}>{this.state.two}</Text>
                <Text style={styles.dot}>{this.state.three}</Text>
                <Text style={styles.dot}>{this.state.four}</Text>
              </View>
            </View>
            {/* ./inputs */}
            <View style={[styles.flexOne, {
              marginTop: 50,
              marginHorizontal: 40,
              justifyContent: 'space-around'
            }]}>
              {buttons.map((key, index) => <KeyBoard key={index}
                settings={this.props.settings}
                setPin={ () => this.setPin(key)}
                number={key}
              />)}
              <DeleteKey
                settings={this.props.settings}
                setPin={ () => this.setPin(10)}
                number={'x'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Branch);
