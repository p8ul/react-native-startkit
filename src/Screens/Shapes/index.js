import React, { Component } from 'react';
import {
  Image,
  View, Text, SafeAreaView, ScrollView, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/** components */
import Square from './components/Squre';
import Cirlce from './components/Circle';
import Oval from './components/Oval';
import TriangleUP from './components/TriangleUp';
import TriangleDown from './components/TriangleDown';
import TriangleLeft from './components/TriangleLeft';
import TriangleRight from './components/TriangleRight';
import Heart from './components/Heart';
import TvScreen from './components/TvScreen';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10
  },
  flexOne: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
export class Branch extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: this.props.settings.bodyBg,
        flex: 1
      }}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={[styles.flexOne, {
              marginTop: 50,
              marginHorizontal: 40,
              justifyContent: 'space-around'
            }]}>
              <Square />
              <Cirlce />
              <Oval />
              <TriangleUP />
              <TriangleDown />
              <TriangleLeft />
              <TriangleRight />
              {/* <Heart /> */}
              <TvScreen />
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
