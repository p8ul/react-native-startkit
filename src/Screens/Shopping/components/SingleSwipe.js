import React, { Component } from 'react';
import {
  Text, View, Image, Dimensions, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    // color: 'white',
    fontWeight: 'bold'
  },
  titleWrapper: {
    position: 'absolute',
    width: width / 2,
    bottom: 12,
    left: 22
  }
});

export class SingleSwipe extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    imageUri: PropTypes.number
  }

  render() {
    return (
      <View style={{
        backgroundColor: this.props.settings.cardBgLight,
        flexDirection: 'row',
        height: height / 2.5,
        // alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignContent: 'center',
        borderRadius: 6,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'white',
        shadowOpacity: 0.2,
        elevation: 2,
      }}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          borderRadius: 7,
          overflow: 'hidden',
          alignItems: 'center'
        }}>
          <Image
            source={this.props.imageUri}
            style={{
              // flex: 1,
              height: height / 2.5,
              width: width / 1,
              padding: 10,
              margin: 10
            }}/>

        </View>
        <View style={styles.titleWrapper}>
          <Text style={[
            styles.title, { color: this.props.settings.primaryBg }
          ]}>ONE TOUCH TO BUY</Text>
        </View>
      </View>
    );
  }
}

export default SingleSwipe;
